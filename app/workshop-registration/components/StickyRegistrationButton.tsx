"use client";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

interface StickyRegistrationButtonProps {
  onRegistrationClick?: () => void;
}

export function StickyRegistrationButton({ onRegistrationClick }: StickyRegistrationButtonProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 2 }}
      className="fixed bottom-4 left-[7%] transform -translate-x-1/2 z-50"
    >
      <div className="bg-gradient-to-r from-[#0BC5EA] to-[#6B46C1] p-1 rounded-full shadow-2xl">
        <Button
          onClick={onRegistrationClick}
          className="bg-gradient-to-r from-[#0BC5EA] to-[#6B46C1] hover:from-[#0BC5EA]/90 hover:to-[#6B46C1]/90 text-white font-bold py-4 px-6 rounded-full text-base transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
          size="lg"
        >
          Join for Rs <span className="line-through text-gray-200">499</span> FREE
        </Button>
      </div>
    </motion.div>
  );
}
