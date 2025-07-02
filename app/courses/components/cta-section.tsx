"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog"
import { Clock, Users, Star, GraduationCap, Calendar } from "lucide-react"

export function CtaSection() {
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
      <div className="max-w-4xl mx-auto">
        <Card className="bg-gradient-to-br from-purple-900/20 to-pink-900/20 border-purple-400/30 overflow-hidden">
          <CardContent className="p-6 md:p-8 text-center">
            <div className="mb-6 md:mb-8">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 md:mb-6 px-2">
                🚀 Ready to Transform Your Career?
              </h2>
              <p className="text-lg sm:text-xl text-gray-300 mb-6 md:mb-8 px-2">
                Join thousands of students who've already started their journey to success
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6 mb-8 md:mb-10">
              <div className="flex flex-col items-center">
                <Clock className="w-6 h-6 sm:w-8 sm:h-8 text-purple-400 mb-2 sm:mb-3" />
                <span className="text-sm sm:text-base font-semibold">Limited Time</span>
                <span className="text-xs sm:text-sm text-gray-400">Seats filling fast</span>
              </div>
              <div className="flex flex-col items-center">
                <Users className="w-6 h-6 sm:w-8 sm:h-8 text-purple-400 mb-2 sm:mb-3" />
                <span className="text-sm sm:text-base font-semibold">80 Total Seats</span>
                <span className="text-xs sm:text-sm text-gray-400">Both programs combined</span>
              </div>
              <div className="flex flex-col items-center">
                <Star className="w-6 h-6 sm:w-8 sm:h-8 text-purple-400 mb-2 sm:mb-3" />
                <span className="text-sm sm:text-base font-semibold">100% Refundable</span>
                <span className="text-xs sm:text-sm text-gray-400">Within 7 days</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button 
                size="lg" 
                className="w-full sm:w-auto bg-green-600 hover:bg-green-700 text-sm sm:text-base px-6 sm:px-8 py-3"
                onClick={() => handleProgramSelection('nanodegree')}
              >
                Choose Nanodegree (₹4,999)
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="w-full sm:w-auto border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-black text-sm sm:text-base px-6 sm:px-8 py-3"
                onClick={() => handleProgramSelection('flagship')}
              >
                Choose Flagship (Scholarship)
              </Button>
            </div>

            <p className="text-xs sm:text-sm text-gray-400 mt-4 sm:mt-6 px-2">
              Questions? Contact our team at <span className="text-purple-400">support@ailinc.com</span>
            </p>
          </CardContent>
        </Card>
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