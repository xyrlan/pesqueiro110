import Image from 'next/image'
import React from 'react'

const HomeHero = () => {
  return (
    <section className="flex min-h-screen flex-col items-center justify-between p-24 relative">
      <Image src={'/images/pantanal.jpg'} fill alt='rioaquida' className='w-full h-full absolute object-cover object-top' />

    </section>
  )
}

export default HomeHero