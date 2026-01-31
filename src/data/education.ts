import type { Education } from "../types";

export const education: Education[] = [
  {
    id: "unicamp",
    institution: "UNICAMP",
    degree: {
      en: "Electrical Engineering",
      pt: "Engenharia Elétrica",
    },
    period: "2011 - 2016",
  },
  {
    id: "inpg",
    institution: "INPG",
    degree: {
      en: "Strategic Business Management",
      pt: "Gestão Empresarial Estratégica",
    },
    period: "2019 - 2020",
  },
  {
    id: "tera",
    institution: "Tera",
    degree: {
      en: "Machine Learning Bootcamp",
      pt: "Bootcamp de Machine Learning",
    },
    period: "2020",
  },
  {
    id: "embedded-labworks",
    institution: "Embedded Labworks",
    degree: {
      en: "Linux Device Drivers",
      pt: "Drivers de Dispositivos Linux",
    },
    period: "2018",
  },
];
