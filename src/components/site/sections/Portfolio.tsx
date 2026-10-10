import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { Reveal } from "../Reveal";
export function Portfolio() {
  return (
    <section className="section light" id="portfolio" aria-labelledby="portfolio-title">
      <div className="container">
        <Reveal>
          <header className="section-heading">
            <div>
              <span className="eyebrow">Trabalhos selecionados</span>
              <h2 id="portfolio-title">
                Presença digital.
                <br />
                <span>Na prática.</span>
              </h2>
            </div>
            <p>
              Contextos diferentes.
              <br />O mesmo cuidado com a entrega.
            </p>
          </header>
        </Reveal>
        <div className="portfolio-grid">
          <Reveal>
            <article className="project">
              <a
                className="project-visual vieira-visual"
                href="https://solucoes-vieira-landingpage.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Conhecer o site Soluções Vieira em uma nova aba"
              >
                <Image
                  src="/images/solucoes-vieira.png"
                  alt="Site da Soluções Vieira com apresentação dos serviços de instalação e manutenção de pivôs centrais"
                  width={1920}
                  height={1080}
                  sizes="(max-width: 800px) 90vw, 45vw"
                />
                <span className="project-open">
                  <ArrowUpRight size={24} aria-hidden="true" />
                </span>
              </a>
              <div className="project-caption">
                <span className="eyebrow">Agronegócio / Landing page</span>
                <h3>
                  <a
                    href="https://solucoes-vieira-landingpage.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Soluções Vieira
                  </a>
                </h3>
                <p>Serviços técnicos apresentados com clareza e contato comercial acessível.</p>
              </div>
            </article>
          </Reveal>
          <Reveal delay={1}>
            <article className="project">
              <a
                className="project-visual thais-visual"
                href="https://thaisbianca.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Conhecer o site da Thaís Bianca em uma nova aba"
              >
                <div className="thais-preview-copy">
                  <span>THAÍS BIANCA</span>
                  <strong>Orientação jurídica clara.</strong>
                  <span>ADVOCACIA / SITE INSTITUCIONAL</span>
                </div>
                <Image
                  src="/images/thais-bianca.png"
                  alt="Thaís Bianca Nogueira, advogada apresentada em seu site institucional"
                  width={640}
                  height={800}
                  sizes="(max-width: 800px) 45vw, 24vw"
                />
                <span className="project-open">
                  <ArrowUpRight size={24} aria-hidden="true" />
                </span>
              </a>
              <div className="project-caption">
                <span className="eyebrow">Advocacia / Site institucional</span>
                <h3>
                  <a
                    href="https://thaisbianca.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Thaís Bianca
                  </a>
                </h3>
                <p>
                  Uma apresentação profissional para o escritório, suas áreas de atuação e seus
                  canais de atendimento.
                </p>
              </div>
            </article>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
