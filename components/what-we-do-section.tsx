"use client"

import { motion } from "framer-motion"
import { Users, Building2, UserCheck, Lightbulb } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export function WhatWeDoSection() {
  const coreOfferings = [
    {
      icon: Users,
      title: "Talent Deployment",
      description: "Into full-time, freelance, or consulting roles",
      details: "We connect AI professionals with opportunities that match their expertise and career goals, whether they're seeking permanent positions, flexible freelance work, or high-impact consulting engagements.",
      color: "from-[#0BC5EA] to-[#06B6D4]"
    },
    {
      icon: Building2,
      title: "AI Consulting Teams",
      description: "For startups and enterprises",
      details: "We assemble specialized AI consulting teams tailored to your organization's needs, providing expertise in strategy, implementation, and optimization of AI solutions.",
      color: "from-[#6B46C1] to-[#8B5CF6]"
    },
    {
      icon: UserCheck,
      title: "Recruitment Enablement",
      description: "Skill-based screening + job matching",
      details: "Our advanced screening process evaluates technical skills, cultural fit, and project experience to ensure perfect matches between talent and opportunities.",
      color: "from-[#0BC5EA] to-[#6B46C1]"
    },
    {
      icon: Lightbulb,
      title: "Startup Support",
      description: "Incubation, advisory, and resources",
      details: "We provide comprehensive support for AI-driven startups, including mentorship, strategic guidance, technical resources, and access to our network of investors and partners.",
      color: "from-[#F59E0B] to-[#EF4444]"
    }
  ]

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  }

  return (
    <section className="py-16 sm:py-20 relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-white via-[#0BC5EA] to-[#6B46C1] bg-clip-text text-transparent">
            What We Do
          </h2>
          <p className="text-xl sm:text-2xl text-foreground/80 max-w-3xl mx-auto leading-relaxed">
            We bridge the gap between exceptional AI talent and transformative opportunities
          </p>
        </motion.div>

        {/* Core Offerings Grid */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 mb-12"
        >
          {coreOfferings.map((offering, index) => (
            <motion.div key={index} variants={item}>
              <Card className="bg-gradient-to-b from-card/50 to-card/20 backdrop-blur-sm border-[#0BC5EA]/20 rounded-xl group hover:shadow-[0_0_40px_rgba(11,197,234,0.2)] hover:border-[#0BC5EA]/40 transition-all duration-500 h-full">
                <CardHeader className="pb-4">
                  <div className="flex items-center justify-center mb-4">
                    <div className={`size-16 rounded-2xl bg-gradient-to-r ${offering.color} bg-opacity-20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                      <offering.icon className="size-8 text-white" />
                    </div>
                  </div>
                  <CardTitle className="text-xl font-bold text-center text-white group-hover:text-[#0BC5EA] transition-colors duration-300">
                    {offering.title}
                  </CardTitle>
                  <p className="text-center text-[#0BC5EA] font-medium text-sm">
                    {offering.description}
                  </p>
                </CardHeader>
                <CardContent className="pt-0">
                  <p className="text-foreground/70 text-sm leading-relaxed group-hover:text-foreground/90 transition-colors duration-300">
                    {offering.details}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-card/30 to-card/10 backdrop-blur-sm border border-[#0BC5EA]/20 rounded-2xl p-8 sm:p-12 relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-0 right-0 size-64 bg-gradient-to-bl from-[#0BC5EA]/10 to-transparent rounded-bl-full"></div>
            <div className="absolute bottom-0 left-0 size-64 bg-gradient-to-tr from-[#6B46C1]/10 to-transparent rounded-tr-full"></div>
            
            <div className="relative z-10">
              <h3 className="text-2xl sm:text-3xl font-bold mb-4 text-white">
                Ready to Transform Your AI Journey?
              </h3>
              <p className="text-lg text-foreground/80 mb-8 max-w-2xl mx-auto">
                Discover our job-ready AI talents and comprehensive services designed to accelerate your success
              </p>
              <Button
                size="lg"
                className="bg-gradient-to-r from-[#0BC5EA] to-[#6B46C1] hover:opacity-90 text-white font-semibold px-8 py-6 text-lg rounded-xl transition-all duration-300 shadow-[0_0_20px_rgba(11,197,234,0.5)] hover:shadow-[0_0_30px_rgba(11,197,234,0.7)] hover:scale-105"
                onClick={() => {
                  // For now, scroll to contact section. Later can be updated to navigate to a dedicated services page
                  const element = document.getElementById('contact-apply');
                  if (element) {
                    element.scrollIntoView({ 
                      behavior: 'smooth',
                      block: 'start'
                    });
                  }
                }}
              >
                Explore AI Linc Services
              </Button>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Background glow effects */}
      <div className="absolute top-1/3 left-1/4 size-96 bg-[#0BC5EA]/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/3 right-1/4 size-96 bg-[#6B46C1]/5 rounded-full blur-3xl"></div>
      <div className="absolute top-2/3 right-1/3 size-64 bg-[#F59E0B]/5 rounded-full blur-2xl"></div>
    </section>
  )
} 