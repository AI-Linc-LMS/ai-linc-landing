import { motion } from "framer-motion"
import { SkillBarProps } from "./types"

export const SkillBar = ({ skill, index, gradient = false }: SkillBarProps) => (
  <div>
    <div className="flex justify-between mb-1">
      <div className="text-sm font-medium">{skill.name}</div>
      <div className="text-sm text-foreground/60">{skill.level}%</div>
    </div>
    <div className="w-full h-2 bg-background/50 rounded-full overflow-hidden">
      <motion.div
        className={`h-full ${
          gradient 
            ? "bg-gradient-to-r from-[#0BC5EA] to-[#6B46C1]" 
            : "bg-[#6B46C1]/50"
        }`}
        initial={{ width: 0 }}
        animate={{ width: `${skill.level}%` }}
        transition={{ duration: 1, delay: 0.1 * index }}
      />
    </div>
  </div>
) 