import { EquipoTrabajo } from "./components/EquipoTrabajo";
import { FirstBlock } from "./components/FirstBlock";
import { MiembroFundador } from "./components/MiembroFundador";
import { MisionyVision } from "./components/MisionyVision";
import { TramitesServicios } from "./components/TramitesServicios";

export default function NosotrosPage() {
  return (
    <div>
      <FirstBlock />
      <MiembroFundador />
      <MisionyVision />
      <EquipoTrabajo />
      <TramitesServicios />
    </div>
  );
}
