"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { toast } from "sonner"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { 
  User, 
  Mail, 
  Phone, 
  Send,
  Loader2
} from "lucide-react"

interface FormData {
  name: string
  email: string
  phone_number: string
  workshop_name: string
  session_number: string
  referal_code?: string
}

interface ContactFormModalProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  purpose?: 'apply' | 'cheatsheet' | 'workshop' | null
  seatsLeft?: number
}

export function ContactFormModal({ 
  open, 
  onOpenChange, 
  purpose = null,
  seatsLeft
}: ContactFormModalProps) {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone_number: "+91 ",
    workshop_name: "Contact Form",
    session_number: "Contact Form",
    referal_code: ""
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isReferralFromUrl, setIsReferralFromUrl] = useState(false)
  const [phoneError, setPhoneError] = useState("")

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
    
    // Validate required fields
    if (!formData.name || !formData.email || !formData.phone_number) {
      toast.error("Please fill in all required fields")
      return
    }

    setIsSubmitting(true)

    try {
      console.log('Submitting form data:', formData)

      const response = await fetch('https://be-app.ailinc.com/api/clients/1/workshop-registrations/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          source: purpose || 'contact_form'
        })
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

      setIsSubmitting(false)
      setIsSubmitted(true)
      
      // Reset form after successful submission
      setTimeout(() => {
        setIsSubmitted(false)
        onOpenChange(false)
        setFormData({
          name: "",
          email: "",
          phone_number: "+91 ",
          workshop_name: "Contact Form",
          session_number: "Contact Form",
          referal_code: ""
        })
      }, 3000)
    } catch (error) {
      console.error('Registration error:', error)
      setIsSubmitting(false)
      toast.error(error instanceof Error ? error.message : 'Registration failed. Please try again.')
    }
  }

  if (isSubmitted) {
    return (
      <Dialog open={open} onOpenChange={onOpenChange}>
        <DialogContent className="max-w-md">
          <div className="text-center py-8">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5 }}
              className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4"
            >
              <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </motion.div>
            <h3 className="text-xl font-semibold text-foreground mb-2">
              {purpose === 'workshop' ? 'Workshop Registration Confirmed!' : 'Thank You!'}
            </h3>
            <p className="text-muted-foreground">
              {purpose === 'workshop' 
                ? "We've received your workshop registration. We'll send you further details soon!" 
                : "We've received your information and will get back to you within 24 hours."}
            </p>
          </div>
        </DialogContent>
      </Dialog>
    )
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-lg">
        <DialogHeader className="pb-4">
          <DialogTitle className="text-2xl font-bold bg-gradient-to-r from-[#0BC5EA] to-[#6B46C1] bg-clip-text text-transparent">
            {purpose === 'workshop' ? 'Register for Workshop' : "Let's Connect!"}
          </DialogTitle>
          <DialogDescription className="text-base text-muted-foreground">
            {purpose === 'workshop' 
              ? "Enter your details to register for our upcoming workshop." 
              : ""}
          </DialogDescription>
        </DialogHeader>

        {seatsLeft !== undefined && seatsLeft <= 3 && (
          <p className="text-red-500 font-bold mb-4">Only 30 FREE seats left!</p>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Name */}
          <div>
            <label htmlFor="name" className="block text-sm font-medium mb-2 flex items-center gap-2">
              <User className="w-4 h-4" />
              Full Name *
            </label>
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

          {/* Email */}
          <div>
            <label htmlFor="email" className="block text-sm font-medium mb-2 flex items-center gap-2">
              <Mail className="w-4 h-4" />
              Email *
            </label>
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

          {/* Phone */}
          <div>
            <label className="block text-sm font-medium mb-2 flex items-center gap-2">
              <Phone className="w-4 h-4" />
              Phone Number *
            </label>
            <Input
              id="phone_number"
              type="tel"
              required
              value={formData.phone_number}
              onChange={handleInputChange}
              className="bg-background/50 border-[#0BC5EA]/30 focus:border-[#0BC5EA] focus:ring-[#0BC5EA]/20"
              placeholder="Enter your phone number"
            />
            {phoneError && <p className="text-red-500 text-sm mt-1">{phoneError}</p>}
          </div>

          {/* Referral Code */}
          {/* <div>
            <label htmlFor="referal_code" className="block text-sm font-medium mb-2">
              Referral Code (Optional)
            </label>
            <Input
              id="referal_code"
              type="text"
              value={formData.referal_code || ""}
              onChange={handleInputChange}
              disabled={isReferralFromUrl}
              className="bg-background/50 border-[#0BC5EA]/30 focus:border-[#0BC5EA] focus:ring-[#0BC5EA]/20"
              placeholder="Enter referral code if you have one"
            />
          </div> */}

          {/* Submit Button */}
          <Button
            type="submit"
            disabled={isSubmitting || (seatsLeft !== undefined && seatsLeft === 0)}
            className="w-full bg-[#0BC5EA] hover:bg-[#0BC5EA]/90 text-white cursor-pointer"
          >
            {isSubmitting ? (
              <>
                <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                Submitting...
              </>
            ) : (
              <>
                <Send className="w-4 h-4 mr-2" />
                Submit
              </>
            )}
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  )
} 