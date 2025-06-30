"use client"

import { motion } from "framer-motion"
import { Play, Target, Rocket, Users, Code, Briefcase, ArrowRight, CheckCircle } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

export function HowWeDoItSection() {
  const steps = [
    {
      number: "01",
      title: "Experience the Real Role Before You Apply",
      subtitle: "Live AI Role Simulations",
      icon: Play,
      color: "from-[#0BC5EA] to-[#06B6D4]",
      description: "We begin with a webinar that's not just motivational — it's transformational.",
      details: [
        "What do AI experts deliver on the job?",
        "What tech stacks and problem-solving skills do they use daily?",
        "How are product decisions and AI tooling integrated?"
      ],
      highlight: "You'll hear directly from AI professionals at Microsoft, Amazon, or Google about what it actually means to work in high-stakes AI roles.",
      outcome: "This sets a clear benchmark for your journey ahead."
    },
    {
      number: "02", 
      title: "Take the AI Readiness Assessment — Free of Cost",
      subtitle: "No paywall. Just potential.",
      icon: Target,
      color: "from-[#6B46C1] to-[#8B5CF6]",
      description: "After the webinar, you'll attempt our AI Readiness Assessment — designed by industry experts — covering:",
      details: [
        "Generative & Agentic AI knowledge",
        "Prompt engineering and reasoning", 
        "Full-stack product thinking",
        "Real-world deployment awareness"
      ],
      highlight: "Top scorers are directly mapped to our hiring team. Others are contacted by our counseling team — because we believe intent > skill.",
      outcome: "Even if you're not yet job-ready, your drive matters — and we commit to help you bridge the gap."
    },
    {
      number: "03",
      title: "Personalized Upskilling → AI Deployment", 
      subtitle: "If selected or referred for upskilling, here's your fast-tracked path to high-impact roles:",
      icon: Rocket,
      color: "from-[#F59E0B] to-[#EF4444]",
      description: "Your journey to becoming deployment-ready:",
      details: [
        "🚀 21-Day AI Product Challenge - Build your own working AI product using tools like Claude, Copilot, and ChatGPT",
        "💻 90-Day Guided Work Experience - Get real-world exposure with client simulation projects",
        "🧑‍💼 Profile & Deployment - Launch a full tech portfolio with AI-driven products"
      ],
      highlight: "This shows recruiters what you can build, not just what you can say.",
      outcome: "Get referred for freelance, full-time, or consulting roles — or even pitch your own product if you want to go solo."
    }
  ]

  const funnelSteps = [
    { title: "Live Webinar", subtitle: "Role Expectation" },
    { title: "Free Assessment", subtitle: "Talent Mapping" },
    { title: "Personalized Upskilling", subtitle: "Real Product Build" },
    { title: "Deployment", subtitle: "Real Work. Real Income." }
  ]

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
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
            How Do We Do It?
          </h2>
          <p className="text-xl sm:text-2xl text-foreground/80 max-w-4xl mx-auto leading-relaxed">
            We don't just train — we assess, elevate, and deploy AI talent into high-impact roles.
          </p>
        </motion.div>

        {/* Steps */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="space-y-8 mb-16"
        >
          {steps.map((step, index) => (
            <motion.div key={index} variants={item}>
              <Card className="bg-gradient-to-r from-card/40 to-card/20 backdrop-blur-sm border-[#0BC5EA]/20 rounded-2xl group hover:shadow-[0_0_40px_rgba(11,197,234,0.15)] hover:border-[#0BC5EA]/40 transition-all duration-500 overflow-hidden">
                <CardContent className="p-8 sm:p-12">
                  <div className="grid lg:grid-cols-12 gap-8 items-start">
                    {/* Left side - Number and Icon */}
                    <div className="lg:col-span-2 flex flex-col items-center lg:items-start">
                      <div className={`size-20 rounded-2xl bg-gradient-to-r ${step.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                        <step.icon className="size-10 text-white" />
                      </div>
                      <Badge variant="outline" className="bg-gradient-to-r from-[#0BC5EA]/20 to-[#6B46C1]/20 border-[#0BC5EA]/30 text-[#0BC5EA] font-bold text-lg px-4 py-2">
                        Step {step.number}
                      </Badge>
                    </div>

                    {/* Right side - Content */}
                    <div className="lg:col-span-10 space-y-6">
                      <div>
                        <h3 className="text-2xl sm:text-3xl font-bold text-white mb-2 group-hover:text-[#0BC5EA] transition-colors duration-300">
                          {step.title}
                        </h3>
                        <p className="text-lg text-[#0BC5EA] font-semibold mb-4">
                          {step.subtitle}
                        </p>
                        <p className="text-foreground/80 text-lg leading-relaxed mb-6">
                          {step.description}
                        </p>
                      </div>

                      {/* Details List */}
                      <div className="space-y-3">
                        {step.details.map((detail, detailIndex) => (
                          <div key={detailIndex} className="flex items-start gap-3">
                            <CheckCircle className="size-5 text-[#0BC5EA] flex-shrink-0 mt-0.5" />
                            <span className="text-foreground/70 group-hover:text-foreground/90 transition-colors duration-300">
                              {detail}
                            </span>
                          </div>
                        ))}
                      </div>

                      {/* Highlight */}
                      <div className="bg-gradient-to-r from-[#0BC5EA]/10 to-[#6B46C1]/10 border border-[#0BC5EA]/20 rounded-xl p-6">
                        <p className="text-foreground/90 font-medium leading-relaxed mb-4">
                          {step.highlight}
                        </p>
                        <p className="text-[#0BC5EA] font-semibold">
                          {step.outcome}
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* AI Linc Funnel Summary */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-card/50 to-card/30 backdrop-blur-sm border border-[#0BC5EA]/30 rounded-2xl p-8 sm:p-12 relative overflow-hidden"
        >
          {/* Background decoration */}
          <div className="absolute top-0 right-0 size-96 bg-gradient-to-bl from-[#0BC5EA]/10 to-transparent rounded-bl-full"></div>
          <div className="absolute bottom-0 left-0 size-96 bg-gradient-to-tr from-[#6B46C1]/10 to-transparent rounded-tr-full"></div>
          
          <div className="relative z-10">
            <div className="text-center mb-12">
              <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4">
                ✅ Summary: The AI Linc Funnel
              </h3>
            </div>

            {/* Funnel Steps */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              {funnelSteps.map((funnelStep, index) => (
                <div key={index} className="text-center">
                  <div className="bg-gradient-to-r from-[#0BC5EA]/20 to-[#6B46C1]/20 rounded-xl p-6 mb-4 hover:from-[#0BC5EA]/30 hover:to-[#6B46C1]/30 transition-all duration-300">
                    <h4 className="text-lg font-bold text-white mb-2">
                      {funnelStep.title}
                    </h4>
                    <p className="text-[#0BC5EA] text-sm font-medium">
                      {funnelStep.subtitle}
                    </p>
                  </div>
                  {index < funnelSteps.length - 1 && (
                    <div className="hidden lg:block absolute top-1/2 -translate-y-1/2 right-0 translate-x-1/2">
                      <ArrowRight className="size-6 text-[#0BC5EA]" />
                    </div>
                  )}
                </div>
              ))}
            </div>

            <div className="text-center">
              <p className="text-xl text-foreground/90 font-semibold mb-8 max-w-4xl mx-auto">
                This is your gateway to becoming an AI Expert, a consultant, freelancer, or product founder — faster than you imagined.
              </p>
              
              <Button
                size="lg"
                className="bg-gradient-to-r from-[#0BC5EA] to-[#6B46C1] hover:opacity-90 text-white font-semibold px-8 py-6 text-lg rounded-xl transition-all duration-300 shadow-[0_0_20px_rgba(11,197,234,0.5)] hover:shadow-[0_0_30px_rgba(11,197,234,0.7)] hover:scale-105"
                onClick={() => {
                  const element = document.getElementById('contact-apply');
                  if (element) {
                    element.scrollIntoView({ 
                      behavior: 'smooth',
                      block: 'start'
                    });
                  }
                }}
              >
                Start Your AI Journey Today
              </Button>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Background glow effects */}
      <div className="absolute top-1/4 left-1/4 size-96 bg-[#0BC5EA]/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 right-1/4 size-96 bg-[#6B46C1]/5 rounded-full blur-3xl"></div>
      <div className="absolute top-2/3 right-1/3 size-64 bg-[#F59E0B]/5 rounded-full blur-2xl"></div>
    </section>
  )
} 