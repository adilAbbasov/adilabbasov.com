'use client'

import { motion } from 'framer-motion'
import SectionWrapper from '@/components/ui/SectionWrapper'
import ProjectCard from '@/components/ui/ProjectCard'
import { projects } from '@/data/portfolio'

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.15 } },
}

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
}

export default function Projects() {
  return (
    <SectionWrapper id="projects">
      <h2 className="section-heading">Projects</h2>
      <p className="section-sub">Derived from real enterprise work experience</p>

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="grid md:grid-cols-2 gap-6 mt-6"
      >
        {projects.map((project) => (
          <motion.div key={project.id} variants={item}>
            <ProjectCard
              title={project.title}
              company={project.company}
              description={project.description}
              tags={project.tags}
              highlights={project.highlights}
              githubUrl={project.githubUrl}
              liveUrl={project.liveUrl}
            />
          </motion.div>
        ))}
      </motion.div>
    </SectionWrapper>
  )
}
