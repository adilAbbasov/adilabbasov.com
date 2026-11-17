'use client'

import { useCallback, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { Download, ZoomIn } from 'lucide-react'
import SectionWrapper from '@/components/ui/SectionWrapper'
import DocumentViewer from '@/components/ui/DocumentViewer'

const diploma = {
  title: 'Software Development Diploma',
  issuer: 'STEP IT Computer Academy',
  number: 'BK-023261',
  period: 'Apr 2021 – Dec 2023',
  location: 'Baku, Azerbaijan',
}

// Grid column widths follow each document's aspect ratio (landscape 1.414, portrait 0.707),
// so both images render at exactly the same height side by side.
// zoomMin/zoomMax: width range of the zoomed view (phones pan across zoomMin).
const documents = [
  {
    id: 'diploma',
    label: 'Diploma',
    image: '/diplomas/stepit-diploma.webp',
    pdf: '/diplomas/Adil-Abbasov-STEP-IT-Diploma.pdf',
    aspect: 'aspect-[1.414/1]',
    sizes: '(max-width: 768px) 100vw, 600px',
    zoomMin: 1200,
    zoomMax: 1600,
    blur: 'data:image/webp;base64,UklGRlgAAABXRUJQVlA4IEwAAADQAwCdASoUAA4APzmGulOvKSWisAgB4CcJQBhQBDwJ59PIZ8Fw0IAA/tO8bMfl9XTVRb2B56pOoAcN0K1y9sVL9Q6cmBOyqygoCkAA',
  },
  {
    id: 'supplement',
    label: 'Diploma Supplement',
    image: '/diplomas/stepit-diploma-supplement.webp',
    pdf: '/diplomas/Adil-Abbasov-STEP-IT-Diploma-Supplement.pdf',
    aspect: 'aspect-[0.707/1]',
    sizes: '(max-width: 768px) 100vw, 300px',
    zoomMin: 900,
    zoomMax: 1000,
    blur: 'data:image/webp;base64,UklGRngAAABXRUJQVlA4IGwAAADQBACdASoUABwAPxFss1CsJaSisBgMAYAiCWUAtOgQ72yqk6EXgjkYHk9aCT2qkAD+0721FyxDS3Inwus0gRNPmouosoNZKzqUcrmjXn8Ut+5JYjDRQ/c2Est0xteUV4Y2WsPdqtAqIukAAAA=',
  },
]

export default function Diplomas() {
  const [openId, setOpenId] = useState<string | null>(null)
  const triggerRef = useRef<HTMLButtonElement | null>(null)
  const active = documents.find((d) => d.id === openId)

  // Return keyboard focus to the preview that opened the viewer.
  const closeViewer = useCallback(() => {
    setOpenId(null)
    triggerRef.current?.focus({ preventScroll: true })
  }, [])

  return (
    <SectionWrapper id="diplomas">
      <h2 className="section-heading">Diplomas</h2>
      <p className="section-sub">Official credentials and completed programs</p>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="mt-10 bg-white/5 border border-white/10 rounded-2xl p-5 md:p-6"
      >
        {/* Info */}
        <div className="mb-5">
          <h3 className="text-white font-semibold text-lg leading-tight">{diploma.title}</h3>
          <p className="text-blue-400 text-sm mt-0.5">{diploma.issuer}</p>
          <div className="flex flex-wrap gap-x-4 gap-y-1 mt-2 text-slate-400 text-xs">
            <span>№ {diploma.number}</span>
            <span>{diploma.period}</span>
            <span>{diploma.location}</span>
          </div>
        </div>

        {/* Diploma + supplement */}
        <div className="grid gap-5 md:grid-cols-[1.414fr_0.707fr]">
          {documents.map((doc) => (
            <figure key={doc.id} className="flex flex-col gap-3">
              <button
                type="button"
                onClick={(e) => {
                  triggerRef.current = e.currentTarget
                  setOpenId(doc.id)
                }}
                aria-label={`Enlarge ${doc.label}`}
                className={`group relative w-full ${doc.aspect} bg-white rounded-lg overflow-hidden cursor-zoom-in focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400`}
              >
                <Image
                  src={doc.image}
                  alt={`${doc.label} — ${diploma.issuer}`}
                  fill
                  placeholder="blur"
                  blurDataURL={doc.blur}
                  className="object-contain"
                  sizes={doc.sizes}
                />
                <span
                  aria-hidden="true"
                  className="absolute bottom-2 right-2 grid h-8 w-8 place-items-center rounded-full bg-black/60 text-white opacity-80 transition-opacity group-hover:opacity-100"
                >
                  <ZoomIn size={16} />
                </span>
              </button>
              <figcaption className="flex items-center justify-between gap-3">
                <span className="text-slate-300 text-sm">{doc.label}</span>
                <a
                  href={doc.pdf}
                  download
                  className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-500 text-white text-sm font-medium rounded-lg transition-colors shrink-0"
                >
                  <Download size={15} />
                  PDF
                </a>
              </figcaption>
            </figure>
          ))}
        </div>
      </motion.div>

      {active && (
        <DocumentViewer
          key={active.id}
          doc={{
            image: active.image,
            alt: `${active.label} — ${diploma.issuer}`,
            label: active.label,
            zoomMin: active.zoomMin,
            zoomMax: active.zoomMax,
          }}
          onClose={closeViewer}
        />
      )}
    </SectionWrapper>
  )
}
