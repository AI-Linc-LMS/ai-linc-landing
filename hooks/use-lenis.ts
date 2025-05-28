"use client"

import { useEffect, useState } from 'react'
import Lenis from 'lenis'

export function useLenis() {
  const [lenis, setLenis] = useState<Lenis | null>(null)

  useEffect(() => {
    // Get the global lenis instance
    const lenisInstance = (window as any).lenis
    if (lenisInstance) {
      setLenis(lenisInstance)
    }
  }, [])

  const scrollTo = (target: string | number, options?: { offset?: number; duration?: number }) => {
    if (lenis) {
      lenis.scrollTo(target, {
        offset: options?.offset || 0,
        duration: options?.duration || 1.2,
      })
    }
  }

  const scrollToTop = (duration?: number) => {
    if (lenis) {
      lenis.scrollTo(0, { duration: duration || 1.2 })
    }
  }

  const stop = () => {
    if (lenis) {
      lenis.stop()
    }
  }

  const start = () => {
    if (lenis) {
      lenis.start()
    }
  }

  return {
    lenis,
    scrollTo,
    scrollToTop,
    stop,
    start,
  }
} 