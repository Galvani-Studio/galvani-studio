import { ArrowRight } from "lucide-react";
import { Reveal } from "../Reveal";
const vieira = "/images/solucoes-vieira.png";

const URL = "https://solucoes-vieira-landingpage.vercel.app/";

export function Portfolio() {
  return (
    <section className="section section--border" id="portfolio" aria-labelledby="port-h">
      <header className="port-head">
        <div>
          <Reveal as="span" className="eyebrow">
            Projeto em Destaque
          </Reveal>
          <Reveal as="h2" className="h2" delay={1} id="port-h">
            Trabalho que
            <br />
            transforma negócios.
          </Reveal>
        </div>
        <Reveal as="span" className="port-label">
          01 / 01
        </Reveal>
      </header>

      <Reveal as="article" className="case" delay={1} aria-label="Case Soluções Vieira">
        <div className="case-info">
          <span className="case-tag">Landing Page · 2025</span>
          <h3 className="case-name">Soluções Vieira</h3>
          <p className="case-desc">
            Landing page desenvolvida para uma empresa especializada em instalação e manutenção de
            pivôs centrais. O projeto foi pensado para transmitir credibilidade, facilitar o contato
            com novos clientes e oferecer uma excelente experiência em computadores e dispositivos
            móveis.
          </p>
          <a href={URL} target="_blank" rel="noopener noreferrer" className="case-link">
            Visitar Projeto
            <ArrowRight size={13} strokeWidth={2.4} />
          </a>
        </div>
        <a
          className="case-visual"
          href={URL}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Ver site Soluções Vieira"
        >
          <img
            src={vieira}
            alt="Screenshot do site Soluções Vieira — especialistas em pivô central"
            width={1920}
            height={1080}
            loading="lazy"
            decoding="async"
          />
        </a>
      </Reveal>
    </section>
  );
}
