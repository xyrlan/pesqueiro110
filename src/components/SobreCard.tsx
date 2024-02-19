import { FishIcon, Home, Utensils } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const SobreCard = ({ image, text, title, href }: any) => {
  return (
    <Link href="#" className="group relative block h-64 sm:h-80 lg:h-96 w-full">

      <span className="absolute inset-0 border-2 border-dashed border-white z-0"></span>

      <div
        className="relative flex h-full transform items-end border-2 border-white bg-white transition-transform group-hover:-translate-x-2 group-hover:-translate-y-2"
      >
        <Image src={image} width={500} height={500} alt='imagempesqueiro' className='absolute object-cover object-center h-full w-full inset-0' />
        <span className="absolute h-full w-full max-sm:bg-black max-sm:bg-opacity-40 from-black/70 group-hover:from-70% to-transparent bg-gradient-to-t transition-all duration-300 "></span>

        <div
          className="p-4 !pt-0 transition-opacity group-hover:absolute group-hover:opacity-0 sm:p-6 lg:p-8 z-10 text-secondary max-sm:opacity-0"
        >
          {
            title === 'Pesqueiro' ? <FishIcon size={32} /> : title === 'Pousada' ? <Home size={32} /> : <Utensils size={32} />
          }

          <h2 className="mt-4 text-xl font-medium sm:text-2xl">{title}</h2>
        </div>

        <div
          className="absolute p-4 opacity-0 transition-opacity group-hover:relative group-hover:opacity-100 sm:p-6 lg:p-8 max-sm:opacity-100"
        >
          <h3 className="mt-4 text-xl font-medium sm:text-2xl">{title}</h3>

          <p className="mt-4 text-sm sm:text-base">
            {text}
          </p>

          <p className="mt-8 font-bold text-secondary">Saber mais</p>
        </div>
      </div>
    </Link>
  )
}

export default SobreCard