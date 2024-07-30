import Link from "next/link";
import { NavbarItemProps } from "./NavBarItem.type";

export function NavBarItem(props: NavbarItemProps) {
  const { href, label } = props;

  return (
    <Link
      href={href}
      className="rounded-md hover:bg-black px-3 py-2 text-sm font-medium hover:text-white text-black"
    >
      {label}
    </Link>
  );
}
