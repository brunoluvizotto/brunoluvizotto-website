interface TechTagProps {
  label: string;
}

export default function TechTag({ label }: TechTagProps) {
  return (
    <span className="inline-block rounded-full bg-surface-0 px-3 py-1 font-mono text-xs text-blue">
      {label}
    </span>
  );
}
