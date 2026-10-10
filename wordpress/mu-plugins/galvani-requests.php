<?php
/**
 * Plugin Name: Galvani Studio — Solicitações
 * Description: Armazena solicitações privadas e envia notificações por SMTP.
 */
if (!defined('ABSPATH')) { exit; }

function galvani_requests_table() {
    global $wpdb;
    return $wpdb->prefix . 'galvani_requests';
}

add_action('init', function () {
    if (!is_blog_installed()) { return; }
    if (get_option('galvani_requests_version') !== '1') {
        global $wpdb;
        require_once ABSPATH . 'wp-admin/includes/upgrade.php';
        $table = galvani_requests_table();
        dbDelta("CREATE TABLE $table (
            id bigint(20) unsigned NOT NULL AUTO_INCREMENT,
            request_key varchar(64) NOT NULL,
            name varchar(120) NOT NULL,
            company varchar(160) NOT NULL,
            contact varchar(254) NOT NULL,
            email varchar(254) NOT NULL DEFAULT '',
            phone varchar(30) NOT NULL DEFAULT '',
            service varchar(120) NOT NULL,
            message text NOT NULL,
            created_at datetime NOT NULL,
            updated_at datetime NOT NULL,
            mail_status varchar(20) NOT NULL DEFAULT 'pending',
            mail_attempts int unsigned NOT NULL DEFAULT 0,
            PRIMARY KEY  (id),
            UNIQUE KEY request_key (request_key),
            KEY mail_queue (mail_status,mail_attempts)
        ) " . $wpdb->get_charset_collate() . ';');
        if ($wpdb->get_var($wpdb->prepare('SHOW TABLES LIKE %s', $wpdb->esc_like($table))) === $table) {
            update_option('galvani_requests_version', '1', false);
        }
    }
    if (!wp_next_scheduled('galvani_retry_mail')) {
        wp_schedule_event(time() + 300, 'hourly', 'galvani_retry_mail');
    }
});

add_filter('wp_mail_from', function ($address) {
    return getenv('GALVANI_MAIL_FROM') ?: $address;
});
add_filter('wp_mail_from_name', function ($name) {
    return 'Galvani Studio';
});
add_action('phpmailer_init', function ($mailer) {
    $host = getenv('GALVANI_SMTP_HOST');
    if (!$host) { return; }
    $mailer->isSMTP();
    $mailer->Host = $host;
    $mailer->Port = (int) (getenv('GALVANI_SMTP_PORT') ?: 587);
    $security = getenv('GALVANI_SMTP_SECURITY') ?: 'tls';
    $mailer->SMTPSecure = $security === 'none' ? '' : $security;
    $mailer->SMTPAutoTLS = $security !== 'none';
    $mailer->SMTPAuth = (bool) getenv('GALVANI_SMTP_USER');
    $mailer->Username = getenv('GALVANI_SMTP_USER') ?: '';
    $mailer->Password = getenv('GALVANI_SMTP_PASSWORD') ?: '';
    $mailer->Timeout = 5;
});

function galvani_notify_request($id) {
    global $wpdb;
    $table = galvani_requests_table();
    // Claim atomically so a browser retry and cron cannot send concurrently.
    $claimed = $wpdb->query($wpdb->prepare("UPDATE $table SET mail_status='sending', mail_attempts=mail_attempts+1, updated_at=%s WHERE id=%d AND mail_status IN ('pending','failed') AND mail_attempts<5", current_time('mysql', true), $id));
    if (!$claimed) { return; }
    $row = $wpdb->get_row($wpdb->prepare("SELECT * FROM $table WHERE id=%d", $id));
    $recipient = getenv('GALVANI_NOTIFY_EMAIL') ?: get_option('admin_email');
    $body = "Solicitação #{$row->id}\n\nNome: {$row->name}\nEmpresa: {$row->company}\nContato: {$row->contact}\nE-mail: {$row->email}\nTelefone: {$row->phone}\nServiço: {$row->service}\n\n{$row->message}\n\nRecebida em: {$row->created_at} UTC";
    $headers = array('Content-Type: text/plain; charset=UTF-8');
    if (is_email($row->email)) { $headers[] = 'Reply-To: ' . $row->email; }
    try {
        $sent = is_email($recipient) && wp_mail($recipient, 'Galvani Studio — solicitação #' . $row->id, $body, $headers);
    } catch (Throwable $error) {
        $sent = false;
    }
    $wpdb->update($table, array('mail_status' => $sent ? 'sent' : 'failed', 'updated_at' => current_time('mysql', true)), array('id' => $id));
}

