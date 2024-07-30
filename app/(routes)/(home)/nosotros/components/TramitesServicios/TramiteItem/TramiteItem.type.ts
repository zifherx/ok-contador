import { LucideIcon } from "lucide-react";

export type TramiteItemProps = {
  key: string;
  list: ItemProps[];
};

export type ItemProps = {
  id: number;
  icon: LucideIcon;
  item: string;
  bg: string;
  delay: number;
};
