'use client'

import SectionWrapper from '@/components/ui/SectionWrapper'
import TimelineItem from '@/components/ui/TimelineItem'
import { experience } from '@/data/portfolio'

export default function Experience() {
  return (
    <SectionWrapper id="experience">
      <h2 className="section-heading">Experience</h2>
      <p className="section-sub">Professional history and responsibilities</p>

      <div className="mt-6">
        {experience.map((item, i) => (
          <TimelineItem
            key={item.id}
            title={item.title}
            subtitle={item.company}
            period={item.period}
            location={item.location}
            bullets={item.bullets}
            isLast={i === experience.length - 1}
            delay={i * 0.15}
          />
        ))}
      </div>
    </SectionWrapper>
  )
}
