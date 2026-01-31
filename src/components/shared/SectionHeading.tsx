import { useTranslation } from "react-i18next";
import ScrollReveal from "../ui/ScrollReveal";

interface SectionHeadingProps {
  i18nKey: string;
}

export default function SectionHeading({ i18nKey }: SectionHeadingProps) {
  const { t } = useTranslation();

  return (
    <ScrollReveal>
      <h2 className="mb-12 font-mono text-3xl font-bold text-text md:text-4xl">
        <span className="text-overlay-1">{"// "}</span>
        {t(i18nKey)}
      </h2>
    </ScrollReveal>
  );
}
