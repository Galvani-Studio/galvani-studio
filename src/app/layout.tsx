import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import "./globals.css";
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://galvanistudio.com";
const title = "Galvani Studio | Criação de Sites e Sistemas Web";
const description =
  "Criação de sites institucionais, landing pages e sistemas web sob medida. A Galvani Studio une design profissional, desenvolvimento React e Next.js e SEO técnico para empresas.";
export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: { default: title, template: "%s | Galvani Studio" },
  description,
  openGraph: {
    title,
    description,
    url: siteUrl,
    locale: "pt_BR",
    type: "website",
    siteName: "Galvani Studio",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Galvani Studio — Estratégia, design e engenharia",
      },
    ],
  },
  twitter: { card: "summary_large_image", title, description, images: ["/opengraph-image"] },
};
export const viewport: Viewport = { themeColor: "#FFFFFF" };
const organization = {
  "@context": "https://schema.org",
  "@type": ["Organization", "ProfessionalService"],
  name: "Galvani Studio",
  url: siteUrl,
  logo: new URL("/images/logo.png", siteUrl).href,
  email: "galvanistudio1@gmail.com",
  description,
  sameAs: [
    "https://www.instagram.com/galvani_studio/",
    "https://www.linkedin.com/company/galvani-studio/",
  ],
};
export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="pt-BR">
      <body>
        <a className="skip-link" href="#main-content">
          Pular para o conteúdo
        </a>
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organization).replace(/</g, "\u003c") }}
        />
      </body>
    </html>
  );
}
