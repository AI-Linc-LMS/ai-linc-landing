"use client"
import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Users } from "lucide-react"

interface RegistrationCountProps {
  className?: string
}

export function RegistrationCount({ className = "" }: RegistrationCountProps) {
  const [registrationCount, setRegistrationCount] = useState<number | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  const fetchRegistrationCount = async () => {
    try {
      setIsLoading(true)
      setError(null)

      const response = await fetch('https://be-app.ailinc.com/api/clients/1/workshop-registrations/count/' )

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`)
      }

      const data = await response.json()
      console.log('API Response:', data) // Debug log to see what we're getting

      // Check if the response has a registrations_count property
      let count = 0
      if (data && typeof data.registrations_count === 'number') {
        count = data.registrations_count
      } else if (Array.isArray(data)) {
        count = data.length
      } else if (typeof data === 'number') {
        count = data
      }
      
      setRegistrationCount(count)
    } catch (err) {
      console.error('Error fetching registration count:', err)
      setError('Failed to load registration count')
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    fetchRegistrationCount()

    // Refresh count every 30 seconds to keep it live
    const interval = setInterval(fetchRegistrationCount, 30000)

    return () => clearInterval(interval)
  }, [])

  if (error) {
    return (
      <div className={`text-center ${className}`}>
        <p className="text-red-400 text-sm">Unable to load registration count</p>
      </div>
    )
  }

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className={`text-center ${className}`}
    >
      <div className="inline-flex items-center gap-3 bg-gradient-to-r from-[#0BC5EA]/10 to-[#6B46C1]/10 backdrop-blur-sm border border-[#0BC5EA]/20 rounded-full px-6 py-3">
        <Users className="w-5 h-5 text-[#0BC5EA]" />
        <div className="flex items-center gap-2">
          {isLoading ? (
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 border-2 border-[#0BC5EA]/30 border-t-[#0BC5EA] rounded-full animate-spin"></div>
              <span className="text-sm text-foreground/70">Loading...</span>
            </div>
          ) : (
            <>
              <span className="text-2xl font-bold bg-gradient-to-r from-[#0BC5EA] to-[#6B46C1] bg-clip-text text-transparent">
                {registrationCount !== null ? registrationCount : '0'}+
              </span>
              <span className="text-sm text-foreground/80">users using platform</span>
            </>
          )}
        </div>
      </div>
    </motion.div>
  )
} 