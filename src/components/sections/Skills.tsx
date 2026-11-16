'use client'

import { motion } from 'framer-motion'
import SectionWrapper from '@/components/ui/SectionWrapper'
import SkillChip from '@/components/ui/SkillChip'
import { skills } from '@/data/portfolio'

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.05 } },
}

const chip = {
  hidden: { opacity: 0, scale: 0.85 },
  show: { opacity: 1, scale: 1, transition: { duration: 0.25 } },
}

export default function Skills() {
  return (
    <SectionWrapper id="skills">
      <h2 className="section-heading">Skills</h2>
      <p className="section-sub">Technologies and tools I work with</p>

      <div className="space-y-6 mt-6">
        {skills.map((group) => (
          <div key={group.category}>
            <p className="text-slate-500 text-xs uppercase tracking-widest mb-3">{group.category}</p>
            <motion.div
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="flex flex-wrap gap-2"
            >
              {group.items.map((skill) => (
                <motion.span key={skill} variants={chip}>
                  <SkillChip label={skill} />
                </motion.span>
              ))}
            </motion.div>
          </div>
        ))}
      </div>
    </SectionWrapper>
  )
}
