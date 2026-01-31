# Portfolio Website - Bruno Luvizotto

## Overview
New portfolio website replacing the current one at brunoluvizotto.com.br. Dark-themed, developer-aesthetic, bilingual (EN/PT), built as a static React SPA.

## Tech Stack
- **Vite + React 19 + TypeScript** (strict mode)
- **Tailwind CSS v4** (via `@tailwindcss/vite` plugin)
- **react-i18next** + `i18next-browser-languagedetector` for EN/PT
- **Motion** (formerly Framer Motion) for scroll animations
- **react-icons** for iconography
- **EmailJS or Formspree** for contact form (no backend)
- **Deployment:** Vercel (free tier, custom domain)

## Design Direction
- **Dark theme** inspired by Catppuccin Mocha / VS Code aesthetic
- Colors: deep blue-gray bg (`#1e1e2e`), soft gray-blue text (`#cdd6f4`), syntax-highlight accents (blue `#89b4fa`, green `#a6e3a1`, purple `#cba6f7`, yellow `#f9e2af`)
- **Fonts:** Inter (body) + JetBrains Mono (headings, code accents)
- Section headings styled as code comments: `// About`, `// Experience`
- Subtle scroll-reveal animations (fade-in, slide-up), hover effects on cards
- Mobile-first responsive design

## Sections
1. **Hero** - Full viewport, name (monospace), role, tagline, CTAs (View Work / Download Resume)
2. **About** - Bio, education (UNICAMP, INPG, Tera), spoken languages
3. **Experience** - Vertical timeline with alternating cards (desktop), single-column (mobile). Tech tags per role.
4. **Projects** - Responsive grid (1/2/3 cols). Cards with image, description, tech tags, live/source links.
5. **Skills** - Grouped by category (Languages, Frontend, Backend, Databases, Cloud/DevOps). Badge/chip display.
6. **Contact** - Form (EmailJS/Formspree) + direct links (email, LinkedIn, GitHub)

## i18n Strategy
- **UI strings** (nav, headings, button labels, bio) -> JSON translation files (`locales/en/translation.json`, `locales/pt/translation.json`)
- **Structured data** (experiences, projects) -> TypeScript data files with `TranslatableString` type (`{ en: string; pt: string }`)
- Language auto-detected from browser, stored in localStorage, switchable via header toggle

## Project Structure
```
brunoluvizotto/
├── public/
│   └── images/projects/          # Project screenshots
├── src/
│   ├── components/
│   │   ├── layout/               # Header, Footer
│   │   ├── sections/             # Hero, About, Experience, Projects, Skills, Contact
│   │   ├── ui/                   # LanguageSwitcher, ScrollReveal, TechTag, TimelineItem, ProjectCard, SkillCategoryCard, SkillBadge
│   │   └── shared/               # Section, SectionHeading
│   ├── data/                     # experience.ts, projects.ts, skills.ts, social.ts, education.ts
│   ├── locales/{en,pt}/          # translation.json files
│   ├── hooks/                    # useActiveSection.ts
│   ├── types/                    # TypeScript interfaces
│   ├── utils/                    # constants.ts
│   ├── i18n.ts                   # i18n config
│   ├── App.tsx                   # Root component
│   ├── main.tsx                  # Entry point
│   └── index.css                 # Tailwind + custom theme
├── vite.config.ts
├── prd.md                        # This file
└── progress.md                   # Implementation progress tracker
```
