'use client'

import { MotionConfig } from 'framer-motion'
import { ReactNode } from 'react'

// Respects the visitor's "reduce motion" OS setting: transform animations are skipped.
export default function MotionProvider({ children }: { children: ReactNode }) {
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>
}
