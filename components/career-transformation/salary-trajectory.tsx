import { useRef, useEffect } from "react"
import { motion, useAnimation, useInView } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { TrendingUp } from "lucide-react"
import { SALARY_MILESTONES, CAREER_PATHS } from "./data"

export const SalaryTrajectory = () => {
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
      initial={{ opacity: 0, y: 30 }}
      animate={controls}
      variants={{
        visible: { opacity: 1, y: 0, transition: { duration: 0.8, delay: 0.2 } },
      }}
      className="mb-16"
    >
      <Card className="bg-card/30 backdrop-blur-sm border-[#0BC5EA]/20 overflow-hidden">
        <CardContent className="p-6">
          <div className="flex items-center mb-6">
            <div className="size-10 rounded-full bg-[#0BC5EA]/10 flex items-center justify-center mr-3">
              <TrendingUp className="size-5 text-[#0BC5EA]" />
            </div>
            <h3 className="text-xl font-bold text-white">Career Trajectory</h3>
          </div>

          <div className="relative h-64 bg-background/20 rounded-lg overflow-hidden mb-6">
            {/* Salary growth bars */}
            <div className="absolute inset-x-0 bottom-0 h-full flex items-end">
              {SALARY_MILESTONES.map((milestone, index) => (
                <motion.div
                  key={milestone.label}
                  className={`w-1/5 rounded-t ${
                    index < 2 
                      ? "bg-[#6B46C1]/50" 
                      : "bg-gradient-to-t from-[#6B46C1] to-[#0BC5EA]"
                  }`}
                  style={{ height: milestone.position.height }}
                  initial={{ height: 0 }}
                  animate={{ height: milestone.position.height }}
                  transition={{ duration: 1, delay: 0.2 * index }}
                />
              ))}
            </div>

            {/* Timeline labels */}
            {SALARY_MILESTONES.map((milestone, index) => (
              <div key={`label-${index}`}>
                <div 
                  className="absolute bottom-2 text-[10px] md:text-xs text-center text-foreground/60 transform -translate-x-1/2"
                  style={{ left: milestone.position.left }}
                >
                  <div className="whitespace-nowrap">{milestone.label.split(' ')[0]}</div>
                  <div className="whitespace-nowrap">{milestone.label.split(' ')[1] || ''}</div>
                </div>
                <div 
                  className="absolute text-[10px] md:text-xs text-white font-medium transform -translate-x-1/2 -translate-y-full"
                  style={{ 
                    left: milestone.position.left, 
                    top: `${100 - parseInt(milestone.position.height)}%` 
                  }}
                >
                  {milestone.salary}
                </div>
              </div>
            ))}

            {/* Connecting line */}
            <svg className="absolute inset-0 w-full h-full" style={{ zIndex: 1 }}>
              <motion.path
                d="M 10% 70% Q 20% 60%, 30% 55% T 50% 35% T 70% 20% T 90% 5%"
                stroke="url(#salaryGradient)"
                strokeWidth="2"
                fill="none"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 1.5, delay: 1 }}
              />
              <defs>
                <linearGradient id="salaryGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#6B46C1" />
                  <stop offset="100%" stopColor="#0BC5EA" />
                </linearGradient>
              </defs>
            </svg>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {CAREER_PATHS.map((path, index) => (
              <motion.div
                key={path.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 * index }}
                className="bg-background/30 rounded-lg p-3 sm:p-4"
              >
                <div className="flex items-start mb-2">
                  <div className="size-6 sm:size-8 rounded-full bg-[#0BC5EA]/10 flex items-center justify-center mr-2 flex-shrink-0 mt-0.5">
                    <path.icon className="size-3 sm:size-4 text-[#0BC5EA]" />
                  </div>
                  <div className="text-xs sm:text-sm font-medium leading-tight">{path.title}</div>
                </div>
                <div className="text-[10px] sm:text-xs text-foreground/60 mb-2 ml-8 sm:ml-10">{path.company}</div>
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-1 sm:gap-0 ml-8 sm:ml-10">
                  <div className="text-xs sm:text-sm font-bold">{path.salary}</div>
                  <Badge variant="outline" className="bg-[#0BC5EA]/10 text-[#0BC5EA] border-[#0BC5EA]/30 text-[10px] sm:text-xs px-1.5 py-0.5 w-fit">
                    {path.growth}
                  </Badge>
                </div>
              </motion.div>
            ))}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )
} 