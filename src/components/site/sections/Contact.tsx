import { ArrowUpRight, Instagram, Linkedin, Mail } from "lucide-react";
import { QuoteForm } from "./QuoteForm";
import { Reveal } from "../Reveal";
import { EMAIL, INSTAGRAM_URL, LINKEDIN_URL, MAILTO } from "../social";
export function Contact() {
  return (
    <section className="section offwhite" id="contact" aria-labelledby="contact-title">
      <div className="container contact-grid">
        <Reveal>
          <span className="eyebrow">Vamos conversar</span>
          <h2 id="contact-title">
            Seu próximo projeto
            <br />
            <span>começa aqui.</span>
          </h2>
          <p className="contact-description">
            Conte o que você precisa. Respondemos com os próximos passos para definir uma solução e
            um orçamento.
          </p>
          <a className="contact-email" href={MAILTO}>
            <Mail size={22} aria-hidden="true" />
            <span>{EMAIL}</span>
            <ArrowUpRight size={20} aria-hidden="true" />
          </a>
          <div className="contact-social">
            <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer">
              <Instagram size={26} aria-hidden="true" />
              Instagram
              <ArrowUpRight size={18} aria-hidden="true" />
            </a>
            <a href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer">
              <Linkedin size={26} aria-hidden="true" />
              LinkedIn
              <ArrowUpRight size={18} aria-hidden="true" />
            </a>
          </div>
        </Reveal>
        <div className="quote-panel" id="quote">
          <header className="quote-heading">
            <h3>Conte sobre seu projeto.</h3>
            <p>Use uma sugestão pronta ou escreva com suas palavras.</p>
          </header>
          <QuoteForm />
        </div>
      </div>
    </section>
  );
}
