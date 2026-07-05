import { useEffect, useRef } from "react";

export function Manifesto() {
  const wrapRef = useRef<HTMLDivElement | null>(null);
  const bgRef = useRef<HTMLDivElement | null>(null);
  const textRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const wrap = wrapRef.current;
    const bg = bgRef.current;
    const text = textRef.current;
    if (!wrap || !bg || !text) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      bg.style.transform = "scale(1)";
      bg.style.borderRadius = "0px";
      text.style.opacity = "1";
      return;
    }

    let raf = 0;
    // easeOutCubic — gives the zoom a soft, premium deceleration
    const easeOut = (t: number) => 1 - Math.pow(1 - t, 3);
    const GROW = 0.42; // portion of scroll spent growing the card
    const update = () => {
      raf = 0;
      const r = wrap.getBoundingClientRect();
      const total = wrap.offsetHeight - window.innerHeight;
      const p = Math.max(0, Math.min(1, -r.top / total));
      let sc: number;
      let textOp: number;
      if (p < GROW) {
        const t = easeOut(p / GROW);
        sc = 0.2 + t * 0.8;
        textOp = Math.max(0, (t - 0.72) / 0.28);
      } else if (p < 0.78) {
        sc = 1 + (p - GROW) * 0.04;
        textOp = 1;
      } else {
        sc = 1.015 + ((p - 0.78) / 0.22) * 0.05;
        textOp = Math.max(0, 1 - (p - 0.78) / 0.22);
      }
      bg.style.transform = `scale(${sc})`;
      bg.style.borderRadius = sc < 0.985 ? "var(--r-lg)" : "0px";
      text.style.opacity = String(textOp);
    };
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div className="mani-wrap" ref={wrapRef} aria-hidden="true">
      <div className="mani-sticky">
        <div className="mani-bg" ref={bgRef} />
        <div className="mani-text" ref={textRef}>
          <p className="mani-q">
            "Entregamos a <em>autonomia</em> que empresas buscam
            <br />e a presença digital que elas merecem,
            <br />
            através da tecnologia."
          </p>
          <span className="mani-attr">Galvani Studio · {new Date().getFullYear()}</span>
        </div>
      </div>
    </div>
  );
}
