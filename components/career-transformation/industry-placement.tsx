import { useRef, useEffect, useState } from "react"
import { motion, useAnimation, useInView } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Building, BarChart, Users, TrendingUp, Star, MapPin, Award } from "lucide-react"
import { PLACEMENT_STATS, COMPANY_POSITIONS } from "./data"

// Enhanced company data with actual brand styling
const COMPANIES = [
  {
    name: "Google",
    logo: "G",
    fullName: "Google",
    positions: 25,
    avgSalary: "₹28L",
    color: "#4285F4",
    bgColor: "#4285F4",
    description: "AI/ML Engineer, Product Manager",
    gradient: "from-[#4285F4] to-[#34A853]",
    roles: ["AI/ML Engineer", "Product Manager", "Data Scientist"]
  },
  {
    name: "Microsoft",
    logo: "⊞",
    fullName: "Microsoft",
    positions: 20,
    avgSalary: "₹25L",
    color: "#00A4EF",
    bgColor: "#00A4EF",
    description: "Azure AI Specialist, Data Scientist",
    gradient: "from-[#00A4EF] to-[#0078D4]",
    roles: ["Azure AI Specialist", "Data Scientist", "Cloud Engineer"]
  },
  {
    name: "Amazon",
    logo: "⟳",
    fullName: "Amazon",
    positions: 18,
    avgSalary: "₹22L",
    color: "#FF9900",
    bgColor: "#232F3E",
    description: "AWS AI Solutions Architect",
    gradient: "from-[#FF9900] to-[#232F3E]",
    roles: ["AWS Solutions Architect", "ML Engineer", "DevOps Engineer"]
  },
  {
    name: "Meta",
    logo: "f",
    fullName: "Meta",
    positions: 15,
    avgSalary: "₹30L",
    color: "#1877F2",
    bgColor: "#1877F2",
    description: "AI Research Scientist, ML Engineer",
    gradient: "from-[#1877F2] to-[#42B883]",
    roles: ["AI Research Scientist", "ML Engineer", "Software Engineer"]
  },
  {
    name: "Startups",
    logo: "🚀",
    fullName: "Tech Startups",
    positions: 45,
    avgSalary: "₹18L",
    color: "#10B981",
    bgColor: "#10B981",
    description: "AI Product Lead, Founding Engineer",
    gradient: "from-[#10B981] to-[#059669]",
    roles: ["AI Product Lead", "Founding Engineer", "Tech Lead"]
  },
  {
    name: "Consulting",
    logo: "💼",
    fullName: "Consulting Firms",
    positions: 30,
    avgSalary: "₹20L",
    color: "#8B5CF6",
    bgColor: "#8B5CF6",
    description: "AI Strategy Consultant, Tech Lead",
    gradient: "from-[#8B5CF6] to-[#7C3AED]",
    roles: ["AI Strategy Consultant", "Tech Lead", "Digital Transformation"]
  }
]

