import { Button } from '@/components/ui/button'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const notFoundPage = () => {
  return (
    <div className="grid min-h-screen place-content-center bg-white px-4 py-52">
      <div className="text-center flex flex-col md:flex-row  items-center md:gap-20">
        <Image src={'/images/fisher.png'} width={500} height={500} alt='404' className='w-auto h-auto' />
        <div className='text-center'>
          <h1 className="mt-6 text-2xl font-bold tracking-tight text-primary sm:text-4xl">
            <span className='text-9xl font-bold tracking-tight text-primary sm:text-9xl'>404</span>
            <br />
            Ops!
          </h1>
          <p className="mt-4 text-gray-500">Não conseguimos encontrar a página.</p>
          <Button className='mt-8'><Link href={'/'}>Voltar para a página inicial</Link></Button>
        </div>
      </div>
    </div>
  )
}

export default notFoundPage