"use client"

import { useState } from "react"
import { ThemeProvider } from "@/components/theme-provider"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { ParticleBackground } from "@/components/particle-background"
import { TestModal } from "./components/TestModal"
import { WhyTestModal } from "./components/WhyTestModal"
import { HeroSection } from "./components/HeroSection"
import { AssessmentCard } from "./components/AssessmentCard"
import { BenefitsSection } from "./components/BenefitsSection"
import { WhatsWithTestSection } from "./components/WhatsWithTestSection"
import { PostBootcampSection } from "./components/PostBootcampSection"
import { containerVariants, itemVariants } from "./components/types"
import { motion } from "framer-motion"

export default function AssessmentPage() {
  const [isTestModalOpen, setIsTestModalOpen] = useState(false)
  const [isWhyTestModalOpen, setIsWhyTestModalOpen] = useState(false)

  const handleStartTest = () => {
    setIsTestModalOpen(true)
    setIsWhyTestModalOpen(false)
  }

  const handleWhyTest = () => {
    setIsWhyTestModalOpen(true)
  }

  return (
    <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
      <main className="relative min-h-screen bg-gradient-to-b from-[#0A1128] to-[#1A202C] text-white overflow-hidden">
        <ParticleBackground />
        <Navbar />
        
        {/* Hero Section */}
        <section className="relative pt-24 pb-16 px-4">
          <div className="max-w-7xl mx-auto">
            <motion.div 
              className="grid lg:grid-cols-2 gap-12 items-center"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              {/* Left Content - Hero with Company Logos */}
              <HeroSection 
                containerVariants={containerVariants}
                itemVariants={itemVariants}
              />

              {/* Right Content - Assessment Card */}
              <AssessmentCard 
                itemVariants={itemVariants}
                onStartTest={handleStartTest}
                onWhyTest={handleWhyTest}
              />
            </motion.div>
          </div>
        </section>

        {/* Benefits Section */}
        <BenefitsSection 
          containerVariants={containerVariants}
          itemVariants={itemVariants}
        />

        {/* What's With This Test Section */}
        <WhatsWithTestSection 
          containerVariants={containerVariants}
          itemVariants={itemVariants}
        />

        {/* Post-Bootcamp Assessment */}
        <PostBootcampSection onStartTest={handleStartTest} />

        <Footer />

        {/* Modals */}
        <TestModal 
          isOpen={isTestModalOpen}
          onClose={() => setIsTestModalOpen(false)}
        />
        
        <WhyTestModal 
          isOpen={isWhyTestModalOpen}
          onClose={() => setIsWhyTestModalOpen(false)}
          onStartTest={handleStartTest}
        />
      </main>
    </ThemeProvider>
  )
} 