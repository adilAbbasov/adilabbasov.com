'use client'

import { motion } from 'framer-motion'
import { ExternalLink } from 'lucide-react'

interface ProjectCardProps {
  title: string
  company: string
  description: string
  tags: string[]
  highlights: string[]
  githubUrl: string | null
  liveUrl: string | null
}

export default function ProjectCard({
  title,
  company,
  description,
  tags,
  highlights,
  githubUrl,
  liveUrl,
}: ProjectCardProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.02, borderColor: 'rgba(96,165,250,0.4)' }}
      transition={{ duration: 0.2 }}
      className="bg-[#141922] border border-white/10 rounded-xl p-6 flex flex-col gap-4 h-full"
    >
      <div>
        <div className="flex items-start justify-between gap-2">
          <h3 className="text-white font-semibold text-lg leading-snug">{title}</h3>
          <div className="flex gap-2 flex-shrink-0 mt-0.5">
            {githubUrl && (
              <a
                href={githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-blue-400 transition-colors"
              >
                <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
                </svg>
              </a>
            )}
            {liveUrl && (
              <a
                href={liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-blue-400 transition-colors"
              >
                <ExternalLink size={16} />
              </a>
            )}
          </div>
        </div>
        <p className="text-blue-400/70 text-xs mt-1">{company}</p>
        {description && <p className="text-slate-400 text-sm mt-2 leading-relaxed">{description}</p>}
      </div>

      <div className="flex flex-wrap gap-2">
        {tags.map((tag) => (
          <span
            key={tag}
            className="bg-blue-400/10 text-blue-300 border border-blue-400/20 rounded-full px-2.5 py-0.5 text-xs"
          >
            {tag}
          </span>
        ))}
      </div>

      <ul className="space-y-1.5">
        {highlights.map((h, i) => (
          <li key={i} className="text-slate-300 text-sm flex gap-2">
            <span className="text-blue-400 mt-0.5 flex-shrink-0">▸</span>
            <span>{h}</span>
          </li>
        ))}
      </ul>
    </motion.div>
  )
}
