"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog"
import { CheckCircle, Star, Trophy, Rocket, GraduationCap, Calendar, Sparkles, ArrowRight, Clock, Users } from "lucide-react"

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

// Program Card Component
const ProgramCard = ({ 
  type, 
  title, 
  description, 
  features, 
  price, 
  booking, 
  seats, 
  onSelect,
  colorScheme 
}: {
  type: string
  title: string
  description: string
  features: string[]
  price: string
  booking: string
  seats: string
  onSelect: () => void
  colorScheme: {
    gradient: string
    border: string
    badge: string
    badgeText: string
    accent: string
    button: string
    icon: any
  }
}) => (
  <Card className={`${colorScheme.gradient} ${colorScheme.border} relative overflow-hidden`}>
    <div className={`absolute top-0 left-0 w-full h-2 bg-gradient-to-r ${colorScheme.accent}`}></div>
    <CardHeader className="pb-4">
      <div className="flex flex-col sm:flex-row items-center sm:items-start justify-between mb-4 gap-2">
        <Badge className={`${colorScheme.badge} ${colorScheme.badgeText} text-xs sm:text-sm`}>{type}</Badge>
        <Badge variant="outline" className={`${colorScheme.badgeText} ${colorScheme.border} text-xs sm:text-sm`}>{seats}</Badge>
      </div>
      <CardTitle className="text-xl sm:text-2xl mb-2">{title}</CardTitle>
      <CardDescription className="text-base sm:text-lg">{description}</CardDescription>
    </CardHeader>
    <CardContent className="space-y-4 md:space-y-6">
      <div className="space-y-2 md:space-y-3">
        {type === "🟡 FLAGSHIP" && (
          <p className={`text-xs sm:text-sm ${colorScheme.badgeText} font-semibold`}>Includes everything in Nanodegree, plus:</p>
        )}
        {features.map((feature, index) => (
          <div key={index} className="flex items-start">
            <colorScheme.icon className={`w-4 h-4 sm:w-5 sm:h-5 ${colorScheme.badgeText} mr-2 sm:mr-3 mt-0.5 flex-shrink-0`} />
            <span className="text-sm sm:text-base">{feature}</span>
          </div>
        ))}
      </div>
      <Separator className="bg-gray-700" />
      <div className="space-y-2">
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-1">
          <span className="text-base sm:text-lg font-semibold">Price:</span>
          <span className={`text-xl sm:text-2xl font-bold ${colorScheme.badgeText}`}>{price}</span>
        </div>
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-1">
          <span className="text-sm sm:text-base">Booking Amount:</span>
          <span className={`text-sm sm:text-lg ${colorScheme.badgeText}`}>{booking}</span>
        </div>
        {type === "🟡 FLAGSHIP" && (
          <p className="text-xs sm:text-sm text-gray-400">(based on your assessment)</p>
        )}
      </div>
      <Button className={`w-full ${colorScheme.button} text-sm sm:text-base py-2 sm:py-3`} onClick={onSelect}>
        {type === "🟢 NANODEGREE" ? "Choose Nanodegree" : "Choose Flagship"}
      </Button>
    </CardContent>
  </Card>
)

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

export function ProgramsSection() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const router = useRouter()

  const handleProgramSelection = () => setIsModalOpen(true)

  const handleAssessment = () => {
    const url = 'https://app.ailinc.com/assessment/ai-linc-scholarship-test-2'
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

  const programConfigs = [
    {
      type: "🟢 NANODEGREE",
      title: "AI Linc Nanodegree Program",
      description: "Your structured, self-paced pathway into AI & full-stack product development",
      features: nanodegreeFeatures,
      price: "₹4,999",
      booking: "₹499 (fully refundable within 7 days)",
      seats: "50 Seats Only",
      colorScheme: {
        gradient: "bg-gradient-to-br from-green-800/20 to-green-900/20",
        border: "border-green-400/30",
        badge: "bg-green-400",
        badgeText: "text-green-400",
        accent: "from-green-400 to-green-600",
        button: "bg-green-600 hover:bg-green-700",
        icon: CheckCircle
      }
    },
    {
      type: "🟡 FLAGSHIP",
      title: "AI Linc Flagship Career Launchpad",
      description: "A premium, outcome-driven program designed to get you placed — fast",
      features: flagshipFeatures,
      price: "Up to 100% Scholarship",
      booking: "₹999 (fully refundable within 7 days)",
      seats: "30 Seats Only",
      colorScheme: {
        gradient: "bg-gradient-to-br from-yellow-800/20 to-yellow-900/20",
        border: "border-yellow-400/30",
        badge: "bg-yellow-400",
        badgeText: "text-yellow-400",
        accent: "from-yellow-400 to-yellow-600",
        button: "bg-yellow-600 hover:bg-yellow-700",
        icon: Star
      }
    }
  ]

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
          {programConfigs.map((config, index) => (
            <ProgramCard key={index} {...config} onSelect={handleProgramSelection} />
          ))}
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