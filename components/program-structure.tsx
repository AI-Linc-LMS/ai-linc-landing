"use client"

import { motion } from "framer-motion"
import { BookOpen, Briefcase } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export function ProgramStructure() {
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
    <section id="program" className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-white to-[#0BC5EA] bg-clip-text text-transparent">
            Program Structure
          </h2>
          <p className="text-xl text-foreground/80 max-w-2xl mx-auto">
            Our carefully designed 111-day journey transforms beginners into AI-skilled professionals through structured
            learning and real-world experience.
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline connector */}
          <div className="absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-[#0BC5EA] to-[#6B46C1] transform -translate-y-1/2 opacity-30"></div>

          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 gap-8 relative"
          >
            <motion.div variants={item} className="relative">
              <div className="absolute top-1/2 right-0 size-6 bg-[#0BC5EA] rounded-full transform -translate-y-1/2 translate-x-1/2 z-20 shadow-[0_0_15px_rgba(11,197,234,0.7)]"></div>
              <Card className="bg-card/50 backdrop-blur-sm border-[#0BC5EA]/30 rounded-xl hover:shadow-[0_0_30px_rgba(11,197,234,0.2)] transition-all duration-500 h-full group">
                <CardHeader className="pb-2">
                  <div className="flex items-center mb-2">
                    <div className="size-12 rounded-full bg-[#0BC5EA]/10 flex items-center justify-center mr-4">
                      <BookOpen className="size-6 text-[#0BC5EA]" />
                    </div>
                    <Badge variant="outline" className="bg-[#0BC5EA]/10 text-[#0BC5EA] border-[#0BC5EA]/30">
                      21 Days
                    </Badge>
                  </div>
                  <CardTitle className="text-xl font-semibold text-white">
                    AI & Prompt Engineering Foundations
                  </CardTitle>
                  <CardDescription className="text-foreground/80">
                    Master the fundamentals of AI and prompt engineering through intensive, hands-on learning modules
                    designed by industry experts.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-foreground/70 opacity-70 group-hover:opacity-100 transition-opacity duration-300">
                    <li className="flex items-center">
                      <div className="size-2 bg-[#0BC5EA] rounded-full mr-2"></div>
                      <span>AI fundamentals & capabilities</span>
                    </li>
                    <li className="flex items-center">
                      <div className="size-2 bg-[#0BC5EA] rounded-full mr-2"></div>
                      <span>Prompt engineering techniques</span>
                    </li>
                    <li className="flex items-center">
                      <div className="size-2 bg-[#0BC5EA] rounded-full mr-2"></div>
                      <span>AI tools & workflows</span>
                    </li>
                    <li className="flex items-center">
                      <div className="size-2 bg-[#0BC5EA] rounded-full mr-2"></div>
                      <span>Foundation project completion</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={item} className="relative">
              <div className="absolute top-1/2 left-0 size-6 bg-[#6B46C1] rounded-full transform -translate-y-1/2 -translate-x-1/2 z-20 shadow-[0_0_15px_rgba(107,70,193,0.7)]"></div>
              <Card className="bg-card/50 backdrop-blur-sm border-[#6B46C1]/30 rounded-xl hover:shadow-[0_0_30px_rgba(107,70,193,0.2)] transition-all duration-500 h-full group">
                <CardHeader className="pb-2">
                  <div className="flex items-center mb-2">
                    <div className="size-12 rounded-full bg-[#6B46C1]/10 flex items-center justify-center mr-4">
                      <Briefcase className="size-6 text-[#6B46C1]" />
                    </div>
                    <Badge variant="outline" className="bg-[#6B46C1]/10 text-[#6B46C1] border-[#6B46C1]/30">
                      90 Days
                    </Badge>
                  </div>
                  <CardTitle className="text-xl font-semibold text-white">Guided Work Experience</CardTitle>
                  <CardDescription className="text-foreground/80">
                    Apply your skills on real-world projects with dedicated mentorship and support, building a portfolio
                    that showcases your capabilities.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-foreground/70 opacity-70 group-hover:opacity-100 transition-opacity duration-300">
                    <li className="flex items-center">
                      <div className="size-2 bg-[#6B46C1] rounded-full mr-2"></div>
                      <span>Real-world project assignments</span>
                    </li>
                    <li className="flex items-center">
                      <div className="size-2 bg-[#6B46C1] rounded-full mr-2"></div>
                      <span>Weekly mentorship sessions</span>
                    </li>
                    <li className="flex items-center">
                      <div className="size-2 bg-[#6B46C1] rounded-full mr-2"></div>
                      <span>Portfolio development</span>
                    </li>
                    <li className="flex items-center">
                      <div className="size-2 bg-[#6B46C1] rounded-full mr-2"></div>
                      <span>Industry networking opportunities</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Background glow effects */}
      <div className="absolute top-1/3 right-1/4 size-96 bg-[#0BC5EA]/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/3 left-1/4 size-96 bg-[#6B46C1]/5 rounded-full blur-3xl"></div>
    </section>
  )
}
