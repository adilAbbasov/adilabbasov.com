'use client'

import { motion } from 'framer-motion'
import { MapPin, Mail } from 'lucide-react'
import { personal } from '@/data/portfolio'

function scrollTo(id: string) {
  const el = document.getElementById(id)
  if (!el) return
  const top = el.getBoundingClientRect().top + window.scrollY - 72
  window.scrollTo({ top, behavior: 'smooth' })
}

const fadeUp = (delay: number) => ({
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, delay, ease: 'easeOut' as const },
})

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-center px-4 pt-16 overflow-hidden"
    >
      {/* Animated background blobs */}
      <motion.div
        className="absolute top-1/4 left-1/3 w-96 h-96 rounded-full bg-blue-500/8 blur-3xl pointer-events-none"
        animate={{ scale: [1, 1.15, 1], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute bottom-1/4 right-1/4 w-64 h-64 rounded-full bg-blue-400/5 blur-3xl pointer-events-none"
        animate={{ scale: [1.1, 1, 1.1], opacity: [0.2, 0.4, 0.2] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
      />

      <div className="max-w-5xl mx-auto w-full relative z-10">
        {/* Location badge */}
        <motion.div {...fadeUp(0)} className="mb-6">
          <span className="inline-flex items-center gap-1.5 text-slate-400 text-sm bg-white/5 border border-white/10 rounded-full px-3 py-1">
            <MapPin size={12} className="text-blue-400" />
            {personal.location}
          </span>
        </motion.div>

        {/* Name */}
        <motion.h1
          {...fadeUp(0.1)}
          className="text-5xl md:text-7xl font-extrabold leading-none tracking-tight mb-4"
        >
          <span className="bg-gradient-to-r from-white to-blue-400 bg-clip-text text-transparent">
            {personal.name}
          </span>
        </motion.h1>

        {/* Role */}
        <motion.p {...fadeUp(0.2)} className="text-xl md:text-2xl text-blue-400 font-medium mb-4">
          {personal.role}
        </motion.p>

        {/* Tagline */}
        <motion.p
          {...fadeUp(0.3)}
          className="text-slate-400 text-base md:text-lg max-w-xl leading-relaxed mb-10"
        >
          {personal.tagline}
        </motion.p>

        {/* CTA buttons */}
        <motion.div {...fadeUp(0.4)} className="flex flex-wrap gap-3 mb-10">
          <button
            onClick={() => scrollTo('experience')}
            className="bg-blue-500 hover:bg-blue-400 text-white font-medium px-6 py-2.5 rounded-lg transition-colors text-sm"
          >
            View Experience
          </button>
          <button
            onClick={() => scrollTo('contact')}
            className="border border-white/20 hover:border-blue-400/60 text-slate-300 hover:text-white font-medium px-6 py-2.5 rounded-lg transition-colors text-sm"
          >
            Contact Me
          </button>
        </motion.div>

        {/* Social links */}
        <motion.div {...fadeUp(0.5)} className="flex items-center gap-4">
          <a
            href={`mailto:${personal.email}`}
            className="text-slate-500 hover:text-blue-400 transition-colors"
            aria-label="Email"
          >
            <Mail size={18} />
          </a>
          <a
            href={personal.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-500 hover:text-blue-400 transition-colors"
            aria-label="GitHub"
          >
            <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
            </svg>
          </a>
          <a
            href={personal.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-500 hover:text-blue-400 transition-colors"
            aria-label="LinkedIn"
          >
            <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1"
        animate={{ y: [0, 6, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
      >
        <div className="w-px h-8 bg-gradient-to-b from-transparent to-blue-400/40" />
        <div className="w-1 h-1 rounded-full bg-blue-400/40" />
      </motion.div>
    </section>
  )
}
