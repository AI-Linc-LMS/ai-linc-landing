"use client"

import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle, TrendingUp, Star } from "lucide-react"
import { motion, Variants } from "framer-motion"

interface WhatsWithTestSectionProps {
  containerVariants: Variants
  itemVariants: Variants
}

export function WhatsWithTestSection({ containerVariants, itemVariants }: WhatsWithTestSectionProps) {
  const features = [
    {
      title: "Why this matters:",
      description: "We're already in touch with companies actively hiring for AI-powered and no-code roles. If you ace this assessment, you may qualify directly for placement interviews with our partner companies.",
      icon: CheckCircle,
      color: "text-green-400"
    },
    {
      title: "What if you don't score high?",
      description: "No worries. That's exactly why we're here.\n\nIf your results show there's room to grow, we'll offer you personalized upskilling pathways — through our industry-grade programs — designed to help you become a high-impact individual in AI and full-stack development.",
      icon: TrendingUp,
      color: "text-blue-400"
    },
    {
      title: "Your performance here can unlock:",
      description: "• Direct access to interviews with hiring partners\n• Personalized feedback on your current strengths and areas to grow\n• A chance to join our flagship career-launching program and move closer to your dream job",
      icon: Star,
      color: "text-purple-400"
    }
  ]

  return (
    <section className="py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.h2 
          className="text-3xl font-bold text-center mb-12 text-blue-400"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          WHAT'S WITH THIS TEST
        </motion.h2>
        
        <motion.div 
          className="grid md:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
            >
              <Card className="bg-white/5 backdrop-blur-lg border-white/10 h-full">
                <CardContent className="p-6 space-y-4">
                  <div className="flex items-center gap-3">
                    <motion.div
                      whileHover={{ scale: 1.2, rotate: 15 }}
                      transition={{ duration: 0.3 }}
                    >
                      <feature.icon className={`w-6 h-6 ${feature.color}`} />
                    </motion.div>
                    <h3 className="text-lg font-bold text-white">
                      {feature.title}
                    </h3>
                  </div>
                  <p className="text-gray-300 text-sm leading-relaxed whitespace-pre-line">
                    {feature.description}
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