import type { ReactNode } from "react";
import { SiteNav } from "./SiteNav";
import { SiteFooter } from "./SiteFooter";
export function PageShell({ children }: { children: ReactNode }) {
  return (
    <div className="corporate">
      <SiteNav />
      <main id="main-content">{children}</main>
      <SiteFooter />
    </div>
  );
}
export function PageHeading({
  label,
  title,
  text,
}: {
  label: string;
  title: string;
  text: string;
}) {
  return (
    <header className="page-heading">
      <div className="container">
        <p className="eyebrow">{label}</p>
        <h1>{title}</h1>
        <p>{text}</p>
      </div>
    </header>
  );
}
