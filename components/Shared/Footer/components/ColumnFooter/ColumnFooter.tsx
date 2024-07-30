import { enlaces } from "./ColumnFooter.data";
import { FooterItem } from "./FooterItem";

export function ColumnFooter() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-4 lg:py-10 py-5 mx-10">
      {enlaces.map(({ titulo, items, icon: Icon }) => (
        <div key={titulo} className="text-black my-3">
          <div className="flex flex-row">
            <Icon className="w-4 h-4 mr-2 mt-2 lg:-ml-5" />
            <h1 className="text-2xl font-bold mb-2">{titulo}</h1>
          </div>
          {items.map((item) => (
            <FooterItem key={item.label} items={item} />
          ))}
        </div>
      ))}
    </div>
  );
}
