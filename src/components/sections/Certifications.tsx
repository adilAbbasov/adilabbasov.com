'use client'

import { motion } from 'framer-motion'
import SectionWrapper from '@/components/ui/SectionWrapper'
import CertCard from '@/components/ui/CertCard'
import { certifications } from '@/data/portfolio'

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
}

const item = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4 } },
}

export default function Certifications() {
  return (
    <SectionWrapper id="certifications">
      <h2 className="section-heading">Certifications</h2>
      <p className="section-sub">Planned and in-progress professional certifications</p>

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-6"
      >
        {certifications.map((cert) => (
          <motion.div key={cert.id} variants={item}>
            <CertCard
              title={cert.title}
              issuer={cert.issuer}
              examCode={cert.examCode}
              status={cert.status as 'Planned' | 'In Progress' | 'Completed'}
            />
          </motion.div>
        ))}
      </motion.div>
    </SectionWrapper>
  )
}
