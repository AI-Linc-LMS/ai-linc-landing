"use client"

import { motion, Variants } from "framer-motion"
import { Zap } from "lucide-react"

interface HeroSectionProps {
  containerVariants: Variants
  itemVariants: Variants
}

export function HeroSection({ containerVariants, itemVariants }: HeroSectionProps) {
  const companyLogos = [
    { name: "Microsoft", color: "bg-blue-600", initial: "MS" },
    { name: "Apple", color: "bg-gray-800", initial: "🍎" },
    { name: "Amazon", color: "bg-orange-500", initial: "A" },
    { name: "Netflix", color: "bg-red-600", initial: "N" },
    { name: "Meta", color: "bg-blue-500", initial: "M" },
    { name: "Google", color: "bg-green-500", initial: "G" }
  ]

  return (
    <motion.div className="space-y-8" variants={itemVariants}>
      <div className="space-y-6">
        <motion.h1 
          className="text-4xl lg:text-6xl font-bold bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent leading-tight"
          variants={itemVariants}
        >
          Unlock Placements with One Test
        </motion.h1>
        
        {/* Company Logos Grid */}
        <motion.div 
          className="grid grid-cols-3 gap-4 max-w-md"
          variants={containerVariants}
        >
          {companyLogos.map((company, index) => (
            <motion.div
              key={index}
              className={`${company.color} rounded-lg p-4 flex items-center justify-center h-16 w-16 mx-auto cursor-pointer transform transition-transform hover:scale-110`}
              variants={itemVariants}
              whileHover={{ scale: 1.1, rotate: 5 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="text-white font-bold text-sm">
                {company.initial}
              </span>
            </motion.div>
          ))}
        </motion.div>

        <motion.div 
          className="flex items-center gap-2 text-green-400"
          variants={itemVariants}
        >
          <Zap className="w-5 h-5" />
          <span className="text-sm font-medium">
            80% of test takers get interview calls within 2 weeks!
          </span>
        </motion.div>
      </div>
    </motion.div>
  )
} 