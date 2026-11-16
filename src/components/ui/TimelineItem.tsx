'use client'

import { motion } from 'framer-motion'

interface TimelineItemProps {
  title: string
  subtitle: string
  period: string
  location?: string
  bullets?: string[]
  isLast?: boolean
  delay?: number
}

export default function TimelineItem({
  title,
  subtitle,
  period,
  location,
  bullets,
  isLast = false,
  delay = 0,
}: TimelineItemProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true }}
      className="flex gap-4"
    >
      {/* Timeline line + dot */}
      <div className="flex flex-col items-center flex-shrink-0">
        <div className="w-3 h-3 rounded-full bg-blue-400 ring-4 ring-blue-400/20 mt-1.5 flex-shrink-0" />
        {!isLast && <div className="w-px flex-1 bg-white/10 mt-2" />}
      </div>

      {/* Content */}
      <div className={`pb-10 ${isLast ? 'pb-0' : ''}`}>
        <h3 className="text-white font-semibold text-base leading-tight">{title}</h3>
        <p className="text-blue-400 text-sm mt-0.5">{subtitle}</p>
        <p className="text-slate-500 text-xs mt-1">
          {period}
          {location && ` · ${location}`}
        </p>
        {bullets && bullets.length > 0 && (
          <ul className="mt-3 space-y-1.5">
            {bullets.map((b, i) => (
              <li key={i} className="text-slate-300 text-sm flex gap-2">
                <span className="text-blue-400 mt-1 flex-shrink-0">▸</span>
                <span>{b}</span>
              </li>
            ))}
          </ul>
        )}
      </div>
    </motion.div>
  )
}
