import { Reveal } from "@/components/Shared/Reveal";
import { Button } from "@/components/ui/button";
import { Headset } from "lucide-react";
import Link from "next/link";

export function Asesoria() {
  return (
    <div className="bg-black text-white p-6 lg:flex lg:justify-center">
      <Reveal position="bottom" className="max-w-3xl lg:pr-40">
        <h1 className="text-2xl text-left uppercase mb-5">
          ¿Necesitas Asesoría?
        </h1>
        <p className="font-light text-justify">
          Contáctate con nuestra oficina más cercana y solicita una cita para
          experimentar una atención integral sobre el mundo empresarial.
        </p>
      </Reveal>

      <Reveal
        position="left"
        className="flex justify-center items-center pt-10"
      >
        <Link href="/contacto">
          <Button
            variant="outline"
            size="lg"
            className="bg-black hover:text-black lg:w-fit w-full text-white rounded-xl transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300"
          >
            Contáctanos
            <Headset className="w-5 h-5 ml-2" />
          </Button>
        </Link>
      </Reveal>
    </div>
  );
}
