import Image from "next/image";
import { notFound } from "next/navigation";
import { PageShell, PageHeading } from "@/components/site/PageShell";
const projects = {
  "solucoes-vieira": {
    title: "Soluções Vieira",
    sector: "Agronegócio",
    type: "Landing page",
    image: "/images/solucoes-vieira.png",
    url: "https://solucoes-vieira-landingpage.vercel.app/",
    context:
      "Apresentação dos serviços de instalação e manutenção de pivôs centrais, com uma estrutura voltada ao contato comercial.",
    delivery: [
      "Apresentação dos serviços técnicos",
      "Organização das informações comerciais",
      "Navegação adaptada para celulares",
      "Acesso aos canais de contato",
    ],
  },
  "thais-bianca": {
    title: "Thaís Bianca",
    sector: "Advocacia",
    type: "Site institucional",
    image: "/images/thais-bianca.png",
    url: "https://thaisbianca.vercel.app/",
    context:
      "Uma presença institucional para apresentar a profissional, suas áreas de atuação e os canais de atendimento do escritório.",
    delivery: [
      "Apresentação profissional",
      "Conteúdo sobre as áreas de atuação",
      "Estrutura institucional responsiva",
      "Canais de atendimento acessíveis",
    ],
  },
};
export function generateStaticParams() {
  return Object.keys(projects).map((slug) => ({ slug }));
}
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = projects[slug as keyof typeof projects];
  return { title: project?.title ?? "Projeto", alternates: { canonical: `/portfolio/${slug}` } };
}
export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const p = projects[slug as keyof typeof projects];
  if (!p) notFound();
  return (
    <PageShell>
      <PageHeading
        label={`PORTFÓLIO / ${p.sector.toUpperCase()}`}
        title={p.title}
        text={p.context}
      />
      <section className="section">
        <div className="container case-layout">
          <div className="case-image">
            <Image src={p.image} alt={`Projeto ${p.title}`} width={1920} height={1080} />
          </div>
          <aside>
            <p className="eyebrow">FICHA DO PROJETO</p>
            <dl>
              <dt>Cliente</dt>
              <dd>{p.title}</dd>
              <dt>Segmento</dt>
              <dd>{p.sector}</dd>
              <dt>Formato</dt>
              <dd>{p.type}</dd>
            </dl>
            <a href={p.url} target="_blank" rel="noopener noreferrer" className="btn">
              Visitar site publicado ↗
            </a>
          </aside>
        </div>
        <div className="container case-delivery">
          <h2>O que o projeto apresenta</h2>
          <ul>
            {p.delivery.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <a className="text-link" href="/portfolio">
            ← Voltar ao portfólio
          </a>
        </div>
      </section>
    </PageShell>
  );
}
