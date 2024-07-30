"use client";

import { Reveal } from "@/components/Shared/Reveal";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { dataAliados } from "./aliados.data";
import Image from "next/image";

export function NuestrosAliados() {
  return (
    <div className="pb-10">
      <div className="text-center mb-10">
        <h3 className="text-3xl font-bold uppercase mb-2">Nuestros Aliados</h3>
        <div className="bg-[#F30C0F] h-2 w-8 mx-auto rounded-lg mb-10">
          &nbsp;
        </div>
      </div>

      <Reveal
        position="bottom"
        className="flex gap-x-20 justify-center lg:pb-10 lg:mt-20 mt-10"
      >
        <Carousel
          plugins={[
            Autoplay({
              delay: 2000,
              stopOnMouseEnter: true,
              playOnInit: true,
              stopOnFocusIn: true,
            }),
          ]}
          className="lg:w-full max-w-xs lg:max-w-6xl lg:mx-auto"
          opts={{ loop: true, dragFree: true }}
        >
          <CarouselContent>
            {dataAliados.map(({ id, url }) => (
              <CarouselItem
                key={id}
                className="basis-4/12 md:basis-2/6 lg:basis-1/6"
              >
                <Image
                  src={`/images/aliados/${url}`}
                  alt="Aliados"
                  width={150}
                  height={150}
                  className="object-contain aspect-[3/2] hover:shadow-xl hover:shadow-black-900 hover:rounded-sm "
                />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="ml-5 lg:ml-0" />
          <CarouselNext className="mr-5 lg:mr-0" />
        </Carousel>
      </Reveal>
    </div>
  );
}
