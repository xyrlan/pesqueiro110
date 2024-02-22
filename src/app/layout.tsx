import type { Metadata } from "next";
import { Inter, Pacifico, Fredoka } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";

const inter = Inter({ subsets: ["latin"] });
const fredoka = Fredoka({ subsets: ["latin"]});

export const metadata: Metadata = {
  title: "Pesqueiro 110 - Aquidauana - MS",
  description: "Pesqueiro 110, um lugar para relaxar e aproveitar a natureza. 🎣🌳🌞 Aquidauana - MS,",
  applicationName: "Pesqueiro 110",
  keywords: ["Pesqueiro 110", "Pesqueiro", "Aquidauana", "Pantanal", "Pesca", "Natureza", "Pousada", "Lazer", "Pescaria", "Família", "Lazer", "Pantanal", "Mato Grosso do Sul", "MS", "Pantanal Sul", "Pantanal MS", "Pantanal Sul MS", "Pantanal Mato Grosso do Sul", "Pantanal Aquidauana", "Pantanal Aquidauana MS", "Pantanal Sul Aquidauana", "Pantanal Sul Aquidauana MS", "Pantanal Mato Grosso do Sul Aquidauana", "Pantanal Mato Grosso do Sul Aquidauana MS", "Pantanal Pesca", "Pantanal Pesqueiro", "Pantanal Pousada", "Pantanal Lazer", "Pantanal Pescaria", "Pantanal Família", "Pantanal Lazer", "Pantanal Pantanal", "Pantanal MS Pantanal", "Pantanal Sul Pantanal", "Pantanal Sul MS Pantanal", "Pantanal Mato Grosso do Sul Pantanal", "Pantanal Aquidauana Pantanal", "Pantanal Aquidauana MS Pantanal", "Pantanal Sul Aquidauana Pantanal", "Pantanal Sul Aquidauana MS Pantanal", "Pantanal Mato Grosso do Sul Aquidauana Pantanal", "Pantanal Mato Grosso do Sul Aquidauana MS Pantanal", "Pantanal Pesca Pantanal", "Pantanal Pesqueiro Pantanal", "Pantanal Pousada Pantanal", "Pantanal Lazer Pantanal", "Pantanal Pescaria Pantanal", "Pantanal Família Pantanal", "Pantanal Lazer Pantanal", "Pescarias MS"],
  abstract: "Pesqueiro 110, um lugar para relaxar e aproveitar a natureza. 🎣🌳🌞 Aquidauana - MS",
  category: "Pousada e Pesqueiro",
  publisher: "Pesqueiro 110",
  creator: "Pesqueiro 110",
  bookmarks: "Pesqueiro 110",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${fredoka.className} relative`}>
        <Header />
        {children}
      </body>
    </html>
  );
}
