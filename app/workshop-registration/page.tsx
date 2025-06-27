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
import { MaintenanceModal } from "./components/MaintenanceModal"
import { ErrorBoundary } from "./components/ErrorBoundary"

export default function WorkshopRegistration() {
  const [showModal, setShowModal] = useState(false)
  const [seatsLeft, setSeatsLeft] = useState(5) // Simulating limited seats
  const [showMaintenanceModal, setShowMaintenanceModal] = useState(false)
  const [isRetrying, setIsRetrying] = useState(false)

  const handleRegistrationSuccess = () => {
    setShowModal(true)
  }

  const closeModal = () => {
    setShowModal(false)
  }

  const handleMaintenanceDetected = () => {
    setShowMaintenanceModal(true)
  }

  const handleMaintenanceRetry = async () => {
    setIsRetrying(true)
    
    // Simple health check to see if service is back up
    try {
      const response = await fetch('https://be-app.ailinc.com/api/clients/1/workshop-registrations/', {
        method: 'HEAD',
        signal: AbortSignal.timeout(10000) // 10 second timeout
      })
      
      if (response.ok || response.status < 500) {
        // Service seems to be back up
        setShowMaintenanceModal(false)
        toast.success("Service is back online! You can now register.")
      } else {
        toast.error("Service is still under maintenance. Please try again later.")
      }
    } catch (error) {
      toast.error("Service is still unavailable. Please try again in a few minutes.")
    } finally {
      setIsRetrying(false)
    }
  }

  return (
    <ErrorBoundary>
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

                {/* Live Registration Count */}
                <ErrorBoundary>
                  <RegistrationCount className="mb-8" />
                </ErrorBoundary>

                {/* Countdown Timer */}
                <ErrorBoundary>
                  <CountdownTimer />
                </ErrorBoundary>

                {/* Speakers */}
                <ErrorBoundary>
                  <SpeakersSection />
                </ErrorBoundary>
              </div>

              <ErrorBoundary>
                <RegistrationForm
                  onSuccess={handleRegistrationSuccess}
                  seatsLeft={seatsLeft}
                  setSeatsLeft={setSeatsLeft}
                  onMaintenanceDetected={handleMaintenanceDetected}
                />
              </ErrorBoundary>

              {/* Bootcamp Benefits Section */}
              <ErrorBoundary>
                <BootcampBenefits />
              </ErrorBoundary>
            </motion.div>
          </div>

          {/* Registration Success Modal */}
          <SuccessModal showModal={showModal} onClose={closeModal} />

          {/* Maintenance Modal */}
          <MaintenanceModal 
            isOpen={showMaintenanceModal} 
            onRetry={handleMaintenanceRetry}
            isRetrying={isRetrying}
          />

          <Footer />

          <div className="absolute top-1/4 right-1/3 size-96 bg-[#0BC5EA]/5 rounded-full blur-3xl z-0 pointer-events-none"></div>
          <div className="absolute bottom-1/4 left-1/3 size-96 bg-[#6B46C1]/5 rounded-full blur-3xl z-0 pointer-events-none"></div>
        </main>
      </ThemeProvider>
    </ErrorBoundary>
  )
}