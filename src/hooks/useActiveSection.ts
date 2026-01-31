import { useState, useEffect } from "react";
import { NAV_SECTIONS, type SectionId } from "../utils/constants";

export function useActiveSection(): SectionId | null {
  const [active, setActive] = useState<SectionId | null>(null);

  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    const handleIntersect = (entries: IntersectionObserverEntry[]) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          setActive(entry.target.id as SectionId);
        }
      }
    };

    const observer = new IntersectionObserver(handleIntersect, {
      rootMargin: "-20% 0px -70% 0px",
      threshold: 0,
    });

    for (const sectionId of NAV_SECTIONS) {
      const el = document.getElementById(sectionId);
      if (el) {
        observer.observe(el);
        observers.push(observer);
      }
    }

    // Also observe hero
    const heroEl = document.getElementById("hero");
    if (heroEl) observer.observe(heroEl);

    return () => observer.disconnect();
  }, []);

  return active;
}
