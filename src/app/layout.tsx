import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import "./globals.css";
export const metadata: Metadata = {
  title: "Galvani Studio — Presença Digital que Gera Confiança",
  description: "Sites institucionais, sistemas web e software sob medida para empresas.",
  openGraph: { locale: "pt_BR", type: "website", siteName: "Galvani Studio" },
};
export const viewport: Viewport = { themeColor: "#0b1018" };
export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
