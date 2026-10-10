import { ArrowUpRight, Check, Code2, Layers, ShieldCheck } from "lucide-react";
import { Reveal } from "../Reveal";
export function Hero() {
  return (
    <section className="hero dark" id="top" aria-labelledby="hero-title">
      <div className="container hero-grid">
        <div className="hero-copy">
          <Reveal>
            <span className="eyebrow">
              <span className="status-dot" /> Tecnologia com direção de negócio
            </span>
            <h1 id="hero-title">
              Engenharia de Software e Design Estratégico para Empresas que{" "}
              <em>Não Podem Parecer Amadoras.</em>
            </h1>
            <p className="hero-description">
              Desenvolvemos plataformas digitais, sistemas sob medida e ecossistemas web que
              fortalecem marcas e geram autoridade imediata.
            </p>
            <div className="hero-actions">
              <a href="#quote" className="btn btn-primary">
                Iniciar Projeto <ArrowUpRight size={18} />
              </a>
              <a href="#portfolio" className="btn btn-outline">
                Ver Casos de Estudo
              </a>
            </div>
            <div className="hero-proof">
              <span>
                <Code2 size={15} /> Engenharia sob medida
              </span>
              <span>
                <ShieldCheck size={15} /> Você no controle
              </span>
            </div>
          </Reveal>
        </div>
        <div
          className="dashboard-stage"
          aria-label="Demonstração visual de uma plataforma empresarial"
        >
          <div className="dashboard-glow" />
          <div className="dashboard">
            <div className="dashboard-top">
              <span className="window-dots">
                <i />
                <i />
                <i />
              </span>
              <span>galvani / workspace</span>
              <span className="demo-badge">DEMO</span>
            </div>
            <div className="dashboard-body">
              <aside className="dashboard-sidebar">
                <span className="dashboard-symbol">
                  G<span>.</span>
                </span>
                <Layers size={18} />
                <Code2 size={18} />
                <ShieldCheck size={18} />
              </aside>
              <div className="dashboard-content">
                <div className="dashboard-greeting">
                  <div>
                    <small>VISÃO GERAL</small>
                    <h3>Operação conectada.</h3>
                  </div>
                  <span className="live-label">Online</span>
                </div>
                <div className="dashboard-stats">
                  <div>
                    <small>Projetos ativos</small>
                    <strong>
                      12<span>↗</span>
                    </strong>
                  </div>
                  <div>
                    <small>Fluxos automatizados</small>
                    <strong>
                      08<span>↗</span>
                    </strong>
                  </div>
                </div>
                <div className="chart-panel">
                  <div>
                    <span>Performance operacional</span>
                    <small>Este mês</small>
                  </div>
                  <svg
                    viewBox="0 0 400 120"
                    role="img"
                    aria-label="Gráfico ilustrativo de evolução operacional"
                  >
                    <defs>
                      <linearGradient id="chart-fill" x1="0" y1="0" x2="0" y2="1">
                        <stop stopColor="#FF6B00" stopOpacity=".25" />
                        <stop offset="1" stopColor="#FF6B00" stopOpacity="0" />
                      </linearGradient>
                    </defs>
                    <path
                      d="M0 100 Q40 100 65 78 T130 66 T195 52 T260 44 T325 22 T400 8 L400 120 L0 120Z"
                      fill="url(#chart-fill)"
                    />
                    <path
                      d="M0 100 Q40 100 65 78 T130 66 T195 52 T260 44 T325 22 T400 8"
                      fill="none"
                      stroke="#FF6B00"
                      strokeWidth="3"
                    />
                    <path d="M0 115H400 M0 75H400 M0 35H400" stroke="#ffffff" strokeOpacity=".05" />
                  </svg>
                  <div className="chart-days">
                    <span>SEG</span>
                    <span>TER</span>
                    <span>QUA</span>
                    <span>QUI</span>
                    <span>SEX</span>
                  </div>
                </div>
                <div className="dashboard-task">
                  <span className="task-check">
                    <Check size={14} />
                  </span>
                  <div>
                    <strong>Integração concluída</strong>
                    <small>Seu processo. Uma única plataforma.</small>
                  </div>
                  <span>agora</span>
                </div>
              </div>
            </div>
            <div className="dashboard-bottom">
              <span>Arquitetura limpa. Negócio fluindo.</span>
              <span>v2.0</span>
            </div>
          </div>
          <div className="mobile-device">
            <div className="mobile-notch" />
            <small>GALVANI WORKSPACE</small>
            <strong>
              Seu negócio,
              <br />
              em movimento.
            </strong>
            <div className="mobile-ring">
              <Check size={26} />
            </div>
            <div className="mobile-task">
              <span className="status-dot" /> Tudo conectado
            </div>
            <div className="mobile-bars">
              <i />
              <i />
              <i />
              <i />
              <i />
              <i />
            </div>
          </div>
          <span className="demo-caption">
            Interface ilustrativa · plataformas feitas para sua operação
          </span>
        </div>
      </div>
      <div className="hero-bottom container">
        <span>ESTRATÉGIA + DESIGN + ENGENHARIA</span>
        <a href="#portfolio">
          Explore o que construímos <span>↓</span>
        </a>
      </div>
      <svg
        className="section-wave"
        viewBox="0 0 1440 50"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <path d="M0 50V26Q360 60 720 24T1440 26V50Z" fill="#FFFFFF" />
      </svg>
    </section>
  );
}
