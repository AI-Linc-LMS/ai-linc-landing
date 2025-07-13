"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog"
import { Clock, Users, Star, GraduationCap, Calendar, Sparkles, ArrowRight, CheckCircle } from "lucide-react"
import { Badge } from "@/components/ui/badge"

// Modal Option Component
const ModalOption = ({ 
  icon: Icon, 
  title, 
  subtitle, 
  badge, 
  features, 
  buttonText, 
  onClick, 
  colorScheme,
  variant = "default"
}: {
  icon: any
  title: string
  subtitle: string
  badge: { icon: any, text: string }
  features: string[]
  buttonText: string
  onClick: () => void
  colorScheme: { bg: string, border: string, iconBg: string, textColor: string, buttonClass: string }
  variant?: "default" | "outline"
}) => (
  <div className="group relative">
    <div className={`absolute inset-0 ${colorScheme.bg} rounded-xl blur-sm group-hover:blur-none transition-all duration-300`}></div>
    <Card className={`relative bg-gradient-to-br from-slate-800/80 to-slate-900/80 ${colorScheme.border} hover:border-opacity-75 transition-all duration-300 group-hover:scale-[1.02] group-hover:shadow-xl`}>
      <CardContent className="p-6">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-3">
            <div className={`p-2 ${colorScheme.iconBg} rounded-lg`}>
              <Icon className="w-6 h-6 text-white" />
            </div>
            <div>
              <h3 className={`text-lg font-semibold ${colorScheme.textColor}`}>{title}</h3>
              <p className="text-sm text-slate-400">{subtitle}</p>
            </div>
          </div>
          <Badge className={`${colorScheme.textColor.replace('text-', 'bg-')}/20 ${colorScheme.textColor} ${colorScheme.border}`}>
            <badge.icon className="w-3 h-3 mr-1" />
            {badge.text}
          </Badge>
        </div>
        
        <div className="space-y-2 mb-4">
          {features.map((feature, index) => (
            <div key={index} className="flex items-center text-sm text-slate-300">
              {variant === "outline" ? (
                <Star className="w-4 h-4 text-yellow-400 mr-2" />
              ) : (
                <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
              )}
              {feature}
            </div>
          ))}
        </div>

        <Button
          variant={variant}
          className={`w-full ${colorScheme.buttonClass} font-semibold py-3 px-6 rounded-lg transition-all duration-300 group`}
          onClick={onClick}
        >
          {buttonText}
          <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
        </Button>
      </CardContent>
    </Card>
  </div>
)

export function CtaSection() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const router = useRouter()

  const handleProgramSelection = () => setIsModalOpen(true)

  const handleAssessment = () => {
    const url = '/assessment'
    const newWindow = window.open(url, '_blank', 'noopener,noreferrer')
    
    if (newWindow) {
      newWindow.focus()
      setIsModalOpen(false)
    } else {
      const userChoice = confirm('Popup blocked! Would you like to open the assessment in the same tab? Click OK to continue or Cancel to stay here.')
      if (userChoice) window.location.href = url
      setIsModalOpen(false)
    }
  }

  const handleWebinarRegistration = () => {
    setIsModalOpen(false)
    try {
      router.push('/workshop-registration')
    } catch (error) {
      console.error('Router navigation failed:', error)
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
                onClick={handleProgramSelection}
              >
                Choose Nanodegree (₹4,999)
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="w-full sm:w-auto border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-black text-sm sm:text-base px-6 sm:px-8 py-3"
                onClick={handleProgramSelection}
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

      {/* Enhanced Modal */}
      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent className="max-w-md sm:max-w-2xl bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 border-slate-700/50 shadow-2xl">
          <DialogHeader className="text-center pb-6 relative">
            <div className="absolute -top-4 -left-4 w-20 h-20 bg-gradient-to-br from-cyan-400/20 to-purple-500/20 rounded-full blur-xl"></div>
            <div className="absolute -top-2 -right-2 w-16 h-16 bg-gradient-to-br from-yellow-400/20 to-pink-500/20 rounded-full blur-lg"></div>
            
            <DialogTitle className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent relative z-10">
              <Sparkles className="w-8 h-8 inline mr-3 text-cyan-400" />
              Ready to Transform Your Career?
            </DialogTitle>
            <DialogDescription className="text-base sm:text-lg text-slate-300 mt-4 relative z-10">
              Choose your next step to unlock your potential in AI and tech
            </DialogDescription>
          </DialogHeader>

          <div className="space-y-6 pt-4">
            <ModalOption
              icon={GraduationCap}
              title="Take Assessment"
              subtitle="Evaluate your current skills"
              badge={{ icon: Clock, text: "30 mins" }}
              features={[
                "Check your eligibility for both programs",
                "Get personalized program recommendations",
                "Unlock potential scholarship opportunities"
              ]}
              buttonText="Start Assessment Now"
              onClick={handleAssessment}
              colorScheme={{
                bg: "bg-gradient-to-r from-cyan-500/20 to-blue-600/20",
                border: "border-cyan-500/30 hover:border-cyan-400/50",
                iconBg: "bg-gradient-to-br from-cyan-500 to-blue-600",
                textColor: "text-cyan-400",
                buttonClass: "bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white shadow-lg hover:shadow-xl"
              }}
            />

            <ModalOption
              icon={Calendar}
              title="Join Webinar"
              subtitle="Learn more before deciding"
              badge={{ icon: Users, text: "Live" }}
              features={[
                "Deep dive into program curriculum",
                "Meet industry experts and mentors",
                "Get your questions answered live"
              ]}
              buttonText="Register for Webinar"
              onClick={handleWebinarRegistration}
              variant="outline"
              colorScheme={{
                bg: "bg-gradient-to-r from-purple-500/20 to-pink-600/20",
                border: "border-purple-500/30 hover:border-purple-400/50",
                iconBg: "bg-gradient-to-br from-purple-500 to-pink-600",
                textColor: "text-purple-400",
                buttonClass: "border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white bg-transparent"
              }}
            />

            {/* Bottom Info */}
            <div className="text-center pt-4 border-t border-slate-700/50">
              <p className="text-sm text-slate-400 mb-2">
                💡 <strong>Pro Tip:</strong> Take the assessment for the best program match
              </p>
              <p className="text-xs text-slate-500">
                Both options help you make an informed decision about your AI career journey
              </p>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </section>
  )
} 