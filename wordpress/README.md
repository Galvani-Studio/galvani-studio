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

Os dados iniciais estão em `setup-content.php`. Projetos são editados em **Portfólio** e páginas em **Páginas**. O contato inicial usa e-mail e redes sociais; nenhum formulário depende do endpoint Next.js. Para adicionar um formulário WordPress, configure um plugin de formulário e entrega de e-mail na instalação antes de publicar.

## Estado da instalação local

Foram encontrados arquivos em `/home/Luis77/projetos-meus/wordpress/wordpress`, mas não havia `wp-config.php` no momento da inspeção. O tema está preparado neste repositório; não foi instalado ou ativado. É necessário um WordPress configurado com PHP e banco de dados. O tema não é executado pela Vercel do projeto Next.js.
