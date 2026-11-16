'use client'

import SectionWrapper from '@/components/ui/SectionWrapper'
import TimelineItem from '@/components/ui/TimelineItem'
import { education } from '@/data/portfolio'

export default function Education() {
  return (
    <SectionWrapper id="education">
      <h2 className="section-heading">Education</h2>
      <p className="section-sub">Academic background and qualifications</p>

      <div className="mt-6">
        {education.map((item, i) => (
          <TimelineItem
            key={item.id}
            title={item.degree}
            subtitle={item.institution}
            period={item.period}
            location={item.location}
            isLast={i === education.length - 1}
            delay={i * 0.12}
          />
        ))}
      </div>
    </SectionWrapper>
  )
}
