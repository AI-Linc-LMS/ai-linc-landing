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

export default function Home() {
  return (
    <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
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
        <CommunityNetwork />
        <PlatformPreview />
        <CareerTransformation />
        <TrustSection />
        <PricingSection />
        <Footer />
      </main>
    </ThemeProvider>
  )
}
