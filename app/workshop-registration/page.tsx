"use client"
import { useState } from "react"
import { motion } from "framer-motion"
import { ThemeProvider } from "@/components/theme-provider"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { toast, Toaster } from "sonner"
import { CountdownTimer } from "./components/CountdownTimer"
import { SpeakersSection } from "./components/SpeakersSection"
import { RegistrationForm } from "./components/RegistrationForm"
import { BootcampBenefits } from "./components/BootcampBenefits"
import { SuccessModal } from "./components/SuccessModal"
import { RegistrationCount } from "./components/RegistrationCount"

export default function WorkshopRegistration() {
  const [showModal, setShowModal] = useState(false)
  const [seatsLeft, setSeatsLeft] = useState(5) // Simulating limited seats

  const handleRegistrationSuccess = () => {
    setShowModal(true)
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
              Deploy Your First AI App: Live No-Code AI Workshop
              </h1>
              <p className="text-xl text-foreground/80 mb-8">
                Develop Products without writing code
              </p>

              {/* Live Registration Count */}
              <RegistrationCount className="mb-8" />

              {/* Countdown Timer */}
              <CountdownTimer />

              {/* Speakers */}
              <SpeakersSection />
            </div>

            <RegistrationForm
              onSuccess={handleRegistrationSuccess}
              seatsLeft={seatsLeft}
              setSeatsLeft={setSeatsLeft}
            />

            {/* Bootcamp Benefits Section */}
            <BootcampBenefits />
          </motion.div>
        </div>

        {/* Registration Success Modal */}
        <SuccessModal showModal={showModal} onClose={closeModal} />

        <Footer />

        <div className="absolute top-1/4 right-1/3 size-96 bg-[#0BC5EA]/5 rounded-full blur-3xl z-0 pointer-events-none"></div>
        <div className="absolute bottom-1/4 left-1/3 size-96 bg-[#6B46C1]/5 rounded-full blur-3xl z-0 pointer-events-none"></div>
      </main>
    </ThemeProvider>
  )
}