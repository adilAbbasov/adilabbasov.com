'use client'

import { motion } from 'framer-motion'
import { ReactNode } from 'react'

interface SectionWrapperProps {
  id: string
  className?: string
  children: ReactNode
}

export default function SectionWrapper({ id, className = '', children }: SectionWrapperProps) {
  return (
    <section id={id} className={`py-20 px-4 max-w-5xl mx-auto ${className}`}>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.21, 1.11, 0.81, 0.99] }}
        viewport={{ once: true, margin: '-100px' }}
      >
        {children}
      </motion.div>
    </section>
  )
}
