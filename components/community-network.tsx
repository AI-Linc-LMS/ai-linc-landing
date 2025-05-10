"use client"

import React from "react"

import { useRef, useEffect } from "react"
import { motion, useAnimation, useInView } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Users, MessageSquare, Award, Globe, Calendar, Video, BookOpen } from "lucide-react"

export function CommunityNetwork() {
  const controls = useAnimation()
  const ref = useRef(null)
  const inView = useInView(ref, { once: true })

  useEffect(() => {
    if (inView) {
      controls.start("visible")
    }
  }, [controls, inView])

  // Network nodes data
  const networkNodes = [
    { id: 1, type: "mentor", name: "Dr. Sarah Chen", role: "AI Research Lead", x: 50, y: 30, size: 60 },
    { id: 2, type: "mentor", name: "Michael Rodriguez", role: "Senior AI Engineer", x: 25, y: 60, size: 60 },
    { id: 3, type: "mentor", name: "Jennifer Park", role: "AI Product Manager", x: 75, y: 60, size: 60 },
    { id: 4, type: "student", name: "Alex Johnson", role: "Cohort #12", x: 40, y: 45, size: 50 },
    { id: 5, type: "student", name: "Priya Mehta", role: "Cohort #12", x: 60, y: 45, size: 50 },
    { id: 6, type: "student", name: "Carlos Rodriguez", role: "Cohort #12", x: 35, y: 70, size: 50 },
    { id: 7, type: "student", name: "Emma Wilson", role: "Cohort #12", x: 65, y: 70, size: 50 },
    { id: 8, type: "partner", name: "Google AI", role: "Industry Partner", x: 20, y: 20, size: 55 },
    { id: 9, type: "partner", name: "Microsoft", role: "Industry Partner", x: 80, y: 20, size: 55 },
    { id: 10, type: "alumni", name: "David Kim", role: "AI Consultant", x: 30, y: 85, size: 45 },
    { id: 11, type: "alumni", name: "Sophia Patel", role: "Prompt Engineer", x: 70, y: 85, size: 45 },
  ]

  // Network connections
  const connections = [
    { from: 1, to: 4 },
    { from: 1, to: 5 },
    { from: 1, to: 8 },
    { from: 1, to: 9 },
    { from: 2, to: 4 },
    { from: 2, to: 6 },
    { from: 2, to: 10 },
    { from: 3, to: 5 },
    { from: 3, to: 7 },
    { from: 3, to: 11 },
    { from: 4, to: 5 },
    { from: 4, to: 6 },
    { from: 5, to: 7 },
    { from: 6, to: 10 },
    { from: 7, to: 11 },
    { from: 8, to: 9 },
    { from: 10, to: 11 },
  ]

  // Community events
  const communityEvents = [
    {
      title: "AI Ethics Workshop",
      date: "May 15, 2025",
      type: "Workshop",
      icon: BookOpen,
    },
    {
      title: "Industry Expert AMA",
      date: "May 22, 2025",
      type: "Live Session",
      icon: Video,
    },
    {
      title: "Networking Mixer",
      date: "June 5, 2025",
      type: "Community Event",
      icon: Users,
    },
  ]

  return (
    <section id="community" className="py-12 md:py-20 relative overflow-hidden" ref={ref}>
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-10 md:mb-16"
        >
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-3 md:mb-4 bg-gradient-to-r from-white to-[#0BC5EA] bg-clip-text text-transparent">
            Community & Network
          </h2>
          <p className="text-base md:text-xl text-foreground/80 max-w-2xl mx-auto">
            Connect with peers, mentors, and industry experts in our thriving AI community
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-8 mb-10 md:mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={controls}
            variants={{
              visible: { opacity: 1, x: 0, transition: { duration: 0.8 } },
            }}
            className="md:col-span-2"
          >
            {/* Network Visualization */}
            <Card className="bg-card/30 backdrop-blur-sm border-[#0BC5EA]/20 overflow-hidden h-full">
              <CardContent className="p-4 md:p-6">
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-4 md:mb-6 space-y-3 sm:space-y-0">
                  <div className="flex items-center">
                    <div className="size-8 md:size-10 rounded-full bg-[#0BC5EA]/10 flex items-center justify-center mr-3">
                      <Globe className="size-4 md:size-5 text-[#0BC5EA]" />
                    </div>
                    <h3 className="text-lg md:text-xl font-bold text-white">AI LINC Network</h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="outline" className="bg-[#0BC5EA]/10 text-[#0BC5EA] border-[#0BC5EA]/30 text-xs">
                      <div className="size-2 bg-[#0BC5EA] rounded-full mr-1.5"></div>
                      Mentors
                    </Badge>
                    <Badge variant="outline" className="bg-[#6B46C1]/10 text-[#6B46C1] border-[#6B46C1]/30 text-xs">
                      <div className="size-2 bg-[#6B46C1] rounded-full mr-1.5"></div>
                      Students
                    </Badge>
                    <Badge variant="outline" className="bg-foreground/10 text-foreground/80 border-foreground/30 text-xs">
                      <div className="size-2 bg-foreground/80 rounded-full mr-1.5"></div>
                      Partners
                    </Badge>
                  </div>
                </div>

                <div className="relative h-[300px] sm:h-[350px] md:h-[400px] bg-background/20 rounded-lg overflow-hidden">
                  {/* Network connections */}
                  <svg className="absolute inset-0 w-full h-full">
                    {connections.map((connection, index) => {
                      const fromNode = networkNodes.find((node) => node.id === connection.from)
                      const toNode = networkNodes.find((node) => node.id === connection.to)

                      if (!fromNode || !toNode) return null

                      return (
                        <motion.line
                          key={`connection-${index}`}
                          x1={`${fromNode.x}%`}
                          y1={`${fromNode.y}%`}
                          x2={`${toNode.x}%`}
                          y2={`${toNode.y}%`}
                          stroke="url(#networkGradient)"
                          strokeWidth="1"
                          strokeOpacity="0.3"
                          initial={{ pathLength: 0, opacity: 0 }}
                          animate={{ pathLength: 1, opacity: 0.3 }}
                          transition={{ duration: 1.5, delay: 0.1 * index }}
                        />
                      )
                    })}
                    <defs>
                      <linearGradient id="networkGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#0BC5EA" />
                        <stop offset="100%" stopColor="#6B46C1" />
                      </linearGradient>
                    </defs>
                  </svg>

                  {/* Network nodes */}
                  {networkNodes.map((node) => {
                    // Adjust node size for mobile
                    const mobileSize = node.size * 0.7;
                    return (
                      <motion.div
                        key={`node-${node.id}`}
                        className="absolute rounded-full flex items-center justify-center cursor-pointer"
                        style={{
                          left: `${node.x}%`,
                          top: `${node.y}%`,
                          width: `${mobileSize}px`,
                          height: `${mobileSize}px`,
                          transform: "translate(-50%, -50%)",
                        }}
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.05 * node.id }}
                        whileHover={{ scale: 1.1, transition: { duration: 0.2 } }}
                      >
                        <div
                          className={`absolute inset-0 rounded-full ${
                            node.type === "mentor"
                              ? "bg-[#0BC5EA]/20 border border-[#0BC5EA]/50"
                              : node.type === "student"
                                ? "bg-[#6B46C1]/20 border border-[#6B46C1]/50"
                                : node.type === "partner"
                                  ? "bg-foreground/20 border border-foreground/50"
                                  : "bg-[#0BC5EA]/10 border border-[#0BC5EA]/30"
                          }`}
                        />
                        <div className="text-[10px] sm:text-xs font-medium text-center">{node.name.split(" ")[0]}</div>

                        {/* Pulsing effect */}
                        <motion.div
                          className={`absolute inset-0 rounded-full ${
                            node.type === "mentor"
                              ? "bg-[#0BC5EA]/30"
                              : node.type === "student"
                                ? "bg-[#6B46C1]/30"
                                : node.type === "partner"
                                  ? "bg-foreground/30"
                                  : "bg-[#0BC5EA]/20"
                          }`}
                          animate={{
                            scale: [1, 1.2, 1],
                            opacity: [0.3, 0.1, 0.3],
                          }}
                          transition={{
                            duration: 3,
                            repeat: Number.POSITIVE_INFINITY,
                            delay: node.id * 0.2,
                          }}
                          style={{ zIndex: -1 }}
                        />
                      </motion.div>
                    )
                  })}

                  {/* Floating profile cards - adjust size and position for mobile */}
                  <motion.div
                    className="absolute top-5 left-5 sm:top-10 sm:left-10 w-36 sm:w-48"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 1 }}
                  >
                    <Card className="bg-card/70 backdrop-blur-sm border-[#0BC5EA]/30 overflow-hidden">
                      <CardContent className="p-2 sm:p-3">
                        <div className="flex items-center">
                          <Avatar className="size-8 sm:size-10 border-2 border-[#0BC5EA]/50">
                            <AvatarFallback className="bg-[#0BC5EA]/20 text-[#0BC5EA] text-xs sm:text-sm">SC</AvatarFallback>
                          </Avatar>
                          <div className="ml-2 sm:ml-3">
                            <div className="text-xs sm:text-sm font-medium">Dr. Sarah Chen</div>
                            <div className="text-[10px] sm:text-xs text-foreground/60">AI Research Lead</div>
                            <Badge
                              variant="outline"
                              className="mt-1 text-[8px] sm:text-[9px] h-3 sm:h-4 bg-[#0BC5EA]/10 text-[#0BC5EA] border-[#0BC5EA]/30"
                            >
                              Mentor
                            </Badge>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>

                  <motion.div
                    className="absolute bottom-5 right-5 sm:bottom-10 sm:right-10 w-36 sm:w-48"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 1.2 }}
                  >
                    <Card className="bg-card/70 backdrop-blur-sm border-[#6B46C1]/30 overflow-hidden">
                      <CardContent className="p-2 sm:p-3">
                        <div className="flex items-center">
                          <Avatar className="size-8 sm:size-10 border-2 border-[#6B46C1]/50">
                            <AvatarFallback className="bg-[#6B46C1]/20 text-[#6B46C1] text-xs sm:text-sm">PM</AvatarFallback>
                          </Avatar>
                          <div className="ml-2 sm:ml-3">
                            <div className="text-xs sm:text-sm font-medium">Priya Mehta</div>
                            <div className="text-[10px] sm:text-xs text-foreground/60">Cohort #12</div>
                            <Badge
                              variant="outline"
                              className="mt-1 text-[8px] sm:text-[9px] h-3 sm:h-4 bg-[#6B46C1]/10 text-[#6B46C1] border-[#6B46C1]/30"
                            >
                              Student
                            </Badge>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>

                  <motion.div
                    className="absolute top-1/2 right-1/4 w-36 sm:w-48 transform -translate-y-1/2"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 1.4 }}
                  >
                    <Card className="bg-card/70 backdrop-blur-sm border-foreground/30 overflow-hidden">
                      <CardContent className="p-2 sm:p-3">
                        <div className="flex items-center">
                          <Avatar className="size-8 sm:size-10 border-2 border-foreground/50">
                            <AvatarFallback className="bg-foreground/20 text-foreground text-xs sm:text-sm">MS</AvatarFallback>
                          </Avatar>
                          <div className="ml-2 sm:ml-3">
                            <div className="text-xs sm:text-sm font-medium">Microsoft</div>
                            <div className="text-[10px] sm:text-xs text-foreground/60">AI Research</div>
                            <Badge
                              variant="outline"
                              className="mt-1 text-[8px] sm:text-[9px] h-3 sm:h-4 bg-foreground/10 text-foreground/80 border-foreground/30"
                            >
                              Partner
                            </Badge>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={controls}
            variants={{
              visible: { opacity: 1, x: 0, transition: { duration: 0.8 } },
            }}
          >
            <div className="space-y-4 md:space-y-6">
              {/* Community Benefits */}
              <Card className="bg-card/30 backdrop-blur-sm border-[#0BC5EA]/20 overflow-hidden">
                <CardContent className="p-4 md:p-6">
                  <div className="flex items-center mb-3 md:mb-4">
                    <div className="size-8 md:size-10 rounded-full bg-[#0BC5EA]/10 flex items-center justify-center mr-3">
                      <Users className="size-4 md:size-5 text-[#0BC5EA]" />
                    </div>
                    <h3 className="text-lg md:text-xl font-bold text-white">Community Benefits</h3>
                  </div>

                  <div className="space-y-3">
                    <div className="bg-background/30 rounded-lg p-2 md:p-3 flex items-start">
                      <div className="size-6 md:size-8 rounded-full bg-[#0BC5EA]/10 flex items-center justify-center mr-2 md:mr-3 mt-0.5 flex-shrink-0">
                        <MessageSquare className="size-3 md:size-4 text-[#0BC5EA]" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-white text-sm md:text-base mb-0.5 md:mb-1">24/7 Support Forum</h4>
                        <p className="text-foreground/70 text-xs md:text-sm">Get help from peers and mentors anytime</p>
                      </div>
                    </div>

                    <div className="bg-background/30 rounded-lg p-2 md:p-3 flex items-start">
                      <div className="size-6 md:size-8 rounded-full bg-[#0BC5EA]/10 flex items-center justify-center mr-2 md:mr-3 mt-0.5 flex-shrink-0">
                        <Video className="size-3 md:size-4 text-[#0BC5EA]" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-white text-sm md:text-base mb-0.5 md:mb-1">Expert Webinars</h4>
                        <p className="text-foreground/70 text-xs md:text-sm">Weekly sessions with industry leaders</p>
                      </div>
                    </div>

                    <div className="bg-background/30 rounded-lg p-2 md:p-3 flex items-start">
                      <div className="size-6 md:size-8 rounded-full bg-[#0BC5EA]/10 flex items-center justify-center mr-2 md:mr-3 mt-0.5 flex-shrink-0">
                        <Award className="size-3 md:size-4 text-[#0BC5EA]" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-white text-sm md:text-base mb-0.5 md:mb-1">Exclusive Resources</h4>
                        <p className="text-foreground/70 text-xs md:text-sm">Access premium tools and learning materials</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Upcoming Events */}
              <Card className="bg-card/30 backdrop-blur-sm border-[#6B46C1]/20 overflow-hidden">
                <CardContent className="p-4 md:p-6">
                  <div className="flex items-center mb-3 md:mb-4">
                    <div className="size-8 md:size-10 rounded-full bg-[#6B46C1]/10 flex items-center justify-center mr-3">
                      <Calendar className="size-4 md:size-5 text-[#6B46C1]" />
                    </div>
                    <h3 className="text-lg md:text-xl font-bold text-white">Upcoming Events</h3>
                  </div>

                  <div className="space-y-3">
                    {communityEvents.map((event, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 * index + 1 }}
                        className="bg-background/30 rounded-lg p-2 md:p-3 flex items-start"
                      >
                        <div className="size-6 md:size-8 rounded-full bg-[#6B46C1]/10 flex items-center justify-center mr-2 md:mr-3 mt-0.5 flex-shrink-0">
                          {React.createElement(event.icon, { className: "size-3 md:size-4 text-[#6B46C1]" })}
                        </div>
                        <div>
                          <h4 className="font-semibold text-white text-sm md:text-base mb-0.5 md:mb-1">{event.title}</h4>
                          <div className="flex items-center">
                            <Badge
                              variant="outline"
                              className="mr-2 text-[9px] md:text-[10px] h-3 md:h-4 bg-[#6B46C1]/10 text-[#6B46C1] border-[#6B46C1]/30"
                            >
                              {event.type}
                            </Badge>
                            <p className="text-foreground/70 text-[9px] md:text-xs">{event.date}</p>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>

                  <div className="mt-3 md:mt-4 text-center">
                    <Badge variant="outline" className="bg-[#6B46C1]/10 text-[#6B46C1] border-[#6B46C1]/30 text-xs cursor-pointer">
                      View All Events
                    </Badge>
                  </div>
                </CardContent>
              </Card>

              {/* Community Stats */}
              <Card className="bg-card/30 backdrop-blur-sm border-[#0BC5EA]/20 overflow-hidden">
                <CardContent className="p-4 md:p-6">
                  <div className="grid grid-cols-3 gap-2 md:gap-4">
                    <div className="text-center">
                      <div className="text-xl sm:text-2xl md:text-3xl font-bold bg-gradient-to-r from-[#0BC5EA] to-[#6B46C1] bg-clip-text text-transparent">
                        500+
                      </div>
                      <div className="text-xs md:text-sm text-foreground/70">Active Members</div>
                    </div>
                    <div className="text-center">
                      <div className="text-xl sm:text-2xl md:text-3xl font-bold bg-gradient-to-r from-[#0BC5EA] to-[#6B46C1] bg-clip-text text-transparent">
                        50+
                      </div>
                      <div className="text-xs md:text-sm text-foreground/70">Industry Mentors</div>
                    </div>
                    <div className="text-center">
                      <div className="text-xl sm:text-2xl md:text-3xl font-bold bg-gradient-to-r from-[#0BC5EA] to-[#6B46C1] bg-clip-text text-transparent">
                        20+
                      </div>
                      <div className="text-xs md:text-sm text-foreground/70">Monthly Events</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Background glow effects */}
      <div className="absolute top-1/4 left-1/4 size-64 md:size-96 bg-[#0BC5EA]/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 right-1/4 size-64 md:size-96 bg-[#6B46C1]/5 rounded-full blur-3xl"></div>
    </section>
  )
}
