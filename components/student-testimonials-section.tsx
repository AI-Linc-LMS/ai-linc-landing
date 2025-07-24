"use client"

import { useState, useEffect, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronLeft, ChevronRight, Play } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Dialog, DialogContent } from "@/components/ui/dialog"
import Image from "next/image"

interface StudentTestimonial {
  id: string
  name: string
  role: string
  company: string
  companyLogo: string
  videoThumbnail: string
  videoUrl: string
  testimonialText: string
  companyColor: string
}

export function StudentTestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false)
  const [selectedVideo, setSelectedVideo] = useState<StudentTestimonial | null>(null)
  const [direction, setDirection] = useState(0)
  const videoRef = useRef<HTMLVideoElement>(null)

  const testimonials: StudentTestimonial[] = [
    {
      id: "1",
      name: "Rijul Gaur",
      role: "Data Analyst",
      company: "JPMorgan Chase & Co.",
      companyLogo: "/testimonials/jpmorgan-logo.png",
      videoThumbnail: "/placeholder-user.jpg",
      videoUrl: "/videos/ailinc10_2.mp4",
      testimonialText: "AI Linc transformed my career from a fresher to landing a data analyst role at JPMorgan. The practical approach and industry connections made all the difference.",
      companyColor: "#0066CC"
    },
    {
      id: "2",
      name: "Jaya Sinha",
      role: "Data Scientist",
      company: "Amazon",
      companyLogo: "/testimonials/amazon-logo.png",
      videoThumbnail: "/placeholder-user.jpg",
      videoUrl: "/videos/ailinc10_2.mp4",
      testimonialText: "The comprehensive curriculum and mentorship at AI Linc prepared me perfectly for my role as a Data Scientist at Amazon. Highly recommended!",
      companyColor: "#FF9900"
    },
    {
      id: "3",
      name: "Arvind K.",
      role: "Sr. Data Scientist",
      company: "The Math Company",
      companyLogo: "/testimonials/mathcompany-logo.png",
      videoThumbnail: "/placeholder-user.jpg",
      videoUrl: "/videos/ailinc10_2.mp4",
      testimonialText: "From learning the fundamentals to mastering advanced AI concepts, AI Linc's program gave me the confidence to excel as a Senior Data Scientist.",
      companyColor: "#1E40AF"
    },
    {
      id: "4",
      name: "Shubham Kumar",
      role: "Data Scientist",
      company: "Genpact",
      companyLogo: "/testimonials/genpact-logo.png",
      videoThumbnail: "/placeholder-user.jpg",
      videoUrl: "/videos/ailinc10_2.mp4",
      testimonialText: "The hands-on projects and real-world applications taught at AI Linc directly translated to success in my current role at Genpact.",
      companyColor: "#00A651"
    },
    {
      id: "5",
      name: "Mahasweta Sarkar",
      role: "Data Analytics Consultant",
      company: "Capgemini",
      companyLogo: "/testimonials/capgemini-logo.png",
      videoThumbnail: "/placeholder-user.jpg",
      videoUrl: "/videos/ailinc10_2.mp4",
      testimonialText: "AI Linc's industry-focused training and placement support helped me secure a consulting role at Capgemini. The journey was incredible!",
      companyColor: "#0070AD"
    }
  ]

  // Auto-advance testimonials
  useEffect(() => {
    const timer = setInterval(() => {
      setDirection(1)
      setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [testimonials.length])

  const nextTestimonial = () => {
    setDirection(1)
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setDirection(-1)
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  const handleVideoPlay = (testimonial: StudentTestimonial) => {
    setSelectedVideo(testimonial)
    setIsVideoModalOpen(true)
  }

  const handleModalClose = () => {
    setIsVideoModalOpen(false)
    setSelectedVideo(null)
    if (videoRef.current) {
      videoRef.current.pause()
      videoRef.current.currentTime = 0
    }
  }

  const getVisibleTestimonials = () => {
    const visible = []
    for (let i = 0; i < 5; i++) {
      const index = (currentIndex + i) % testimonials.length
      visible.push({
        ...testimonials[index],
        position: i
      })
    }
    return visible
  }

  const contentSlideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 100 : -100,
      opacity: 0
    }),
    center: {
      x: 0,
      opacity: 1
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 100 : -100,
      opacity: 0
    })
  }

  const VideoCard = ({ testimonial, position, isCenter }: { 
    testimonial: StudentTestimonial, 
    position: number, 
    isCenter: boolean 
  }) => (
    <Card 
      className="bg-[#1A202C]/80 backdrop-blur-sm border-[#0BC5EA]/20 rounded-2xl overflow-hidden cursor-pointer hover:border-[#0BC5EA]/40 transition-all duration-300"
      onClick={() => handleVideoPlay(testimonial)}
    >
      <div className="relative aspect-[4/5]">
        <AnimatePresence custom={direction} mode="wait">
          <motion.div
            key={`content-${testimonial.id}-${position}`}
            custom={direction}
            variants={contentSlideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.3 }}
            className="relative w-full h-full bg-gradient-to-b from-transparent to-black/60"
          >
            <Image
              src={testimonial.videoThumbnail}
              alt={`${testimonial.name} testimonial`}
              fill
              className="object-cover"
            />
            
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center hover:bg-white transition-colors duration-300">
                <Play className="w-6 h-6 text-black ml-1" fill="currentColor" />
              </div>
            </div>

            <div className="absolute bottom-0 left-0 right-0 p-4">
              <div className="flex items-center gap-3 mb-2">
                <div 
                  className="px-3 py-1 rounded-md flex items-center justify-center text-white font-bold text-xs"
                  style={{ backgroundColor: testimonial.companyColor }}
                >
                  {testimonial.company === "JPMorgan Chase & Co." ? "JPMORGAN" :
                   testimonial.company === "The Math Company" ? "TheMathCompany" :
                   testimonial.company.toUpperCase()}
                </div>
              </div>
              
              <div className="text-white">
                <h3 className="font-bold text-lg">{testimonial.name}</h3>
                <p className="text-sm text-white/80">{testimonial.role}</p>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </Card>
  )

  return (
    <section className="py-12 sm:py-16 lg:py-20 relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-8 sm:mb-12 lg:mb-16"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">
            <span className="bg-gradient-to-r from-white via-[#0BC5EA] to-[#6B46C1] bg-clip-text text-transparent">
              Real Stories, Real Success
            </span>
          </h2>
          <p className="text-lg sm:text-xl lg:text-2xl text-foreground/80 max-w-4xl mx-auto leading-relaxed">
            Discover what our learners say about us
          </p>
        </motion.div>

        {/* Testimonials Carousel */}
        <div className="relative max-w-4xl mx-auto">
          <div className="flex items-center justify-center gap-4">
            {/* Left Navigation */}
            <Button
              variant="outline"
              size="icon"
              onClick={prevTestimonial}
              className="border-[#0BC5EA]/30 text-[#0BC5EA] hover:bg-[#0BC5EA]/10 hover:border-[#0BC5EA] h-12 w-12 rounded-full flex-shrink-0 z-10"
            >
              <ChevronLeft className="size-6" />
            </Button>

            {/* Static Video Cards Container */}
            <div className="flex items-center justify-center gap-1 sm:gap-2 lg:gap-4 flex-1">
              {/* Position 0 - Far Left */}
              <div className="w-32 sm:w-48 lg:w-56 hidden sm:block opacity-60 scale-85">
                <VideoCard 
                  testimonial={getVisibleTestimonials()[0]} 
                  position={0}
                  isCenter={false}
                />
              </div>

              {/* Position 1 - Left */}
              <div className="w-36 sm:w-52 lg:w-60 hidden sm:block opacity-60 scale-90">
                <VideoCard 
                  testimonial={getVisibleTestimonials()[1]} 
                  position={1}
                  isCenter={false}
                />
              </div>

              {/* Position 2 - Center (Main) */}
              <div className="w-48 sm:w-64 lg:w-72 opacity-100 scale-100">
                <VideoCard 
                  testimonial={getVisibleTestimonials()[2]} 
                  position={2}
                  isCenter={true}
                />
              </div>

              {/* Position 3 - Right */}
              <div className="w-36 sm:w-52 lg:w-60 hidden sm:block opacity-60 scale-90">
                <VideoCard 
                  testimonial={getVisibleTestimonials()[3]} 
                  position={3}
                  isCenter={false}
                />
              </div>

              {/* Position 4 - Far Right */}
              <div className="w-32 sm:w-48 lg:w-56 hidden sm:block opacity-60 scale-85">
                <VideoCard 
                  testimonial={getVisibleTestimonials()[4]} 
                  position={4}
                  isCenter={false}
                />
              </div>
            </div>

            {/* Right Navigation */}
            <Button
              variant="outline"
              size="icon"
              onClick={nextTestimonial}
              className="border-[#0BC5EA]/30 text-[#0BC5EA] hover:bg-[#0BC5EA]/10 hover:border-[#0BC5EA] h-12 w-12 rounded-full flex-shrink-0 z-10"
            >
              <ChevronRight className="size-6" />
            </Button>
          </div>

          {/* Mobile Navigation */}
          <div className="flex sm:hidden justify-center gap-4 mt-6">
            <Button
              variant="outline"
              size="icon"
              onClick={prevTestimonial}
              className="border-[#0BC5EA]/30 text-[#0BC5EA] hover:bg-[#0BC5EA]/10 hover:border-[#0BC5EA] h-10 w-10 rounded-full"
            >
              <ChevronLeft className="size-4" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              onClick={nextTestimonial}
              className="border-[#0BC5EA]/30 text-[#0BC5EA] hover:bg-[#0BC5EA]/10 hover:border-[#0BC5EA] h-10 w-10 rounded-full"
            >
              <ChevronRight className="size-4" />
            </Button>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setDirection(index > currentIndex ? 1 : -1)
                  setCurrentIndex(index)
                }}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? "bg-[#0BC5EA] scale-125"
                    : "bg-foreground/30 hover:bg-foreground/50"
                }`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Video Modal */}
      <Dialog open={isVideoModalOpen} onOpenChange={handleModalClose}>
        <DialogContent className="max-w-4xl w-full p-0 bg-black border-none">
          {selectedVideo && (
            <div className="relative aspect-video">
              <video
                ref={videoRef}
                className="w-full h-full object-contain"
                controls
                autoPlay
                preload="metadata"
              >
                <source src={selectedVideo.videoUrl} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  )
} 