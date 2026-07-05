import { useEffect, useState } from "react";
import { ArrowRight } from "lucide-react";
import { BrandLogo } from "./BrandLogo";

const LINKS = [
  { href: "#about", label: "Quem Somos" },
  { href: "#portfolio", label: "Projetos" },
  { href: "#services", label: "Serviços" },
  { href: "#faq", label: "FAQ" },
  { href: "#contact", label: "Contato" },
];

export function SiteNav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 32);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <nav className={`nav${scrolled ? " scrolled" : ""}`} aria-label="Menu principal">
        <a href="#top" className="brand" aria-label="Galvani Studio — início">
          <BrandLogo />
        </a>

        <div className="nav-center">
          {LINKS.map((l) => (
            <a key={l.href} href={l.href}>
              {l.label}
            </a>
          ))}
        </div>

        <div className="nav-right">
          <a href="#contact" className="btn btn-nav">
            Iniciar Projeto
            <ArrowRight size={13} strokeWidth={2.4} />
          </a>
          <button
            className="hamburger"
            aria-label={open ? "Fechar menu" : "Abrir menu"}
            aria-expanded={open}
            aria-controls="mob-menu"
            onClick={() => setOpen((v) => !v)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </nav>

      {open && (
        <div id="mob-menu" className="mob" role="dialog" aria-modal="true" aria-label="Menu">
          {LINKS.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)}>
              {l.label}
            </a>
          ))}
          <a href="#contact" onClick={() => setOpen(false)}>
            Iniciar Projeto
          </a>
        </div>
      )}
    </>
  );
}
