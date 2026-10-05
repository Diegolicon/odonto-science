import type { Metadata } from "next";
import "./globals.css";
import { CLINIC } from "@/lib/constants";

export const metadata: Metadata = {
  title: `${CLINIC.name} | Odontologia Estética em Palmas-TO`,
  description:
    `${CLINIC.name} - Clínica odontológica de excelência na Praça dos Girassóis em Palmas-TO. Especialistas em lentes de contato dental, implantes, harmonização orofacial e ortodontia estética.`,
  keywords: [
    "odontologia estética Palmas TO",
    "lentes de contato dental Palmas",
    "implante dentário Palmas Tocantins",
    "harmonização facial Palmas",
    "clareamento dental Palmas",
    "dentista Palmas TO",
    "ortodontia Palmas",
    "Praça dos Girassóis dentista",
    CLINIC.name,
  ],
  openGraph: {
    title: `${CLINIC.name} | Odontologia Estética na Praça dos Girassóis`,
    description:
      `${CLINIC.tagline}. Transformando sorrisos em Palmas-TO desde ${CLINIC.founded}.`,
    type: "website",
    locale: "pt_BR",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
