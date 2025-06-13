"use client"

import { useEffect, useState } from 'react'
import Lenis from 'lenis'

export function useLenis() {
  const [lenis, setLenis] = useState<Lenis | null>(null)

  useEffect(() => {
    // Function to check for lenis instance
    const checkForLenis = () => {
      const lenisInstance = (window as any).lenis
      if (lenisInstance && !lenis) {
        console.log('Lenis instance found and set')
        setLenis(lenisInstance)
        return true
      }
      return false
    }

    // Check immediately
    if (checkForLenis()) {
      return
    }

    // If not found, keep checking every 100ms for up to 5 seconds
    const interval = setInterval(() => {
      if (checkForLenis()) {
        clearInterval(interval)
      }
    }, 100)

    // Clear interval after 5 seconds
    const timeout = setTimeout(() => {
      clearInterval(interval)
      console.warn('Lenis instance not found after 5 seconds')
    }, 5000)

    return () => {
      clearInterval(interval)
      clearTimeout(timeout)
    }
  }, [lenis])

  const scrollTo = (target: string | number, options?: { offset?: number; duration?: number }) => {
    console.log('scrollTo called with:', target, options)
    console.log('lenis instance:', lenis)
    
    if (lenis) {
      console.log('Using Lenis to scroll')
      lenis.scrollTo(target, {
        offset: options?.offset || 0,
        duration: options?.duration || 1.2,
      })
    } else {
      console.warn('Lenis instance not available, cannot scroll')
      throw new Error('Lenis instance not available')
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