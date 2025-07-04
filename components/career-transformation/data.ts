import { Building } from "lucide-react"
import { Skill, CareerPath, PlacementStat, SalaryMilestone, CompanyPosition } from "./types"

export const BEFORE_SKILLS: Skill[] = [
  { name: "AI Fundamentals", level: 20 },
  { name: "Prompt Engineering", level: 10 },
  { name: "AI Tools", level: 15 },
  { name: "Data Analysis", level: 30 },
  { name: "Business Applications", level: 25 },
]

export const AFTER_SKILLS: Skill[] = [
  { name: "AI Fundamentals", level: 90 },
  { name: "Prompt Engineering", level: 95 },
  { name: "AI Tools", level: 85 },
  { name: "Data Analysis", level: 80 },
  { name: "Business Applications", level: 85 },
]

export const CAREER_PATHS: CareerPath[] = [
  {
    title: "AI Prompt Engineer",
    company: "Tech Companies",
    salary: "₹12L - ₹15L",
    growth: "+85%",
    icon: Building,
  },
  {
    title: "AI Application Developer",
    company: "Software Companies",
    salary: "₹15L - ₹20L",
    growth: "+72%",
    icon: Building,
  },
  {
    title: "AI Product Manager",
    company: "Product Companies",
    salary: "₹18L - ₹20L",
    growth: "+65%",
    icon: Building,
  },
  {
    title: "AI Consultant",
    company: "Consulting Firms",
    salary: "₹20L - ₹25L",
    growth: "+90%",
    icon: Building,
  },
]

export const PLACEMENT_STATS: PlacementStat[] = [
  { company: "Google", percentage: 15 },
  { company: "Microsoft", percentage: 12 },
  { company: "Amazon", percentage: 10 },
  { company: "Meta", percentage: 8 },
  { company: "Startups", percentage: 35 },
  { company: "Consulting", percentage: 20 },
]

export const SALARY_MILESTONES: SalaryMilestone[] = [
  { label: "Entry Level", salary: "₹5L", position: { left: "10%", height: "30%" } },
  { label: "1 Year After", salary: "₹8L", position: { left: "30%", height: "45%" } },
  { label: "2 Years After", salary: "₹12L", position: { left: "50%", height: "65%" } },
  { label: "3 Years After", salary: "₹18L", position: { left: "70%", height: "80%" } },
  { label: "5 Years After", salary: "₹25L+", position: { left: "90%", height: "95%" } },
]

export const COMPANY_POSITIONS: CompanyPosition[] = [
  { name: "G", position: { top: "25%", left: "0%" }, delay: 0.5 },
  { name: "M", position: { top: "0%", left: "50%" }, delay: 0.7 },
  { name: "A", position: { top: "25%", right: "0%" }, delay: 0.9 },
  { name: "F", position: { bottom: "25%", right: "0%" }, delay: 1.1 },
  { name: "S", position: { bottom: "0%", left: "50%" }, delay: 1.3 },
  { name: "C", position: { bottom: "25%", left: "0%" }, delay: 1.5 },
] 