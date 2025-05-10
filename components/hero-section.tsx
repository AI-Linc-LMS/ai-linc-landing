"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"

export function HeroSection() {
  const [timeLeft, setTimeLeft] = useState({
    days: 7,
    hours: 23,
    minutes: 59,
    seconds: 59,
  })

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.days === 0 && prev.hours === 0 && prev.minutes === 0 && prev.seconds === 0) {
          clearInterval(timer)
          return prev
        }

        let newSeconds = prev.seconds - 1
        let newMinutes = prev.minutes
        let newHours = prev.hours
        let newDays = prev.days

        if (newSeconds < 0) {
          newSeconds = 59
          newMinutes -= 1
        }

        if (newMinutes < 0) {
          newMinutes = 59
          newHours -= 1
        }

        if (newHours < 0) {
          newHours = 23
          newDays -= 1
        }

        return {
          days: newDays,
          hours: newHours,
          minutes: newMinutes,
          seconds: newSeconds,
        }
      })
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  }

  // Animated particles for connecting dashboard to other elements
  const particles = Array.from({ length: 8 }).map((_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 6 + 2,
    duration: Math.random() * 5 + 3,
    delay: Math.random() * 2,
  }))

  return (
    <section className="pt-32 pb-20 md:min-h-screen flex items-center relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-12 gap-8 items-center">
          {/* Left side with text content - takes 5 columns on desktop */}
          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="md:col-span-5 text-center md:text-left"
          >
            <motion.div variants={item}>
              <Badge
                variant="outline"
                className="px-3 py-1 mb-6 bg-background/80 border-[#0BC5EA]/30 text-[#0BC5EA] text-sm font-medium"
              >
                Next Cohort: {timeLeft.days}d {timeLeft.hours}h {timeLeft.minutes}m {timeLeft.seconds}s
              </Badge>
            </motion.div>
            <motion.h1
              variants={item}
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight bg-gradient-to-r from-white via-[#0BC5EA] to-[#6B46C1] bg-clip-text text-transparent"
            >
              Master AI Skills with Work Experience That Matters
            </motion.h1>
            <motion.p variants={item} className="text-xl text-foreground/80 mb-8 max-w-xl mx-auto md:mx-0">
              The 111-Day Program That Makes You 100X More Valuable in the AI Economy
            </motion.p>
            <motion.div variants={item}>
              <Button
                size="lg"
                className="bg-gradient-to-r from-[#0BC5EA] to-[#6B46C1] hover:opacity-90 text-white font-medium px-8 py-6 text-lg rounded-md transition-all duration-300 shadow-[0_0_20px_rgba(11,197,234,0.5)] hover:shadow-[0_0_30px_rgba(11,197,234,0.7)]"
              >
                Apply Now - Limited Spots
              </Button>
            </motion.div>
          </motion.div>

          {/* Right side with dashboard image - takes 7 columns on desktop */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="md:col-span-7 relative"
          >
            {/* Dashboard container with 3D effect */}
            <div className="relative w-full perspective-1000">
              {/* Background glow and gradient effects */}
              <div className="absolute -inset-4 bg-gradient-to-r from-[#0BC5EA]/20 to-[#6B46C1]/20 rounded-3xl blur-xl"></div>

              {/* Animated floating particles connecting dashboard to other elements */}
              {particles.map((particle) => (
                <motion.div
                  key={particle.id}
                  className="absolute rounded-full bg-gradient-to-r from-[#0BC5EA] to-[#6B46C1] opacity-70 z-10"
                  style={{
                    top: `${particle.y}%`,
                    left: `${particle.x}%`,
                    width: `${particle.size}px`,
                    height: `${particle.size}px`,
                  }}
                  animate={{
                    x: [0, 10, 0, -10, 0],
                    y: [0, -10, 0, 10, 0],
                    opacity: [0.2, 0.7, 0.2],
                  }}
                  transition={{
                    duration: particle.duration,
                    repeat: Number.POSITIVE_INFINITY,
                    delay: particle.delay,
                  }}
                />
              ))}

              {/* Dashboard image with floating effect */}
              <motion.div
                className="relative rounded-2xl overflow-hidden shadow-[0_0_30px_rgba(11,197,234,0.3)] border border-white/10"
                animate={{ y: [0, -10, 0] }}
                transition={{
                  duration: 6,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                }}
                style={{
                  transformStyle: "preserve-3d",
                  transform: "rotateX(5deg) rotateY(-5deg)",
                }}
              >
                {/* Overlay gradient for better integration with dark theme */}
                <div className="absolute inset-0 bg-gradient-to-tr from-background/30 via-transparent to-transparent z-10 pointer-events-none"></div>

                {/* Dashboard image */}
                <Image
                  src="/images/Dashboard1.png"
                  alt="AI LINC Learning Dashboard"
                  width={1000}
                  height={700}
                  className="w-full h-auto object-cover rounded-2xl"
                  priority
                />

                {/* Reflection effect at the bottom */}
                <div className="absolute bottom-0 left-0 right-0 h-[20%] bg-gradient-to-t from-[#0BC5EA]/20 to-transparent"></div>
              </motion.div>

              {/* Decorative elements */}
              <motion.div
                className="absolute -top-6 -right-6 size-24 bg-[#0BC5EA]/20 rounded-full blur-xl"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
              ></motion.div>
              <motion.div
                className="absolute -bottom-10 -left-10 size-32 bg-[#6B46C1]/20 rounded-full blur-xl"
                animate={{ scale: [1, 1.3, 1] }}
                transition={{ duration: 5, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut", delay: 1 }}
              ></motion.div>
            </div>

            {/* Small floating UI elements for added depth */}
            <motion.div
              className="absolute top-10 -right-4 md:-right-10 bg-card/80 backdrop-blur-sm border border-[#0BC5EA]/30 rounded-lg p-3 shadow-lg"
              animate={{ y: [0, -15, 0], rotate: [0, 2, 0] }}
              transition={{ duration: 5, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut", delay: 0.5 }}
              style={{ transformStyle: "preserve-3d", transform: "rotateX(10deg) rotateY(-5deg)" }}
            >
              <div className="h-2 w-12 bg-[#0BC5EA] rounded-full mb-2"></div>
              <div className="h-3 w-20 bg-white/20 rounded-md"></div>
            </motion.div>

            <motion.div
              className="absolute bottom-16 -left-4 md:-left-10 bg-card/80 backdrop-blur-sm border border-[#6B46C1]/30 rounded-lg p-3 shadow-lg"
              animate={{ y: [0, 15, 0], rotate: [0, -2, 0] }}
              transition={{ duration: 6, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut", delay: 1 }}
              style={{ transformStyle: "preserve-3d", transform: "rotateX(-5deg) rotateY(10deg)" }}
            >
              <div className="h-2 w-10 bg-[#6B46C1] rounded-full mb-2"></div>
              <div className="h-3 w-16 bg-white/20 rounded-md"></div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Background glow effects */}
      <div className="absolute top-1/4 left-1/4 size-96 bg-[#0BC5EA]/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 right-1/4 size-96 bg-[#6B46C1]/5 rounded-full blur-3xl"></div>
    </section>
  )
}
