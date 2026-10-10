import {
  ArrowUpRight,
  ScanLine,
  PenTool,
  Code2,
  GitBranch,
  Globe,
  MousePointer2,
  RefreshCw,
  Blocks,
  Workflow,
} from "lucide-react";
import { Reveal } from "../Reveal";
import { Stagger } from "../Stagger";
import { Carousel } from "../Carousel";
const steps = [
  {
    icon: ScanLine,
    title: "Diagnóstico & Escopo",
    text: "Identificamos onde a operação trava, quem usa a solução e o que precisa mudar. Escopo claro antes da primeira linha de código.",
  },
  {
    icon: PenTool,
    title: "Arquitetura & UI/UX",
    text: "Organizamos informação, jornadas e interfaces para reduzir atritos. Cada decisão de design tem uma função no seu negócio.",
  },
  {
    icon: Code2,
    title: "Engenharia Next.js 15",
    text: "Next.js 15, SEO técnico e carregamento abaixo de 1s como meta, validada conforme conteúdo, dispositivo e conexão.",
  },
  {
    icon: GitBranch,
    title: "Evolução & Suporte",
    text: "Entrega documentada, suporte acordado e uma base preparada para novas integrações. Sua operação cresce sem começar do zero.",
  },
];
const deliverables = [
  {
    icon: ScanLine,
    title: "Performance & SEO",
    text: "Diagnóstico de velocidade, estrutura técnica e melhorias para seu conteúdo ser encontrado.",
  },
  {
    icon: Globe,
    title: "Sites Institucionais Corporativos",
    text: "Autoridade digital para decisões de compra que exigem confiança.",
  },
  {
    icon: MousePointer2,
    title: "Landing Pages de Alta Conversão",
    text: "Uma oferta clara e o caminho mais curto até o contato comercial.",
  },
  {
    icon: RefreshCw,
    title: "Redesign e Modernização de Plataformas",
    text: "Menos atrito, mais clareza e uma base pronta para evoluir.",
  },
  {
    icon: Blocks,
    title: "Sistemas Web & SaaS Sob Medida",
    text: "A tecnologia se adapta à sua operação, e não o contrário.",
  },
  {
    icon: Workflow,
    title: "Automações de Processos B2B",
    text: "Conecte ferramentas e devolva à equipe o tempo gasto em tarefas manuais.",
  },
];
export function HowWeWork() {
  return (
    <section className="section dark-slate" id="services" aria-labelledby="process-title">
      <div className="container">
        <Reveal>
          <header className="section-heading">
            <div>
              <span className="eyebrow">02 / Clareza do início à escala</span>
              <h2 id="process-title">
                Menos gargalos.
                <br />
                <em>Mais negócio.</em>
              </h2>
            </div>
            <p>
              Um processo visível.
              <br />
              Decisões que você pode acompanhar.
            </p>
          </header>
        </Reveal>
        <Stagger>
          {steps.map((s, i) => (
            <article className="process-step" key={s.title}>
              <div className="process-top">
                <span>0{i + 1}</span>
                <s.icon size={22} />
                <ArrowUpRight className="process-arrow" size={17} />
              </div>
              <h3>{s.title}</h3>
              <p>{s.text}</p>
            </article>
          ))}
        </Stagger>
        <div className="performance-strip">
          <div>
            <strong>SEO</strong>
            <span>Estrutura técnica desde a origem</span>
          </div>
          <div>
            <strong>&lt; 1s</strong>
            <span>Meta de carregamento, sujeita a medição</span>
          </div>
          <div>
            <strong>100%</strong>
            <span>Código do projeto entregue conforme contrato</span>
          </div>
        </div>
        <div className="deliverables-heading">
          <span className="eyebrow">O que construímos para você</span>
          <span>Arraste para explorar ↔</span>
        </div>
        <Carousel label="Entregáveis" variant="deliverables">
          {deliverables.map((d) => (
            <article className="deliverable-card" key={d.title}>
              <d.icon size={24} />
              <h3>{d.title}</h3>
              <p>{d.text}</p>
              <a href="#quote" className="text-link">
                Conversar sobre esta solução <ArrowUpRight size={16} />
              </a>
            </article>
          ))}
        </Carousel>
      </div>
    </section>
  );
}
