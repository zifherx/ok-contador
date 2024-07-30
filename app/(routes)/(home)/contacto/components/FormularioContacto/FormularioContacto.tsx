"use client";

import { Button } from "@/components/ui/button";
import { toast } from "@/components/ui/use-toast";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import Image from "next/image";
import { Mail, MapPin, Phone, Send } from "lucide-react";
import { Textarea } from "@/components/ui/textarea";
import { formSchema } from "./FormularioContacto.data";

export function FormularioContacto() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      message: "",
    },
  });

  function onSubmit(data: z.infer<typeof formSchema>) {
    toast({
      title: "You submitted the following values:",
      description: (
        <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
          <code className="text-white">{JSON.stringify(data, null, 2)}</code>
        </pre>
      ),
    });
  }

  const { isValid } = form.formState;

  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 grid-cols-1 gap-5">
          <div className="lg:mb-0 mb-10">
            <div className="group w-full h-full">
              <div className="relative h-full">
                <Image
                  src="/images/bg-contacto.png"
                  alt="Contacto"
                  width={600}
                  height={600}
                  className="w-full h-full lg:rounded-l-2xl rounded-2xl bg-blend-multiply bg-[#F30C0F]"
                />

                <h1 className="font-semibold text-white text-4xl leading-10 absolute top-11 left-11">
                  Contáctanos
                </h1>
                <div className="absolute bottom-0 w-full lg:p-11 p-5">
                  <div className="bg-white rounded-lg p-6 block">
                    <div className="flex items-center mb-6">
                      <Phone
                        className="w-6 h-6 mr-5"
                        color="#F30C0F"
                        strokeWidth={2}
                      />
                      <h5 className="text-black text-base font-normal leading-6">
                        999-999-999
                      </h5>
                    </div>
                    <div className="flex items-center mb-6">
                      <Mail
                        className="w-6 h-6 mr-5"
                        color="#F30C0F"
                        strokeWidth={2}
                      />
                      <h5 className="text-black text-base font-normal leading-6">
                        contacto@okcontadorcorporativo.com
                      </h5>
                    </div>
                    <div className="flex items-center">
                      <MapPin
                        className="w-6 h-6 mr-5"
                        color="#F30C0F"
                        strokeWidth={2}
                      />
                      <h5 className="text-black text-base font-normal leading-6">
                        Dirección de Ubicación
                      </h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gray-50 p-5 lg:p-11 lg:rounded-r-2xl rounded-2xl">
            <h2 className="text-[#F30D10] font-semibold text-4xl leading-10 mb-11 text-center">
              Envíanos un mensaje
            </h2>
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className=" space-y-6"
              >
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Cliente *</FormLabel>
                      <FormControl>
                        <Input placeholder="Nombre completo" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email *</FormLabel>
                      <FormControl>
                        <Input placeholder="Email" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="phone"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Celular *</FormLabel>
                      <FormControl>
                        <Input placeholder="Celular" {...field} maxLength={9} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Mensaje</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="Coméntanos cuál es tu inquietud"
                          className="resize-none"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <Button
                  type="submit"
                  className="bg-[#F30D10] w-full rounded-2xl uppercase text-2xl"
                  disabled={!isValid}
                >
                  Enviar
                  <Send className="w-6 h-6 ml-2" />
                </Button>
              </form>
            </Form>
          </div>
        </div>
      </div>
    </section>
  );
}
