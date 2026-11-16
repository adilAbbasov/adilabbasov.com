'use client'

import { ReactNode } from 'react'
import { motion } from 'framer-motion'
import { Mail, Phone } from 'lucide-react'
import SectionWrapper from '@/components/ui/SectionWrapper'
import { personal } from '@/data/portfolio'

const GithubSvg = () => (
  <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" className="text-blue-400">
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
  </svg>
)

const LinkedinSvg = () => (
  <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" className="text-blue-400">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
)

const links: { icon: ReactNode; label: string; value: string; href: string }[] = [
  {
    icon: <Mail size={18} className="text-blue-400" />,
    label: 'Email',
    value: personal.email,
    href: `mailto:${personal.email}`,
  },
  {
    icon: <LinkedinSvg />,
    label: 'LinkedIn',
    value: 'linkedin.com/in/adil-abbasov',
    href: personal.linkedin,
  },
  {
    icon: <GithubSvg />,
    label: 'GitHub',
    value: 'github.com/adilAbbasov',
    href: personal.github,
  },
]

export default function Contact() {
  return (
    <SectionWrapper id="contact">
      <h2 className="section-heading">Get In Touch</h2>
      <p className="section-sub">Open to new opportunities and collaborations</p>

      <p className="text-slate-300 text-sm leading-relaxed mb-8 max-w-lg">
        I&apos;m open to new opportunities, interesting projects, and technical discussions. Feel
        free to reach out through any of the channels below.
      </p>

      {/* Phone display */}
      <div className="flex items-center gap-3 mb-6 text-slate-400 text-sm">
        <Phone size={16} className="text-blue-400" />
        <span>{personal.phone}</span>
      </div>

      {/* Social links */}
      <div className="grid sm:grid-cols-3 gap-4">
        {links.map(({ icon, label, value, href }, i) => (
          <motion.a
            key={label}
            href={href}
            target={href.startsWith('mailto') ? undefined : '_blank'}
            rel={href.startsWith('mailto') ? undefined : 'noopener noreferrer'}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: i * 0.1 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.02 }}
            className="bg-[#141922] border border-white/10 rounded-xl p-5 flex items-center gap-4 hover:border-blue-400/40 transition-colors group"
          >
            <div className="w-10 h-10 rounded-lg bg-blue-400/10 flex items-center justify-center flex-shrink-0 group-hover:bg-blue-400/20 transition-colors">
              {icon}
            </div>
            <div className="min-w-0">
              <p className="text-white text-sm font-medium">{label}</p>
              <p className="text-slate-400 text-xs truncate">{value}</p>
            </div>
          </motion.a>
        ))}
      </div>
    </SectionWrapper>
  )
}
