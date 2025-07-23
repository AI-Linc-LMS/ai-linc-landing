"use client"

import { Navbar } from "@/components/navbar"
import { HeroSection } from "@/components/hero-section"
import { WhoWeAreSection } from "@/components/who-we-are-section"
import { WhatWeDoSection } from "@/components/what-we-do-section"
import { HowWeDoItSection } from "@/components/how-we-do-it-section"
import { ProgramStructure } from "@/components/program-structure"
import { ProgramJourney } from "@/components/program-journey"
import { KeyUsps } from "@/components/key-usps"
import { AiLearningAcceleration } from "@/components/ai-learning-acceleration"
import { ResultsSection } from "@/components/results-section"
import { CurriculumSection } from "@/components/curriculum-section"
import { WorkIntegration } from "@/components/work-integration"
import { CommunityNetwork } from "@/components/community-network"
import { PricingSection } from "@/components/pricing-section"
import { ClientTalentSuccessSection } from "@/components/client-talent-success-section"
import { LetsWorkTogetherSection } from "@/components/lets-work-together-section"
import { ContactApplySection } from "@/components/contact-apply-section"
import { Footer } from "@/components/footer"
import { ParticleBackground } from "@/components/particle-background"
import { ThemeProvider } from "@/components/theme-provider"
import { SuccessModal } from "@/app/workshop-registration/components/SuccessModal"
import { WebinarModal } from "@/components/webinar-modal"
import { RegistrationSection } from "@/components/registration-section"
import { useHashNavigation } from "@/hooks/use-hash-navigation"
import { useState } from "react"
import { VideoSection } from "@/components/video-section"
import { CareerTransformation } from "../components/career-transformation"
import { TopScorersSection } from "@/components/top-scorers-section"
import { LinkedInPostsSection } from "@/components/linkedin-posts-section"
import { StudentTestimonialsSection } from "@/components/student-testimonials-section"

export default function Home() {
  const [showSuccessModal, setShowSuccessModal] = useState(false);

  // Initialize hash navigation
  useHashNavigation();

  return (
    <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
      <WebinarModal />
      {showSuccessModal && (
        <SuccessModal
          showModal={showSuccessModal}
          onClose={() => setShowSuccessModal(false)}
        />
      )}
      <main className="relative min-h-screen bg-gradient-to-b from-[#0A1128] to-[#1A202C] text-white overflow-hidden">
        <ParticleBackground />
        <Navbar />
        <HeroSection />
        <VideoSection />
        <HowWeDoItSection />
        {/* <WhoWeAreSection /> */}
        <TopScorersSection />
        <LinkedInPostsSection />
        <StudentTestimonialsSection />
        <ClientTalentSuccessSection />
        {/* <HowWeDoItSection /> */}
        <ProgramJourney />
        <KeyUsps />
        <CareerTransformation />
        <WorkIntegration />
        <RegistrationSection onSuccess={() => setShowSuccessModal(true)} />
        <LetsWorkTogetherSection />
        <Footer />
      </main>
    </ThemeProvider>
  )
}
