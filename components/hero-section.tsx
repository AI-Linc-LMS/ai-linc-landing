"use client"

import React, { useState } from "react"
import { useLenis } from "@/hooks/use-lenis"
import { HireTalentModal } from "@/components/hire-talent-modal"
import { WebinarRegistrationModal } from "@/components/webinar-registration-modal"
import { HeroContent } from "./hero-section/hero-content"
import { HeroShowcase } from "./hero-section/hero-showcase"
import { useHeroTimers } from "./hero-section/hooks/use-hero-timers"
import { ContactFormModal } from "@/components/contact-form-modal"

export function HeroSection() {
  const { scrollTo } = useLenis()
  const [isHireTalentModalOpen, setIsHireTalentModalOpen] = useState(false)
  const [isWebinarModalOpen, setIsWebinarModalOpen] = useState(false)
  const [isContactModalOpen, setIsContactModalOpen] = useState(false)
  
  const {
    activeProcess,
    setActiveProcess,
    currentMetric,
    progressValue,
    timeLeft,
  } = useHeroTimers()

  const handleHireTalent = () => {
    setIsHireTalentModalOpen(true)
  }

  const handleJoinWebinar = () => {
    setIsWebinarModalOpen(true)
  }

  const handleContactModalOpen = () => {
    setIsContactModalOpen(true)
  }

  const handleProcessClick = (index: number) => {
    setActiveProcess(index)
  }

  return (
    <section className="pt-32 pb-20 md:min-h-screen flex items-center relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-12 gap-8 items-center">
          {/* Left side - Hero Content */}
          <HeroContent
            timeLeft={timeLeft}
            onHireTalent={handleHireTalent}
            onJoinWebinar={handleJoinWebinar}
          />

          {/* Right side - Hero Showcase */}
          <HeroShowcase
            progressValue={progressValue}
            currentMetric={currentMetric}
            activeProcess={activeProcess}
            onProcessClick={handleProcessClick}
            onWebinarOpen={handleJoinWebinar}
            onContactModalOpen={handleContactModalOpen}
          />
        </div>
      </div>

      {/* Modals */}
      <HireTalentModal
        open={isHireTalentModalOpen}
        onOpenChange={setIsHireTalentModalOpen}
      />
      <WebinarRegistrationModal
        open={isWebinarModalOpen}
        onOpenChange={setIsWebinarModalOpen}
      />
      <ContactFormModal
        open={isContactModalOpen}
        onOpenChange={setIsContactModalOpen}
      />
    </section>
  )
}
