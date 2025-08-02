"use client"

import { motion } from "framer-motion"
import { Briefcase, Award } from "lucide-react"
import { SkillsCard } from "./skills-card"
import { SalaryTrajectory } from "./salary-trajectory"
import { IndustryPlacement } from "./industry-placement"
import { BEFORE_SKILLS, AFTER_SKILLS } from "./data"

export function CareerTransformation() {
  return (
    <section className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-white to-[#0BC5EA] bg-clip-text text-transparent">
            Career Transformation
          </h2>
          <p className="text-xl text-foreground/80 max-w-2xl mx-auto">
            See how our program transforms your skills and career trajectory in just 111 days
          </p>
        </motion.div>

        {/* Before/After Skills Comparison */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <SkillsCard
            title="Starting Point"
            badge="Before"
            skills={BEFORE_SKILLS}
            salary="₹8-12L"
            salaryDescription="Entry-level positions with limited growth"
            icon={Briefcase}
            iconColor="[#6B46C1]"
            badgeColor="[#6B46C1]"
            borderColor="[#6B46C1]"
            animationDirection="left"
          />
          <SkillsCard
            title="AI LINC Graduate"
            badge="After"
            skills={AFTER_SKILLS}
            salary="₹20-25L"
            salaryDescription="Premium positions with rapid growth potential"
            icon={Award}
            iconColor="[#0BC5EA]"
            badgeColor="[#0BC5EA]"
            borderColor="[#0BC5EA]"
            gradient
            animationDirection="right"
          />
        </div>

        <SalaryTrajectory />
        <IndustryPlacement />
      </div>

      {/* Background glow effects */}
      <div className="absolute top-1/3 left-1/4 size-96 bg-[#0BC5EA]/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/3 right-1/4 size-96 bg-[#6B46C1]/5 rounded-full blur-3xl"></div>
    </section>
  )
} 