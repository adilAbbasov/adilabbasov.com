'use client'

import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { useActiveSection } from '@/hooks/useActiveSection'

const NAV_LINKS = [
  { id: 'hero', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'skills', label: 'Skills' },
  { id: 'education', label: 'Education' },
  // { id: 'certifications', label: 'Certs' },
  { id: 'diplomas', label: 'Diplomas' },
  { id: 'languages', label: 'Languages' },
  { id: 'contact', label: 'Contact' },
]

function scrollTo(id: string) {
  const el = document.getElementById(id)
  if (!el) return
  const top = el.getBoundingClientRect().top + window.scrollY - 72
  window.scrollTo({ top, behavior: 'smooth' })
}

export default function Navbar() {
  const active = useActiveSection()
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-[#111827]/80 border-b border-white/5">
      <div className="max-w-5xl mx-auto px-4 h-16 flex items-center justify-between">
        {/* Logo */}
        <button
          onClick={() => scrollTo('hero')}
          className="text-white font-bold text-xl tracking-wide hover:text-blue-400 transition-colors"
        >
          <span className="text-blue-400">.</span>AA
        </button>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-1">
          {NAV_LINKS.map(({ id, label }) => (
            <button
              key={id}
              onClick={() => scrollTo(id)}
              className={`relative px-3 py-1.5 text-sm font-medium rounded-md transition-colors duration-200 ${
                active === id
                  ? 'text-blue-400'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              {label}
              {active === id && (
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-4 h-0.5 bg-blue-400 rounded-full" />
              )}
            </button>
          ))}
        </nav>

        {/* Mobile hamburger */}
        <button
          className="md:hidden text-slate-400 hover:text-white transition-colors"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile dropdown */}
      {open && (
        <div className="md:hidden border-t border-white/5 bg-[#111827]">
          {NAV_LINKS.map(({ id, label }) => (
            <button
              key={id}
              onClick={() => {
                scrollTo(id)
                setOpen(false)
              }}
              className={`w-full text-left px-6 py-3 text-sm transition-colors ${
                active === id
                  ? 'text-blue-400 bg-blue-400/5'
                  : 'text-slate-400 hover:text-white hover:bg-white/5'
              }`}
            >
              {label}
            </button>
          ))}
        </div>
      )}
    </header>
  )
}
