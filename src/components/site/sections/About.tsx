import { Reveal } from "../Reveal";

export function About() {
  return (
    <section className="section section--border about" id="about" aria-labelledby="about-h">
      <div>
        <Reveal as="span" className="eyebrow">
          Quem Somos
        </Reveal>
        <Reveal as="h2" className="h2" delay={1} id="about-h">
          Tecnologia que fortalece
          <br />
          negócios reais.
        </Reveal>
      </div>
      <div className="about-right">
        <Reveal as="p" delay={1}>
          A Galvani Studio nasceu para resolver um problema que ainda afeta milhares de empresas:
          oferecer um excelente serviço não é suficiente quando a presença digital não transmite a
          mesma qualidade.
        </Reveal>
        <Reveal as="p" delay={2}>
          Nossa missão é desenvolver soluções digitais que fortaleçam marcas, gerem confiança e
          criem conexões reais entre empresas e pessoas.
        </Reveal>
        <Reveal as="p" delay={3}>
          Acreditamos que tecnologia não deve complicar negócios, mas torná-los mais fortes, mais
          acessíveis e preparados para crescer. Mais do que desenvolver sites, construímos
          experiências digitais que representam a essência de cada empresa.
        </Reveal>
      </div>
    </section>
  );
}
