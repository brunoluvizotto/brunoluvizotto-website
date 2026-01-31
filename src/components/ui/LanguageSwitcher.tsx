import { useTranslation } from "react-i18next";

export default function LanguageSwitcher() {
  const { i18n } = useTranslation();
  const currentLang = i18n.language?.startsWith("pt") ? "pt" : "en";

  const toggle = () => {
    i18n.changeLanguage(currentLang === "en" ? "pt" : "en");
  };

  return (
    <button
      onClick={toggle}
      className="flex items-center gap-1.5 rounded-md border border-surface-1 px-2.5 py-1.5 font-mono text-sm text-subtext transition-colors hover:border-blue hover:text-blue"
      aria-label="Toggle language"
    >
      <span className={currentLang === "en" ? "text-blue" : "text-subtext"}>
        EN
      </span>
      <span className="text-surface-2">/</span>
      <span className={currentLang === "pt" ? "text-blue" : "text-subtext"}>
        PT
      </span>
    </button>
  );
}
