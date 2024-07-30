import { ColumnFooter } from "./components/ColumnFooter";
import { RedesSociales } from "./components/RedesSociales";
import { SelloFooter } from "./components/SelloFooter";

export function Footer() {
  return (
    <footer className="max-w-7xl lg:mx-auto lg:justify-start items-center justify-center">
      <RedesSociales />
      <ColumnFooter />
      <div className="bg-[#7a7a7a] h-px">&nbsp;</div>
      <SelloFooter />
    </footer>
  );
}
