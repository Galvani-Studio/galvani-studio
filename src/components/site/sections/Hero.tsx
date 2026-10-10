import { ArrowUpRight, ArrowDown } from "lucide-react";
import { Reveal } from "../Reveal";
export function Hero() {
  return (
    <section className="hero light" id="top" aria-labelledby="hero-title">
      <div className="container hero-layout">
        <Reveal>
          <span className="eyebrow">Galvani Studio / Design e desenvolvimento</span>
          <h1 id="hero-title">
            Seu negócio,
            <br />
            bem apresentado.
            <br />
            <span>Bem construído.</span>
          </h1>
          <p className="hero-description">
            Sites profissionais e sistemas sob medida. Design claro, tecnologia sólida e uma
            presença digital à altura da sua empresa.
          </p>
          <div className="hero-actions">
            <a href="#quote" className="btn btn-primary">
              Vamos falar do seu projeto <ArrowUpRight size={22} aria-hidden="true" />
            </a>
            <a href="#portfolio" className="hero-secondary">
              Conheça nosso trabalho <ArrowDown size={20} aria-hidden="true" />
            </a>
          </div>
        </Reveal>
        <div className="hero-editorial" aria-hidden="true">
          <div className="editorial-orbit" />
          <div className="editorial-panel">
            <span>ESTRATÉGIA + DESIGN + CÓDIGO</span>
            <div className="editorial-title">
              Da ideia
              <br />à presença.
            </div>
            <div className="editorial-rule" />
            <div className="editorial-bottom">
              <span>Precisão em cada detalhe.</span>
              <ArrowUpRight size={56} />
            </div>
          </div>
          <span className="editorial-index">GALVANI STUDIO — DIGITAL / WEB</span>
        </div>
      </div>
      <div className="container hero-foot">
        <span>Sites institucionais</span>
        <span>Landing pages</span>
        <span>Sistemas web</span>
      </div>
    </section>
  );
}
