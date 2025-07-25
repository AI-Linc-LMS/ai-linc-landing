"use client"

import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { ParticleBackground } from "@/components/particle-background"
import { ThemeProvider } from "@/components/theme-provider"

// Import all the components

import { SyllabusSection } from "./components/syllabus-section"
import { InstructorsSection } from "@/components/instructors-section"
import { PlatformPreview } from "@/components/platform-preview"
import { CareerTransformation } from "@/components/career-transformation"
import { DetailedSyllabusContent } from "../courses/detailed-syllabus/components/detailed-syllabus-content"


export default function FlagshipCoursePage() {
    return (
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
            <main className="relative min-h-screen bg-gradient-to-b from-[#0A1128] to-[#1A202C] text-white overflow-hidden">
                <ParticleBackground />
                <Navbar />

                <DetailedSyllabusContent />
                <SyllabusSection />
                <PlatformPreview />
                <InstructorsSection />
                <CareerTransformation />


                <Footer />
            </main>
        </ThemeProvider>
    )
} 