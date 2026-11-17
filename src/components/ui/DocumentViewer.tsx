'use client'

import { MouseEvent, PointerEvent, useCallback, useEffect, useLayoutEffect, useRef, useState } from 'react'
import { createPortal } from 'react-dom'
import { motion } from 'framer-motion'
import { X, ZoomIn, ZoomOut } from 'lucide-react'

export interface ViewerDocument {
  image: string
  alt: string
  label: string
  /** Zoomed width never goes below this (phones pan across it) … */
  zoomMin: number
  /** … and never above this (large screens). */
  zoomMax: number
}

interface DocumentViewerProps {
  doc: ViewerDocument
  onClose: () => void
}

/**
 * Full-screen document viewer.
 * Opens fitted to the screen; click/tap the document (or the zoom button) for full detail.
 * Back button, Esc, × and a click on the backdrop all close it.
 */
export default function DocumentViewer({ doc, onClose }: DocumentViewerProps) {
  const [zoomed, setZoomed] = useState(false)
  const dialogRef = useRef<HTMLDivElement>(null)
  const scrollRef = useRef<HTMLDivElement>(null)
  const imgRef = useRef<HTMLImageElement>(null)
  const closeRef = useRef<HTMLButtonElement>(null)
  const focusPoint = useRef({ x: 0.5, y: 0 })

  // Phones close full-screen views with Back: give the viewer its own history entry.
  // The existing state is copied so Next.js still recognises the entry as its own.
  useEffect(() => {
    window.history.pushState({ ...window.history.state, documentViewer: true }, '')
    const onPop = () => onClose()
    window.addEventListener('popstate', onPop)
    return () => window.removeEventListener('popstate', onPop)
  }, [onClose])

  // Every UI close goes through history, so the extra entry never lingers.
  const close = useCallback(() => {
    if (window.history.state?.documentViewer) window.history.back()
    else onClose()
  }, [onClose])

  // Lock the page behind, close on Esc, keep Tab inside the dialog.
  useEffect(() => {
    const html = document.documentElement
    const prev = [html.style.overflow, document.body.style.overflow]
    html.style.overflow = 'hidden'
    document.body.style.overflow = 'hidden'
    closeRef.current?.focus()

    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') close()
      if (e.key !== 'Tab' || !dialogRef.current) return
      const items = Array.from(dialogRef.current.querySelectorAll<HTMLElement>('button'))
      const first = items[0]
      const last = items[items.length - 1]
      const inside = dialogRef.current.contains(document.activeElement)
      if (e.shiftKey && (document.activeElement === first || !inside)) {
        e.preventDefault()
        last.focus()
      } else if (!e.shiftKey && (document.activeElement === last || !inside)) {
        e.preventDefault()
        first.focus()
      }
    }
    window.addEventListener('keydown', onKey)
    return () => {
      html.style.overflow = prev[0]
      document.body.style.overflow = prev[1]
      window.removeEventListener('keydown', onKey)
    }
  }, [close])

  // After zooming in, scroll so the spot that was clicked/tapped is centred.
  useLayoutEffect(() => {
    const box = scrollRef.current
    const img = imgRef.current
    if (!zoomed || !box || !img) return
    box.scrollLeft = img.offsetLeft + img.offsetWidth * focusPoint.current.x - box.clientWidth / 2
    box.scrollTop = img.offsetTop + img.offsetHeight * focusPoint.current.y - box.clientHeight / 2
  }, [zoomed])

  const toggleZoom = (point?: { x: number; y: number }) => {
    focusPoint.current = point ?? { x: 0.5, y: 0 }
    setZoomed((z) => !z)
  }

  // Mouse users pan the zoomed document by dragging (touch screens scroll natively).
  // A drag must not also count as a click, which would zoom out or close.
  const drag = useRef<{ x: number; y: number; left: number; top: number } | null>(null)
  const dragged = useRef(false)

  const onPointerDown = (e: PointerEvent<HTMLDivElement>) => {
    dragged.current = false
    if (!zoomed || e.pointerType !== 'mouse' || e.button !== 0 || !scrollRef.current) return
    const box = scrollRef.current
    drag.current = { x: e.clientX, y: e.clientY, left: box.scrollLeft, top: box.scrollTop }
  }
  const onPointerMove = (e: PointerEvent<HTMLDivElement>) => {
    const start = drag.current
    const box = scrollRef.current
    if (!start || !box) return
    const dx = e.clientX - start.x
    const dy = e.clientY - start.y
    if (!dragged.current && Math.hypot(dx, dy) < 5) return
    dragged.current = true
    box.scrollLeft = start.left - dx
    box.scrollTop = start.top - dy
  }
  const endDrag = () => {
    drag.current = null
  }

  const onBackdropClick = () => {
    if (dragged.current) dragged.current = false
    else close()
  }

  const onImageClick = (e: MouseEvent<HTMLImageElement>) => {
    e.stopPropagation()
    if (dragged.current) {
      dragged.current = false
      return
    }
    const r = e.currentTarget.getBoundingClientRect()
    toggleZoom({ x: (e.clientX - r.left) / r.width, y: (e.clientY - r.top) / r.height })
  }

  return createPortal(
    <motion.div
      ref={dialogRef}
      role="dialog"
      aria-modal="true"
      aria-label={doc.label}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.2 }}
      onClick={onBackdropClick}
      className="fixed inset-0 z-[100] bg-black/85 backdrop-blur-sm [--pad:1rem] md:[--pad:2.5rem]"
    >
      {/* Scroll area: only scrolls when zoomed; never passes scrolling on to the page.
          The stable gutter keeps the scrollbar out of 100cqw, so zoom never overflows sideways by accident. */}
      <div
        ref={scrollRef}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={endDrag}
        onPointerLeave={endDrag}
        className={`absolute inset-0 overscroll-contain [container-type:inline-size] ${
          zoomed ? 'overflow-auto [scrollbar-gutter:stable]' : 'overflow-hidden'
        }`}
      >
        <div
          className={`flex p-[var(--pad)] ${
            zoomed ? 'min-h-full min-w-full w-max' : 'h-full w-full items-center justify-center'
          }`}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            ref={imgRef}
            src={doc.image}
            alt={doc.alt}
            onClick={onImageClick}
            draggable={false}
            style={
              zoomed
                ? { width: `min(${doc.zoomMax}px, max(calc(100cqw - 2 * var(--pad)), ${doc.zoomMin}px))` }
                : undefined
            }
            className={`m-auto rounded-lg bg-white shadow-2xl select-none ${
              zoomed ? 'h-auto max-w-none cursor-zoom-out' : 'max-h-full max-w-full cursor-zoom-in'
            }`}
          />
        </div>
      </div>

      {/* Controls: 44px touch targets, pinned to the corner */}
      <div className="absolute top-3 right-3 flex gap-2" onClick={(e) => e.stopPropagation()}>
        <button
          type="button"
          onClick={() => toggleZoom()}
          aria-label={zoomed ? 'Fit to screen' : 'Zoom in'}
          className="grid h-11 w-11 place-items-center rounded-full bg-black/60 text-white ring-1 ring-white/20 hover:bg-black/80 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400"
        >
          {zoomed ? <ZoomOut size={20} /> : <ZoomIn size={20} />}
        </button>
        <button
          ref={closeRef}
          type="button"
          onClick={close}
          aria-label="Close"
          className="grid h-11 w-11 place-items-center rounded-full bg-black/60 text-white ring-1 ring-white/20 hover:bg-black/80 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400"
        >
          <X size={22} />
        </button>
      </div>
    </motion.div>,
    document.body
  )
}
