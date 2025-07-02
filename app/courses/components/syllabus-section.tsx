import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { BookOpen, Code, Brain, Rocket, Users, Trophy, Target, Star, ArrowRight, Briefcase, Award, Monitor } from "lucide-react"
import Link from "next/link"

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
    ]
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
    ]
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
    ]
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
    ]
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
    ]
  }
]

const weeklyBreakdown = [
  {
    weeks: "Weeks 1-3",
    title: "AI Product in 21 Days",
    description: "Develop an AI product without writing code within 3 weeks via prompts and Agentic AI",
    highlights: ["AI Agent Engineering", "Intelligent Automation", "AI Product Strategy"]
  },
  {
    weeks: "Weeks 4-7",
    title: "Work Experience Foundation",
    description: "Foster work experience with program managers from Microsoft, Amazon and Google",
    highlights: ["MAANG Mentorship", "Real Project Work", "Industry Standards"]
  },
  {
    weeks: "Weeks 8-10",
    title: "Full-Stack Development",
    description: "Continue to develop coding skills with resource materials on platform",
    highlights: ["AI-Powered Coding", "Smart Development", "Intelligent Components"]
  },
  {
    weeks: "Weeks 11-14",
    title: "AI-Powered Backend Systems",
    description: "Advanced backend development with AI-driven development and smart databases",
    highlights: ["Intelligent APIs", "AI Authentication", "Smart Database Design"]
  },
  {
    weeks: "Weeks 15-16",
    title: "Final Product Launch",
    description: "Launch the final product that can create impact and bring opportunities",
    highlights: ["Product Launch", "Impact Creation", "Career Opportunities"]
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

export function SyllabusSection() {
  return (
    <section className="py-16 md:py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 md:mb-6 px-2">
            🤖 16-Week AI-Powered Development Journey
          </h2>
          <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto px-2">
            From AI Product Creation in 21 Days to Industry Work Experience with MAANG Leaders
          </p>
          <div className="flex items-center justify-center gap-4 mt-6">
            <Badge className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-4 py-2 text-lg">
              111 Days of AI Mastery
            </Badge>
            <Badge className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-2 text-lg">
              2 AI-Driven Phases
            </Badge>
          </div>
        </div>

        {/* Main Phases Timeline */}
        <div className="relative mb-12 md:mb-16">
          {/* Desktop Timeline Line */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-cyan-400 to-purple-400"></div>
          
          {/* Mobile Timeline Line */}
          <div className="md:hidden absolute left-6 top-0 w-0.5 h-full bg-gradient-to-b from-cyan-400 to-purple-400"></div>

          <div className="space-y-8 md:space-y-12">
            {detailedSyllabusData.map((phase, index) => {
              const Icon = phase.icon
              const isEven = index % 2 === 0
              
              return (
                <div key={index} className={`relative flex items-center ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                  {/* Timeline Icon */}
                  <div className="absolute left-3 md:left-1/2 md:transform md:-translate-x-1/2 w-6 h-6 md:w-12 md:h-12 rounded-full bg-gray-900 border-4 border-cyan-400 flex items-center justify-center z-10">
                    <Icon className="w-3 h-3 md:w-6 md:h-6 text-cyan-400" />
                  </div>

                  {/* Content Card */}
                  <div className={`ml-12 md:ml-0 w-full md:w-5/12 ${isEven ? 'md:mr-auto md:pr-8' : 'md:ml-auto md:pl-8'}`}>
                    <Card className="bg-gray-900/50 border-gray-700 hover:border-gray-600 transition-all duration-300">
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
                          {phase.topics.map((topic, topicIndex) => (
                            <li key={topicIndex} className="flex items-start">
                              <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full mt-2 mr-2 sm:mr-3 flex-shrink-0"></span>
                              <span className="text-sm sm:text-base text-gray-300">{topic}</span>
                            </li>
                          ))}
                        </ul>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              )
            })}
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