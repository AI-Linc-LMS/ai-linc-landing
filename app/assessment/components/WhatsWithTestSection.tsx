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

  const accentColors = [
    "bg-gradient-to-r from-green-400 to-green-600",
    "bg-gradient-to-r from-blue-400 to-blue-600",
    "bg-gradient-to-r from-purple-400 to-purple-600"
  ];

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
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: index * 0.15 }}
              whileHover={{ scale: 1.04, boxShadow: "0 8px 32px 0 rgba(0,0,0,0.25)", zIndex: 2 }}
            >
              <Card className={`shadow-xl rounded-2xl overflow-hidden h-full transition-all duration-300 hover:shadow-2xl relative group border ${index === 0 ? 'bg-[#182A1F] border-green-700' : index === 1 ? 'bg-[#18213A] border-blue-700' : 'bg-[#221A2A] border-purple-700'}`}>
                <CardContent className="p-4 md:p-6 flex flex-col items-start justify-start relative min-h-[220px] md:space-y-4 space-y-2">
                  {/* Icon with Glow */}
                  <div className={`relative mb-2`}>
                    <div className={`absolute -top-2 -left-2 w-12 h-12 rounded-full blur-xl opacity-40 z-0 ${accentColors[index]}`}></div>
                    <feature.icon className={`w-9 h-9 md:w-10 md:h-10 z-10 relative ${feature.color}`} />
                  </div>
                  <h3 className="text-lg md:text-xl font-extrabold text-left text-white z-10 relative">
                    {feature.title}
                  </h3>
                  {/* Colored Accent Under Title */}
                  <div className={`h-1 w-10 md:w-12 rounded-full mb-2 z-10 relative ${accentColors[index]}`}></div>
                  <p className="text-gray-300 text-left text-sm md:text-base z-10 relative max-w-full md:max-w-[90%] whitespace-pre-line">
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