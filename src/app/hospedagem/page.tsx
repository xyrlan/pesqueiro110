import { Button } from '@/components/ui/button'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const HospedagemPage = () => {
  return (
    <section id='peixes' className="sm:py-24 py-12 bg-[url('/images/fish-icon-1.png')] min-h-screen bg-no-repeat bg-blend-exclusion bg-[bottom_left] max-sm:bg-right bg-fixed bg-gray-100 text-center">
      <div className="sm:container px-4 sm:px-6 lg:px-8 py-32">
        <h1 className='text-4xl text-primary mb-10 font-medium tracking-tighter'>Hospedagem</h1>
        <p className='my-2'><span className='font-medium text-secondary'>Obs:</span> todas as casas tem ventiladores AR, banheiros, roupas de cama e toalhas.</p>
        <div className='flex flex-col items-center gap-5 mt-10'>
          <h2 className='text-3xl text-secondary font-medium'>
            Day Use
          </h2>
          <p className='max-w-lg text-center'>Pescaria no Rio, área de lazer com piscinas e píer, restaurante e muita natureza</p>
          <p className='text-primary font-medium'>
            <span className='text-secondary font-medium'>Diária:</span> R$ 50,00 por pessoa
          </p>
          <p className=''>Obs: até 5 anos de idade não paga e de 6 a 10 anos paga meia taxa.</p>
        </div>
        <div className='flex flex-col items-center gap-5 mt-10'>
          <h2 className='text-3xl text-secondary font-medium'>
            Área de Camping
          </h2>
          <p className='max-w-lg text-center'>No camping temos várias churrasqueiras disponíveis inclusive três piscinas infantis, biribol e social já incluso nas diárias</p>
          <p className='text-primary font-medium'>
            <span className='text-secondary font-medium'>Diária:</span> R$ 90,00 por pessoa
          </p>
        </div>

        <div className='flex flex-col items-center gap-5 mt-10'>
          <h2 className='text-3xl text-secondary font-medium'>
            Apartamentos
          </h2>
          <h3 className='text-lg text-secondary'>Fundo</h3>
          <p className='max-w-lg text-center'>
            Cama de casal, banheiro e ar-condicionado
          </p>
          <p className='text-primary font-medium'>
            <span className='text-secondary font-medium'>Diária:</span> R$ 180,00 por pessoa (incluso apenas café da manhã).
          </p>

          <h3 className='text-lg text-secondary'>Frente</h3>
          <p className='max-w-lg text-center'>
            Cama de casal, banheiro e ar-condicionado
          </p>
          <p className='text-primary font-medium'>
            <span className='text-secondary font-medium'>Diária:</span> R$ 250,00 por pessoa (incluso apenas café da manhã).
          </p>
        </div>

                <div className='flex flex-col items-center gap-5 mt-10'>
          <h2 className='text-3xl text-secondary font-medium'>
            Casa
          </h2>
           

          <h3 className='text-lg text-secondary'>Obs: acima de 4 pessoas</h3>
          <p className='max-w-lg text-center'>
            1 Sala, 2 Quartos com ar-condicionado, 1 Cozinha, 1 Varanda, 1 Lavanderia, 1 Banheiro
          </p>
          <p className='text-primary font-medium'>
            <span className='text-secondary font-medium'>Diária:</span> R$ 150,00 por pessoa (somente hospedagem).
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
