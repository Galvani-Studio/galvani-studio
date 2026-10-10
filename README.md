# Galvani Studio

Base local em Next.js 15 (App Router), React 19, TypeScript, Tailwind CSS 4 e Framer Motion.

## Desenvolvimento

Use Node.js 20.9 ou superior:

```sh
npm install
npm run dev
npm run typecheck
npm run lint
npm run build
npm start
```

## Estrutura

```text
src/app/
  layout.tsx
  page.tsx
  globals.css
  not-found.tsx
  api/quote/route.ts
  privacy/page.tsx
  terms/page.tsx
  cookies/page.tsx
src/components/site/
  Reveal.tsx
  SiteNav.tsx
  SiteFooter.tsx
  Carousel.tsx
  Stagger.tsx
  sections/Plans.tsx
  sections/QuoteForm.tsx
src/lib/quote.ts
public/images/
```

Os componentes e textos existentes foram preservados na migração. O histórico Git permanece intacto conforme AGENTS.md. O script executado está em `/tmp/galvani-init.sh`; a cópia anterior à limpeza está em `/tmp/galvani-before-next-20261009-201108.tar.gz`. Copie esse backup para armazenamento permanente se necessário; `/tmp` é temporário.

## Recebimento de orçamentos

O formulário envia para `/api/quote`, que valida os campos com Zod e encaminha os dados para `https://formspree.io/f/xvkzrgnp`. Utiliza `QUOTE_WEBHOOK_URL` quando configurado; caso contrário, mantém esse Formspree como destino padrão. `QUOTE_WEBHOOK_TOKEN` é opcional para integração com um CRM próprio. O envio usa a API JSON oficial do Formspree; o SDK React não é necessário. A tentativa de instalar o SDK neste sandbox foi bloqueada por DNS.

O assunto do email inclui o serviço e o nome do cliente. O formulário oferece seis mensagens editáveis para site institucional, landing page, redesign, sistema/SaaS, automação e manutenção. Textos já digitados são preservados ao inserir uma sugestão.

O sucesso é exibido após a confirmação de recebimento pela API. Erros preservam os dados; limite de envios apresenta uma mensagem própria. O destinatário, a ativação e as regras de proteção contra abuso são gerenciados no painel do Formspree. O recebimento na caixa de email deve ser verificado com um envio real após o deploy; os testes locais usam serviço simulado.

## Estado de validação

Dependências instaladas. Typecheck aprovado, lint sem erros nem avisos e build de produção aprovado com Next.js 15.5.27, gerando os arquivos em `.next/`. As checagens de lint e TypeScript permanecem ativas durante o build. A API compilada passou em nove cenários simulados: JSON inválido, validação, origem, limite de tamanho, Formspree padrão, webhook configurável com autenticação, limite de envios, resposta de erro e falha de rede. Nenhuma mensagem real foi enviada nesses testes.

O novo layout alterna seções claras e escuras, com hero 3D ilustrativo, carrosséis acessíveis, planos e FAQ. Os breakpoints implementados atendem 320px, mobile, tablet e ultrawide. A validação visual e interativa completa permanece pendente: este sandbox bloqueia sockets locais e a inicialização do Chrome (`Operation not permitted`). Não foram medidos tempos reais de carregamento; < 1s é uma meta de projeto.

A árvore do plano anterior não estava disponível no contexto da execução; foi adotada a estrutura acima, mantendo os componentes existentes.

## Limpeza da estrutura

O App Router em `src/app/` é o único sistema de rotas. Os componentes UI genéricos, o hook mobile antigo e o utilitário de classes sem uso foram removidos. `public/`, os arquivos locais de ambiente e as configurações Next.js/PostCSS foram preservados. O ESLint reconhece os exports de metadata próprios do Next.js, mantendo as checagens ativas.
