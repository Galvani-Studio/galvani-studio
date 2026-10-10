import { FileCode2, LockKeyhole, Network, Fingerprint } from "lucide-react";
import { Reveal } from "../Reveal";
const principles = [
  {
    icon: FileCode2,
    title: "Código que você recebe",
    text: "Entrega do código desenvolvido, documentação e condições de propriedade registradas em contrato. Sem dependência de uma caixa-preta.",
  },
  {
    icon: LockKeyhole,
    title: "Segurança definida no escopo",
    text: "Validação de entradas, responsabilidades de acesso e integração planejada. As proteções acompanham os dados e os riscos do projeto.",
  },
  {
    icon: Network,
    title: "Arquitetura para continuar",
    text: "Componentes reutilizáveis, fronteiras claras e integrações documentadas. Crescer não precisa significar reconstruir tudo.",
  },
];
export function About() {
  return (
    <section className="section offwhite" id="about" aria-labelledby="about-title">
      <div className="container philosophy-grid">
        <Reveal>
          <span className="eyebrow">03 / Nosso padrão de trabalho</span>
          <h2 id="about-title">
            Sua operação.
            <br />
            Seu código.
            <br />
            <span>Seu próximo passo.</span>
          </h2>
          <p className="philosophy-lead">
            Tecnologia deve aumentar sua autonomia. Não criar uma nova dependência.
          </p>
          <p>
            Desenhamos a interface e a arquitetura a partir de quem usa, quem decide e quem mantém.
            Você participa das decisões e entende o que recebe.
          </p>
          <div className="philosophy-signature">
            <Fingerprint size={32} aria-hidden="true" />
            <span>
              Galvani Studio
              <br />
              <strong>Design estratégico. Engenharia responsável.</strong>
            </span>
          </div>
        </Reveal>
        <div className="principles-list">
          {principles.map((principle) => (
            <article key={principle.title}>
              <principle.icon size={28} aria-hidden="true" />
              <div>
                <h3>{principle.title}</h3>
                <p>{principle.text}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
