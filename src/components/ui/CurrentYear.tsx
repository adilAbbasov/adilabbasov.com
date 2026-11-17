'use client'

import { useEffect, useState } from 'react'

/**
 * The static export bakes the build year into the HTML; this swaps in the
 * visitor's current year after load, so the footer never goes stale between deploys.
 */
export default function CurrentYear({ fallback }: { fallback: number }) {
  const [year, setYear] = useState(fallback)

  useEffect(() => setYear(new Date().getFullYear()), [])

  return <>{year}</>
}
