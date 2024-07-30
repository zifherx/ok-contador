import { usePathname } from "next/navigation";
import { SidebarItemProps } from "./SidebarItem.type";
import Link from "next/link";
import { cn } from "@/lib/utils";

export function SidebarItem(props: SidebarItemProps) {
  const { item } = props;
  const { href, label, icon: Icon } = item;

  const pathname = usePathname();
  const activePath = pathname === href;

  return (
    <Link
      href={href}
      className={cn(
        `flex gap-x-5 text-slate-700 text-3xl items-center justify-start p-2 rounded-lg cursor-pointer hover:bg-black hover:text-white`,
        activePath && "bg-black text-white"
      )}
    >
      <Icon className="h-5 w-5" strokeWidth={2} />
      {label}
    </Link>
  );
}
