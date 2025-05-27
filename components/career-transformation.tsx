"use client"

import { useRef, useEffect } from "react"
import { motion, useAnimation, useInView } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { TrendingUp, Briefcase, Award, Building, DollarSign, BarChart } from "lucide-react"

export function CareerTransformation() {
  const controls = useAnimation()
  const ref = useRef(null)
  const inView = useInView(ref, { once: true })

  useEffect(() => {
    if (inView) {
      controls.start("visible")
    }
  }, [controls, inView])

  const beforeSkills = [
    { name: "AI Fundamentals", level: 20 },
    { name: "Prompt Engineering", level: 10 },
    { name: "AI Tools", level: 15 },
    { name: "Data Analysis", level: 30 },
    { name: "Business Applications", level: 25 },
  ]

  const afterSkills = [
    { name: "AI Fundamentals", level: 90 },
    { name: "Prompt Engineering", level: 95 },
    { name: "AI Tools", level: 85 },
    { name: "Data Analysis", level: 80 },
    { name: "Business Applications", level: 85 },
  ]

  const careerPaths = [
    {
      title: "AI Prompt Engineer",
      company: "Tech Companies",
      salary: "₹12L - ₹15L",
      growth: "+85%",
      icon: Building,
    },
    {
      title: "AI Application Developer",
      company: "Software Companies",
      salary: "₹15L - ₹20L",
      growth: "+72%",
      icon: Building,
    },
    {
      title: "AI Product Manager",
      company: "Product Companies",
      salary: "₹18L - ₹20L",
      growth: "+65%",
      icon: Building,
    },
    {
      title: "AI Consultant",
      company: "Consulting Firms",
      salary: "₹20L - ₹25L",
      growth: "+90%",
      icon: Building,
    },
  ]

  const placementStats = [
    { company: "Google", percentage: 15 },
    { company: "Microsoft", percentage: 12 },
    { company: "Amazon", percentage: 10 },
    { company: "Meta", percentage: 8 },
    { company: "Startups", percentage: 35 },
    { company: "Consulting", percentage: 20 },
  ]

  return (
    <section className="py-20 relative overflow-hidden" ref={ref}>
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-white to-[#0BC5EA] bg-clip-text text-transparent">
            Career Transformation
          </h2>
          <p className="text-xl text-foreground/80 max-w-2xl mx-auto">
            See how our program transforms your skills and career trajectory in just 111 days
          </p>
        </motion.div>

        {/* Before/After Skills Comparison */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={controls}
            variants={{
              visible: { opacity: 1, x: 0, transition: { duration: 0.8 } },
            }}
          >
            <Card className="bg-card/30 backdrop-blur-sm border-[#6B46C1]/20 overflow-hidden h-full">
              <CardContent className="p-6">
                <div className="flex items-center mb-6">
                  <div className="size-10 rounded-full bg-[#6B46C1]/10 flex items-center justify-center mr-3">
                    <Briefcase className="size-5 text-[#6B46C1]" />
                  </div>
                  <div>
                    <Badge variant="outline" className="bg-[#6B46C1]/10 text-[#6B46C1] border-[#6B46C1]/30 mb-1">
                      Before
                    </Badge>
                    <h3 className="text-xl font-bold text-white">Starting Point</h3>
                  </div>
                </div>

                <div className="space-y-4">
                  {beforeSkills.map((skill, index) => (
                    <div key={index}>
                      <div className="flex justify-between mb-1">
                        <div className="text-sm font-medium">{skill.name}</div>
                        <div className="text-sm text-foreground/60">{skill.level}%</div>
                      </div>
                      <div className="w-full h-2 bg-background/50 rounded-full overflow-hidden">
                        <motion.div
                          className="h-full bg-[#6B46C1]/50"
                          initial={{ width: 0 }}
                          animate={{ width: `${skill.level}%` }}
                          transition={{ duration: 1, delay: 0.1 * index }}
                        />
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-8 p-4 bg-background/30 rounded-lg">
                  <div className="flex items-center mb-2">
                    <DollarSign className="size-4 text-[#6B46C1] mr-2" />
                    <div className="text-sm font-medium">Average Salary</div>
                  </div>
                  <div className="text-2xl font-bold mb-1">₹8-12L</div>
                  <div className="text-xs text-foreground/60">Entry-level positions with limited growth</div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={controls}
            variants={{
              visible: { opacity: 1, x: 0, transition: { duration: 0.8 } },
            }}
          >
            <Card className="bg-card/30 backdrop-blur-sm border-[#0BC5EA]/20 overflow-hidden h-full">
              <CardContent className="p-6">
                <div className="flex items-center mb-6">
                  <div className="size-10 rounded-full bg-[#0BC5EA]/10 flex items-center justify-center mr-3">
                    <Award className="size-5 text-[#0BC5EA]" />
                  </div>
                  <div>
                    <Badge variant="outline" className="bg-[#0BC5EA]/10 text-[#0BC5EA] border-[#0BC5EA]/30 mb-1">
                      After
                    </Badge>
                    <h3 className="text-xl font-bold text-white">AI LINC Graduate</h3>
                  </div>
                </div>

                <div className="space-y-4">
                  {afterSkills.map((skill, index) => (
                    <div key={index}>
                      <div className="flex justify-between mb-1">
                        <div className="text-sm font-medium">{skill.name}</div>
                        <div className="text-sm text-foreground/60">{skill.level}%</div>
                      </div>
                      <div className="w-full h-2 bg-background/50 rounded-full overflow-hidden">
                        <motion.div
                          className="h-full bg-gradient-to-r from-[#0BC5EA] to-[#6B46C1]"
                          initial={{ width: 0 }}
                          animate={{ width: `${skill.level}%` }}
                          transition={{ duration: 1, delay: 0.1 * index }}
                        />
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-8 p-4 bg-background/30 rounded-lg">
                  <div className="flex items-center mb-2">
                    <DollarSign className="size-4 text-[#0BC5EA] mr-2" />
                    <div className="text-sm font-medium">Average Salary</div>
                  </div>
                  <div className="text-2xl font-bold mb-1">₹20-25L</div>
                  <div className="text-xs text-foreground/60">Premium positions with rapid growth potential</div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* Salary/Career Trajectory */}
        <motion.div
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
                {/* Salary growth visualization */}
                <div className="absolute inset-x-0 bottom-0 h-full flex items-end">
                  <motion.div
                    className="w-1/5 h-[30%] bg-[#6B46C1]/50 rounded-t"
                    initial={{ height: 0 }}
                    animate={{ height: "30%" }}
                    transition={{ duration: 1 }}
                  />
                  <motion.div
                    className="w-1/5 h-[45%] bg-[#6B46C1]/60 rounded-t"
                    initial={{ height: 0 }}
                    animate={{ height: "45%" }}
                    transition={{ duration: 1, delay: 0.2 }}
                  />
                  <motion.div
                    className="w-1/5 h-[65%] bg-gradient-to-t from-[#6B46C1] to-[#0BC5EA]/70 rounded-t"
                    initial={{ height: 0 }}
                    animate={{ height: "65%" }}
                    transition={{ duration: 1, delay: 0.4 }}
                  />
                  <motion.div
                    className="w-1/5 h-[80%] bg-gradient-to-t from-[#6B46C1] to-[#0BC5EA]/80 rounded-t"
                    initial={{ height: 0 }}
                    animate={{ height: "80%" }}
                    transition={{ duration: 1, delay: 0.6 }}
                  />
                  <motion.div
                    className="w-1/5 h-[95%] bg-gradient-to-t from-[#6B46C1] to-[#0BC5EA] rounded-t"
                    initial={{ height: 0 }}
                    animate={{ height: "95%" }}
                    transition={{ duration: 1, delay: 0.8 }}
                  />
                </div>

                {/* Labels */}
                <div className="absolute bottom-2 left-[10%] text-xs text-center text-foreground/60">
                  Entry
                  <br />
                  Level
                </div>
                <div className="absolute bottom-2 left-[30%] text-xs text-center text-foreground/60">
                  1 Year
                  <br />
                  After
                </div>
                <div className="absolute bottom-2 left-[50%] text-xs text-center text-foreground/60 transform -translate-x-1/2">
                  2 Years
                  <br />
                  After
                </div>
                <div className="absolute bottom-2 left-[70%] text-xs text-center text-foreground/60">
                  3 Years
                  <br />
                  After
                </div>
                <div className="absolute bottom-2 left-[90%] text-xs text-center text-foreground/60 transform -translate-x-1/2">
                  5 Years
                  <br />
                  After
                </div>

                {/* Salary labels */}
                <div className="absolute top-[70%] left-[10%] text-xs text-white font-medium transform -translate-y-full">
                  ₹5L
                </div>
                <div className="absolute top-[55%] left-[30%] text-xs text-white font-medium transform -translate-y-full">
                  ₹8L
                </div>
                <div className="absolute top-[35%] left-[50%] text-xs text-white font-medium transform -translate-x-1/2 -translate-y-full">
                  ₹12L
                </div>
                <div className="absolute top-[20%] left-[70%] text-xs text-white font-medium transform -translate-y-full">
                  ₹18L
                </div>
                <div className="absolute top-[5%] left-[90%] text-xs text-white font-medium transform -translate-x-1/2 -translate-y-full">
                  ₹25L+
                </div>

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

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {careerPaths.map((path, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 * index }}
                    className="bg-background/30 rounded-lg p-4"
                  >
                    <div className="flex items-center mb-2">
                      <div className="size-8 rounded-full bg-[#0BC5EA]/10 flex items-center justify-center mr-2">
                        <path.icon className="size-4 text-[#0BC5EA]" />
                      </div>
                      <div className="text-sm font-medium">{path.title}</div>
                    </div>
                    <div className="text-xs text-foreground/60 mb-1">{path.company}</div>
                    <div className="flex justify-between items-center">
                      <div className="text-sm font-bold">{path.salary}</div>
                      <Badge variant="outline" className="bg-[#0BC5EA]/10 text-[#0BC5EA] border-[#0BC5EA]/30">
                        {path.growth}
                      </Badge>
                    </div>
                  </motion.div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Industry Placement */}
        <motion.div
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
                    {placementStats.map((stat, index) => (
                      <div key={index}>
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
                  <motion.div
                    className="absolute top-1/4 left-0 transform -translate-x-1/2"
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                  >
                    <div className="size-12 rounded-full bg-card/70 backdrop-blur-sm border border-[#0BC5EA]/30 flex items-center justify-center text-sm font-bold">
                      G
                    </div>
                  </motion.div>

                  <motion.div
                    className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.7 }}
                  >
                    <div className="size-12 rounded-full bg-card/70 backdrop-blur-sm border border-[#6B46C1]/30 flex items-center justify-center text-sm font-bold">
                      M
                    </div>
                  </motion.div>

                  <motion.div
                    className="absolute top-1/4 right-0 transform translate-x-1/2"
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.9 }}
                  >
                    <div className="size-12 rounded-full bg-card/70 backdrop-blur-sm border border-[#0BC5EA]/30 flex items-center justify-center text-sm font-bold">
                      A
                    </div>
                  </motion.div>

                  <motion.div
                    className="absolute bottom-1/4 right-0 transform translate-x-1/2"
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 1.1 }}
                  >
                    <div className="size-12 rounded-full bg-card/70 backdrop-blur-sm border border-[#6B46C1]/30 flex items-center justify-center text-sm font-bold">
                      F
                    </div>
                  </motion.div>

                  <motion.div
                    className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2"
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 1.3 }}
                  >
                    <div className="size-12 rounded-full bg-card/70 backdrop-blur-sm border border-[#0BC5EA]/30 flex items-center justify-center text-sm font-bold">
                      S
                    </div>
                  </motion.div>

                  <motion.div
                    className="absolute bottom-1/4 left-0 transform -translate-x-1/2"
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 1.5 }}
                  >
                    <div className="size-12 rounded-full bg-card/70 backdrop-blur-sm border border-[#6B46C1]/30 flex items-center justify-center text-sm font-bold">
                      C
                    </div>
                  </motion.div>

                  {/* Connection lines */}
                  <svg className="absolute inset-0 w-full h-full" style={{ zIndex: -1 }}>
                    {[0, 1, 2, 3, 4, 5].map((i) => (
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
      </div>

      {/* Background glow effects */}
      <div className="absolute top-1/3 left-1/4 size-96 bg-[#0BC5EA]/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/3 right-1/4 size-96 bg-[#6B46C1]/5 rounded-full blur-3xl"></div>
    </section>
  )
}
