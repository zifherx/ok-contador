import { LucideIcon } from "lucide-react";

export type ElementMisionProps = {
  key: string;
  item: {
    name: string;
    icon: LucideIcon;
    description: string;
    delay: number;
  };
};
