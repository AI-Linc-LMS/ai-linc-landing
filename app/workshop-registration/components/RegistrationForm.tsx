import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { toast } from "sonner"
import { AlertCircle, Wifi, WifiOff } from "lucide-react"

interface FormData {
  name: string
  email: string
  phone_number: string
  workshop_name: string
  session_number: string
}

interface RegistrationFormProps {
  onSuccess: () => void
  seatsLeft: number
  setSeatsLeft: (value: number | ((prev: number) => number)) => void
  onMaintenanceDetected: () => void
}

// Error types for better error handling
enum ErrorType {
  NETWORK = 'NETWORK',
  SERVER = 'SERVER', 
  MAINTENANCE = 'MAINTENANCE',
  VALIDATION = 'VALIDATION',
  ALREADY_REGISTERED = 'ALREADY_REGISTERED',
  UNKNOWN = 'UNKNOWN'
}

interface ApiError {
  type: ErrorType
  message: string
  statusCode?: number
}

export function RegistrationForm({ onSuccess, seatsLeft, setSeatsLeft, onMaintenanceDetected }: RegistrationFormProps) {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone_number: "",
    workshop_name: "Practical implementation of Agentic AI",
    session_number: "Session-02"
  })

  const [isLoading, setIsLoading] = useState(false)
  const [phoneError, setPhoneError] = useState("")
  const [networkStatus, setNetworkStatus] = useState<'online' | 'offline' | 'checking'>('online')
  const [lastError, setLastError] = useState<ApiError | null>(null)

  // Check network connectivity
  const checkNetworkStatus = async (): Promise<boolean> => {
    setNetworkStatus('checking')
    try {
      // Try to fetch a lightweight endpoint or use a simple network check
      const response = await fetch('https://be-app.ailinc.com/api/health-check/', {
        method: 'HEAD',
        mode: 'no-cors',
        cache: 'no-cache'
      })
      setNetworkStatus('online')
      return true
    } catch {
      // Fallback: try to ping a reliable service
      try {
        await fetch('https://www.google.com/favicon.ico', {
          method: 'HEAD',
          mode: 'no-cors',
          cache: 'no-cache'
        })
        setNetworkStatus('online')
        return true
      } catch {
        setNetworkStatus('offline')
        return false
      }
    }
  }

  // Enhanced error classification
  const classifyError = (error: any, response?: Response): ApiError => {
    // Network errors
    if (error.name === 'TypeError' && error.message.includes('fetch')) {
      return {
        type: ErrorType.NETWORK,
        message: 'Unable to connect to our servers. Please check your internet connection.',
        statusCode: 0
      }
    }

    if (!response) {
      return {
        type: ErrorType.NETWORK,
        message: 'Network error occurred. Please try again.',
        statusCode: 0
      }
    }

    const statusCode = response.status

    // Server maintenance or downtime
    if (statusCode >= 500 && statusCode < 600) {
      return {
        type: ErrorType.MAINTENANCE,
        message: 'Our servers are currently under maintenance. Please try again in a few minutes.',
        statusCode
      }
    }

    // Service unavailable
    if (statusCode === 503) {
      return {
        type: ErrorType.MAINTENANCE,
        message: 'Service temporarily unavailable. We\'re working to restore it quickly.',
        statusCode
      }
    }

    // Already registered
    if (statusCode === 400) {
      return {
        type: ErrorType.ALREADY_REGISTERED,
        message: 'You are already registered for this workshop.',
        statusCode
      }
    }

    // Validation errors
    if (statusCode === 422) {
      return {
        type: ErrorType.VALIDATION,
        message: 'Please check your information and try again.',
        statusCode
      }
    }

    // Rate limiting
    if (statusCode === 429) {
      return {
        type: ErrorType.SERVER,
        message: 'Too many registration attempts. Please wait a moment and try again.',
        statusCode
      }
    }

    // Generic server errors
    if (statusCode >= 400 && statusCode < 500) {
      return {
        type: ErrorType.SERVER,
        message: 'Registration failed. Please try again.',
        statusCode
      }
    }

    return {
      type: ErrorType.UNKNOWN,
      message: 'An unexpected error occurred. Please try again.',
      statusCode
    }
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target
    
    // Clear previous errors when user starts typing
    if (lastError) {
      setLastError(null)
    }
    
    if (id === "phone_number") {
      if (!/^\d{0,10}$/.test(value)) {
        setPhoneError("Phone number must be numeric and up to 10 digits")
      } else if (value.length === 10) {
        setPhoneError("")
      } else {
        setPhoneError("Phone number must be 10 digits")
      }
    }
    setFormData(prev => ({
      ...prev,
      [id]: value
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (formData.phone_number.length !== 10 || !/^\d{10}$/.test(formData.phone_number)) {
      setPhoneError("Phone number must be exactly 10 digits")
      return
    }

    setIsLoading(true)
    setLastError(null)

    // Check network connectivity first
    const isOnline = await checkNetworkStatus()
    if (!isOnline) {
      setLastError({
        type: ErrorType.NETWORK,
        message: 'No internet connection. Please check your connection and try again.',
        statusCode: 0
      })
      setIsLoading(false)
      return
    }

    try {
      console.log('Submitting form data:', formData)

      const controller = new AbortController()
      const timeoutId = setTimeout(() => controller.abort(), 30000) // 30 second timeout

      const response = await fetch('https://be-app.ailinc.com/api/clients/1/workshop-registrations/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify(formData),
        signal: controller.signal
      })

      clearTimeout(timeoutId)

      let data
      try {
        data = await response.json()
      } catch {
        // If response is not JSON, handle it gracefully
        data = { message: 'Invalid response from server' }
      }

      console.log('API Response:', data)

      if (!response.ok) {
        const apiError = classifyError(null, response)
        
        // Handle maintenance errors specially
        if (apiError.type === ErrorType.MAINTENANCE) {
          onMaintenanceDetected()
          return
        }
        
        setLastError(apiError)
        toast.error(apiError.message)
        return
      }

      // Success
      onSuccess()
      setFormData({
        name: "",
        email: "",
        phone_number: "",
        workshop_name: "No code development using Agentic AI",
        session_number: "Session-02"
      })
      setSeatsLeft(prev => prev - 1)
      toast.success("Registration successful! Check your email for confirmation.")
      
    } catch (error) {
      console.error('Registration error:', error)
      
      // Handle timeout
      if (error instanceof Error && error.name === 'AbortError') {
        setLastError({
          type: ErrorType.NETWORK,
          message: 'Request timed out. Please check your connection and try again.',
          statusCode: 0
        })
        toast.error('Request timed out. Please try again.')
        return
      }
      
      const apiError = classifyError(error)
      
      // Handle maintenance errors specially
      if (apiError.type === ErrorType.MAINTENANCE) {
        onMaintenanceDetected()
        return
      }
      
      setLastError(apiError)
      toast.error(apiError.message)
    } finally {
      setIsLoading(false)
    }
  }

  const retrySubmission = () => {
    setLastError(null)
    const form = document.querySelector('form')
    if (form) {
      form.requestSubmit()
    }
  }

  return (
    <Card className="bg-background/30 border-[#0BC5EA]/30">
      <CardContent className="p-6">
        {seatsLeft <= 3 && (
          <p className="text-red-500 font-bold mb-4">Only {seatsLeft} FREE seats left!</p>
        )}
        
        {/* Network Status Indicator */}
        {networkStatus !== 'online' && (
          <div className="mb-4 p-3 rounded-lg bg-yellow-500/10 border border-yellow-500/30 flex items-center gap-2">
            {networkStatus === 'offline' ? (
              <WifiOff className="w-4 h-4 text-yellow-500" />
            ) : (
              <Wifi className="w-4 h-4 text-yellow-500 animate-pulse" />
            )}
            <span className="text-sm text-yellow-500">
              {networkStatus === 'offline' ? 'No internet connection' : 'Checking connection...'}
            </span>
          </div>
        )}

        {/* Error Display */}
        {lastError && (
          <div className="mb-4 p-4 rounded-lg bg-red-500/10 border border-red-500/30">
            <div className="flex items-start gap-3">
              <AlertCircle className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
              <div className="flex-1">
                <p className="text-red-500 font-medium text-sm mb-1">
                  Registration Failed
                </p>
                <p className="text-red-400 text-sm mb-3">
                  {lastError.message}
                </p>
                {lastError.type === ErrorType.NETWORK && (
                  <Button
                    onClick={retrySubmission}
                    size="sm"
                    variant="outline"
                    className="border-red-500/30 text-red-400 hover:bg-red-500/10"
                  >
                    Try Again
                  </Button>
                )}
              </div>
            </div>
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium mb-2">Full Name</label>
            <Input
              id="name"
              type="text"
              required
              value={formData.name}
              onChange={handleInputChange}
              className="bg-background/50 border-[#0BC5EA]/30 focus:border-[#0BC5EA] focus:ring-[#0BC5EA]/20"
              placeholder="Enter your full name"
              disabled={isLoading}
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium mb-2">Email Address</label>
            <Input
              id="email"
              type="email"
              required
              value={formData.email}
              onChange={handleInputChange}
              className="bg-background/50 border-[#0BC5EA]/30 focus:border-[#0BC5EA] focus:ring-[#0BC5EA]/20"
              placeholder="Enter your email address"
              disabled={isLoading}
            />
          </div>

          <div>
            <label htmlFor="phone_number" className="block text-sm font-medium mb-2">Phone Number</label>
            <Input
              id="phone_number"
              type="tel"
              required
              value={formData.phone_number}
              onChange={handleInputChange}
              className="bg-background/50 border-[#0BC5EA]/30 focus:border-[#0BC5EA] focus:ring-[#0BC5EA]/20"
              placeholder="Enter your phone number"
              disabled={isLoading}
            />
            {phoneError && (
              <p className="text-red-500 text-xs mt-1">{phoneError}</p>
            )}
          </div>

          <Button
            type="submit"
            disabled={isLoading || !!phoneError || seatsLeft === 0 || networkStatus === 'offline'}
            className="w-full bg-[#0BC5EA] hover:bg-[#0BC5EA]/90 text-white cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isLoading ? 'Registering...' : 'Register Now'}
          </Button>
        </form>
      </CardContent>
    </Card>
  )
} 