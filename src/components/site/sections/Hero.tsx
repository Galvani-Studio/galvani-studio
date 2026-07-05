import { ArrowRight } from "lucide-react";
import appMobile from "@/assets/app-mobile.png";

export function Hero() {
  return (
    <section className="hero" id="top" aria-labelledby="hero-h1">
      <div className="hero-l">
        <span className="eyebrow fade-up">Presença Digital</span>
        <h1 className="hero-h1 fade-up d1" id="hero-h1">
          A presença digital
          <br />
          que sua empresa
          <br />
          merece.
        </h1>
        <p className="hero-sub fade-up d2">
          Desenvolvemos soluções digitais que fortalecem marcas, geram confiança e conectam
          empresas a pessoas.
        </p>
        <div className="hero-btns fade-up d3">
          <a href="#contact" className="btn btn-primary">
            Iniciar Projeto
            <ArrowRight size={14} strokeWidth={2.4} />
          </a>
          <a href="#portfolio" className="btn-ghost">
            Ver Projetos
          </a>
        </div>
      </div>

      <div className="hero-r" aria-hidden="true">
        <div className="hero-r-fade" />
        <div className="hero-phone-stage">
          <img
            className="hero-phone"
            src={appMobile}
            alt=""
            width={768}
            height={1024}
            loading="eager"
            decoding="async"
            fetchPriority="high"
          />
        </div>
      </div>
    </section>
  );
}
