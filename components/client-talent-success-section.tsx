"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { ChevronLeft, ChevronRight, Quote } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
// Import company logos from react-icons
import { 
  SiGoogle, 
  SiAmazon, 
  SiMeta, 
  SiSpotify, 
  SiAdobe, 
  SiSalesforce, 
  SiNetflix, 
  SiUber, 
  SiAirbnb, 
  SiTesla, 
  SiOpenai, 
  SiAnthropic, 
  SiHuggingface, 
  SiDatabricks 
} from "react-icons/si"
// Import additional icons from other icon sets
import { FaMicrosoft } from "react-icons/fa"
import { WhatWeDoSection } from "./what-we-do-section"

export function ClientTalentSuccessSection() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0)

  // Custom IBM component since no icon is available
  const IBMIcon = ({ className, style }: { className?: string; style?: React.CSSProperties }) => (
    <div className={`${className} flex items-center justify-center font-bold text-current`} style={style}>
      IBM
    </div>
  )

  // Client companies that trust us for recruitment with their logos
  const clientCompanies = [
    { name: "Microsoft", icon: FaMicrosoft, color: "#00BCF2" },
    { name: "Google", icon: SiGoogle, color: "#4285F4" },
    { name: "Amazon", icon: SiAmazon, color: "#FF9900" },
    { name: "Meta", icon: SiMeta, color: "#1877F2" },
    { name: "Spotify", icon: SiSpotify, color: "#1DB954" },
    { name: "Adobe", icon: SiAdobe, color: "#FF0000" },
    { name: "IBM", icon: IBMIcon, color: "#054ADA" },
    { name: "Salesforce", icon: SiSalesforce, color: "#00A1E0" },
    { name: "Netflix", icon: SiNetflix, color: "#E50914" },
    { name: "Uber", icon: SiUber, color: "#000000" },
    { name: "Airbnb", icon: SiAirbnb, color: "#FF5A5F" },
    { name: "Tesla", icon: SiTesla, color: "#CC0000" },
    { name: "OpenAI", icon: SiOpenai, color: "#412991" },
    { name: "Anthropic", icon: SiAnthropic, color: "#D4A574" },
    { name: "Hugging Face", icon: SiHuggingface, color: "#FFD21E" },
    { name: "Databricks", icon: SiDatabricks, color: "#FF3621" }
  ]

  // Testimonials from deployed talent
  const talentTestimonials = [
    {
      quote: "AI Linc didn't just find me a job - they transformed my entire career trajectory. From their assessment to deployment, I went from uncertain about AI to leading ML initiatives at a Fortune 500 company.",
      author: "Sarah Chen",
      role: "Senior AI Engineer",
      company: "Microsoft",
      deploymentType: "Full-time",
      image: "/testimonials/sarah-chen.jpg"
    },
    {
      quote: "The 'intent over skill' philosophy changed everything for me. Even though I wasn't initially job-ready, their counseling team believed in my potential and guided me to become a successful AI consultant.",
      author: "Marcus Rodriguez",
      role: "AI Strategy Consultant",
      company: "Independent",
      deploymentType: "Consulting",
      image: "/testimonials/marcus-rodriguez.jpg"
    },
    {
      quote: "Through AI Linc's talent pool, I've been deployed to three different startups as a freelance AI developer. The flexibility and quality of opportunities they provide is unmatched.",
      author: "Priya Patel",
      role: "Freelance AI Developer",
      company: "Multiple Startups",
      deploymentType: "Freelance",
      image: "/testimonials/priya-patel.jpg"
    },
    {
      quote: "From the 21-day AI product challenge to my current role, AI Linc's practical approach prepared me for real-world AI implementation. I'm now building products that impact millions of users.",
      author: "David Kim",
      role: "AI Product Manager",
      company: "Spotify",
      deploymentType: "Full-time",
      image: "/testimonials/david-kim.jpg"
    },
    {
      quote: "The live role simulations gave me insider knowledge of what AI work actually looks like. When I got deployed, I hit the ground running because I knew exactly what was expected.",
      author: "Elena Vasquez",
      role: "Machine Learning Engineer",
      company: "Amazon",
      deploymentType: "Full-time",
      image: "/testimonials/elena-vasquez.jpg"
    },
    {
      quote: "AI Linc's network opened doors I never knew existed. From their talent pool, I was connected directly to startup founders who needed AI expertise. Now I'm a co-founder myself.",
      author: "James Wright",
      role: "AI Startup Co-founder",
      company: "VisionAI",
      deploymentType: "Entrepreneurial",
      image: "/testimonials/james-wright.jpg"
    }
  ]

  // Auto-advance testimonials
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % talentTestimonials.length)
    }, 6000)
    return () => clearInterval(timer)
  }, [talentTestimonials.length])

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % talentTestimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + talentTestimonials.length) % talentTestimonials.length)
  }

  const getDeploymentColor = (type: string) => {
    switch (type) {
      case "Full-time": return "from-[#0BC5EA] to-[#06B6D4]"
      case "Consulting": return "from-[#6B46C1] to-[#8B5CF6]"
      case "Freelance": return "from-[#F59E0B] to-[#EF4444]"
      case "Entrepreneurial": return "from-[#10B981] to-[#059669]"
      default: return "from-[#0BC5EA] to-[#6B46C1]"
    }
  }

  return (
    <section id="success-stories" className="py-12 sm:py-16 lg:py-20 relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-8 sm:mb-12 lg:mb-16"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-white via-[#0BC5EA] to-[#6B46C1] bg-clip-text text-transparent px-2">
            Client & Talent Success
          </h2>
          <p className="text-lg sm:text-xl lg:text-2xl text-foreground/80 max-w-4xl mx-auto leading-relaxed px-2">
            Trusted by leading companies and transforming careers of AI professionals worldwide
          </p>
        </motion.div>

        {/* Trusted by Companies */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="mb-12 sm:mb-16"
        >
          <div className="text-center mb-6 sm:mb-8">
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-2 sm:mb-4 px-2">
              Trusted by recruiters from leading companies
            </h3>
          </div>
          
          <div className="bg-gradient-to-r from-card/30 to-card/10 backdrop-blur-sm border border-[#0BC5EA]/20 rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8 relative overflow-hidden mx-2 sm:mx-0">
            <div className="absolute top-0 right-0 size-32 sm:size-48 lg:size-64 bg-gradient-to-bl from-[#0BC5EA]/5 to-transparent rounded-bl-full"></div>
            <div className="absolute bottom-0 left-0 size-32 sm:size-48 lg:size-64 bg-gradient-to-tr from-[#6B46C1]/5 to-transparent rounded-tr-full"></div>
            
            {/* Logo Grid */}
            <div className="relative z-10 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-3 sm:gap-4 lg:gap-6 items-center">
              {clientCompanies.map((company, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  viewport={{ once: true }}
                  className="text-center group"
                >
                  <div className="h-12 sm:h-14 lg:h-16 flex flex-col items-center justify-center px-2 gap-1">
                    <company.icon 
                      className="w-6 h-6 sm:w-8 sm:h-8 lg:w-10 lg:h-10 transition-all duration-300 group-hover:scale-110" 
                      style={{ color: company.color }}
                    />
                    <span className="text-xs sm:text-sm font-medium text-foreground/60 group-hover:text-[#0BC5EA] transition-colors duration-300 cursor-default text-center">
                      {company.name}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
        <WhatWeDoSection />

        {/* Talent Success Stories */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mb-8"
        >
          <div className="text-center mb-8 sm:mb-12">
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-2 sm:mb-4 px-2">
              Hear from talent who joined our pool and got deployed
            </h3>
            <p className="text-base sm:text-lg text-foreground/70 max-w-2xl mx-auto px-2">
              Real stories from AI professionals who transformed their careers through our platform
            </p>
          </div>

          {/* Testimonial Carousel */}
          <div className="relative max-w-5xl mx-auto px-2 sm:px-4">
            <Card className="bg-gradient-to-r from-card/50 to-card/20 backdrop-blur-sm border-[#0BC5EA]/20 rounded-xl sm:rounded-2xl overflow-hidden">
              <CardContent className="p-4 sm:p-6 lg:p-8 xl:p-12">
                <div className="relative">
                  {/* Quote Icon */}
                  {/* <div className="absolute -top-2 sm:-top-4 -left-2 sm:-left-4 size-8 sm:size-10 lg:size-12 bg-gradient-to-r from-[#0BC5EA] to-[#6B46C1] rounded-full flex items-center justify-center">
                    <Quote className="size-3 sm:size-4 lg:size-6 text-white" />
                  </div> */}

                  {/* Testimonial Content */}
                  <div className="space-y-4 sm:space-y-6">
                    <blockquote className="text-base sm:text-lg lg:text-xl xl:text-2xl text-foreground/90 leading-relaxed font-medium pt-4 sm:pt-0">
                      "{talentTestimonials[currentTestimonial].quote}"
                    </blockquote>

                    <div className="flex flex-col gap-4 sm:gap-6">
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                        <div className="flex items-center gap-3 sm:gap-4">
                          <div className="size-12 sm:size-14 lg:size-16 rounded-full bg-gradient-to-r from-[#0BC5EA]/20 to-[#6B46C1]/20 flex items-center justify-center flex-shrink-0">
                            <span className="text-sm sm:text-lg lg:text-xl font-bold text-[#0BC5EA]">
                              {talentTestimonials[currentTestimonial].author.split(' ').map(n => n[0]).join('')}
                            </span>
                          </div>
                          <div className="min-w-0 flex-1">
                            <div className="font-bold text-white text-base sm:text-lg truncate">
                              {talentTestimonials[currentTestimonial].author}
                            </div>
                            <div className="text-foreground/70 text-sm sm:text-base truncate">
                              {talentTestimonials[currentTestimonial].role}
                            </div>
                            <div className="text-[#0BC5EA] font-medium text-sm sm:text-base truncate">
                              {talentTestimonials[currentTestimonial].company}
                            </div>
                          </div>
                        </div>

                        <div className={`px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-gradient-to-r ${getDeploymentColor(talentTestimonials[currentTestimonial].deploymentType)} text-white font-semibold text-xs sm:text-sm flex-shrink-0 text-center`}>
                          {talentTestimonials[currentTestimonial].deploymentType}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Navigation Buttons */}
            <div className="flex justify-center gap-3 sm:gap-4 mt-6 sm:mt-8">
              <Button
                variant="outline"
                size="sm"
                onClick={prevTestimonial}
                className="border-[#0BC5EA]/30 text-[#0BC5EA] hover:bg-[#0BC5EA]/10 hover:border-[#0BC5EA] h-8 w-8 sm:h-10 sm:w-10 p-0"
              >
                <ChevronLeft className="size-3 sm:size-4" />
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={nextTestimonial}
                className="border-[#0BC5EA]/30 text-[#0BC5EA] hover:bg-[#0BC5EA]/10 hover:border-[#0BC5EA] h-8 w-8 sm:h-10 sm:w-10 p-0"
              >
                <ChevronRight className="size-3 sm:size-4" />
              </Button>
            </div>

            {/* Dots Indicator */}
            <div className="flex justify-center gap-1.5 sm:gap-2 mt-4 sm:mt-6">
              {talentTestimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`size-2 sm:size-3 rounded-full transition-all duration-300 ${
                    index === currentTestimonial
                      ? "bg-[#0BC5EA] scale-125"
                      : "bg-foreground/30 hover:bg-foreground/50"
                  }`}
                />
              ))}
            </div>
          </div>
        </motion.div>
      </div>

      {/* Background glow effects */}
      <div className="absolute top-1/4 left-1/4 size-64 sm:size-80 lg:size-96 bg-[#0BC5EA]/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 right-1/4 size-64 sm:size-80 lg:size-96 bg-[#6B46C1]/5 rounded-full blur-3xl"></div>
    </section>
  )
} 