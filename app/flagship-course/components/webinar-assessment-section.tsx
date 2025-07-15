import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Play, Calendar, Users, Lightbulb, Gift, Clock, CheckCircle, Target, BookOpen, Award } from "lucide-react"

const webinarFeatures = [
  {
    icon: Lightbulb,
    title: "AI Industry Insights",
    desc: "Latest trends and opportunities in AI",
    step: 1
  },
  {
    icon: Users,
    title: "Expert Guidance",
    desc: "Learn from industry professionals",
    step: 1
  },
  {
    icon: Gift,
    title: "Exclusive Resources",
    desc: "Free AI tools and templates",
    step: 1
  },
  {
    icon: Clock,
    title: "Live Q&A Session",
    desc: "Get your questions answered directly",
    step: 1
  }
]

const assessmentFeatures = [
  {
    icon: Target,
    title: "Aptitude + Reasoning Evaluation",
    desc: "Comprehensive skill assessment",
    step: 2
  },
  {
    icon: BookOpen,
    title: "Placement Readiness Report",
    desc: "Detailed analysis of your readiness",
    step: 2
  },
  {
    icon: Users,
    title: "LinkedIn Profile Review",
    desc: "Professional profile optimization",
    step: 2
  },
  {
    icon: Award,
    title: "AI Linc Certificate",
    desc: "Certificate of Appreciation (₹49 only)",
    step: 2
  }
]

export function WebinarAssessmentSection() {
  return (
    <section className="py-16 md:py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12 md:mb-16">
          <Badge variant="outline" className="text-cyan-400 border-cyan-400 mb-4">
            <Play className="w-4 h-4 mr-2" />
            Step 1
          </Badge>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 md:mb-6 px-2">
            Free Webinar & Smart Assessment
          </h2>
          <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto px-4">
            Join our exclusive webinar to discover AI career opportunities, then take our comprehensive assessment to evaluate your potential.
          </p>
        </div>

        <div className="space-y-12">
          {/* Webinar Features */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {webinarFeatures.map((item, index) => (
              <div
                key={index}
                className="bg-[#0E1525] border border-[#1E2A3A] rounded-lg p-4 md:p-6 text-center hover:border-cyan-400 transition-all duration-300"
              >
                <div className="flex justify-center mb-3 md:mb-4">
                  {/* <Badge variant="outline" className="text-cyan-400 border-cyan-400 mb-2 mr-2">
                    Step 1
                  </Badge> */}
                  <item.icon className="w-8 h-8 md:w-10 md:h-10 text-cyan-400" />
                </div>
                <h3 className="text-base md:text-lg font-semibold text-white mb-2">{item.title}</h3>
                <p className="text-sm text-gray-400">{item.desc}</p>
              </div>
            ))}
          </div>

          {/* Assessment Features */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {assessmentFeatures.map((item, index) => (
              <div
                key={index}
                className="bg-[#0E1525] border border-[#1E2A3A] rounded-lg p-4 md:p-6 text-center hover:border-green-400 transition-all duration-300"
              >
                <div className="flex justify-center mb-3 md:mb-4">
                  {/* <Badge variant="outline" className="text-green-400 border-green-400 mb-2 mr-2">
                    Step 2
                  </Badge> */}
                  <item.icon className="w-8 h-8 md:w-10 md:h-10 text-cyan-400" />
                </div>
                <h3 className="text-base md:text-lg font-semibold text-white mb-2">{item.title}</h3>
                <p className="text-sm text-gray-400">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mt-10 md:mt-12 space-y-4">
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="flex items-center text-cyan-400">
              <Calendar className="w-5 h-5 mr-2" />
              <span className="text-sm md:text-base">Next Session: Every Weekend</span>
            </div>
            <div className="flex items-center text-green-400">
              <Clock className="w-5 h-5 mr-2" />
              <span className="text-sm md:text-base">Assessment: 30 Minutes</span>
            </div>
          </div>

          <p className="text-base md:text-lg text-gray-300 mb-4 md:mb-6 px-4">
            <span className="text-green-400 font-semibold">No hidden fees. No commitment. Just clarity.</span>
          </p>

          <div className="flex md:flex-row flex-col gap-4 justify-center space-x-4">
            <a href="/workshop-registration">
              <Button
                size="lg"
                className="bg-gradient-to-r from-cyan-400 to-blue-500 hover:from-cyan-500 hover:to-blue-600 text-sm sm:text-base px-6 sm:px-8"
              >
                <Play className="w-5 h-5 mr-2" />
                Register for Free Webinar
              </Button>
            </a>
            <a href="/assessment" target="_blank" rel="noopener noreferrer">
              <Button
                size="lg"
                className="bg-gradient-to-r from-green-400 to-blue-500 hover:from-green-500 hover:to-blue-600 text-sm sm:text-base px-6 sm:px-8"
              >
                <CheckCircle className="w-5 h-5 mr-2" />
                Take Free Assessment
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
} 