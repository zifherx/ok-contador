import ButtonWhatsapp from "@/components/Shared/ButtonWhatsapp/ButtonWhatsapp";
import { Footer } from "@/components/Shared/Footer";
import { Navbar } from "@/components/Shared/Navbar";
import { ReactNode } from "react";

export default function LayoutHome({ children }: { children: ReactNode }) {
  return (
    <div className="bg-[#F6F6F6]">
      <Navbar />
      <div>{children}</div>
      <ButtonWhatsapp />
      <Footer />
    </div>
  );
}
