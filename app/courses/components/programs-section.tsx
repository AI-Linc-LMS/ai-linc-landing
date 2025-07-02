"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog"
import { CheckCircle, Star, Trophy, Rocket, GraduationCap, Calendar } from "lucide-react"

const nanodegreeFeatures = [
  "100+ hours of video content on AI, MERN, and more",
  "Auto-evaluated quizzes and coding assignments",
  "21-Day No-Code AI Product Builder",
  "90-Day Real-Client Work Experience",
  "Career reports, weekly mentorship, and lifetime platform access"
]

const flagshipFeatures = [
  "Live sessions by professionals from MAANG",
  "Resume branding + AI-powered portfolio support",
  "Direct referrals to our hiring partners",
  "Technical + behavioral mock interviews",
  "Personal mentorship from product managers"
]

export function ProgramsSection() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [selectedProgram, setSelectedProgram] = useState<'nanodegree' | 'flagship' | null>(null)
  const router = useRouter()

  const handleProgramSelection = (program: 'nanodegree' | 'flagship') => {
    setSelectedProgram(program)
    setIsModalOpen(true)
  }

  const handleAssessment = () => {
    const url = 'https://app.ailinc.com/assessment/ai-linc-scholarship-test-2'

    // Try to open in new tab immediately (before closing modal)
    const newWindow = window.open(url, '_blank', 'noopener,noreferrer')

    if (newWindow) {
      // Successfully opened in new tab
      newWindow.focus()
      setIsModalOpen(false)
    } else {
      // Popup was blocked, ask user or redirect in same window
      const userChoice = confirm(
        'Popup blocked! Would you like to open the assessment in the same tab? Click OK to continue or Cancel to stay here.'
      )

      if (userChoice) {
        window.location.href = url
      }
      setIsModalOpen(false)
    }
  }

  const handleWebinarRegistration = () => {
    setIsModalOpen(false)

    try {
      // Use Next.js router for internal navigation
      router.push('/workshop-registration')
    } catch (error) {
      console.error('Router navigation failed:', error)
      // Fallback to window.location
      window.location.href = '/workshop-registration'
    }
  }

  return (
    <section className="py-16 md:py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 md:mb-6 px-2">
            <Rocket className="inline w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 text-cyan-400 mr-2 sm:mr-4" />
            Two Powerful Programs to Fill the Gap
          </h2>
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 md:gap-8">
          {/* Nanodegree Program */}
          <Card className="bg-gradient-to-br from-green-800/20 to-green-900/20 border-green-400/30 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-green-400 to-green-600"></div>
            <CardHeader className="pb-4">
              <div className="flex flex-col sm:flex-row items-center sm:items-start justify-between mb-4 gap-2">
                <Badge className="bg-green-400 text-green-900 text-xs sm:text-sm">🟢 NANODEGREE</Badge>
                <Badge variant="outline" className="text-green-400 border-green-400 text-xs sm:text-sm">50 Seats Only</Badge>
              </div>
              <CardTitle className="text-xl sm:text-2xl mb-2">AI Linc Nanodegree Program</CardTitle>
              <CardDescription className="text-base sm:text-lg">
                Your structured, self-paced pathway into AI & full-stack product development
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4 md:space-y-6">
              <div className="space-y-2 md:space-y-3">
                {nanodegreeFeatures.map((feature, index) => (
                  <div key={index} className="flex items-start">
                    <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-green-400 mr-2 sm:mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-sm sm:text-base">{feature}</span>
                  </div>
                ))}
              </div>

              <Separator className="bg-gray-700" />

              <div className="space-y-2">
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-1">
                  <span className="text-base sm:text-lg font-semibold">Price:</span>
                  <span className="text-xl sm:text-2xl font-bold text-green-400">₹4,999</span>
                </div>
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-1">
                  <span className="text-sm sm:text-base">Booking Amount:</span>
                  <span className="text-sm sm:text-lg text-green-400">₹499 (fully refundable within 7 days)</span>
                </div>
              </div>

              <Button
                className="w-full bg-green-600 hover:bg-green-700 text-sm sm:text-base py-2 sm:py-3"
                onClick={() => handleProgramSelection('nanodegree')}
              >
                Choose Nanodegree
              </Button>
            </CardContent>
          </Card>

          {/* Flagship Program */}
          <Card className="bg-gradient-to-br from-yellow-800/20 to-yellow-900/20 border-yellow-400/30 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-yellow-400 to-yellow-600"></div>
            <CardHeader className="pb-4">
              <div className="flex flex-col sm:flex-row items-center sm:items-start justify-between mb-4 gap-2">
                <Badge className="bg-yellow-400 text-yellow-900 text-xs sm:text-sm">🟡 FLAGSHIP</Badge>
                <Badge variant="outline" className="text-yellow-400 border-yellow-400 text-xs sm:text-sm">30 Seats Only</Badge>
              </div>
              <CardTitle className="text-xl sm:text-2xl mb-2">AI Linc Flagship Career Launchpad</CardTitle>
              <CardDescription className="text-base sm:text-lg">
                A premium, outcome-driven program designed to get you placed — fast
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4 md:space-y-6">
              <div className="space-y-2 md:space-y-3">
                <p className="text-xs sm:text-sm text-yellow-400 font-semibold">Includes everything in Nanodegree, plus:</p>
                {flagshipFeatures.map((feature, index) => (
                  <div key={index} className="flex items-start">
                    <Star className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-400 mr-2 sm:mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-sm sm:text-base">{feature}</span>
                  </div>
                ))}
              </div>

              <Separator className="bg-gray-700" />

              <div className="space-y-2">
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-1">
                  <span className="text-base sm:text-lg font-semibold">Price:</span>
                  <span className="text-xl sm:text-2xl font-bold text-yellow-400">Up to 100% Scholarship</span>
                </div>
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-1">
                  <span className="text-sm sm:text-base">Booking Amount:</span>
                  <span className="text-sm sm:text-lg text-yellow-400">₹999 (fully refundable within 7 days)</span>
                </div>
                <p className="text-xs sm:text-sm text-gray-400">(based on your assessment)</p>
              </div>

              <Button
                className="w-full bg-yellow-600 hover:bg-yellow-700 text-sm sm:text-base py-2 sm:py-3"
                onClick={() => handleProgramSelection('flagship')}
              >
                Choose Flagship
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* How to Choose */}
        <div className="mt-12 md:mt-16 text-center">
          <h3 className="text-2xl sm:text-3xl font-bold mb-6 md:mb-8 px-2">🤔 How to Choose?</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 max-w-4xl mx-auto">
            <Card className="bg-gradient-to-br from-green-800/20 to-green-900/20 border-green-400/30">
              <CardContent className="p-4 md:p-6 text-center">
                <CheckCircle className="w-6 h-6 sm:w-8 sm:h-8 text-green-400 mx-auto mb-3 md:mb-4" />
                <p className="text-sm sm:text-base"><strong>Choose Nanodegree</strong> if you want a self-paced, structured learning journey with real-world exposure.</p>
              </CardContent>
            </Card>
            <Card className="bg-gradient-to-br from-yellow-800/20 to-yellow-900/20 border-yellow-400/30">
              <CardContent className="p-4 md:p-6 text-center">
                <Trophy className="w-6 h-6 sm:w-8 sm:h-8 text-yellow-400 mx-auto mb-3 md:mb-4" />
                <p className="text-sm sm:text-base"><strong>Choose Flagship</strong> if you're close to job readiness and want branding, referrals, and intensive mentoring.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* Program Selection Modal */}
      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent className="max-w-md sm:max-w-lg">
          <DialogHeader className="text-center pb-4">
            <DialogTitle className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
              {selectedProgram === 'nanodegree' ? '🟢 Nanodegree Program' : '🟡 Flagship Program'}
            </DialogTitle>
            <DialogDescription className="text-base sm:text-lg text-muted-foreground">
              We'd like you to take the assessment first for us to check your eligibility
            </DialogDescription>
          </DialogHeader>

          <div className="space-y-4 pt-4">
            <Button
              className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-semibold py-3 px-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
              onClick={handleAssessment}
            >
              <GraduationCap className="w-5 h-5 mr-2" />
              Take Assessment First
            </Button>

            <Button
              variant="outline"
              className="w-full border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300"
              onClick={handleWebinarRegistration}
            >
              <Calendar className="w-5 h-5 mr-2" />
              Register for Upcoming Webinar
            </Button>

            <p className="text-xs sm:text-sm text-center text-gray-400 mt-4">
              Join our webinar to get to know more about the program before making a decision
            </p>
          </div>
        </DialogContent>
      </Dialog>
    </section>
  )
} 