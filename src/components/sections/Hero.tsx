import { useTranslation } from "react-i18next";
import { motion } from "motion/react";
import { HiArrowDown } from "react-icons/hi";

export default function Hero() {
  const { t } = useTranslation();

  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center justify-center px-6 md:px-12 lg:px-24"
    >
      {/* Background decoration */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -right-32 -top-32 h-96 w-96 rounded-full bg-blue/5 blur-3xl" />
        <div className="absolute -bottom-32 -left-32 h-96 w-96 rounded-full bg-purple/5 blur-3xl" />
      </div>

      <div className="relative z-10 max-w-3xl">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.5 }}
          className="mb-4 font-mono text-blue"
        >
          {t("hero.greeting")}
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="mb-4 font-mono text-5xl font-bold text-text md:text-7xl"
        >
          {t("hero.name")}
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="mb-6 font-mono text-2xl text-purple md:text-4xl"
        >
          {t("hero.role")}
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="mb-10 max-w-xl text-lg text-subtext"
        >
          {t("hero.tagline")}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="flex flex-wrap gap-4"
        >
          <a
            href="#experience"
            className="inline-flex items-center gap-2 rounded-lg bg-blue px-6 py-3 font-mono text-sm font-medium text-crust transition-colors hover:bg-blue/80"
          >
            {t("hero.cta_work")}
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
        >
          <HiArrowDown className="text-2xl text-overlay-1" />
        </motion.div>
      </motion.div>
    </section>
  );
}
