import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, Target, Trophy, Zap, ArrowRight } from "lucide-react"

const highScoreFeatures = [
  "You're added to our Hiring Pool",
  "Our Placement Team contacts you",
  "Direct interviews are scheduled with hiring partners"
]

const improvementFeatures = [
  "Our Counseling Team reaches out",
  "You receive a Personalized Skill Gap Report",
  "You're guided to one of our career-ready programs below"
]

export function PostAssessmentSection() {
  return (
    <section className="py-16 md:py-20 px-4 bg-gradient-to-r from-gray-900/30 to-gray-800/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12 md:mb-16">
          <Badge variant="outline" className="text-purple-400 border-purple-400 mb-4">
            <Target className="w-4 h-4 mr-2" />
            Step 3
          </Badge>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 md:mb-6 px-2">What Happens After the Assessment?</h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
          {/* High Score Path */}
          <Card className="bg-gradient-to-br from-green-800/30 to-green-900/30 border-green-400/30">
            <CardHeader className="pb-4">
              <div className="flex flex-col sm:flex-row items-center sm:items-start mb-4">
                <Trophy className="w-6 h-6 sm:w-8 sm:h-8 text-yellow-400 mb-2 sm:mb-0 sm:mr-3 flex-shrink-0" />
                <CardTitle className="text-xl sm:text-2xl text-green-400 text-center sm:text-left">If You Score High</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="space-y-3 md:space-y-4 pt-0">
              {highScoreFeatures.map((item, index) => (
                <div key={index} className="flex items-start">
                  <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-green-400 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-sm sm:text-base">{item}</span>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Need Improvement Path */}
          <Card className="bg-gradient-to-br from-orange-800/30 to-orange-900/30 border-orange-400/30">
            <CardHeader className="pb-4">
              <div className="flex flex-col sm:flex-row items-center sm:items-start mb-4">
                <Zap className="w-6 h-6 sm:w-8 sm:h-8 text-orange-400 mb-2 sm:mb-0 sm:mr-3 flex-shrink-0" />
                <CardTitle className="text-xl sm:text-2xl text-orange-400 text-center sm:text-left">If You Don't Qualify Yet</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="space-y-3 md:space-y-4 pt-0">
              {improvementFeatures.map((item, index) => (
                <div key={index} className="flex items-start">
                  <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 text-orange-400 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-sm sm:text-base">{item}</span>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
} 