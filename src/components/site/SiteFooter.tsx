import Link from "next/link";
import { Instagram, Linkedin } from "lucide-react";
import { BrandLogo } from "./BrandLogo";
export function SiteFooter() {
  return (
    <footer className="footer dark">
      <div className="container footer-grid">
        <a href="/#top" className="brand" aria-label="Galvani Studio — início">
          <BrandLogo />
        </a>
        <p>
          Cada peça no lugar. Sua empresa em movimento.
          <br />
          <a href="mailto:galvanistudio1@gmail.com">galvanistudio1@gmail.com</a>
        </p>
        <div className="b-social">
          <a
            href="https://www.instagram.com/galvani_studio/"
            aria-label="Instagram da Galvani Studio"
          >
            <Instagram size={22} />
          </a>
          <a
            href="https://www.linkedin.com/company/galvani-studio/"
            aria-label="LinkedIn da Galvani Studio"
          >
            <Linkedin size={22} />
          </a>
        </div>
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
