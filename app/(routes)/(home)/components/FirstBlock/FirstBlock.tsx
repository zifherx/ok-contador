import { Reveal } from "@/components/Shared/Reveal";
import Image from "next/image";

export function FirstBlock() {
  return (
    <div className="max-w-7xl grid lg:grid-cols-2 lg:px-2 lg:py-16 items-center mx-auto">
      <Reveal position="bottom" className="p-6">
        <h1 className="text-5xl lg:text-5xl font-bold flex flex-col text-[#F30C0F]">
          Outsourcing
          <span className="ml-5 text-black">Empresarial</span>
        </h1>
        <p className="text-xl mt-4 lg:mt-5 lg:text-2xl max-w-sm lg:text-left text-center">
          Brindamos servicios contables, tributarios, financieros y laborales
        </p>
      </Reveal>

      <Reveal position="right" className="flex justify-end p-5">
        <Image
          src="/images/outsourcing-banner.jpg"
          alt="Outsourcing"
          width={600}
          height={400}
          priority
          className="rounded-2xl"
        />
      </Reveal>
    </div>
  );
}
