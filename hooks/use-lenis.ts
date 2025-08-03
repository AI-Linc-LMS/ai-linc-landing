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
        setLenis(lenisInstance)
        return true
      }
      return false
    }

    // Check immediately
    if (checkForLenis()) {
      return
    }

    // If not found, keep checking every 100ms for up to 2 seconds (reduced from 5)
    let attempts = 0
    const maxAttempts = 20 // 2 seconds at 100ms intervals
    
    const interval = setInterval(() => {
      attempts++
      if (checkForLenis() || attempts >= maxAttempts) {
        clearInterval(interval)
        if (attempts >= maxAttempts) {
          // Silently handle - no console warning for better UX
          console.debug('Lenis instance not found, using fallback scroll behavior')
        }
      }
    }, 100)

    return () => {
      clearInterval(interval)
    }
  }, [lenis])

  const scrollTo = (target: string | number, options?: { offset?: number; duration?: number }) => {
    if (lenis) {
      lenis.scrollTo(target, {
        offset: options?.offset || 0,
        duration: options?.duration || 1.2,
      })
    } else {
      // Fallback to native scroll when Lenis isn't available
      if (typeof target === 'string') {
        const element = document.querySelector(target)
        if (element) {
          element.scrollIntoView({ 
            behavior: 'smooth',
            block: 'start'
          })
        }
      } else {
        window.scrollTo({ 
          top: target, 
          behavior: 'smooth' 
        })
      }
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