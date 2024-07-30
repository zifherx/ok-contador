import Link from "next/link";

export function SelloFooter() {
  const actualYear = new Date().getFullYear();

  return (
    <div className="flex justify-between text-xs pb-5 mt-2 lg:mx-0 mx-2">
      <div className="text-left">© {actualYear} RAZON SOCIAL DE LA EMPRESA</div>
      <div className="uppercase text-right">
        Diseñado por&nbsp;
        <Link href="https://ziphonex.com" className="font-bold">
          Ziphonex
        </Link>
      </div>
    </div>
  );
}
