import PeixesCatalog from '@/components/PeixesCatalog'
import { Metadata } from 'next'
import React from 'react'

export const metadata:Metadata = {
  title: "Peixes - Pesqueiro 110",
  description: "Conheça os peixes que você pode pescar em nosso pesqueiro.",
  keywords: ["Peixes", "Pesqueiro", "Aquidauana", "Pantanal", "Pesca", "Natureza", "Pousada", "Lazer", "Pescaria", "Família", "Lazer", "Pantanal", "Mato Grosso do Sul", "MS", "Pantanal Sul", "Pantanal MS", "Pantanal Sul MS", "Pantanal Mato Grosso do Sul", "Pantanal Aquidauana", "Pantanal Aquidauana MS", "Pantanal Sul Aquidauana", "Pantanal Sul Aquidauana MS", "Pantanal Mato Grosso do Sul Aquidauana", "Pantanal Mato Grosso do Sul Aquidauana MS", "Pantanal Pesca", "Pantanal Pesqueiro", "Pantanal Pousada", "Pantanal Lazer", "Pantanal Pescaria", "Pantanal Família", "Pantanal Lazer", "Pantanal Pantanal", "Pantanal MS Pantanal", "Pantanal Sul Pantanal", "Pantanal Sul MS Pantanal", "Pantanal Mato Grosso do Sul Pantanal", "Pantanal Aquidauana Pantanal", "Pantanal Aquidauana MS Pantanal", "Pantanal Sul Aquidauana Pantanal", "Pantanal Sul Aquidauana MS Pantanal", "Pantanal Mato Grosso do Sul Aquidauana Pantanal", "Pantanal Mato Grosso do Sul Aquidauana MS Pantanal", "Pantanal Pesca Pantanal", "Pantanal Pesqueiro Pantanal", "Pantanal Pousada Pantanal", "Pantanal Lazer Pantanal", "Pantanal Pescaria Pantanal", "Pantanal Família Pantanal", "Pantanal Lazer Pantanal", "Pescarias MS"],
  abstract: "Conheça os peixes que você pode pescar em nosso pesqueiro.",
  category: "Pousada e Pesqueiro",
  publisher: "Pesqueiro 110", 
  creator: "Xyrlan",
  bookmarks: "Pesqueiro 110",
  alternates: {
    canonical: "https://pesqueiro110.com.br/peixes",
  },
  openGraph: {
    title: "Peixes",
    siteName: "Pesqueiro 110",
    description: "Conheça os peixes que você pode pescar em nosso pesqueiro.",
    url: "https://pesqueiro110.com.br/peixes",
    type: "website",
    images: [
      "https://www.pesqueiro110.com.br/_next/image?url=%2Fimages%2Fpesqueiro110.png&w=256&q=75",
    ],
  },
}

const PeixesPage = () => {
  return (
    <PeixesCatalog />
  )
}

export default PeixesPage