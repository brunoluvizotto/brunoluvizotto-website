import { useState } from "react";
import { useTranslation } from "react-i18next";
import { HiOutlineMenuAlt3, HiX } from "react-icons/hi";
import LanguageSwitcher from "../ui/LanguageSwitcher";
import { NAV_SECTIONS } from "../../utils/constants";
import { useActiveSection } from "../../hooks/useActiveSection";

export default function Header() {
  const { t } = useTranslation();
  const [menuOpen, setMenuOpen] = useState(false);
  const activeSection = useActiveSection();

  const handleNavClick = () => setMenuOpen(false);

  return (
    <header className="fixed top-0 z-50 w-full border-b border-surface-0 bg-mantle/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 md:px-12 lg:px-24">
        <a
          href="#hero"
          className="font-mono text-lg font-bold text-blue transition-colors hover:text-purple"
        >
          {"<BL />"}
        </a>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-8 md:flex">
          {NAV_SECTIONS.map((section) => (
            <a
              key={section}
              href={`#${section}`}
              className={`font-mono text-sm transition-colors hover:text-blue ${
                activeSection === section ? "text-blue" : "text-subtext"
              }`}
            >
              {t(`nav.${section}`)}
            </a>
          ))}
          <LanguageSwitcher />
        </nav>

        {/* Mobile menu button */}
        <div className="flex items-center gap-4 md:hidden">
          <LanguageSwitcher />
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-2xl text-subtext transition-colors hover:text-blue"
            aria-label="Toggle menu"
          >
            {menuOpen ? <HiX /> : <HiOutlineMenuAlt3 />}
          </button>
        </div>
      </div>

      {/* Mobile nav */}
      {menuOpen && (
        <nav className="border-t border-surface-0 bg-mantle px-6 pb-4 md:hidden">
          {NAV_SECTIONS.map((section) => (
            <a
              key={section}
              href={`#${section}`}
              onClick={handleNavClick}
              className={`block py-3 font-mono text-sm transition-colors hover:text-blue ${
                activeSection === section ? "text-blue" : "text-subtext"
              }`}
            >
              {t(`nav.${section}`)}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
}
