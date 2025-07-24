"use client"

import { useState, useEffect, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronLeft, ChevronRight, Heart, MessageCircle, Share, Send } from "lucide-react"
import { Button } from "@/components/ui/button"

// Sample data structure for candidates and their LinkedIn posts
const candidatesData = [
  {
    id: 1,
    name: "Swayam Agarwal",
    title: "",
    avatar: "https://media.licdn.com/dms/image/v2/D5635AQGqoBPbNNKjvw/profile-framedphoto-shrink_800_800/B56Zbx.o.xH0As-/0/1747816452357?e=1753909200&v=beta&t=3SBaLyIzVf9zHF6uUDzKkwph51R4M8URUw0tJuzIHpo",
    linkedinPost: {
      content: "",
      timestamp: "1d",
      likes: 42,
      comments: 8,
      shares: 3,
      image: "/link/ss_10.png"
    }
  },
  {
    id: 2,
    name: "Shubham Narvekar",
    title: "",
    avatar: "https://media.licdn.com/dms/image/v2/D4D35AQEDQnovWLJ78A/profile-framedphoto-shrink_800_800/B4DZc1.6HfG8Ao-/0/1748957373227?e=1753970400&v=beta&t=smdlQhQ18uD4wa0W95Tzeu_6kxvwo6zwNNEtXr2TehU",
    linkedinPost: {
      content: "",
      timestamp: "2d",
      likes: 67,
      comments: 12,
      shares: 5,
      image: "/link/ss7.png"
    }
  },
  {
    id: 3,
    name: "Rishab Ghai",
    title: "",
    avatar: "/link/Rishab.png",
    linkedinPost: {
      content: "",
      timestamp: "3d",
      likes: 89,
      comments: 15,
      shares: 7,
      image: "/link/ss2.png"
    }
  },
  {
    id: 4,
    name: "Krishna Patidar",
    title: "",
    avatar: "https://media.licdn.com/dms/image/v2/D4D03AQF_SDIwN7DtOg/profile-displayphoto-shrink_800_800/B4DZV8gonBGkAg-/0/1741550686433?e=1756339200&v=beta&t=Jx47IYCS6mHeGwaKVoz2V2jQh0ZU86ccB9AtBRtrf-I",
    linkedinPost: {
      content: "",
      timestamp: "4d",
      likes: 134,
      comments: 23,
      shares: 11,
      image: "/link/ss3 png.png"
    }
  },
  {
    id: 5,
    name: "Amruta Kore",
    title: "",
    avatar: "https://media.licdn.com/dms/image/v2/D4E03AQEcJfzgeq2XNw/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1718220158523?e=1756339200&v=beta&t=4XHlv7v7FrI4k-UcCjavm80DvSVXSqIsgJwOUJVDDwc",
    linkedinPost: {
      content: "",
      timestamp: "5d",
      likes: 156,
      comments: 28,
      shares: 14,
      image: "/link/ss5 png.png"
    }
  },
  {
    id: 6,
    name: "Mahir Prajapati",
    title: "",
    avatar: "https://media.licdn.com/dms/image/v2/D4E35AQExoRGFxj3c2g/profile-framedphoto-shrink_800_800/B4EZcYgOBcHAAg-/0/1748462788941?e=1753966800&v=beta&t=Hfad8YxbHQu57dlp6-60EqEb9_C7JkLh0TBHvf-XCas",
    linkedinPost: {
      content: "",
      timestamp: "5d",
      likes: 156,
      comments: 28,
      shares: 14,
      image: "/link/ss png.png"
    }
  },
  {
    id: 7,
    name: "Mohammad Asef Qayumi",
    title: "",
    avatar: "https://media.licdn.com/dms/image/v2/D4D03AQFOGe_2IFY0uQ/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1726383200155?e=1756339200&v=beta&t=0OlzVUcq4T1Xndsnr8p-HPAq3477RwO48LPe7vlMo1Q",
    linkedinPost: {
      content: "",
      timestamp: "5d",
      likes: 156,
      comments: 28,
      shares: 14,
      image: "/link/ss6 png.png"
    }
  },
  {
    id: 8,
    name: "Vijaya Pothula ",
    title: "",
    avatar: "https://media.licdn.com/dms/image/v2/D5603AQGO_J5hGezn7g/profile-displayphoto-crop_800_800/B56ZfGgR7qGoAM-/0/1751382041067?e=1756339200&v=beta&t=ojkgq9ONJu3lB4ZwQGWYkGpWyP1HQTAVm-vz8GPZG-k",
    linkedinPost: {
      content: "",
      timestamp: "5d",
      likes: 156,
      comments: 28,
      shares: 14,
      image: "/link/Vijaya.png"
    }
  },
  
]

