"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Award, Users, Target } from "lucide-react"
import { motion, Variants } from "framer-motion"

interface BenefitsSectionProps {
  containerVariants: Variants
  itemVariants: Variants
}

export function BenefitsSection({ containerVariants, itemVariants }: BenefitsSectionProps) {
  const benefits = [
    {
      title: "Earn Your Certificate",
      description: "Get an industry-recognized certificate upon completion that validates your skills",
      icon: Award,
      color: "from-yellow-400 to-orange-500"
    },
    {
      title: "Get a FREE 🎁 LinkedIn Profile Review",
      description: "Professional LinkedIn optimization by our career experts to attract top recruiters",
      icon: Users,
      color: "from-blue-400 to-blue-600"
    },
    {
      title: "Get a FREE 🎁 Placement Readiness Score",
      description: "Comprehensive analysis of your job readiness with personalized improvement suggestions",
      icon: Target,
      color: "from-green-400 to-green-600"
    }
  ]

  const benefitImages = [
    "/assessment/certificate-website.png",
    "/assessment/linkdln-webiste.png",
    "/assessment/scorecard-website.png"
  ];

  const accentColors = [
    "bg-gradient-to-r from-yellow-400 to-orange-400",
    "bg-gradient-to-r from-blue-400 to-blue-600",
    "bg-gradient-to-r from-green-400 to-green-600"
  ];

  return (
    <section className="py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          className="text-3xl font-bold text-center mb-4 text-blue-400"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          UNLOCK THESE PERKS WITH THE TEST
        </motion.h2>

        <motion.div
          className="grid md:grid-cols-3 gap-8 mt-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: index * 0.15 }}
              whileHover={{ scale: 1.06, boxShadow: "0 8px 32px 0 rgba(0,0,0,0.25)", zIndex: 2 }}
              className="perspective-1000"
            >
              <Card className="bg-[#181F2A] border border-[#2A3651] shadow-xl rounded-2xl overflow-hidden h-full transition-all duration-300 hover:shadow-2xl hover:border-blue-400 relative group">
                <CardContent className="p-6 space-y-4 flex flex-col items-center justify-center">
                  {/* Gradient Glow Behind Image */}
                  <div className={`absolute top-6 left-1/2 -translate-x-1/2 w-40 h-24 rounded-2xl blur-2xl opacity-40 z-0 ${accentColors[index]}`}></div>
                  <img src={benefitImages[index]} alt={benefit.title} className="w-36 h-28 object-contain rounded-xl mb-2  p-2 z-10 relative shadow-lg group-hover:scale-105 transition-transform duration-300" />
                  <h3 className="text-2xl font-extrabold text-center text-white z-10 relative">
                    {benefit.title}
                  </h3>
                  {/* Colored Accent Under Title */}
                  <div className={`h-1 w-12 mx-auto rounded-full mb-2 z-10 relative ${accentColors[index]}`}></div>
                  <p className="text-gray-300 text-center text-base z-10 relative">
                    {benefit.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
} 