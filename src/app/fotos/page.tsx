
import React from 'react'
import { client, sanityFetch } from '../../../sanity/lib/client';
import { FotoPost, fotoPostQuery } from '../../../sanity/lib/queries';
import MasonryGrid from '@/components/MasonryGrid';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Fotos - Pesqueiro 110",
  description: "Fotos de nossos clientes e do pesqueiro.",
  keywords: ["Fotos", "Pesqueiro", "Aquidauana", "Pantanal", "Pesca", "Natureza", "Pousada", "Lazer", "Pescaria", "Família", "Lazer", "Pantanal", "Mato Grosso do Sul", "MS", "Pantanal Sul", "Pantanal MS", "Pantanal Sul MS", "Pantanal Mato Grosso do Sul", "Pantanal Aquidauana", "Pantanal Aquidauana MS", "Pantanal Sul Aquidauana", "Pantanal Sul Aquidauana MS", "Pantanal Mato Grosso do Sul Aquidauana", "Pantanal Mato Grosso do Sul Aquidauana MS", "Pantanal Pesca", "Pantanal Pesqueiro", "Pantanal Pousada", "Pantanal Lazer", "Pantanal Pescaria", "Pantanal Família", "Pantanal Lazer", "Pantanal Pantanal", "Pantanal MS Pantanal", "Pantanal Sul Pantanal", "Pantanal Sul MS Pantanal", "Pantanal Mato Grosso do Sul Pantanal", "Pantanal Aquidauana Pantanal", "Pantanal Aquidauana MS Pantanal", "Pantanal Sul Aquidauana Pantanal", "Pantanal Sul Aquidauana MS Pantanal", "Pantanal Mato Grosso do Sul Aquidauana Pantanal", "Pantanal Mato Grosso do Sul Aquidauana MS Pantanal", "Pantanal Pesca Pantanal", "Pantanal Pesqueiro Pantanal", "Pantanal Pousada Pantanal", "Pantanal Lazer Pantanal", "Pantanal Pescaria Pantanal", "Pantanal Família Pantanal", "Pantanal Lazer Pantanal", "Pescarias MS"],
  abstract: "Fotos de nossos clientes e do pesqueiro.",
  category: "Pousada e Pesqueiro",
  publisher: "Pesqueiro 110",
  creator: "Pesqueiro 110",
  bookmarks: "Pesqueiro 110",
  alternates: {
    canonical: "https://pesqueiro110.com.br/fotos",
  },
  openGraph: {
    title: "Fotos",
    siteName: "Pesqueiro 110",
    description: "Fotos de nossos clientes e do pesqueiro.",
    url: "https://pesqueiro110.com.br/fotos",
    type: "website",
    images: [
      "https://www.pesqueiro110.com.br/_next/image?url=%2Fimages%2Fpesqueiro110.png&w=256&q=75",
    ],
  },
}

const BlogFotosPage = async () => {
  const fotos: FotoPost[] = await sanityFetch({
    query: fotoPostQuery,
    tags: ["fotoPost"],
  })

  console.log(fotos)

  return (
    <MasonryGrid posts={fotos} />
  )
}

export default BlogFotosPage