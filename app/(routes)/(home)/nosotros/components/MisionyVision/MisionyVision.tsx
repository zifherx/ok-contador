import { ElementMision } from "./ElementMision";
import { dataMisionVision } from "./MisionVision.data";

export function MisionyVision() {
  return (
    <div className="bg-slate-200 py-5 lg:py-10">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto mt-8 max-w-2xl lg:mt-0 lg:max-w-6xl">
          <dl className="grid max-w-xl grid-cols-1 gap-x-12 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
            {dataMisionVision.map((item) => (
              <ElementMision key={item.name} item={item} />
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}
