import Link from "next/link";
import { redesOK } from "../BotonSiguenos/redesSociales.data";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

export function BotonesRedes() {
  return (
    <div className="grid grid-cols-4 gap-x-5">
      {redesOK.map(({ id, icon: Icon, href, tooltip }) => (
        <div
          key={id}
          className="rounded-full bg-black w-fit p-2 flex justify-center"
        >
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger>
                <Link href={href} target="_blank">
                  <Icon className="w-5 h-5" strokeWidth={2} color="#fff" />
                </Link>
              </TooltipTrigger>
              <TooltipContent className="rounded-lg">
                <p className="font-medium">{tooltip}</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
      ))}
    </div>
  );
}
