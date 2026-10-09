import { Reveal } from "../Reveal";
export function Manifesto() {
  return (
    <section className="mani-wrap" aria-label="Nosso compromisso">
      <Reveal>
        <div className="mani-sticky">
          <div className="mani-bg" />
          <div className="mani-text">
            <p className="mani-q">
              Entregamos a <em>autonomia</em> que empresas buscam e a presença digital que elas
              merecem, através da tecnologia.
            </p>
            <span className="mani-attr">Galvani Studio</span>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
