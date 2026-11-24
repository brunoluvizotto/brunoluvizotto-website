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
      en: "Build and maintain a practice management SaaS platform for bookkeepers and accountants, working across the full stack on client-facing tools, QuickBooks / Xero / Sage integrations and internal tooling. Led AI Flux Analysis, an LLM feature that explains month-over-month changes in P&L and Balance Sheet reports, and built the AI evaluation platform the team uses to benchmark models, catch regressions and choose models for the AI assistant and browser agents.",
      pt: "Construo e mantenho uma plataforma SaaS de gestão para contadores e escritórios contábeis, atuando em toda a stack em ferramentas para clientes, integrações com QuickBooks / Xero / Sage e ferramentas internas. Liderei o AI Flux Analysis, uma funcionalidade de LLM que explica variações mês a mês nos relatórios de DRE e Balanço Patrimonial, e construí a plataforma de avaliação de IA que o time usa para comparar modelos, detectar regressões e escolher modelos para o assistente de IA e para agentes de navegador.",
    },
    highlights: [
      {
        en: "Owned AI Flux Analysis end to end: LLM explanations of changes in P&L and Balance Sheet reports for QBO, Xero and Sage, with model selection (OpenAI, Gemini), user-supplied context, editing and publishing to report footnotes, and detection of out-of-date results.",
        pt: "Responsável pelo AI Flux Analysis de ponta a ponta: explicações via LLM de variações nos relatórios de DRE e Balanço Patrimonial para QBO, Xero e Sage, com seleção de modelo (OpenAI, Gemini), contexto fornecido pelo usuário, edição e publicação nas notas dos relatórios, e detecção de resultados desatualizados.",
      },
      {
        en: "Built the AI evaluation platform: eval suites defined in YAML, mocked tool responses, async runs, results stored in S3 for run-to-run comparison, plus cost and latency tracking.",
        pt: "Construí a plataforma de avaliação de IA: suítes de eval definidas em YAML, respostas de ferramentas simuladas, execuções assíncronas, resultados armazenados no S3 para comparação entre execuções, além de rastreamento de custo e latência.",
      },
      {
        en: "Ran model benchmarks that drove model upgrades for the in-app AI assistant, including one switch that was more accurate and about 3x cheaper.",
        pt: "Conduzi benchmarks de modelos que orientaram upgrades do assistente de IA do produto, incluindo uma troca que ficou mais precisa e cerca de 3x mais barata.",
      },
      {
        en: "Built evals and reliability fixes for a browser agent that does QuickBooks reconciliations (Browserbase).",
        pt: "Construí evals e correções de confiabilidade para um agente de navegador que faz reconciliações no QuickBooks (Browserbase).",
      },
      {
        en: "Added status-based triggers so agents start automatically in close workflows.",
        pt: "Adicionei gatilhos por status para que agentes comecem automaticamente em fluxos de fechamento.",
      },
      {
        en: "Compared LLM receipt extraction with AWS Textract and built its eval set.",
        pt: "Comparei extração de recibos com LLM e com AWS Textract e construí o conjunto de eval correspondente.",
      },
    ],
    technologies: [
      "React",
      "TypeScript",
      "Node.js",
      "PostgreSQL",
      "Redis",
      "AWS",
      "Redux",
      "OpenAI",
      "Anthropic",
      "LLM Evals",
      "AI Agents",
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
