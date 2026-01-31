import type { Experience } from "../types";

export const experiences: Experience[] = [
  {
    id: "double",
    company: "Double",
    role: {
      en: "Full Stack Developer",
      pt: "Desenvolvedor Full Stack",
    },
    period: "Jul 2023 - Present",
    location: {
      en: "New York, NY (Remote)",
      pt: "Nova York, NY (Remoto)",
    },
    description: {
      en: "Building and maintaining a practice management SaaS platform for bookkeepers and accountants. Developing AI-powered features including intelligent bank feed categorization, automated journal entries, and AI financial summaries. Working across the full stack on client-facing tools, integrations with QuickBooks and Xero, and internal tooling.",
      pt: "Construindo e mantendo uma plataforma SaaS de gestão para contadores e escritórios contábeis. Desenvolvendo funcionalidades com IA incluindo categorização inteligente de transações bancárias, lançamentos contábeis automatizados e resumos financeiros com IA. Atuando em toda a stack em ferramentas para clientes, integrações com QuickBooks e Xero, e ferramentas internas.",
    },
    technologies: [
      "React",
      "TypeScript",
      "Node.js",
      "Vite",
      "AWS",
      "Redux",
      "PostgreSQL",
      "Redis",
      "AI / LLM",
      "Firebase",
    ],
  },
  {
    id: "leverege",
    company: "Leverege",
    role: {
      en: "Full Stack Developer",
      pt: "Desenvolvedor Full Stack",
    },
    period: "Feb 2022 - Jun 2023",
    location: {
      en: "Baltimore, MD (Remote)",
      pt: "Baltimore, MD (Remoto)",
    },
    description: {
      en: "Developed and maintained IoT platform applications using React, Node.js, and Google Cloud Platform. Built real-time dashboards, data pipelines, and microservices for enterprise IoT solutions.",
      pt: "Desenvolvi e mantive aplicações de plataforma IoT usando React, Node.js e Google Cloud Platform. Construí dashboards em tempo real, pipelines de dados e microsserviços para soluções IoT empresariais.",
    },
    technologies: [
      "React",
      "TypeScript",
      "Node.js",
      "GCP",
      "BigQuery",
      "PostgreSQL",
      "Redis",
      "Firebase",
      "ElasticSearch",
    ],
  },
  {
    id: "livup",
    company: "Liv Up",
    role: {
      en: "Full Stack Developer",
      pt: "Desenvolvedor Full Stack",
    },
    period: "Oct 2019 - Feb 2022",
    location: {
      en: "São Paulo, Brazil",
      pt: "São Paulo, Brasil",
    },
    description: {
      en: "Worked on the e-commerce platform for a healthy food startup. Built and maintained frontend applications with React, backend services with Node.js, and cloud infrastructure on GCP.",
      pt: "Trabalhei na plataforma de e-commerce de uma startup de alimentação saudável. Construí e mantive aplicações frontend com React, serviços backend com Node.js e infraestrutura em nuvem na GCP.",
    },
    technologies: [
      "React",
      "TypeScript",
      "Node.js",
      "GCP",
      "MongoDB",
      "PostgreSQL",
      "GraphQL",
    ],
  },
  {
    id: "omnilink",
    company: "Omnilink",
    role: {
      en: "Software Developer",
      pt: "Desenvolvedor de Software",
    },
    period: "Jul 2018 - Aug 2019",
    location: {
      en: "São Paulo, Brazil",
      pt: "São Paulo, Brasil",
    },
    description: {
      en: "Developed embedded and desktop applications for GPS tracking and fleet management systems. Worked with C/C++, Qt/QML, and Python for device firmware and monitoring dashboards.",
      pt: "Desenvolvi aplicações embarcadas e desktop para sistemas de rastreamento GPS e gestão de frotas. Trabalhei com C/C++, Qt/QML e Python para firmware de dispositivos e dashboards de monitoramento.",
    },
    technologies: ["C/C++", "Qt/QML", "Python", "JavaScript", "Linux", "GPS/GNSS"],
  },
  {
    id: "bnl",
    company: "BNL",
    role: {
      en: "Controls Engineer",
      pt: "Engenheiro de Controle",
    },
    period: "Mar 2016 - Feb 2018",
    location: {
      en: "Upton, NY",
      pt: "Upton, NY",
    },
    description: {
      en: "Developed Python applications with GUI to enable researchers to collect, store, and analyze experimental data. Built C/C++ drivers to integrate equipment into the controls system of the NSLS-II particle accelerator.",
      pt: "Desenvolvi aplicações Python com interface gráfica para permitir que pesquisadores coletassem, armazenassem e analisassem dados experimentais. Construí drivers em C/C++ para integrar equipamentos no sistema de controle do acelerador de partículas NSLS-II.",
    },
    technologies: ["Python", "C/C++", "Qt/QML", "EPICS", "Linux", "Embedded Systems"],
  },
];
