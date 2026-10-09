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

export default function Home() {
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
