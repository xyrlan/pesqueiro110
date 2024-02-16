import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Pesqueiro 110, pescaria e lazer para toda a família! 🎣🌳🌞 Aquidauana - MS",
  description: "Pesqueiro 110, um lugar para relaxar e aproveitar a natureza. 🎣🌳🌞 Aquidauana - MS,",
  applicationName: "Pesqueiro 110",
  keywords: ["Pesqueiro 110", "Pesqueiro", "Aquidauana", "Pantanal", "Pesca", "Natureza", "Pousada", "Lazer"],
  abstract: "Pesqueiro 110, um lugar para relaxar e aproveitar a natureza. 🎣🌳🌞 Aquidauana - MS",
  category: "Pousada e Pesqueiro",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${inter.className} relative`}>
        <Header />
        {children}
      </body>
    </html>
  );
}
