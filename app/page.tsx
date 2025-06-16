"use client"

import { Navbar } from "@/components/navbar"
import { HeroSection } from "@/components/hero-section"
import { ProgramStructure } from "@/components/program-structure"
import { ProgramJourney } from "@/components/program-journey"
import { KeyUsps } from "@/components/key-usps"
import { AiLearningAcceleration } from "@/components/ai-learning-acceleration"
import { ResultsSection } from "@/components/results-section"
import { CurriculumSection } from "@/components/curriculum-section"
import { WorkIntegration } from "@/components/work-integration"
import { InstructorsSection } from "@/components/instructors-section"
import { CommunityNetwork } from "@/components/community-network"
import { PlatformPreview } from "@/components/platform-preview"
import { CareerTransformation } from "@/components/career-transformation"
import { PricingSection } from "@/components/pricing-section"
import { TrustSection } from "@/components/trust-section"
import { Footer } from "@/components/footer"
import { ParticleBackground } from "@/components/particle-background"
import { ThemeProvider } from "@/components/theme-provider"
import { ContactApplySection } from "@/components/contact-apply-section"
import { Suspense } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog"
import { useEffect, useState } from "react"

const WEBINAR_DATE = new Date("2025-06-22T12:30:00+05:30"); // IST timezone

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
      const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((diff / (1000 * 60)) % 60);
      const seconds = Math.floor((diff / 1000) % 60);
      setTimeLeft({ days, hours, minutes, seconds });
    }
    updateCountdown();
    const timer = setInterval(updateCountdown, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="max-w-lg w-full">
        <DialogHeader>
          <DialogTitle>Webinar: "No code development using Agentic AI"</DialogTitle>
          <DialogDescription>
            <div className="text-base font-medium mt-2 mb-1">Develop tech products without single line of code</div>
            <div className="text-sm mb-4">Sunday 12:30pm (22nd June 2025)</div>
            <div className="font-semibold text-base mb-1">Starts In:</div>
            <div className="font-mono text-lg mb-4">
              {timeLeft.days}d {timeLeft.hours}h {timeLeft.minutes}m {timeLeft.seconds}s
            </div>
            <a
              href="/workshop-registration"
              className="bg-gradient-to-r from-cyan-400 to-purple-500 text-white font-semibold px-5 py-2 rounded shadow hover:from-cyan-500 hover:to-purple-600 transition"
            >
              Apply Now
            </a>
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}

export default function Home() {
  return (
    <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
      <WebinarModal />
      <main className="relative min-h-screen bg-gradient-to-b from-[#0A1128] to-[#1A202C] text-white overflow-hidden">
        <ParticleBackground />
        <Navbar />
        <HeroSection />
        <ProgramStructure />
        <ProgramJourney />
        <KeyUsps />
        <AiLearningAcceleration />
        <ResultsSection />
        <CurriculumSection />
        <WorkIntegration />
        <InstructorsSection />
        {/* <CommunityNetwork /> */}
        <PlatformPreview />
        <CareerTransformation />
        <TrustSection />
        <PricingSection />
        <Suspense fallback={<div className="min-h-[400px] flex items-center justify-center">Loading...</div>}>
          <ContactApplySection />
        </Suspense>
        <Footer />
      </main>
    </ThemeProvider>
  )
}
