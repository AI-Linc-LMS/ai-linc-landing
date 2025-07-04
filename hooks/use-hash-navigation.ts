import { useEffect } from "react"
import { useLenis } from "@/hooks/use-lenis"

export function useHashNavigation() {
  const { scrollTo } = useLenis()

  useEffect(() => {
    const handleHashNavigation = () => {
      const hash = window.location.hash
      
      if (hash) {
        // Remove the hash from URL
        window.history.replaceState(null, '', window.location.pathname)
        
        // Handle contact form triggers
        if (hash === '#contact-apply-contact') {
          setTimeout(() => {
            const section = document.getElementById("contact-apply")
            const trigger = section?.querySelector('[value="contact"]')
            trigger && (trigger as HTMLElement).click()
            scrollTo("#contact-apply", { duration: 1.5 })
          }, 1000) // Wait for components to mount
        } else if (hash === '#contact-apply-apply') {
          setTimeout(() => {
            const section = document.getElementById("contact-apply")
            const trigger = section?.querySelector('[value="apply"]')
            trigger && (trigger as HTMLElement).click()
            scrollTo("#contact-apply", { duration: 1.5 })
          }, 1000) // Wait for components to mount
        } else {
          // Handle regular section scrolling
          setTimeout(() => {
            scrollTo(hash, { duration: 1.5 })
          }, 1000) // Wait for components to mount
        }
      }
    }

    // Handle hash on initial load
    handleHashNavigation()
    
    // Handle hash changes (if someone manually changes the hash)
    window.addEventListener('hashchange', handleHashNavigation)
    
    return () => {
      window.removeEventListener('hashchange', handleHashNavigation)
    }
  }, [scrollTo])
} 