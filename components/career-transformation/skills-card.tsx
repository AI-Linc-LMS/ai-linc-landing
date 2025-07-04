import { useRef, useEffect } from "react"
import { motion, useAnimation, useInView } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { SkillBar } from "./skill-bar"
import { SkillsCardProps } from "./types"

export const SkillsCard = ({
  title,
  badge,
  skills,
  salary,
  salaryDescription,
  icon: Icon,
  iconColor,
  badgeColor,
  borderColor,
  gradient = false,
  animationDirection,
}: SkillsCardProps) => {
  const controls = useAnimation()
  const ref = useRef(null)
  const inView = useInView(ref, { once: true })

  useEffect(() => {
    if (inView) {
      controls.start("visible")
    }
  }, [controls, inView])

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: animationDirection === "left" ? -50 : 50 }}
      animate={controls}
      variants={{
        visible: { opacity: 1, x: 0, transition: { duration: 0.8 } },
      }}
    >
      <Card className={`bg-card/30 backdrop-blur-sm border-${borderColor}/20 overflow-hidden h-full`}>
        <CardContent className="p-6">
          <div className="flex items-center mb-6">
            <div className={`size-10 rounded-full bg-${iconColor}/10 flex items-center justify-center mr-3`}>
              <Icon className={`size-5 text-${iconColor}`} />
            </div>
            <div>
              <Badge variant="outline" className={`bg-${badgeColor}/10 text-${badgeColor} border-${badgeColor}/30 mb-1`}>
                {badge}
              </Badge>
              <h3 className="text-xl font-bold text-white">{title}</h3>
            </div>
          </div>

          <div className="space-y-4">
            {skills.map((skill, index) => (
              <SkillBar key={skill.name} skill={skill} index={index} gradient={gradient} />
            ))}
          </div>

          <div className="mt-8 p-4 bg-background/30 rounded-lg">
            <div className="flex items-center mb-2">
              <span className={`text-${iconColor} mr-2 text-sm font-${gradient ? 'bold' : 'medium'}`}>₹</span>
              <div className="text-sm font-medium">Average Salary</div>
            </div>
            <div className="text-2xl font-bold mb-1">{salary}</div>
            <div className="text-xs text-foreground/60">{salaryDescription}</div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )
} 