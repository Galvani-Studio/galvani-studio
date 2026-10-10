import { ArrowUpRight, PanelsTopLeft, MousePointer2, Blocks } from "lucide-react";
import { Reveal } from "../Reveal";
const services = [
  {
    icon: PanelsTopLeft,
    title: "Sites institucionais",
    text: "Apresente sua empresa com clareza. Páginas bem organizadas, design responsivo e estrutura preparada para os buscadores.",
  },
  {
    icon: MousePointer2,
    title: "Landing pages",
    text: "Uma página focada na sua oferta. Conteúdo objetivo e um caminho simples para o cliente entrar em contato.",
  },
  {
    icon: Blocks,
    title: "Sistemas web",
    text: "Organize processos e conecte sua operação. Desenvolvemos ferramentas de acordo com a rotina da sua equipe.",
  },
];
export function Services() {
  return (
    <section className="section offwhite" id="services" aria-labelledby="services-title">
      <div className="container">
        <Reveal>
          <header className="section-heading">
            <div>
              <span className="eyebrow">Soluções</span>
              <h2 id="services-title">
                O essencial.
                <br />
                <span>Feito com atenção.</span>
              </h2>
            </div>
            <p>Da apresentação da sua marca ao funcionamento do seu negócio.</p>
          </header>
        </Reveal>
        <div className="services-grid">
          {services.map((s, i) => (
            <Reveal key={s.title} delay={i as 0 | 1 | 2}>
              <article className="service-card">
                <s.icon size={30} aria-hidden="true" />
                <h3>{s.title}</h3>
                <p>{s.text}</p>
                <a href="#quote" className="text-link">
                  Conversar sobre {s.title.toLowerCase()}{" "}
                  <ArrowUpRight size={20} aria-hidden="true" />
                </a>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
