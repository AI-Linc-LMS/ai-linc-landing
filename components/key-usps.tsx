"use client"

import { motion } from "framer-motion"
import { Zap, Users, BarChart } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export function KeyUsps() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  }

  return (
    <section className="py-16 sm:py-20 relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-white to-[#0BC5EA] bg-clip-text text-transparent">
            Why Choose AI LINC
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-foreground/80 max-w-xl sm:max-w-2xl mx-auto">
            Our unique approach combines cutting-edge learning with practical experience to accelerate your AI career.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8"
        >
          <motion.div variants={item}>
            <Card className="bg-gradient-to-b from-card/50 to-background/80 backdrop-blur-sm border-[#0BC5EA]/20 rounded-xl group hover:shadow-[0_0_30px_rgba(11,197,234,0.2)] transition-all duration-500 h-full">
              <CardHeader>
                <div className="size-12 sm:size-16 rounded-full bg-[#0BC5EA]/10 flex items-center justify-center mb-4 sm:mb-6 group-hover:bg-[#0BC5EA]/20 transition-all duration-300">
                  <Zap className="size-6 sm:size-8 text-[#0BC5EA]" />
                </div>
                <CardTitle className="text-lg sm:text-2xl font-bold group-hover:text-[#0BC5EA] transition-colors duration-300">
                  Work-Integrated Learning
                </CardTitle>
                <CardDescription className="text-sm sm:text-base text-foreground/80">
                  Learn by doing with real projects that build your portfolio while you master new skills. Our
                  work-integrated approach ensures you're job-ready from day one.
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-0">
                <div className="h-32 sm:h-40 bg-card/50 backdrop-blur-sm rounded-lg overflow-hidden relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-background/80 to-transparent"></div>
                  <div className="absolute inset-0 bg-[url('/images/1st-pic.png?height=160&width=320')] bg-cover bg-center opacity-40"></div>
                  {/* <div className="absolute bottom-4 left-4 right-4">
                    <div className="h-2 w-16 sm:w-24 bg-[#0BC5EA] rounded-full mb-2"></div>
                    <div className="h-3 w-20 sm:w-32 bg-white/20 rounded-md"></div>
                  </div> */}
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div variants={item}>
            <Card className="bg-gradient-to-b from-card/50 to-background/80 backdrop-blur-sm border-[#6B46C1]/20 rounded-xl group hover:shadow-[0_0_30px_rgba(107,70,193,0.2)] transition-all duration-500 h-full">
              <CardHeader>
                <div className="size-12 sm:size-16 rounded-full bg-[#6B46C1]/10 flex items-center justify-center mb-4 sm:mb-6 group-hover:bg-[#6B46C1]/20 transition-all duration-300">
                  <BarChart className="size-6 sm:size-8 text-[#6B46C1]" />
                </div>
                <CardTitle className="text-lg sm:text-2xl font-bold group-hover:text-[#6B46C1] transition-colors duration-300">
                  Learn 100X Faster with AI
                </CardTitle>
                <CardDescription className="text-sm sm:text-base text-foreground/80">
                  Our AI-powered learning platform adapts to your pace and style, accelerating your progress through
                  personalized recommendations and feedback.
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-0">
                <div className="h-32 sm:h-40 bg-card/50 backdrop-blur-sm rounded-lg overflow-hidden relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-background/80 to-transparent"></div>
                  <div className="absolute inset-0 bg-[url('/images/3rd-pic.png?height=160&width=320')] bg-cover bg-center opacity-40"></div>
                  {/* <div className="absolute bottom-4 left-4 right-4">
                    <div className="h-2 w-16 sm:w-24 bg-[#6B46C1] rounded-full mb-2"></div>
                    <div className="h-3 w-20 sm:w-32 bg-white/20 rounded-md"></div>
                  </div> */}
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div variants={item}>
            <Card className="bg-gradient-to-b from-card/50 to-background/80 backdrop-blur-sm border-[#0BC5EA]/20 rounded-xl group hover:shadow-[0_0_30px_rgba(11,197,234,0.2)] transition-all duration-500 h-full">
              <CardHeader>
                <div className="size-12 sm:size-16 rounded-full bg-[#0BC5EA]/10 flex items-center justify-center mb-4 sm:mb-6 group-hover:bg-[#0BC5EA]/20 transition-all duration-300">
                  <Users className="size-6 sm:size-8 text-[#0BC5EA]" />
                </div>
                <CardTitle className="text-lg sm:text-2xl font-bold group-hover:text-[#0BC5EA] transition-colors duration-300">
                  Dedicated Project Management
                </CardTitle>
                <CardDescription className="text-sm sm:text-base text-foreground/80">
                  Never feel lost with our dedicated project managers who guide your learning journey, provide feedback,
                  and ensure you stay on track to success.
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-0">
                <div className="h-32 sm:h-40 bg-card/50 backdrop-blur-sm rounded-lg overflow-hidden relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-background/80 to-transparent"></div>
                  <div className="absolute inset-0 bg-[url('/images/2nd-pic.png?height=160&width=320')] bg-cover bg-center opacity-40"></div>
                  {/* <div className="absolute bottom-4 left-4 right-4">
                    <div className="h-2 w-16 sm:w-24 bg-[#0BC5EA] rounded-full mb-2"></div>
                    <div className="h-3 w-20 sm:w-32 bg-white/20 rounded-md"></div>
                  </div> */}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>
      </div>

      {/* Background glow effects */}
      <div className="absolute top-1/4 right-1/3 size-72 sm:size-96 bg-[#0BC5EA]/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 left-1/3 size-72 sm:size-96 bg-[#6B46C1]/5 rounded-full blur-3xl"></div>
    </section>
  )
}
