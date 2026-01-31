import { useTranslation } from "react-i18next";
import { HiExternalLink } from "react-icons/hi";
import { FaGithub, FaYoutube } from "react-icons/fa";
import TechTag from "./TechTag";
import ScrollReveal from "./ScrollReveal";
import type { Project, Language } from "../../types";

interface ProjectCardProps {
  project: Project;
  index: number;
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
  const { t, i18n } = useTranslation();
  const lang = (i18n.language?.startsWith("pt") ? "pt" : "en") as Language;

  return (
    <ScrollReveal delay={index * 0.1}>
      <div className="group flex h-full flex-col rounded-lg border border-surface-0 bg-mantle p-6 transition-all hover:border-surface-1 hover:-translate-y-1">
        {project.image && (
          <div className="mb-4 overflow-hidden rounded-md">
            <img
              src={project.image}
              alt={project.title[lang]}
              className="h-40 w-full object-cover transition-transform group-hover:scale-105"
            />
          </div>
        )}

        <h3 className="mb-2 font-mono text-lg font-semibold text-text">
          {project.title[lang]}
        </h3>

        <p className="mb-4 flex-1 text-sm leading-relaxed text-subtext">
          {project.description[lang]}
        </p>

        <div className="mb-4 flex flex-wrap gap-2">
          {project.technologies.map((tech) => (
            <TechTag key={tech} label={tech} />
          ))}
        </div>

        <div className="flex gap-4">
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 font-mono text-sm text-blue transition-colors hover:text-purple"
            >
              <HiExternalLink />
              {t("projects.live")}
            </a>
          )}
          {project.sourceUrl && (
            <a
              href={project.sourceUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 font-mono text-sm text-blue transition-colors hover:text-purple"
            >
              <FaGithub />
              {t("projects.source")}
            </a>
          )}
          {project.youtubeUrl && (
            <a
              href={project.youtubeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 font-mono text-sm text-blue transition-colors hover:text-purple"
            >
              <FaYoutube />
              {t("projects.youtube")}
            </a>
          )}
        </div>
      </div>
    </ScrollReveal>
  );
}
