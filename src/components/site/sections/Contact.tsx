import { Instagram, Linkedin, Mail } from "lucide-react";
import { Reveal } from "../Reveal";
import { QuoteForm } from "./QuoteForm";
import { INSTAGRAM_URL, LINKEDIN_URL, MAILTO } from "../social";

export function Contact() {
  return (
    <section className="section section--border contact" id="contact" aria-labelledby="contact-h">
      <div>
        <Reveal as="span" className="eyebrow">
          Contato
        </Reveal>
        <Reveal as="h2" className="h2" delay={1} id="contact-h">
          Vamos conversar
          <br />
          sobre o seu projeto.
        </Reveal>
        <Reveal as="p" className="contact-body" delay={2}>
          Cada empresa possui necessidades diferentes. Conte um pouco sobre seu negócio e vamos
          entender juntos qual é a melhor solução para fortalecer sua presença digital.
        </Reveal>
      </div>

      <Reveal as="div" className="contact-btns" delay={2}>
        <a href={MAILTO} className="btn-contact btn-contact--primary">
          <Mail size={18} strokeWidth={1.9} />
          Enviar Email
        </a>
        <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" className="btn-contact">
          <Instagram size={18} strokeWidth={1.9} />
          Instagram
        </a>
        <a href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer" className="btn-contact">
          <Linkedin size={18} strokeWidth={1.9} />
          LinkedIn
        </a>
      </Reveal>
    </section>
  );
}

export function QuoteSection() {
  return (
    <section className="section section--border" id="orcamento" aria-labelledby="quote-h">
      <div className="faq-head">
        <div>
          <Reveal as="span" className="eyebrow">
            Solicitar Orçamento
          </Reveal>
          <Reveal as="h2" className="h2" delay={1} id="quote-h">
            Comece seu projeto hoje.
          </Reveal>
        </div>
        <Reveal as="p" className="faq-intro" delay={2}>
          Preencha o formulário e retornaremos com os próximos passos. Sem compromisso.
        </Reveal>
      </div>
      <Reveal delay={2}>
        <QuoteForm />
      </Reveal>
    </section>
  );
}