export const IndustryPlacement = () => {
  const controls = useAnimation()
  const ref = useRef(null)
  const inView = useInView(ref, { once: true })
  const [selectedCompany, setSelectedCompany] = useState<string | null>(null)

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
            {/* Left side - Statistics */}
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

            {/* Right side - Company Showcase Grid */}
            <div className="space-y-4">
              {/* <div className="text-center mb-6">
                <div className="inline-flex items-center justify-center size-16 rounded-full bg-gradient-to-r from-[#6B46C1] to-[#0BC5EA] mb-3">
                  <Users className="size-8 text-white" />
                </div>
                <h4 className="text-lg font-bold text-white mb-1">Career Network</h4>
                <p className="text-sm text-foreground/60">Explore opportunities at top companies</p>
              </div> */}

              {/* Company Cards Grid */}
              <div className="grid grid-cols-2 gap-3 max-h-80 overflow-y-auto scrollbar-thin scrollbar-thumb-[#6B46C1]/30 scrollbar-track-transparent">
                {COMPANIES.map((company, index) => (
                  <motion.div
                    key={company.name}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 * index }}
                    className={`relative cursor-pointer transition-all duration-300 ${
                      selectedCompany === company.name ? 'scale-105' : 'hover:scale-102'
                    }`}
                    onClick={() => setSelectedCompany(selectedCompany === company.name ? null : company.name)}
                  >
                    <div 
                      className="p-4 rounded-xl border-2 transition-all duration-300 backdrop-blur-sm"
                      style={{
                        borderColor: selectedCompany === company.name ? company.color : 'rgba(255,255,255,0.1)',
                        backgroundColor: selectedCompany === company.name ? `${company.color}15` : 'rgba(255,255,255,0.05)',
                        boxShadow: selectedCompany === company.name ? `0 8px 32px ${company.color}30` : '0 4px 12px rgba(0,0,0,0.1)'
                      }}
                    >
                      {/* Company Header */}
                      <div className="flex items-center mb-3">
                        <div 
                          className="size-10 rounded-full flex items-center justify-center mr-3 text-white font-bold"
                          style={{ backgroundColor: company.color }}
                        >
                          {company.logo}
                        </div>
                        <div className="flex-1">
                          <div className="text-sm font-bold text-white">{company.fullName}</div>
                          <div className="text-xs text-foreground/60">{company.positions} positions</div>
                        </div>
                      </div>

                      {/* Quick Stats */}
                      <div className="grid grid-cols-2 gap-2 mb-3">
                        <div className="text-center p-2 bg-background/20 rounded-lg">
                          <div className="text-xs text-foreground/60">Avg Salary</div>
                          <div className="text-sm font-bold text-white">{company.avgSalary}</div>
                        </div>
                        <div className="text-center p-2 bg-background/20 rounded-lg">
                          <div className="text-xs text-foreground/60">Open Roles</div>
                          <div className="text-sm font-bold text-white">{company.positions}</div>
                        </div>
                      </div>

                      {/* Expandable Details */}
                      {selectedCompany === company.name && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          className="border-t border-white/10 pt-3"
                        >
                          <div className="text-xs text-foreground/80 mb-2">Popular Roles:</div>
                          <div className="flex flex-wrap gap-1 mb-3">
                            {company.roles.map((role, i) => (
                              <span 
                                key={i}
                                className="text-xs px-2 py-1 rounded-full border"
                                style={{ 
                                  borderColor: `${company.color}40`,
                                  backgroundColor: `${company.color}10`,
                                  color: company.color
                                }}
                              >
                                {role}
                              </span>
                            ))}
                          </div>
                          <div className="flex items-center text-xs text-foreground/60">
                            <Star className="size-3 mr-1" style={{ color: company.color }} />
                            <span>High Growth Potential</span>
                          </div>
                        </motion.div>
                      )}

                      {/* Click Indicator */}
                      <div className="absolute top-2 right-2">
                        <div 
                          className="size-6 rounded-full flex items-center justify-center text-xs font-bold transition-all duration-300"
                          style={{ 
                            backgroundColor: selectedCompany === company.name ? company.color : 'rgba(255,255,255,0.1)',
                            color: selectedCompany === company.name ? 'white' : company.color
                          }}
                        >
                          {selectedCompany === company.name ? '−' : '+'}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Success Metrics */}
              <div className="mt-6 bg-card/50 backdrop-blur-sm rounded-xl p-4 border border-white/10">
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div>
                    <div className="text-[#0BC5EA] font-bold text-lg">153+</div>
                    <div className="text-foreground/60 text-xs">Alumni Placed</div>
                  </div>
                  <div>
                    <div className="text-[#6B46C1] font-bold text-lg">₹22L</div>
                    <div className="text-foreground/60 text-xs">Avg Package</div>
                  </div>
                  <div>
                    <div className="text-[#10B981] font-bold text-lg">85%</div>
                    <div className="text-foreground/60 text-xs">Salary Hike</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )
}