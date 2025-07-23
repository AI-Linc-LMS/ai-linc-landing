import React from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { TimeLeft } from "./types"

interface HeroContentProps {
  timeLeft: TimeLeft
  onHireTalent: () => void
  onJoinWebinar: () => void
}

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8 } },
}

export function HeroContent({ timeLeft, onHireTalent, onJoinWebinar }: HeroContentProps) {
  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="show"
      className="md:col-span-5 text-center md:text-left"
    >
      <motion.div variants={item}>
        <Badge
          variant="outline"
          className="px-3 py-1 mb-6 bg-background/80 border-[#0BC5EA]/30 text-[#0BC5EA] text-sm font-medium"
        >
          Next Webinar:  {timeLeft.days}d {timeLeft.hours}h {timeLeft.minutes}m {timeLeft.seconds}s
        </Badge>
      </motion.div>
      
      <motion.h1
        variants={item}
        className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight bg-gradient-to-r from-white via-[#0BC5EA] to-[#6B46C1] bg-clip-text text-transparent"
      >
        Deploying the Next Generation of AI Talent into High-Impact Roles
      </motion.h1>
      
      <motion.p 
        variants={item} 
        className="text-xl text-foreground/80 mb-8 max-w-xl mx-auto md:mx-0"
      >
        We connect top AI professionals to roles that matter — full-time, part-time, freelance, or startup-backed.
      </motion.p>
      
      <motion.div 
        variants={item} 
        className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start"
      >
        <Button
          size="lg"
          className="bg-gradient-to-r from-[#0BC5EA] to-[#6B46C1] hover:opacity-90 text-white font-medium px-8 py-6 text-lg rounded-md transition-all duration-300 shadow-[0_0_20px_rgba(11,197,234,0.5)] hover:shadow-[0_0_30px_rgba(11,197,234,0.7)]"
          onClick={onHireTalent}
        >
          Hire AI Talent
        </Button>
        <Button
          size="lg"
          variant="outline"
          className="border-[#0BC5EA]/50 text-[#0BC5EA] hover:bg-[#0BC5EA]/10 font-medium px-8 py-6 text-lg rounded-md transition-all duration-300 hover:border-[#0BC5EA] hover:shadow-[0_0_20px_rgba(11,197,234,0.3)]"
          onClick={onJoinWebinar}
        >
          Join Free Webinar
        </Button>
      </motion.div>
    </motion.div>
  )
} 