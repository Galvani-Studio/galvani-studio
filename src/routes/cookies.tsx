import { createFileRoute } from "@tanstack/react-router";
import { LegalDoc, type DocSection } from "@/components/site/LegalDoc";

const SECTIONS: DocSection[] = [
  {
    id: "o-que-sao",
    label: "1. O que são Cookies",
    title: "1. O que são Cookies?",
    blocks: [
      {
        type: "p",
        text: "Cookies são pequenos arquivos de texto armazenados no seu dispositivo (computador, celular ou tablet) pelo navegador quando você visita um site. Eles permitem que o site reconheça seu dispositivo em visitas futuras, lembre suas preferências e melhore sua experiência de navegação.",
      },
      {
        type: "p",
        text: "Além dos cookies tradicionais, podemos utilizar tecnologias similares como localStorage, sessionStorage e pixels de rastreamento para finalidades semelhantes. Neste documento, o termo \u201ccookies\u201d abrange todas essas tecnologias.",
      },
    ],
  },
  {
    id: "por-que",
    label: "2. Por que Utilizamos",
    title: "2. Por que Utilizamos Cookies?",
    blocks: [
      {
        type: "ul",
        items: [
          "Garantir o funcionamento correto e seguro do site (cookies essenciais)",
          "Lembrar suas preferências e configurações",
          "Analisar como os visitantes interagem com o site para melhorá-lo continuamente",
          "Entender quais páginas e conteúdos são mais relevantes para nosso público",
          "Preparar a infraestrutura para futuras campanhas de marketing (quando implementadas)",
        ],
      },
    ],
  },
  {
    id: "tipos",
    label: "3. Tipos de Cookies",
    title: "3. Tipos de Cookies que Podemos Utilizar",
    blocks: [
      { type: "h3", text: "Cookies Essenciais (Obrigatórios)" },
      {
        type: "p",
        text: "Necessários para o funcionamento básico do site. Não podem ser desativados pois sem eles o site não funciona corretamente. Não coletam informações pessoais identificáveis e não requerem consentimento.",
      },
      { type: "h3", text: "Cookies de Desempenho (Opcionais)" },
      {
        type: "p",
        text: "Coletam informações sobre como os visitantes utilizam o site — quais páginas visitam, quais links clicam, quanto tempo permanecem. As informações são agregadas e anônimas. Nos ajudam a identificar melhorias.",
      },
      { type: "h3", text: "Cookies Analíticos (Opcionais)" },
      {
        type: "p",
        text: "Utilizados para medir o desempenho do site, origem do tráfego e comportamento de navegação. Poderemos utilizar ferramentas como Google Analytics no futuro. Quando implementado, será adicionado apenas após seu consentimento.",
      },
      { type: "h3", text: "Cookies de Funcionalidade (Opcionais)" },
      {
        type: "p",
        text: "Permitem que o site lembre suas preferências e configurações para oferecer uma experiência mais personalizada nas visitas seguintes.",
      },
      { type: "h3", text: "Cookies de Marketing (Opcionais)" },
      {
        type: "p",
        text: "Utilizados para exibir anúncios relevantes e medir a efetividade de campanhas. Poderemos integrar futuramente ferramentas como Meta Pixel (Facebook/Instagram Ads) e Google Ads. Esses cookies somente serão ativados mediante consentimento explícito e esta política será atualizada antes de sua implementação.",
      },
    ],
  },
  {
    id: "utilizados",
    label: "4. Cookies que Utilizamos",
    title: "4. Cookies que Utilizamos Atualmente",
    blocks: [
      {
        type: "table",
        head: ["Nome", "Tipo", "Finalidade", "Duração"],
        rows: [
          [
            "gs-cookie-consent",
            "Essencial",
            "Registra as preferências de consentimento de cookies do usuário para evitar exibir o banner repetidamente.",
            "12 meses",
          ],
        ],
      },
      {
        type: "p",
        text: "Esta tabela será atualizada sempre que novos cookies forem implementados, antes de sua ativação.",
      },
    ],
  },
  {
    id: "consentimento",
    label: "5. Consentimento",
    title: "5. Consentimento e Banner de Cookies",
    blocks: [
      {
        type: "p",
        text: "Em conformidade com a LGPD, cookies não essenciais somente são ativados após seu consentimento expresso. Ao acessar nosso site pela primeira vez, você verá um banner com as opções de aceitar, recusar ou personalizar suas preferências.",
      },
      {
        type: "p",
        text: "Ao clicar em \u201cAceitar todos\u201d, você consente com o uso de todos os cookies. Ao clicar em \u201cRecusar opcionais\u201d, apenas os cookies essenciais serão utilizados. Ao clicar em \u201cPersonalizar\u201d, você poderá selecionar quais categorias aceita individualmente.",
      },
      {
        type: "p",
        text: "Você pode revogar seu consentimento a qualquer momento limpando os cookies do seu navegador ou nos contatando.",
      },
    ],
  },
  {
    id: "gerenciar",
    label: "6. Como Gerenciar",
    title: "6. Como Gerenciar os Cookies no Navegador",
    blocks: [
      {
        type: "p",
        text: "Além das opções do nosso banner, você pode gerenciar e excluir cookies diretamente pelo seu navegador:",
      },
      {
        type: "ul",
        items: [
          "Google Chrome: Configurações → Privacidade e segurança → Cookies e outros dados do site",
          "Mozilla Firefox: Opções → Privacidade e Segurança → Cookies e dados do site",
          "Safari: Preferências → Privacidade → Gerenciar Dados do Site",
          "Microsoft Edge: Configurações → Privacidade, pesquisa e serviços → Cookies",
        ],
      },
      {
        type: "p",
        text: "Atenção: desativar todos os cookies pode afetar o funcionamento de alguns recursos do site.",
      },
    ],
  },
  {
    id: "terceiros",
    label: "7. Cookies de Terceiros",
    title: "7. Cookies de Terceiros",
    blocks: [
      {
        type: "p",
        text: "Atualmente, o nosso site não carrega cookies de terceiros sem seu consentimento. No futuro, caso integremos ferramentas como Google Analytics, Meta Pixel ou plataformas de suporte, estas serão carregadas somente após o consentimento explícito do usuário e estarão listadas nesta Política.",
      },
      {
        type: "p",
        text: "Cada ferramenta de terceiros possui sua própria política de privacidade. Sempre que implementarmos uma nova integração, informaremos aqui e no banner de consentimento.",
      },
    ],
  },
  {
    id: "alteracoes",
    label: "8. Alterações",
    title: "8. Alterações nesta Política",
    blocks: [
      {
        type: "p",
        text: "Esta Política de Cookies pode ser atualizada sempre que implementarmos novas tecnologias, cookies ou integrações. Atualizaremos a data de \u201cúltima atualização\u201d e, quando relevante, solicitaremos novo consentimento.",
      },
    ],
  },
  {
    id: "contato",
    label: "9. Contato",
    title: "9. Contato",
    blocks: [
      { type: "p", text: "Dúvidas sobre nossa Política de Cookies? Entre em contato:" },
      {
        type: "contact",
        lines: [
          "Galvani Studio — Encarregado de Dados (DPO)",
          "E-mail: galvanistudio1@gmail.com",
        ],
      },
    ],
  },
];

export const Route = createFileRoute("/cookies")({
  head: () => ({
    meta: [
      { title: "Política de Cookies — Galvani Studio" },
      {
        name: "description",
        content:
          "Política de Cookies da Galvani Studio — o que são cookies, quais utilizamos e como gerenciar suas preferências.",
      },
      { property: "og:title", content: "Política de Cookies — Galvani Studio" },
      { property: "og:url", content: "/cookies" },
    ],
    links: [{ rel: "canonical", href: "/cookies" }],
  }),
  component: Cookies,
});

function Cookies() {
  return (
    <LegalDoc
      title="Política de Cookies"
      meta="Última atualização: 28 de junho de 2026 · Versão 1.0"
      intro="Esta Política de Cookies explica o que são cookies, quais utilizamos no nosso site, por que os utilizamos e como você pode controlar suas preferências. Cookies opcionais nunca são carregados antes do seu consentimento expresso."
      sections={SECTIONS}
    />
  );
}
