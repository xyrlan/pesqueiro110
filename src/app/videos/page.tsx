import React from 'react'
import { VideoPost, videoPostQuery } from '../../../sanity/lib/queries'
import { sanityFetch } from '../../../sanity/lib/client'
import MasonryGrid from '@/components/MasonryGrid'
import { Metadata } from 'next'
import MasonryGridVideo from '@/components/MasonryGridVideo'

export const metadata: Metadata = {
  title: "Videos - Pesqueiro 110",
  description: "Videos de nossos clientes e do pesqueiro.",
  keywords: ["Videos", "Pesqueiro", "Aquidauana", "Pantanal", "Pesca", "Natureza", "Pousada", "Lazer", "Pescaria", "Família", "Lazer", "Pantanal", "Mato Grosso do Sul", "MS", "Pantanal Sul", "Pantanal MS", "Pantanal Sul MS", "Pantanal Mato Grosso do Sul", "Pantanal Aquidauana", "Pantanal Aquidauana MS", "Pantanal Sul Aquidauana", "Pantanal Sul Aquidauana MS", "Pantanal Mato Grosso do Sul Aquidauana", "Pantanal Mato Grosso do Sul Aquidauana MS", "Pantanal Pesca", "Pantanal Pesqueiro", "Pantanal Pousada", "Pantanal Lazer", "Pantanal Pescaria", "Pantanal Família", "Pantanal Lazer", "Pantanal Pantanal", "Pantanal MS Pantanal", "Pantanal Sul Pantanal", "Pantanal Sul MS Pantanal", "Pantanal Mato Grosso do Sul Pantanal", "Pantanal Aquidauana Pantanal", "Pantanal Aquidauana MS Pantanal", "Pantanal Sul Aquidauana Pantanal", "Pantanal Sul Aquidauana MS Pantanal", "Pantanal Mato Grosso do Sul Aquidauana Pantanal", "Pantanal Mato Grosso do Sul Aquidauana MS Pantanal", "Pantanal Pesca Pantanal", "Pantanal Pesqueiro Pantanal", "Pantanal Pousada Pantanal", "Pantanal Lazer Pantanal", "Pantanal Pescaria Pantanal", "Pantanal Família Pantanal", "Pantanal Lazer Pantanal", "Pescarias MS"],
  abstract: "Videos de nossos clientes e do pesqueiro.",
  category: "Pousada e Pesqueiro",
  publisher: "Pesqueiro 110",
  creator: "Pesqueiro 110",
  bookmarks: "Pesqueiro 110",
  alternates: {
    canonical: "https://pesqueiro110.com.br/videos",
  },
  openGraph: {
    title: "Videos",
    siteName: "Pesqueiro 110",
    description: "Videos de nossos clientes e do pesqueiro.",
    url: "https://pesqueiro110.com.br/videos",
    type: "website",
    images: [
      "https://www.pesqueiro110.com.br/_next/image?url=%2Fimages%2Fpesqueiro110.png&w=256&q=75",
    ],
  },
}

const VideosPage = async () => {

  const videos: VideoPost[] = await sanityFetch({
    query: videoPostQuery,
    tags: ["videoPost"],
  })

  return (
    <section className='min-h-screen justify-center p-12 py-32 sm:py-44 px-6 sm:p-24 bg-primary'>
      <div className='md:container'>
        <h1 className='text-4xl text-secondary mb-10 font-medium tracking-tighter'>Videos do Youtube</h1>
        <div className='grid md:grid-cols-2 gap-10 w-full'>
          <iframe width='100%' height={'315'} src="https://www.youtube.com/embed/z-VFDP4Al94?si=FcYdj2UZYp2Ihsnu" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
          <iframe width='100%' height={'315'} src="https://www.youtube.com/embed/tWnpaZjNQ0M?si=HmAkRPb1k1mto1Ta" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
          <iframe width='100%' height={'315'} src="https://www.youtube.com/embed/YB4oFhMxjUw?si=DgNR1oO1M9nkcQKj" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
          <iframe width='100%' height={'315'} src="https://www.youtube.com/embed/6i2C4DWqQv4?si=8wYL02Dc6A-iIqtO" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
          <iframe width='100%' height={'315'} src="https://www.youtube.com/embed/grkH1vRBqkY?si=ySbkCdR2Z6iZw8gA" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
          <iframe width='100%' height={'315'} src="https://www.youtube.com/embed/aFG0iaFI6Bo?si=58BKUCgfZxaaUTXX" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
        </div>
      </div>
      <MasonryGridVideo posts={videos} />
    </section>

  )
}

export default VideosPage