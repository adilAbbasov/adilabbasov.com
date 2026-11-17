'use client'

import { useState, useEffect } from 'react'

const SECTIONS = [
  'hero',
  'about',
  'experience',
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
    const last = SECTIONS[SECTIONS.length - 1]

    // The last section is too short to reach the detection band on tall screens,
    // so at the bottom of the page it always wins over the band.
    const atBottom = () =>
      window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 2
    let inBand: string | null = null

    const update = () => {
      if (atBottom()) setActive(last)
      else if (inBand) setActive(inBand)
    }

    SECTIONS.forEach((id) => {
      const el = document.getElementById(id)
      if (!el) return

      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) inBand = id
          else if (inBand === id) inBand = null
          update()
        },
        { rootMargin: '-40% 0px -55% 0px', threshold: 0 }
      )
      obs.observe(el)
      observers.push(obs)
    })

    const onScroll = update
    window.addEventListener('scroll', onScroll, { passive: true })

    return () => {
      observers.forEach((o) => o.disconnect())
      window.removeEventListener('scroll', onScroll)
    }
  }, [])

  return active
}
