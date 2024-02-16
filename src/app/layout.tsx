import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Pesqueiro 110, aqui você aproveita a natureza! 🎣🌳🌞 Aquidauana - MS",
  description: "Pesqueiro 110, um lugar para relaxar e aproveitar a natureza. 🎣🌳🌞 Aquidauana - MS,",
  applicationName: "Pesqueiro 110",
  keywords: ["Pesqueiro 110", "Pesqueiro", "Aquidauana", "Pantanal", "Pesca", "Natureza"],
  abstract: "Pesqueiro 110, um lugar para relaxar e aproveitar a natureza. 🎣🌳🌞 Aquidauana - MS",
  themeColor: "#f76616",
  viewport: "width=device-width, initial-scale=1, maximum-scale=1",
  category: "Pousada e Pesqueiro",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={inter.className}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
