import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { SidebarRoutes } from "../SidebarRoutes";

export function BotonResponsive() {
  return (
    <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
      <Sheet>
        <SheetTrigger>
          <Menu size={30} />
        </SheetTrigger>
        <SheetContent side="left">
          <SidebarRoutes />
        </SheetContent>
      </Sheet>
    </div>
  );
}
