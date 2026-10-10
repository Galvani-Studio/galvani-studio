"""Integration checks against the local WordPress, Next.js and Mailpit services."""
import argparse
import json
from pathlib import Path
import re
import subprocess
import urllib.error
import urllib.parse
import urllib.request
import uuid

ROOT = Path(__file__).resolve().parents[1]
COMPOSE = ["docker", "compose", "--env-file", "wordpress/.env", "-f", "wordpress/compose.yaml"]


def php(code):
    program = "<?php $_SERVER['HTTP_HOST']='localhost:8085'; require '/var/www/html/wp-load.php'; " + code
    result = subprocess.run(COMPOSE + ["exec", "-T", "wordpress", "php"], input=program, text=True, capture_output=True, cwd=ROOT, check=True)
    return json.loads(result.stdout)


def request(url, data=None, headers=None, method=None):
    body = json.dumps(data).encode() if data is not None else None
    req = urllib.request.Request(url, data=body, headers={"Content-Type": "application/json", **(headers or {})}, method=method)
    try:
        with urllib.request.urlopen(req, timeout=20) as response:
            content = response.read().decode()
            try:
                parsed = json.loads(content) if content else None
            except json.JSONDecodeError:
                parsed = content
            return response.status, parsed
    except urllib.error.HTTPError as error:
        return error.code, json.loads(error.read())


def row(key):
    return php("global $wpdb; $t=galvani_requests_table(); echo json_encode($wpdb->get_row($wpdb->prepare(\"SELECT * FROM $t WHERE request_key=%s\", '" + key + "')));")


