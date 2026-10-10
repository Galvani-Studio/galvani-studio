import type { Metadata } from "next";
import {
  ArrowRight,
  Check,
  Mail,
  Instagram,
  Linkedin,
  Route,
  Zap,
  Smartphone,
  X,
} from "lucide-react";
import { SiteNav } from "@/components/site/SiteNav";
import { SiteFooter } from "@/components/site/SiteFooter";
import { QuoteForm } from "@/components/site/sections/QuoteForm";
import { AssemblyProcess } from "@/components/site/AssemblyProcess";
export const metadata: Metadata = { alternates: { canonical: "/" } };
export default function Home() {
  return (
    <div className="b2b">
      <SiteNav />
      <main id="main-content">
        <section id="top" className="b-hero b-blueprint">
          <div className="container b-hero-grid">
            <div>
              <p className="b-kicker">ESTRATÉGIA DIGITAL • GALVANI STUDIO</p>
              <h1>
                Sua Empresa Não Precisa de Apenas Mais Um Site.{" "}
                <span>Precisa de uma Solução que Venda por Você.</span>
              </h1>
              <p className="b-lead">
                Nós transformamos a presença digital da sua marca em uma máquina organizada de
                atrair e converter clientes. Sem complicação técnica.
              </p>
              <div className="b-actions">
                <a className="b-cta" href="#quote">
                  Quero Minha Solução Pronta <ArrowRight size={18} />
                </a>
                <a className="b-secondary" href="#process">
                  Entenda Como Funciona <ArrowRight size={17} />
                </a>
              </div>
              <div className="b-proof">
                <span>
                  <Check size={16} /> Clareza para seu cliente
                </span>
                <span>
                  <Check size={16} /> Tecnologia para seu negócio
                </span>
              </div>
            </div>
            <div
              className="b-assembly"
              aria-label="Estratégia, design e tecnologia se encaixam para transformar visitantes em contatos"
            >
              <div className="b-diagram-label">MANUAL DE MONTAGEM / 01</div>
              <div className="b-brick b-brick-one">
                <span>01 / ESTRATÉGIA</span>
                <strong>A direção certa.</strong>
              </div>
              <div className="b-brick b-brick-two">
                <span>02 / DESIGN</span>
                <strong>Clareza em cada clique.</strong>
              </div>
              <div className="b-brick b-brick-three">
                <span>03 / TECNOLOGIA</span>
                <strong>Tudo funcionando junto.</strong>
              </div>
              <div className="b-result">
                <span className="b-status-dot" /> Sua empresa pronta para receber clientes{" "}
                <ArrowRight size={18} />
              </div>
            </div>
          </div>
          <div className="container b-benefits">
            <span>
              <Route /> Um caminho claro até o contato
            </span>
            <span>
              <Zap /> Velocidade que facilita a navegação
            </span>
            <span>
              <Smartphone /> Experiência pensada para o celular
            </span>
          </div>
        </section>
        <AssemblyProcess />
        <section id="difference" className="b-section b-slate">
          <div className="container">
            <p className="b-kicker">A EXPERIÊNCIA FAZ A DIFERENÇA</p>
            <div className="b-heading">
              <h2>
                O mesmo produto.
                <br />
                <span>Uma escolha muito mais clara.</span>
              </h2>
              <p>
                Assim como um carro, um site precisa de mais que uma boa aparência. Cada peça deve
                funcionar para levar seu cliente ao destino certo.
              </p>
            </div>
            <p className="b-statement">
              O seu cliente já sabe que precisa do seu produto. O nosso trabalho é mostrar por que
              ele deve escolher <strong>EXATAMENTE A SUA EMPRESA.</strong>
            </p>
            <div className="b-compare">
              <article className="b-generic">
                <span className="b-kicker">SITE GENÉRICO</span>
                <h3>Seu cliente precisa adivinhar.</h3>
                {[
                  "Informações soltas e sem prioridade",
                  "Visual que não transmite confiança",
                  "Páginas lentas e difíceis no celular",
                  "Contato escondido no fim do caminho",
                ].map((t) => (
                  <p key={t}>
                    <X size={18} />
                    {t}
                  </p>
                ))}
              </article>
              <article className="b-organized">
                <span className="b-kicker">GALVANI STUDIO</span>
                <h3>Cada peça tem um propósito.</h3>
                {[
                  "Sua oferta explicada de forma simples",
                  "Design que comunica profissionalismo",
                  "Navegação rápida em qualquer tela",
                  "Um próximo passo visível e fácil",
                ].map((t) => (
                  <p key={t}>
                    <Check size={18} />
                    {t}
                  </p>
                ))}
              </article>
            </div>
          </div>
        </section>
        <section id="about" className="b-section b-about b-blueprint">
          <div className="container b-about-grid">
            <div>
              <p className="b-kicker">SOBRE A GALVANI STUDIO</p>
              <h2>
                Somos uma empresa focada em resolver problemas digitais,{" "}
                <span>não em criar novos.</span>
              </h2>
            </div>
            <div>
              <p>
                Você conhece o seu negócio. Nós organizamos as peças para que seus clientes também
                entendam o valor dele.
              </p>
              <p>
                Da primeira conversa à publicação, conectamos estratégia, design e tecnologia em uma
                solução feita para a sua empresa. Você acompanha cada etapa, com linguagem simples e
                decisões claras.
              </p>
              <a className="b-secondary" href="#quote">
                Vamos montar sua próxima etapa <ArrowRight size={18} />
              </a>
            </div>
          </div>
        </section>
        <section id="quote" className="b-section b-slate">
          <div className="container b-contact-grid">
            <div>
              <p className="b-kicker">O PRIMEIRO ENCAIXE COMEÇA AQUI</p>
              <h2>
                Conte o que sua empresa precisa. <span>Nós organizamos o caminho.</span>
              </h2>
              <p className="b-contact-copy">
                Preencha os campos ao lado para solicitar seu orçamento. Não precisa conhecer
                tecnologia: basta contar qual problema você quer resolver.
              </p>
              <a className="b-mail" href="mailto:galvanistudio1@gmail.com">
                <Mail size={20} />
                galvanistudio1@gmail.com
              </a>
              <div className="b-social">
                <a
                  href="https://www.instagram.com/galvani_studio/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Instagram />
                  Instagram
                </a>
                <a
                  href="https://www.linkedin.com/company/galvani-studio/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Linkedin />
                  LinkedIn
                </a>
              </div>
            </div>
            <div className="b-form-panel">
              <h3>Sua solução começa com uma conversa.</h3>
              <p>Quatro campos. Um próximo passo concreto.</p>
              <QuoteForm />
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
