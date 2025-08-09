import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { BookOpen, Code, Brain, Rocket, Users, Trophy, Target, Star, ArrowRight, Briefcase, Award, Monitor, Clock, CheckCircle, TrendingUp } from "lucide-react"
import Link from "next/link"
import { useRef, useEffect, useState } from "react"
import { motion, useAnimation, useInView, useScroll, useTransform } from "framer-motion"

const syllabusData = [
  {
    phase: "Phase 1",
    title: "AI product in 21 days",
    duration: "Days 1-21",
    icon: Brain,
    color: "from-blue-500 to-cyan-500",
    description: "Develop an AI product without writing code within 3 weeks. Via prompts and Agentic AI"
  },
  {
    phase: "Phase 2", 
    title: "Work exp. 90 days",
    duration: "Days 22-111",
    icon: Briefcase,
    color: "from-purple-500 to-pink-500",
    description: "Foster your work experience by working with a program manager from Microsoft, Amazon and Google"
  },
  {
    phase: "Phase 3",
    title: "Full-stack dev code",
    duration: "Ongoing",
    icon: Code,
    color: "from-green-500 to-teal-500",
    description: "Continue to develop your coding skills with our resource materials on platform"
  },
  {
    phase: "Phase 4",
    title: "Final product",
    duration: "Final Stage",
    icon: Rocket,
    color: "from-orange-500 to-red-500",
    description: "Launch the final product that can create impact and bring opportunities"
  },
  {
    phase: "Phase 5",
    title: "Profile launching",
    duration: "Career Ready",
    icon: Award,
    color: "from-pink-500 to-purple-500",
    description: "Make your profile ready for AI Job listings"
  }
]

const detailedSyllabusData = [
  {
    phase: "Phase 1",
    title: "AI product in 21 days",
    duration: "Days 1-21",
    icon: Brain,
    color: "from-blue-500 to-cyan-500",
    topics: [
      "Develop an AI product without writing code within 3 weeks",
      "Advanced Prompt Engineering with Claude, GPT-4, and custom AI agents",
      "Zero-code AI product development using Glide, Zapier, and AI workflows",
      "AI-driven product ideation and intelligent UI generation",
      "Via prompts and Agentic AI - autonomous product demos"
    ],
    backContent: {
      title: "Phase 1 Outcomes",
      achievements: [
        "Build 3 AI products without coding",
        "Master prompt engineering techniques",
        "Create autonomous AI workflows",
        "Generate intelligent UI/UX designs",
        "Deploy AI-powered applications"
      ],
      tools: ["Claude AI", "GPT-4", "Glide", "Zapier", "Bubble"],
      duration: "21 Days",
      difficulty: "Beginner to Intermediate"
    }
  },
  {
    phase: "Phase 2", 
    title: "Work exp. 90 days",
    duration: "Days 22-111",
    icon: Briefcase,
    color: "from-purple-500 to-pink-500",
    topics: [
      "Foster work experience with program managers from Microsoft, Amazon and Google",
      "Real-world project management and collaboration skills",
      "Industry-standard development practices and methodologies",
      "Professional communication and team dynamics",
      "Mentorship from MAANG company veterans"
    ],
    backContent: {
      title: "Phase 2 Outcomes",
      achievements: [
        "90 days of real work experience",
        "MAANG-level project management skills",
        "Industry-standard methodologies",
        "Professional portfolio development",
        "Mentorship from tech leaders"
      ],
      tools: ["Jira", "Slack", "GitHub", "Figma", "Azure DevOps"],
      duration: "90 Days",
      difficulty: "Intermediate to Advanced"
    }
  },
  {
    phase: "Phase 3",
    title: "Full-stack dev code",
    duration: "Ongoing Development",
    icon: Code,
    color: "from-green-500 to-teal-500",
    topics: [
      "Continue to develop coding skills with resource materials on platform",
      "AI-assisted web development with intelligent code generation",
      "Full-stack AI applications with machine learning model integration",
      "Modern frameworks: React, Next.js, Node.js, and AI APIs",
      "Database design and management with AI optimization"
    ],
    backContent: {
      title: "Phase 3 Outcomes",
      achievements: [
        "Full-stack development mastery",
        "AI-integrated applications",
        "Modern framework expertise",
        "Database optimization skills",
        "Production-ready projects"
      ],
      tools: ["React", "Next.js", "Node.js", "Python", "TensorFlow"],
      duration: "Ongoing",
      difficulty: "Advanced"
    }
  },
  {
    phase: "Phase 4",
    title: "Final product",
    duration: "Product Launch Phase",
    icon: Rocket,
    color: "from-orange-500 to-red-500",
    topics: [
      "Launch the final product that can create impact and bring opportunities",
      "Product deployment and scaling strategies",
      "User feedback integration and iterative development",
      "Performance optimization and monitoring",
      "Portfolio development and project presentation"
    ],
    backContent: {
      title: "Phase 4 Outcomes",
      achievements: [
        "Launch production-ready product",
        "Implement scaling strategies",
        "User feedback integration",
        "Performance optimization",
        "Professional portfolio"
      ],
      tools: ["AWS", "Vercel", "Docker", "Analytics", "Monitoring"],
      duration: "Final Stage",
      difficulty: "Expert"
    }
  },
  {
    phase: "Phase 5",
    title: "Profile launching",
    duration: "Career Preparation",
    icon: Award,
    color: "from-pink-500 to-purple-500",
    topics: [
      "Make your profile ready for AI Job listings",
      "Resume optimization for AI and tech roles",
      "Interview preparation and mock sessions",
      "LinkedIn and professional network building",
      "Job application strategies and career guidance"
    ],
    backContent: {
      title: "Phase 5 Outcomes",
      achievements: [
        "AI-optimized resume",
        "Interview readiness",
        "Professional networking",
        "Job application mastery",
        "Career guidance"
      ],
      tools: ["LinkedIn", "Resume AI", "Mock Interviews", "Career Portal"],
      duration: "Career Ready",
      difficulty: "Professional"
    }
  }
]

