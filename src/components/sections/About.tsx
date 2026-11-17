'use client'

import SectionWrapper from '@/components/ui/SectionWrapper'
import { about, aboutStats } from '@/data/portfolio'

export default function About() {
  return (
    <SectionWrapper id="about">
      <h2 className="section-heading">About Me</h2>
      <p className="section-sub">Who I am and what drives me</p>

      {/* Side by side from lg: text ⅔, stats ⅓; stats stretch to the text's height. */}
      <div className="grid gap-8 lg:grid-cols-[2fr_1fr]">
        {/* Bio */}
        <p className="text-slate-300 leading-relaxed text-sm md:text-base max-w-3xl lg:max-w-none">{about}</p>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-2 lg:auto-rows-fr gap-4">
          {aboutStats.map((stat) => (
            <div
              key={stat.label}
              className="flex flex-col justify-center bg-[#141922] border border-white/10 rounded-xl p-5 text-center hover:border-blue-400/30 transition-colors"
            >
              <div className="text-3xl font-bold text-blue-400 mb-1">{stat.value}</div>
              <div className="text-slate-400 text-xs">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  )
}
