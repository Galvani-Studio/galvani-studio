import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { Reveal } from "../Reveal";
export function Portfolio() {
  return (
    <section className="section dark case-section" id="portfolio" aria-labelledby="portfolio-title">
      <div className="container">
        <Reveal>
          <header className="section-heading">
            <div>
              <span className="eyebrow">02 / Engenharia aplicada</span>
              <h2 id="portfolio-title">
                Projetos reais.
                <br />
                <span>Decisões que você pode ver.</span>
              </h2>
            </div>
            <p>
              O contexto, a solução e a entrega. Sem indicadores de receita ou conversão que não
              foram medidos.
            </p>
          </header>
        </Reveal>
        <div className="case-grid">
          <article className="case-card">
            <a
              className="case-preview"
              href="https://solucoes-vieira-landingpage.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Abrir o projeto Soluções Vieira em uma nova aba"
            >
              <Image
                src="/images/solucoes-vieira.png"
                alt="Página real da Soluções Vieira, especializada em instalação e manutenção de pivôs centrais"
                width={1920}
                height={1080}
                sizes="(max-width: 850px) 90vw, 45vw"
              />
              <span>
                Ver projeto <ArrowUpRight size={22} aria-hidden="true" />
              </span>
            </a>
            <div className="case-copy">
              <span className="eyebrow">Agronegócio / Conversão B2B</span>
              <h3>Soluções Vieira</h3>
              <dl className="case-narrative">
                <dt>O problema</dt>
                <dd>
                  Apresentar um serviço técnico especializado com clareza e facilitar o primeiro
                  contato comercial.
                </dd>
                <dt>A solução</dt>
                <dd>
                  Landing page com serviços de pivôs centrais, hierarquia objetiva e acesso direto
                  ao atendimento, adaptada a telas móveis.
                </dd>
              </dl>
              <div className="case-outcomes">
                <div>
                  <strong>1</strong>
                  <span>Página concentrando a oferta</span>
                </div>
                <div>
                  <strong>Direto</strong>
                  <span>Caminho até o contato</span>
                </div>
              </div>
            </div>
          </article>
          <article className="case-card">
            <div className="case-preview institutional-preview">
              <Image
                src="/images/logo.png"
                alt="Marca oficial da Galvani Studio, projeto institucional próprio"
                width={100}
                height={100}
              />
              <div>
                <span className="preview-label">GALVANI STUDIO V2</span>
                <p>
                  O próprio negócio.
                  <br />A mesma exigência.
                </p>
              </div>
              <code aria-label="Trecho da composição real desta página">
                {"<Hero />"}
                <br />
                {"<ExpandableServices />"}
                <br />
                {"<Portfolio />"}
                <br />
                {"<QuoteForm />"}
              </code>
            </div>
            <div className="case-copy">
              <span className="eyebrow">Projeto próprio / Plataforma institucional</span>
              <h3>Galvani Studio V2</h3>
              <dl className="case-narrative">
                <dt>O problema</dt>
                <dd>
                  Unificar posicionamento, demonstração de capacidade e captação de projetos em uma
                  base que possa evoluir.
                </dd>
                <dt>A solução</dt>
                <dd>
                  Next.js 15 com App Router, conteúdo renderizado no servidor e formulário validado,
                  integrado a Formspree ou webhook próprio.
                </dd>
              </dl>
              <div className="case-outcomes">
                <div>
                  <strong>4</strong>
                  <span>Rotas públicas de conteúdo</span>
                </div>
                <div>
                  <strong>2</strong>
                  <span>Etapas de validação do formulário</span>
                </div>
              </div>
              <a href="#top" className="text-link">
                Explorar a plataforma atual <ArrowUpRight size={20} aria-hidden="true" />
              </a>
            </div>
          </article>
        </div>
        <p className="case-evidence">
          Indicadores de implementação e entrega. Resultados comerciais dependem de acompanhamento
          após a publicação.
        </p>
      </div>
    </section>
  );
}
