import { LucideIcon } from "lucide-react";

export type FooterItemProps = {
  items: {
    label: string;
    href: string;
  };
  icon?: LucideIcon;
  key: string;
};
