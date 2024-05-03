'use client'
import React from 'react'
import SobreCard from './SobreCard'
import Image from 'next/image'
import { Button } from './ui/button'
import Link from 'next/link'
import { motion } from "framer-motion"

const HomeSobre = () => {
  const content = [
    {
      title: 'Restaurante',
      text: 'Comida caseira e de qualidade, nosso restaurante oferece pratos sensacionais para você e sua família e um amplo espaço diretamente ligado a natureza.',
      image: '/images/pesqueirorestaurante.jpg',
      href: '/restaurante'
    },
    {
      title: 'Pousada',
      text: 'Nossa pousada oferece acomodações confortáveis e aconchegantes para você e sua família, venha desfrutar de momentos inesquecíveis.',
      image: '/images/pousada.jpg',
      href: '/hospedagem'
    },
    {
      title: 'Pesqueiro',
      text: 'Seja como hobby ou esporte, a pesca é uma das atividades mais praticadas em todo o mundo e pode ser praticada por pessoas de qualquer idade.',
      image: '/images/pesqueirohome.jpeg',
      href: '/pesqueiro'
    },

  ]

  return (
    <section id='sobre' className="sm:py-40 py-12 bg-[url('/images/fish-icon-1.png')] bg-no-repeat bg-blend-exclusion bg-[bottom_left] max-sm:bg-right bg-fixed bg-white">
      <div className="container px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row gap-8 md:gap-12 flex-shrink">
          <div className='lg:w-1/2 flex xl:flex-row flex-col gap-2 max-xl:items-center '>
            <motion.div initial={{ opacity: 0, x: -200 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 1 }} viewport={{ once: true }} className=' '>
              <Image src={'/images/riopesqueiro.jpg'} width={400} height={400} alt='sobrepic' className='object-contain md:h-[300px] w-auto' />
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 200 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 1 }} viewport={{ once: true }} className=' w-auto xl:self-end'>
              <Image src={'/images/pesqueiroimage2.jpg'} width={400} height={400} alt='sobrepic' className='object-contain md:h-[300px] w-auto' />
            </motion.div>
          </div>
          <div className='md:w-1/2 max-sm:text-center'>
            <h2 className="text-xl sm:text-3xl font-extrabold text-secondary mb-10">Pesqueiro & Pousada & Restaurante <span className=''>110</span>
              <br />
              <strong className='text-primary text-3xl sm:text-5xl'>Venha Nos Visitar</strong>
            </h2>
            <p className='mb-5 text-gray-700 text-sm sm:text-base font-medium'>
              Para os amantes da pesca ou para aqueles que querem descansar ou ainda levar a familia para um belo passeio ao ar livre, diversão para crianças, ou ainda comer uma comida caseira de tradição.</p>
            <p className='mb-5 text-gray-700 text-sm sm:text-base font-medium'>
              Dê um peixe a um homem faminto e você o alimentará por um dia. Ensine-o a pescar, e você o estará alimentando pelo resto da vida.”
            </p>
            <p className='mb-5 text-gray-700 text-sm sm:text-base font-medium'>
              O bom pescador é aquele que na verdade conta suas historias com toda simplicidade enfrenta as aguas sem medo e pra tudo tem um segredo eis a sua qualidade. -Pescar sempre, pegar o peixe talvez, desistir jamais.
            </p>
            <p className='mb-5 text-gray-700 text-sm sm:text-base font-medium'>
              O pescador é mais intelectual que o caçador é necessário paciência e estratégia, é necessário conhecer o alvo, conhecer seus costumes, gostos e horários.
            </p>
            <Button className=''><Link href={'/fotos'}>Ver Mais Fotos </Link></Button>
          </div>

        </div>
        <div className='md:mt-40 mt-20'>
          <h2 className="text-3xl font-extrabold text-primary mb-4 max-sm:text-center">Muito Mais que Um Pesqueiro</h2>
          <p className='text-lg font-medium text-secondary mb-10'>Consulte os preços aqui</p>
          <motion.div initial={{ opacity: 0, y: 200 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 1 }} viewport={{ once: true }} className='flex sm:flex-row flex-col justify-between gap-10 md:mt-20'>
            {content.map((item, index) => (
              <SobreCard key={index} {...item} />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default HomeSobre