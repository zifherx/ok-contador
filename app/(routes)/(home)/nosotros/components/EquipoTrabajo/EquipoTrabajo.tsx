import Image from "next/image";
import { dataTeam } from "./team.data";
import { Reveal } from "@/components/Shared/Reveal";

export function EquipoTrabajo() {
  return (
    <div className="bg-black py-24 lg:py-20">
      <div className="mx-auto grid max-w-7xl gap-x-10 gap-y-16 px-6 lg:px-8 xl:grid-cols-3">
        <Reveal position="left" className="max-w-2xl">
          <h2 className="text-4xl lg:text-3xl font-bold tracking-tight text-slate-100">
            Conoce a nuestros líderes
          </h2>
          <p className="mt-6 text-lg leading-8 text-slate-200 text-justify">
            Una empresa con 14 años de experiencia en el sector privado y 5 años
            en el sector público. Nuestro grupo de profesionales especializados,
            nos permiten brindar un asesoramiento integral de calidad, generando
            valor sostenible a nuestros clientes.
          </p>
        </Reveal>
        <ul
          role="list"
          className="grid grid-cols-2 gap-x-5 lg:gap-y-12 lg:grid-cols-3 gap-y-10 lg:col-span-2"
        >
          {dataTeam.map(({ id, name, role, imageUrl, delay }) => (
            <li key={id}>
              <Reveal
                position="right"
                delay={delay}
                className="flex items-center gap-x-6"
              >
                <Image
                  src={`/images/equipo-trabajo/${imageUrl}.png`}
                  className="h-16 w-16 lg:h-20 lg:w-20 rounded-full"
                  alt="Avatar Foto"
                  height={200}
                  width={200}
                />
                <div>
                  <h3 className="text-base font-semibold leading-7 tracking-tight text-slate-100">
                    {name}
                  </h3>
                  <p className="text-sm font-semibold leading-6 text-indigo-500">
                    {role}
                  </p>
                </div>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
