import { ArrowUpRight, Check } from "lucide-react";
import { Carousel } from "../Carousel";
import { Reveal } from "../Reveal";
const plans = [
  {
    title: "Landing Page Estratégica",
    tag: "CONVERSÃO",
    text: "Para validar uma oferta e transformar campanhas em conversas comerciais.",
    features: [
      "Uma oferta, uma jornada clara",
      "Design responsivo e SEO técnico",
      "Integração com canal de contato",
    ],
    featured: false,
  },
  {
    title: "Site Institucional Completo",
    tag: "AUTORIDADE",
    text: "Para empresas em expansão que precisam transmitir confiança desde o primeiro acesso.",
    features: [
      "Arquitetura de conteúdo estratégico",
      "Páginas para serviços e cases",
      "Estrutura preparada para evoluir",
    ],
    featured: true,
  },
  {
    title: "Sistema Web / SaaS Sob Medida",
    tag: "OPERAÇÃO",
    text: "Para organizar fluxos complexos, conectar dados e automatizar a operação.",
    features: [
      "Diagnóstico e arquitetura própria",
      "Interface para sua rotina real",
      "Integrações definidas no escopo",
    ],
    featured: false,
  },
  {
    title: "Personalizado / Enterprise",
    tag: "SOB DEMANDA",
    text: "Para desafios que pedem uma combinação de estratégia, tecnologia e acompanhamento.",
    features: [
      "Escopo construído em conjunto",
      "Roadmap por prioridades",
      "Evolução e suporte acordados",
    ],
    featured: false,
  },
];
export function Plans() {
  return (
    <section className="section dark" id="plans" aria-labelledby="plans-title">
      <div className="container">
        <Reveal>
          <header className="section-heading">
            <div>
              <span className="eyebrow">04 / Um investimento com direção</span>
              <h2 id="plans-title">
                A solução certa.
                <br />
                <em>No tamanho do seu desafio.</em>
              </h2>
            </div>
            <p>
              Escopo e proposta definidos após o diagnóstico.
              <br />
              Sem pacotes que ignoram sua realidade.
            </p>
          </header>
        </Reveal>
        <Carousel label="Planos e soluções" variant="cards">
          {plans.map((p) => (
            <article key={p.title} className={`plan-card ${p.featured ? "plan-featured" : ""}`}>
              <span className="eyebrow">{p.tag}</span>
              <h3>{p.title}</h3>
              <p>{p.text}</p>
              <ul>
                {p.features.map((f) => (
                  <li key={f}>
                    <Check size={16} />
                    {f}
                  </li>
                ))}
              </ul>
              <div className="plan-bottom">
                <span>Proposta sob consulta</span>
                <a className={`btn ${p.featured ? "btn-primary" : "btn-outline"}`} href="#quote">
                  {p.tag === "SOB DEMANDA" ? "Montar meu escopo" : "Iniciar diagnóstico"}
                  <ArrowUpRight size={17} />
                </a>
              </div>
            </article>
          ))}
        </Carousel>
        <div className="comparison-wrap">
          <table className="comparison-table">
            <caption>Compare o foco de cada solução</caption>
            <thead>
              <tr>
                <th scope="col">Solução</th>
                <th scope="col">Objetivo principal</th>
                <th scope="col">Escopo</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">Landing Page</th>
                <td>Campanhas e validação</td>
                <td>Uma jornada de conversão</td>
              </tr>
              <tr>
                <th scope="row">Institucional</th>
                <td>Autoridade e presença</td>
                <td>Múltiplas páginas estratégicas</td>
              </tr>
              <tr>
                <th scope="row">Sistema / SaaS</th>
                <td>Eficiência operacional</td>
                <td>Fluxos e integrações próprios</td>
              </tr>
              <tr>
                <th scope="row">Enterprise</th>
                <td>Desafio multidisciplinar</td>
                <td>Roadmap personalizado</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
