import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog"
import { GraduationCap, Calendar, Sparkles, Clock, Users } from "lucide-react"
import { ModalOption } from "./modal-option"

interface ProgramSelectionModalProps {
  isOpen: boolean
  onOpenChange: (open: boolean) => void
  onAssessment: () => void
  onWebinarRegistration: () => void
}

export function ProgramSelectionModal({ 
  isOpen, 
  onOpenChange, 
  onAssessment, 
  onWebinarRegistration 
}: ProgramSelectionModalProps) {
  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
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
            onClick={onAssessment}
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
            onClick={onWebinarRegistration}
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
  )
} 