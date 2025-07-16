import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle, Trophy } from "lucide-react"

export function HowToChooseSection() {
  return (
    <div className="mt-12 md:mt-16 text-center">
      <h3 className="text-2xl sm:text-3xl font-bold mb-6 md:mb-8 px-2">🤔 How to Choose?</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 max-w-4xl mx-auto">
        <Card className="bg-gradient-to-br from-green-800/20 to-green-900/20 border-green-400/30">
          <CardContent className="p-4 md:p-6 text-center">
            <CheckCircle className="w-6 h-6 sm:w-8 sm:h-8 text-green-400 mx-auto mb-3 md:mb-4" />
            <p className="text-sm sm:text-base">
              <strong>Choose Nanodegree</strong> if you want a self-paced, structured learning journey with real-world exposure.
            </p>
          </CardContent>
        </Card>
        <Card className="bg-gradient-to-br from-yellow-800/20 to-yellow-900/20 border-yellow-400/30">
          <CardContent className="p-4 md:p-6 text-center">
            <Trophy className="w-6 h-6 sm:w-8 sm:h-8 text-yellow-400 mx-auto mb-3 md:mb-4" />
            <p className="text-sm sm:text-base">
              <strong>Choose Flagship</strong> if you're close to job readiness and want branding, referrals, and intensive mentoring.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  )
} 