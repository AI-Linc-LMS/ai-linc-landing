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
  SiDatabricks,
  SiApple,
  SiNvidia,
  SiSlack,
  SiDropbox,
  SiX,
  SiLinkedin,
  SiReddit,
  SiDiscord,
  SiTwitch,
  SiZoom,
  SiShopify,
  SiSquare,
  SiStripe,
  SiAsana,
  SiNotion,
  SiFigma,
  SiCanva,
  SiAdobexd,
  SiGithub,
  SiGitlab,
  SiJira,
  SiConfluence,
  SiMongodb,
  SiPostgresql,
  SiDocker,
  SiKubernetes,
  SiOracle,
  SiCisco,
  SiIntel,
  SiHp,
  SiDell,
  SiLenovo,
  SiVmware,
  SiRedhat,
  SiSap,
  SiTableau,
  SiSnowflake,
  SiPalantir,
  SiTwilio,
  SiSendgrid,
  SiMailchimp,
  SiHubspot,
  SiZendesk,
  SiIntercom
} from "react-icons/si"
// Import additional icons from other icon sets
import { FaMicrosoft } from "react-icons/fa"
import { WhatWeDoSection } from "./what-we-do-section"

export function ClientTalentSuccessSection() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0)
  const [visibleCompanies, setVisibleCompanies] = useState(16)

  // Add useEffect to update visible companies based on screen size
  useEffect(() => {
    const handleResize = () => {
      // Show all 32 companies on extra large screens (1280px and above)
      setVisibleCompanies(window.innerWidth >= 1280 ? 32 : 16)
    }

    // Add event listener
    window.addEventListener('resize', handleResize)
    
    // Initial check
    handleResize()

    // Cleanup event listener
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  // Custom IBM component since no icon is available
  const IBMIcon = ({ className, style }: { className?: string; style?: React.CSSProperties }) => (
    <div className={`${className} flex items-center justify-center font-bold text-current`} style={style}>
      IBM
    </div>
  )

  // Custom components for consulting companies without icons
  const AccentureIcon = ({ className, style }: { className?: string; style?: React.CSSProperties }) => (
    <div className={`${className} flex items-center justify-center font-bold text-current text-xs`} style={style}>
      Accenture
    </div>
  )

  const WiproIcon = ({ className, style }: { className?: string; style?: React.CSSProperties }) => (
    <div className={`${className} flex items-center justify-center font-bold text-current`} style={style}>
      Wipro
    </div>
  )

  const CognizantIcon = ({ className, style }: { className?: string; style?: React.CSSProperties }) => (
    <div className={`${className} flex items-center justify-center font-bold text-current text-xs`} style={style}>
      Cognizant
    </div>
  )

  const CapgeminiIcon = ({ className, style }: { className?: string; style?: React.CSSProperties }) => (
    <div className={`${className} flex items-center justify-center font-bold text-current text-xs`} style={style}>
      Capgemini
    </div>
  )

  const TCSIcon = ({ className, style }: { className?: string; style?: React.CSSProperties }) => (
    <div className={`${className} flex items-center justify-center font-bold text-current`} style={style}>
      TCS
    </div>
  )

  const InfosysIcon = ({ className, style }: { className?: string; style?: React.CSSProperties }) => (
    <div className={`${className} flex items-center justify-center font-bold text-current text-xs`} style={style}>
      Infosys
    </div>
  )

  const DeloitteIcon = ({ className, style }: { className?: string; style?: React.CSSProperties }) => (
    <div className={`${className} flex items-center justify-center font-bold text-current text-xs`} style={style}>
      Deloitte
    </div>
  )

  const PwCIcon = ({ className, style }: { className?: string; style?: React.CSSProperties }) => (
    <div className={`${className} flex items-center justify-center font-bold text-current`} style={style}>
      PwC
    </div>
  )

  const KPMGIcon = ({ className, style }: { className?: string; style?: React.CSSProperties }) => (
    <div className={`${className} flex items-center justify-center font-bold text-current`} style={style}>
      KPMG
    </div>
  )

  const EYIcon = ({ className, style }: { className?: string; style?: React.CSSProperties }) => (
    <div className={`${className} flex items-center justify-center font-bold text-current`} style={style}>
      EY
    </div>
  )

  // Client companies that trust us for recruitment with their logos - 32 companies (8x4 tiers)
  const clientCompanies = [
    // Big 4 Consulting Firms + Major IT Services (8 companies)
    { name: "Deloitte", icon: DeloitteIcon, color: "#86BC25" },
    { name: "PwC", icon: PwCIcon, color: "#FF6600" },
    { name: "KPMG", icon: KPMGIcon, color: "#00338D" },
    { name: "EY", icon: EYIcon, color: "#FFE600" },
    { name: "Accenture", icon: AccentureIcon, color: "#A100FF" },
    { name: "TCS", icon: TCSIcon, color: "#0F1B3" },
    { name: "Infosys", icon: InfosysIcon, color: "#007CC3" },
    { name: "Wipro", icon: WiproIcon, color: "#0066CC" },

    // Tier 1 - Tech Giants (8 companies)
    { name: "Microsoft", icon: FaMicrosoft, color: "#00BCF2" },
    { name: "Google", icon: SiGoogle, color: "#4285F4" },
    { name: "Amazon", icon: SiAmazon, color: "#FF9900" },
    { name: "Apple", icon: SiApple, color: "#999999" },
    { name: "Meta", icon: SiMeta, color: "#1877F2" },
    { name: "Netflix", icon: SiNetflix, color: "#E50914" },
    { name: "Tesla", icon: SiTesla, color: "#CC0000" },
    { name: "Nvidia", icon: SiNvidia, color: "#76B900" },

    // Tier 2 - Established Tech Companies (8 companies)
    { name: "Salesforce", icon: SiSalesforce, color: "#00A1E0" },
    { name: "Adobe", icon: SiAdobe, color: "#FF0000" },
    { name: "Oracle", icon: SiOracle, color: "#F80000" },
    { name: "IBM", icon: IBMIcon, color: "#054ADA" },
    { name: "Cisco", icon: SiCisco, color: "#1AB2FF" },
    { name: "SAP", icon: SiSap, color: "#007E1A" },
    { name: "Intel", icon: SiIntel, color: "#0071C5" },
    { name: "VMware", icon: SiVmware, color: "#2376C2" },

    // Tier 3 - Growth Companies & Specialized (8 companies)
    { name: "Spotify", icon: SiSpotify, color: "#1DB954" },
    { name: "Uber", icon: SiUber, color: "#000000" },
    { name: "Airbnb", icon: SiAirbnb, color: "#FF5A5F" },
    { name: "Shopify", icon: SiShopify, color: "#96CC39" },
    { name: "Stripe", icon: SiStripe, color: "#008CDD" },
    { name: "Zoom", icon: SiZoom, color: "#2D8CFF" },
    { name: "Slack", icon: SiSlack, color: "#4A154B" },
    { name: "Cognizant", icon: CognizantIcon, color: "#0073E6" }
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
              {clientCompanies.slice(0, visibleCompanies).map((company, index) => (
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
        {/* <WhatWeDoSection /> */}

        {/* Talent Success Stories */}
      
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
              <a href="/courses">
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
              </Button></a>
              
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