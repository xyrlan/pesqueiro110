import Faq from "@/components/Faq";
import HomeHero from "@/components/HomeHero";
import HomeSobre from "@/components/HomeSobre";
import ParceirosSection from "@/components/ParceirosSection";
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
      <ParceirosSection />
    </main>
  );
}
