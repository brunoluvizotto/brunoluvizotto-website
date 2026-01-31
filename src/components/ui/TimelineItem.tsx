import { useTranslation } from "react-i18next";
import TechTag from "./TechTag";
import ScrollReveal from "./ScrollReveal";
import type { Experience, Language } from "../../types";

interface TimelineItemProps {
  experience: Experience;
  index: number;
}

export default function TimelineItem({ experience, index }: TimelineItemProps) {
  const { i18n } = useTranslation();
  const lang = (i18n.language?.startsWith("pt") ? "pt" : "en") as Language;
  const isLeft = index % 2 === 0;

  return (
    <div className="relative flex md:justify-center">
      {/* Timeline dot */}
      <div className="absolute left-0 top-0 z-10 flex h-4 w-4 -translate-x-1/2 items-center justify-center md:left-1/2">
        <div className="h-4 w-4 rounded-full border-2 border-blue bg-mantle" />
      </div>

      {/* Content card */}
      <div
        className={`ml-6 w-full md:ml-0 md:w-[calc(50%-2rem)] ${
          isLeft ? "md:mr-auto md:pr-8" : "md:ml-auto md:pl-8"
        }`}
      >
        <ScrollReveal delay={index * 0.1} direction={isLeft ? "right" : "left"}>
          <div className="rounded-lg border border-surface-0 bg-mantle p-6 transition-colors hover:border-surface-1">
            <div className="mb-2 flex items-start justify-between">
              <h3 className="font-mono text-lg font-semibold text-text">
                {experience.company}
              </h3>
              <span className="shrink-0 font-mono text-xs text-overlay-1">
                {experience.period}
              </span>
            </div>
            <p className="mb-1 font-mono text-sm text-purple">
              {experience.role[lang]}
            </p>
            <p className="mb-2 text-xs text-overlay-1">
              {experience.location[lang]}
            </p>
            <p className="mb-4 text-sm leading-relaxed text-subtext">
              {experience.description[lang]}
            </p>
            <div className="flex flex-wrap gap-2">
              {experience.technologies.map((tech) => (
                <TechTag key={tech} label={tech} />
              ))}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </div>
  );
}
