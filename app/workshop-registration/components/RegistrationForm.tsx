import { useState, useEffect } from "react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { toast } from "sonner"
import { PhoneInput } from "./PhoneInput"

interface FormData {
  name: string
  email: string
  phone_number: string
  workshop_name: string
  session_number: string
  referal_code: string
}

interface RegistrationFormProps {
  onSuccess: () => void
  seatsLeft: number
  setSeatsLeft: (value: number | ((prev: number) => number)) => void
}

export function RegistrationForm({ onSuccess, seatsLeft, setSeatsLeft }: RegistrationFormProps) {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone_number: "+91 ", // Start with India's country code
    workshop_name: "Practical implementation of Agentic AI",
    session_number: "Session-03",
    referal_code: ""
  })

  const [isLoading, setIsLoading] = useState(false)
  const [phoneError, setPhoneError] = useState("")
  const [isReferralFromUrl, setIsReferralFromUrl] = useState(false)

  // Fetch referral code from URL on component mount
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search)
    const referralFromUrl = urlParams.get('referral') || urlParams.get('ref') || urlParams.get('referral_code')
    
    if (referralFromUrl) {
      setFormData(prev => ({
        ...prev,
        referal_code: referralFromUrl
      }))
      setIsReferralFromUrl(true)
    }
  }, [])

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target
    setFormData(prev => ({
      ...prev,
      [id]: value
    }))
  }

  const handlePhoneChange = (phoneNumber: string) => {
    setFormData(prev => ({
      ...prev,
      phone_number: phoneNumber
    }))
    
    // Validate phone number - extract just the number part for validation
    const numberPart = phoneNumber.replace(/^\+\d+\s*/, '').replace(/\D/g, '')
    if (numberPart.length === 0) {
      setPhoneError("Phone number is required")
    } else if (numberPart.length < 7) {
      setPhoneError("Phone number is too short")
    } else if (numberPart.length > 15) {
      setPhoneError("Phone number is too long")
    } else {
      setPhoneError("")
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    // Validate phone number before submission
    const numberPart = formData.phone_number.replace(/^\+\d+\s*/, '').replace(/\D/g, '')
    if (numberPart.length < 7 || numberPart.length > 15) {
      setPhoneError("Please enter a valid phone number")
      return
    }
    
    setIsLoading(true)

    try {
      console.log('Submitting form data:', formData)

      const response = await fetch('https://be-app.ailinc.com/api/clients/1/workshop-registrations/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify(formData)
      })

      const data = await response.json()
      console.log('API Response:', data)

      if (!response.ok) {
        if (response.status === 400) {
          toast.error('You are already registered')
          return
        }
        throw new Error(data.message || 'Registration failed')
      }

      onSuccess()
      setFormData({
        name: "",
        email: "",
        phone_number: "+91 ",
        workshop_name: "Practical implementation of Agentic AI",
        session_number: "Session-02",
        referal_code: ""
      })
      setSeatsLeft(prev => prev - 1) // Decrease seat count on successful registration
    } catch (error) {
      console.error('Registration error:', error)
      toast.error(error instanceof Error ? error.message : 'Registration failed. Please try again.')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <Card className="bg-background/30 border-[#0BC5EA]/30">
      <CardContent className="p-6">
        {seatsLeft <= 3 && (
          <p className="text-red-500 font-bold mb-4">Only {seatsLeft} FREE seats left!</p>
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
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">Phone Number</label>
            <PhoneInput
              value={formData.phone_number}
              onChange={handlePhoneChange}
              error={phoneError}
              required
              placeholder="Enter your phone number"
            />
          </div>

          <div>
            <label htmlFor="referal_code" className="block text-sm font-medium mb-2">Referral Code (Optional)</label>
            <Input
              id="referal_code"
              type="text"
              value={formData.referal_code}
              onChange={handleInputChange}
              disabled={isReferralFromUrl}
              className="bg-background/50 border-[#0BC5EA]/30 focus:border-[#0BC5EA] focus:ring-[#0BC5EA]/20"
              placeholder="Enter referral code if you have one"
            />
          </div>

          <Button
            type="submit"
            disabled={isLoading || !!phoneError || seatsLeft === 0}
            className="w-full bg-[#0BC5EA] hover:bg-[#0BC5EA]/90 text-white cursor-pointer"
          >
            {isLoading ? 'Registering...' : 'Register Now'}
          </Button>
        </form>
      </CardContent>
    </Card>
  )
} 