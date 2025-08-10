"use client";

import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { ParticleBackground } from "@/components/particle-background";
import { ThemeProvider } from "@/components/theme-provider";

// Import all the components

import { SyllabusSection } from "./components/syllabus-section";
import { InstructorsSection } from "@/components/instructors-section";
import { PlatformPreview } from "@/components/platform-preview";
import { CareerTransformation } from "@/components/career-transformation";
import { DetailedSyllabusContent } from "../courses/detailed-syllabus/components/detailed-syllabus-content";
import { ProgramHighlightSection } from "./components/program-highlight-section";
import { KeyHighlightsSection } from "./components/key-highlights-section";
import { ProjectsPortfolioSection } from "./components/projects-portfolio-section";
import { AiToolsMasterySection } from "./components/ai-tools-mastery-section";
import { TangibleOutcomesSection } from "./components/tangible-outcomes-section";
import { CareerTransformationCta } from "./components/career-transformation-cta";
import { StickyCtaButtons } from "./components/sticky-cta-buttons";
import { RegistrationSection } from "@/components/registration-section";
import { useState } from "react";
import { SuccessModal } from "../workshop-registration/components/SuccessModal";
import { CurriculumSection } from "./components/Curicullum";

export default function FlagshipCoursePage() {
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const handleRegistrationSuccess = () => {
    setShowSuccessModal(true);
  };

  const scrollToRegistration = () => {
    const registrationElement = document.getElementById("registration-form");
    if (registrationElement) {
      registrationElement.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };
  return (
    <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
      {showSuccessModal && (
        <SuccessModal
          showModal={showSuccessModal}
          onClose={() => setShowSuccessModal(false)}
        />
      )}
      <main className="relative min-h-screen bg-gradient-to-b from-[#0A1128] to-[#1A202C] text-white overflow-hidden">
        <ParticleBackground />
        <Navbar />

        <ProgramHighlightSection />
        <KeyHighlightsSection />
        <ProjectsPortfolioSection />
        <AiToolsMasterySection />
        <TangibleOutcomesSection />
        <CareerTransformationCta onReserveSeat={scrollToRegistration} />
        <RegistrationSection onSuccess={handleRegistrationSuccess} />
        <InstructorsSection />
        {/* <DetailedSyllabusContent /> */}
        <CurriculumSection/>
        <SyllabusSection />
        <PlatformPreview />
        {/* <CareerTransformation /> */}

        <StickyCtaButtons onReserveSeat={scrollToRegistration} />
        <Footer />
      </main>
    </ThemeProvider>
  );
}
