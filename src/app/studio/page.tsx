import { PageShell, PageHeading } from "@/components/site/PageShell";
import { About } from "@/components/site/sections/About";
import { Faq } from "@/components/site/sections/Faq";
export const metadata = { title: "O Studio", alternates: { canonical: "/studio" } };
export default function Page() {
  return (
    <PageShell>
      <PageHeading
        label="GALVANI STUDIO"
        title="Design e desenvolvimento com acompanhamento próximo."
        text="Trabalhamos com empresas que precisam apresentar melhor seus serviços e organizar sua operação digital."
      />
      <About />
      <Faq />
    </PageShell>
  );
}
