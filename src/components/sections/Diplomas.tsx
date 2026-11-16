'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { Download } from 'lucide-react'
import SectionWrapper from '@/components/ui/SectionWrapper'

const diplomas = [
  {
    id: 1,
    title: 'Software Development Diploma',
    issuer: 'STEP IT Computer Academy',
    number: 'BK-023261',
    period: 'Apr 2021 – Dec 2023',
    location: 'Baku, Azerbaijan',
    image: '/diplomas/stepit-diploma.webp',
    pdf: '/diplomas/stepit-diploma.pdf',
  },
]

export default function Diplomas() {
  return (
    <SectionWrapper id="diplomas">
      <h2 className="section-heading">Diplomas</h2>
      <p className="section-sub">Official credentials and completed programs</p>

      <div className="mt-10 grid gap-10">
        {diplomas.map((diploma, i) => (
          <motion.div
            key={diploma.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            viewport={{ once: true }}
            className="bg-white/5 border border-white/10 rounded-2xl overflow-hidden"
          >
            {/* Diploma image */}
            <div className="relative w-full aspect-[1.414/1] bg-white">
              <Image
                src={diploma.image}
                alt={`${diploma.title} — ${diploma.issuer}`}
                fill
                priority
                placeholder="blur"
                blurDataURL="data:image/webp;base64,UklGRlgAAABXRUJQVlA4IEwAAADQAwCdASoUAA4APzmGulOvKSWisAgB4CcJQBhQBDwJ59PIZ8Fw0IAA/tO8bMfl9XTVRb2B56pOoAcN0K1y9sVL9Q6cmBOyqygoCkAA"
                className="object-contain"
                sizes="(max-width: 768px) 100vw, 896px"
              />
            </div>

            {/* Info + download */}
            <div className="px-6 py-5 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <div>
                <h3 className="text-white font-semibold text-lg leading-tight">
                  {diploma.title}
                </h3>
                <p className="text-blue-400 text-sm mt-0.5">{diploma.issuer}</p>
                <div className="flex flex-wrap gap-x-4 gap-y-1 mt-2 text-slate-400 text-xs">
                  <span>№ {diploma.number}</span>
                  <span>{diploma.period}</span>
                  <span>{diploma.location}</span>
                </div>
              </div>

              <a
                href={diploma.pdf}
                download
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-blue-600 hover:bg-blue-500 text-white text-sm font-medium rounded-lg transition-colors shrink-0"
              >
                <Download size={15} />
                Download PDF
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  )
}
