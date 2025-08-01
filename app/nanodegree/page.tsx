"use client"

import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { ParticleBackground } from "@/components/particle-background"
import { ThemeProvider } from "@/components/theme-provider"
import { InstructorsSection } from "@/components/instructors-section"

import { HeroSection } from "@/app/nanodegree/components/hero-section"
import { CourseContentSection } from "@/app/nanodegree/components/course-content-section"
import { RequirementsSection } from "@/app/nanodegree/components/requirements-section"
import { WhatYouLearnSection } from "@/app/nanodegree/components/what-you-learn-section"
import { StickySidebar } from "@/app/nanodegree/components/sticky-sidebar"

export default function NanoDegreePage() {
    return (
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
            <main className="relative min-h-screen bg-gradient-to-b from-[#0A1128] to-[#1A202C] text-white">
                <ParticleBackground />
                <Navbar />

                <div className="container mx-auto px-4 py-8 md:py-16">
                    {/* Mobile sidebar - shown at top on mobile */}
                    <div className="lg:hidden mb-8">
                        <StickySidebar />
                    </div>

                    <div className="grid lg:grid-cols-[1fr_400px] gap-6 lg:gap-8 items-start">
                        {/* Left side content */}
                        <div className="space-y-8 md:space-y-12">
                            <HeroSection />
                            <WhatYouLearnSection />
                            <CourseContentSection />
                            <RequirementsSection />
                            <InstructorsSection />
                        </div>

                        {/* Desktop sticky sidebar */}
                        <div className="hidden lg:block sticky top-12 self-start h-fit">
                            <StickySidebar />
                        </div>
                    </div>
                </div>

                <Footer />
            </main>
        </ThemeProvider>
    )
}
