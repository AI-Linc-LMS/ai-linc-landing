import { CheckCircle, Star } from "lucide-react"

export const nanodegreeFeatures = [
  "100+ hours of video content on AI, MERN, and more",
  "Auto-evaluated quizzes and coding assignments",
  "21-Day No-Code AI Product Builder",
  "90-Day Real-Client Work Experience",
  "Career reports, weekly mentorship, and lifetime platform access"
]

export const flagshipFeatures = [
  "Live sessions by professionals from MAANG",
  "Resume branding + AI-powered portfolio support",
  "Direct referrals to our hiring partners",
  "Technical + behavioral mock interviews",
  "Personal mentorship from product managers",
  "100+ hours of video content on AI, MERN, and more",
  "Auto-evaluated quizzes and coding assignments",
  "21-Day No-Code AI Product Builder",
  "90-Day Real-Client Work Experience",
  "Career reports, weekly mentorship, and lifetime platform access"
]

export const programConfigs = [
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