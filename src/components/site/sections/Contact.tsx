import { ArrowUpRight, Instagram, Linkedin, Mail } from "lucide-react";
import { QuoteForm } from "./QuoteForm";
import { Reveal } from "../Reveal";
import { EMAIL, INSTAGRAM_URL, LINKEDIN_URL, MAILTO } from "../social";
export function Contact() {
  return (
    <section className="section dark contact-section" id="contact" aria-labelledby="contact-title">
      <div className="container contact-grid">
        <Reveal>
          <span className="eyebrow">06 / Seu próximo movimento</span>
          <h2 id="contact-title">
            Vamos construir
            <br />o que move
            <br />
            <em>seu negócio.</em>
          </h2>
          <p className="contact-description">
            Conte onde sua operação trava ou o que sua marca precisa comunicar. Vamos transformar
            esse cenário em um plano concreto.
          </p>
          <a className="contact-email" href={MAILTO}>
            <Mail size={19} />
            {EMAIL}
            <ArrowUpRight size={18} />
          </a>
          <div className="contact-social">
            <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer">
              <Instagram size={17} />
              Instagram <ArrowUpRight size={14} />
            </a>
            <a href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer">
              <Linkedin size={17} />
              LinkedIn <ArrowUpRight size={14} />
            </a>
          </div>
          <div className="contact-note">
            <span className="status-dot" /> Primeiro, entendemos. Depois, propomos.
          </div>
        </Reveal>
        <div id="quote" className="quote-panel">
          <div className="quote-heading">
            <span className="eyebrow">Vamos ao seu desafio</span>
            <h3>Solicite um diagnóstico.</h3>
            <p>Preencha os dados e conte sobre o seu projeto.</p>
          </div>
          <QuoteForm />
        </div>
      </div>
    </section>
  );
}
