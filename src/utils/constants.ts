export const SECTIONS = [
  "hero",
  "about",
  "experience",
  "projects",
  "skills",
  "contact",
] as const;

export type SectionId = (typeof SECTIONS)[number];

export const NAV_SECTIONS = SECTIONS.filter((s) => s !== "hero");
