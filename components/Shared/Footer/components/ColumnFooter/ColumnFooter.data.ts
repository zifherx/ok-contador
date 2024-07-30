import { BookOpen, Briefcase, Link, Users } from "lucide-react";

export const enlaces = [
  {
    titulo: "Enlaces de Interés",
    icon: Link,
    items: [
      {
        label: "Trámites SUNAT",
        href: "https://www.sunat.gob.pe/mapaweb/mapa_tramites_linea.html",
      },
      {
        label: "Trámites OSCE",
        href: "https://www.gob.pe/institucion/osce/tramites-y-servicios",
      },
      {
        label: "Trámites SUNAFIL",
        href: "https://aplicativosweb7.sunafil.gob.pe/si.consultaTramite",
      },
      {
        label: "Trámites SUNARP",
        href: "https://www.sunarp.gob.pe/serviciosenlinea/portal/index.html",
      },
      {
        label: "Trámites MTC",
        href: "https://www.gob.pe/institucion/mtc/tramites-y-servicios",
      },
    ],
  },
  {
    titulo: "Nosotros",
    icon: Users,
    items: [
      {
        label: "Quiénes somos",
        href: "/nosotros",
      },
      {
        label: "Contáctanos",
        href: "/contacto",
      },
      {
        label: "Trabaja con nosotros",
        href: "#",
      },
      {
        label: "Libro de reclamaciones",
        href: "#",
      },
    ],
  },
  {
    titulo: "Blog",
    icon: BookOpen,
    items: [
      {
        label: "En Construcción",
        href: "#",
      },
      // {
      //   label: "Noticias",
      //   href: "/blog",
      // },
      // {
      //   label: "Leyes",
      //   href: "/blog",
      // },
    ],
  },
  {
    titulo: "Legal",
    icon: Briefcase,
    items: [
      {
        label: "Copyright",
        href: "/legal/copyright",
      },
      {
        label: "Términos y condiciones",
        href: "/legal/terminos_condiciones",
      },
      {
        label: "Política de cookies",
        href: "/legal/politica_cookies",
      },
    ],
  },
];
