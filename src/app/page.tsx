import Hero from '@/components/sections/Hero'
import About from '@/components/sections/About'
import Experience from '@/components/sections/Experience'
import Skills from '@/components/sections/Skills'
import Education from '@/components/sections/Education'
// import Certifications from '@/components/sections/Certifications'
import Diplomas from '@/components/sections/Diplomas'
import Languages from '@/components/sections/Languages'
import Contact from '@/components/sections/Contact'

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Experience />
      <Skills />
      <Education />
      {/* <Certifications /> */}
      <Diplomas />
      <Languages />
      <Contact />
    </>
  )
}
