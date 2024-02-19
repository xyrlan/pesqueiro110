import Faq from "@/components/Faq";
import HomeHero from "@/components/HomeHero";
import HomeSobre from "@/components/HomeSobre";
import Reviews from "@/components/Reviews";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <HomeHero />
      <HomeSobre />
      <Reviews />
      <Faq />
    </main>
  );
}
