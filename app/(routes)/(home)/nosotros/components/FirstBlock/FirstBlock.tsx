import Image from "next/image";
import React from "react";
import { statsNosotros } from "./dataNosotros.data";
import { Reveal } from "@/components/Shared/Reveal";

export function FirstBlock() {
  return (
    <div className="relative isolate overflow-hidden bg-gray-900 py-24 sm:py-32">
      <Image
        alt="Background OK"
        src="/images/bg-nosotros.jpg"
        className="absolute inset-0 h-full w-full -z-10 opacity-30 object-cover object-right md:object-center"
        width={1000}
        height={800}
      />

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <Reveal position="bottom" className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
            Trabaja con nosotros
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-300">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsum
            accusantium, corrupti vero nostrum esse numquam!
          </p>
        </Reveal>

        <dl className="mt-16 grid grid-cols-1 gap-8 sm:mt-20 sm:grid-cols-2 lg:grid-cols-4">
          {statsNosotros.map(({ id, name, value, delay }) => (
            <Reveal
              position="left"
              key={id}
              delay={delay}
              className="flex flex-col-reverse"
            >
              <dt className="text-base leading-7 text-gray-300">{name}</dt>
              <dd className="text-2xl font-bold leading-9 tracking-tight text-white">
                {value}
              </dd>
            </Reveal>
          ))}
        </dl>
      </div>
    </div>
  );
}
