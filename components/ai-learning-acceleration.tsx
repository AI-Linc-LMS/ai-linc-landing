"use client"

import { useRef, useEffect } from "react"
import { motion, useAnimation, useInView } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Zap, Clock, Brain, Sparkles, BarChart, LineChart, Target, Gauge } from "lucide-react"

export function AiLearningAcceleration() {
  const controls = useAnimation()
  const ref = useRef(null)
  const inView = useInView(ref, { once: true })

  useEffect(() => {
    if (inView) {
      controls.start("visible")
    }
  }, [controls, inView])

  return (
    <section className="py-12 md:py-20 relative overflow-hidden" ref={ref}>
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-8 md:mb-16"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 md:mb-4 bg-gradient-to-r from-white to-[#0BC5EA] bg-clip-text text-transparent">
            Learn 100X Faster with AI
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-foreground/80 max-w-2xl mx-auto px-2">
            Our AI-powered platform accelerates your learning journey through personalized pathways and adaptive content
          </p>
        </motion.div>

        {/* Main comparison cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-10 md:mb-16">
          {/* Traditional Learning Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={controls}
            variants={{
              visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
            }}
          >
            <Card className="bg-card/30 backdrop-blur-sm border-[#6B46C1]/20 h-full overflow-hidden relative">
              <div className="absolute top-0 right-0 size-32 md:size-64 bg-gradient-to-bl from-[#6B46C1]/10 to-transparent rounded-bl-full"></div>

              <CardContent className="p-4 sm:p-6 md:p-8">
                <div className="flex items-center mb-4 md:mb-6">
                  <div className="size-10 md:size-12 rounded-full bg-[#6B46C1]/10 flex items-center justify-center mr-3 md:mr-4">
                    <Clock className="size-5 md:size-6 text-[#6B46C1]" />
                  </div>
                  <div>
                    <Badge variant="outline" className="bg-[#6B46C1]/10 text-[#6B46C1] border-[#6B46C1]/30 mb-1 text-xs sm:text-sm">
                      Traditional Learning
                    </Badge>
                    <h3 className="text-xl md:text-2xl font-bold text-white">12+ Months</h3>
                  </div>
                </div>

                <div className="space-y-4 md:space-y-6 mb-6 md:mb-8">
                  <div className="bg-background/30 rounded-lg p-3 md:p-4 flex items-start">
                    <div className="size-7 md:size-8 rounded-full bg-[#6B46C1]/10 flex items-center justify-center mr-2 md:mr-3 mt-1 flex-shrink-0">
                      <Clock className="size-3 md:size-4 text-[#6B46C1]" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-white mb-1 text-sm md:text-base">Time-Consuming</h4>
                      <p className="text-foreground/70 text-xs md:text-sm">
                        Average 1,000+ hours to master professional AI skills
                      </p>
                    </div>
                  </div>

                  <div className="bg-background/30 rounded-lg p-3 md:p-4 flex items-start">
                    <div className="size-7 md:size-8 rounded-full bg-[#6B46C1]/10 flex items-center justify-center mr-2 md:mr-3 mt-1 flex-shrink-0">
                      <LineChart className="size-3 md:size-4 text-[#6B46C1]" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-white mb-1 text-sm md:text-base">Linear Progression</h4>
                      <p className="text-foreground/70 text-xs md:text-sm">One-size-fits-all curriculum with fixed pacing</p>
                    </div>
                  </div>

                  <div className="bg-background/30 rounded-lg p-3 md:p-4 flex items-start">
                    <div className="size-7 md:size-8 rounded-full bg-[#6B46C1]/10 flex items-center justify-center mr-2 md:mr-3 mt-1 flex-shrink-0">
                      <Target className="size-3 md:size-4 text-[#6B46C1]" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-white mb-1 text-sm md:text-base">Limited Feedback</h4>
                      <p className="text-foreground/70 text-xs md:text-sm">Delayed assessment and generic guidance</p>
                    </div>
                  </div>
                </div>

                {/* Learning Speed Visualization */}
                <div className="relative h-12 md:h-16 bg-background/20 rounded-lg overflow-hidden">
                  <div className="absolute inset-0 flex items-end">
                    <motion.div
                      className="h-0 w-full bg-gradient-to-t from-[#6B46C1]/50 to-[#6B46C1]/10"
                      animate={{ height: "60%" }}
                      transition={{ duration: 2, delay: 0.5 }}
                    />
                  </div>
                  <div className="absolute bottom-1 md:bottom-2 left-0 right-0 text-center text-[10px] md:text-xs text-foreground/60">
                    12 Months Average
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* AI-Powered Learning Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={controls}
            variants={{
              visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
            }}
          >
            <Card className="bg-card/30 backdrop-blur-sm border-[#0BC5EA]/20 h-full overflow-hidden relative">
              <div className="absolute top-0 left-0 size-32 md:size-64 bg-gradient-to-br from-[#0BC5EA]/10 to-transparent rounded-br-full"></div>

              <CardContent className="p-4 sm:p-6 md:p-8">
                <div className="flex items-center mb-4 md:mb-6">
                  <div className="size-10 md:size-12 rounded-full bg-[#0BC5EA]/10 flex items-center justify-center mr-3 md:mr-4">
                    <Zap className="size-5 md:size-6 text-[#0BC5EA]" />
                  </div>
                  <div>
                    <Badge variant="outline" className="bg-[#0BC5EA]/10 text-[#0BC5EA] border-[#0BC5EA]/30 mb-1 text-xs sm:text-sm">
                      AI-Powered Learning
                    </Badge>
                    <h3 className="text-xl md:text-2xl font-bold text-white">Just 111 Days</h3>
                  </div>
                </div>

                <div className="space-y-4 md:space-y-6 mb-6 md:mb-8">
                  <div className="bg-background/30 rounded-lg p-3 md:p-4 flex items-start">
                    <div className="size-7 md:size-8 rounded-full bg-[#0BC5EA]/10 flex items-center justify-center mr-2 md:mr-3 mt-1 flex-shrink-0">
                      <Zap className="size-3 md:size-4 text-[#0BC5EA]" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-white mb-1 text-sm md:text-base">Ultra-Efficient</h4>
                      <p className="text-foreground/70 text-xs md:text-sm">Master professional AI skills in just 111 days</p>
                    </div>
                  </div>

                  <div className="bg-background/30 rounded-lg p-3 md:p-4 flex items-start">
                    <div className="size-7 md:size-8 rounded-full bg-[#0BC5EA]/10 flex items-center justify-center mr-2 md:mr-3 mt-1 flex-shrink-0">
                      <Brain className="size-3 md:size-4 text-[#0BC5EA]" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-white mb-1 text-sm md:text-base">Adaptive Learning</h4>
                      <p className="text-foreground/70 text-xs md:text-sm">Personalized curriculum that adapts to your progress</p>
                    </div>
                  </div>

                  <div className="bg-background/30 rounded-lg p-3 md:p-4 flex items-start">
                    <div className="size-7 md:size-8 rounded-full bg-[#0BC5EA]/10 flex items-center justify-center mr-2 md:mr-3 mt-1 flex-shrink-0">
                      <Sparkles className="size-3 md:size-4 text-[#0BC5EA]" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-white mb-1 text-sm md:text-base">Real-time Feedback</h4>
                      <p className="text-foreground/70 text-xs md:text-sm">Instant assessment and personalized guidance</p>
                    </div>
                  </div>
                </div>

                {/* Learning Speed Visualization */}
                <div className="relative h-12 md:h-16 bg-background/20 rounded-lg overflow-hidden">
                  <div className="absolute inset-0 flex items-end">
                    <motion.div
                      className="h-0 w-full bg-gradient-to-t from-[#0BC5EA]/50 to-[#0BC5EA]/10"
                      animate={{ height: "100%" }}
                      transition={{ duration: 1, delay: 0.5 }}
                    />
                  </div>
                  <div className="absolute bottom-1 md:bottom-2 left-0 right-0 text-center text-[10px] md:text-xs text-foreground/60">
                    111 Days with AI LINC
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* 100X Acceleration Visualization */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={controls}
          variants={{
            visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay: 0.2 } },
          }}
          className="mb-10 md:mb-16"
        >
          <Card className="bg-card/30 backdrop-blur-sm border-[#0BC5EA]/20 overflow-hidden">
            <CardContent className="p-4 sm:p-6 md:p-8">
              <div className="flex items-center justify-center mb-6 md:mb-8">
                <div className="text-center">
                  <h3 className="text-xl md:text-2xl font-bold text-white mb-2">The 100X Acceleration Factor</h3>
                  <p className="text-foreground/70 text-sm md:text-base max-w-2xl">
                    Our AI-powered platform combines multiple acceleration factors to dramatically speed up your
                    learning
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-6 md:mb-8">
                <div className="bg-background/30 rounded-lg p-3 md:p-4 text-center">
                  <div className="size-10 md:size-12 rounded-full bg-[#0BC5EA]/10 flex items-center justify-center mx-auto mb-2 md:mb-3">
                    <Target className="size-5 md:size-6 text-[#0BC5EA]" />
                  </div>
                  <div className="text-xl md:text-2xl font-bold bg-gradient-to-r from-[#0BC5EA] to-[#6B46C1] bg-clip-text text-transparent mb-1">
                    10X
                  </div>
                  <div className="text-xs md:text-sm font-medium text-white mb-1">Personalization</div>
                  <div className="text-[10px] md:text-xs text-foreground/60">Content tailored to your learning style</div>
                </div>

                <div className="bg-background/30 rounded-lg p-3 md:p-4 text-center">
                  <div className="size-10 md:size-12 rounded-full bg-[#6B46C1]/10 flex items-center justify-center mx-auto mb-2 md:mb-3">
                    <Gauge className="size-5 md:size-6 text-[#6B46C1]" />
                  </div>
                  <div className="text-xl md:text-2xl font-bold bg-gradient-to-r from-[#6B46C1] to-[#0BC5EA] bg-clip-text text-transparent mb-1">
                    5X
                  </div>
                  <div className="text-xs md:text-sm font-medium text-white mb-1">Efficiency</div>
                  <div className="text-[10px] md:text-xs text-foreground/60">Optimized learning paths</div>
                </div>

                <div className="bg-background/30 rounded-lg p-3 md:p-4 text-center">
                  <div className="size-10 md:size-12 rounded-full bg-[#0BC5EA]/10 flex items-center justify-center mx-auto mb-2 md:mb-3">
                    <Sparkles className="size-5 md:size-6 text-[#0BC5EA]" />
                  </div>
                  <div className="text-xl md:text-2xl font-bold bg-gradient-to-r from-[#0BC5EA] to-[#6B46C1] bg-clip-text text-transparent mb-1">
                    4X
                  </div>
                  <div className="text-xs md:text-sm font-medium text-white mb-1">Retention</div>
                  <div className="text-[10px] md:text-xs text-foreground/60">Enhanced memory techniques</div>
                </div>

                <div className="bg-background/30 rounded-lg p-3 md:p-4 text-center">
                  <div className="size-10 md:size-12 rounded-full bg-[#6B46C1]/10 flex items-center justify-center mx-auto mb-2 md:mb-3">
                    <Brain className="size-5 md:size-6 text-[#6B46C1]" />
                  </div>
                  <div className="text-xl md:text-2xl font-bold bg-gradient-to-r from-[#6B46C1] to-[#0BC5EA] bg-clip-text text-transparent mb-1">
                    2.5X
                  </div>
                  <div className="text-xs md:text-sm font-medium text-white mb-1">Application</div>
                  <div className="text-[10px] md:text-xs text-foreground/60">Immediate practical use</div>
                </div>
              </div>

              <div className="flex justify-center">
                <div className="bg-gradient-to-r from-[#0BC5EA]/10 to-[#6B46C1]/10 rounded-xl p-4 md:p-6 max-w-md text-center w-full">
                  <div className="text-2xl sm:text-3xl md:text-4xl font-bold bg-gradient-to-r from-[#0BC5EA] via-[#6B46C1] to-[#0BC5EA] bg-clip-text text-transparent mb-2">
                    100X Faster Learning
                  </div>
                  <div className="text-xs sm:text-sm text-foreground/70 max-w-sm mx-auto">
                    Our AI-powered platform combines these acceleration factors to deliver results in a fraction of the
                    time
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* AI Learning Features */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={controls}
            variants={{
              visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.1 } },
            }}
            className="group"
          >
            <Card className="bg-card/30 backdrop-blur-sm border-[#0BC5EA]/20 h-full group-hover:shadow-[0_0_30px_rgba(11,197,234,0.2)] transition-all duration-500">
              <CardContent className="p-4 md:p-6">
                <div className="size-12 md:size-16 rounded-full bg-[#0BC5EA]/10 flex items-center justify-center mb-4 md:mb-6 group-hover:bg-[#0BC5EA]/20 transition-all duration-300">
                  <Brain className="size-6 md:size-8 text-[#0BC5EA]" />
                </div>
                <h3 className="text-lg md:text-xl font-bold mb-2 md:mb-3 text-white group-hover:text-[#0BC5EA] transition-colors duration-300">
                  Adaptive Learning Engine
                </h3>
                <p className="text-sm md:text-base text-foreground/70">
                  Our AI continuously analyzes your learning patterns and adapts content to optimize your progress
                </p>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={controls}
            variants={{
              visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.2 } },
            }}
            className="group"
          >
            <Card className="bg-card/30 backdrop-blur-sm border-[#6B46C1]/20 h-full group-hover:shadow-[0_0_30px_rgba(107,70,193,0.2)] transition-all duration-500">
              <CardContent className="p-4 md:p-6">
                <div className="size-12 md:size-16 rounded-full bg-[#6B46C1]/10 flex items-center justify-center mb-4 md:mb-6 group-hover:bg-[#6B46C1]/20 transition-all duration-300">
                  <Sparkles className="size-6 md:size-8 text-[#6B46C1]" />
                </div>
                <h3 className="text-lg md:text-xl font-bold mb-2 md:mb-3 text-white group-hover:text-[#6B46C1] transition-colors duration-300">
                  Real-time Feedback Loop
                </h3>
                <p className="text-sm md:text-base text-foreground/70">
                  Receive instant, personalized feedback that accelerates your learning and skill development
                </p>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={controls}
            variants={{
              visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.3 } },
            }}
            className="group"
          >
            <Card className="bg-card/30 backdrop-blur-sm border-[#0BC5EA]/20 h-full group-hover:shadow-[0_0_30px_rgba(11,197,234,0.2)] transition-all duration-500">
              <CardContent className="p-4 md:p-6">
                <div className="size-12 md:size-16 rounded-full bg-[#0BC5EA]/10 flex items-center justify-center mb-4 md:mb-6 group-hover:bg-[#0BC5EA]/20 transition-all duration-300">
                  <BarChart className="size-6 md:size-8 text-[#0BC5EA]" />
                </div>
                <h3 className="text-lg md:text-xl font-bold mb-2 md:mb-3 text-white group-hover:text-[#0BC5EA] transition-colors duration-300">
                  Progress Analytics
                </h3>
                <p className="text-sm md:text-base text-foreground/70">
                  Detailed insights into your learning journey with actionable recommendations for improvement
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>

      {/* Background glow effects */}
      <div className="absolute top-1/3 left-1/4 size-64 md:size-96 bg-[#0BC5EA]/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/3 right-1/4 size-64 md:size-96 bg-[#6B46C1]/5 rounded-full blur-3xl"></div>
    </section>
  )
}
