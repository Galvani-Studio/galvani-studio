"use client";
import { useRef, useState } from "react";
import { LayoutGroup, motion, useReducedMotion } from "framer-motion";
import {
  ArrowUpRight,
  Blocks,
  Building2,
  MousePointer2,
  ScanLine,
  Gauge,
  Plus,
  Minus,
} from "lucide-react";
const services = [
  {
    title: "Sistemas web sob medida",
    icon: Blocks,
    description: "Substitua planilhas dispersas e processos manuais por uma operação conectada.",
    detail:
      "Organizamos regras de negócio, permissões e jornadas em uma aplicação feita para sua equipe. O escopo parte da rotina real, com entregas por etapas e critérios de aceite claros.",
    deliverables: [
      "Mapeamento de fluxos e requisitos",
      "Interface, integrações e controle de acesso",
      "Documentação e plano de evolução",
    ],
    stack: "Next.js · React · TypeScript · APIs",
  },
  {
    title: "Plataformas B2B corporativas",
    icon: Building2,
    description: "Uma presença institucional que sustenta decisões de compra complexas.",
    detail:
      "Transformamos serviços, diferenciais e provas de capacidade em uma arquitetura de informação que compradores conseguem entender. A experiência conecta posicionamento, conteúdo e contato comercial.",
    deliverables: [
      "Arquitetura de conteúdo e navegação",
      "Design system responsivo e acessível",
      "SEO técnico e captação de oportunidades",
    ],
    stack: "App Router · Server Components · Conteúdo estruturado",
  },
  {
    title: "Landing pages de conversão",
    icon: MousePointer2,
    description: "Uma oferta clara. Um caminho direto entre interesse e contato.",
    detail:
      "Construímos páginas para campanhas e ofertas específicas, com narrativa objetiva, hierarquia visual e formulário integrado. A instrumentação de resultados é definida no escopo para orientar as próximas decisões.",
    deliverables: [
      "Estratégia da oferta e jornada de conversão",
      "Página adaptada a telas móveis",
      "Formulário e integração com seu atendimento",
    ],
    stack: "Next.js · Formspree ou webhook · Eventos de conversão",
  },
  {
    title: "Redesign de produtos digitais",
    icon: ScanLine,
    description: "Reduza fricção e recupere clareza sem perder o que já funciona.",
    detail:
      "Revisamos navegação, interfaces e tarefas críticas antes de desenhar novas telas. A modernização respeita o contexto do usuário e a continuidade da operação, com migração planejada.",
    deliverables: [
      "Diagnóstico da experiência atual",
      "Protótipos e componentes reutilizáveis",
      "Plano de implantação e migração",
    ],
    stack: "UI/UX · React · Design tokens · Acessibilidade",
  },
  {
    title: "Performance e SEO técnico",
    icon: Gauge,
    description: "Uma base rápida, legível e preparada para ser encontrada.",
    detail:
      "Identificamos gargalos de carregamento, problemas de indexação e barreiras de acessibilidade. Cada otimização parte de um diagnóstico e é comparada com uma medição anterior, sem promessas de posicionamento garantido.",
    deliverables: [
      "Auditoria de carregamento e estrutura",
      "Otimização de imagens e renderização",
      "Metadata, dados estruturados e relatório técnico",
    ],
    stack: "Core Web Vitals · Metadata API · JSON-LD",
  },
];
export function ExpandableServices() {
  const [active, setActive] = useState<number | null>(0);
  const buttons = useRef<(HTMLButtonElement | null)[]>([]);
  const reduced = useReducedMotion();
  const spring = reduced
    ? { duration: 0 }
    : { type: "spring" as const, stiffness: 250, damping: 30, mass: 0.8 };
  return (
    <section
      className="section light services-section"
      id="services"
      aria-labelledby="services-title"
    >
      <div className="container">
        <header className="section-heading">
          <div>
            <span className="eyebrow">01 / Competências conectadas</span>
            <h2 id="services-title">
              O que o seu negócio precisa.
              <br />
              <span>Construído para funcionar.</span>
            </h2>
          </div>
          <p>Explore cada solução. A arquitetura certa começa por entender o problema certo.</p>
        </header>
        <LayoutGroup id="enterprise-services">
          <div className="service-grid">
            {services.map((service, index) => {
              const expanded = active === index;
              return (
                <motion.article
                  key={service.title}
                  data-service="true"
                  layout
                  transition={spring}
                  className={`service-card ${expanded ? "is-expanded" : ""}`}
                  onPointerEnter={(event) => {
                    if (event.pointerType !== "mouse") return;
                    const focused = document.activeElement;
                    if (
                      focused?.closest("[data-service]") &&
                      !event.currentTarget.contains(focused)
                    )
                      return;
                    setActive(index);
                  }}
                >
                  <h3>
                    <button
                      ref={(el) => {
                        buttons.current[index] = el;
                      }}
                      id={`service-trigger-${index}`}
                      aria-expanded={expanded}
                      aria-controls={`service-panel-${index}`}
                      className="service-trigger"
                      onClick={() => setActive(expanded ? null : index)}
                      onKeyDown={(event) => {
                        let next = index;
                        if (event.key === "ArrowDown" || event.key === "ArrowRight")
                          next = (index + 1) % services.length;
                        else if (event.key === "ArrowUp" || event.key === "ArrowLeft")
                          next = (index + services.length - 1) % services.length;
                        else if (event.key === "Home") next = 0;
                        else if (event.key === "End") next = services.length - 1;
                        else return;
                        event.preventDefault();
                        buttons.current[next]?.focus();
                        setActive(next);
                      }}
                    >
                      <span className="service-icon">
                        <service.icon size={26} aria-hidden="true" />
                      </span>
                      <span>{service.title}</span>
                      <span className="service-toggle">
                        {expanded ? (
                          <Minus aria-hidden="true" size={22} />
                        ) : (
                          <Plus aria-hidden="true" size={22} />
                        )}
                      </span>
                      {expanded && (
                        <motion.span
                          className="service-active"
                          layoutId="selected-service"
                          transition={spring}
                          aria-hidden="true"
                        />
                      )}
                    </button>
                  </h3>
                  <p className="service-summary">{service.description}</p>
                  <div
                    id={`service-panel-${index}`}
                    role="region"
                    aria-labelledby={`service-trigger-${index}`}
                    hidden={!expanded}
                  >
                    <div className="service-details">
                      <p>{service.detail}</p>
                      <div>
                        <span className="detail-label">Entregáveis definidos no escopo</span>
                        <ul>
                          {service.deliverables.map((item) => (
                            <li key={item}>{item}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                    <div className="service-bottom">
                      <p>
                        <span className="detail-label">Base de arquitetura</span>
                        {service.stack}
                      </p>
                      <a className="text-link" href="#quote">
                        Conversar sobre esta solução <ArrowUpRight size={20} aria-hidden="true" />
                      </a>
                    </div>
                  </div>
                </motion.article>
              );
            })}
          </div>
        </LayoutGroup>
      </div>
    </section>
  );
}
