import { LucideIcon } from "lucide-react"

export interface TalentJourneyStep {
  id: number
  title: string
  description: string
  icon: LucideIcon
  color: string
  bgColor: string
  metrics: string
  details: string
  duration: string
  nextStep: string
  action?: () => void
}

export interface KeyMetric {
  value: string
  label: string
  subtext: string
  icon: LucideIcon
  trend: string
  color: string
}

export interface LiveActivity {
  type: string
  user: string
  action: string
  time: string
  status: string
  location?: string
  score?: string
  company?: string
}

export interface SuccessStory {
  name: string
  role: string
  company: string
  package: string
  duration: string
}

export interface TimeLeft {
  days: number
  hours: number
  minutes: number
  seconds: number
} 