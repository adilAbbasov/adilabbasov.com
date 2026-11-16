interface SkillChipProps {
  label: string
}

export default function SkillChip({ label }: SkillChipProps) {
  return (
    <span className="bg-blue-400/10 text-blue-300 border border-blue-400/20 rounded-full px-3 py-1 text-sm whitespace-nowrap">
      {label}
    </span>
  )
}
