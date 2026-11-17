'use client'

import { motion } from 'framer-motion'
import { Award, GraduationCap } from 'lucide-react'
import SectionWrapper from '@/components/ui/SectionWrapper'
import { education } from '@/data/portfolio'

// Degree cards: 1 column on phones/tablets, 2×2 from lg (newest first, left to right).
// The date badge sits top-right from sm; on phones it moves under the location so text keeps its width.
export default function Education() {
  return (
    <SectionWrapper id="education">
      <h2 className="section-heading">Education</h2>
      <p className="section-sub">Academic background and qualifications</p>

      <div className="grid lg:grid-cols-2 gap-4 mt-6">
        {education.map((item, i) => {
          const Icon = item.id === 'step' ? Award : GraduationCap
          const badge = (
            <span className="whitespace-nowrap rounded-full border border-blue-400/20 bg-blue-400/10 px-2.5 py-0.5 text-xs text-blue-300">
              {item.period}
            </span>
          )
          return (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="bg-[#141922] border border-white/10 rounded-xl p-5 flex items-start gap-4 hover:border-blue-400/30 transition-colors"
            >
              <div className="w-10 h-10 rounded-lg bg-blue-400/10 flex items-center justify-center flex-shrink-0">
                <Icon size={18} className="text-blue-400" />
              </div>
              <div className="min-w-0 flex-1">
                <h3 className="text-white font-medium text-sm">{item.degree}</h3>
                <p className="text-blue-400 text-sm mt-0.5">{item.institution}</p>
                <p className="text-slate-400 text-xs mt-1">{item.location}</p>
                <div className="mt-2 sm:hidden">{badge}</div>
              </div>
              <div className="hidden sm:block flex-shrink-0">{badge}</div>
            </motion.div>
          )
        })}
      </div>
    </SectionWrapper>
  )
}
