import { LegalDoc, type DocSection } from "@/components/site/LegalDoc";

const SECTIONS: DocSection[] = [
  {
    id: "objeto",
    label: "1. Objeto",
    title: "1. Objeto",
    blocks: [
      {
        type: "p",
        text: "Estes Termos de Uso regulam o acesso e a utilização do site galvanistudio.com.br e de todas as suas páginas e subdomínios, operado pela Galvani Studio, empresa especializada no desenvolvimento de soluções digitais para empresas, incluindo sites institucionais, landing pages, redesign, otimização de performance e manutenção de presença digital.",
      },
      {
        type: "p",
        text: "O site tem por finalidade apresentar os serviços da Galvani Studio, disponibilizar informações institucionais e facilitar o contato de potenciais clientes e parceiros com a empresa.",
      },
    ],
  },
  {
    id: "aceitacao",
    label: "2. Aceitação",
    title: "2. Aceitação dos Termos",
    blocks: [
      {
        type: "p",
        text: "Ao acessar este site, o usuário declara ter lido, compreendido e aceito integralmente estes Termos de Uso e nossa Política de Privacidade.",
      },
      {
        type: "p",
        text: "Caso não concorde com qualquer disposição deste documento, o usuário deve interromper imediatamente o uso do site. A Galvani Studio reserva-se o direito de atualizar estes termos a qualquer momento.",
      },
    ],
  },
  {
    id: "uso-permitido",
    label: "3. Uso Permitido",
    title: "3. Uso Permitido",
    blocks: [
      { type: "p", text: "O usuário está autorizado a:" },
      {
        type: "ul",
        items: [
          "Acessar e navegar pelo site para fins informativos e de contato com a empresa",
          "Compartilhar links do site por meio de redes sociais ou outros canais de comunicação",
          "Entrar em contato com a Galvani Studio por meio dos canais disponibilizados",
          "Imprimir ou salvar páginas do site para uso pessoal e não comercial",
        ],
      },
    ],
  },
  {
    id: "uso-proibido",
    label: "4. Uso Proibido",
    title: "4. Uso Proibido",
    blocks: [
      { type: "p", text: "É expressamente proibido ao usuário:" },
      {
        type: "ul",
        items: [
          "Reproduzir, copiar, distribuir ou comercializar conteúdos do site sem autorização prévia e escrita da Galvani Studio",
          "Utilizar o site para fins ilícitos, fraudulentos ou que violem a legislação brasileira vigente",
          "Tentar obter acesso não autorizado a sistemas, servidores ou áreas restritas do site",
          "Introduzir vírus, malware ou qualquer código malicioso",
          "Realizar coleta automatizada de dados (scraping) sem autorização expressa",
          "Enviar mensagens não solicitadas (spam) por meio dos canais de contato disponibilizados",
          "Praticar atos que possam prejudicar a reputação, a imagem ou os interesses da Galvani Studio ou de terceiros",
          "Utilizar os dados de contato disponíveis no site para fins não relacionados a uma consulta legítima sobre serviços",
        ],
      },
    ],
  },
  {
    id: "propriedade",
    label: "5. Propriedade Intelectual",
    title: "5. Propriedade Intelectual",
    blocks: [
      {
        type: "p",
        text: "Todo o conteúdo disponível neste site — incluindo, mas não se limitando a textos, logotipos, imagens, ícones, layouts, identidade visual, código-fonte e demais elementos gráficos — é de propriedade exclusiva da Galvani Studio ou de seus respectivos titulares, sendo protegido pela legislação brasileira de propriedade intelectual, em especial a Lei nº 9.610/1998 (Lei de Direitos Autorais) e a Lei nº 9.279/1996 (Lei de Propriedade Industrial).",
      },
      {
        type: "p",
        text: "Qualquer reprodução, distribuição, modificação ou uso dos conteúdos sem autorização prévia e escrita da Galvani Studio é expressamente vedada e sujeita às sanções legais cabíveis.",
      },
      {
        type: "p",
        text: "A utilização dos conteúdos do site não transfere ao usuário qualquer direito de propriedade intelectual. Fica reservado à Galvani Studio o direito de tomar as medidas necessárias para proteger seus direitos.",
      },
    ],
  },
  {
    id: "responsabilidade",
    label: "6. Limitação de Responsabilidade",
    title: "6. Limitação de Responsabilidade",
    blocks: [
      {
        type: "p",
        text: "A Galvani Studio emprega seus melhores esforços para manter as informações do site atualizadas e precisas, mas não garante a completude, exatidão ou atualidade de todo o conteúdo publicado.",
      },
      { type: "p", text: "A Galvani Studio não se responsabiliza por:" },
      {
        type: "ul",
        items: [
          "Danos diretos, indiretos, incidentais ou consequenciais decorrentes do uso ou da impossibilidade de uso do site",
          "Erros, omissões ou imprecisões nas informações publicadas",
          "Interrupções ou falhas de acesso ao site decorrentes de fatores técnicos, de terceiros ou de força maior",
          "Ações ou omissões de terceiros que possam afetar o acesso ou a segurança do site",
          "Conteúdos de sites externos acessados por meio de links disponíveis neste site",
        ],
      },
    ],
  },
  {
    id: "links",
    label: "7. Links Externos",
    title: "7. Links para Sites Externos",
    blocks: [
      {
        type: "p",
        text: "Este site pode conter links para sites de terceiros, incluindo portfólios de projetos desenvolvidos pela Galvani Studio para seus clientes, redes sociais e plataformas de comunicação.",
      },
      {
        type: "p",
        text: "A Galvani Studio não controla o conteúdo desses sites externos e não se responsabiliza pelas suas práticas de privacidade, termos de uso ou pelo conteúdo neles veiculado. O acesso a sites externos é de inteira responsabilidade do usuário.",
      },
    ],
  },
  {
    id: "disponibilidade",
    label: "8. Disponibilidade",
    title: "8. Disponibilidade dos Serviços",
    blocks: [
      {
        type: "p",
        text: "A Galvani Studio não garante a disponibilidade ininterrupta do site. O site pode estar temporariamente indisponível por razões de manutenção, atualização, falhas técnicas ou outros fatores fora do nosso controle.",
      },
      {
        type: "p",
        text: "Nos esforçamos para minimizar as interrupções e para comunicar previamente eventuais manutenções programadas, sempre que possível.",
      },
    ],
  },
  {
    id: "privacidade",
    label: "9. Privacidade",
    title: "9. Privacidade e Proteção de Dados",
    blocks: [
      {
        type: "p",
        text: "O tratamento de dados pessoais coletados por meio deste site é regido pela nossa Política de Privacidade, em conformidade com a Lei Geral de Proteção de Dados (LGPD — Lei nº 13.709/2018).",
      },
      {
        type: "p",
        text: "Recomendamos que o usuário leia atentamente nossa Política de Privacidade e nossa Política de Cookies para compreender como seus dados são tratados.",
      },
    ],
  },
  {
    id: "alteracoes",
    label: "10. Alterações",
    title: "10. Alterações dos Termos",
    blocks: [
      {
        type: "p",
        text: "A Galvani Studio reserva-se o direito de modificar estes Termos de Uso a qualquer momento, com ou sem aviso prévio. As alterações entram em vigor a partir da publicação da versão atualizada nesta página.",
      },
      {
        type: "p",
        text: "Recomendamos que o usuário consulte periodicamente esta página para se manter informado sobre eventuais mudanças. O uso continuado do site após a publicação das alterações implica aceitação dos novos termos.",
      },
    ],
  },
  {
    id: "foro",
    label: "11. Legislação e Foro",
    title: "11. Legislação Aplicável e Foro Competente",
    blocks: [
      {
        type: "p",
        text: "Estes Termos de Uso são regidos pelas leis da República Federativa do Brasil. Qualquer controvérsia decorrente da utilização deste site ou da interpretação destes Termos será submetida ao foro da comarca de São Paulo/SP, com exclusão de qualquer outro, por mais privilegiado que seja.",
      },
      {
        type: "p",
        text: "As relações de consumo eventualmente estabelecidas entre o usuário e a Galvani Studio são regidas, no que couber, pelo Código de Defesa do Consumidor (Lei nº 8.078/1990).",
      },
    ],
  },
  {
    id: "contato",
    label: "12. Contato",
    title: "12. Contato",
    blocks: [
      { type: "p", text: "Para dúvidas sobre estes Termos de Uso, entre em contato:" },
      {
        type: "contact",
        lines: ["Galvani Studio", "E-mail: galvanistudio1@gmail.com"],
      },
      { type: "p", text: "Respondemos em até 5 dias úteis." },
    ],
  },
];

export default function Terms() {
  return (
    <LegalDoc
      title="Termos de Uso"
      meta="Última atualização: 28 de junho de 2026 · Versão 1.0"
      intro="Ao acessar e utilizar o site da Galvani Studio, você concorda com estes Termos de Uso. Leia atentamente antes de prosseguir. Se não concordar com alguma das condições, pedimos que não utilize nosso site."
      sections={SECTIONS}
    />
  );
}
