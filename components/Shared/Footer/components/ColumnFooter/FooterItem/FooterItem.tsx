import Link from "next/link";
import { FooterItemProps } from "./FooterItem.types";
import { cn } from "@/lib/utils";

export function FooterItem(props: FooterItemProps) {
  const { items } = props;
  const { href, label } = items;

  return (
    <Link
      href={href}
      target="_blank"
      className={cn(
        `flex flex-col text-black justify-start gap-2 hover:text-red-500`
      )}
    >
      {label}
    </Link>
  );
}