add_action('galvani_retry_mail', function () {
    global $wpdb;
    $table = galvani_requests_table();
    // Recover an interrupted PHP process; SMTP acceptance does not confirm delivery.
    $wpdb->query($wpdb->prepare("UPDATE $table SET mail_status='failed' WHERE mail_status='sending' AND updated_at<%s", gmdate('Y-m-d H:i:s', time() - 600)));
    $ids = $wpdb->get_col("SELECT id FROM $table WHERE mail_status IN ('pending','failed') AND mail_attempts<5 ORDER BY id LIMIT 10");
    foreach ($ids as $id) { galvani_notify_request((int) $id); }
});

function galvani_validate_request($input) {
    if (!is_array($input)) { return new WP_Error('invalid', 'Solicitação inválida.', array('status' => 400)); }
    $limits = array('name' => array(2,120), 'company' => array(2,160), 'contact' => array(1,254), 'message' => array(10,5000));
    $data = array();
    foreach ($limits as $key => $range) {
        if (!isset($input[$key]) || !is_string($input[$key])) { return new WP_Error('invalid', 'Revise os campos obrigatórios.', array('status' => 422)); }
        $value = trim($input[$key]);
        $length = mb_strlen($value);
        if ($length < $range[0] || $length > $range[1]) { return new WP_Error('invalid', 'Revise o tamanho dos campos.', array('status' => 422)); }
        $data[$key] = $key === 'message' ? sanitize_textarea_field($value) : sanitize_text_field($value);
    }
    $email = is_email($data['contact']);
    $digits = preg_replace('/\D/', '', $data['contact']);
    if (!$email && (!preg_match('/^[+()\d\s.-]+$/', $data['contact']) || strlen($digits) < 10 || strlen($digits) > 15)) {
        return new WP_Error('invalid', 'Informe um e-mail ou WhatsApp com DDD válido.', array('status' => 422));
    }
    $data['email'] = $email ? $data['contact'] : '';
    $data['phone'] = $email ? '' : $data['contact'];
    foreach (array('email' => 254, 'phone' => 30, 'service' => 120) as $key => $max) {
        if (isset($input[$key]) && (!is_string($input[$key]) || mb_strlen($input[$key]) > $max)) {
            return new WP_Error('invalid', 'Campo inválido.', array('status' => 422));
        }
    }
    if (!$email && !empty($input['email'])) {
        if (!is_email($input['email'])) { return new WP_Error('invalid', 'E-mail inválido.', array('status' => 422)); }
        $data['email'] = sanitize_email($input['email']);
    }
    if ($email && !empty($input['phone'])) {
        $phone_digits = preg_replace('/\D/', '', $input['phone']);
        if (!preg_match('/^[+()\d\s.-]+$/', $input['phone']) || strlen($phone_digits) < 10 || strlen($phone_digits) > 15) {
            return new WP_Error('invalid', 'Telefone inválido.', array('status' => 422));
        }
        $data['phone'] = sanitize_text_field($input['phone']);
    }
    $data['service'] = 'Outro';
    if (!empty($input['service'])) { $data['service'] = sanitize_text_field($input['service']); }
    if (isset($input['requestId']) && is_string($input['requestId']) && preg_match('/^[a-f0-9-]{36}$/i', $input['requestId'])) {
        $data['request_key'] = strtolower($input['requestId']);
    } else {
        return new WP_Error('invalid', 'Identificador inválido.', array('status' => 422));
    }
    return $data;
}

