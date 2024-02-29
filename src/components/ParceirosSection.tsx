'use client'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { motion } from "framer-motion"

const brands = [
  {
    name: 'Finos Paladares Restaurante',
    link: 'https://www.instagram.com/finos_paladares_restaurante/',
    imageSrc: '/images/finospaladares.png',
  },
  {
    name: 'AquidaClass Marketing',
    link: 'https://www.instagram.com/aquidaclass_marketing/',
    imageSrc: '/images/AquidaClassLOG.png',
  },
  {
    name: 'saudesystem',
    link: 'https://www.saudesystem.com.br',
    imageSrc: '/images/saudesys.png',
  },
  {
    name: 'AquidaCred',
    link: 'https://aquidacred.com.br/',
    imageSrc: '/images/aquidaCred.png',
  },
  {
    name: 'Nihon Restaurante',
    link: 'https://www.nihonrestaurante.com.br/',
    imageSrc: '/images/nihonlogo.png',
  },
];

const ParceirosSection = () => {
  return (
    <section id='nossas-marcas' className='bg-primary py-20'>
      <div className="sm:container mx-auto max-w-7xl px-6 lg:px-8">
        <h2 className='text-secondary font-semibold  max-sm:text-center sm:text-5xl text-3xl mb-10 md:mb-20'>Conheça nossas Marcas</h2>

        <div className="flex max-md:flex-col items-center gap-x-8 justify-between gap-y-12">
          {brands.map((brand, index) => (
            <Link key={index} href={brand.link} target='_blank'>
              <motion.div initial={{ opacity: 0, scale: 0 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 1 }}>
                <Image src={brand.imageSrc} width={160} height={160} alt={brand.name} className={`h-40 w-40 rounded-full bg-white p-2 object-contain`} />
              </motion.div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ParceirosSection;