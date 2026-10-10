import { ArrowUpRight } from "lucide-react";
import { Reveal } from "../Reveal";
export function About() {
  return (
    <section className="section offwhite story" id="about" aria-labelledby="story-title">
      <svg className="story-nodes" viewBox="0 0 900 600" aria-hidden="true">
        <g fill="none" stroke="currentColor" strokeWidth="1">
          <path d="M30 90L260 160L480 70L740 220L850 490M260 160L350 420L740 220M350 420L660 540M480 70L520 350L850 490" />
          {[
            [30, 90],
            [260, 160],
            [480, 70],
            [740, 220],
            [850, 490],
            [350, 420],
            [520, 350],
            [660, 540],
          ].map(([x, y]) => (
            <circle key={x} cx={x} cy={y} r="6" />
          ))}
        </g>
      </svg>
      <div className="container story-grid">
        <Reveal>
          <span className="eyebrow">03 / A filosofia por trás do código</span>
          <h2 id="story-title">
            Sua empresa não precisa de mais uma ferramenta.
            <br />
            <em>Precisa de autonomia.</em>
          </h2>
        </Reveal>
        <Reveal delay={1}>
          <div className="story-copy">
            <p className="story-lead">
              Uma presença digital fraca custa confiança. Um processo manual custa tempo. Uma
              plataforma engessada custa oportunidades.
            </p>
            <p>
              A Galvani Studio trabalha onde esses problemas se encontram. Unimos design estratégico
              e engenharia para transformar uma necessidade concreta em uma solução que sua equipe
              consegue usar, entender e evoluir.
            </p>
            <p>
              Nossa filosofia é direta: tecnologia limpa, decisões explicadas e arquitetura que
              acompanha o negócio. Da primeira conversa à entrega, você sabe o que está sendo
              construído e por quê.
            </p>
            <div className="story-signature">
              <span className="signature-mark">G.</span>
              <div>
                <strong>Galvani Studio</strong>
                <span>Presença com propósito. Operação com autonomia.</span>
              </div>
            </div>
            <a href="#quote" className="text-link">
              Vamos entender o seu cenário <ArrowUpRight size={18} />
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
