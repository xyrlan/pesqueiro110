'use client'
import Image from 'next/image'
import React from 'react'
import { motion } from "framer-motion"



const MissaoVisaoValoresSection = () => {
  return (
    <section id='mvv' className="flex max-lg:flex-col justify-center p-24 px-6 sm:p-60 bg-primary">
      <motion.div initial={{ opacity: 0, y: 100 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 1 }} className="mx-auto max-w-screen-xl flex flex-col items-center px-8 py-16 sm:px-8 lg:px-12 text-gray-100 w-full text-center">
        <h2 className='mb-12'>
          <span className='text-secondary text-3xl font-sans font-bold tracking-tight kristi-regular '>
            Servir
          </span>
          <br />
          <span className='text-white text-5xl font-bold tracking-tight sm:text-7xl mb-12 '>Nossa Missão</span>
        </h2>
        <p className='sm:text-lg tracking-wide mb-4 max-w-md' >
          Oferecer aos clientes um serviço de excelência, seja na hospedagem, alimentação ou gestão, prezando pela qualidade, conforto e segurança, sempre com intuito de fazer com que nossos clientes, sintam-se na extensão de suas casas.
        </p>

      </motion.div>
      <motion.div initial={{ opacity: 0, y: 100 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 1 }} className="mx-auto max-w-screen-xl flex flex-col items-center px-8 py-16 sm:px-8 lg:px-12 text-gray-100 w-full text-center">
        <h2 className='mb-12'>
          <span className='text-secondary text-3xl font-sans font-bold tracking-tight kristi-regular '>
            Ser Referência
          </span>
          <br />
          <span className='text-white text-5xl font-bold tracking-tight sm:text-7xl mb-12 '>Nossa Visão</span>
        </h2>
        <p className='sm:text-lg tracking-wide mb-4 max-w-md' >
          Ser referência no segmento de meios de hospedagem, turismo, gastronomia, pescaria e lazer, oferecendo um ótimo serviço de atendimento ao cliente, maximizando sua total satisfação através de nossos serviços oferecidos para atender todos os públicos.
        </p>

      </motion.div>
      <motion.div initial={{ opacity: 0, y: 100 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 1 }} className="mx-auto max-w-screen-xl flex flex-col items-center px-8 py-16 sm:px-8 lg:px-12 text-gray-100 w-full text-center">
        <h2 className='mb-12'>
          <span className='text-secondary text-3xl font-sans font-bold tracking-tight kristi-regular '>
            Disciplina
          </span>
          <br />
          <span className='text-white text-5xl font-bold tracking-tight sm:text-7xl mb-12 '>Nossos Valores</span>
        </h2>
        <p className='sm:text-lg tracking-wide mb-4 max-w-md' >
          Satisfação em atender bem, respeito ao cliente, ética profissional, melhoria contínua, qualidade no oferecimento de nosso produto, comprometimento e transparência nos serviços.
        </p>
      </motion.div>
    </section >
  )
}

export default MissaoVisaoValoresSection