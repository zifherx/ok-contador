import { Reveal } from "@/components/Shared/Reveal";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export function CallToNosotros() {
  return (
    <div className="bg-black">
      <div className="max-w-6xl grid lg:grid-cols-2 grid-cols-1 mx-auto items-center">
        <Reveal position="bottom" className="p-10">
          <Image
            src="/images/curso-virtual.png"
            alt="Call To Action"
            width={500}
            height={400}
            className="rounded-xl shadow-lg shadow-slate-500"
          />
        </Reveal>
        <Reveal
          position="right"
          className="lg:p-10 px-10 pb-10 text-white border-slate-100"
        >
          <h1 className="uppercase text-2xl font-bold lg:max-w-md mb-3">
            Acerca de Nosotros
          </h1>
          <p className="text-justify font-light">
            Una de las organizaciones líderes de auditoría, impuestos,
            consultoría, y outsourcing. Con presencia en el mercado peruano
            desde 2000. Brinda servicios profesionales a la comunidad
            empresarial y de negocios del Perú en forma ininterrumpida desde
            hace más de una década.
          </p>
          <Link href="/nosotros">
            <Button
              variant="outline"
              className="bg-black mt-10 w-full lg:w-fit transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300"
            >
              Más información
              <Search className="w-5 h-5 ml-2" />
            </Button>
          </Link>
        </Reveal>
      </div>
    </div>
  );
}
