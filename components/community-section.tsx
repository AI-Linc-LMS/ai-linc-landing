"use client"

import { useState, useRef, useEffect } from "react"
import { motion } from "framer-motion"
import { Users, MessageSquare, Award, Globe, ChevronLeft, ChevronRight } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

export function CommunitySection() {
  const testimonials = [
    {
      quote:
        "The AI LINC program transformed my career. The work experience component was invaluable in helping me land my dream job.",
      author: "Alex J.",
      role: "AI Product Manager at Spotify",
    },
    {
      quote:
        "Learning AI skills in a practical, work-integrated environment made all the difference. I'm now earning 3x my previous salary.",
      author: "Priya M.",
      role: "AI Consultant",
    },
    {
      quote: "The mentorship and community support at AI LINC is unmatched. I never felt alone in my learning journey.",
      author: "Carlos R.",
      role: "Prompt Engineer at Adobe",
    },
    {
      quote:
        "The curriculum is cutting-edge and the instructors are top-notch. I couldn't have asked for a better learning experience.",
      author: "Sarah T.",
      role: "AI Engineer at Microsoft",
    },
    {
      quote: "The hands-on projects prepared me for real-world challenges. I was job-ready from day one.",
      author: "Michael K.",
      role: "AI Solutions Architect",
    },
  ]

  const benefits = [
    {
      icon: Users,
      title: "Peer Learning",
      description: "Collaborate with like-minded professionals in your cohort",
    },
    {
      icon: MessageSquare,
      title: "Community Forum",
      description: "24/7 access to our active community of AI practitioners",
    },
    {
      icon: Award,
      title: "Exclusive Events",
      description: "Join private workshops with industry leaders",
    },
    {
      icon: Globe,
      title: "Global Network",
      description: "Connect with AI professionals worldwide",
    },
  ]

  const [currentTestimonial, setCurrentTestimonial] = useState(0)
  const testimonialsRef = useRef<HTMLDivElement>(null)

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1))
  }

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1))
  }

  useEffect(() => {
    const interval = setInterval(() => {
      nextTestimonial()
    }, 5000)

    return () => clearInterval(interval)
  }, [])

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
    <section id="community" className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-white to-[#0BC5EA] bg-clip-text text-transparent">
            Join Our Community
          </h2>
          <p className="text-xl text-foreground/80 max-w-2xl mx-auto">
            Connect with peers, mentors, and industry experts in our thriving AI community.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Card className="bg-card/50 backdrop-blur-sm border-[#0BC5EA]/20 rounded-xl h-full relative overflow-hidden">
              <div className="absolute top-0 right-0 size-64 bg-gradient-to-bl from-[#0BC5EA]/10 to-transparent rounded-bl-full"></div>
              <CardHeader>
                <CardTitle className="text-2xl font-bold">Community Benefits</CardTitle>
              </CardHeader>
              <CardContent>
                <motion.div
                  variants={container}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true }}
                  className="grid grid-cols-1 sm:grid-cols-2 gap-6"
                >
                  {benefits.map((benefit, index) => (
                    <motion.div key={index} variants={item} className="flex items-start">
                      <div className="size-10 rounded-full bg-[#0BC5EA]/10 flex items-center justify-center mr-4 mt-1">
                        <benefit.icon className="size-5 text-[#0BC5EA]" />
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold mb-2 text-white">{benefit.title}</h4>
                        <p className="text-foreground/80 text-sm">{benefit.description}</p>
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Card className="bg-card/50 backdrop-blur-sm border-[#6B46C1]/20 rounded-xl h-full relative overflow-hidden">
              <div className="absolute top-0 left-0 size-64 bg-gradient-to-br from-[#6B46C1]/10 to-transparent rounded-br-full"></div>
              <CardHeader className="flex flex-row items-center justify-between">
                <CardTitle className="text-2xl font-bold">Student Testimonials</CardTitle>
                <div className="flex space-x-2">
                  <Button
                    variant="outline"
                    size="icon"
                    className="size-8 rounded-full bg-background/50 border-[#6B46C1]/30"
                    onClick={prevTestimonial}
                  >
                    <ChevronLeft className="size-4 text-[#6B46C1]" />
                    <span className="sr-only">Previous testimonial</span>
                  </Button>
                  <Button
                    variant="outline"
                    size="icon"
                    className="size-8 rounded-full bg-background/50 border-[#6B46C1]/30"
                    onClick={nextTestimonial}
                  >
                    <ChevronRight className="size-4 text-[#6B46C1]" />
                    <span className="sr-only">Next testimonial</span>
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <div className="relative overflow-hidden" ref={testimonialsRef}>
                  <div
                    className="flex transition-transform duration-500 ease-in-out"
                    style={{ transform: `translateX(-${currentTestimonial * 100}%)` }}
                  >
                    {testimonials.map((testimonial, index) => (
                      <div key={index} className="w-full flex-shrink-0">
                        <Card className="bg-background/50 border-[#6B46C1]/10 rounded-lg p-4">
                          <CardContent className="p-0">
                            <p className="text-foreground/80 mb-4 italic">"{testimonial.quote}"</p>
                            <div>
                              <div className="font-semibold text-white">{testimonial.author}</div>
                              <div className="text-sm text-[#6B46C1]">{testimonial.role}</div>
                            </div>
                          </CardContent>
                        </Card>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="flex justify-center mt-4 space-x-2">
                  {testimonials.map((_, index) => (
                    <button
                      key={index}
                      className={cn(
                        "size-2 rounded-full transition-all duration-300",
                        index === currentTestimonial ? "bg-[#6B46C1]" : "bg-[#6B46C1]/30",
                      )}
                      onClick={() => setCurrentTestimonial(index)}
                    />
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <Card className="bg-card/50 backdrop-blur-sm border-[#0BC5EA]/20 rounded-xl relative overflow-hidden">
            <div className="absolute top-0 right-0 size-96 bg-gradient-to-bl from-[#0BC5EA]/5 to-transparent rounded-bl-full"></div>
            <div className="absolute bottom-0 left-0 size-96 bg-gradient-to-tr from-[#6B46C1]/5 to-transparent rounded-tr-full"></div>
            <CardContent className="p-8">
              <div className="relative z-10 text-center max-w-2xl mx-auto">
                <h3 className="text-2xl font-bold mb-4 text-white">Ready to Join Our Community?</h3>
                <p className="text-foreground/80 mb-8">
                  Apply now to secure your spot in our next cohort and start your journey to becoming an AI
                  professional.
                </p>
                <Button className="bg-gradient-to-r from-[#0BC5EA] to-[#6B46C1] hover:opacity-90 text-white font-medium px-8 py-3 rounded-md transition-all duration-300 shadow-[0_0_20px_rgba(11,197,234,0.5)] hover:shadow-[0_0_30px_rgba(11,197,234,0.7)]">
                  Apply Now
                </Button>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>

      {/* Background glow effects */}
      <div className="absolute top-1/4 left-1/4 size-96 bg-[#0BC5EA]/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 right-1/4 size-96 bg-[#6B46C1]/5 rounded-full blur-3xl"></div>
    </section>
  )
}
