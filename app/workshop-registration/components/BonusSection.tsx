"use client";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Gift, FileText, Linkedin, FileUser, Award } from "lucide-react";

interface BonusSectionProps {
  onRegistrationClick?: () => void;
}

export function BonusSection({ onRegistrationClick }: BonusSectionProps) {
  const bonusItems = [
    {
      icon: <FileText className="w-8 h-8 text-[#0BC5EA]" />,
      title: "AI Prompt Cheat Sheet",
      description: "Comprehensive guide to effective AI prompts",
    },
    {
      icon: <Linkedin className="w-8 h-8 text-[#0BC5EA]" />,
      title: "LinkedIn Optimization Guide",
      description: "Boost your professional presence on LinkedIn",
    },
    {
      icon: <FileUser className="w-8 h-8 text-[#0BC5EA]" />,
      title: "Resume Template",
      description: "Professional resume template for tech roles",
    },
  ];

  return (
    <div className="mb-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="grid lg:grid-cols-2 gap-8 items-center"
      >
        {/* Left Side - Bonuses */}
        <div className="space-y-6">
          <div className="text-left">
            <div className="flex items-center gap-2 mb-4">
              <Gift className="w-8 h-8 text-[#0BC5EA]" />
              <h2 className="text-2xl md:text-3xl font-bold text-white">
                Bonuses worth ₹45,000
              </h2>
            </div>
            <p className="text-[#0BC5EA] text-lg font-semibold mb-6">
              Get absolutely FREE with your registration!
            </p>
          </div>

          <div className="space-y-4">
            {bonusItems.map((bonus, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-800/30 backdrop-blur-sm border border-gray-700/50 rounded-lg p-4 hover:border-[#0BC5EA]/50 transition-all duration-300"
              >
                <div className="flex items-center gap-4">
                  <div className="flex-shrink-0">{bonus.icon}</div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-1">
                      {bonus.title}
                    </h3>
                    <p className="text-gray-300 text-sm">{bonus.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Registration Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <div className="text-sm text-gray-400">Deadline 30 July 2025</div>
            <Button
              onClick={onRegistrationClick}
              className="bg-gradient-to-r from-[#0BC5EA] to-[#6B46C1] hover:from-[#0BC5EA]/90 hover:to-[#6B46C1]/90 text-white font-semibold py-4 px-8 rounded-lg text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl w-full"
              size="lg"
            >
              Join for Rs <span className="line-through">499</span> FREE
            </Button>
          </motion.div>
        </div>

        {/* Right Side - Certificate */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="space-y-6"
        >
          {/* Course Notes Section */}
          <div className="bg-gray-800/30 backdrop-blur-sm border border-gray-700/50 rounded-lg p-6">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 bg-[#0BC5EA]/10 rounded-lg flex items-center justify-center">
                <FileText className="w-6 h-6 text-[#0BC5EA]" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white">
                  Course Notes
                </h3>
                <p className="text-sm text-gray-400">
                  Stressed about balancing learning and taking notes?
                </p>
                <p className="text-sm text-gray-400">
                  No worries, I've got your back.
                </p>
              </div>
            </div>
          </div>

          {/* Certificate Section */}
          <div className="bg-gradient-to-br from-[#0BC5EA]/10 to-[#6B46C1]/10 border border-[#0BC5EA]/30 rounded-lg p-6">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 bg-[#0BC5EA]/20 rounded-lg flex items-center justify-center">
                <Award className="w-6 h-6 text-[#0BC5EA]" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white">
                  Certificate
                </h3>
                <p className="text-sm text-gray-400">
                  Want to certify your learnings?
                </p>
              </div>
            </div>

            {/* Certificate Preview */}
            <div className="bg-white/5 rounded-lg p-4 mt-4">
              <div className="bg-gradient-to-br from-white/10 to-white/5 rounded-lg p-6 border border-white/10">
                <div className="text-center space-y-2">
                  <div className="text-xs text-gray-400">
                    Certificate of Completion
                  </div>
                  <div className="text-sm font-semibold text-white">
                    AI Workshop Certificate
                  </div>
                  <div className="text-xs text-gray-400">
                    This is to certify that
                  </div>
                  <div className="text-sm text-[#0BC5EA] font-semibold">
                    [Your Name]
                  </div>
                  <div className="text-xs text-gray-400">
                    has successfully completed
                  </div>
                  <div className="text-xs text-gray-400">
                    "Deploy Your First AI App: Live No-Code AI Workshop"
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <Button
                onClick={onRegistrationClick}
                className="w-full mt-4 bg-gradient-to-r from-[#22c55e] to-[#16a34a] hover:from-[#22c55e]/90 hover:to-[#16a34a]/90 text-white font-semibold py-3 rounded-lg transition-all duration-300"
              >
                Enroll Now
              </Button>
              <span className="absolute -top-1 left-3/4 transform -translate-x-1/2 bg-yellow-400 text-black px-3 py-1 rounded text-xs font-bold">
                50 Seats Left
              </span>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}