function galvani_store_request($input, $source) {
    global $wpdb;
    $data = galvani_validate_request($input);
    if (is_wp_error($data)) { return $data; }
    $table = galvani_requests_table();
    $existing = $wpdb->get_row($wpdb->prepare("SELECT * FROM $table WHERE request_key=%s", $data['request_key']));
    if ($existing) {
        foreach ($data as $key => $value) {
            if ($existing->$key !== $value) { return new WP_Error('conflict', 'Identificador já utilizado.', array('status' => 409)); }
        }
        return array('ok' => true);
    }
    $rate_key = 'galvani_rate_' . hash_hmac('sha256', $source, wp_salt());
    $count = (int) get_transient($rate_key);
    if ($count >= 5) { return new WP_Error('limit', 'Aguarde alguns minutos antes de enviar novamente.', array('status' => 429)); }
    set_transient($rate_key, $count + 1, 10 * MINUTE_IN_SECONDS);
    $data['created_at'] = current_time('mysql', true);
    $data['updated_at'] = $data['created_at'];
    $wpdb->suppress_errors(true);
    $inserted = $wpdb->insert($table, $data);
    $id = $wpdb->insert_id;
    $wpdb->suppress_errors(false);
    if (!$inserted) {
        $existing = $wpdb->get_row($wpdb->prepare("SELECT * FROM $table WHERE request_key=%s", $data['request_key']));
        if ($existing) {
            foreach ($data as $key => $value) {
                if (in_array($key, array('created_at','updated_at'), true)) { continue; }
                if ($existing->$key !== $value) { return new WP_Error('conflict', 'Identificador já utilizado.', array('status' => 409)); }
            }
            return array('ok' => true);
        }
        return new WP_Error('storage', 'Não foi possível salvar. Tente novamente.', array('status' => 503));
    }
    galvani_notify_request($id);
    return array('ok' => true);
}

add_action('rest_api_init', function () {
    register_rest_route('galvani/v1', '/requests', array(
        'methods' => 'POST',
        'permission_callback' => function ($request) {
            $secret = getenv('GALVANI_API_TOKEN');
            if (!$secret || !hash_equals('Bearer ' . $secret, (string) $request->get_header('authorization'))) {
                return new WP_Error('forbidden', 'Acesso negado.', array('status' => 403));
            }
            return true;
        },
        'callback' => function ($request) {
            if (strlen($request->get_body()) > 24000) { return new WP_Error('size', 'Solicitação muito extensa.', array('status' => 413)); }
            return galvani_store_request($request->get_json_params(), $request->get_header('x-galvani-client') ?: ($_SERVER['REMOTE_ADDR'] ?? 'unknown'));
        },
    ));
});

add_action('admin_menu', function () {
    add_menu_page('Solicitações', 'Solicitações', 'manage_options', 'galvani-requests', 'galvani_requests_admin', 'dashicons-email-alt', 26);
});

function galvani_requests_admin() {
    if (!current_user_can('manage_options')) { return; }
    global $wpdb;
    $table = galvani_requests_table();
    $page = max(1, absint($_GET['paged'] ?? 1));
    $rows = $wpdb->get_results($wpdb->prepare("SELECT * FROM $table ORDER BY id DESC LIMIT 20 OFFSET %d", ($page - 1) * 20));
    echo '<div class="wrap"><h1>Solicitações</h1><p>Mensagens salvas no banco. “Aceito pelo SMTP” indica a aceitação pelo serviço de envio; confira a caixa postal para confirmar a entrega.</p><table class="widefat striped"><thead><tr><th>Recebida (UTC)</th><th>Contato</th><th>Mensagem</th><th>E-mail</th></tr></thead><tbody>';
    $labels = array('sent' => 'Aceito pelo SMTP', 'failed' => 'Falhou', 'pending' => 'Pendente', 'sending' => 'Enviando');
    foreach ($rows as $row) {
        echo '<tr><td>#' . (int) $row->id . '<br>' . esc_html($row->created_at) . '</td><td><strong>' . esc_html($row->name) . '</strong><br>' . esc_html($row->company) . '<br>' . esc_html($row->contact) . '</td><td style="white-space:pre-wrap;max-width:600px">' . esc_html($row->message) . '</td><td>' . esc_html($labels[$row->mail_status] ?? $row->mail_status) . '<br>Tentativas: ' . (int) $row->mail_attempts . '</td></tr>';
    }
    echo '</tbody></table><p>';
    if ($page > 1) { echo '<a href="' . esc_url(add_query_arg('paged', $page - 1)) . '">← Anterior</a> '; }
    if (count($rows) === 20) { echo '<a href="' . esc_url(add_query_arg('paged', $page + 1)) . '">Próxima →</a>'; }
    echo '</p></div>';
}

