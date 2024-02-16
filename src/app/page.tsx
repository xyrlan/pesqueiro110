import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 ">
      <div className="flex flex-col items-center space-y-8">
        <h1 className="text-4xl font-bold text-center">
          Welcome to <span className="text-primary">Pesqueiro 110</span>
        </h1>
        <p className="text-lg text-center">
          A place to relax and enjoy the nature
        </p>
        <div className="flex space-x-4">
          <Button>Book now</Button>
          <Button variant="outline">Learn more</Button>
        </div>
      </div>
      <div className="flex flex-col items-center space-y-8">
        <Image
          src="/images/pesqueirohome.jpeg"
          alt="Pesqueiro 110"
          width={800}
          height={600}
        />
      </div>
    </main>
  );
}
