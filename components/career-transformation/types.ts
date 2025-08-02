import { LucideIcon } from "lucide-react"

export interface Skill {
  name: string
  level: number
}

export interface CareerPath {
  title: string
  company: string
  salary: string
  growth: string
  icon: LucideIcon
}

export interface PlacementStat {
  company: string
  percentage: number
}

export interface SalaryMilestone {
  label: string
  salary: string
  position: {
    left: string
    height: string
  }
}

export interface CompanyPosition {
  name: string
  position: {
    top?: string
    left?: string
    right?: string
    bottom?: string
  }
  delay: number
}

export interface SkillBarProps {
  skill: Skill
  index: number
  gradient?: boolean
}

export interface SkillsCardProps {
  title: string
  badge: string
  skills: Skill[]
  salary: string
  salaryDescription: string
  icon: LucideIcon
  iconColor: string
  badgeColor: string
  borderColor: string
  gradient?: boolean
  animationDirection: "left" | "right"
} 