export function LinkedInPostsSection() {
  const [selectedCandidate, setSelectedCandidate] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)
  
  // Ref for the avatar container
  const avatarsRef = useRef<HTMLDivElement>(null)

  // Center the current avatar whenever it changes
  useEffect(() => {
    const container = avatarsRef.current
    if (!container) return

    const activeAvatar = container.children[selectedCandidate] as HTMLElement | undefined
    if (!activeAvatar) return

    const containerMid = container.clientWidth / 2
    const avatarMid = activeAvatar.offsetLeft + activeAvatar.clientWidth / 2
    const targetScrollPos = Math.max(0, avatarMid - containerMid)

    container.scrollTo({ 
      left: targetScrollPos, 
      behavior: "smooth" as ScrollBehavior 
    })
  }, [selectedCandidate])

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return

    const interval = setInterval(() => {
      setSelectedCandidate((prev) => (prev + 1) % candidatesData.length)
    }, 4000)

    return () => clearInterval(interval)
  }, [isAutoPlaying])

  const nextCandidate = () => {
    setSelectedCandidate((prev) => (prev + 1) % candidatesData.length)
  }

  const prevCandidate = () => {
    setSelectedCandidate((prev) => (prev - 1 + candidatesData.length) % candidatesData.length)
  }

  const currentCandidate = candidatesData[selectedCandidate]

  return (
    <section 
      className="py-8 sm:py-12 md:py-16 lg:py-20 relative overflow-hidden"
      onMouseEnter={() => setIsAutoPlaying(false)}
      onMouseLeave={() => setIsAutoPlaying(true)}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-8 md:mb-12 lg:mb-16"
        >
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold mb-3 sm:mb-4 md:mb-6 bg-gradient-to-r from-white via-[#0BC5EA] to-[#6B46C1] bg-clip-text text-transparent leading-tight">
            Insider Glimpses: Real Conversations with Our Learners
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-3xl mx-auto px-4">
            Click to see real conversations with our learners
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto">
          {/* Main Content Area */}
          <div className="grid lg:grid-cols-12 gap-6 lg:gap-8 items-center">
            {/* Left Content - Takes up 7 columns on desktop, full width on mobile */}
            <div className="lg:col-span-7 space-y-6 sm:space-y-8 order-2 lg:order-1">
              {/* Candidate Carousel - Horizontal */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="flex items-center justify-center space-x-3 sm:space-x-6 mb-6 sm:mb-8">
                  {/* Previous Button */}
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={prevCandidate}
                    className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border-gray-300 text-gray-600 hover:bg-gray-100 hover:border-gray-400 bg-white/80 backdrop-blur-sm flex-shrink-0"
                  >
                    <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5" />
                  </Button>

                  {/* Candidate Avatars - Auto sliding container */}
                  <div 
                    ref={avatarsRef}
                    className="flex items-center space-x-2 sm:space-x-4 overflow-hidden"
                  >
                    {candidatesData.map((candidate, index) => (
                      <motion.div
                        key={`${candidate.id}-${index}`}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ 
                          opacity: 1, 
                          scale: selectedCandidate === index ? 1.1 : 0.9,
                        }}
                        transition={{ duration: 0.3 }}
                        className={`relative cursor-pointer flex-shrink-0 ${
                          selectedCandidate === index ? 'z-10' : 'z-0'
                        }`}
                        onClick={() => setSelectedCandidate(index)}
                      >
                        <div className={`w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 rounded-full overflow-hidden border-3 sm:border-4 transition-all duration-300 ${
                          selectedCandidate === index
                            ? "border-[#0BC5EA] shadow-lg shadow-[#0BC5EA]/30"
                            : "border-gray-300 hover:border-gray-400"
                        }`}>
                          <img 
                            src={candidate.avatar} 
                            alt={candidate.name}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        {selectedCandidate === index && (
                          <div className="absolute -bottom-1 sm:-bottom-2 left-1/2 transform -translate-x-1/2 w-1.5 h-1.5 sm:w-2 sm:h-2 bg-[#0BC5EA] rounded-full"></div>
                        )}
                      </motion.div>
                    ))}
                  </div>

                  {/* Next Button */}
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={nextCandidate}
                    className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border-gray-300 text-gray-600 hover:bg-gray-100 hover:border-gray-400 bg-white/80 backdrop-blur-sm flex-shrink-0"
                  >
                    <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
                  </Button>
                </div>

                {/* Selected Candidate Info */}
                <motion.div
                  key={selectedCandidate}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                  className="text-center mb-6 sm:mb-8"
                >
                  <h4 className="text-lg sm:text-xl font-semibold text-white mb-1">{currentCandidate.name}</h4>
                  <p className="text-sm sm:text-base text-gray-400">{currentCandidate.title}</p>
                </motion.div>

                {/* Dots Indicator */}
                <div className="flex justify-center space-x-2 mb-6 sm:mb-8">
                  {candidatesData.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setSelectedCandidate(index)}
                      className={`h-2 rounded-full transition-all duration-300 ${
                        selectedCandidate === index
                          ? "bg-[#0BC5EA] w-6 sm:w-8"
                          : "bg-gray-500 hover:bg-gray-400 w-2"
                      }`}
                    />
                  ))}
                </div>
              </motion.div>

              {/* CTA Button */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="text-center lg:text-left flex justify-center"
              >
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-[#FF6B35] to-[#FF8E53] hover:from-[#FF5722] hover:to-[#FF7043] text-white px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg rounded-xl sm:rounded-2xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 w-full sm:w-auto max-w-sm"
                >
                  Free Career Counselling from Experts
                </Button>
              </motion.div>
            </div>

            {/* Right Content - Phone Mockup - Takes up 5 columns on desktop, full width on mobile */}
            <div className="lg:col-span-5 flex justify-center lg:justify-end order-1 lg:order-2">
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="relative"
              >
                {/* Phone Frame - Responsive sizing */}
                <div className="relative w-[280px] sm:w-[300px] md:w-[320px] h-[560px] sm:h-[600px] md:h-[640px] bg-black rounded-[2.5rem] sm:rounded-[3rem] p-1.5 sm:p-2 shadow-2xl mx-auto">
                  <div className="w-full h-full bg-white rounded-[2rem] sm:rounded-[2.5rem] overflow-hidden relative">
                    {/* Phone Notch */}
                    <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-28 sm:w-32 h-5 sm:h-6 bg-black rounded-b-xl sm:rounded-b-2xl z-10"></div>
                    
                    {/* LinkedIn App Interface */}
                    <div className="h-full bg-white overflow-hidden">
                      {/* LinkedIn Header */}
                      <div className="bg-[#0077B5] px-3 sm:px-4 py-2.5 sm:py-3 pt-6 sm:pt-7">
                        <div className="flex items-center justify-between">
                          <div className="text-white font-bold text-base sm:text-lg">LinkedIn</div>
                          <div className="flex space-x-2 sm:space-x-3">
                            <div className="w-5 h-5 sm:w-6 sm:h-6 bg-white/20 rounded-full"></div>
                            <div className="w-5 h-5 sm:w-6 sm:h-6 bg-white/20 rounded-full"></div>
                          </div>
                        </div>
                      </div>

                      {/* LinkedIn Post Content */}
                      <div className="flex-1 overflow-y-auto">
                        <AnimatePresence mode="wait">
                          <motion.div
                            key={selectedCandidate}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.5 }}
                            className="p-3 sm:p-4"
                          >
                            {/* Post Image */}
                            {currentCandidate.linkedinPost.image && (
                              <div className="rounded-lg overflow-hidden">
                                <img 
                                  src={currentCandidate.linkedinPost.image} 
                                  alt={`${currentCandidate.name}'s LinkedIn post`}
                                  className="w-full h-auto object-cover"
                                  onError={(e) => {
                                    const img = e.currentTarget;
                                    const fallback = img.nextElementSibling as HTMLElement;
                                    img.style.display = 'none';
                                    if (fallback) {
                                      fallback.style.display = 'flex';
                                      fallback.classList.remove('hidden');
                                    }
                                  }}
                                />
                                <div className="hidden bg-gray-200 rounded-lg items-center justify-center p-4">
                                  <div className="text-gray-500 text-xs break-all">{currentCandidate.linkedinPost.image}</div>
                                </div>
                              </div>
                            )}

                            {/* Post Engagement */}
                            <div className="border-t border-gray-200 pt-2.5 sm:pt-3 mt-2.5 sm:mt-3">
                              <div className="flex items-center justify-between text-xs text-gray-600 mb-2.5 sm:mb-3">
                                <span>👍 {currentCandidate.linkedinPost.likes} likes</span>
                                <span className="text-right">{currentCandidate.linkedinPost.comments} comments • {currentCandidate.linkedinPost.shares} shares</span>
                              </div>
                              
                              <div className="flex items-center justify-around border-t border-gray-200 pt-2">
                                <button className="flex items-center space-x-1 text-gray-600 hover:text-[#0077B5] text-xs py-2 flex-1 justify-center">
                                  <Heart className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                                  <span className="hidden sm:inline">Like</span>
                                </button>
                                <button className="flex items-center space-x-1 text-gray-600 hover:text-[#0077B5] text-xs py-2 flex-1 justify-center">
                                  <MessageCircle className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                                  <span className="hidden sm:inline">Comment</span>
                                </button>
                                <button className="flex items-center space-x-1 text-gray-600 hover:text-[#0077B5] text-xs py-2 flex-1 justify-center">
                                  <Share className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                                  <span className="hidden sm:inline">Share</span>
                                </button>
                                <button className="flex items-center space-x-1 text-gray-600 hover:text-[#0077B5] text-xs py-2 flex-1 justify-center">
                                  <Send className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                                  <span className="hidden sm:inline">Send</span>
                                </button>
                              </div>
                            </div>
                          </motion.div>
                        </AnimatePresence>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Floating Elements - Smaller on mobile */}
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute -top-2 sm:-top-4 -left-2 sm:-left-4 w-6 h-6 sm:w-8 sm:h-8 bg-[#0BC5EA]/20 rounded-full blur-sm"
                />
                <motion.div
                  animate={{ y: [0, 10, 0] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                  className="absolute -bottom-2 sm:-bottom-4 -right-2 sm:-right-4 w-8 h-8 sm:w-12 sm:h-12 bg-[#6B46C1]/20 rounded-full blur-sm"
                />
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      {/* Background Effects - Responsive sizing */}
      <div className="absolute top-1/4 left-1/4 w-32 h-32 sm:w-64 sm:h-64 md:w-96 md:h-96 bg-[#0BC5EA]/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 right-1/4 w-32 h-32 sm:w-64 sm:h-64 md:w-96 md:h-96 bg-[#6B46C1]/5 rounded-full blur-3xl"></div>
    </section>
  )
}
