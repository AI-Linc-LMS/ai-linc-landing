"use client"
import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Users, AlertCircle, RefreshCw } from "lucide-react"
import { Button } from "@/components/ui/button"

interface RegistrationCountProps {
  className?: string
}

export function RegistrationCount({ className = "" }: RegistrationCountProps) {
  const [registrationCount, setRegistrationCount] = useState<number | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [retryCount, setRetryCount] = useState(0)
  const [isRetrying, setIsRetrying] = useState(false)

  const fetchRegistrationCount = async (isRetry = false) => {
    try {
      if (isRetry) {
        setIsRetrying(true)
      } else {
        setIsLoading(true)
      }
      setError(null)

      const controller = new AbortController()
      const timeoutId = setTimeout(() => controller.abort(), 10000) // 10 second timeout

      const response = await fetch('https://be-app.ailinc.com/api/clients/1/workshop-registrations/', {
        signal: controller.signal,
        headers: {
          'Accept': 'application/json',
        }
      })

      clearTimeout(timeoutId)

      if (!response.ok) {
        // Handle different HTTP status codes
        if (response.status >= 500) {
          throw new Error('Server is temporarily unavailable')
        } else if (response.status === 404) {
          throw new Error('Registration data not found')
        } else if (response.status === 429) {
          throw new Error('Too many requests. Please wait a moment.')
        } else {
          throw new Error(`HTTP error! status: ${response.status}`)
        }
      }

      const data = await response.json()

      // Count the total registrations
      const count = Array.isArray(data) ? data.length : 0
      setRegistrationCount(count)
      setRetryCount(0) // Reset retry count on success
    } catch (err) {
      console.error('Error fetching registration count:', err)
      
      let errorMessage = 'Failed to load registration count'
      
      if (err instanceof Error) {
        if (err.name === 'AbortError') {
          errorMessage = 'Request timed out'
        } else if (err.message.includes('fetch')) {
          errorMessage = 'Network connection failed'
        } else {
          errorMessage = err.message
        }
      }
      
      setError(errorMessage)
      setRetryCount(prev => prev + 1)
    } finally {
      setIsLoading(false)
      setIsRetrying(false)
    }
  }

  const handleRetry = () => {
    fetchRegistrationCount(true)
  }

  useEffect(() => {
    fetchRegistrationCount()

    // Set up auto-retry with exponential backoff for failed requests
    let interval: NodeJS.Timeout | null = null
    
    if (error && retryCount < 3) {
      // Auto-retry after delay: 5s, 10s, 20s
      const delay = Math.min(5000 * Math.pow(2, retryCount), 20000)
      interval = setTimeout(() => {
        fetchRegistrationCount(true)
      }, delay)
    } else if (!error) {
      // Refresh count every 30 seconds when working properly
      interval = setInterval(() => fetchRegistrationCount(), 30000)
    }

    return () => {
      if (interval) {
        clearInterval(interval)
      }
    }
  }, [error, retryCount])

  // Show error state with retry option
  if (error) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className={`text-center ${className}`}
      >
        <div className="inline-flex flex-col items-center gap-3 bg-red-500/10 backdrop-blur-sm border border-red-500/20 rounded-lg px-6 py-4">
          <div className="flex items-center gap-2">
            <AlertCircle className="w-4 h-4 text-red-400" />
            <span className="text-sm text-red-400">{error}</span>
          </div>
          
          {retryCount < 3 && (
            <Button
              onClick={handleRetry}
              disabled={isRetrying}
              size="sm"
              variant="outline"
              className="border-red-500/30 text-red-400 hover:bg-red-500/10 text-xs"
            >
              {isRetrying ? (
                <>
                  <RefreshCw className="w-3 h-3 mr-1 animate-spin" />
                  Retrying...
                </>
              ) : (
                <>
                  <RefreshCw className="w-3 h-3 mr-1" />
                  Retry
                </>
              )}
            </Button>
          )}
          
          {retryCount >= 3 && (
            <p className="text-xs text-red-400/70">
              Unable to load registration count. Please refresh the page.
            </p>
          )}
        </div>
      </motion.div>
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
          {isLoading || isRetrying ? (
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 border-2 border-[#0BC5EA]/30 border-t-[#0BC5EA] rounded-full animate-spin"></div>
              <span className="text-sm text-foreground/70">
                {isRetrying ? 'Retrying...' : 'Loading...'}
              </span>
            </div>
          ) : (
            <>
              <span className="text-2xl font-bold bg-gradient-to-r from-[#0BC5EA] to-[#6B46C1] bg-clip-text text-transparent">
                {registrationCount}+
              </span>
              <span className="text-sm text-foreground/80">students already registered!</span>
            </>
          )}
        </div>
      </div>
    </motion.div>
  )
} 