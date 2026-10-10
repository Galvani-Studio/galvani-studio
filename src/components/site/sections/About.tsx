import { Reveal } from "../Reveal";
const steps = [
  {
    number: "01",
    title: "Entender",
    text: "Uma conversa sobre sua empresa, seus objetivos e o que precisa ser construído.",
  },
  {
    number: "02",
    title: "Desenhar e desenvolver",
    text: "Organizamos o conteúdo, definimos a experiência e transformamos o projeto em uma solução funcional.",
  },
  {
    number: "03",
    title: "Entregar e acompanhar",
    text: "Validamos os detalhes, publicamos e orientamos os próximos passos conforme o escopo combinado.",
  },
];
export function About() {
  return (
    <section className="section dark" id="about" aria-labelledby="about-title">
      <div className="container studio-grid">
        <Reveal>
          <span className="eyebrow">O Studio</span>
          <h2 id="about-title">
            Bom design tem propósito.
            <br />
            <span>Boa tecnologia também.</span>
          </h2>
          <p className="studio-description">
            A Galvani Studio combina design e desenvolvimento para construir sites e sistemas que
            sua empresa consegue usar, apresentar e evoluir.
          </p>
          <p>Um processo claro, do primeiro contato à entrega.</p>
        </Reveal>
        <ol className="process-list">
          {steps.map((step) => (
            <li key={step.number}>
              <span>{step.number}</span>
              <div>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
