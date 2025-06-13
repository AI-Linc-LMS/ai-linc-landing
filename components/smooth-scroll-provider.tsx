"use client"

import { useEffect, useRef } from 'react'
import Lenis from 'lenis'

interface SmoothScrollProviderProps {
  children: React.ReactNode
}

export function SmoothScrollProvider({ children }: SmoothScrollProviderProps) {
  const lenisRef = useRef<Lenis | null>(null)

  useEffect(() => {
    console.log('Initializing Lenis...')
    
    // Initialize Lenis with basic configuration
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    })

    lenisRef.current = lenis
    console.log('Lenis initialized:', lenis)

    // Expose lenis instance globally immediately
    // @ts-ignore
    window.lenis = lenis
    console.log('Lenis exposed globally')

    // Animation frame loop
    function raf(time: number) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)
    console.log('Lenis animation loop started')

    // Cleanup
    return () => {
      console.log('Cleaning up Lenis')
      lenis.destroy()
      // @ts-ignore
      window.lenis = null
    }
  }, [])

  return <>{children}</>
} 