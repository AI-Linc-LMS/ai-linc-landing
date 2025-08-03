"use client";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Clock, Users, ArrowRight } from "lucide-react";

interface StickyBottomBarProps {
  onRegistrationClick?: () => void;
  seatsLeft?: number;
}

export function StickyBottomBar({ onRegistrationClick, seatsLeft = 5 }: StickyBottomBarProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 2 }}
      className="fixed bottom-0 left-0 right-0 z-50 bg-gradient-to-r from-[#0A1128] via-[#1A1B3F] to-[#0A1128] border-t border-[#0BC5EA]/30 backdrop-blur-lg shadow-2xl"
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          {/* Left Side - Workshop Info */}
          <div className="flex flex-col sm:flex-row items-center gap-4 text-center sm:text-left">
            <div>
              <h3 className="text-lg font-bold text-white">
                Deploy Your First AI App Workshop
              </h3>
              <p className="text-sm text-gray-300">
                No-Code AI Development • Live Session
              </p>
            </div>
            
            {/* Stats */}
            <div className="flex items-center gap-4 text-sm">
              <div className="flex items-center gap-1 text-orange-400">
                <Clock className="w-4 h-4" />
                <span>90 mins</span>
              </div>
              <div className="flex items-center gap-1 text-red-400">
                <Users className="w-4 h-4" />
                <span>{seatsLeft} seats left</span>
              </div>
            </div>
          </div>

          {/* Right Side - Registration Button */}
          <div className="flex flex-col sm:flex-row items-center gap-3">
            <div className="text-center sm:text-right">
              <div className="text-lg font-semibold text-[#0BC5EA]">
                Join for Rs{" "}
                <span className="line-through text-gray-400">499</span>{" "}
                <span className="text-green-400 font-bold">FREE</span>
              </div>
              <div className="text-xs text-gray-400">
                Limited time offer
              </div>
            </div>
            
            <Button
              onClick={onRegistrationClick}
              className="bg-gradient-to-r from-[#0BC5EA] to-[#6B46C1] hover:from-[#0BC5EA]/90 hover:to-[#6B46C1]/90 text-white font-bold py-3 px-6 rounded-lg text-base transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl min-w-[200px] group"
              size="lg"
            >
              Register Now for FREE
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>

        {/* Progress Bar for Urgency */}
        <div className="mt-3 sm:mt-2">
          <div className="flex items-center justify-between text-xs text-gray-400 mb-1">
            <span>Workshop filling up fast</span>
            <span>{Math.round((1 - seatsLeft / 100) * 100)}% filled</span>
          </div>
          <div className="w-full bg-gray-700 rounded-full h-2">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: `${Math.round((1 - seatsLeft / 100) * 100)}%` }}
              transition={{ duration: 1, delay: 0.5 }}
              className="bg-gradient-to-r from-[#0BC5EA] to-[#6B46C1] h-2 rounded-full"
            />
          </div>
        </div>
      </div>

      {/* Animated glow effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#0BC5EA]/5 to-[#6B46C1]/5 animate-pulse pointer-events-none" />
    </motion.div>
  );
}
