import React from "react";
import { motion } from "framer-motion";
import { Progress } from "@/components/ui/progress";
import { Network } from "lucide-react";
import { MetricsHighlight } from "./metrics-highlight";
import { TalentJourneySteps } from "./talent-journey-steps";
import { LiveActivityFeed } from "./live-activity-feed";
import { FloatingElements } from "./floating-elements";
import { ProgramsModal } from "../programs-modal";
import { HireTalentModal } from "../hire-talent-modal";

interface HeroShowcaseProps {
  progressValue: number;
  currentMetric: number;
  activeProcess: number;
  onProcessClick: (index: number) => void;
  onWebinarOpen: () => void;
  onContactModalOpen: () => void;
}

export function HeroShowcase({
  progressValue,
  currentMetric,
  activeProcess,
  onProcessClick,
  onWebinarOpen,
  onContactModalOpen,
}: HeroShowcaseProps) {
  const [isProgramsModalOpen, setIsProgramsModalOpen] = React.useState(false);
  const [isHireTalentModalOpen, setIsHireTalentModalOpen] =
    React.useState(false);
  const handleProgramModelOpen = () => {
    setIsProgramsModalOpen(true);
  };

  const handleHireTalent = () => {
    setIsHireTalentModalOpen(true);
  };
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.3 }}
      className="md:col-span-7 relative"
    >
      <div className="relative w-full space-y-6">
        <div className="relative">
          {/* Header with Progress */}
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-[#0BC5EA]/20 rounded-lg">
                <Network className="w-6 h-6 text-[#0BC5EA]" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white">
                  AI Talent Pipeline
                </h3>
                <p className="text-sm text-gray-400">
                  From Learning to Earning
                </p>
              </div>
            </div>
            <div className="flex items-center gap-2 text-sm text-green-400">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <span className="font-medium">Live Activity</span>
            </div>
          </div>

          {/* Progress Bar */}
          <div className="mb-6">
            <div className="flex justify-between text-xs text-gray-400 mb-2">
              <span>Pipeline Progress</span>
              <span>{progressValue}% Active</span>
            </div>
            <Progress value={progressValue} className="h-2 bg-white/10" />
          </div>

          {/* Key Metric Highlight */}
          <MetricsHighlight currentMetric={currentMetric} />

          {/* Talent Journey Steps */}
          <TalentJourneySteps
            activeProcess={activeProcess}
            onProgramModelOpen={handleProgramModelOpen}
            onProcessClick={onProcessClick}
            onHireTalent={handleHireTalent}
          />

          {/* Live Activity Feed */}
          {/* <LiveActivityFeed onWebinarOpen={onWebinarOpen} /> */}

          <ProgramsModal
            isOpen={isProgramsModalOpen}
            onClose={() => setIsProgramsModalOpen(false)}
          />

          <HireTalentModal
            open={isHireTalentModalOpen}
            onOpenChange={setIsHireTalentModalOpen}
          />
        </div>

        {/* Floating Elements */}
        <FloatingElements onWebinarOpen={onWebinarOpen} />
      </div>
    </motion.div>
  );
}
