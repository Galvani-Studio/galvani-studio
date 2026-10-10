import Image from "next/image";
import { ArrowUpRight, Check } from "lucide-react";
import { Carousel } from "../Carousel";
import { Reveal } from "../Reveal";
export function Portfolio() {
  const cases = [
    {
      name: "Soluções Vieira",
      tag: "AGRONEGÓCIO · LANDING PAGE",
      number: "01",
      description:
        "Um serviço técnico de excelência precisa ser entendido antes do primeiro contato.",
      detail:
        "Landing page para instalação e manutenção de pivôs centrais. Conteúdo direto, hierarquia clara e contato acessível para conectar a empresa a quem precisa dela.",
      features: ["Conversão direta B2B", "Experiência mobile", "Contato sem atritos"],
      image: "/images/solucoes-vieira.png",
      url: "https://solucoes-vieira-landingpage.vercel.app/",
    },
    {
      name: "Plataforma Galvani V2",
      tag: "TECNOLOGIA · ECOSSISTEMA WEB",
      number: "02",
      description:
        "A presença institucional como ponto de partida para uma operação que pode crescer.",
      detail:
        "Ecossistema web com arquitetura escalável em Next.js 15. Estratégia de conteúdo, componentes reutilizáveis e um fluxo de orçamento integrado ao seu serviço de recebimento.",
      features: ["Next.js 15 + App Router", "Arquitetura escalável", "Integração de orçamentos"],
      image: "",
      url: "#top",
    },
  ];
  return (
    <section className="section light" id="portfolio" aria-labelledby="portfolio-title">
      <div className="container">
        <Reveal>
          <header className="section-heading">
            <div>
              <span className="eyebrow">01 / Trabalho que sai do papel</span>
              <h2 id="portfolio-title">
                Soluções Entregues
                <br />
                <em>na Prática.</em>
              </h2>
            </div>
            <p>
              O problema define a solução.
              <br />A execução transforma a experiência.
            </p>
          </header>
        </Reveal>
        <Carousel label="Casos de estudo" autoplay>
          {cases.map((c) => (
            <article className="case-card" key={c.name}>
              <div className="case-copy">
                <span className="eyebrow">{c.tag}</span>
                <h3>{c.name}</h3>
                <p className="case-lead">{c.description}</p>
                <p>{c.detail}</p>
                <ul className="case-features">
                  {c.features.map((f) => (
                    <li key={f}>
                      <Check size={15} />
                      {f}
                    </li>
                  ))}
                </ul>
                <a
                  className="text-link"
                  href={c.url}
                  {...(c.image ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                >
                  Pré-visualizar projeto <ArrowUpRight size={18} />
                </a>
              </div>
              <div className={`case-image ${c.image ? "" : "case-galvani"}`}>
                {c.image ? (
                  <Image
                    src={c.image}
                    alt="Página do projeto Soluções Vieira, com foco em serviços de pivôs centrais"
                    width={1920}
                    height={1080}
                    sizes="(max-width: 760px) 90vw, 55vw"
                  />
                ) : (
                  <div className="galvani-preview">
                    <span className="preview-logo">
                      GALVANI<span>STUDIO / V2</span>
                    </span>
                    <span className="preview-kicker">PRÓXIMA GERAÇÃO DIGITAL</span>
                    <strong>
                      Estratégia.
                      <br />
                      Código.
                      <br />
                      <em>Resultado.</em>
                    </strong>
                    <div className="preview-lines">
                      <i />
                      <i />
                      <i />
                    </div>
                    <span className="preview-stack">
                      NEXT.JS 15 <span>↗</span>
                    </span>
                  </div>
                )}
                <span className="case-number">{c.number}</span>
              </div>
            </article>
          ))}
        </Carousel>
      </div>
    </section>
  );
}
