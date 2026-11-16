'use client'

import { motion } from 'framer-motion'
import SectionWrapper from '@/components/ui/SectionWrapper'
import { languages } from '@/data/portfolio'

export default function Languages() {
  return (
    <SectionWrapper id="languages">
      <h2 className="section-heading">Languages</h2>
      <p className="section-sub">Spoken and written communication skills</p>

      <div className="grid sm:grid-cols-2 gap-4 mt-6">
        {languages.map((lang, i) => (
          <motion.div
            key={lang.name}
            initial={{ opacity: 0, x: -16 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: i * 0.1 }}
            viewport={{ once: true }}
            className="bg-[#141922] border border-white/10 rounded-xl p-5 hover:border-blue-400/30 transition-colors"
          >
            <div className="flex justify-between items-baseline mb-3">
              <span className="text-white font-medium text-sm">{lang.name}</span>
              <span className="text-slate-400 text-xs">{lang.level}</span>
            </div>
            <div className="h-1.5 bg-white/10 rounded-full overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: `${lang.percent}%` }}
                transition={{ duration: 0.8, delay: i * 0.1 + 0.2, ease: 'easeOut' }}
                viewport={{ once: true }}
                className="h-full bg-gradient-to-r from-blue-500 to-blue-400 rounded-full"
              />
            </div>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  )
}
