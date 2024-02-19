import Image from 'next/image'
import React from 'react'
import { Button } from './ui/button'
import SobreCard from './SobreCard'

const HomeHero = () => {
  const content = [
    {
      title: 'Restaurante',
      text: 'Comida caseira e de qualidade, nosso restaurante oferece pratos sensacionais para você e sua família e um amplo espaço diretamente ligado a natureza.',
      image: '/images/pesqueirorestaurante.jpg',
      href: '#'
    },
    {
      title: 'Pousada',
      text: 'Nossa pousada oferece acomodações confortáveis e aconchegantes para você e sua família, venha desfrutar de momentos inesquecíveis.',
      image: '/images/pousada.jpg',
      href: '#'
    },
    {
      title: 'Pesqueiro',
      text: 'Seja como hobby ou esporte, a pesca é uma das atividades mais praticadas em todo o mundo e pode ser praticada por pessoas de qualquer idade.',
      image: '/images/pesqueirohome.jpeg',
      href: '#'
    },

  ]


  return (
    <section className="flex min-h-screen sm:p-24 sm:py-24 py-8 relative text-white">
      {/* <Image src={'/images/rioaqui.jpg'} fill alt='rioaquida' className='w-full h-full absolute object-cover' /> */}
      <video autoPlay muted loop playsInline className='absolute top-0 left-0 w-full h-full object-cover'>
        <source src="/images/river1080p.mp4" type="video/mp4" />
      </video>
      <div
        className="absolute inset-0 bg-primary/50 sm:bg-transparent  sm:from-primary/90 sm:to-primary/10 sm:bg-gradient-to-t "
      ></div>

      <div className='relative md:container px-4 py-32 sm:px-6 lg:px-8 lg:h-screen space-y-20'>
        <div
          className=" lg:flex lg:items-center justify-center "
        >
          <div className="max-w-xl text-center  ">
            <h1 className="text-3xl font-extrabold sm:text-7xl my-10 flex flex-col items-center gap-2">
              Seja Bem Vindo ao

              <strong className="block font-extrabold text-secondary"> Pesqueiro & Pousada </strong>
              <Image src={'/images/110.png'} width={200} height={200} alt='110banner' />
            </h1>


            <p className="mt-4 sm:text-xl/relaxed ">
              Aqui você encontra pescaria e lazer para toda a familia, venha desfrutar de uma boa pescaria.
            </p>

            <div className="mt-8 flex flex-wrap gap-4 text-center justify-center">
              <Button >
                Fazer Reserva
              </Button>

              <Button variant={'primary'} >
                Saber mais
              </Button>
            </div>
          </div>
        </div>
        <div>
          <h2 className="text-3xl font-extrabold text-white mb-5 max-sm:text-center">Muito Mais que Um Pesqueiro</h2>
          <div className='flex sm:flex-row flex-col justify-between gap-10'>
            {content.map((item, index) => (
              <SobreCard key={index} {...item} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default HomeHero