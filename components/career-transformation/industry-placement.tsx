import { useRef, useEffect } from "react"
import { motion, useAnimation, useInView } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Building, BarChart } from "lucide-react"
import { PLACEMENT_STATS, COMPANY_POSITIONS } from "./data"

export const IndustryPlacement = () => {
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
        visible: { opacity: 1, y: 0, transition: { duration: 0.8, delay: 0.4 } },
      }}
    >
      <Card className="bg-card/30 backdrop-blur-sm border-[#6B46C1]/20 overflow-hidden">
        <CardContent className="p-6">
          <div className="flex items-center mb-6">
            <div className="size-10 rounded-full bg-[#6B46C1]/10 flex items-center justify-center mr-3">
              <Building className="size-5 text-[#6B46C1]" />
            </div>
            <h3 className="text-xl font-bold text-white">Industry Placement</h3>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <div className="text-sm font-medium text-foreground/60 mb-4">Graduate Placement Statistics</div>
              <div className="space-y-3">
                {PLACEMENT_STATS.map((stat, index) => (
                  <div key={stat.company}>
                    <div className="flex justify-between mb-1">
                      <div className="text-sm font-medium">{stat.company}</div>
                      <div className="text-sm text-foreground/60">{stat.percentage}%</div>
                    </div>
                    <div className="w-full h-2 bg-background/50 rounded-full overflow-hidden">
                      <motion.div
                        className="h-full bg-gradient-to-r from-[#6B46C1] to-[#0BC5EA]"
                        initial={{ width: 0 }}
                        animate={{ width: `${stat.percentage}%` }}
                        transition={{ duration: 1, delay: 0.1 * index }}
                      />
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-6 p-4 bg-background/30 rounded-lg">
                <div className="flex items-center mb-2">
                  <BarChart className="size-4 text-[#6B46C1] mr-2" />
                  <div className="text-sm font-medium">Job Placement Rate</div>
                </div>
                <div className="text-2xl font-bold mb-1">94%</div>
                <div className="text-xs text-foreground/60">Within 3 months of program completion</div>
              </div>
            </div>

            <div className="relative h-64 md:h-auto">
              {/* Company connections visualization */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative size-32 md:size-40">
                  <div className="absolute inset-0 rounded-full bg-gradient-to-r from-[#6B46C1]/20 to-[#0BC5EA]/20 animate-pulse"></div>
                  <div
                    className="absolute inset-2 rounded-full bg-gradient-to-r from-[#6B46C1]/30 to-[#0BC5EA]/30 animate-pulse"
                    style={{ animationDelay: "300ms" }}
                  ></div>
                  <div
                    className="absolute inset-4 rounded-full bg-gradient-to-r from-[#6B46C1]/40 to-[#0BC5EA]/40 animate-pulse"
                    style={{ animationDelay: "600ms" }}
                  ></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Building className="size-12 md:size-16 text-white" />
                  </div>
                </div>
              </div>

              {/* Company logos/badges */}
              {COMPANY_POSITIONS.map((company, index) => (
                <motion.div
                  key={company.name}
                  className="absolute transform -translate-x-1/2 -translate-y-1/2"
                  style={{
                    top: company.position.top,
                    left: company.position.left,
                    right: company.position.right,
                    bottom: company.position.bottom,
                  }}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: company.delay }}
                >
                  <div className={`size-12 rounded-full bg-card/70 backdrop-blur-sm border border-${
                    index % 2 === 0 ? '[#0BC5EA]' : '[#6B46C1]'
                  }/30 flex items-center justify-center text-sm font-bold`}>
                    {company.name}
                  </div>
                </motion.div>
              ))}

              {/* Connection lines */}
              <svg className="absolute inset-0 w-full h-full" style={{ zIndex: -1 }}>
                {Array.from({ length: 6 }).map((_, i) => (
                  <motion.line
                    key={i}
                    x1="50%"
                    y1="50%"
                    x2={`${50 + 45 * Math.cos((Math.PI * 2 * i) / 6)}%`}
                    y2={`${50 + 45 * Math.sin((Math.PI * 2 * i) / 6)}%`}
                    stroke="url(#companyGradient)"
                    strokeWidth="1"
                    strokeDasharray="3,3"
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{ pathLength: 1, opacity: 0.6 }}
                    transition={{ duration: 1, delay: 0.3 * i }}
                  />
                ))}
                <defs>
                  <linearGradient id="companyGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#6B46C1" />
                    <stop offset="100%" stopColor="#0BC5EA" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )
} 