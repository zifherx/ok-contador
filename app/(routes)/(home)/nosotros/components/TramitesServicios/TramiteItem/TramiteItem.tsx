import { Reveal } from "@/components/Shared/Reveal";
import { TramiteItemProps } from "./TramiteItem.type";

export function TramiteItem(props: TramiteItemProps) {
  const { list } = props;

  return (
    <>
      {list.map(({ id, bg, icon: Icon, item, delay }) => (
        <Reveal
          key={id}
          position="right"
          className="p-5 rounded-xl hover:shadow-lg flex flex-col items-center justify-center"
          delay={delay}
        >
          <div
            className={`rounded-full ${bg} w-fit p-4 mb-4 flex justify-center`}
          >
            <Icon className="w-16 h-16" />
          </div>
          <p className="font-semibold text-center text-sm text-muted-foreground">
            {item}
          </p>
        </Reveal>
      ))}
    </>
  );
}
