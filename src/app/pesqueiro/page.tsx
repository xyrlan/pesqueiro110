import { Button } from '@/components/ui/button'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const PesqueiroPage = () => {
  return (
    <section id='peixes' className="sm:py-24 py-12 bg-[url('/images/fish-icon-1.png')] min-h-screen bg-no-repeat bg-blend-exclusion bg-[bottom_left] max-sm:bg-right bg-fixed bg-gray-100 text-center">
      <div className="sm:container px-4 sm:px-6 lg:px-8 py-32">
        <h1 className='text-4xl text-primary mb-10 font-medium tracking-tighter'>Pescaria</h1>
        <h2 className='text-3xl text-secondary'>
          Aluguel de barcos
        </h2>

        <div className='flex flex-col md:flex-row gap-5 my-5'>
          <div className='md:w-1/2 flex flex-col items-center gap-2'>
            <Image src={'/images/chata.png'} width={400} height={400} alt='sobrepic' className='md:h-[260px] h-[200px]' />
            <h3 className='text-2xl text-primary font-medium'>Barco chata 6 metros</h3>
            <p><strong className='text-secondary'>Diária:</strong> R$ 120,00</p>
            <p><strong className='text-secondary'>Barco Completo:</strong> motor, piloteiro e gasolina, máximo 3 pescadores cada barco: R$ 600,00 a diária </p>
          </div>
          <div className='md:w-1/2 flex flex-col items-center gap-2'>
            <Image src={'/images/bordaalta.png'} width={400} height={400} alt='sobrepic' className='md:h-[260px] h-[200px]' />
            <h3 className='text-2xl text-primary font-medium'>Barco borda alta 6 metros</h3>
            <p><strong className='text-secondary'>Diária:</strong> R$ 100,00</p>
            <p><strong className='text-secondary'>Barco Completo:</strong> motor, piloteiro e gasolina, máximo 3 pescadores cada barco: R$ 580,00 a diária </p>
          </div>
        </div>

       <div className='flex flex-col items-center'>
       <h2 className='text-3xl text-secondary my-5 mt-20'>
          Materiais de pesca
        </h2>
        <p className='max-w-lg text-center'>É sempre bom trazer seu próprio material de pesca, porém é possivel checar com antecedência se existe a possibilidade de alugar algum material, seja vara, isca, etc.</p>
       </div>
        <h2 className='text-3xl text-secondary my-5 mt-20'>
          Transporte para outros pontos de pesca
        </h2>
        <div className='flex flex-col md:flex-row gap-10 md:gap-32 justify-center'>
          <Image src={'/images/riopesqueiro.jpg'} width={400} height={400} alt='sobrepic' className='' />
          <div className=' text-lg text-start'>
            Lugares como:
            <ul className='list-inside list-disc text-primary font-medium text-lg my-3 text-start'>
              <li className=''>Rabo do Dourado</li>
              <li className=''>Pedra do Dourado</li>
              <li className=''>Barra Dois Irmãos</li>
              <li className=''>Poção das Curimbas</li>
              <li className=''>Ilha do Amor</li>
              <li className=''> e outros pontos de pesca</li>
            </ul>
            <span className='text-secondary'>
              R$ 70,00 por pessoa, máximo 3 pessoas por viagem.
            </span>
          </div>
        </div>
<Button size={'lg'} variant={'primary'} className='md:mt-20 my-10 w-full'><Link href={'https://wa.me/5567991118988/?text=Ol%C3%A1%2C%20eu%20gostaria%20de%20agendar%20minha%20pesca'}>Agendar minha pesca</Link></Button>  
      </div>
    </section>
  )
}

export default PesqueiroPage