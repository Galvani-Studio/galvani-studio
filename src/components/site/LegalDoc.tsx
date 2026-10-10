"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { BrandLogo } from "./BrandLogo";

export type DocBlock =
  | { type: "p"; text: string }
  | { type: "h3"; text: string }
  | { type: "ul"; items: string[] }
  | { type: "table"; head: string[]; rows: string[][] }
  | { type: "contact"; lines: string[] };

export interface DocSection {
  id: string;
  label: string;
  title: string;
  blocks: DocBlock[];
}

export interface LegalDocProps {
  eyebrow?: string;
  title: string;
  meta: string;
  intro: string;
  sections: DocSection[];
}

function renderBlock(b: DocBlock, i: number) {
  switch (b.type) {
    case "p":
      return (
        <p className="body-text" key={i}>
          {b.text}
        </p>
      );
    case "h3":
      return (
        <h3 className="sub-title" key={i}>
          {b.text}
        </h3>
      );
    case "ul":
      return (
        <ul className="body-list" key={i}>
          {b.items.map((it, j) => (
            <li key={j}>{it}</li>
          ))}
        </ul>
      );
    case "table":
      return (
        <table className="cookie-table" key={i}>
          <thead>
            <tr>
              {b.head.map((h, j) => (
                <th key={j}>{h}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {b.rows.map((r, j) => (
              <tr key={j}>
                {r.map((c, k) => (
                  <td key={k}>{k === 0 ? <code>{c}</code> : c}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      );
    case "contact":
      return (
        <div className="contact-box" key={i}>
          {b.lines.map((l, j) => {
            const m = l.match(/^(.*?:\s*)(\S+@\S+)$/);
            return (
              <p key={j}>
                {m ? (
                  <>
                    <strong>{m[1]}</strong>
                    <a href={`mailto:${m[2]}`}>{m[2]}</a>
                  </>
                ) : (
                  <strong>{l}</strong>
                )}
              </p>
            );
          })}
        </div>
      );
  }
}

export function LegalDoc({
  eyebrow = "Documento Legal",
  title,
  meta,
  intro,
  sections,
}: LegalDocProps) {
  const [active, setActive] = useState(sections[0]?.id ?? "");

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) setActive(e.target.id);
        }
      },
      { rootMargin: "-20% 0px -70% 0px", threshold: 0 },
    );
    sections.forEach((s) => {
      const el = document.getElementById(s.id);
      if (el) obs.observe(el);
    });
    return () => obs.disconnect();
  }, [sections]);

  return (
    <main className="doc" id="main-content">
      <nav className="doc-nav">
        <Link href="/" className="nav-logo" aria-label="Galvani Studio — início">
          <BrandLogo small />
        </Link>
        <Link href="/" className="doc-back">
          <ArrowLeft size={14} strokeWidth={2} />
          Voltar ao site
        </Link>
      </nav>

      <header className="doc-hero">
        <span className="doc-eyebrow">{eyebrow}</span>
        <h1 className="doc-title">{title}</h1>
        <p className="doc-meta">{meta}</p>
      </header>

      <div className="doc-body">
        <aside className="doc-index" aria-label="Índice">
          <span className="index-title">Índice</span>
          <ul className="index-list">
            {sections.map((s) => (
              <li key={s.id}>
                <a href={`#${s.id}`} className={active === s.id ? "active" : ""}>
                  {s.label}
                </a>
              </li>
            ))}
          </ul>
        </aside>

        <div className="doc-content">
          <div className="highlight-box">
            <p>{intro}</p>
          </div>
          {sections.map((s) => (
            <section className="doc-section" id={s.id} key={s.id}>
              <h2 className="sec-title">{s.title}</h2>
              {s.blocks.map(renderBlock)}
            </section>
          ))}

          <footer className="doc-footer">
            <p>© {new Date().getFullYear()} Galvani Studio. Todos os direitos reservados.</p>
            <div className="doc-footer-links">
              <Link href="/privacy">Privacidade</Link>
              <Link href="/cookies">Cookies</Link>
              <Link href="/terms">Termos</Link>
            </div>
          </footer>
        </div>
      </div>
    </main>
  );
}
