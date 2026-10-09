import { LegalDoc, type DocSection } from "@/components/site/LegalDoc";

const SECTIONS: DocSection[] = [
  {
    id: "quem-somos",
    label: "1. Quem Somos",
    title: "1. Quem Somos",
    blocks: [
      {
        type: "p",
        text: "A Galvani Studio é uma empresa brasileira especializada no desenvolvimento de soluções digitais, incluindo sites institucionais, landing pages, redesign, otimização de performance e manutenção de presença digital para empresas.",
      },
      {
        type: "p",
        text: "Atuamos como controladora dos dados pessoais coletados por meio deste site e dos serviços que prestamos, nos termos da Lei Geral de Proteção de Dados (LGPD — Lei nº 13.709/2018).",
      },
    ],
  },
  {
    id: "dados",
    label: "2. Dados que Coletamos",
    title: "2. Dados que Podemos Coletar",
    blocks: [
      { type: "h3", text: "2.1 Dados fornecidos diretamente por você" },
      {
        type: "ul",
        items: [
          "Nome completo",
          "Endereço de e-mail",
          "Número de telefone",
          "Nome da empresa ou negócio",
          "Mensagens e informações enviadas por formulários ou canais de contato",
        ],
      },
      { type: "h3", text: "2.2 Dados coletados automaticamente" },
      {
        type: "ul",
        items: [
          "Endereço IP e dados de geolocalização aproximada",
          "Tipo de dispositivo, sistema operacional e versão do navegador",
          "Páginas visitadas, tempo de permanência e interações no site",
          "Fonte de acesso (busca orgânica, redes sociais, link direto)",
          "Cookies e tecnologias similares (veja nossa Política de Cookies)",
        ],
      },
      {
        type: "p",
        text: "Não coletamos dados sensíveis (como saúde, orientação sexual, religião, origem racial ou biométricos) e não coletamos dados de menores de 18 anos de forma intencional. Caso identifiquemos que dados de menores foram coletados sem o consentimento adequado, eles serão excluídos imediatamente.",
      },
    ],
  },
  {
    id: "finalidade",
    label: "3. Finalidade do Tratamento",
    title: "3. Finalidade do Tratamento",
    blocks: [
      {
        type: "p",
        text: "Utilizamos seus dados exclusivamente para as finalidades abaixo, de forma compatível com a base legal correspondente:",
      },
      {
        type: "ul",
        items: [
          "Responder às suas solicitações de contato e orçamentos",
          "Prestar os serviços contratados e cumprir obrigações contratuais",
          "Oferecer suporte técnico e atendimento ao cliente",
          "Enviar comunicações relacionadas ao seu projeto (não fazemos spam)",
          "Melhorar a qualidade e a experiência dos nossos serviços",
          "Analisar métricas de acesso para otimização do site",
          "Cumprir obrigações legais e regulatórias aplicáveis",
          "Garantir a segurança da plataforma e prevenir fraudes",
        ],
      },
      {
        type: "p",
        text: "Não utilizamos seus dados para venda a terceiros, publicidade comportamental de terceiros ou tomada de decisões exclusivamente automatizadas que produzam efeitos jurídicos sobre você.",
      },
    ],
  },
  {
    id: "base-legal",
    label: "4. Base Legal (LGPD)",
    title: "4. Base Legal (LGPD)",
    blocks: [
      {
        type: "p",
        text: "Todo tratamento de dados pessoais realizado pela Galvani Studio possui amparo em ao menos uma das seguintes bases legais previstas no art. 7º da LGPD:",
      },
      {
        type: "ul",
        items: [
          "Consentimento (art. 7º, I): quando você aceita cookies opcionais ou assina comunicações voluntárias.",
          "Execução de contrato (art. 7º, V): quando o tratamento é necessário para prestarmos os serviços contratados por você.",
          "Legítimo interesse (art. 7º, IX): para análise de métricas, melhoria dos serviços e segurança da plataforma, respeitando seus direitos fundamentais.",
          "Cumprimento de obrigação legal (art. 7º, II): quando exigido por legislação vigente, como obrigações fiscais e trabalhistas.",
          "Exercício regular de direitos (art. 7º, VI): em processos administrativos, judiciais ou arbitrais.",
        ],
      },
    ],
  },
  {
    id: "compartilhamento",
    label: "5. Compartilhamento",
    title: "5. Compartilhamento de Dados",
    blocks: [
      {
        type: "p",
        text: "A Galvani Studio não vende, aluga ou comercializa dados pessoais. Podemos compartilhar informações apenas nas situações abaixo e exclusivamente com as partes necessárias:",
      },
      {
        type: "ul",
        items: [
          "Serviços de hospedagem e infraestrutura: provedores que mantêm nosso site em funcionamento, mediante contratos que garantem proteção adequada dos dados.",
          "Serviços de e-mail e comunicação: plataformas utilizadas para responder solicitações e enviar informações sobre projetos.",
          "Ferramentas de análise: podemos utilizar serviços como Google Analytics ou similares para entender o comportamento dos visitantes — sempre de forma agregada e anonimizada quando possível.",
          "Parceiros tecnológicos: prestadores de serviços essenciais ao desenvolvimento dos projetos dos clientes, vinculados por acordos de confidencialidade.",
          "Autoridades públicas: quando exigido por lei, ordem judicial ou para proteger direitos, propriedade ou segurança.",
        ],
      },
      {
        type: "p",
        text: "Todos os parceiros e fornecedores com quem eventualmente compartilhamos dados são selecionados considerando suas práticas de segurança e conformidade com a legislação de proteção de dados aplicável.",
      },
    ],
  },
  {
    id: "direitos",
    label: "6. Seus Direitos",
    title: "6. Seus Direitos como Titular",
    blocks: [
      {
        type: "p",
        text: "Conforme o art. 18 da LGPD, você possui os seguintes direitos em relação aos seus dados pessoais:",
      },
      {
        type: "ul",
        items: [
          "Confirmação: saber se tratamos seus dados pessoais.",
          "Acesso: obter uma cópia dos dados que mantemos sobre você.",
          "Correção: solicitar a atualização de dados incompletos, inexatos ou desatualizados.",
          "Anonimização, bloqueio ou eliminação: de dados desnecessários, excessivos ou tratados em desconformidade com a LGPD.",
          "Portabilidade: receber seus dados em formato estruturado e interoperável (quando aplicável).",
          "Eliminação: solicitar a exclusão dos dados tratados com base no consentimento.",
          "Revogação do consentimento: retirar seu consentimento a qualquer momento, sem prejuízo das atividades realizadas até então.",
          "Informação sobre compartilhamentos: saber com quais entidades compartilhamos seus dados.",
          "Revisão de decisões automatizadas: quando aplicável, solicitar revisão de decisões tomadas exclusivamente por meios automatizados.",
          "Oposição: opor-se ao tratamento realizado com base em outras hipóteses legais, quando em desconformidade com a LGPD.",
        ],
      },
      {
        type: "p",
        text: "Para exercer qualquer um desses direitos, entre em contato com nossa equipe pelo endereço indicado na seção 11. Responderemos em até 15 dias úteis.",
      },
    ],
  },
  {
    id: "seguranca",
    label: "7. Segurança dos Dados",
    title: "7. Segurança dos Dados",
    blocks: [
      {
        type: "p",
        text: "Adotamos medidas técnicas e administrativas proporcionais ao risco para proteger seus dados pessoais contra acessos não autorizados, perda, destruição, alteração ou divulgação indevida, incluindo:",
      },
      {
        type: "ul",
        items: [
          "Transmissão de dados via protocolo HTTPS com certificado SSL/TLS",
          "Acesso restrito aos dados apenas para colaboradores que necessitem deles para suas funções",
          "Uso de serviços de hospedagem com padrões de segurança reconhecidos",
          "Monitoramento periódico de vulnerabilidades",
        ],
      },
      {
        type: "p",
        text: "Em caso de incidente de segurança que possa acarretar risco ou dano relevante aos titulares, notificaremos a Autoridade Nacional de Proteção de Dados (ANPD) e os titulares afetados no prazo legalmente previsto.",
      },
    ],
  },
  {
    id: "retencao",
    label: "8. Retenção dos Dados",
    title: "8. Retenção dos Dados",
    blocks: [
      {
        type: "p",
        text: "Armazenamos seus dados pelo tempo necessário para cumprir as finalidades para as quais foram coletados e para atender às obrigações legais e contratuais aplicáveis:",
      },
      {
        type: "ul",
        items: [
          "Dados de contato e solicitações: enquanto houver relacionamento ativo ou por até 5 anos após o encerramento, conforme prescrição civil.",
          "Dados de contrato e prestação de serviços: pelo prazo legal exigido pela legislação fiscal e contábil brasileira (geralmente 5 anos).",
          "Dados de navegação e cookies: conforme definido na Política de Cookies, respeitando o prazo de validade de cada cookie.",
          "Dados tratados com base no consentimento: até a revogação do consentimento pelo titular.",
        ],
      },
      {
        type: "p",
        text: "Após o prazo de retenção, os dados serão excluídos de forma segura ou anonimizados.",
      },
    ],
  },
  {
    id: "cookies",
    label: "9. Cookies",
    title: "9. Cookies",
    blocks: [
      {
        type: "p",
        text: "Utilizamos cookies e tecnologias similares para melhorar a experiência de navegação no nosso site. Para informações detalhadas sobre quais cookies utilizamos, suas finalidades e como gerenciá-los, consulte nossa Política de Cookies.",
      },
    ],
  },
  {
    id: "alteracoes",
    label: "10. Alterações",
    title: "10. Alterações nesta Política",
    blocks: [
      {
        type: "p",
        text: "Esta Política de Privacidade pode ser atualizada periodicamente para refletir mudanças em nossas práticas, em novos serviços oferecidos ou em exigências legais. Quando realizarmos alterações relevantes, atualizaremos a data de \u201cúltima atualização\u201d no topo desta página.",
      },
      {
        type: "p",
        text: "Recomendamos que você consulte esta página regularmente. O uso continuado do nosso site após as alterações implica aceitação da política atualizada.",
      },
    ],
  },
  {
    id: "contato",
    label: "11. Contato",
    title: "11. Contato e Encarregado de Dados",
    blocks: [
      {
        type: "p",
        text: "Se você tiver dúvidas, solicitações ou quiser exercer seus direitos como titular, entre em contato com nosso Encarregado de Proteção de Dados (DPO):",
      },
      {
        type: "contact",
        lines: ["Galvani Studio — Encarregado de Dados (DPO)", "E-mail: galvanistudio1@gmail.com"],
      },
      {
        type: "p",
        text: "Responderemos em até 15 dias úteis. Para solicitações de exclusão ou acesso a dados, informe seu nome completo e o e-mail com o qual nos contatou anteriormente.",
      },
    ],
  },
];

export default function Privacy() {
  return (
    <LegalDoc
      title="Política de Privacidade"
      meta="Última atualização: 28 de junho de 2026 · Versão 1.0 · LGPD — Lei nº 13.709/2018"
      intro="Este documento descreve como a Galvani Studio coleta, utiliza, armazena e protege seus dados pessoais. Leia com atenção. Ao utilizar nosso site ou nos contatar, você concorda com as práticas descritas aqui."
      sections={SECTIONS}
    />
  );
}
