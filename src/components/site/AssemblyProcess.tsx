"use client";
import { useState } from "react";
import { ArrowRight, Blocks, Map, Layers, Building2 } from "lucide-react";
const steps = [
  {
    title: "As Peças",
    label: "Diagnóstico & Entendimento",
    icon: Blocks,
    text: "Entendemos a sua ideia, seu produto e o problema real do seu cliente.",
    detail:
      "Antes de montar, escolhemos as peças certas. Conversamos sobre sua empresa, seu público e o resultado que você espera alcançar.",
    output: "Uma direção clara para o projeto.",
  },
  {
    title: "O Manual",
    label: "O Fluxo de Vendas",
    icon: Map,
    text: "Mapeamos o caminho exato que o seu visitante vai fazer até clicar no botão de contato.",
    detail:
      "Organizamos as informações na ordem em que seu cliente precisa encontrá-las: entender a oferta, confiar na empresa e entrar em contato.",
    output: "Um caminho simples da visita ao contato.",
  },
  {
    title: "Encaixe Perfeito",
    label: "Design & Tecnologia",
    icon: Layers,
    text: "Unimos visual marcante, velocidade e adaptação para celulares.",
    detail:
      "Montamos um site com identidade própria, páginas leves e navegação intuitiva. Cuidamos da performance e das boas práticas que o Google avalia.",
    output: "Uma experiência rápida, bonita e fácil de usar.",
  },
  {
    title: "O Prédio Pronto",
    label: "Seu Site Gerando Resultados",
    icon: Building2,
    text: "Colocamos seu site no ar com domínio, SEO no Google e formulário direto no seu e-mail ou WhatsApp.",
    detail:
      "Configuramos o domínio, a base de SEO para ajudar o Google a encontrar suas páginas e o canal de contato definido no projeto. Validamos tudo antes da entrega.",
    output: "Sua presença digital pronta para receber oportunidades.",
  },
];
export function AssemblyProcess() {
  const [active, setActive] = useState(0);
  return (
    <section id="process" className="b-section">
      <div className="container">
        <p className="b-kicker">O PROCESSO GALVANI</p>
        <div className="b-heading">
          <h2>
            Criar um site é como <span>montar Lego.</span>
          </h2>
          <p>
            Você traz a ideia. Nós escolhemos as peças, desenhamos o manual e cuidamos de cada
            encaixe.
          </p>
        </div>
        <p className="b-process-hint">Explore os quatro blocos para entender a montagem.</p>
        <ol className="b-steps">
          {steps.map((s, i) => (
            <li key={s.title}>
              <button
                type="button"
                aria-pressed={active === i}
                aria-controls="assembly-detail"
                onClick={() => setActive(i)}
              >
                <div className="b-step-top">
                  <s.icon size={24} />
                  <span>0{i + 1}</span>
                </div>
                <h3>{s.title}</h3>
                <span className="b-step-label">{s.label}</span>
                <p>{s.text}</p>
                <span className="b-step-explore">
                  {active === i ? "Etapa selecionada" : "Explorar etapa"}
                  <ArrowRight size={16} />
                </span>
              </button>
            </li>
          ))}
        </ol>
        <div
          id="assembly-detail"
          className="b-process-detail"
          role="region"
          aria-label="Detalhes da etapa"
          aria-live="polite"
        >
          <span className="b-detail-number">0{active + 1}</span>
          <div>
            <h3>{steps[active].title}: cada peça tem seu lugar.</h3>
            <p>{steps[active].detail}</p>
          </div>
          <div className="b-deliverable">
            <span>O QUE VOCÊ RECEBE</span>
            <strong>{steps[active].output}</strong>
          </div>
        </div>
        <p className="b-process-note">
          Sem termos difíceis. Sem peças soltas. Você entende o que está sendo construído.
        </p>
      </div>
    </section>
  );
}
