import { Reveal } from "@/components/Shared/Reveal";
import { datosExperiencias } from "./Experiencia.data";

export function NuestraExperiencia() {
  return (
    <div className="max-w-7xl mx-auto p-6 lg:p-20">
      <div className="text-center">
        <h3 className="text-3xl font-bold uppercase mb-2">
          Nuestra Experiencia
        </h3>
        <div className="bg-[#F30C0F] h-2 w-8 mx-auto rounded-lg mb-10">
          &nbsp;
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-5 gap-y-10">
          {datosExperiencias.map(({ icon: Icon, text, bg, delay }) => (
            <Reveal
              key={text}
              position="right"
              delay={delay}
              className="p-5 rounded-xl hover:shadow-lg flex flex-col items-center"
            >
              <div
                className={`rounded-full ${bg} w-fit p-3 mb-4 flex justify-center`}
              >
                <Icon className="w-10 h-10" />
              </div>
              <p className="uppercase font-bold">{text}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </div>
  );
}
