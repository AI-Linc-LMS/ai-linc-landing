"use client"

import { motion } from "framer-motion"
import { ArrowUpRight } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export function ResultsSection() {
  const stats = [
    { value: "94%", label: "Job Placement Rate" },
    { value: "3.2x", label: "Average Salary Increase" },
    { value: "100+", label: "Partner Companies" },
    { value: "4.9/5", label: "Student Satisfaction" },
  ]

  const outcomes = [
    {
      title: "AI Prompt Engineer",
      description: "Design and optimize prompts for AI systems to generate specific outputs.",
      salary: "₹12L - ₹15L",
    },
    {
      title: "AI Application Developer",
      description: "Build applications that leverage AI capabilities for business solutions.",
      salary: "₹14L - ₹17L",
    },
    {
      title: "AI Product Manager",
      description: "Lead AI product development from conception to market launch.",
      salary: "₹15L - ₹18L",
    },
    {
      title: "AI Consultant",
      description: "Advise organizations on implementing AI solutions for business problems.",
      salary: "₹18L - ₹25L",
    },
  ]

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  }

  return (
    <section className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-white to-[#0BC5EA] bg-clip-text text-transparent">
            Results & Outcomes
          </h2>
          <p className="text-xl text-foreground/80 max-w-2xl mx-auto">
            Our graduates achieve remarkable career transformations through our proven program methodology.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
        >
          {stats.map((stat, index) => (
            <motion.div key={index} variants={item}>
              <Card className="bg-card/50 backdrop-blur-sm border-[#0BC5EA]/20 rounded-xl p-6 text-center hover:shadow-[0_0_30px_rgba(11,197,234,0.2)] transition-all duration-500">
                <CardContent className="p-0">
                  <div className="text-3xl md:text-4xl font-bold mb-2 bg-gradient-to-r from-[#0BC5EA] to-[#6B46C1] bg-clip-text text-transparent">
                    {stat.value}
                  </div>
                  <div className="text-foreground/80">{stat.label}</div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {outcomes.map((outcome, index) => (
            <motion.div key={index} variants={item}>
              <Card className="bg-card/50 backdrop-blur-sm border-[#0BC5EA]/20 rounded-xl group hover:shadow-[0_0_30px_rgba(11,197,234,0.2)] transition-all duration-500 relative overflow-hidden">
                <div className="absolute top-0 right-0 size-24 bg-gradient-to-br from-[#0BC5EA]/10 to-[#6B46C1]/10 rounded-bl-full opacity-50 group-hover:opacity-80 transition-opacity duration-500"></div>
                <CardHeader>
                  <CardTitle className="text-xl font-bold group-hover:text-[#0BC5EA] transition-colors duration-300">
                    {outcome.title}
                  </CardTitle>
                  <CardDescription className="text-foreground/80">{outcome.description}</CardDescription>
                </CardHeader>
                <CardContent className="pt-0">
                  <div className="flex items-center justify-between">
                    <div className="text-[#0BC5EA] font-semibold">{outcome.salary}</div>
                    <div className="size-8 rounded-full bg-[#0BC5EA]/10 flex items-center justify-center group-hover:bg-[#0BC5EA]/20 transition-all duration-300">
                      <ArrowUpRight className="size-4 text-[#0BC5EA]" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Background glow effects */}
      <div className="absolute top-1/3 left-1/4 size-96 bg-[#0BC5EA]/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/3 right-1/4 size-96 bg-[#6B46C1]/5 rounded-full blur-3xl"></div>
    </section>
  )
}
