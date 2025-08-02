"use client"

import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { ParticleBackground } from "@/components/particle-background"
import { ThemeProvider } from "@/components/theme-provider"
import { DetailedSyllabusContent } from "./components/detailed-syllabus-content"

export default function DetailedSyllabusPage() {
  return (
    <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
      <main className="relative min-h-screen bg-gradient-to-b from-[#0A1128] to-[#1A202C] text-white overflow-hidden">
        <ParticleBackground />
        <Navbar />
        
        <DetailedSyllabusContent />

        <Footer />
      </main>
    </ThemeProvider>
  )
} 