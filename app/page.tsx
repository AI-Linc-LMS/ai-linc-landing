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
import { Footer } from "@/components/footer"
import { ParticleBackground } from "@/components/particle-background"
import { ThemeProvider } from "@/components/theme-provider"
import { RegistrationCount } from "@/app/workshop-registration/components/RegistrationCount"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog"
import { useEffect, useState } from "react"
import { RegistrationForm } from "@/app/workshop-registration/components/RegistrationForm"
import { SuccessModal } from "@/app/workshop-registration/components/SuccessModal"

const WEBINAR_DATE = new Date("2025-07-06T12:30:00+05:30"); // IST timezone

function WebinarModal() {
  const [open, setOpen] = useState(false);
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    setOpen(true);
  }, []);

  useEffect(() => {
    function updateCountdown() {
      const now = new Date();
      const diff = WEBINAR_DATE.getTime() - now.getTime();
      
      if (diff <= 0) {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        return;
      }
      
      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((diff % (1000 * 60)) / 1000);
      
      setTimeLeft({ days, hours, minutes, seconds });
    }
    
    updateCountdown();
    const timer = setInterval(updateCountdown, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="max-w-[95vw] sm:max-w-lg w-full  sm:mx-auto mx-auto sm:p-6">
        <DialogHeader className="space-y-2 sm:space-y-3">
          <DialogTitle className="text-base sm:text-xl md:text-2xl font-bold bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent animate-pulse leading-tight text-center">
            🚀 Webinar: "Develop Product without writing code"
          </DialogTitle>
          <DialogDescription className="space-y-2 sm:space-y-3">
            <div className="text-xs sm:text-sm md:text-base font-medium bg-gradient-to-r from-cyan-300 to-purple-400 bg-clip-text text-transparent text-center">
              Develop tech products without single line of code
            </div>
            <div className="text-xs sm:text-sm text-yellow-400 font-semibold text-center">📅 Sunday 12:30pm (6 July 2025)</div>
            
            {/* Registration Count */}
            <div className="my-2 sm:my-3">
              <RegistrationCount className="scale-75 sm:scale-100" />
            </div>
            
            <div className="font-semibold text-xs sm:text-sm md:text-base text-orange-400 text-center">⏰ Starts In:</div>
            <div className="font-mono text-sm sm:text-base md:text-lg bg-gradient-to-r from-red-400 to-orange-500 bg-clip-text text-transparent font-bold">
              <div className="grid grid-cols-4 gap-1 sm:gap-2 text-center">
                <div className="bg-black/20 rounded p-1 sm:p-2">
                  <div className="text-xs sm:text-sm font-bold">{timeLeft.days.toString().padStart(2, '0')}</div>
                  <div className="text-[10px] sm:text-xs text-gray-400">Days</div>
                </div>
                <div className="bg-black/20 rounded p-1 sm:p-2">
                  <div className="text-xs sm:text-sm font-bold">{timeLeft.hours.toString().padStart(2, '0')}</div>
                  <div className="text-[10px] sm:text-xs text-gray-400">Hours</div>
                </div>
                <div className="bg-black/20 rounded p-1 sm:p-2">
                  <div className="text-xs sm:text-sm font-bold">{timeLeft.minutes.toString().padStart(2, '0')}</div>
                  <div className="text-[10px] sm:text-xs text-gray-400">Min</div>
                </div>
                <div className="bg-black/20 rounded p-1 sm:p-2">
                  <div className="text-xs sm:text-sm font-bold">{timeLeft.seconds.toString().padStart(2, '0')}</div>
                  <div className="text-[10px] sm:text-xs text-gray-400">Sec</div>
                </div>
              </div>
            </div>
            
            <div className="pt-2 sm:pt-3">
              <a
                href="/workshop-registration"
                className="inline-block w-full text-center bg-gradient-to-r from-cyan-400 to-purple-500 text-white font-semibold px-3 sm:px-6 py-2 sm:py-3 rounded-lg shadow-lg hover:from-cyan-500 hover:to-purple-600 hover:shadow-xl hover:scale-105 transition-all duration-300 animate-bounce text-xs sm:text-sm md:text-base"
              >
                🎯 Apply Now - Limited Seats!
              </a>
            </div>
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}

export default function Home() {
  const [seatsLeft, setSeatsLeft] = useState(47); // Initialize with current seats
  const [showSuccessModal, setShowSuccessModal] = useState(false);

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
        <WhoWeAreSection />
        <ClientTalentSuccessSection />
        
        <HowWeDoItSection />
        {/* <ProgramStructure /> */}
        {/* <ProgramJourney /> */}
        <KeyUsps />
        {/* <AiLearningAcceleration /> */}
        {/* <ResultsSection /> */}
        {/* <CurriculumSection /> */}
        <WorkIntegration />
        {/* <CommunityNetwork /> */}
        
        {/* <PricingSection /> */}
        <section id="registration" className="py-20 relative overflow-hidden">
          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-white to-[#0BC5EA] bg-clip-text text-transparent">
                Register for Free Workshop
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Join our exclusive workshop and start your AI journey today. Limited seats available!
              </p>
            </div>
            <div className="max-w-md mx-auto">
              <RegistrationForm 
                onSuccess={() => {
                  setShowSuccessModal(true);
                }} 
                seatsLeft={seatsLeft} 
                setSeatsLeft={setSeatsLeft} 
              />
            </div>
          </div>
          
          {/* Background glow effects */}
          <div className="absolute top-1/3 right-1/4 size-96 bg-[#0BC5EA]/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/3 left-1/4 size-96 bg-[#6B46C1]/5 rounded-full blur-3xl"></div>
        </section>
        <LetsWorkTogetherSection />
        <Footer />
      </main>
    </ThemeProvider>
  )
}
