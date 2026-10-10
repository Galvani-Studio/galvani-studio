import Link from "next/link";
export default function NotFound() {
  return (
    <main id="main-content" className="container" style={{ paddingBlock: "120px" }}>
      <h1>Página não encontrada</h1>
      <p>Confira o endereço ou volte ao início.</p>
      <Link href="/">Voltar ao início</Link>
    </main>
  );
}
