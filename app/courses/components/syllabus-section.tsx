import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { BookOpen, Code, Brain, Rocket, Users, Trophy, Target, Star, ArrowRight } from "lucide-react"
import Link from "next/link"

const syllabusData = [
  {
    phase: "Phase 1",
    title: "Foundation Building",
    duration: "Weeks 1-4",
    icon: BookOpen,
    color: "from-blue-500 to-cyan-500",
    topics: [
      "Introduction to AI & Machine Learning fundamentals",
      "Python programming essentials for AI",
      "Data structures and algorithms",
      "Git version control and collaboration",
      "Setting up development environment"
    ]
  },
  {
    phase: "Phase 2", 
    title: "Core AI Development",
    duration: "Weeks 5-12",
    icon: Brain,
    color: "from-purple-500 to-pink-500",
    topics: [
      "Deep Learning with TensorFlow/PyTorch",
      "Natural Language Processing (NLP)",
      "Computer Vision and Image Processing",
      "API development with FastAPI/Flask",
      "Database design and management"
    ]
  },
  {
    phase: "Phase 3",
    title: "Full-Stack Integration", 
    duration: "Weeks 13-20",
    icon: Code,
    color: "from-green-500 to-teal-500",
    topics: [
      "React.js for modern web development",
      "Node.js backend development",
      "MongoDB database integration",
      "RESTful API design and implementation",
      "Authentication and security best practices"
    ]
  },
  {
    phase: "Phase 4",
    title: "AI Product Development",
    duration: "Weeks 21-24",
    icon: Rocket,
    color: "from-orange-500 to-red-500",
    topics: [
      "21-Day No-Code AI Product Builder project",
      "Deployment strategies (AWS, Docker, Kubernetes)",
      "Performance optimization and scaling",
      "Testing strategies for AI applications",
      "Product management fundamentals"
    ]
  },
  {
    phase: "Phase 5",
    title: "Real-World Experience",
    duration: "Weeks 25-36",
    icon: Users,
    color: "from-indigo-500 to-purple-500",
    topics: [
      "90-Day Real-Client Work Experience",
      "Agile development methodologies",
      "Client communication and project management",
      "Code review and quality assurance",
      "Portfolio development and showcase"
    ]
  },
  {
    phase: "Phase 6",
    title: "Career Preparation",
    duration: "Weeks 37-40",
    icon: Trophy,
    color: "from-yellow-500 to-orange-500",
    topics: [
      "Resume building and LinkedIn optimization",
      "Technical interview preparation",
      "System design fundamentals",
      "Behavioral interview coaching",
      "Salary negotiation strategies"
    ]
  }
]

const additionalFeatures = [
  {
    title: "Weekly Mentorship Sessions",
    description: "1-on-1 guidance from industry professionals",
    icon: Target
  },
  {
    title: "Peer Learning Community",
    description: "Connect with fellow learners and alumni",
    icon: Users
  },
  {
    title: "Lifetime Platform Access",
    description: "Access to all course materials forever",
    icon: Star
  }
]

export function SyllabusSection() {
  return (
    <section className="py-16 md:py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 md:mb-6 px-2">
            📚 Complete Learning Journey
          </h2>
          <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto px-2">
            A carefully crafted 40-week program that takes you from beginner to industry-ready professional
          </p>
        </div>

        {/* Timeline */}
        <div className="relative mb-12 md:mb-16">
          {/* Desktop Timeline Line */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-cyan-400 via-purple-400 to-yellow-400"></div>
          
          {/* Mobile Timeline Line */}
          <div className="md:hidden absolute left-6 top-0 w-0.5 h-full bg-gradient-to-b from-cyan-400 via-purple-400 to-yellow-400"></div>

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

        {/* Additional Features */}
        <div className="mb-12 md:mb-16">
          <h3 className="text-2xl sm:text-3xl font-bold text-center mb-8 md:mb-12 px-2">
            🎯 Additional Support & Features
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
            {additionalFeatures.map((feature, index) => {
              const Icon = feature.icon
              return (
                <Card key={index} className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 border-gray-700 text-center">
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
              View Detailed Course Syllabus
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