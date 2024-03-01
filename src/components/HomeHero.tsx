'use client'
import Image from 'next/image'
import React from 'react'
import { Button } from './ui/button'
import SobreCard from './SobreCard'
import Link from 'next/link'
import { motion } from "framer-motion"

const HomeHero = () => {

  function handleScrollTo() {
    const sobre = document.getElementById('sobre')
    sobre?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="flex sm:p-24 sm:py-24 py-8 relative text-white">
      {/* <Image src={'/images/rioaqui.jpg'} fill alt='rioaquida' className='w-full h-full absolute object-cover' /> */}
      <video autoPlay muted loop playsInline className='absolute top-0 left-0 w-full h-full object-cover'>
        <source src="/images/river1080p.mp4" type="video/mp4" />
      </video>
      <div
        className="absolute inset-0 bg-primary/50 sm:bg-transparent  sm:from-primary/90 sm:to-primary/10 sm:bg-gradient-to-t "
      ></div>

      <div className='relative md:container px-4 py-32 sm:px-6 lg:px-8  space-y-20'>
        <div
          className=" lg:flex lg:items-center justify-center "
        >
          <motion.div initial={{ opacity: 0, y: 200 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 1 }} className="max-w-xl text-center  ">
            <h1 className="text-3xl font-extrabold sm:text-7xl my-10 flex flex-col items-center gap-2">
              Seja Bem Vindo ao

              <strong className="block font-extrabold text-secondary"> Pesqueiro & Pousada </strong>
              <Image src={'/images/110.png'} width={200} height={200} alt='110banner' className='mt-5 w-auto h-auto' />
            </h1>


            <p className="mt-4 sm:text-xl/relaxed ">
            Aqui você encontra o melhor da gastronomia, lazer e pesca para toda a família. Venha desfrutar de uma natureza exuberante e fazer parte da nossa história. Estamos esperando por você! <br/> Mais uma pintura do nosso maravilhoso Rio Aquidauana.
            </p>

            <div className="mt-8 flex flex-wrap gap-4 text-center justify-center">
              <Link href={'https://wa.me/5567991118988/?text=Ol%C3%A1%2C%20eu%20gostaria%20de%20fazer%20uma%20reserva'} >
                <Button >
                  Fazer Reserva
                </Button>
              </Link>
              <Button onClick={handleScrollTo} variant={'primary'} >
                Saber mais
              </Button>
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  )
}

export default HomeHero