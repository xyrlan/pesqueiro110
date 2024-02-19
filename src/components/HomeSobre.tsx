import React from 'react'
import SobreCard from './SobreCard'
import Image from 'next/image'

const HomeSobre = () => {
  return (
    <section className="sm:py-24 py-12 bg-[url('/images/fish-icon-1.png')] bg-no-repeat bg-blend-exclusion bg-[bottom_left] max-sm:bg-right bg-fixed bg-white">
      <div className="container px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row gap-8 md:flex-row md:gap-12">
          <div className='sm:w-1/2 relative h-[500px]'>
            <Image src={'/images/sobrepic.jpg'} width={400} height={400} alt='sobrepic' className='object-contain h-[300px] w-auto absolute md:left-10 right-0 bottom-0 z-10' />
            <Image src={'/images/sobrepic2.jpg'} width={400} height={400} alt='sobrepic' className='object-contain h-[300px] w-auto absolute bottom-0 right-0 max-md:hidden ' />
            <Image src={'/images/sobrepic3.jpg'} width={400} height={400} alt='sobrepic' className='object-contain h-[300px] w-auto absolute top-0 right-20' />
          </div>
          <div className='sm:w-1/2 max-sm:text-center'>
            <h2 className="text-xl sm:text-3xl font-extrabold text-secondary mb-10">Pesqueiro & Pousada & Restaurante <span className=''>110</span>
              <br />
              <strong className='text-primary text-3xl sm:text-5xl'>Venha Nos Visitar</strong></h2>
            <p className='mb-5 text-gray-600 text-sm sm:text-base font-medium'>
              Para os amantes da pesca ou para aqueles que querem descansar ou ainda levar a familia para um belo passeio ao ar livre, diversão para crianças, ou ainda comer uma comida caseira de tradição.</p>
            <p className='mb-5 text-gray-600 text-sm sm:text-base font-medium'>
              Dê um peixe a um homem faminto e você o alimentará por um dia. Ensine-o a pescar, e você o estará alimentando pelo resto da vida.”
            </p>
            <p className='mb-5 text-gray-600 text-sm sm:text-base font-medium'>
              O bom pescador é aquele que na verdade conta suas historias com toda simplicidade enfrenta as aguas sem medo e pra tudo tem um segredo eis a sua qualidade. -Pescar sempre, pegar o peixe talvez, desistir jamais.
            </p>
            <p className='mb-5 text-gray-600 text-sm sm:text-base font-medium'>
              O pescador é mais intelectual que o caçador é necessário paciência e estratégia, é necessário conhecer o alvo, conhecer seus costumes, gostos e horários.
            </p>
          </div>

        </div>
      </div>
    </section>
  )
}

export default HomeSobre