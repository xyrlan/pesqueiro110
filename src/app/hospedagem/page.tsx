import { Button } from '@/components/ui/button'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const HospedagemPage = () => {
  return (
    <section id='peixes' className="sm:py-24 py-12 bg-[url('/images/fish-icon-1.png')] min-h-screen bg-no-repeat bg-blend-exclusion bg-[bottom_left] max-sm:bg-right bg-fixed bg-gray-100 text-center">
      <div className="sm:container px-4 sm:px-6 lg:px-8 py-32">
        <h1 className='text-4xl text-primary mb-10 font-medium tracking-tighter'>Hospedagem</h1>
        <p className='my-2'>Obs: todos os apartamentos e casa tem ventiladores AR e TV, banheiros, roupas de cama e toalhas.</p>
        {/* <div className='flex flex-col md:flex-row gap-4 justify-between'>
          <Image src={'/images/piscina.png'} width={400} height={400} alt='sobrepic' className='w-full h-[260px]' />
          <Image src={'/images/banheiro.png'} width={400} height={400} alt='sobrepic' className='w-full h-[260px]' />
          <Image src={'/images/cama.png'} width={400} height={400} alt='sobrepic' className='w-full h-[260px]' />
        </div> */}
        <div className='flex flex-col items-center gap-5 mt-10'>
          <h2 className='text-3xl text-secondary font-medium'>
            Day Use
          </h2>
          <p className='max-w-lg text-center'>Pescaria no Rio, área de lazer com piscinas e píer, restaurante e muita natureza</p>
          <p className='text-primary font-medium'>
            <span className='text-secondary font-medium'>Diária:</span> R$ 40,00 por pessoa
          </p>
        </div>
        <div className='flex flex-col items-center gap-5 mt-10'>
          <h2 className='text-3xl text-secondary font-medium'>
            Área de Camping
          </h2>
          <p className='max-w-lg text-center'>No camping temos várias churrasqueiras disponíveis inclusive três piscinas infantis, biribol e social já incluso nas diárias</p>
          <p className='text-primary font-medium'>
            <span className='text-secondary font-medium'>Diária:</span> R$ 70,00 por pessoa
          </p>
        </div>
        {/* <div className='flex flex-col items-center gap-5 mt-10'>
          <h2 className='text-3xl text-secondary font-medium'>
            Casa para alugar
          </h2>
          <p className='max-w-lg text-center'>
            Dois quartos, sala, cozinha, banheiro, lavanderia, geladeira, tv, fogão, sofá, mesas e cadeiras.
          </p>
          <p className='text-primary font-medium'> <span className='text-secondary font-medium'>Diária:</span> R$ 90,00 por pessoa.</p>
        </div> */}
        <div className='flex flex-col items-center gap-5 mt-10'>
          <h2 className='text-3xl text-secondary font-medium'>
            Apartamentos do Fundo
          </h2>
          <p className='max-w-lg text-center'>
            Cama de casal, banheiro, TV e ar-condicionado
          </p>
          <p className='text-primary font-medium'>
            <span className='text-secondary font-medium'>Diária:</span> R$ 180,00 por pessoa (sem refeições).
          </p>

        </div>
        <div className='flex flex-col items-center gap-5 mt-10'>
          <h2 className='text-3xl text-secondary font-medium'>
            Apartamentos da Frente
          </h2>
          <p className='max-w-lg text-center'>
            Cama de casal, banheiro, TV e ar-condicionado
          </p>
          <p className='text-primary font-medium'>
            <span className='text-secondary font-medium'>Diária:</span> R$ 250,00 por pessoa (sem refeições).
          </p>

        </div>
        <Link href={'https://wa.me/556793140747/?text=Ol%C3%A1%2C%20eu%20gostaria%20de%20fazer%20uma%20reserva'}>
          <Button size={'lg'} variant={'primary'} className='md:mt-20 my-10 w-full'>
            Fazer Reserva
          </Button>
        </Link>
      </div>
    </section>
  )
}

export default HospedagemPage