const weeklyBreakdown = [
  {
    weeks: "Weeks 1-3",
    title: "AI Product Genesis: Zero-to-Hero in 21 Days",
    description: "Unleash your inner AI architect! Transform ideas into intelligent products using conversational AI agents and prompt engineering wizardry - no traditional coding required",
    highlights: ["Neural Agent Orchestration", "Cognitive Automation Mastery", "AI Product Alchemy"]
  },
  {
    weeks: "Weeks 4-7",
    title: "Silicon Valley Simulation Lab",
    description: "Step into the minds of MAANG titans! Experience authentic tech company workflows guided by Microsoft, Amazon, and Google program managers in our immersive work simulation",
    highlights: ["MAANG DNA Infusion", "Real-World AI Projects", "Tech Giant Methodologies"]
  },
  {
    weeks: "Weeks 8-10",
    title: "AI-Augmented Development Mastery",
    description: "Evolve into a cyborg developer! Harness AI copilots and intelligent code generation to build sophisticated applications at superhuman speed",
    highlights: ["AI-Assisted Code Evolution", "Intelligent Development Ecosystem", "Smart Component Architecture"]
  },
  {
    weeks: "Weeks 11-14",
    title: "Neural Backend Engineering",
    description: "Architect the brain of tomorrow's applications! Design self-learning backend systems with AI-driven APIs, intelligent databases, and autonomous scaling mechanisms",
    highlights: ["Self-Healing API Networks", "Cognitive Authentication Systems", "Adaptive Database Intelligence"]
  },
  {
    weeks: "Weeks 15-16",
    title: "AI Product Constellation Launch",
    description: "Ignite your digital legacy! Deploy your AI-powered creation into the wild, creating ripple effects that attract opportunities and transform careers",
    highlights: ["Stellar Product Deployment", "Impact Amplification Engine", "Career Trajectory Acceleration"]
  }
]

const learningComponents = [
  {
    title: "AI Linc Platform",
    description: "Async learning of the concepts, auto-evaluated grades and progress reports",
    icon: Monitor
  },
  {
    title: "Live Training Sessions",
    description: "Foster your learning experience by working Microsoft, Amazon and Google AI Devs Online or at HYD/Pune Centers",
    icon: Users
  },
  {
    title: "Mentor Sessions",
    description: "Understand the gap with industry experts and veterans",
    icon: Target
  },
  {
    title: "Mocks and Soft-Skills",
    description: "Get interviewed by same people who interviews for MAANG",
    icon: Star
  },
  {
    title: "PM Sessions",
    description: "Simulate the same work experience as tech companies",
    icon: Trophy
  }
]

