"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronLeft, ChevronRight, Heart, MessageCircle, Share, Send } from "lucide-react"
import { Button } from "@/components/ui/button"

// Sample data structure for candidates and their LinkedIn posts
const candidatesData = [
  {
    id: 1,
    name: "Swayam Agarwal",
    title: "",
    avatar: "https://media.licdn.com/dms/image/v2/D5635AQGqoBPbNNKjvw/profile-framedphoto-shrink_800_800/B56Zbx.o.xH0As-/0/1747816452357?e=1753909200&v=beta&t=3SBaLyIzVf9zHF6uUDzKkwph51R4M8URUw0tJuzIHpo", // You'll need to add these images
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
    avatar: "/images/candidate2.jpg",
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
    name: "Rahul Ghai",
    title: "",
    avatar: "/images/candidate3.jpg",
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
  }
]

export function LinkedInPostsSection() {
  const [selectedCandidate, setSelectedCandidate] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

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
      className="py-16 md:py-20 relative overflow-hidden"
      onMouseEnter={() => setIsAutoPlaying(false)}
      onMouseLeave={() => setIsAutoPlaying(true)}
    >
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-white via-[#0BC5EA] to-[#6B46C1] bg-clip-text text-transparent">
            Insider Glimpses: Real Conversations with Our Learners
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Click to see real conversations with our learners
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center max-w-7xl mx-auto">
          {/* Left side - Candidate Selection */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="bg-[#1A202C]/50 backdrop-blur-sm border border-[#0BC5EA]/20 rounded-2xl p-6">
              <h3 className="text-2xl font-bold mb-6 text-center">Our Success Stories</h3>
              
              {/* Candidate Carousel */}
              <div className="space-y-4">
                {candidatesData.map((candidate, index) => (
                  <motion.div
                    key={candidate.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ 
                      opacity: 1, 
                      x: 0,
                      scale: selectedCandidate === index ? 1.02 : 1,
                    }}
                    transition={{ duration: 0.3 }}
                    className={`p-4 rounded-xl cursor-pointer transition-all duration-300 ${
                      selectedCandidate === index
                        ? "bg-[#0BC5EA]/10 border border-[#0BC5EA]/30 shadow-lg"
                        : "bg-[#0A1128]/30 border border-transparent hover:bg-[#0A1128]/50"
                    }`}
                    onClick={() => setSelectedCandidate(index)}
                  >
                    <div className="flex items-center space-x-4">
                      <div className="relative">
                        <div className={`w-12 h-12 rounded-full bg-gradient-to-br from-[#0BC5EA] to-[#6B46C1] p-0.5 ${
                          selectedCandidate === index ? "animate-pulse" : ""
                        }`}>
                          <div className="w-full h-full rounded-full overflow-hidden">
                            <img 
                              src={candidate.avatar} 
                              alt={candidate.name}
                              className="w-full h-full object-cover"
                            />
                          </div>
                        </div>
                        {selectedCandidate === index && (
                          <div className="absolute -top-1 -right-1 w-4 h-4 bg-[#0BC5EA] rounded-full animate-ping"></div>
                        )}
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-white">{candidate.name}</h4>
                        <p className="text-sm text-gray-400">{candidate.title}</p>
                      </div>
                      {selectedCandidate === index && (
                        <div className="text-[#0BC5EA]">
                          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                        </div>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Navigation Controls */}
              <div className="flex justify-center items-center space-x-4 mt-6">
                <Button
                  variant="outline"
                  size="icon"
                  onClick={prevCandidate}
                  className="w-10 h-10 rounded-full border-[#0BC5EA]/30 text-[#0BC5EA] hover:bg-[#0BC5EA]/10 hover:border-[#0BC5EA]"
                >
                  <ChevronLeft className="w-4 h-4" />
                </Button>
                
                <div className="flex space-x-2">
                  {candidatesData.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setSelectedCandidate(index)}
                      className={`w-2 h-2 rounded-full transition-all duration-300 ${
                        selectedCandidate === index
                          ? "bg-[#0BC5EA] w-6"
                          : "bg-gray-600 hover:bg-gray-500"
                      }`}
                    />
                  ))}
                </div>

                <Button
                  variant="outline"
                  size="icon"
                  onClick={nextCandidate}
                  className="w-10 h-10 rounded-full border-[#0BC5EA]/30 text-[#0BC5EA] hover:bg-[#0BC5EA]/10 hover:border-[#0BC5EA]"
                >
                  <ChevronRight className="w-4 h-4" />
                </Button>
              </div>
            </div>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <Button
                size="lg"
                className="bg-gradient-to-r from-[#FF6B35] to-[#FF8E53] hover:from-[#FF5722] hover:to-[#FF7043] text-white px-8 py-3 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Free Career Counselling from Experts
              </Button>
            </motion.div>
          </motion.div>

          {/* Right side - Phone Mockup */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative">
              {/* Phone Frame */}
              <div className="relative w-[320px] h-[640px] bg-black rounded-[3rem] p-2 shadow-2xl">
                <div className="w-full h-full bg-white rounded-[2.5rem] overflow-hidden relative">
                  {/* Phone Notch */}
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-32 h-6 bg-black rounded-b-2xl z-10"></div>
                  
                  {/* LinkedIn App Interface */}
                  <div className="h-full bg-white overflow-hidden">
                    {/* LinkedIn Header */}
                    <div className="bg-[#0077B5] px-4 py-3 ">
                      <div className="flex items-center justify-between">
                        <div className="text-white font-bold text-lg">LinkedIn</div>
                        <div className="flex space-x-3">
                          <div className="w-6 h-6 bg-white/20 rounded-full"></div>
                          <div className="w-6 h-6 bg-white/20 rounded-full"></div>
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
                          className="p-4"
                        >
                          {/* Post Header */}
                          {/* <div className="flex items-start space-x-3 mb-3">
                            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#0BC5EA] to-[#6B46C1] flex items-center justify-center">
                              <span className="text-white font-bold text-sm">
                                {currentCandidate.name.split(' ').map(n => n[0]).join('')}
                              </span>
                            </div>
                            <div className="flex-1">
                              <h4 className="font-semibold text-gray-900 text-sm">{currentCandidate.name}</h4>
                              <p className="text-xs text-gray-600">{currentCandidate.title}</p>
                              <p className="text-xs text-gray-500">{currentCandidate.linkedinPost.timestamp} • 🌐</p>
                            </div>
                            <div className="text-gray-400">
                              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z" />
                              </svg>
                            </div>
                          </div> */}

                          {/* Post Content */}
                          <div className="">
                            {/* <p className="text-sm text-gray-800 leading-relaxed whitespace-pre-line">
                              {currentCandidate.linkedinPost.content}
                            </p> */}
                          </div>

                          {/* Post Image */}
                          {currentCandidate.linkedinPost.image && (
                            <div className=" rounded-lg overflow-hidden">
                              <img 
                                src={currentCandidate.linkedinPost.image} 
                                alt={`${currentCandidate.name}'s LinkedIn post`}
                                className="w-full h-auto object-cover"
                                onError={(e) => {
                                  // Fallback if image fails to load
                                  const img = e.currentTarget;
                                  const fallback = img.nextElementSibling as HTMLElement;
                                  img.style.display = 'none';
                                  if (fallback) {
                                    fallback.style.display = 'flex';
                                    fallback.classList.remove('hidden');
                                  }
                                }}
                              />
                              <div className="hidden bg-gray-200 rounded-lg items-center justify-center">
                                <div className="text-gray-500 text-xs">{currentCandidate.linkedinPost.image}</div>
                              </div>
                            </div>
                          )}

                          {/* Post Engagement */}
                          <div className="border-t border-gray-200 pt-3">
                            <div className="flex items-center justify-between text-xs text-gray-600 mb-3">
                              <span>👍 {currentCandidate.linkedinPost.likes} likes</span>
                              <span>{currentCandidate.linkedinPost.comments} comments • {currentCandidate.linkedinPost.shares} shares</span>
                            </div>
                            
                            <div className="flex items-center justify-around border-t border-gray-200 pt-2">
                              <button className="flex items-center space-x-1 text-gray-600 hover:text-[#0077B5] text-xs py-2">
                                <Heart className="w-4 h-4" />
                                <span>Like</span>
                              </button>
                              <button className="flex items-center space-x-1 text-gray-600 hover:text-[#0077B5] text-xs py-2">
                                <MessageCircle className="w-4 h-4" />
                                <span>Comment</span>
                              </button>
                              <button className="flex items-center space-x-1 text-gray-600 hover:text-[#0077B5] text-xs py-2">
                                <Share className="w-4 h-4" />
                                <span>Share</span>
                              </button>
                              <button className="flex items-center space-x-1 text-gray-600 hover:text-[#0077B5] text-xs py-2">
                                <Send className="w-4 h-4" />
                                <span>Send</span>
                              </button>
                            </div>
                          </div>
                        </motion.div>
                      </AnimatePresence>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Elements */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-4 -left-4 w-8 h-8 bg-[#0BC5EA]/20 rounded-full blur-sm"
              />
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute -bottom-4 -right-4 w-12 h-12 bg-[#6B46C1]/20 rounded-full blur-sm"
              />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Background Effects */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#0BC5EA]/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#6B46C1]/5 rounded-full blur-3xl"></div>
    </section>
  )
} 