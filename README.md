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
  sections/QuoteForm.tsx
src/components/ui/
src/lib/quote.ts
public/images/
```

Os componentes e textos existentes foram preservados na migração. O histórico Git permanece intacto conforme AGENTS.md. O script executado está em `/tmp/galvani-init.sh`; a cópia anterior à limpeza está em `/tmp/galvani-before-next-20261009-201108.tar.gz`. Copie esse backup para armazenamento permanente se necessário; `/tmp` é temporário.

## Recebimento de orçamentos

Copie `.env.example` para `.env.local` e configure `QUOTE_WEBHOOK_URL` com o endpoint HTTPS do CRM ou serviço de recebimento. Opcionalmente, configure `QUOTE_WEBHOOK_TOKEN` para autenticação Bearer. Os valores são usados apenas no servidor.

A API valida o mesmo schema Zod do cliente e só responde com sucesso após uma resposta 2xx do serviço. Esse serviço deve persistir ou entregar a solicitação antes de confirmar o recebimento. Sem configuração, a API retorna 503 e o formulário informa indisponibilidade, preservando os campos. Não há armazenamento local de leads nem envio automático de email.

Antes de exposição pública, configure proteção contra abuso e limitação de requisições na infraestrutura ou no serviço de recebimento.

## Estado de validação

Dependências instaladas. Typecheck aprovado, lint sem erros (8 avisos de Fast Refresh) e build de produção aprovado com Next.js 15.5.27, gerando os arquivos em `.next/`. As checagens de lint e TypeScript permanecem ativas durante o build. O schema passou em 9 cenários de dados válidos e inválidos. Preview visual permanece pendente.

A árvore do plano anterior não estava disponível no contexto da execução; foi adotada a estrutura acima, mantendo os componentes existentes.
