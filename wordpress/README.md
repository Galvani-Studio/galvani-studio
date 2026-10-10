# Galvani Studio — WordPress

Tema nativo em azul, cinza claro e branco. Páginas internas editáveis no editor do WordPress e portfólio com cadastro de projetos, imagem destacada, resumo e conteúdo completo. A página inicial usa um layout próprio e também permite conteúdo adicional pelo editor.

## Instalação

1. Faça backup da instalação e do banco antes de trocar o tema.
2. Envie a pasta `galvani-studio` para `wp-content/themes/` ou compacte essa pasta em ZIP e instale em **Aparência → Temas → Adicionar tema**.
3. Ative **Galvani Studio**.
4. Se houver WP-CLI, execute no diretório da instalação: `wp eval-file /caminho/absoluto/wordpress/setup-content.php`. O script cria as páginas e os dois projetos reais quando ainda não existem, importa as imagens e define Início como página inicial. Não substitui conteúdos existentes. Altera a página inicial da instalação.
5. Sem WP-CLI, crie Início, Serviços, O Studio e Contato pelo painel. Defina Início em **Configurações → Leitura**. Cadastre os projetos em **Portfólio** e salve **Configurações → Links permanentes**.
6. Configure um menu principal com Início, Serviços, Portfólio (`/portfolio/`), O Studio e Contato. Há um menu padrão enquanto o menu personalizado não for definido.

## Conteúdo e contato

Os dados iniciais estão em `setup-content.php`. Projetos são editados em **Portfólio** e páginas em **Páginas**. O formulário nativo usa o shortcode `[galvani_contact]`. O tema também o exibe automaticamente na página Contato se o shortcode não estiver no conteúdo. As solicitações ficam em uma tabela privada (`wp_galvani_requests`) e aparecem em **Solicitações**, disponível apenas para administradores. O plugin em `mu-plugins/galvani-requests.php` permanece ativo mesmo ao trocar o tema.

## Banco e instalação local

O Compose usa os arquivos existentes de `/home/Luis77/projetos-meus/wordpress/wordpress`, cria `wp-config.php` e conecta um banco MariaDB exclusivo, chamado `galvani_studio`. O banco permanece no volume Docker `galvani-studio_database`, e as imagens no volume `galvani-studio_uploads`. Não remova esses volumes sem backup. O banco não expõe uma porta ao computador ou à internet.

Na raiz do repositório:

```sh
# Copie .env.example somente se wordpress/.env ainda não existir.
# Preencha os quatro segredos com valores diferentes e aleatórios.
docker compose --env-file wordpress/.env -f wordpress/compose.yaml up -d
sh wordpress/bootstrap.sh
npm run dev
```

O bootstrap cria o administrador `galvani_admin` somente na primeira instalação. A senha fica em `WP_ADMIN_PASSWORD` de `wordpress/.env`. Os arquivos `.env` são ignorados pelo Git; não publique suas credenciais.

- WordPress e painel: http://localhost:8085/wp-admin/
- Caixa de testes: http://localhost:8025
- Tema e plugin ficam montados diretamente deste repositório.

## Integração com o site Next.js

Configure `.env.local` com `QUOTE_WEBHOOK_URL=http://127.0.0.1:8085/?rest_route=/galvani/v1/requests` e `QUOTE_WEBHOOK_TOKEN` igual a `GALVANI_API_TOKEN` do WordPress. Reinicie o servidor Next.js depois de mudar variáveis. O segredo é usado somente pelo servidor; o navegador envia para `/api/quote`. O endpoint do WordPress exige esse segredo e não oferece leitura pública dos registros.

Cada envio tem um UUID para evitar duplicação ao repetir uma tentativa. O formulário valida os campos, tem um campo de armadilha para robôs e limita envios por origem. O WordPress salva antes de notificar: uma falha de SMTP mantém a solicitação no painel. A fila tenta novamente a cada hora, até cinco tentativas. O WP-Cron depende de acessos; em produção configure um agendamento regular de `wp cron event run --due-now`. Mensagens aceitas pelo SMTP ainda podem ser rejeitadas pelo destino.

## E-mail real e publicação

A configuração local usa **Mailpit**, que captura os e-mails para testes e **não os entrega ao Gmail**. O destinatário inicial é `galvanistudio1@gmail.com`, já usado no site. Para enviar de verdade, preencha `GALVANI_SMTP_HOST`, `GALVANI_SMTP_PORT`, `GALVANI_SMTP_SECURITY` (`tls` ou `ssl`), `GALVANI_SMTP_USER`, `GALVANI_SMTP_PASSWORD` e `GALVANI_MAIL_FROM` com os dados do seu provedor. Use um remetente autorizado pelo provedor. Configure o destinatário em `GALVANI_NOTIFY_EMAIL`.

Recrie o serviço depois de mudar o SMTP:

```sh
docker compose --env-file wordpress/.env -f wordpress/compose.yaml up -d wordpress
```

Este ambiente está vinculado somente a `127.0.0.1`. Para o site publicado receber formulários, hospede o WordPress e seu banco em um servidor acessível por HTTPS e configure as variáveis do Next.js nesse ambiente. A Vercel não executa o WordPress nem alcança este banco local. Na hospedagem WordPress, copie o tema para `wp-content/themes/` e o arquivo do plugin para `wp-content/mu-plugins/`; configure as variáveis de ambiente no servidor.

O link `mailto:` abre o aplicativo de e-mail do visitante. E-mails enviados diretamente por esse caminho chegam à caixa postal e não entram automaticamente no banco. Importar esses e-mails exigiria integração adicional com a caixa de entrada.

## Verificação

Com os serviços e o Next.js em desenvolvimento ativos:

```sh
python3 scripts/test_contact.py --site http://localhost:3000
```

O teste verifica armazenamento, proteção do endpoint, idempotência, e-mail capturado e recuperação após falha de SMTP. Apaga apenas os registros e mensagens que ele mesmo criou.
