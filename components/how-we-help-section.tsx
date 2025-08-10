import React, { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  Users,
  Building2,
  Briefcase,
  GraduationCap,
} from "lucide-react";
import { HireTalentModal } from "./hire-talent-modal";

type HowWeHelpSectionProps = {
  onOpenProgramsModal: () => void;
};

export const HowWeHelpSection = ({
  onOpenProgramsModal,
}: HowWeHelpSectionProps) => {
  const [isHireTalentModalOpen, setIsHireTalentModalOpen] = useState(false);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  return (
    <section className="relative py-16 sm:py-20 lg:py-24 overflow-hidden bg-gradient-to-b from-gray-900/50 to-black/30">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/3 left-1/3 w-96 h-96 bg-[#0BC5EA]/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/3 right-1/3 w-96 h-96 bg-[#6B46C1]/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={containerVariants}
          className="text-center mb-16"
        >
          <motion.h2
            variants={itemVariants}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-white via-[#0BC5EA] to-[#6B46C1] bg-clip-text text-transparent mb-6"
          >
            How We Help You
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-gray-300 text-lg sm:text-xl max-w-3xl mx-auto"
          >
            Choose your path to AI excellence
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          {/* For Individuals */}
          <motion.div
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 hover:border-[#0BC5EA]/30"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 bg-[#0BC5EA]/20 rounded-full flex items-center justify-center">
                <Users className="w-6 h-6 text-[#0BC5EA]" />
              </div>
              <h3 className="text-2xl font-bold text-white">For Individuals</h3>
            </div>

            <p className="text-gray-300 mb-8 text-lg">
              Learn AI skills, join programs, get certified.
            </p>

            <div className="space-y-6 mb-8">
              <div className="bg-white/5 rounded-xl p-6 border border-white/5">
                <div className="flex items-center gap-3 mb-3">
                  <GraduationCap className="w-5 h-5 text-[#0BC5EA]" />
                  <h4 className="text-lg font-semibold text-white">
                    AI Essentials Bootcamp
                  </h4>
                </div>
                <p className="text-gray-400">
                  Learn 100+ AI tools in 6 months Program
                </p>
              </div>

              <div className="bg-white/5 rounded-xl p-6 border border-white/5">
                <div className="flex items-center gap-3 mb-3">
                  <Briefcase className="w-5 h-5 text-[#0BC5EA]" />
                  <h4 className="text-lg font-semibold text-white">
                    No-Code AI Development
                  </h4>
                </div>
                <p className="text-gray-400">
                  Build apps without coding through our Specialized Programs
                </p>
              </div>
            </div>

            <Button
              className="w-full bg-[#0BC5EA] text-black hover:bg-[#0BC5EA]/90 transition-all duration-300 px-6 py-3 text-base font-semibold rounded-lg hover:shadow-[0_0_20px_rgba(11,197,234,0.4)] transform hover:scale-105 shadow-lg"
              onClick={onOpenProgramsModal}
            >
              View All Programs
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </motion.div>

          {/* For Businesses */}
          <motion.div
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 hover:border-[#6B46C1]/30"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 bg-[#6B46C1]/20 rounded-full flex items-center justify-center">
                <Building2 className="w-6 h-6 text-[#6B46C1]" />
              </div>
              <h3 className="text-2xl font-bold text-white">For Businesses</h3>
            </div>

            <p className="text-gray-300 mb-8 text-lg">
              Hire skilled AI professionals, deploy AI products & services.
            </p>

            <div className="space-y-6 mb-8">
              <div className="bg-white/5 rounded-xl p-6 border border-white/5">
                <h4 className="text-lg font-semibold text-white mb-3">
                  Hire Trained AI Talent On-Demand
                </h4>
                <p className="text-gray-400 mb-4">
                  Access our vetted AI engineers, analysts & automation experts.
                  Fully trained & ready to work on your projects from day one.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-[#6B46C1]/20 text-[#6B46C1] rounded-full text-sm">
                    AI Engineers
                  </span>
                  <span className="px-3 py-1 bg-[#6B46C1]/20 text-[#6B46C1] rounded-full text-sm">
                    Data Analysts
                  </span>
                  <span className="px-3 py-1 bg-[#6B46C1]/20 text-[#6B46C1] rounded-full text-sm">
                    Automation Experts
                  </span>
                </div>
              </div>

              <Button
                className="w-full bg-[#6B46C1] text-white hover:bg-[#6B46C1]/90 transition-all duration-300 px-6 py-3 text-base font-semibold rounded-lg hover:shadow-[0_0_20px_rgba(107,70,193,0.4)] transform hover:scale-105 shadow-lg"
                onClick={() => setIsHireTalentModalOpen(true)}
              >
                Request Talent
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>

              <div className="bg-white/5 rounded-xl p-6 border border-white/5">
                <h4 className="text-lg font-semibold text-white mb-3">
                  AI Products & Services
                </h4>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-[#6B46C1] rounded-full"></div>
                    <p className="text-gray-400">Chatbot & automation tools</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-[#6B46C1] rounded-full"></div>
                    <p className="text-gray-400">
                      AI-powered analytics dashboard
                    </p>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-[#6B46C1] rounded-full"></div>
                    <p className="text-gray-400">
                      Custom AI solution development
                    </p>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-[#6B46C1] rounded-full"></div>
                    <p className="text-gray-400">
                      AI consulting for business processes
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-3">

              <Button
                variant="outline"
                className="w-full border-[#6B46C1] text-[#6B46C1] hover:bg-[#6B46C1]/10 transition-all duration-300 px-6 py-3 text-base font-semibold rounded-lg hover:shadow-[0_0_20px_rgba(107,70,193,0.2)] transform hover:scale-105"
                onClick={() => (window.location.href = "/contact-us")}
              >
                Contact Us
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </div>

            <HireTalentModal
              open={isHireTalentModalOpen}
              onOpenChange={setIsHireTalentModalOpen}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};
