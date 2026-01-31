import { useTranslation } from "react-i18next";
import { HiAcademicCap, HiGlobeAlt } from "react-icons/hi";
import Section from "../shared/Section";
import SectionHeading from "../shared/SectionHeading";
import ScrollReveal from "../ui/ScrollReveal";
import { education } from "../../data/education";
import type { Language } from "../../types";

export default function About() {
  const { t, i18n } = useTranslation();
  const lang = (i18n.language?.startsWith("pt") ? "pt" : "en") as Language;

  return (
    <Section id="about">
      <SectionHeading i18nKey="about.heading" />

      <div className="grid gap-12 md:grid-cols-2">
        {/* Bio */}
        <ScrollReveal>
          <p className="text-lg leading-relaxed text-subtext">
            {t("about.bio")}
          </p>
        </ScrollReveal>

        <div className="space-y-8">
          {/* Education */}
          <ScrollReveal delay={0.1}>
            <div>
              <h3 className="mb-4 flex items-center gap-2 font-mono text-lg font-semibold text-green">
                <HiAcademicCap className="text-xl" />
                {t("about.education_title")}
              </h3>
              <ul className="space-y-3">
                {education.map((edu) => (
                  <li key={edu.id} className="border-l-2 border-surface-1 pl-4">
                    <p className="font-medium text-text">{edu.degree[lang]}</p>
                    <p className="text-sm text-subtext">
                      {edu.institution} &middot; {edu.period}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          </ScrollReveal>

          {/* Spoken Languages */}
          <ScrollReveal delay={0.2}>
            <div>
              <h3 className="mb-4 flex items-center gap-2 font-mono text-lg font-semibold text-green">
                <HiGlobeAlt className="text-xl" />
                {t("about.languages_title")}
              </h3>
              <ul className="space-y-2">
                <li className="text-subtext">{t("about.lang_portuguese")}</li>
                <li className="text-subtext">{t("about.lang_english")}</li>
                <li className="text-subtext">{t("about.lang_italian")}</li>
                <li className="text-subtext">{t("about.lang_french")}</li>
              </ul>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </Section>
  );
}
