import { Reveal } from "@/components/Shared/Reveal";
import Image from "next/image";

export function MiembroFundador() {
  return (
    <div className="overflow-hidden bg-white py-5 lg:py-14">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <Reveal position="bottom" className="lg:pr-8 lg:pt-4">
            <div className="lg:max-w-lg">
              <h2 className="text-base font-semibold leading-7 text-indigo-600">
                Omar Ruiz y Asociados
              </h2>
              <p className="mt-2 text-2xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Especialistas en Outsourcing
              </p>
              <p className="mt-6 text-lg leading-8 text-gray-600 text-justify">
                Brinda servicios profesionales a la comunidad empresarial del
                Perú en forma ininterrumpida. Sus socios y staff profesional
                tienen una amplia experiencia y reconocido prestigio en el
                ejercicio profesional de la contabilidad pública, consultoría y
                asesoría de negocios, asegurando servicios integrales y
                eficientes, basados en la confianza, compromiso con sus
                clientes, brindando atención personalizada con seriedad y
                calidad.
              </p>
            </div>
          </Reveal>
          <Reveal position="left">
            <Image
              src="/images/alianzas-nosotros.png"
              alt="Alianzas"
              width={2432}
              height={1442}
              className="rounded-2xl w-[48rem] max-w-none shadow-xl ring-1 ring-gray-400/10 sm:w-[44rem] md:-ml-4 lg:-ml-0"
            />
          </Reveal>
        </div>
      </div>
    </div>
  );
}
