import Section from "../shared/Section";
import SectionHeading from "../shared/SectionHeading";
import SkillCategoryCard from "../ui/SkillCategoryCard";
import { skillCategories } from "../../data/skills";

export default function Skills() {
  return (
    <Section id="skills">
      <SectionHeading i18nKey="skills.heading" />

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {skillCategories.map((category, index) => (
          <SkillCategoryCard
            key={category.id}
            category={category}
            index={index}
          />
        ))}
      </div>
    </Section>
  );
}
