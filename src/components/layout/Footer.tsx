import { useTranslation } from "react-i18next";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { socialLinks } from "../../data/social";

const iconMap: Record<string, React.ReactNode> = {
  FaGithub: <FaGithub />,
  FaLinkedin: <FaLinkedin />,
  FaEnvelope: <FaEnvelope />,
};

export default function Footer() {
  const { t } = useTranslation();
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-surface-0 bg-mantle px-6 py-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-4">
        <div className="flex gap-6">
          {socialLinks.map((link) => (
            <a
              key={link.id}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xl text-subtext transition-colors hover:text-blue"
              aria-label={link.label}
            >
              {iconMap[link.icon]}
            </a>
          ))}
        </div>
        <p className="text-center text-sm text-overlay-1">
          {t("footer.built_with")}
        </p>
        <p className="text-center text-sm text-overlay-0">
          &copy; {year} Bruno Luvizotto. {t("footer.rights")}
        </p>
      </div>
    </footer>
  );
}
