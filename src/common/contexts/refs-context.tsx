import { createContext, createRef, FC, RefObject } from "react";

export const refsContext = createContext<any>(null);

const RefsProvider: FC = ({ children }) => {
  const sections = [
    "about-me",
    "academic-info",
    "skills",
    "experience",
    "personal-projects",
    "contact",
  ];

  const refs = sections.reduce<Record<string, RefObject<HTMLElement>>>(
    (accumulated, section) => {
      const ref = createRef<HTMLElement>();
      accumulated[section] = ref;
      return accumulated;
    },
    {}
  );

  return <refsContext.Provider value={refs}>{children}</refsContext.Provider>;
};

export default RefsProvider;
