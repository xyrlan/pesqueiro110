"use client"

import * as React from "react"
import Link from "next/link"

import { cn } from "@/lib/utils"

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import Image from "next/image"
import { useSearchParams } from "next/navigation"

const components: { title: string; href: string; description: string }[] = [
  {
    title: "Preços Pescaria",
    href: "/pesqueiro",
    description:
      "Veja os preços para pescaria e aluguel de barcos.",
  },
  {
    title: "Peixes",
    href: "/peixes",
    description:
      "Conheça os peixes do rio Aquidauana que você pode pescar em nosso pesqueiro.",
  },
]
const components2: { title: string; href: string; description: string }[] = [
  {
    title: "Fotos",
    href: "/fotos",
    description:
      "Veja as fotos de nossos clientes e do pesqueiro.",
  },
  {
    title: "Videos",
    href: "/videos",
    description:
      "Veja os videos de nossos clientes e do pesqueiro."
  },
]


export function NavbarMenu() {
  const query = useSearchParams()

  React.useEffect(() => {
    const current = query.get('title');
    if (current !== null) {
      const id = document.getElementById(current);
      if (id) {
        id.scrollIntoView({ behavior: 'instant' });
      }
    }
  }, [query]);

  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger> <p className="text-primary">Página Inicial </p></NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
              <li className="row-span-3">
                <NavigationMenuLink className="hover:bg-gray-100 duration-200" asChild>
                  <Link
                    className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted hover p-6 no-underline outline-none focus:shadow-md"
                    href="/"
                  >
                    <Image src="/images/pesqueiro110.png" alt="Pesqueiro 110" width={200} height={200} className='h-10 sm:h-16 w-auto' />
                    <div className="mb-2 mt-4 text-lg font-medium">
                      Pesqueiro & Pousada 110
                    </div>
                    <p className="text-sm leading-tight text-muted-foreground">
                      Pescaria e lazer para toda a famila
                    </p>
                  </Link>
                </NavigationMenuLink>
              </li>
              <ListItem href="/" title="Sobre" query='sobre'>
                Venha nos visitar.
              </ListItem>
              <ListItem href="/" title="Avaliações" query='review'>
                Veja as avaliações de nossos clientes.
              </ListItem>
              <ListItem href="/" title="FAQ" query='faq'>
                FAQ - Perguntas frequentes.
              </ListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger> <p className="text-primary">Pesqueiro</p></NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
              {components.map((component) => (
                <ListItem
                  key={component.title}
                  title={component.title}
                  href={component.href}
                >
                  {component.description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="/hospedagem" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              <p className="text-primary">Hospedagem</p>
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="/restaurante" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              <p className="text-primary">Restaurante</p>
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger> <p className="text-primary">Fotos & Videos</p></NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
              {components2.map((component) => (
                <ListItem
                  key={component.title}
                  title={component.title}
                  href={component.href}
                >
                  {component.description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="/mvv" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              <p className="text-primary">Missão</p>
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>

  )
}

const ListItem = ({ className, title, href, query, children }: any) => {
  return (
    <li>
      <NavigationMenuLink className="hover:bg-gray-100 duration-200" asChild>
        <Link
          href={{ pathname: href, query: { title: query } }}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </Link>
      </NavigationMenuLink>
    </li>
  )
}

export { ListItem };
