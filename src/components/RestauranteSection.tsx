import Image from 'next/image'
import React from 'react'

const RestauranteSection = () => {
  return (
    <section className="sm:py-24 py-12 bg-[url('/images/fish-icon-1.png')] min-h-screen bg-no-repeat bg-blend-exclusion bg-[bottom_left] max-sm:bg-right bg-fixed bg-white">
      <div className='sm:container px-4 sm:px-6 lg:px-8 py-32'>
        <h1 className='text-center text-4xl text-secondary'>Restaurante
        <br/>
          <strong className='text-lg text-primary'>DESFRUTE DE UMA BOA COMIDA E DA TRANQUILIDADE DO AR LIVRE</strong>
        </h1>
        <div className='mt-20'>
          <h2 className='text-center text-2xl mb-5 '>Almoço Comercial</h2>
          <div className='flex gap-10 items-center sm:flex-row flex-col'>
            <div className='sm:w-1/2 text-center space-y-4'>
              <p><strong className='text-primary'>Horário:</strong> 11:00 horas às 15:00 horas</p>
              <p><strong className='text-primary'>Valor:</strong> R$ 40,00 por pessoa</p>
              <p><strong className='text-primary'>Preparo:</strong> Comida caseira preparada no fogão a lenha.</p>
            </div>
            <Image className='sm:w-1/2 ' src={'/images/restaurante.png'} width={700} height={300} alt='almoco' />
          </div>
        </div>

        <div className='text-center mt-20'>
          <h2 className='text-2xl'>Especialidades</h2>
          Card com pratos mais famosos do restaurante
        </div>

      </div>
    </section>
  )
}

export default RestauranteSection