import Image from 'next/image'
import React from 'react'
import { Button } from './ui/button'
import Link from 'next/link'

const RestauranteSection = () => {

  const projetoImages = [
    '/images/projeto.jpeg',
    '/images/projeto2.jpeg',
    '/images/projeto3.jpeg',
    '/images/projeto4.jpeg',
  ]
  return (
    <section className="sm:py-24 py-12 bg-[url('/images/fish-icon-1.png')] min-h-screen bg-no-repeat bg-blend-exclusion bg-[bottom_left] max-sm:bg-right bg-fixed bg-white">
      <div className='sm:container px-4 sm:px-6 lg:px-8 py-32'>
        <h1 className='text-center text-4xl text-secondary'>Restaurante
          <br />
          <strong className='text-lg text-primary'>DESFRUTE DE UMA BOA COMIDA E DA TRANQUILIDADE AO AR LIVRE</strong>
        </h1>
        <div className='mt-20'>
          <h2 className='text-center text-2xl mb-5 text-primary'>Almoço Comercial</h2>
          <div className='flex gap-10 items-center sm:flex-row flex-col'>
            <div className='sm:w-1/2 text-center space-y-8 sm:text-lg'>

              <p><strong className='text-primary'>Horários:</strong>{' '}
                <br />
                <span><span className='font-medium text-secondary'>Café da Manhã:</span> 6:00 às 9:00 horas</span>
                <br />
                <span><span className='font-medium text-secondary'>Almoço:</span> 11:00 às 15:00 horas</span>
                <br />
                <span><span className='font-medium text-secondary'>Janta:</span> 18:00 às 23:00 horas</span>
              </p>
              <p><strong className='text-primary'>Preparo:</strong>
                <br />
                Todas as refeições são self-service R$ 55,00 por pessoa</p>
            </div>
            <Image className='sm:w-1/2 max-h-[400px] object-contain' src={'/images/comida.jpeg'} width={300} height={300} alt='almoco' />
          </div>
        </div>
{/*         <div className='flex justify-center'>
          <Link target='_blank' href={'https://cardapioja.com.br/pesqueiro110'}>
            <Button className='mt-20'>
              Acesse aqui o cardápio
            </Button>
          </Link>
        </div>
 */}
        {/* 
        <div className='text-center mt-20'>
          <h2 className='text-2xl'>Especialidades</h2>
          Card com pratos mais famosos do restaurante
        </div> */}
        <div>
          <h2 className='text-3xl text-secondary mt-20 mb-10'>Projeto para reforma do restaurante</h2>
          <div className='flex gap-10 items-center sm:flex-row flex-col'>
            <div className='grid lg:grid-cols-4 max-sm:grid-cols-1 sm:grid-cols-2 gap-2'>
              {projetoImages.map((img, index) => (
                <Image key={index} className=' max-h-[400px] object-contain' src={img} width={400} height={300} alt='projeto' />
              ))
              }
            </div>
          </div>
        </div>
      </div>

    </section>
  )
}

export default RestauranteSection
