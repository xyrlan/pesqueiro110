'use client'
import React, { useEffect, useState } from 'react'
import { NavbarMenu } from './Navbar'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from './ui/button'
import Banner from './Banner'

const Header = () => {

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

  return (
    <header className={`fixed w-full z-50 bg-white  border-b border-opacity-60 transition-all duration-500 ${isSticky ? 'border-b-primary' : 'bg-opacity-50 border-b-white'}`}>
      <Banner />
      <div className="mx-auto container px-4 sm:px-6 lg:px-8 py-2">
        <div className="flex items-center justify-between">
          <div className="md:flex md:items-center md:gap-12">
            <a className="block text-teal-600" href="#">
              <span className="sr-only">Home</span>
              <Image src="/images/pesqueiro110.png" alt="Pesqueiro 110" width={200} height={200} className='h-14 sm:h-24 w-auto' />
            </a>
          </div>

          <div className="hidden md:block">
            <NavbarMenu />
          </div>

          <div className="flex items-center gap-4">
            <div className="max-md:hidden sm:flex sm:gap-4">
              <Link
                href="#"
              >
                <Button >
                  Faça sua reserva
                </Button>
              </Link>
            </div>

            <div className="block md:hidden">
              <button className="rounded bg-gray-100 p-2 text-gray-600 transition hover:text-gray-600/75">
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
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header