add_shortcode('galvani_contact', function () {
    $status = isset($_GET['galvani_status']) && is_string($_GET['galvani_status']) ? sanitize_key($_GET['galvani_status']) : '';
    ob_start();
    ?>
    <?php if ($status === 'success'): ?><p role="status">Solicitação recebida! Entraremos em contato.</p><?php endif; ?>
    <?php if ($status === 'error'): ?><p role="alert">Não foi possível enviar. Revise os campos e tente novamente.</p><?php endif; ?>
    <form class="galvani-contact" action="<?php echo esc_url(admin_url('admin-post.php')); ?>" method="post">
        <input type="hidden" name="action" value="galvani_contact">
        <input type="hidden" name="requestId" value="<?php echo esc_attr(wp_generate_uuid4()); ?>">
        <?php wp_nonce_field('galvani_contact'); ?>
        <label>Nome <input name="name" autocomplete="name" required minlength="2" maxlength="120"></label>
        <label>Empresa <input name="company" autocomplete="organization" required minlength="2" maxlength="160"></label>
        <label>WhatsApp ou e-mail <input name="contact" required maxlength="254"></label>
        <label>Necessidade principal <textarea name="message" required minlength="10" maxlength="5000" rows="6"></textarea></label>
        <div hidden><label>Website <input name="website" tabindex="-1" autocomplete="off"></label></div>
        <p>Usamos seus dados para responder à solicitação.</p>
        <button class="button" type="submit">Solicitar minha solução</button>
    </form>
    <?php
    return ob_get_clean();
});

function galvani_contact_submit() {
    if (!isset($_POST['_wpnonce']) || !is_string($_POST['_wpnonce']) || !wp_verify_nonce(sanitize_text_field(wp_unslash($_POST['_wpnonce'])), 'galvani_contact')) { wp_die('Solicitação inválida.', '', array('response' => 403)); }
    $result = !empty($_POST['website']) ? array('ok' => true) : galvani_store_request(wp_unslash($_POST), $_SERVER['REMOTE_ADDR'] ?? 'unknown');
    if (is_wp_error($result)) {
        // Keep submitted values visible so validation/storage failures do not lose the draft.
        $fields = array('name' => 'Nome', 'company' => 'Empresa', 'contact' => 'WhatsApp ou e-mail', 'message' => 'Necessidade principal');
        $html = '<p>' . esc_html($result->get_error_message()) . '</p><form method="post" action="' . esc_url(admin_url('admin-post.php')) . '"><input type="hidden" name="action" value="galvani_contact">';
        $html .= wp_nonce_field('galvani_contact', '_wpnonce', true, false);
        $html .= '<input type="hidden" name="requestId" value="' . esc_attr(is_string($_POST['requestId'] ?? null) ? wp_unslash($_POST['requestId']) : wp_generate_uuid4()) . '">';
        foreach ($fields as $key => $label) {
            $value = is_string($_POST[$key] ?? null) ? wp_unslash($_POST[$key]) : '';
            $html .= '<p><label>' . esc_html($label) . '<br><textarea name="' . esc_attr($key) . '">' . esc_textarea($value) . '</textarea></label></p>';
        }
        $html .= '<button type="submit">Tentar novamente</button></form>';
        wp_die($html, 'Revise a solicitação', array('response' => 422));
    }
    wp_safe_redirect(add_query_arg('galvani_status', 'success', home_url('/contato/')));
    exit;
}
add_action('admin_post_nopriv_galvani_contact', 'galvani_contact_submit');
add_action('admin_post_galvani_contact', 'galvani_contact_submit');
