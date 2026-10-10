"use client";
import { useEffect, useRef, useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { BrandLogo } from "./BrandLogo";
const links = [
  { href: "#portfolio", label: "Projetos" },
  { href: "#services", label: "Soluções" },
  { href: "#about", label: "O Studio" },
  { href: "#faq", label: "FAQ" },
];
export function SiteNav() {
  const [open, setOpen] = useState(false);
  const toggle = useRef<HTMLButtonElement>(null);
  const panel = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (!open) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    panel.current?.querySelector<HTMLAnchorElement>("a")?.focus();
    const key = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        toggle.current?.focus();
      }
      if (e.key === "Tab") {
        const controls = Array.from(panel.current?.querySelectorAll<HTMLElement>("a,button") || []);
        const first = controls[0],
          last = controls[controls.length - 1];
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last?.focus();
        }
        if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first?.focus();
        }
      }
    };
    const media = window.matchMedia("(min-width: 1000px)");
    const resize = () => {
      if (media.matches) setOpen(false);
    };
    media.addEventListener("change", resize);
    window.addEventListener("keydown", key);
    return () => {
      document.body.style.overflow = previous;
      window.removeEventListener("keydown", key);
      media.removeEventListener("change", resize);
    };
  }, [open]);
  return (
    <>
      <nav className="nav" aria-label="Menu principal">
        <div className="nav-inner container">
          <a href="/#top" className="brand" aria-label="Galvani Studio — início">
            <BrandLogo />
          </a>
          <div className="nav-center">
            {links.map((l) => (
              <a key={l.href} href={l.href}>
                {l.label}
              </a>
            ))}
          </div>
          <div className="nav-right">
            <a href="#quote" className="btn btn-nav">
              Iniciar Projeto <ArrowUpRight size={16} aria-hidden="true" />
            </a>
            <button
              ref={toggle}
              className="menu-toggle"
              aria-label={open ? "Fechar menu" : "Abrir menu"}
              aria-expanded={open}
              aria-controls={open ? "mobile-menu" : undefined}
              onClick={() => setOpen((v) => !v)}
            >
              {open ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
            </button>
          </div>
        </div>
      </nav>
      {open && (
        <div
          ref={panel}
          id="mobile-menu"
          className="mobile-menu"
          role="dialog"
          aria-modal="true"
          aria-label="Navegação"
        >
          <button
            className="icon-button menu-close"
            aria-label="Fechar menu"
            onClick={() => {
              setOpen(false);
              toggle.current?.focus();
            }}
          >
            <X aria-hidden="true" />
          </button>
          {links.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)}>
              {l.label}
            </a>
          ))}
          <a href="#quote" onClick={() => setOpen(false)}>
            Iniciar Projeto ↗
          </a>
        </div>
      )}
    </>
  );
}
