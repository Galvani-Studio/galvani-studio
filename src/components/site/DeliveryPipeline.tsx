"use client";

import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Workflow, PenTool, Code2, Server, Pause, Play } from "lucide-react";

const stages = [
  {
    title: "Diagnóstico & Arquitetura",
    detail: "Requisitos e prioridades do negócio.",
    icon: Workflow,
    status: "[ESCOPO] Requisitos mapeados\n[ARQUITETURA] Estrutura definida",
  },
  {
    title: "Design de Alta Fidelidade",
    detail: "UI/UX no Figma e design system.",
    icon: PenTool,
    status: "[DESIGN] Interface em revisão\n[SISTEMA] Componentes organizados",
  },
  {
    title: "Engenharia & Código",
    detail: "Next.js 15, componentes e performance.",
    icon: Code2,
    status: "[BUILD: SUCCESS] Next.js 15 compilado\n[CHECK] Validação antes da publicação",
  },
  {
    title: "Deploy & Servidor Global",
    detail: "Vercel, SSL e monitoramento previsto no escopo.",
    icon: Server,
    status: "[STATUS: 200 OK] Aplicação publicada\n[SSL] Conexão HTTPS ativada",
  },
];

export function DeliveryPipeline() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const reduced = useReducedMotion();
  return (
    <section className="section pipeline-section" id="process" aria-labelledby="pipeline-title">
      <div className="container">
        <header className="section-heading">
          <div>
            <span className="eyebrow">Da ideia à publicação</span>
            <h2 id="pipeline-title">
              Um processo claro.
              <br />
              Uma entrega consistente.
            </h2>
          </div>
          <p>Explore as etapas que transformam uma necessidade em um projeto no ar.</p>
        </header>
        <ol className="pipeline-steps" aria-label="Etapas de entrega">
          {stages.map((stage, index) => {
            const Icon = stage.icon;
            return (
              <li key={stage.title}>
                <button
                  type="button"
                  className="pipeline-stage"
                  aria-pressed={active === index}
                  aria-controls="pipeline-terminal"
                  onMouseEnter={() => setActive(index)}
                  onFocus={() => setActive(index)}
                  onClick={() => setActive(index)}
                >
                  <span className="pipeline-stage-top">
                    <span>0{index + 1}</span>
                    <Icon size={25} aria-hidden="true" />
                  </span>
                  <span className="pipeline-stage-title">{stage.title}</span>
                  <span className="pipeline-stage-detail">{stage.detail}</span>
                </button>
                {index < stages.length - 1 && (
                  <span className="pipeline-connector" aria-hidden="true">
                    <motion.span
                      className="pipeline-packet"
                      animate={
                        reduced || paused
                          ? { opacity: 0 }
                          : { top: ["0%", "100%"], left: ["0%", "100%"], opacity: [0, 1, 1, 0] }
                      }
                      transition={{
                        duration: 2.8,
                        repeat: reduced || paused ? 0 : Infinity,
                        delay: index * 0.55,
                        ease: "linear",
                      }}
                    />
                  </span>
                )}
              </li>
            );
          })}
        </ol>
        <div
          className="pipeline-terminal"
          id="pipeline-terminal"
          role="region"
          aria-label="Demonstração de status da etapa selecionada"
        >
          <div className="pipeline-terminal-bar">
            <span>Fluxo de entrega · demonstração</span>
            <button
              type="button"
              onClick={() => setPaused(!paused)}
              aria-label={paused ? "Retomar animação do fluxo" : "Pausar animação do fluxo"}
              disabled={!!reduced}
            >
              {paused || reduced ? (
                <Play size={17} aria-hidden="true" />
              ) : (
                <Pause size={17} aria-hidden="true" />
              )}
            </button>
          </div>
          <pre>{stages[active].status}</pre>
          <p>Status ilustrativos. Este painel não representa monitoramento de produção.</p>
        </div>
      </div>
    </section>
  );
}
