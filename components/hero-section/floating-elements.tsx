import React from "react"
import { motion } from "framer-motion"
import { Play, Sparkles } from "lucide-react"

interface FloatingElementsProps {
  onWebinarOpen: () => void
}

export function FloatingElements({ onWebinarOpen }: FloatingElementsProps) {
  return (
    <>
      {/* Floating Action Elements */}
      <motion.div
        className="absolute -top-4 -right-4 bg-gradient-to-r from-[#0BC5EA] to-[#6B46C1] rounded-full p-3 shadow-xl cursor-pointer group"
        animate={{
          y: [0, -10, 0],
          rotate: [0, 5, 0]
        }}
        transition={{
          duration: 4,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut"
        }}
        onClick={onWebinarOpen}
        whileHover={{ scale: 1.1 }}
      >
        <Play className="w-5 h-5 text-white" />
        <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-black/80 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
          Join Webinar
        </div>
      </motion.div>

      <motion.div
        className="absolute -bottom-4 -left-4 bg-gradient-to-r from-[#6B46C1] to-[#0BC5EA] rounded-full p-3 shadow-xl"
        animate={{
          y: [0, 10, 0],
          rotate: [0, -5, 0]
        }}
        transition={{
          duration: 5,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
          delay: 2
        }}
      >
        <Sparkles className="w-5 h-5 text-white" />
      </motion.div>

      {/* Background Effects */}
      <div className="absolute top-1/4 left-1/4 size-96 bg-[#0BC5EA]/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 right-1/4 size-96 bg-[#6B46C1]/5 rounded-full blur-3xl"></div>

      {/* Floating Particles */}
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 bg-[#0BC5EA]/30 rounded-full"
          style={{
            top: `${15 + i * 12}%`,
            left: `${5 + i * 12}%`,
          }}
          animate={{
            y: [0, -30, 0],
            opacity: [0.2, 0.8, 0.2],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 4 + i,
            repeat: Number.POSITIVE_INFINITY,
            delay: i * 0.3,
          }}
        />
      ))}
    </>
  )
} 