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

      {/* Column-first flow keeps the resume order: groups 1–6 left, 7–12 right. */}
      <div className="grid gap-y-5 md:grid-cols-2 md:grid-rows-6 md:grid-flow-col md:gap-x-10 mt-6">
        {skills.map((group) => (
          <div key={group.category}>
            <p className="text-slate-400 text-xs uppercase tracking-widest mb-2">{group.category}</p>
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
