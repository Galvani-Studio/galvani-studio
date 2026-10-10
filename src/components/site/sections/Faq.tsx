"use client";
import { useState } from "react";
import { Plus, Minus } from "lucide-react";
const faqs = [
  {
    q: "Como vocês definem os prazos de entrega?",
    a: "O diagnóstico define o cronograma, as etapas de aprovação e as dependências do cliente. Landing pages, sites e sistemas têm complexidades diferentes. O prazo válido é documentado na proposta, após análise do escopo e dos materiais disponíveis.",
  },
  {
    q: "A experiência é adaptada a celulares e tablets?",
    a: "Sim. Conteúdo, navegação e tarefas essenciais são projetados para diferentes tamanhos de tela. A validação dos dispositivos e navegadores previstos é definida no escopo, com atenção a leitura, toque e uso por teclado.",
  },
  {
    q: "O que acontece depois da publicação?",
    a: "O período de acompanhamento e os canais de suporte são acordados antes do início. Manutenção corretiva, evolução e novas funcionalidades têm responsabilidades, condições e prioridades documentadas.",
  },
  {
    q: "Quem recebe o código e a propriedade do projeto?",
    a: "O código desenvolvido para o projeto é entregue conforme o contrato, junto às orientações acordadas para continuidade. Bibliotecas, fontes e serviços de terceiros seguem suas próprias licenças. A proposta explicita as condições de propriedade intelectual.",
  },
  {
    q: "Como são tratadas mudanças no escopo?",
    a: "Cada etapa tem critérios de aprovação. Uma nova necessidade recebe avaliação de prazo, custo e impacto antes de implementação. Você decide com clareza, sem ampliar o projeto de forma silenciosa.",
  },
];
export function Faq() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section className="section dark-slate" id="faq" aria-labelledby="faq-title">
      <div className="container faq-layout">
        <header>
          <span className="eyebrow">04 / Confiança antes do compromisso</span>
          <h2 id="faq-title">
            Expectativas alinhadas.
            <br />
            <span>Decisões bem informadas.</span>
          </h2>
          <p>As respostas essenciais para começar uma parceria com clareza.</p>
        </header>
        <div className="faq-list">
          {faqs.map((faq, index) => {
            const expanded = open === index;
            return (
              <article className="faq-item" key={faq.q}>
                <h3>
                  <button
                    id={`faq-trigger-${index}`}
                    aria-expanded={expanded}
                    aria-controls={`faq-panel-${index}`}
                    onClick={() => setOpen(expanded ? null : index)}
                    className="faq-trigger"
                  >
                    {faq.q}
                    {expanded ? (
                      <Minus size={24} aria-hidden="true" />
                    ) : (
                      <Plus size={24} aria-hidden="true" />
                    )}
                  </button>
                </h3>
                <div
                  id={`faq-panel-${index}`}
                  role="region"
                  aria-labelledby={`faq-trigger-${index}`}
                  hidden={!expanded}
                >
                  <p>{faq.a}</p>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
