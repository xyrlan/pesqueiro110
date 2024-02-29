import { FishIcon, Home, Utensils } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const SobreCard = ({ image, text, title, href }: any) => {
  return (
    <Link href={href} className="group relative block h-64 sm:h-80 lg:h-96 w-full text-white">

      <span className="absolute inset-0 border-2 border-double border-primary z-0"></span>

      <div
        className="relative flex h-full transform items-end border-2 border-primary bg-white transition-transform group-hover:-translate-x-1 group-hover:-translate-y-1"
      >
        <Image src={image} width={500} height={500} alt='imagempesqueiro' className='absolute object-cover object-center h-full w-full inset-0' />
        <span className="absolute h-full w-full max-md:bg-white/50 from-white/60 group-hover:from-70% to-transparent bg-gradient-to-t transition-all duration-300 "></span>

        <div
          className="flex items-center gap-4 p-4 pt-0 transition-opacity group-hover:absolute group-hover:opacity-0 sm:p-6 lg:p-8 z-10 text-primary max-sm:opacity-0"
        >
          {
            title === 'Pesqueiro' ? <FishIcon size={32} /> : title === 'Pousada' ? <Home size={32} /> : <Utensils size={32} />
          }

          <h2 className=" text-xl font-medium sm:text-3xl">{title}</h2>
        </div>

        <div
          className="absolute p-4 opacity-0 transition-opacity group-hover:relative group-hover:opacity-100 sm:p-6 lg:p-8 max-sm:opacity-100 text-primary"
        >
          <h3 className="mt-4 text-xl font-medium sm:text-3xl">{title}</h3>

          <p className="mt-4 text-sm font-medium sm:text-base">
            {text}
          </p>

          <p className="mt-8 font-bold text-secondary">Saber mais</p>
        </div>
      </div>
    </Link>
  )
}

export default SobreCard