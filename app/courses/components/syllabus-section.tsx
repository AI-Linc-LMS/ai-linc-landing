import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { BookOpen, Code, Brain, Rocket, Users, Trophy, Target, Star, ArrowRight } from "lucide-react"
import Link from "next/link"

const syllabusData = [
  {
    phase: "Phase 1",
    title: "No-Code AI Product Development",
    duration: "Weeks 1-3",
    icon: Brain,
    color: "from-blue-500 to-cyan-500",
    topics: [
      "Introduction to Agentic AI and its significance",
      "Prompt Engineering fundamentals with Claude, ChatGPT",
      "Building with No-Code AI Tools (Glide, Zapier, Airtable)",
      "Creative product ideation and UI-driven app creation",
      "Final demos and product thinking with AI storyboarding"
    ]
  },
  {
    phase: "Phase 2", 
    title: "MERN Stack + AI Integration",
    duration: "Weeks 4-16",
    icon: Code,
    color: "from-purple-500 to-pink-500",
    topics: [
      "Web Development Fundamentals (HTML, CSS, JavaScript)",
      "React.js development with hooks and state management",
      "Node.js and Express.js backend development",
      "MongoDB database design and integration",
      "Full-stack project development with AI assistance"
    ]
  }
]

const weeklyBreakdown = [
  {
    weeks: "Weeks 1-3",
    title: "No-Code AI Foundation",
    description: "Master AI tools and build products without coding",
    highlights: ["Prompt Engineering", "Glide & Zapier", "AI Product MVPs"]
  },
  {
    weeks: "Weeks 4-7",
    title: "Web Development Basics",
    description: "HTML, CSS, JavaScript fundamentals with AI assistance",
    highlights: ["Responsive Design", "DOM Manipulation", "Modern JavaScript"]
  },
  {
    weeks: "Weeks 8-10",
    title: "React Development",
    description: "Component-driven UI development and state management",
    highlights: ["React Hooks", "API Integration", "Component Architecture"]
  },
  {
    weeks: "Weeks 11-14",
    title: "Backend & Database",
    description: "Node.js, Express, MongoDB with AI-powered development",
    highlights: ["REST APIs", "Authentication", "Database Design"]
  },
  {
    weeks: "Weeks 15-16",
    title: "Full-Stack Projects",
    description: "Real-world project development and deployment",
    highlights: ["Client Projects", "Deployment", "Portfolio Building"]
  }
]

const additionalFeatures = [
  {
    title: "AI-Powered Learning",
    description: "Claude, ChatGPT, and Copilot integration throughout",
    icon: Brain
  },
  {
    title: "Real Client Projects",
    description: "Work on actual projects in weeks 15-16",
    icon: Users
  },
  {
    title: "Career-Ready Portfolio",
    description: "Build deployable projects for your resume",
    icon: Trophy
  }
]

export function SyllabusSection() {
  return (
    <section className="py-16 md:py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 md:mb-6 px-2">
            📚 16-Week Learning Journey
          </h2>
          <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto px-2">
            From No-Code AI Product Development to Full-Stack MERN Development with AI Integration
          </p>
          <div className="flex items-center justify-center gap-4 mt-6">
            <Badge className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-4 py-2 text-lg">
              111 Days Total
            </Badge>
            <Badge className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-2 text-lg">
              2 Phases
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
            {syllabusData.map((phase, index) => {
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
            🗓️ Weekly Breakdown
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {weeklyBreakdown.map((period, index) => (
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
        </div>

        {/* Additional Features */}
        <div className="mb-12 md:mb-16">
          <h3 className="text-2xl sm:text-3xl font-bold text-center mb-8 md:mb-12 px-2">
            🎯 What Makes This Program Special
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
            {additionalFeatures.map((feature, index) => {
              const Icon = feature.icon
              return (
                <Card key={index} className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 border-gray-700 text-center hover:border-gray-600 transition-all duration-300">
                  <CardContent className="p-4 md:p-6">
                    <Icon className="w-8 h-8 sm:w-10 sm:h-10 text-cyan-400 mx-auto mb-3 md:mb-4" />
                    <h4 className="text-lg sm:text-xl font-semibold mb-2">{feature.title}</h4>
                    <p className="text-sm sm:text-base text-gray-300">{feature.description}</p>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>

        {/* Detailed Course Button */}
        <div className="text-center">
          <Link href="/courses/detailed-syllabus">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white px-8 py-4 text-lg font-semibold shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 transition-all duration-300"
            >
              <BookOpen className="w-6 h-6 mr-3" />
              View Detailed Week-by-Week Syllabus
              <ArrowRight className="w-6 h-6 ml-3" />
            </Button>
          </Link>
          <p className="text-gray-400 mt-4 text-sm">
            Get comprehensive week-by-week breakdown with learning outcomes, tools, and skills
          </p>
        </div>
      </div>
    </section>
  )
} 