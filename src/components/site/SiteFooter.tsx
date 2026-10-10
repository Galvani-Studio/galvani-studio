import Link from "next/link";
import { BrandLogo } from "./BrandLogo";
export function SiteFooter() {
  return (
    <footer className="footer dark">
      <div className="container footer-grid">
        <a href="/#top" className="brand" aria-label="Galvani Studio — início">
          <BrandLogo />
        </a>
        <p>
          Estratégia, design e engenharia.
          <br />
          Seu negócio pronto para o próximo passo.
        </p>
        <nav aria-label="Links legais">
          <Link href="/privacy">Privacidade</Link>
          <Link href="/terms">Termos de uso</Link>
          <Link href="/cookies">Cookies</Link>
        </nav>
      </div>
      <div className="container footer-bottom">
        <span>© {new Date().getFullYear()} Galvani Studio.</span>
        <span>Presença com propósito. Operação com autonomia.</span>
      </div>
    </footer>
  );
}
