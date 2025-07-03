"use client"

import { Rocket } from "lucide-react"
import { ProgramCard } from "./program-card"
import { ProgramSelectionModal } from "./program-selection-modal"
import { HowToChooseSection } from "./how-to-choose-section"
import { useProgramHandlers } from "./use-program-handlers"
import { programConfigs } from "./program-configs"

export function ProgramsSection() {
  const {
    isModalOpen,
    setIsModalOpen,
    handleProgramSelection,
    handleAssessment,
    handleWebinarRegistration
  } = useProgramHandlers()

  return (
    <section className="py-16 md:py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 md:mb-6 px-2">
            <Rocket className="inline w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 text-cyan-400 mr-2 sm:mr-4" />
            Two Powerful Programs to Fill the Gap
          </h2>
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 md:gap-8">
          {programConfigs.map((config, index) => (
            <ProgramCard key={index} {...config} onSelect={handleProgramSelection} />
          ))}
        </div>

        <HowToChooseSection />
      </div>

      <ProgramSelectionModal
        isOpen={isModalOpen}
        onOpenChange={setIsModalOpen}
        onAssessment={handleAssessment}
        onWebinarRegistration={handleWebinarRegistration}
      />
    </section>
  )
} 