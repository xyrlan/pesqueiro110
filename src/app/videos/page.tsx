import React from 'react'
import { VideoPost, videoPostQuery } from '../../../sanity/lib/queries'
import { sanityFetch } from '../../../sanity/lib/client'
import MasonryGrid from '@/components/MasonryGrid'

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
      <MasonryGrid posts={videos} />
    </section>

  )
}

export default VideosPage