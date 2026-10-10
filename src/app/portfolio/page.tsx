import { PageShell, PageHeading } from "@/components/site/PageShell";
import { Portfolio } from "@/components/site/sections/Portfolio";
export const metadata = { title: "Portfólio", alternates: { canonical: "/portfolio" } };
export default function Page() {
  return (
    <PageShell>
      <PageHeading
        label="PORTFÓLIO"
        title="Projetos que você pode conhecer de perto."
        text="Explore a apresentação, o contexto e as entregas de cada trabalho. Acesse também os sites publicados."
      />
      <Portfolio />
    </PageShell>
  );
}
