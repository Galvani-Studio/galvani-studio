import {
  ArrowRight,
  Building2,
  Gauge,
  LayoutTemplate,
  LifeBuoy,
  MonitorSmartphone,
  Repeat,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { Reveal } from "../Reveal";

const SERVICES: { icon: LucideIcon; name: string; desc: string }[] = [
  {
    icon: Building2,
    name: "Sites Institucionais",
    desc: "Presença digital sólida que transmite confiança e profissionalismo para clientes e parceiros.",
  },
  {
    icon: LayoutTemplate,
    name: "Landing Pages",
    desc: "Páginas estratégicas desenvolvidas para gerar conversões e apresentar produtos ou serviços com clareza.",
  },
  {
    icon: Repeat,
    name: "Redesign de Sites",
    desc: "Modernização de sites existentes, preservando o que funciona e elevando a experiência do usuário.",
  },
  {
    icon: Gauge,
    name: "Otimização de Performance",
    desc: "Sites mais rápidos, melhor pontuação no Google e experiência superior para seus visitantes.",
  },
  {
    icon: LifeBuoy,
    name: "Manutenção e Evolução",
    desc: "Acompanhamento contínuo para garantir que seu site cresça e evolua junto com o seu negócio.",
  },
];

export function Services() {
  return (
    <section className="section section--border" id="services" aria-labelledby="srv-h">
      <Reveal as="span" className="eyebrow">
        Serviços
      </Reveal>
      <Reveal as="h2" className="h2" delay={1} id="srv-h">
        O que entregamos.
      </Reveal>

      <div className="srv-grid">
        {SERVICES.map((s, i) => {
          const Icon = s.icon;
          return (
            <Reveal as="div" className="srv" delay={((i % 3) + 1) as 1 | 2 | 3} key={s.name}>
              <span className="srv-ic">
                <Icon size={20} strokeWidth={1.8} />
              </span>
              <h3 className="srv-name">{s.name}</h3>
              <p className="srv-desc">{s.desc}</p>
            </Reveal>
          );
        })}

        <Reveal as="div" className="srv srv--cta" delay={3}>
          <span className="srv-ic">
            <MonitorSmartphone size={20} strokeWidth={1.8} />
          </span>
          <h3 className="srv-name">Seu negócio merece uma presença digital à altura.</h3>
          <p className="srv-desc">
            Vamos entender juntos qual é a melhor solução para a sua empresa.
          </p>
          <a href="#contact" className="case-link">
            Falar Conosco
            <ArrowRight size={12} strokeWidth={2.4} />
          </a>
        </Reveal>
      </div>
    </section>
  );
}
