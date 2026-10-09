import Link from "next/link";
import { Instagram, Linkedin, Mail } from "lucide-react";
import { BrandLogo } from "./BrandLogo";
import { INSTAGRAM_URL, LINKEDIN_URL, MAILTO } from "./social";

export function SiteFooter() {
  return (
    <footer className="footer" role="contentinfo">
      <div className="ft-brand">
        <a href="#top" className="brand" aria-label="Galvani Studio — início">
          <BrandLogo small />
        </a>
        <p className="ft-tag">
          Presença digital que fortalece marcas, gera confiança e conecta empresas a pessoas.
        </p>
        <p className="ft-copy">
          © {new Date().getFullYear()} Galvani Studio. Todos os direitos reservados.
        </p>
      </div>

      <nav className="ft-links" aria-label="Links do rodapé">
        <a href="#about">Quem Somos</a>
        <Link href="/privacy">Política de Privacidade</Link>
        <a href="#portfolio">Projetos</a>
        <Link href="/cookies">Política de Cookies</Link>
        <a href="#contact">Contato</a>
        <Link href="/terms">Termos de Uso</Link>
      </nav>

      <nav className="ft-social" aria-label="Redes sociais">
        <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" aria-label="Instagram">
          <Instagram size={18} strokeWidth={1.8} />
        </a>
        <a href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
          <Linkedin size={18} strokeWidth={1.8} />
        </a>
        <a href={MAILTO} aria-label="Enviar email">
          <Mail size={18} strokeWidth={1.8} />
        </a>
      </nav>
    </footer>
  );
}
