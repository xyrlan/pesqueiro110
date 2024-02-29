import { Button } from '@/components/ui/button'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const FotosVideosPage = () => {
  return (
    <div className="grid min-h-screen place-content-center bg-white px-4 py-52 text-center ">
      <h1 className='text-3xl md:text-5xl font-semibold text-primary'>Fotos e Videos</h1>
      <div className="text-center flex justify-center items-center md:gap-20">
        <Image src={'/images/fisherman.jpg'} width={500} height={500} alt='404' className='w-auto max-h-[300px]' />
      </div>
      <Button className='mt-8'><Link href={'/fotos'}>Acessar fotos do Pesqueiro 100</Link></Button>
      <Button className='mt-8'><Link href={'/videos'}>Acessar videos do Pesqueiro 100</Link></Button>
    </div>
  )
}

export default FotosVideosPage