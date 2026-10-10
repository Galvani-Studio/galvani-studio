import type { Metadata } from "next";
import { SiteNav } from "@/components/site/SiteNav";
import { SiteFooter } from "@/components/site/SiteFooter";
import { Hero } from "@/components/site/sections/Hero";
import { ExpandableServices } from "@/components/site/sections/ExpandableServices";
import { Portfolio } from "@/components/site/sections/Portfolio";
import { About } from "@/components/site/sections/About";
import { Faq } from "@/components/site/sections/Faq";
import { Contact } from "@/components/site/sections/Contact";
export const metadata: Metadata = { alternates: { canonical: "/" } };
export default function Home() {
  return (
    <>
      <SiteNav />
      <main id="main-content">
        <Hero />
        <ExpandableServices />
        <Portfolio />
        <About />
        <Faq />
        <Contact />
      </main>
      <SiteFooter />
    </>
  );
}
