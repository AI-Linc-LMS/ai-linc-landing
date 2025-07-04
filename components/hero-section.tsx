"use client"

import React, { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { useLenis } from "@/hooks/use-lenis"
import { HireTalentModal } from "@/components/hire-talent-modal"
import { WebinarRegistrationModal } from "@/components/webinar-registration-modal"
import Image from "next/image"
import {
  Users,
  TrendingUp,
  Building2,
  Target,
  Play,
  Star,
  ArrowRight,
  Brain,
  Rocket,
  CheckCircle,
  Clock,
  Award,
  Briefcase,
  Network,
  Zap,
  Video,
  FileText,
  UserCheck,
  Calendar,
  Trophy,
  ChevronRight,
  Sparkles,
  Globe,
  BarChart3
} from "lucide-react"

export function HeroSection() {
  const { scrollTo } = useLenis()
  const [isHireTalentModalOpen, setIsHireTalentModalOpen] = useState(false)
  const [isWebinarModalOpen, setIsWebinarModalOpen] = useState(false)
  const [activeProcess, setActiveProcess] = useState(0)
  const [currentMetric, setCurrentMetric] = useState(0)
  const [progressValue, setProgressValue] = useState(0)
  const [timeLeft, setTimeLeft] = useState({
    days: 7,
    hours: 23,
    minutes: 59,
    seconds: 59,
  })

  // Updated AI Talent Journey Process
  const talentJourney = [
    {
      id: 0,
      title: "Free Webinar",
      description: "Learn AI skills & career opportunities",
      icon: Video,
      color: "from-blue-500 to-cyan-500",
      bgColor: "bg-blue-500/10",
      metrics: "5K+ attendees",
      details: "Interactive sessions with industry experts",
      duration: "60 min",
      nextStep: "Register Now",
      action: () => window.location.href = "/workshop-registration"
    },
    {
      id: 1,
      title: "Assessment Test",
      description: "AI-powered skill evaluation & matching",
      icon: FileText,
      color: "from-purple-500 to-pink-500",
      bgColor: "bg-purple-500/10",
      metrics: "98% accuracy",
      details: "Comprehensive technical & soft skills assessment",
      duration: "45 min",
      nextStep: "Take Test"
    },
    {
      id: 2,
      title: "Deployment",
      description: "Match with high-impact roles",
      icon: Rocket,
      color: "from-green-500 to-emerald-500",
      bgColor: "bg-green-500/10",
      metrics: "< 48hr match",
      details: "Direct placement in top companies",
      duration: "Ongoing",
      nextStep: "Get Placed"
    }
  ]

  // Enhanced Key Metrics
  const keyMetrics = [
    {
      value: "5K+",
      label: "Webinar Attendees",
      subtext: "Monthly Active",
      icon: Users,
      trend: "+23%",
      color: "from-blue-400 to-cyan-400"
    },
    {
      value: "500+",
      label: "AI Professionals",
      subtext: "Assessed & Certified",
      icon: UserCheck,
      trend: "+15%",
      color: "from-purple-400 to-pink-400"
    },
    {
      value: "200+",
      label: "Partner Companies",
      subtext: "Global Network",
      icon: Building2,
      trend: "+30%",
      color: "from-green-400 to-emerald-400"
    },
    {
      value: "₹15L+",
      label: "Average Package",
      subtext: "Post-Deployment",
      icon: Award,
      trend: "+18%",
      color: "from-orange-400 to-red-400"
    }
  ]

  // Live activity feed with more details
  const liveActivity = [
    {
      type: "webinar",
      user: "Priya S.",
      action: "Joined AI Career Webinar",
      time: "2 min ago",
      status: "active",
      location: "Mumbai"
    },
    {
      type: "assessment",
      user: "Rahul K.",
      action: "Completed Assessment Test",
      time: "15 min ago",
      status: "completed",
      score: "92%"
    },
    {
      type: "deployment",
      user: "Sneha M.",
      action: "Deployed as ML Engineer",
      time: "1 hour ago",
      status: "deployed",
      company: "TechCorp"
    },
    {
      type: "webinar",
      user: "Arjun P.",
      action: "Registered for Webinar",
      time: "3 hours ago",
      status: "registered",
      location: "Bangalore"
    }
  ]

  // Success stories
  const successStories = [
    { name: "Amit K.", role: "AI Engineer", company: "Google", package: "₹18L", duration: "3 weeks" },
    { name: "Priya S.", role: "Data Scientist", company: "Microsoft", package: "₹16L", duration: "2 weeks" },
    { name: "Raj M.", role: "ML Architect", company: "Amazon", package: "₹22L", duration: "1 week" }
  ]

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

    // Auto-cycle through talent journey
    const processTimer = setInterval(() => {
      setActiveProcess((prev) => (prev + 1) % talentJourney.length)
    }, 4000)

    // Cycle through metrics
    const metricTimer = setInterval(() => {
      setCurrentMetric((prev) => (prev + 1) % keyMetrics.length)
    }, 3000)

    // Animate progress bar
    const progressTimer = setInterval(() => {
      setProgressValue((prev) => (prev >= 100 ? 0 : prev + 2))
    }, 100)

    return () => {
      clearInterval(timer)
      clearInterval(processTimer)
      clearInterval(metricTimer)
      clearInterval(progressTimer)
    }
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

  const getActivityIcon = (type: string) => {
    switch (type) {
      case 'webinar': return Video
      case 'assessment': return FileText
      case 'deployment': return Rocket
      default: return Users
    }
  }

  const getActivityColor = (type: string) => {
    switch (type) {
      case 'webinar': return 'text-blue-400'
      case 'assessment': return 'text-purple-400'
      case 'deployment': return 'text-green-400'
      default: return 'text-gray-400'
    }
  }

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
              Deploying the Next Generation of AI Talent into High-Impact Roles
            </motion.h1>
            <motion.p variants={item} className="text-xl text-foreground/80 mb-8 max-w-xl mx-auto md:mx-0">
              We connect top AI professionals to roles that matter — full-time, part-time, freelance, or startup-backed.
            </motion.p>
            <motion.div variants={item} className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Button
                size="lg"
                className="bg-gradient-to-r from-[#0BC5EA] to-[#6B46C1] hover:opacity-90 text-white font-medium px-8 py-6 text-lg rounded-md transition-all duration-300 shadow-[0_0_20px_rgba(11,197,234,0.5)] hover:shadow-[0_0_30px_rgba(11,197,234,0.7)]"
                onClick={() => setIsHireTalentModalOpen(true)}
              >
                Hire AI Talent
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-[#0BC5EA]/50 text-[#0BC5EA] hover:bg-[#0BC5EA]/10 font-medium px-8 py-6 text-lg rounded-md transition-all duration-300 hover:border-[#0BC5EA] hover:shadow-[0_0_20px_rgba(11,197,234,0.3)]"
                onClick={() => setIsWebinarModalOpen(true)}
              >
                Join Free Webinar
              </Button>
            </motion.div>
          </motion.div>

          {/* Right side - Enhanced AI Consultancy Showcase */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="md:col-span-7 relative"
          >
            <div className="relative w-full space-y-6">

              {/* Enhanced Header with Progress */}
              <div className="relative">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-[#0BC5EA]/20 rounded-lg">
                      <Network className="w-6 h-6 text-[#0BC5EA]" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white">
                        AI Talent Pipeline
                      </h3>
                      <p className="text-sm text-gray-400">From Learning to Earning</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-green-400">
                    <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                    <span className="font-medium">Live Activity</span>
                  </div>
                </div>

                {/* Progress Bar */}
                <div className="mb-6">
                  <div className="flex justify-between text-xs text-gray-400 mb-2">
                    <span>Pipeline Progress</span>
                    <span>{progressValue}% Active</span>
                  </div>
                  <Progress value={progressValue} className="h-2 bg-white/10" />
                </div>

                {/* Enhanced Key Metric Highlight */}
                <motion.div
                  key={currentMetric}
                  initial={{ opacity: 0, scale: 0.8, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="mb-6"
                >
                  <Card className={`bg-gradient-to-r ${keyMetrics[currentMetric].color}/10 border-[#0BC5EA]/30 backdrop-blur-sm hover:scale-105 transition-all duration-300`}>
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between">
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-2">
                            <div className={`text-4xl font-bold bg-gradient-to-r ${keyMetrics[currentMetric].color} bg-clip-text text-transparent`}>
                              {keyMetrics[currentMetric].value}
                            </div>
                            <div className="text-green-400 text-sm font-medium bg-green-400/10 px-2 py-1 rounded-full">
                              {keyMetrics[currentMetric].trend}
                            </div>
                          </div>
                          <div className="text-white font-medium mb-1">
                            {keyMetrics[currentMetric].label}
                          </div>
                          <div className="text-sm text-gray-400">
                            {keyMetrics[currentMetric].subtext}
                          </div>
                        </div>
                        <div className={`text-[#0BC5EA] p-3 bg-[#0BC5EA]/10 rounded-full`}>
                          {React.createElement(keyMetrics[currentMetric].icon, { className: "w-8 h-8" })}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>

                {/* Enhanced Talent Journey Steps */}
                <div className="space-y-4 mb-6">
                  {talentJourney.map((step, index) => {
                    const Icon = step.icon
                    const isActive = activeProcess === index
                    const isCompleted = activeProcess > index
                    return (
                      <motion.div
                        key={step.id}
                        className={`relative p-4 rounded-xl border transition-all duration-500 cursor-pointer group ${isActive
                            ? `${step.bgColor} border-white/30 scale-105 shadow-lg`
                            : isCompleted
                              ? 'bg-green-500/10 border-green-500/30'
                              : 'bg-white/5 border-white/10 hover:border-white/20 hover:bg-white/10'
                          }`}
                        onClick={() => setActiveProcess(index)}
                        whileHover={{ scale: 1.02 }}
                        layout
                      >
                        <div className="flex items-center gap-4">
                          <div className={`relative flex-shrink-0 w-14 h-14 rounded-full flex items-center justify-center transition-all duration-300 ${isActive ? 'bg-white/20 shadow-lg' :
                              isCompleted ? 'bg-green-500/20' : 'bg-white/10'
                            }`}>
                            {isCompleted ? (
                              <CheckCircle className="w-7 h-7 text-green-400" />
                            ) : (
                              <Icon className={`w-7 h-7 ${isActive ? 'text-white' : 'text-gray-400'}`} />
                            )}
                            {isActive && (
                              <motion.div
                                className="absolute inset-0 rounded-full border-2 border-[#0BC5EA]/50"
                                animate={{ scale: [1, 1.2, 1] }}
                                transition={{ duration: 2, repeat: Infinity }}
                              />
                            )}
                          </div>

                          <div className="flex-1">
                            <div className="flex items-center gap-3 mb-1">
                              <div className={`text-lg font-semibold ${isActive ? 'text-white' : isCompleted ? 'text-green-400' : 'text-gray-400'}`}>
                                {step.title}
                              </div>
                              <div className="text-xs text-gray-500 bg-gray-500/20 px-2 py-1 rounded-full">
                                {step.duration}
                              </div>
                            </div>
                            <div className={`text-sm mb-2 ${isActive ? 'text-gray-300' : 'text-gray-500'}`}>
                              {step.description}
                            </div>
                            {isActive && (
                              <motion.div
                                initial={{ opacity: 0, height: 0 }}
                                animate={{ opacity: 1, height: 'auto' }}
                                className="text-xs text-gray-400 mb-2"
                              >
                                {step.details}
                              </motion.div>
                            )}
                            <div className="flex items-center justify-between">
                              <div className="text-xs text-[#0BC5EA] font-medium">
                                {step.metrics}
                              </div>
                              {isActive && (
                                <Button
                                  size="sm"
                                  className="bg-[#0BC5EA] hover:bg-[#0BC5EA]/80 text-white h-7 px-3 text-xs"
                                  onClick={(e) => {
                                    e.stopPropagation()
                                    setIsWebinarModalOpen(true)
                                  }}
                                >
                                  {step.nextStep} <ChevronRight className="w-3 h-3 ml-1" />
                                </Button>
                              )}
                            </div>
                          </div>
                        </div>

                        {isActive && (
                          <motion.div
                            className="absolute inset-0 bg-gradient-to-r from-[#0BC5EA]/10 to-[#6B46C1]/10 rounded-xl"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.3 }}
                          />
                        )}
                      </motion.div>
                    )
                  })}
                </div>

                {/* Live Activity Feed */}
                <Card className="bg-black/40 border-white/10 backdrop-blur-sm">
                  <CardContent className="p-4">
                    <div className="flex items-center justify-between mb-4">
                      <h4 className="text-sm font-medium text-white flex items-center gap-2">
                        <BarChart3 className="w-4 h-4 text-[#0BC5EA]" />
                        Live Activity Feed
                      </h4>
                      <Button
                        size="sm"
                        variant="ghost"
                        className="text-[#0BC5EA] hover:bg-[#0BC5EA]/10 h-8 px-3"
                        onClick={() => setIsWebinarModalOpen(true)}
                      >
                        Join Now
                      </Button>
                    </div>
                    <div className="space-y-3 max-h-48 overflow-y-auto">
                      {liveActivity.map((activity, index) => {
                        const Icon = getActivityIcon(activity.type)
                        return (
                          <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: index * 0.1 }}
                            className="flex items-center gap-3 p-3 bg-white/5 rounded-lg hover:bg-white/10 transition-colors"
                          >
                            <div className={`p-2 rounded-full bg-white/10 ${getActivityColor(activity.type)}`}>
                              <Icon className="w-4 h-4" />
                            </div>
                            <div className="flex-1">
                              <div className="text-sm font-medium text-white">
                                {activity.user}
                              </div>
                              <div className="text-xs text-gray-400">
                                {activity.action}
                              </div>
                              {activity.location && (
                                <div className="text-xs text-gray-500 flex items-center gap-1">
                                  <Globe className="w-3 h-3" />
                                  {activity.location}
                                </div>
                              )}
                            </div>
                            <div className="text-right">
                              <div className="text-xs text-gray-500">
                                {activity.time}
                              </div>
                              {activity.score && (
                                <div className="text-xs text-green-400 font-medium">
                                  {activity.score}
                                </div>
                              )}
                            </div>
                          </motion.div>
                        )
                      })}
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Enhanced Floating Action Elements */}
              <motion.div
                className="absolute -top-4 -right-4 bg-gradient-to-r from-[#0BC5EA] to-[#6B46C1] rounded-full p-3 shadow-xl cursor-pointer group"
                animate={{
                  y: [0, -10, 0],
                  rotate: [0, 5, 0]
                }}
                transition={{
                  duration: 4,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut"
                }}
                onClick={() => setIsWebinarModalOpen(true)}
                whileHover={{ scale: 1.1 }}
              >
                <Play className="w-5 h-5 text-white" />
                <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-black/80 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                  Join Webinar
                </div>
              </motion.div>

              <motion.div
                className="absolute -bottom-4 -left-4 bg-gradient-to-r from-[#6B46C1] to-[#0BC5EA] rounded-full p-3 shadow-xl"
                animate={{
                  y: [0, 10, 0],
                  rotate: [0, -5, 0]
                }}
                transition={{
                  duration: 5,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                  delay: 2
                }}
              >
                <Sparkles className="w-5 h-5 text-white" />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Enhanced Background Effects */}
      <div className="absolute top-1/4 left-1/4 size-96 bg-[#0BC5EA]/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 right-1/4 size-96 bg-[#6B46C1]/5 rounded-full blur-3xl"></div>

      {/* Enhanced Floating Particles */}
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 bg-[#0BC5EA]/30 rounded-full"
          style={{
            top: `${15 + i * 12}%`,
            left: `${5 + i * 12}%`,
          }}
          animate={{
            y: [0, -30, 0],
            opacity: [0.2, 0.8, 0.2],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 4 + i,
            repeat: Number.POSITIVE_INFINITY,
            delay: i * 0.3,
          }}
        />
      ))}

      {/* Modals */}
      <HireTalentModal
        open={isHireTalentModalOpen}
        onOpenChange={setIsHireTalentModalOpen}
      />
      <WebinarRegistrationModal
        open={isWebinarModalOpen}
        onOpenChange={setIsWebinarModalOpen}
      />
    </section>
  )
}
