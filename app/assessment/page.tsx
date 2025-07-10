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
import { useSearchParams } from "next/navigation"
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"

export default function AssessmentPage() {
  const [isTestModalOpen, setIsTestModalOpen] = useState(false)
  const [isWhyTestModalOpen, setIsWhyTestModalOpen] = useState(false)
  const [isChooseTestModalOpen, setIsChooseTestModalOpen] = useState(false)
  const searchParams = useSearchParams();

  // Accept referral or accept links
  const referralParam = searchParams.get('referral') || searchParams.get('ref') || searchParams.get('referral_code');
  const acceptParam = searchParams.get('accept');
  if (referralParam) {
    console.log('Referral code from URL:', referralParam);
  }
  if (acceptParam) {
    console.log('Accept link from URL:', acceptParam);
  }

  const handleStartTest = () => {
    setIsChooseTestModalOpen(true);
  }

  const handleChooseTest = (url: string) => {
    window.open(url, '_blank');
    setIsChooseTestModalOpen(false);
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
        {/* <TestModal 
          isOpen={isTestModalOpen}
          onClose={() => setIsTestModalOpen(false)}
        /> */}
        
        <WhyTestModal 
          isOpen={isWhyTestModalOpen}
          onClose={() => setIsWhyTestModalOpen(false)}
          onStartTest={handleStartTest}
        />

        {/* Choose Test Modal */}
        <Dialog open={isChooseTestModalOpen} onOpenChange={setIsChooseTestModalOpen}>
          <DialogContent>
            <DialogTitle>Choose Your Assessment</DialogTitle>
            <div className="flex flex-col gap-4 mt-4">
              <Button onClick={() => handleChooseTest('https://app.ailinc.com/assessment/ai-linc-scholarship-test-2')} className="bg-blue-600 hover:bg-blue-700 text-white">
                AI-Linc Scholarship Test 2
              </Button>
              <Button onClick={() => handleChooseTest('https://app.ailinc.com/assessment/ai-linc-scholarship-test')} className="bg-purple-600 hover:bg-purple-700 text-white">
                AI-Linc Scholarship Test 1
              </Button>
            </div>
          </DialogContent>
        </Dialog>
      </main>
    </ThemeProvider>
  )
} 