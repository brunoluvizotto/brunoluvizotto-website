import { useState, type FormEvent } from "react";
import { useTranslation } from "react-i18next";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import Section from "../shared/Section";
import SectionHeading from "../shared/SectionHeading";
import ScrollReveal from "../ui/ScrollReveal";
import { socialLinks } from "../../data/social";

const iconMap: Record<string, React.ReactNode> = {
  FaGithub: <FaGithub />,
  FaLinkedin: <FaLinkedin />,
  FaEnvelope: <FaEnvelope />,
};

export default function Contact() {
  const { t } = useTranslation();
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("sending");

    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const res = await fetch("https://brunoluvizotto.com.br/api/send", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: data.get("name"),
          email: data.get("email"),
          message: data.get("message"),
        }),
      });

      if (res.ok) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <Section id="contact">
      <SectionHeading i18nKey="contact.heading" />

      <div className="grid gap-12 md:grid-cols-2">
        <ScrollReveal>
          <div>
            <p className="mb-8 text-lg text-subtext">
              {t("contact.subtitle")}
            </p>

            <div className="space-y-4">
              {socialLinks.map((link) => (
                <a
                  key={link.id}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-subtext transition-colors hover:text-blue"
                >
                  <span className="text-xl">{iconMap[link.icon]}</span>
                  <span className="font-mono text-sm">{link.label}</span>
                </a>
              ))}
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label
                htmlFor="name"
                className="mb-1 block font-mono text-sm text-subtext"
              >
                {t("contact.name_label")}
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                placeholder={t("contact.name_placeholder")}
                className="w-full rounded-lg border border-surface-1 bg-surface-0 px-4 py-3 text-text placeholder:text-overlay-0 focus:border-blue focus:outline-none"
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="mb-1 block font-mono text-sm text-subtext"
              >
                {t("contact.email_label")}
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                placeholder={t("contact.email_placeholder")}
                className="w-full rounded-lg border border-surface-1 bg-surface-0 px-4 py-3 text-text placeholder:text-overlay-0 focus:border-blue focus:outline-none"
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="mb-1 block font-mono text-sm text-subtext"
              >
                {t("contact.message_label")}
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={5}
                placeholder={t("contact.message_placeholder")}
                className="w-full resize-none rounded-lg border border-surface-1 bg-surface-0 px-4 py-3 text-text placeholder:text-overlay-0 focus:border-blue focus:outline-none"
              />
            </div>

            <button
              type="submit"
              disabled={status === "sending"}
              className="w-full rounded-lg bg-blue px-6 py-3 font-mono text-sm font-medium text-crust transition-colors hover:bg-blue/80 disabled:opacity-50"
            >
              {status === "sending" ? t("contact.sending") : t("contact.send")}
            </button>

            {status === "success" && (
              <p className="font-mono text-sm text-green">{t("contact.success")}</p>
            )}
            {status === "error" && (
              <p className="font-mono text-sm text-red">{t("contact.error")}</p>
            )}
          </form>
        </ScrollReveal>
      </div>
    </Section>
  );
}
