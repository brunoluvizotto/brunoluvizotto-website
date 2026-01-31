interface SkillBadgeProps {
  label: string;
}

export default function SkillBadge({ label }: SkillBadgeProps) {
  return (
    <span className="inline-flex items-center rounded-md border border-surface-1 bg-surface-0/50 px-3 py-1.5 font-mono text-sm text-text transition-colors hover:border-blue hover:text-blue">
      {label}
    </span>
  );
}
