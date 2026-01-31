import Section from "../shared/Section";
import SectionHeading from "../shared/SectionHeading";
import TimelineItem from "../ui/TimelineItem";
import { experiences } from "../../data/experience";

export default function Experience() {
  return (
    <Section id="experience">
      <SectionHeading i18nKey="experience.heading" />

      <div className="relative">
        {/* Timeline line */}
        <div className="absolute bottom-0 left-0 top-0 w-px -translate-x-1/2 bg-surface-1 md:left-1/2" />

        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <TimelineItem key={exp.id} experience={exp} index={index} />
          ))}
        </div>
      </div>
    </Section>
  );
}
