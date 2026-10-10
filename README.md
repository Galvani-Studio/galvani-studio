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
  CodeInterface.tsx
  sections/ExpandableServices.tsx
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

O layout alterna seções claras e escuras, com hero de código 3D ilustrativo, cinco serviços expansíveis e FAQ com controles ARIA. Carrosséis, cards de planos e componentes de processo anteriores foram removidos. Os breakpoints implementados atendem 320px, mobile, tablet e ultrawide. A validação visual e interativa completa permanece pendente: este sandbox bloqueia sockets locais e a inicialização do Chrome (`Operation not permitted`). Não foram medidos tempos reais de carregamento ou resultados comerciais dos cases. Os indicadores apresentados descrevem a implementação, sem inventar ganhos de receita ou conversão.

A hierarquia de títulos, os IDs, as referências ARIA, os textos alternativos e os metadados foram verificados no HTML do build. Treze pares de texto/fundo foram medidos; todos superaram 4,5:1 e o menor contraste foi 6,51:1. Isso não substitui uma auditoria completa de WCAG com navegador e tecnologias assistivas.

Os serviços respondem a clique, hover de mouse e teclas de direção/Home/End. Painéis recolhidos permanecem fora da navegação de foco. As animações respeitam movimento reduzido; o movimento automático da grade termina em quatro segundos.

## Limpeza da estrutura

O App Router em `src/app/` é o único sistema de rotas. Os componentes UI genéricos, o hook mobile antigo e o utilitário de classes sem uso foram removidos. Os ativos oficiais de marca em `public/images/`, os arquivos locais de ambiente e as configurações Next.js/PostCSS foram preservados. Robots e sitemap foram alinhados ao domínio `https://galvanistudio.com` usado nos metadados. O ESLint reconhece os exports de metadata próprios do Next.js, mantendo as checagens ativas.
