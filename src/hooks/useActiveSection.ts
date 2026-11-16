'use client'

import { useState, useEffect } from 'react'

const SECTIONS = [
  'hero',
  'about',
  'experience',
  'projects',
  'skills',
  'education',
  'certifications',
  'diplomas',
  'languages',
  'contact',
]

export function useActiveSection(): string {
  const [active, setActive] = useState('hero')

  useEffect(() => {
    const observers: IntersectionObserver[] = []

    SECTIONS.forEach((id) => {
      const el = document.getElementById(id)
      if (!el) return

      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActive(id)
        },
        { rootMargin: '-40% 0px -55% 0px', threshold: 0 }
      )
      obs.observe(el)
      observers.push(obs)
    })

    return () => observers.forEach((o) => o.disconnect())
  }, [])

  return active
}
