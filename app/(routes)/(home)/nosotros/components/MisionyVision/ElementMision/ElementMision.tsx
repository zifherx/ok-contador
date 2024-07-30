import { Reveal } from "@/components/Shared/Reveal";
import { ElementMisionProps } from "./ElementMision.type";

export function ElementMision(props: ElementMisionProps) {
  const { item } = props;
  const { name, icon: Icon, description, delay } = item;
  return (
    <Reveal position="left" className="relative pl-16" delay={delay}>
      <dt className="text-base font-semibold leading-7 text-gray-900">
        <div className="absolute left-0 top-0 flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-600">
          <Icon className="w-8 h-8 text-white" aria-hidden="true" />
        </div>
        <h1 className="text-3xl">{name}</h1>
      </dt>
      <dd className="mt-2 text-base leading-7 text-gray-600 text-justify">
        {description}
      </dd>
    </Reveal>
  );
}
