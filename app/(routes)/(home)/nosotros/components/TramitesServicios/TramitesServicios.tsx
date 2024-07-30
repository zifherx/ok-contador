"use client";

import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  dataContentTramite,
  dataHeaderTramite,
} from "./TramiteItem/tramites.data";
import { TramiteItem } from "./TramiteItem";

export function TramitesServicios() {
  return (
    <div className="bg-white">
      <div className="lg:py-14 py-10">
        <div className="max-w-fit lg:max-w-6xl mx-auto">
          <h1 className="uppercase text-3xl font-bold text-center mb-2">
            Nuestros Trámites
          </h1>
          <div className="bg-[#F30C0F] h-2 w-8 mx-auto rounded-lg mb-10">
            &nbsp;
          </div>
          <div className="lg:flex justify-center lg:items-center lg:mx-auto">
            <Tabs defaultValue="content-1" className="space-y-5">
              <div className="flex justify-center lg:py-1">
                <TabsList className="gap-x-10">
                  {dataHeaderTramite.map(({ id, title }) => (
                    <TabsTrigger key={id} value={id}>
                      {title}
                    </TabsTrigger>
                  ))}
                </TabsList>
              </div>
              {dataContentTramite.map(({ id, title, list }) => (
                <TabsContent
                  key={id}
                  value={id}
                  className="border-0 lg:py-10 p-5 outline-none"
                >
                  <h1 className="text-2xl font-semibold tracking-tight">
                    {title}:
                  </h1>
                  <p className="text-sm text-muted-foreground">
                    Lista de trámites al cuál brindamos asesoría
                  </p>

                  <Separator className="my-4" />

                  <div className="relative">
                    <div className="grid lg:grid-cols-4 grid-cols-2 gap-x-5 max-w-full">
                      <TramiteItem key={id} list={list} />
                    </div>
                  </div>
                </TabsContent>
              ))}
            </Tabs>
          </div>
        </div>
      </div>
    </div>
  );
}
