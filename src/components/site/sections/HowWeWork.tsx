import { Reveal } from "../Reveal";

const STEPS = [
  {
    num: "01",
    name: "Entendimento",
    text: "Conhecemos sua empresa, seus objetivos e identificamos a melhor estratégia para o seu projeto.",
  },
  {
    num: "02",
    name: "Desenvolvimento",
    text: "Projetamos uma experiência moderna, rápida e totalmente adaptada aos seus clientes.",
  },
  {
    num: "03",
    name: "Evolução",
    text: "Após a entrega, continuamos acompanhando o projeto conforme o plano escolhido, garantindo melhorias contínuas e suporte quando necessário.",
  },
];

export function HowWeWork() {
  return (
    <section className="section section--border" id="how" aria-labelledby="how-h">
      <div className="how">
        <div className="how-head">
          <Reveal as="span" className="eyebrow">
            Como Trabalhamos
          </Reveal>
          <Reveal as="h2" className="h2" delay={1} id="how-h">
            Um processo claro,
            <br />
            do início ao crescimento.
          </Reveal>
        </div>
        <div className="steps">
          {STEPS.map((s, i) => (
            <Reveal as="div" className="step" delay={(i + 1) as 1 | 2 | 3} key={s.num}>
              <span className="step-num">{s.num}</span>
              <h3 className="step-name">{s.name}</h3>
              <p className="step-text">{s.text}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
