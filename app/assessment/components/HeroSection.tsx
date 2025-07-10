"use client"

import { motion, Variants } from "framer-motion"
import { Zap } from "lucide-react"
import { 
  SiGoogle, 
  SiAmazon, 
  SiMeta, 
  SiNetflix, 
  SiApple 
} from "react-icons/si"
import { FaMicrosoft } from "react-icons/fa"

interface HeroSectionProps {
  containerVariants: Variants
  itemVariants: Variants
}

export function HeroSection({ containerVariants, itemVariants }: HeroSectionProps) {
  const companyLogos = [
    { name: "Microsoft", icon: FaMicrosoft, color: "#00BCF2" },
    { name: "Apple", icon: SiApple, color: "#A2AAAD" },
    { name: "Amazon", icon: SiAmazon, color: "#FF9900" },
    { name: "Netflix", icon: SiNetflix, color: "#E50914" },
    { name: "Meta", icon: SiMeta, color: "#1877F2" },
    { name: "Google", icon: SiGoogle, color: "#4285F4" }
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
              className="rounded-lg p-4 flex flex-col items-center justify-center h-20 w-20 mx-auto cursor-pointer transform transition-transform hover:scale-110 bg-card group"
              variants={itemVariants}
              whileHover={{ scale: 1.1, rotate: 5 }}
              whileTap={{ scale: 0.95 }}
            >
              <company.icon className="w-8 h-8" style={{ color: company.color }} />
              <span
                className="mt-2 text-xs font-medium text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-center"
              >
                {company.name}
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