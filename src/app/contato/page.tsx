import { PageShell, PageHeading } from "@/components/site/PageShell";
import { Contact } from "@/components/site/sections/Contact";
export const metadata = { title: "Contato", alternates: { canonical: "/contato" } };
export default function Page() {
  return (
    <PageShell>
      <PageHeading
        label="CONTATO"
        title="Conte sobre o seu projeto."
        text="Apresente sua empresa, o que deseja construir e se já possui um site ou uma instalação WordPress."
      />
      <Contact />
    </PageShell>
  );
}
