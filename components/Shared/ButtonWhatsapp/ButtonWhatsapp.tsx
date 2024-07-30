import Image from "next/image";
import Link from "next/link";
import { Reveal } from "../Reveal";

export default function ButtonWhatsapp() {
  const urlWhatsapp =
    "https://api.whatsapp.com/send?phone=51901900937&text=Hola,%20vi%20tus%20servicios%20contables%20en%20tu%20p%C3%A1gina%20web%20y%20quisiera%20conocer%20m%C3%A1s.";

  return (
    <Reveal
      position="left"
      className="fixed bottom-16 right-10 z-50 inline-flex items-center justify-center w-fit"
    >
      <div className="absolute z-10 top-0 left-0 w-full h-full rounded-full bg-[#25d366] animate-ping"></div>
      <div className="relative z-20">
        <Link href={urlWhatsapp} target="_blank">
          <Image
            src="/images/whatsapp.png"
            alt="Whataspp Logo"
            width={50}
            height={50}
          />
        </Link>
      </div>
    </Reveal>
  );
}
