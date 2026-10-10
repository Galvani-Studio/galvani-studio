import type { Metadata } from "next";
export const metadata: Metadata = { alternates: { canonical: "/" } };
import { SiteNav } from "@/components/site/SiteNav";
import { SiteFooter } from "@/components/site/SiteFooter";
import { Hero } from "@/components/site/sections/Hero";
import { Portfolio } from "@/components/site/sections/Portfolio";
import { HowWeWork } from "@/components/site/sections/HowWeWork";
import { About } from "@/components/site/sections/About";
import { Plans } from "@/components/site/sections/Plans";
import { Faq } from "@/components/site/sections/Faq";
import { Contact } from "@/components/site/sections/Contact";
export default function Home() {
  return (
    <>
      <SiteNav />
      <main id="main-content">
        <Hero />
        <Portfolio />
        <HowWeWork />
        <About />
        <Plans />
        <Faq />
        <Contact />
      </main>
      <SiteFooter />
    </>
  );
}
