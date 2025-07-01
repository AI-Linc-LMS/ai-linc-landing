import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, Target, BookOpen, Users, Award } from "lucide-react"

const assessmentFeatures = [
  { icon: Target, title: "Aptitude + Reasoning Evaluation", desc: "Comprehensive skill assessment" },
  { icon: BookOpen, title: "Placement Readiness Report", desc: "Detailed analysis of your readiness" },
  { icon: Users, title: "LinkedIn Profile Review", desc: "Professional profile optimization" },
  { icon: Award, title: "AI Linc Certificate", desc: "Certificate of Participation (₹49 only)" }
]

export function AssessmentSection() {
  return (
    <section className="py-16 md:py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12 md:mb-16">
          <Badge variant="outline" className="text-cyan-400 border-cyan-400 mb-4">
            <CheckCircle className="w-4 h-4 mr-2" />
            Step 1
          </Badge>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 md:mb-6 px-2">Take the Free Assessment</h2>
          <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto px-4">
            Begin with a short, smart test designed to assess your aptitude, reasoning, and tech readiness.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {assessmentFeatures.map((item, index) => (
            <Card key={index} className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 border-gray-700 hover:border-cyan-400/50 transition-all duration-300">
              <CardHeader className="text-center pb-3">
                <item.icon className="w-10 h-10 md:w-12 md:h-12 text-cyan-400 mx-auto mb-3 md:mb-4" />
                <CardTitle className="text-base md:text-lg leading-tight px-2">{item.title}</CardTitle>
              </CardHeader>
              <CardContent className="pt-0">
                <p className="text-gray-300 text-center text-sm md:text-base px-2">{item.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-10 md:mt-12">
          <p className="text-base md:text-lg text-gray-300 mb-4 md:mb-6 px-4">
            <span className="text-green-400 font-semibold">No hidden fees. No commitment. Just clarity.</span>
          </p>
          <a href="https://app.ailinc.com/assessment/ai-linc-scholarship-test-2">
          <Button size="lg" className="bg-gradient-to-r from-green-400 to-blue-500 hover:from-green-500 hover:to-blue-600 text-sm sm:text-base px-6 sm:px-8">
            Take Free Assessment
          </Button>
          </a>
         
        </div>
      </div>
    </section>
  )
} 