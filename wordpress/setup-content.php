<?php
/** Run only with: wp eval-file /absolute/path/wordpress/setup-content.php */
if (!defined('WP_CLI') || !WP_CLI) { exit; }
if (!post_type_exists('projeto')) { WP_CLI::error('Ative o tema galvani-studio antes de importar.'); }
$pages = array(
    'inicio' => array('Início', ''),
    'servicos' => array('Serviços', '<h2>Sites institucionais</h2><p>Apresentação da empresa, dos serviços e dos canais de atendimento. Estrutura responsiva e organização de conteúdo.</p><h2>WordPress</h2><p>Páginas e portfólio administrados pela sua equipe no painel. Identidade visual, estrutura de navegação e orientação para atualizar o conteúdo.</p><h2>Landing pages</h2><p>Páginas dedicadas a uma oferta, com informações objetivas e acesso ao contato comercial.</p><h2>Sistemas web</h2><p>Ferramentas e integrações conforme os processos da sua equipe. Funcionalidades, prazo e manutenção definidos no escopo.</p><p><a href="' . esc_url(home_url('/contato/')) . '">Conversar sobre um projeto →</a></p>'),
    'studio' => array('O Studio', '<h2>Design e desenvolvimento com acompanhamento próximo.</h2><p>A Galvani Studio constrói sites e sistemas para empresas que precisam apresentar seus serviços e organizar a operação digital.</p><h2>01. Entender</h2><p>Uma conversa sobre o negócio, os objetivos e os materiais disponíveis.</p><h2>02. Desenhar e desenvolver</h2><p>Organizamos conteúdo e navegação, definimos o visual e desenvolvemos a solução. As etapas são apresentadas para aprovação.</p><h2>03. Entregar e acompanhar</h2><p>Validamos o projeto, publicamos e orientamos sua equipe. Manutenção e evolução são acordadas na proposta.</p>'),
    'contato' => array('Contato', '<h2>Conte sobre seu projeto.</h2><p>Informe o nome da empresa, o que deseja construir e se já possui um site ou uma instalação WordPress. Você pode incluir uma referência visual e o prazo desejado.</p><p><a href="mailto:galvanistudio1@gmail.com">Enviar mensagem: galvanistudio1@gmail.com ↗</a></p><p><a href="https://www.instagram.com/galvani_studio/">Instagram ↗</a> · <a href="https://www.linkedin.com/company/galvani-studio/">LinkedIn ↗</a></p>'),
);
$home = 0;
foreach ($pages as $slug => $data) {
    $existing = get_page_by_path($slug);
    $id = $existing ? $existing->ID : wp_insert_post(array('post_type'=>'page','post_status'=>'publish','post_name'=>$slug,'post_title'=>$data[0],'post_content'=>$data[1]), true);
    if (is_wp_error($id)) { WP_CLI::error($id->get_error_message()); }
    if ($slug === 'inicio') { $home = $id; }
}
$projects = array(
    'solucoes-vieira' => array('Soluções Vieira', 'Agronegócio / Landing page. Serviços de instalação e manutenção de pivôs centrais.', '<h2>Contexto</h2><p>Apresentação dos serviços técnicos e acesso aos canais de contato comercial.</p><h2>Entregas apresentadas</h2><ul><li>Apresentação dos serviços técnicos</li><li>Organização das informações comerciais</li><li>Navegação adaptada para celulares</li><li>Canais de contato</li></ul><p><a href="https://solucoes-vieira-landingpage.vercel.app/" target="_blank" rel="noopener noreferrer">Visitar site publicado ↗</a></p>'),
    'thais-bianca' => array('Thaís Bianca', 'Advocacia / Site institucional. Apresentação profissional e canais de atendimento.', '<h2>Contexto</h2><p>Uma presença institucional para apresentar a profissional, suas áreas de atuação e os canais de atendimento do escritório.</p><h2>Entregas apresentadas</h2><ul><li>Apresentação profissional</li><li>Conteúdo sobre as áreas de atuação</li><li>Estrutura institucional responsiva</li><li>Canais de atendimento</li></ul><p><a href="https://thaisbianca.vercel.app/" target="_blank" rel="noopener noreferrer">Visitar site publicado ↗</a></p>'),
);
require_once ABSPATH . 'wp-admin/includes/image.php';
require_once ABSPATH . 'wp-admin/includes/file.php';
require_once ABSPATH . 'wp-admin/includes/media.php';
foreach ($projects as $slug => $data) {
    if (get_page_by_path($slug, OBJECT, 'projeto')) { continue; }
    $id = wp_insert_post(array('post_type'=>'projeto','post_status'=>'publish','post_name'=>$slug,'post_title'=>$data[0],'post_excerpt'=>$data[1],'post_content'=>$data[2]), true);
    if (is_wp_error($id)) { WP_CLI::error($id->get_error_message()); }
    $source = get_theme_file_path('/assets/' . $slug . '.png');
    $temp = wp_tempnam($source);
    if ($temp && copy($source, $temp)) {
        $attachment = media_handle_sideload(array('name'=>$slug . '.png','tmp_name'=>$temp), $id);
        if (!is_wp_error($attachment)) { set_post_thumbnail($id, $attachment); }
        else { wp_delete_file($temp); WP_CLI::warning($attachment->get_error_message()); }
    }
}
update_option('show_on_front', 'page');
update_option('page_on_front', $home);
flush_rewrite_rules();
WP_CLI::success('Páginas e portfólio preparados. Conteúdo existente preservado.');