def run(site):
    config = dict(line.split("=", 1) for line in (ROOT / "wordpress/.env").read_text().splitlines() if line and not line.startswith("#") and "=" in line)
    if config.get("GALVANI_SMTP_HOST", "mailpit") != "mailpit":
        raise RuntimeError("Este teste exige Mailpit para evitar envio de e-mails reais.")
    endpoint = "http://localhost:8085/?rest_route=/galvani/v1/requests"
    keys = [str(uuid.uuid4()) for _ in range(9)]
    source = "test-" + keys[0]
    payload = {"name": "Teste de integração", "company": "Empresa de teste", "contact": "contato@example.com", "message": "Preciso de um site institucional. Teste automático.", "requestId": keys[0]}
    headers = {"Origin": site, "X-Forwarded-For": source}
    auth = {"Authorization": "Bearer " + config["GALVANI_API_TOKEN"], "X-Galvani-Client": source}
    message_ids = []
    try:
        assert request(endpoint, payload)[0] == 403, "Endpoint precisa exigir token"
        assert request(endpoint, method="GET")[0] == 404, "Registros não podem ser lidos pela API pública"
        assert request(site + "/api/quote", payload, {"Origin": "https://invalid.example"})[0] == 403
        assert request(site + "/api/quote", {**payload, "contact": "inválido"}, headers)[0] == 422
        assert request(site + "/api/quote", {**payload, "message": "x" * 25000}, headers)[0] == 413
        assert request(site + "/api/quote", payload, headers) == (200, {"ok": True})
        first = row(keys[0])
        assert first and first["mail_status"] == "sent" and str(first["mail_attempts"]) == "1", {k: first[k] for k in ("mail_status", "mail_attempts")}
        assert first["email"] == payload["contact"] and first["message"] == payload["message"]
        assert request(site + "/api/quote", payload, headers) == (200, {"ok": True})
        assert row(keys[0])["id"] == first["id"] and str(row(keys[0])["mail_attempts"]) == "1", "Reenvio duplicou a solicitação"
        assert request(endpoint, {**payload, "message": "Mensagem diferente com o mesmo identificador."}, auth)[0] == 409
        print("OK: validação, proteção do endpoint, gravação e idempotência")

        # Simulate failure only in this PHP process, leaving service configuration intact.
        failed_payload = json.dumps({**payload, "requestId": keys[1]})
        encoded_payload = json.dumps(failed_payload)
        code = "add_action('phpmailer_init',function($m){$m->Host='127.0.0.1';$m->Port=1;$m->Timeout=1;},999); $r=galvani_store_request(json_decode(" + encoded_payload + ",true),'" + source + "'); echo json_encode($r);"
        assert php(code) == {"ok": True}
        assert row(keys[1])["mail_status"] == "failed", "Falha de e-mail perdeu o registro"
        php("galvani_notify_request(" + row(keys[1])["id"] + "); echo json_encode(true);")
        assert row(keys[1])["mail_status"] == "sent" and str(row(keys[1])["mail_attempts"]) == "2"
        print("OK: falha de SMTP preserva os dados; nova tentativa envia a notificação")

        # Rate limit uses a dedicated test source; retries with the same UUID are exempt.
        for key in keys[2:5]:
            assert request(endpoint, {**payload, "requestId": key}, auth)[0] == 200
        assert request(endpoint, {**payload, "requestId": keys[5]}, auth)[0] == 429
        assert request(site + "/api/quote", {**payload, "requestId": keys[6], "website": "robot.example"}, headers)[0] == 200
        assert row(keys[6]) is None
        print("OK: limite de envios e armadilha para robôs")

        with urllib.request.urlopen("http://localhost:8085/contato/") as response:
            html = response.read().decode()
        nonce = re.search(r'name="_wpnonce" value="([a-z0-9]+)"', html).group(1)
        native = {**payload, "requestId": keys[7], "contact": "(11) 99999-9999", "action": "galvani_contact", "_wpnonce": nonce}
        form_request = urllib.request.Request("http://localhost:8085/wp-admin/admin-post.php", data=urllib.parse.urlencode(native).encode())
        with urllib.request.urlopen(form_request, timeout=20) as response:
            assert "Solicitação recebida!" in response.read().decode()
        native_row = row(keys[7])
        assert native_row["phone"] == native["contact"] and native_row["mail_status"] == "sent"
        bad_nonce = urllib.request.Request("http://localhost:8085/wp-admin/admin-post.php", data=urllib.parse.urlencode({**native, "_wpnonce": "invalid"}).encode())
        try:
            urllib.request.urlopen(bad_nonce, timeout=20)
            raise AssertionError("Formulário aceitou nonce inválido")
        except urllib.error.HTTPError as error:
            assert error.code == 403
        print("OK: formulário nativo grava WhatsApp e rejeita nonce inválido")

        expected_ids = {str(row(key)["id"]) for key in keys[:5] + [keys[7]]}
        _, mailbox = request("http://localhost:8025/api/v1/messages?limit=500")
        matched = [m for m in mailbox["messages"] if m["Subject"] in {"Galvani Studio — solicitação #" + value for value in expected_ids}]
        message_ids.extend(m["ID"] for m in matched)
        assert len(matched) == 6, "Quantidade incorreta de notificações"
        for message in matched:
            _, detail = request("http://localhost:8025/api/v1/message/" + message["ID"])
            assert payload["message"] in detail["Text"] and payload["company"] in detail["Text"]
            assert any(to["Address"] == config["GALVANI_NOTIFY_EMAIL"] for to in detail["To"])
        print("OK: notificações capturadas com mensagem e destinatário corretos")

    finally:
        # Delete only the UUIDs created by this test, including records left by failures.
        own_rows = [row(key) for key in keys]
        subjects = {"Galvani Studio — solicitação #" + str(item["id"]) for item in own_rows if item}
        _, mailbox = request("http://localhost:8025/api/v1/messages?limit=500")
        message_ids = [m["ID"] for m in mailbox["messages"] if m["Subject"] in subjects]
        encoded_keys = json.dumps(json.dumps(keys))
        php("global $wpdb; foreach(json_decode(" + encoded_keys + ",true) as $key){$wpdb->delete(galvani_requests_table(),array('request_key'=>$key));} delete_transient('galvani_rate_'.hash_hmac('sha256','" + source + "',wp_salt())); echo json_encode(true);")
        if message_ids:
            assert request("http://localhost:8025/api/v1/messages", {"IDs": message_ids}, method="DELETE")[0] == 200


if __name__ == "__main__":
    parser = argparse.ArgumentParser()
    parser.add_argument("--site", default="http://localhost:3000")
    args = parser.parse_args()
    run(args.site.rstrip("/"))
