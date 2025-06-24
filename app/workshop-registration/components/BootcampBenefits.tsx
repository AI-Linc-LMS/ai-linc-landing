import { motion } from "framer-motion"

export function BootcampBenefits() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="mt-8 p-6 bg-background/30 rounded-xl border border-[#0BC5EA]/20 text-center"
    >
      <h2 className="text-2xl font-bold text-[#0BC5EA] mb-4">
        Join the FREE Bootcamp
      </h2>
      <p className="text-lg text-foreground/80 mb-4">
        Your AI skills will be assessed, and shortlisted candidates will get interview opportunities.
      </p>
      <h3 className="text-xl font-semibold text-white mb-4">What's in it for you?</h3>
      <ul className="space-y-3 text-foreground/80 max-w-md mx-auto">
        <li className="flex items-start gap-3">
          <span className="text-green-500 mt-1">✅</span>
          <span>Introduction to Agentic AI & No-Code Development</span>
        </li>
        <li className="flex items-start gap-3">
          <span className="text-green-500 mt-1">✅</span>
          <span>Overview of the AI Consulting Model</span>
        </li>
        <li className="flex items-start gap-3">
          <span className="text-green-500 mt-1">✅</span>
          <span>Skill Assessment & Placement Process</span>
        </li>
        <li className="flex items-start gap-3">
          <span className="text-green-500 mt-1">✅</span>
          <span>Real hiring opportunities – no more random job hunts!</span>
        </li>
      </ul>
    </motion.div>
  )
} 