// Flip Card Component
function FlipCard({ phase, index }: { phase: any; index: number }) {
  const [isFlipped, setIsFlipped] = useState(false)
  const cardRef = useRef(null)

  const Icon = phase.icon
  const isEven = index % 2 === 0

  // Handle hover interactions
  const handleMouseEnter = () => {
    setIsFlipped(true)
  }

  const handleMouseLeave = () => {
    setIsFlipped(false)
  }

  return (
    <div 
      ref={cardRef}
      className={`relative flex items-center ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'}`}
    >
      {/* Timeline Icon */}
      <div className="absolute left-3 md:left-1/2 md:transform md:-translate-x-1/2 w-6 h-6 md:w-12 md:h-12 rounded-full bg-gray-900 border-4 border-cyan-400 flex items-center justify-center z-10">
        <Icon className="w-3 h-3 md:w-6 md:h-6 text-cyan-400" />
      </div>

      {/* Flip Card Container */}
      <div className={`ml-12 md:ml-0 w-full md:w-5/12 ${isEven ? 'md:mr-auto md:pr-8' : 'md:ml-auto md:pl-8'}`}>
        <div 
          className="relative h-[400px] md:h-[450px] transition-transform duration-700 ease-in-out"
          style={{
            transformStyle: 'preserve-3d',
            transform: isFlipped ? 'rotateY(180deg)' : 'rotateY(0deg)'
          }}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          {/* Front Side */}
          <div 
            className="absolute inset-0"
            style={{ backfaceVisibility: 'hidden' }}
          >
            <Card className="bg-gray-900/50 border-gray-700 hover:border-gray-600 hover:shadow-lg hover:shadow-cyan-500/10 transition-all duration-300 h-full cursor-pointer">
              <CardHeader className="pb-3">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2 gap-2">
                  <Badge className={`bg-gradient-to-r ${phase.color} text-white text-xs sm:text-sm w-fit`}>
                    {phase.phase}
                  </Badge>
                  <span className="text-xs sm:text-sm text-gray-400">{phase.duration}</span>
                </div>
                <CardTitle className="text-lg sm:text-xl md:text-2xl">{phase.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-1 sm:space-y-2">
                  {phase.topics.map((topic: string, topicIndex: number) => (
                    <li key={topicIndex} className="flex items-start">
                      <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full mt-2 mr-2 sm:mr-3 flex-shrink-0"></span>
                      <span className="text-sm sm:text-base text-gray-300">{topic}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-4 text-center">
                  <Badge variant="outline" className="border-cyan-400/50 text-cyan-300 text-xs animate-pulse">
                    Hover to see outcomes
                  </Badge>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Back Side */}
          <div 
            className="absolute inset-0"
            style={{ 
              backfaceVisibility: 'hidden',
              transform: 'rotateY(180deg)' 
            }}
          >
            <Card className="bg-gradient-to-br from-gray-800/80 to-gray-900/80 border-cyan-400/50 h-full shadow-lg shadow-cyan-500/20 cursor-pointer">
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between mb-2">
                  <Badge className={`bg-gradient-to-r ${phase.color} text-white text-xs sm:text-sm`}>
                    {phase.backContent.title}
                  </Badge>
                  <Badge variant="outline" className="border-cyan-400/50 text-cyan-300 text-xs">
                    {phase.backContent.difficulty}
                  </Badge>
                </div>
                <CardTitle className="text-lg sm:text-xl md:text-2xl text-cyan-300">
                  Outcomes & Tools
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="text-sm font-semibold text-cyan-300 mb-2 flex items-center">
                    <CheckCircle className="w-4 h-4 mr-2" />
                    Key Achievements
                  </h4>
                  <ul className="space-y-1">
                    {phase.backContent.achievements.map((achievement: string, idx: number) => (
                      <li key={idx} className="flex items-start text-sm">
                        <TrendingUp className="w-3 h-3 text-green-400 mt-0.5 mr-2 flex-shrink-0" />
                        <span className="text-gray-300">{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  <h4 className="text-sm font-semibold text-cyan-300 mb-2 flex items-center">
                    <Monitor className="w-4 h-4 mr-2" />
                    Tools & Technologies
                  </h4>
                  <div className="flex flex-wrap gap-1">
                    {phase.backContent.tools.map((tool: string, idx: number) => (
                      <Badge key={idx} variant="outline" className="border-cyan-400/30 text-cyan-300 text-xs">
                        {tool}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div className="flex items-center justify-between pt-2 border-t border-gray-700">
                  <div className="flex items-center text-sm text-gray-400">
                    <Clock className="w-4 h-4 mr-1" />
                    {phase.backContent.duration}
                  </div>
                  <Badge className="bg-gradient-to-r from-green-500 to-teal-500 text-white text-xs">
                    Interactive Learning
                  </Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}

export function SyllabusSection() {
  const sectionRef = useRef(null)
  const controls = useAnimation()
  const isInView = useInView(sectionRef, { once: true })

  useEffect(() => {
    if (isInView) {
      controls.start("visible")
    }
  }, [controls, isInView])

  return (
    <section className="py-16 md:py-20 px-4" ref={sectionRef}>
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12 md:mb-16">
          <div className="flex items-center justify-center gap-4 mt-6">
            <Badge className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-4 py-2 text-lg">
              111 Days of AI Mastery
            </Badge>
            <Badge className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-2 text-lg">
              Hover Flip Cards
            </Badge>
          </div>
          <p className="text-sm text-gray-400 mt-4 px-2">
            💡 Hover over cards to explore detailed outcomes & tools
          </p>
        </div>

        {/* Main Phases Timeline with Flip Cards */}
        <div className="relative mb-12 md:mb-16">
          {/* Desktop Timeline Line */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-cyan-400 to-purple-400"></div>
          
          {/* Mobile Timeline Line */}
          <div className="md:hidden absolute left-6 top-0 w-0.5 h-full bg-gradient-to-b from-cyan-400 to-purple-400"></div>

          <div className="space-y-8 md:space-y-12">
            {detailedSyllabusData.map((phase, index) => (
              <FlipCard key={index} phase={phase} index={index} />
            ))}
          </div>
        </div>

        {/* Weekly Breakdown */}
        <div className="mb-12 md:mb-16">
          <h3 className="text-2xl sm:text-3xl font-bold text-center mb-8 md:mb-12 px-2">
            🧠 AI-Enhanced Weekly Progression
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {weeklyBreakdown.slice(0, 3).map((period, index) => (
              <Card key={index} className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 border-gray-700 hover:border-gray-600 transition-all duration-300">
                <CardContent className="p-4 md:p-6">
                  <Badge className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white mb-3">
                    {period.weeks}
                  </Badge>
                  <h4 className="text-lg sm:text-xl font-semibold mb-2">{period.title}</h4>
                  <p className="text-sm sm:text-base text-gray-300 mb-4">{period.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {period.highlights.map((highlight, idx) => (
                      <Badge key={idx} variant="outline" className="border-cyan-400/50 text-cyan-300 text-xs">
                        {highlight}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          {weeklyBreakdown.length > 3 && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 mt-4 md:mt-6 max-w-2xl mx-auto">
              {weeklyBreakdown.slice(3).map((period, index) => (
                <Card key={index + 3} className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 border-gray-700 hover:border-gray-600 transition-all duration-300">
                  <CardContent className="p-4 md:p-6">
                    <Badge className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white mb-3">
                      {period.weeks}
                    </Badge>
                    <h4 className="text-lg sm:text-xl font-semibold mb-2">{period.title}</h4>
                    <p className="text-sm sm:text-base text-gray-300 mb-4">{period.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {period.highlights.map((highlight, idx) => (
                        <Badge key={idx} variant="outline" className="border-cyan-400/50 text-cyan-300 text-xs">
                          {highlight}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </div>

        {/* Learning Components */}
        <div className="mb-12 md:mb-16">
          <h3 className="text-2xl sm:text-3xl font-bold text-center mb-8 md:mb-12 px-2">
            ⚡ Revolutionary Learning Experience
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {learningComponents.slice(0, 3).map((component, index) => {
              const Icon = component.icon
              return (
                <Card key={index} className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 border-gray-700 text-center hover:border-gray-600 transition-all duration-300">
                  <CardContent className="p-4 md:p-6">
                    <Icon className="w-8 h-8 sm:w-10 sm:h-10 text-cyan-400 mx-auto mb-3 md:mb-4" />
                    <h4 className="text-lg sm:text-xl font-semibold mb-2">{component.title}</h4>
                    <p className="text-sm sm:text-base text-gray-300">{component.description}</p>
                  </CardContent>
                </Card>
              )
            })}
          </div>
          {learningComponents.length > 3 && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 mt-4 md:mt-6 max-w-2xl mx-auto">
              {learningComponents.slice(3).map((component, index) => {
                const Icon = component.icon
                return (
                  <Card key={index + 3} className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 border-gray-700 text-center hover:border-gray-600 transition-all duration-300">
                    <CardContent className="p-4 md:p-6">
                      <Icon className="w-8 h-8 sm:w-10 sm:h-10 text-cyan-400 mx-auto mb-3 md:mb-4" />
                      <h4 className="text-lg sm:text-xl font-semibold mb-2">{component.title}</h4>
                      <p className="text-sm sm:text-base text-gray-300">{component.description}</p>
                    </CardContent>
                  </Card>
                )
              })}
            </div>
          )}
        </div>

        {/* Detailed Course Button */}
        <div className="text-center">
          <Link href="/courses/detailed-syllabus">
            <Button 
              size="lg" 
              className=" w-full bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white px-4 sm:px-6 md:px-8 py-3 sm:py-4 text-sm sm:text-base md:text-lg font-semibold shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 transition-all duration-300 mx-auto sm:w-auto"
            >
              <BookOpen className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
              <span className="text-xs sm:text-sm md:text-base">
                <span className="hidden sm:inline">Explore AI-Powered Week-by-Week Curriculum</span>
                <span className="sm:hidden">Explore AI Curriculum</span>
              </span>
              <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 ml-2" />
            </Button>
          </Link>
          <p className="text-gray-400 mt-4 text-sm">
            Discover comprehensive AI-driven learning outcomes, intelligent tools, and next-gen development skills
          </p>
        </div>
      </div>
    </section>
  )
} 