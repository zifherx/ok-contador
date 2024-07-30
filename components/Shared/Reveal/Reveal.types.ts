import { ReactNode } from "react";

export type RevealProps = {
  children: ReactNode;
  className?: string;
  position: "right" | "left" | "bottom";
  delay?: number;
};
