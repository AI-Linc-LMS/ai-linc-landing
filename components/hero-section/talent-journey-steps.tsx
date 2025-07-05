import React from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { CheckCircle, ChevronRight } from "lucide-react"
import { talentJourney } from "./data"

interface TalentJourneyStepsProps {
  activeProcess: number
  onProcessClick: (index: number) => void
  onWebinarOpen: () => void
}

export function TalentJourneySteps({
  activeProcess,
  onProcessClick,
  onWebinarOpen
}: TalentJourneyStepsProps) {
  const handleStepClick = (step: any, index: number) => {
    onProcessClick(index)

    // Handle navigation based on step
    if (step.action) {
      step.action()
    } else if (step.id === 0) {
      onWebinarOpen()
    } else if (step.id === 1) {
      window.open("https://app.ailinc.com/assessment/ai-linc-scholarship-test-2", "_blank")
    }
  }

  return (
    <div className="space-y-4 mb-6">
      {talentJourney.map((step, index) => {
        const Icon = step.icon
        const isActive = activeProcess === index
        const isCompleted = activeProcess > index

        return (
          <motion.div
            key={step.id}
            className={`relative p-4 rounded-xl border transition-all duration-500 cursor-pointer group ${
              isActive
                ? `${step.bgColor} border-white/30 scale-105 shadow-lg`
                : isCompleted
                ? 'bg-green-500/10 border-green-500/30'
                : 'bg-white/5 border-white/10 hover:border-white/20 hover:bg-white/10'
            }`}
            onClick={() => handleStepClick(step, index)}
            whileHover={{ scale: 1.02 }}
            layout
          >
            {/* Click-safe overlay fix */}
            {isActive && (
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-[#0BC5EA]/10 to-[#6B46C1]/10 rounded-xl pointer-events-none z-0"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              />
            )}

            <div className="relative z-10 flex items-center gap-4">
              <div
                className={`relative flex-shrink-0 w-14 h-14 rounded-full flex items-center justify-center transition-all duration-300 ${
                  isActive
                    ? 'bg-white/20 shadow-lg'
                    : isCompleted
                    ? 'bg-green-500/20'
                    : 'bg-white/10'
                }`}
              >
                {isCompleted ? (
                  <CheckCircle className="w-7 h-7 text-green-400" />
                ) : (
                  <Icon className={`w-7 h-7 ${isActive ? 'text-white' : 'text-gray-400'}`} />
                )}
                {isActive && (
                  <motion.div
                    className="absolute inset-0 rounded-full border-2 border-[#0BC5EA]/50"
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                )}
              </div>

              <div className="flex-1">
                <div className="flex items-center gap-3 mb-1">
                  <div
                    className={`text-lg font-semibold ${
                      isActive
                        ? 'text-white'
                        : isCompleted
                        ? 'text-green-400'
                        : 'text-gray-400'
                    }`}
                  >
                    {step.title}
                  </div>
                  <div className="text-xs text-gray-500 bg-gray-500/20 px-2 py-1 rounded-full">
                    {step.duration}
                  </div>
                </div>
                <div
                  className={`text-sm mb-2 ${
                    isActive ? 'text-gray-300' : 'text-gray-500'
                  }`}
                >
                  {step.description}
                </div>
                {isActive && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    className="text-xs text-gray-400 mb-2"
                  >
                    {step.details}
                  </motion.div>
                )}
                <div className="flex items-center justify-between">
                  <div className="text-xs text-[#0BC5EA] font-medium">
                    {step.metrics}
                  </div>
                  {isActive && (
                    <Button
                      size="sm"
                      className="bg-[#0BC5EA] hover:bg-[#0BC5EA]/80 text-white h-7 px-3 text-xs relative z-10"
                      onClick={(e) => {
                        e.preventDefault()
                        e.stopPropagation()
                        if (step.id === 1) {
                          window.open(
                            "https://app.ailinc.com/assessment/ai-linc-scholarship-test-2",
                            "_blank"
                          )
                        } else if (step.action) {
                          step.action()
                        } else {
                          onWebinarOpen()
                        }
                      }}
                    >
                      {step.nextStep} <ChevronRight className="w-3 h-3 ml-1" />
                    </Button>
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        )
      })}
    </div>
  )
}
