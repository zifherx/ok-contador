import { BotonesRedes } from "./components/BotonesRedes";
import { BotonSiguenos } from "./components/BotonSiguenos";

export function RedesSociales() {
  return (
    <div className="flex lg:justify-end justify-center items-center lg:py-5 py-2">
      <div className="flex flex-row gap-x-10">
        <BotonSiguenos />
        <BotonesRedes />
      </div>
    </div>
  );
}
