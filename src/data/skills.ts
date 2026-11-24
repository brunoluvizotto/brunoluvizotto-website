import type { SkillCategory } from "../types";

export const skillCategories: SkillCategory[] = [
  {
    id: "languages",
    name: {
      en: "Languages",
      pt: "Linguagens",
    },
    skills: ["JavaScript", "TypeScript", "Python", "C/C++"],
  },
  {
    id: "frontend",
    name: {
      en: "Frontend",
      pt: "Frontend",
    },
    skills: ["React", "Next.js", "Qt/QML", "HTML/CSS", "Tailwind CSS", "Redux"],
  },
  {
    id: "backend",
    name: {
      en: "Backend",
      pt: "Backend",
    },
    skills: ["Node.js", "Express", "GraphQL", "REST APIs", "Microservices"],
  },
  {
    id: "databases",
    name: {
      en: "Databases",
      pt: "Bancos de Dados",
    },
    skills: ["PostgreSQL", "MongoDB", "Redis", "Firebase", "BigQuery"],
  },
  {
    id: "cloud-devops",
    name: {
      en: "Cloud & DevOps",
      pt: "Cloud & DevOps",
    },
    skills: ["GCP", "AWS", "Docker", "CI/CD", "Git", "Linux"],
  },
  {
    id: "ai",
    name: {
      en: "AI / LLM Engineering",
      pt: "Engenharia de IA / LLM",
    },
    skills: [
      "LLM Evals & Benchmarking",
      "AI Agents & Tool Calling",
      "Browser Automation Agents",
      "Prompt Engineering",
      "OpenAI APIs",
      "Anthropic APIs",
      "Gemini APIs",
      "AI-assisted Development (Claude Code)",
      "Embeddings & RAG",
    ],
  },
];
