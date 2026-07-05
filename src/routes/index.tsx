import { createFileRoute } from "@tanstack/react-router";
import { SiteNav } from "@/components/site/SiteNav";
import { SiteFooter } from "@/components/site/SiteFooter";
import { Hero } from "@/components/site/sections/Hero";
import { Manifesto } from "@/components/site/sections/Manifesto";
import { About } from "@/components/site/sections/About";
import { HowWeWork } from "@/components/site/sections/HowWeWork";
import { Portfolio } from "@/components/site/sections/Portfolio";
import { Services } from "@/components/site/sections/Services";
import { Faq } from "@/components/site/sections/Faq";
import { Contact, QuoteSection } from "@/components/site/sections/Contact";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Galvani Studio — Presença Digital que Gera Confiança" },
      {
        name: "description",
        content:
          "Soluções digitais que fortalecem marcas, geram confiança e conectam empresas a pessoas. Sites institucionais, landing pages, sistemas web e software sob medida.",
      },
      { property: "og:title", content: "Galvani Studio — Presença Digital que Gera Confiança" },
      {
        property: "og:description",
        content: "Soluções digitais que fortalecem marcas e geram confiança.",
      },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      <SiteNav />
      <main>
        <Hero />
        <Manifesto />
        <About />
        <HowWeWork />
        <Portfolio />
        <Services />
        <Faq />
        <Contact />
        <QuoteSection />
      </main>
      <SiteFooter />
    </>
  );
}
