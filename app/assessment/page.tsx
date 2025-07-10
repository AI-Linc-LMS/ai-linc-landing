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
import { Suspense } from "react"

function AssessmentPageContent({
  isTestModalOpen,
  setIsTestModalOpen,
  isWhyTestModalOpen,
  setIsWhyTestModalOpen,
  isChooseTestModalOpen,
  setIsChooseTestModalOpen,
}: {
  isTestModalOpen: boolean,
  setIsTestModalOpen: (open: boolean) => void,
  isWhyTestModalOpen: boolean,
  setIsWhyTestModalOpen: (open: boolean) => void,
  isChooseTestModalOpen: boolean,
  setIsChooseTestModalOpen: (open: boolean) => void,
}) {
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
    let url = 'https://app.ailinc.com/assessment/ai-linc-scholarship-test-2';
    if (referralParam) {
      const hasQuery = url.includes('?');
      url += (hasQuery ? '&' : '?') + 'ref=' + encodeURIComponent(referralParam);
    }
    window.open(url, '_blank');
  }

  const handleChooseTest = (baseUrl: string) => {
    let url = baseUrl;
    if (referralParam) {
      // Append referral as ?ref=... or &ref=... depending on URL
      const hasQuery = url.includes('?');
      url += (hasQuery ? '&' : '?') + 'ref=' + encodeURIComponent(referralParam);
    }
    window.open(url, '_blank');
    setIsChooseTestModalOpen(false);
  }

  const handleWhyTest = () => {
    setIsWhyTestModalOpen(true)
  }

  return (
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
      {/* Choose Test Modal removed: now Start Assessment opens the 2nd test directly */}
    </main>
  )
}

export default function AssessmentPage() {
  const [isTestModalOpen, setIsTestModalOpen] = useState(false)
  const [isWhyTestModalOpen, setIsWhyTestModalOpen] = useState(false)
  const [isChooseTestModalOpen, setIsChooseTestModalOpen] = useState(false)

  return (
    <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
      <Suspense fallback={null}>
        <AssessmentPageContent
          isTestModalOpen={isTestModalOpen}
          setIsTestModalOpen={setIsTestModalOpen}
          isWhyTestModalOpen={isWhyTestModalOpen}
          setIsWhyTestModalOpen={setIsWhyTestModalOpen}
          isChooseTestModalOpen={isChooseTestModalOpen}
          setIsChooseTestModalOpen={setIsChooseTestModalOpen}
        />
      </Suspense>
    </ThemeProvider>
  )
} 