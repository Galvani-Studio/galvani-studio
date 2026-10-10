import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, ArrowRight } from "lucide-react";
import { PageShell } from "@/components/site/PageShell";
import { Portfolio } from "@/components/site/sections/Portfolio";
import { Services } from "@/components/site/sections/Services";
export const metadata: Metadata = { alternates: { canonical: "/" } };
export default function Home() {
  return (
    <PageShell>
      <section id="top" className="corporate-hero">
        <div className="container corporate-hero-grid">
          <div className="corporate-intro">
            <p className="eyebrow">GALVANI STUDIO / DESIGN E DESENVOLVIMENTO</p>
            <h1>Uma presença digital à altura da sua empresa.</h1>
            <p>
              Sites institucionais, projetos em WordPress e sistemas web. Da organização do conteúdo
              à publicação, construímos uma experiência que apresenta seu negócio com clareza e
              cuidado.
            </p>
            <div className="corporate-actions">
              <Link className="btn" href="/contato">
                Conversar sobre um projeto <ArrowUpRight size={18} />
              </Link>
              <Link className="text-link" href="/portfolio">
                Explorar o portfólio <ArrowRight size={18} />
              </Link>
            </div>
          </div>
          <Link href="/portfolio/solucoes-vieira" className="hero-project">
            <div className="browser-heading">
              <span />
              <span />
              <span />
              <small>PROJETO EM DESTAQUE</small>
            </div>
            <Image
              src="/images/solucoes-vieira.png"
              alt="Página desenvolvida para a Soluções Vieira"
              width={1920}
              height={1080}
              priority
            />
            <div className="hero-project-caption">
              <div>
                <small>AGRONEGÓCIO / LANDING PAGE</small>
                <h2>Soluções Vieira</h2>
              </div>
              <ArrowUpRight size={26} />
            </div>
          </Link>
        </div>
        <div className="container expertise-strip">
          <span>Sites institucionais</span>
          <span>WordPress</span>
          <span>Landing pages</span>
          <span>Sistemas sob medida</span>
        </div>
      </section>
      <Portfolio />
      <Services />
      <section className="section studio-summary">
        <div className="container studio-grid">
          <div>
            <span className="eyebrow">O STUDIO</span>
            <h2>Um parceiro para construir e evoluir seu projeto.</h2>
          </div>
          <div>
            <p>
              A Galvani Studio reúne design e desenvolvimento em um processo próximo: entender seu
              negócio, organizar as informações e entregar uma solução que sua equipe possa manter e
              usar.
            </p>
            <Link href="/studio" className="text-link">
              Conheça nossa forma de trabalhar <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>
      <section className="project-invitation">
        <div className="container">
          <div>
            <p className="eyebrow">PRÓXIMO PROJETO</p>
            <h2>Vamos conversar sobre sua empresa?</h2>
          </div>
          <Link className="btn" href="/contato">
            Solicitar orçamento <ArrowUpRight size={18} />
          </Link>
        </div>
      </section>
    </PageShell>
  );
}
