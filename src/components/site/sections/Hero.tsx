import { ArrowUpRight } from "lucide-react";
import { Reveal } from "../Reveal";
import { CodeInterface } from "../CodeInterface";
export function Hero() {
  return (
    <section className="hero dark" id="top" aria-labelledby="hero-title">
      <div className="hero-grid-background" aria-hidden="true" />
      <div className="container hero-grid">
        <div className="hero-copy">
          <Reveal>
            <span className="eyebrow">Galvani Studio / Estratégia + Engenharia</span>
            <h1 id="hero-title">
              Engenharia de Software e Design Estratégico para Empresas de{" "}
              <span>Alto Impacto.</span>
            </h1>
            <p className="hero-description">
              Desenvolvemos plataformas digitais, sistemas sob medida e ecossistemas web que
              transmitem autoridade imediata e aceleram a conversão B2B.
            </p>
            <div className="hero-actions">
              <a className="btn btn-primary" href="#quote">
                Iniciar Projeto <ArrowUpRight size={22} aria-hidden="true" />
              </a>
              <a className="btn btn-ghost" href="#portfolio">
                Ver Casos de Estudo <ArrowUpRight size={22} aria-hidden="true" />
              </a>
            </div>
          </Reveal>
        </div>
        <CodeInterface />
      </div>
      <div className="container hero-principles">
        <span>Estratégia antes do código.</span>
        <span>Interface a serviço da operação.</span>
        <span>Autonomia depois da entrega.</span>
      </div>
    </section>
  );
}
