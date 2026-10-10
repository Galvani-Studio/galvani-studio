import { Plus } from "lucide-react";
import { Reveal } from "../Reveal";
const faqs = [
  {
    q: "Quais são os prazos de entrega?",
    a: "O cronograma é definido após o diagnóstico. Como referência de planejamento, landing pages podem levar de 7 a 14 dias e sites institucionais de 3 a 6 semanas, após aprovação do escopo e recebimento dos materiais. Sistemas e projetos Enterprise recebem um roadmap por etapas. O prazo válido é o acordado na proposta.",
  },
  {
    q: "A solução funciona em celulares e tablets?",
    a: "Sim. A interface é planejada para telas móveis, tablets e desktops. Navegação, formulários e conteúdo são adaptados a cada tamanho, com validação dos principais fluxos antes da entrega.",
  },
  {
    q: "Como funciona o suporte após a entrega?",
    a: "O período de acompanhamento, os canais e os tempos de resposta são definidos na proposta. Manutenção e evolução podem ser contratadas conforme a necessidade da operação, com responsabilidades e escopo documentados.",
  },
  {
    q: "Posso solicitar alterações durante o projeto?",
    a: "Sim. As etapas de aprovação e rodadas de revisão são combinadas antes do início. Demandas que ampliam o escopo recebem uma avaliação de impacto em custo e prazo, para que você decida com clareza.",
  },
  {
    q: "Quem fica com a propriedade intelectual e o código-fonte?",
    a: "As condições de propriedade intelectual e a entrega do código-fonte são documentadas no contrato. O código desenvolvido para o projeto é entregue conforme essas condições; bibliotecas, fontes e serviços de terceiros permanecem sujeitos às respectivas licenças. A entrega inclui as orientações acordadas para continuidade.",
  },
];
export function Faq() {
  return (
    <section className="section light" id="faq" aria-labelledby="faq-title">
      <div className="container faq-layout">
        <Reveal>
          <span className="eyebrow">05 / Antes de começar</span>
          <h2 id="faq-title">
            Decisões claras.
            <br />
            <em>Sem surpresas.</em>
          </h2>
          <p>
            Uma boa parceria começa com
            <br />
            expectativas bem alinhadas.
          </p>
          <a href="#quote" className="text-link">
            Ainda tem uma dúvida? Vamos conversar ↗
          </a>
        </Reveal>
        <div className="faq-list">
          {faqs.map((f, i) => (
            <details className="faq-item" key={f.q} open={i === 0 ? true : undefined}>
              <summary>
                {f.q}
                <Plus size={20} aria-hidden="true" />
              </summary>
              <p>{f.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
