import type { Metadata } from "next";
import "./globals.css";
import { CLINIC } from "@/lib/constants";

export const metadata: Metadata = {
  title: `${CLINIC.name} | Odontologia Estética em Palmas-TO`,
  description:
    "Clínica odontológica humanizada e multidisciplinar em Palmas-TO. Especialistas em lentes de contato dental, implantes, harmonização facial, clareamento e muito mais. Agende já!",
  keywords: [
    "odontologia estética Palmas TO",
    "lentes de contato dental Palmas",
    "implante dentário Palmas Tocantins",
    "harmonização facial Palmas",
    "clareamento dental Palmas",
    "dentista Palmas TO",
    "ortodontia Palmas",
    "Odonto Science",
  ],
  openGraph: {
    title: `${CLINIC.name} | Odontologia Estética em Palmas-TO`,
    description:
      "Odontologia humanizada e multidisciplinar. Transformamos sorrisos em Palmas-TO desde 2009.",
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
