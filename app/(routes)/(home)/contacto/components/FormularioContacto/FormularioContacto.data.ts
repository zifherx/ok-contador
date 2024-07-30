import { z } from "zod";

export const formSchema = z.object({
  name: z.string().min(10, {
    message: "El campo de nombre debe ser mayor a 10 caracteres.",
  }),
  email: z.string().email("Debe ingresar un email válido."),
  phone: z.string().min(9, {
    message: "El celular solo debe tener 9 dígitos.",
  }),
  message: z
    .string()
    .min(10, {
      message: "El mensaje debe superar los 10 caracteres.",
    })
    .max(200, {
      message: "El mensaje no puede superar los 200 caracteres.",
    }),
});
