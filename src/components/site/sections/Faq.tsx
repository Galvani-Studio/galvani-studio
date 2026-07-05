import { useState } from "react";
import { Plus } from "lucide-react";
import { Reveal } from "../Reveal";

const FAQS = [
  {
    q: "Quanto tempo leva um projeto?",
    a: "Depende do escopo. Uma landing page leva entre 7 e 14 dias. Um site institucional completo pode levar de 3 a 6 semanas. Projetos mais complexos têm cronograma acordado na fase de entendimento.",
  },
  {
    q: "Meu site funcionará em celulares?",
    a: "Sim. Todos os projetos são desenvolvidos com foco em responsividade total. Testamos em celulares Android, iPhone, tablets e desktops de diferentes tamanhos para garantir uma experiência consistente.",
  },
  {
    q: "Vocês oferecem suporte após a entrega?",
    a: "Sim. Oferecemos planos de manutenção e evolução contínua. Após a entrega, continuamos acompanhando o projeto para garantir que ele cresça junto com o seu negócio.",
  },
  {
    q: "Posso solicitar alterações?",
    a: "Sim. Incluímos rodadas de revisão em todos os projetos. O número de revisões e o processo de solicitação são definidos no início de cada projeto com transparência total.",
  },
  {
    q: "Como funciona o pagamento?",
    a: "Geralmente trabalhamos com 50% de entrada no início do projeto e 50% na entrega final. Aceitamos transferência bancária (PIX/TED) e outros meios conforme acordado. Os detalhes são sempre definidos de forma transparente antes do início.",
  },
];

export function Faq() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="section section--border" id="faq" aria-labelledby="faq-h">
      <div className="faq-head">
        <div>
          <Reveal as="span" className="eyebrow">
            FAQ
          </Reveal>
          <Reveal as="h2" className="h2" delay={1} id="faq-h">
            Perguntas frequentes.
          </Reveal>
        </div>
        <Reveal as="p" className="faq-intro" delay={2}>
          Respondemos as dúvidas mais comuns. Se tiver alguma outra pergunta, fale conosco.
        </Reveal>
      </div>

      <Reveal as="div" className="faq-list" delay={2}>
        {FAQS.map((f, i) => {
          const isOpen = open === i;
          return (
            <div className={`faq-item${isOpen ? " open" : ""}`} key={f.q}>
              <button
                className="faq-q"
                aria-expanded={isOpen}
                onClick={() => setOpen(isOpen ? null : i)}
              >
                {f.q}
                <Plus className="faq-icon" size={20} strokeWidth={2} aria-hidden="true" />
              </button>
              <div className="faq-a">
                <div className="faq-a-inner">
                  <p>{f.a}</p>
                </div>
              </div>
            </div>
          );
        })}
      </Reveal>
    </section>
  );
}
