import Image from 'next/image'
import React from 'react'

const RestauranteSection = () => {
  return (
    <section className="flex min-h-screen sm:p-24 sm:py-24 py-8 relative text-white">
      <h1 className=''>Restaurante
        <strong>DESFRUTE DE UMA BOA COMIDA E DA TRANQUILIDADE DO AR LIVRE</strong>
      </h1>
      <div>
        <h2>Almoço Comercial</h2>
        <div className='flex gap-10 items-center'>
          <div className='w-1/2 text-center'>
            <p><strong>Horário:</strong> 11:00 as 15:00</p>
            <p><strong>Valor:</strong> R$ 40,00 por pessoa</p>
            <p><strong>Serve:</strong> Arroz, feijão, salada, fritas e opção de carne à sua escolha.</p>
          </div>
          <Image className='w-1/2' src={'/images/almoco.jpg'} width={400} height={400} alt='almoco' />
        </div>
      </div>

      <div>
        <h2>Especialidades</h2>
        Card com pratos mais famosos do restaurante
      </div>

    </section>
  )
}

export default RestauranteSection