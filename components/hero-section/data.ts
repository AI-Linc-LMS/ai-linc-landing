import {
  Users,
  Building2,
  Award,
  UserCheck,
  Video,
  FileText,
  Rocket,
} from "lucide-react"
import { TalentJourneyStep, KeyMetric, LiveActivity, SuccessStory } from "./types"

export const talentJourney: TalentJourneyStep[] = [
  {
    id: 0,
    title: " Deploy Your First AI App: Live No-Code AI Workshop",
    description: "",
    icon: Video,
    color: "from-blue-500 to-cyan-500",
    bgColor: "bg-blue-500/10",
    metrics: "5K+ attendees",
    details: "Includes: Certificate and access to AI resources for FREE ",
    duration: "60 min",
    nextStep: "Register Now",
    action: () => window.location.href = "/workshop-registration"
  },
  {
    id: 1,
    title: "Assessment Test",
    description: "AI-powered skill evaluation & matching",
    icon: FileText,
    color: "from-purple-500 to-pink-500",
    bgColor: "bg-purple-500/10",
    metrics: "98% accuracy",
    details: "Access placement eligibility\nGet certificate & LinkedIn profile review\nQualify for industry referrals",
    duration: "30 min",
    nextStep: "Take Test",
    action: () => window.location.href = "/assessment"
  },
  {
    id: 2,
    title: "Get Hired",
    description: "Match with high-impact roles",
    icon: Rocket,
    color: "from-green-500 to-emerald-500",
    bgColor: "bg-green-500/10",
    metrics: "< 48hr match",
    details: "Schedule a 1-1 call with industry expert to understand gaps and plan of action",
    duration: "Ongoing",
    nextStep: "Get Placed"
  }
]

export const keyMetrics: KeyMetric[] = [
  {
    value: "5K+",
    label: "Webinar Attendees",
    subtext: "Monthly Active",
    icon: Users,
    trend: "+23%",
    color: "from-blue-400 to-cyan-400"
  },
  {
    value: "500+",
    label: "AI Professionals",
    subtext: "Assessed & Certified",
    icon: UserCheck,
    trend: "+15%",
    color: "from-purple-400 to-pink-400"
  },
  {
    value: "200+",
    label: "Partner Companies",
    subtext: "Global Network",
    icon: Building2,
    trend: "+30%",
    color: "from-green-400 to-emerald-400"
  },
  {
    value: "₹15L+",
    label: "Average Package",
    subtext: "Post-Deployment",
    icon: Award,
    trend: "+18%",
    color: "from-orange-400 to-red-400"
  }
]

export const liveActivity: LiveActivity[] = [
  {
    type: "webinar",
    user: "Priya S.",
    action: "Joined AI Career Webinar",
    time: "2 min ago",
    status: "active",
    location: "Mumbai"
  },
  {
    type: "assessment",
    user: "Rahul K.",
    action: "Completed Assessment Test",
    time: "15 min ago",
    status: "completed",
    score: "92%"
  },
  {
    type: "deployment",
    user: "Sneha M.",
    action: "Deployed as ML Engineer",
    time: "1 hour ago",
    status: "deployed",
    company: "TechCorp"
  },
  {
    type: "webinar",
    user: "Arjun P.",
    action: "Registered for Webinar",
    time: "3 hours ago",
    status: "registered",
    location: "Bangalore"
  }
]

export const successStories: SuccessStory[] = [
  { name: "Amit K.", role: "AI Engineer", company: "Google", package: "₹18L", duration: "3 weeks" },
  { name: "Priya S.", role: "Data Scientist", company: "Microsoft", package: "₹16L", duration: "2 weeks" },
  { name: "Raj M.", role: "ML Architect", company: "Amazon", package: "₹22L", duration: "1 week" }
] 