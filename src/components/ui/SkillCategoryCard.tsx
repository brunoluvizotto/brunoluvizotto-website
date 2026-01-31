import { useTranslation } from "react-i18next";
import SkillBadge from "./SkillBadge";
import ScrollReveal from "./ScrollReveal";
import type { SkillCategory, Language } from "../../types";

interface SkillCategoryCardProps {
  category: SkillCategory;
  index: number;
}

const categoryColors: Record<string, string> = {
  languages: "text-yellow",
  frontend: "text-blue",
  backend: "text-green",
  databases: "text-peach",
  "cloud-devops": "text-purple",
  ai: "text-teal",
};

export default function SkillCategoryCard({
  category,
  index,
}: SkillCategoryCardProps) {
  const { i18n } = useTranslation();
  const lang = (i18n.language?.startsWith("pt") ? "pt" : "en") as Language;

  return (
    <ScrollReveal delay={index * 0.1}>
      <div className="rounded-lg border border-surface-0 bg-mantle p-6">
        <h3
          className={`mb-4 font-mono text-lg font-semibold ${
            categoryColors[category.id] || "text-blue"
          }`}
        >
          {category.name[lang]}
        </h3>
        <div className="flex flex-wrap gap-2">
          {category.skills.map((skill) => (
            <SkillBadge key={skill} label={skill} />
          ))}
        </div>
      </div>
    </ScrollReveal>
  );
}
