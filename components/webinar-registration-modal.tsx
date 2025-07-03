"use client"

import { motion } from "framer-motion"
import { useRouter } from "next/navigation"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { 
  Calendar, 
  ExternalLink,
  GraduationCap,
  Award
} from "lucide-react"

interface WebinarRegistrationModalProps {
  open: boolean
  onOpenChange: (open: boolean) => void
}

export function WebinarRegistrationModal({ open, onOpenChange }: WebinarRegistrationModalProps) {
  const router = useRouter()

  const handleWorkshopRegistration = () => {
    onOpenChange(false)
    router.push("/workshop-registration")
  }

  const handleAssessmentClick = () => {
    window.open("https://app.ailinc.com/assessment/ai-linc-scholarship-test-2", "_blank")
  }

  const features = [
    {
      icon: <Calendar className="w-5 h-5" />,
      title: "Free Workshop Access",
      description: "Join our exclusive AI career development workshop"
    },
    {
      icon: <GraduationCap className="w-5 h-5" />,
      title: "AI Skills Assessment",
      description: "Test your AI knowledge and get personalized feedback"
    },
    {
      icon: <Award className="w-5 h-5" />,
      title: "Scholarship Opportunity",
      description: "Qualify for our AI LINC scholarship program"
    }
  ]

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-lg">
        <DialogHeader className="pb-4">
          <DialogTitle className="text-2xl font-bold bg-gradient-to-r from-[#0BC5EA] to-[#6B46C1] bg-clip-text text-transparent text-center">
            Join Our AI Talent Pool
          </DialogTitle>
          <DialogDescription className="text-base text-muted-foreground text-center">
            Register for our free workshop and take the AI assessment to unlock exclusive opportunities
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-6">
          {/* Features Grid */}
          <div className="grid grid-cols-1 gap-3">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex items-center gap-3 p-3 rounded-lg bg-card/50 border border-[#0BC5EA]/20"
              >
                <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-r from-[#0BC5EA] to-[#6B46C1] rounded-lg flex items-center justify-center text-white">
                  {feature.icon}
                </div>
                <div>
                  <h4 className="font-semibold text-foreground text-sm">{feature.title}</h4>
                  <p className="text-xs text-muted-foreground">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Call to Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="space-y-3"
          >
            <Button
              onClick={handleWorkshopRegistration}
              size="lg"
              className="w-full bg-gradient-to-r from-[#0BC5EA] to-[#6B46C1] hover:opacity-90 text-white font-medium py-6 text-base rounded-md transition-all duration-300 shadow-[0_0_20px_rgba(11,197,234,0.5)] hover:shadow-[0_0_30px_rgba(11,197,234,0.7)]"
            >
              <span className="flex items-center gap-2">
                <Calendar className="w-5 h-5" />
                Register for Workshop
              </span>
            </Button>
            
            <Button
              onClick={handleAssessmentClick}
              size="lg"
              variant="outline"
              className="w-full border-[#0BC5EA]/50 text-[#0BC5EA] hover:bg-[#0BC5EA]/10 font-medium py-6 text-base rounded-md transition-all duration-300 hover:border-[#0BC5EA] hover:shadow-[0_0_20px_rgba(11,197,234,0.3)]"
            >
              <span className="flex items-center gap-2">
                <GraduationCap className="w-5 h-5" />
                Take Assessment
                <ExternalLink className="w-4 h-4" />
              </span>
            </Button>
            
            <p className="text-xs text-muted-foreground text-center">
              Assessment opens in a new tab • Free • No credit card required
            </p>
          </motion.div>
        </div>
      </DialogContent>
    </Dialog>
  )
} 