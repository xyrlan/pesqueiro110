'use client'
import React, { useEffect, useState } from 'react'
import { NavbarMenu } from './Navbar'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from './ui/button'
import Banner from './Banner'
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { usePathname } from 'next/navigation'


const Header = () => {
  const pathname = usePathname()

  

  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsSticky(scrollPosition > 0);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navigation = [
    {
      name: 'Inicio', href: '/', subnav: [
        { name: 'Sobre', href: '/', query: 'sobre' },
        { name: 'Avaliações', href: '/', query: 'review' },
        { name: 'Nossas Marcas', href: '/', query: 'nossas-marcas' },
        { name: 'FAQ', href: '/', query: 'faq' },
      ],
    },
    { name: 'Pesqueiro', href: '/pesqueiro', subnav: [{ name: 'Pescaria', href: '/pesqueiro' }, { name: 'Peixes', href: '/peixes' }] },
    { name: 'Pousada', href: '/hospedagem' },
    { name: 'Restaurante', href: '/restaurante' },
    {
      name: 'Feed Pesqueiro', href: '/fotos', subnav: [
        { name: 'Fotos', href: '/fotos' },
        { name: 'Vídeos', href: '/videos' },
      ],
    },
    { name: 'Missão', href: '/mvv' },

    { name: 'Reserve', href: 'https://wa.me/5567991118988/?text=Ol%C3%A1%2C%20eu%20gostaria%20de%20fazer%20uma%20reserva' },
  ]


  if(pathname.startsWith('/estudio')) return null
  
  return (
    <header className={`fixed w-full z-50 bg-white  border-b border-opacity-60 transition-all duration-500 ${isSticky ? 'border-b-primary' : 'bg-opacity-50 border-b-white'}`}>
      <Banner />
      <div className="mx-auto container px-4 sm:px-6 lg:px-8 py-2">
        <div className="flex items-center justify-between">
          <div className="md:flex md:items-center md:gap-12">
            <Link className="block text-teal-600" href="/">
              <span className="sr-only">Home</span>
              <Image src="/images/pesqueiro110.png" alt="Pesqueiro 110" width={200} height={200} className='h-14 sm:h-24 w-auto' />
            </Link>
          </div>

          <div className="hidden md:block">
            <NavbarMenu />
          </div>

          <div className="flex items-center gap-4">
            <div className="max-md:hidden sm:flex sm:gap-4">
              <Link
                target='_blank'
                href="https://wa.me/5567991118988/?text=Ol%C3%A1%2C%20eu%20gostaria%20de%20fazer%20uma%20reserva"
              >
                <Button >
                  Faça sua reserva
                </Button>
              </Link>
            </div>


            <Sheet>
              <SheetTrigger>

                <div className="block md:hidden rounded bg-gray-100 p-2 text-gray-600 transition hover:text-gray-600/75">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                </div>

              </SheetTrigger>
              <SheetContent className=' overflow-y-auto '>
                <SheetHeader>
                  <SheetTitle>
                    <div className='w-full flex justify-center'>
                      <Image src={'/images/pesqueiroicon.png'} width={200} height={200} alt='pesqueiro' className='h-20 w-auto' />
                    </div>
                  </SheetTitle>
                  <SheetDescription className='text-start'>
                    {navigation.map((item) => (
                      <div key={item.name} className='border-b border-secondary/20'>
                        <SheetClose asChild>
                          <Link
                            href={{ pathname: item.href }}
                            className={
                              'text-secondary hover:text-secondary/50 block rounded-md px-3 py-2 text-base font-medium'
                            }
                          >
                            {item.name}
                          </Link>
                        </SheetClose>
                        {item.subnav && (
                          <div>
                            <div className="px-4 py-2 space-y-1">
                              {item.subnav.map((subItem: any) => (
                                <SheetClose key={subItem.name} asChild>
                                  <Link
                                    href={{ pathname: subItem.href, query: { title: subItem.query } }}
                                    className="block px-4 py-2 text-sm text-secondary hover:text-secondary/50 rounded-md"
                                  >
                                    {subItem.name}
                                  </Link>
                                </SheetClose>
                              ))}
                            </div>
                          </div>
                        )}
                      </div>
                    ))}
                  </SheetDescription>
                </SheetHeader>
              </SheetContent>
            </Sheet>

          </div>
        </div>
      </div>
    </header>
  )
}

export default Header