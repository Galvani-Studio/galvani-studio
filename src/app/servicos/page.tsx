import { PageShell, PageHeading } from "@/components/site/PageShell";
import { Services } from "@/components/site/sections/Services";
import { Faq } from "@/components/site/sections/Faq";
export const metadata = { title: "Serviços", alternates: { canonical: "/servicos" } };
export default function Page() {
  return (
    <PageShell>
      <PageHeading
        label="SERVIÇOS"
        title="Design, conteúdo e tecnologia no mesmo projeto."
        text="Escolhemos a estrutura e as ferramentas de acordo com o que sua empresa precisa apresentar, administrar e integrar."
      />
      <Services />
      <section className="section">
        <div className="container studio-grid">
          <div>
            <p className="eyebrow">WORDPRESS</p>
            <h2>Seu conteúdo nas mãos da sua equipe.</h2>
          </div>
          <div>
            <p>
              Estrutura de páginas, portfólio e conteúdo editável no painel do WordPress. O projeto
              considera identidade visual, navegação, adaptação ao celular e orientação para
              atualizar as informações.
            </p>
            <p>
              Integrações, hospedagem, manutenção e permissões são definidas na proposta conforme a
              instalação e a rotina da empresa.
            </p>
            <a className="text-link" href="/contato">
              Planejar meu site em WordPress →
            </a>
          </div>
        </div>
      </section>
      <Faq />
    </PageShell>
  );
}
