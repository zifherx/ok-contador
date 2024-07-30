import { Asesoria } from "./components/Asesoria";
import { CallToNosotros } from "./components/CallToNosotros";
import { FirstBlock } from "./components/FirstBlock";
import { NuestraExperiencia } from "./components/NuestraExperiencia";
import { NuestrosAliados } from "./components/NuestrosAliados";

export default function HomePage() {
  return (
    <div>
      <FirstBlock />
      <CallToNosotros />
      <NuestraExperiencia />
      <p className="hidden">Call To Action</p>
      <NuestrosAliados />
      <Asesoria />
    </div>
  );
}
