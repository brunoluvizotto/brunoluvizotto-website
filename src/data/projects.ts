import type { Project } from "../types";

export const projects: Project[] = [
  {
    id: "corridinhas",
    title: {
      en: "Corridinhas.com.br",
      pt: "Corridinhas.com.br",
    },
    description: {
      en: "Brazil's #1 running events platform. Scrapes and aggregates race data from 20+ sources, providing a comprehensive calendar with search, filtering, and event discovery for runners of all levels — from 5K to marathons.",
      pt: "A principal plataforma de corridas de rua do Brasil. Coleta e agrega dados de corridas de mais de 20 fontes, oferecendo um calendário completo com busca, filtros e descoberta de eventos para corredores de todos os níveis — de 5K a maratonas.",
    },
    technologies: ["Next.js", "React", "TypeScript", "GraphQL", "Node.js", "Web Scraping"],
    liveUrl: "https://www.corridinhas.com.br",
  },
  {
    id: "augusto-neto-law",
    title: {
      en: "Augusto Neto Law Website",
      pt: "Site da Advocacia Augusto Neto",
    },
    description: {
      en: "Professional website for a law firm, built with modern web technologies featuring responsive design and contact integration.",
      pt: "Website profissional para escritório de advocacia, construído com tecnologias web modernas com design responsivo e integração de contato.",
    },
    technologies: ["React", "TypeScript"],
    liveUrl: "https://www.augustoneto.com",
  },
  {
    id: "cana-clipping",
    title: {
      en: "Cana Clipping",
      pt: "Cana Clipping",
    },
    description: {
      en: "News clipping aggregation platform for the sugarcane industry, providing curated industry news and insights.",
      pt: "Plataforma de agregação de clipping de notícias para a indústria sucroalcooleira, fornecendo notícias e insights do setor.",
    },
    technologies: ["React", "Node.js"],
    liveUrl: "https://www.canaclipping.com.br",
  },
  {
    id: "react-slide-fade-in",
    title: {
      en: "react-slide-fade-in",
      pt: "react-slide-fade-in",
    },
    description: {
      en: "Open-source React component library for slide and fade-in scroll animations. Published on npm.",
      pt: "Biblioteca open-source de componentes React para animações de slide e fade-in no scroll. Publicada no npm.",
    },
    technologies: ["React", "TypeScript", "npm"],
    sourceUrl: "https://github.com/brunoluvizotto/react-slide-fade-in",
  },
  {
    id: "got-floppy-drives",
    title: {
      en: "GoT Floppy Drives",
      pt: "GoT Floppy Drives",
    },
    description: {
      en: "Game of Thrones theme song played on floppy disk drives controlled by an custom electronic board. A fun hardware/software project.",
      pt: "Música tema de Game of Thrones tocada em drives de disquete controlados por uma placa eletrônica customizada. Um projeto divertido de hardware/software.",
    },
    technologies: ["STM32", "C++", "Hardware"],
    youtubeUrl: "https://www.youtube.com/watch?v=La2Ose7cvFg",
  },
  {
    id: "battle-city",
    title: {
      en: "Battle City 1985",
      pt: "Battle City 1985",
    },
    description: {
      en: "Recreation of the classic 1985 Battle City (Tank) NES game, built as a desktop application with Qt.",
      pt: "Recriação do clássico jogo Battle City (Tank) de 1985 do NES, construído como aplicação desktop com Qt.",
    },
    technologies: ["C++", "Qt/QML", "Game Dev"],
    sourceUrl: "https://github.com/brunoluvizotto/BattleCityQt",
    youtubeUrl: "https://www.youtube.com/watch?v=heNCDyjuWeg",
  },
  {
    id: "priscilla-luvizotto",
    title: {
      en: "Priscilla Luvizotto's Dermatology Website",
      pt: "Site da Dermatologista Priscilla Luvizotto",
    },
    description: {
      en: "Personal portfolio website for a dermatologist, featuring service information and contact capabilities.",
      pt: "Website portfólio pessoal para dermatologista, com informações sobre serviços e funcionalidades de contato.",
    },
    technologies: ["React", "TypeScript", "Styled Components"],
    liveUrl: "https://www.priscillaluvizotto.com.br",
  },
  {
    id: "luvimedical",
    title: {
      en: "Luvimedical",
      pt: "Luvimedical",
    },
    description: {
      en: "Medical equipment e-commerce platform with product catalog, search functionality, and contact integration.",
      pt: "Plataforma de e-commerce de equipamentos médicos com catálogo de produtos, funcionalidade de busca e integração de contato.",
    },
    technologies: ["React", "Node.js", "PostgreSQL"],
  },
];
