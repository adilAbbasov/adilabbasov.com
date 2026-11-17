import { Award } from 'lucide-react'

interface CertCardProps {
  title: string
  issuer: string
  examCode: string | null
  status: 'Planned' | 'In Progress' | 'Completed'
}

export default function CertCard({ title, issuer, examCode, status }: CertCardProps) {
  const statusStyles =
    status === 'In Progress'
      ? 'bg-green-400/10 text-green-300 border-green-400/20'
      : status === 'Completed'
        ? 'bg-blue-400/10 text-blue-300 border-blue-400/20'
        : 'bg-yellow-400/10 text-yellow-300 border-yellow-400/20'

  return (
    <div className="bg-[#141922] border border-white/10 rounded-xl p-5 flex flex-col gap-3 hover:border-blue-400/30 transition-colors">
      <div className="flex items-start justify-between gap-2">
        <Award className="text-blue-400 flex-shrink-0 mt-0.5" size={20} />
        <span
          className={`text-xs border rounded-full px-2.5 py-0.5 flex-shrink-0 ${statusStyles}`}
        >
          {status}
        </span>
      </div>
      <div>
        <h4 className="text-white font-medium text-sm leading-snug">{title}</h4>
        <p className="text-blue-400 text-xs mt-1">{issuer}</p>
        {examCode && (
          <p className="text-slate-400 text-xs mt-1 font-mono">{examCode}</p>
        )}
      </div>
    </div>
  )
}
