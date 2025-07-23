"use client"

import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { ParticleBackground } from "@/components/particle-background"
import { ThemeProvider } from "@/components/theme-provider"
import { WhoWeAreSection } from "@/components/who-we-are-section"
import { WhatWeDoSection } from "@/components/what-we-do-section"
import { motion } from "framer-motion"
import { TeamSection } from "@/components/team/team-section"

export default function AboutUsPage() {
    return (
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
            <main className="relative min-h-screen bg-gradient-to-b from-[#0A1128] to-[#1A202C] text-white overflow-hidden">
                <ParticleBackground />
                <Navbar />

                {/* Hero Section */}
                <section className="pt-32 pb-20 relative overflow-hidden">
                    <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            className="text-center mb-16"
                        >
                            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-8 bg-gradient-to-r from-white via-[#0BC5EA] to-[#6B46C1] bg-clip-text text-transparent">
                                About AI LINC
                            </h1>
                            <p className="text-xl sm:text-2xl text-foreground/80 max-w-5xl mx-auto leading-relaxed">
                                Bridging the gap between AI talent and transformative opportunities through innovative assessment, upskilling, and deployment solutions.
                            </p>
                        </motion.div>
                    </div>

                    {/* Background glow effects for hero */}
                    <div className="absolute top-1/4 left-1/4 size-96 bg-[#0BC5EA]/5 rounded-full blur-3xl"></div>
                    <div className="absolute bottom-1/4 right-1/4 size-96 bg-[#6B46C1]/5 rounded-full blur-3xl"></div>
                </section>

                {/* Who We Are Section */}
                <section className="py-20 relative">
                    <WhoWeAreSection />
                </section>

                {/* What We Do Section */}
                <section className="py-20 relative">
                    <WhatWeDoSection />
                </section>

                {/* Team Section */}
                <section className="py-20 relative">
                    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: true }}
                            className="text-center mb-16"
                        >
                            <h2 className="text-4xl sm:text-5xl font-bold mb-6 bg-gradient-to-r from-[#0BC5EA] to-[#6B46C1] bg-clip-text text-transparent">
                                Meet Our Leadership
                            </h2>
                            <p className="text-lg text-foreground/70 max-w-3xl mx-auto">
                                Our experienced team of visionaries and industry experts driving AI LINC's mission forward
                            </p>
                        </motion.div>
                    </div>
                    <TeamSection />
                </section>

                {/* Footer */}
                <Footer />
            </main>
        </ThemeProvider>
    )
}