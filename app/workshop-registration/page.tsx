"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ThemeProvider } from "@/components/theme-provider"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Linkedin, Award, Star, Youtube, Instagram } from "lucide-react"
import { toast, Toaster } from "sonner"
import Image from "next/image"

export default function WorkshopRegistration() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  })

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone_number: "",
    workshop_name: "No code development using Agentic AI"
  })

  const [isLoading, setIsLoading] = useState(false)
  const [phoneError, setPhoneError] = useState("")
  const [showModal, setShowModal] = useState(false)

  useEffect(() => {
    const targetDate = new Date("2025-06-22T12:30:00")

    const interval = setInterval(() => {
      const now = new Date()
      const difference = targetDate.getTime() - now.getTime()

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60)
        })
      }
    }, 1000)

    return () => clearInterval(interval)
  }, [])

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target
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

      setShowModal(true)
      setFormData({
        name: "",
        email: "",
        phone_number: "",
        workshop_name: "No code development using Agentic AI"
      })
    } catch (error) {
      console.error('Registration error:', error)
      toast.error(error instanceof Error ? error.message : 'Registration failed. Please try again.')
    } finally {
      setIsLoading(false)
    }
  }

  const closeModal = () => {
    setShowModal(false)
  }

  return (
    <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
      <main className="relative min-h-screen bg-gradient-to-b from-[#0A1128] to-[#1A202C] text-white overflow-hidden">
        <Toaster position="top-center" richColors />
        <Navbar />

        <div className="container mx-auto px-4 py-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-4xl mx-auto z-10"
          >
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-[#0BC5EA] to-[#6B46C1] bg-clip-text text-transparent">
                No code development using Agentic Ai
              </h1>
              <p className="text-xl text-foreground/80 mb-8">
                Develop Products without writing code
              </p>

              {/* Countdown Timer */}
              <div className="flex justify-center gap-4 mb-8">
                <div className="bg-background/30 rounded-lg p-4 min-w-[80px]">
                  <div className="text-3xl font-bold text-[#0BC5EA]">{timeLeft.days}</div>
                  <div className="text-sm text-foreground/60">Days</div>
                </div>
                <div className="bg-background/30 rounded-lg p-4 min-w-[80px]">
                  <div className="text-3xl font-bold text-[#0BC5EA]">{timeLeft.hours}</div>
                  <div className="text-sm text-foreground/60">Hours</div>
                </div>
                <div className="bg-background/30 rounded-lg p-4 min-w-[80px]">
                  <div className="text-3xl font-bold text-[#0BC5EA]">{timeLeft.minutes}</div>
                  <div className="text-sm text-foreground/60">Minutes</div>
                </div>
                <div className="bg-background/30 rounded-lg p-4 min-w-[80px]">
                  <div className="text-3xl font-bold text-[#0BC5EA]">{timeLeft.seconds}</div>
                  <div className="text-sm text-foreground/60">Seconds</div>
                </div>
              </div>

              {/* Speakers */}
              <div className="space-y-8 mb-12">
                {/* Main Speaker */}
                <div className="bg-gradient-to-r from-[#0BC5EA]/10 to-[#6B46C1]/10 rounded-xl p-6 border border-[#0BC5EA]/20">
                  <div className="flex flex-col md:flex-row items-center gap-6">
                    <div className="flex-shrink-0">
                      <div className="size-24 rounded-full overflow-hidden border-4 border-[#0BC5EA] p-1">
                        <Image
                          src="/shubham_lal.jpg"
                          alt="Shubham Lal"
                          width={96}
                          height={96}
                          className="object-cover w-full h-full rounded-full"
                        />
                      </div>
                    </div>
                    <div className="text-center md:text-left">
                      <h3 className="text-2xl font-bold text-[#0BC5EA] mb-2">Shubham Lal</h3>
                      <p className="text-lg text-foreground/80 mb-1">SDE 2 at Microsoft</p>
                      <p className="text-foreground/60 mb-1">Full Stack Data Science | AI</p>
                      <a
                        href="https://www.linkedin.com/in/shubhamlal/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 bg-[#0BC5EA]/10 hover:bg-[#0BC5EA]/20 text-[#0BC5EA] px-4 py-2 rounded-lg transition-colors"
                      >
                        <Linkedin className="size-5" />
                        <span>Connect on LinkedIn</span>
                      </a>
                    </div>
                  </div>
                </div>

                {/* Other Speakers */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="bg-background/30 rounded-xl p-6 border border-[#0BC5EA]/20 hover:border-[#0BC5EA]/40 transition-colors">
                    <div className="flex flex-col items-center text-center">
                      <div className="size-24 rounded-full overflow-hidden border-4 border-[#0BC5EA] p-1">
                        <Image
                          src="/yamini_bandi.jpg"
                          alt="Yamini Bandi"
                          width={96}
                          height={96}
                          className="object-cover w-full h-full rounded-full"
                        />
                      </div>
                      <h3 className="text-xl font-bold text-[#0BC5EA] mb-2">Yamini Bandi</h3>
                      <p className="text-foreground/60 mb-4">Developer at Amazon</p>
                      <a
                        href="https://www.linkedin.com/in/yaminibandi/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-[#0BC5EA] hover:text-[#0BC5EA]/80 transition-colors"
                      >
                        <Linkedin className="size-5" />
                        <span>Connect</span>
                      </a>
                    </div>
                  </div>

                  <div className="bg-background/30 rounded-xl p-6 border border-[#0BC5EA]/20 hover:border-[#0BC5EA]/40 transition-colors">
                    <div className="flex flex-col items-center text-center">
                      <div className="size-24 rounded-full overflow-hidden border-4 border-[#0BC5EA] p-1">
                        <Image
                          src="/Divyansh_dubey.jpg"
                          alt="Divyansh Dubey"
                          width={96}
                          height={96}
                          className="object-cover w-full h-full rounded-full"
                        />
                      </div>
                      <h3 className="text-xl font-bold text-[#0BC5EA] mb-2">Divyansh Dubey</h3>
                      <p className="text-foreground/60 mb-4">Generative AI Engineer at Google</p>
                      <a
                        href="https://www.linkedin.com/in/divyansh-dubey/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-[#0BC5EA] hover:text-[#0BC5EA]/80 transition-colors"
                      >
                        <Linkedin className="size-5" />
                        <span>Connect</span>
                      </a>
                    </div>
                  </div>

                  <div className="bg-background/30 rounded-xl p-6 border border-[#0BC5EA]/20 hover:border-[#0BC5EA]/40 transition-colors">
                    <div className="flex flex-col items-center text-center">
                      <div className="size-24 rounded-full overflow-hidden border-4 border-[#0BC5EA] p-1">
                        <Image
                          src="/poorva_image.jpg"
                          alt="Poorva Shrivastava"
                          width={96}
                          height={96}
                          className="object-cover w-full h-full rounded-full"
                        />
                      </div>
                      <h3 className="text-xl font-bold text-[#0BC5EA] mb-2">Poorva Shrivastava</h3>
                      <p className="text-foreground/60 mb-4">Chief Marketing Officer at AI Linc</p>
                      <a
                        href="https://www.linkedin.com/in/poorva-shrivastava-ceo/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-[#0BC5EA] hover:text-[#0BC5EA]/80 transition-colors"
                      >
                        <Linkedin className="size-5" />
                        <span>Connect</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <Card className="bg-background/30 border-[#0BC5EA]/30">
              <CardContent className="p-6">
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
                    <label htmlFor="phone_number" className="block text-sm font-medium mb-2">Phone Number</label>
                    <Input
                      id="phone_number"
                      type="tel"
                      required
                      value={formData.phone_number}
                      onChange={handleInputChange}
                      className="bg-background/50 border-[#0BC5EA]/30 focus:border-[#0BC5EA] focus:ring-[#0BC5EA]/20"
                      placeholder="Enter your phone number"
                    />
                    {phoneError && (
                      <p className="text-red-500 text-xs mt-1">{phoneError}</p>
                    )}
                  </div>

                  <Button
                    type="submit"
                    disabled={isLoading || !!phoneError}
                    className="w-full bg-[#0BC5EA] hover:bg-[#0BC5EA]/90 text-white cursor-pointer"
                  >
                    {isLoading ? 'Registering...' : 'Register Now'}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* Registration Success Modal */}
        {showModal && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 ">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
              className="bg-background/80 m-3 backdrop-blur-sm rounded-xl p-8 max-w-md w-full border border-[#0BC5EA]/30"
            >
              <h2 className="text-2xl font-bold text-[#0BC5EA] mb-4">Registration Successful!</h2>
              <p className="text-foreground/80 mb-6">
                Thank you for registering! You'll receive a confirmation email with further details soon.
              </p>
              <p className="text-foreground/80 mb-6">
                Join our WhatsApp community for AI opportunities and updates:
              </p>
              <div className="flex flex-col gap-2">
                <a
                  href="https://chat.whatsapp.com/your-whatsapp-group-link"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#25D366] hover:bg-[#25D366]/90 text-white px-6 py-3 rounded-lg text-center font-medium"
                >
                  Join AI Community
                </a>
                <Button
                  onClick={closeModal}
                  className="bg-[#0BC5EA] hover:bg-[#0BC5EA]/90 text-white mt-4"
                >
                  Close
                </Button>
                <div className="flex justify-center gap-4 mt-4">
                  <a
                    href="https://youtube.com/@ailinc772?si=BhOlO4fwHqGiAncC"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#0BC5EA] hover:text-[#0BC5EA]/80 transition-colors"
                    aria-label="Follow us on YouTube"
                  >
                    <Youtube className="size-6" />
                  </a>
                  <a
                    href="https://www.linkedin.com/company/ai-linc772/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#0BC5EA] hover:text-[#0BC5EA]/80 transition-colors"
                    aria-label="Follow us on LinkedIn"
                  >
                    <Linkedin className="size-6" />
                  </a>
                  <a
                    href="https://www.instagram.com/ai_lincc/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#0BC5EA] hover:text-[#0BC5EA]/80 transition-colors"
                    aria-label="Follow us on Instagram"
                  >
                    <Instagram className="size-6" />

                  </a>
                </div>

              </div>
            </motion.div>
          </div>
        )}

        <Footer />

        {/* Background glow effects */}
        <div className="absolute top-1/4 right-1/3 size-96 bg-[#0BC5EA]/5 rounded-full blur-3xl z-0 pointer-events-none"></div>
        <div className="absolute bottom-1/4 left-1/3 size-96 bg-[#6B46C1]/5 rounded-full blur-3xl z-0 pointer-events-none"></div>
      </main>
    </ThemeProvider>
  )
}