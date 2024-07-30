import { menuNav } from "../../dataMenu.data";
import { SidebarItem } from "./SidebarItem";

export function SidebarRoutes() {
  return (
    <div className="grid content-center h-full">
      <div>
        <div className="p-0">
          {menuNav.map((item) => (
            <SidebarItem key={item.label} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
}
