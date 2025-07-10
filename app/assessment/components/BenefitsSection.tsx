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
              whileHover={{ scale: 1.05, rotateY: 5 }}
              className="perspective-1000"
            >
              <Card className="bg-white/5 backdrop-blur-lg border-white/10 overflow-hidden h-full">
                <CardContent className="p-6 space-y-4">
                  <motion.div 
                    className={`w-16 h-16 rounded-lg bg-gradient-to-r ${benefit.color} flex items-center justify-center mx-auto`}
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <benefit.icon className="w-8 h-8 text-white" />
                  </motion.div>
                  <h3 className="text-xl font-bold text-center text-white">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-300 text-center text-sm">
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