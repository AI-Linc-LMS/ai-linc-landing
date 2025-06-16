"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ThemeProvider } from "@/components/theme-provider"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Linkedin } from "lucide-react"

export default function WorkshopRegistration() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  })

  useEffect(() => {
    const targetDate = new Date("2024-06-22T12:30:00")
    
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
  }

  return (
    <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
      <main className="relative min-h-screen bg-gradient-to-b from-[#0A1128] to-[#1A202C] text-white overflow-hidden">
        <Navbar />
        
        <div className="container mx-auto px-4 py-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-4xl mx-auto"
          >
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-[#0BC5EA] to-[#6B46C1] bg-clip-text text-transparent">
                No code development using Agentic AI
              </h1>
              <p className="text-xl text-foreground/80 mb-8">
                Develop tech products without single line of code
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
              <div className="flex flex-wrap justify-center gap-6 mb-12">
                <a href="https://www.linkedin.com/in/shubhamlal/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 bg-background/30 rounded-lg p-3 hover:bg-background/50 transition-colors">
                  <Linkedin className="text-[#0BC5EA]" />
                  <span>Shubham Lal</span>
                </a>
                <a href="https://www.linkedin.com/in/yaminibandi/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 bg-background/30 rounded-lg p-3 hover:bg-background/50 transition-colors">
                  <Linkedin className="text-[#0BC5EA]" />
                  <span>Yamini Bandi</span>
                </a>
                <a href="https://www.linkedin.com/in/divyansh-dubey/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 bg-background/30 rounded-lg p-3 hover:bg-background/50 transition-colors">
                  <Linkedin className="text-[#0BC5EA]" />
                  <span>Divyansh Dubey</span>
                </a>
                <a href="https://www.linkedin.com/in/poorva-shrivastava-ceo/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 bg-background/30 rounded-lg p-3 hover:bg-background/50 transition-colors">
                  <Linkedin className="text-[#0BC5EA]" />
                  <span>Poorva Shrivastava</span>
                </a>
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
                      className="bg-background/50 border-[#0BC5EA]/30 focus:border-[#0BC5EA] focus:ring-[#0BC5EA]/20"
                      placeholder="Enter your email address"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium mb-2">Phone Number</label>
                    <Input
                      id="phone"
                      type="tel"
                      required
                      className="bg-background/50 border-[#0BC5EA]/30 focus:border-[#0BC5EA] focus:ring-[#0BC5EA]/20"
                      placeholder="Enter your phone number"
                    />
                  </div>

                  <Button 
                    type="submit"
                    className="w-full bg-[#0BC5EA] hover:bg-[#0BC5EA]/90 text-white"
                  >
                    Register Now
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        <Footer />

        {/* Background glow effects */}
        <div className="absolute top-1/4 right-1/3 size-96 bg-[#0BC5EA]/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 left-1/3 size-96 bg-[#6B46C1]/5 rounded-full blur-3xl"></div>
      </main>
    </ThemeProvider>
  )
} 