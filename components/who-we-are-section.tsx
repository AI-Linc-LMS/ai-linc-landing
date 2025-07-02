"use client"

import { motion } from "framer-motion"
import { Users, Search, TrendingUp, Briefcase, Rocket } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

export function WhoWeAreSection() {
  const specializations = [
    {
      icon: Users,
      title: "AI consulting workforce development",
      description: "Building teams that understand both AI technology and business applications"
    },
    {
      icon: Search,
      title: "Talent sourcing and screening",
      description: "Identifying and evaluating top AI professionals across diverse skill sets"
    },
    {
      icon: TrendingUp,
      title: "Outcome-aligned upskilling",
      description: "Training programs designed for measurable career advancement"
    },
    {
      icon: Briefcase,
      title: "Flexible engagement models (FT/PT/freelance/contract)",
      description: "Matching talent to opportunities that fit their career goals and lifestyle"
    },
    {
      icon: Rocket,
      title: "Entrepreneurial enablement",
      description: "Supporting AI professionals in launching their own ventures and startups"
    }
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
    <section id="who-we-are" className="py-16 sm:py-20 relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left side - Text content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="lg:col-span-5 space-y-6"
          >
            <div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-white via-[#0BC5EA] to-[#6B46C1] bg-clip-text text-transparent">
                Who We Are
              </h2>
              <p className="text-xl sm:text-2xl text-foreground/90 leading-relaxed">
                A consulting-first AI deployment firm — preparing and placing AI talent into roles that demand innovation, execution, and real-world readiness.
              </p>
            </div>
          </motion.div>

          {/* Right side - Visual with icon highlights */}
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="lg:col-span-7"
          >
            <div className="space-y-4">
              <motion.div variants={item} className="mb-8">
                <h3 className="text-2xl font-semibold text-white mb-6">We specialize in:</h3>
              </motion.div>
              
              {specializations.map((spec, index) => (
                <motion.div key={index} variants={item}>
                  <Card className="bg-gradient-to-r from-card/40 to-card/20 backdrop-blur-sm border-[#0BC5EA]/20 rounded-xl group hover:shadow-[0_0_30px_rgba(11,197,234,0.15)] hover:border-[#0BC5EA]/40 transition-all duration-500">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="flex-shrink-0">
                          <div className="size-12 rounded-xl bg-gradient-to-r from-[#0BC5EA]/20 to-[#6B46C1]/20 flex items-center justify-center group-hover:from-[#0BC5EA]/30 group-hover:to-[#6B46C1]/30 transition-all duration-300">
                            <spec.icon className="size-6 text-[#0BC5EA] group-hover:text-white transition-colors duration-300" />
                          </div>
                        </div>
                        <div className="flex-1">
                          <h4 className="text-lg font-semibold text-white mb-2 group-hover:text-[#0BC5EA] transition-colors duration-300">
                            {spec.title}
                          </h4>
                          <p className="text-foreground/70 group-hover:text-foreground/90 transition-colors duration-300">
                            {spec.description}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Background glow effects */}
      <div className="absolute top-1/4 left-1/4 size-96 bg-[#0BC5EA]/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 right-1/4 size-96 bg-[#6B46C1]/5 rounded-full blur-3xl"></div>
    </section>
  )
} 