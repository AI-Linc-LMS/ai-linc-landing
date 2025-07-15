"use client"

import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { ParticleBackground } from "@/components/particle-background"
import { ThemeProvider } from "@/components/theme-provider"

// Import all the new components
import { HeroSection } from "./components/hero-section"
import { WebinarAssessmentSection } from "./components/webinar-assessment-section"
import { PostAssessmentSection } from "./components/post-assessment-section"
import { ProgramsSection } from "./components/programs-section"
import { ComparisonTable } from "./components/comparison-table"
import { CtaSection } from "./components/cta-section"
import { SyllabusSection } from "./components/syllabus-section"
import { FinalCtaSection } from "./components/final-cta-section"
import { InstructorsSection } from "@/components/instructors-section"
import { PlatformPreview } from "@/components/platform-preview"
import { CareerTransformation } from "@/components/career-transformation"

export default function CoursesPage() {
  return (
    <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
      <main className="relative min-h-screen bg-gradient-to-b from-[#0A1128] to-[#1A202C] text-white overflow-hidden">
        <ParticleBackground />
        <Navbar />
        
        <HeroSection />
        <WebinarAssessmentSection />
        <PostAssessmentSection />
        <ProgramsSection />
        <ComparisonTable />
        <CtaSection />
        {/* <SyllabusSection />
        <PlatformPreview />
        <InstructorsSection />
        <CareerTransformation />
        <FinalCtaSection /> */}

        <Footer />
      </main>
    </ThemeProvider>
  )
}