"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronLeft, ChevronRight, Heart, MessageCircle, Share, Send } from "lucide-react"
import { Button } from "@/components/ui/button"

// Sample data structure for candidates and their LinkedIn posts
const candidatesData = [
  {
    id: 1,
    name: "Satyanarayan Mohapatra",
    title: "Data Scientist",
    avatar: "/images/candidate1.jpg", // You'll need to add these images
    linkedinPost: {
      content: "Thrilled to announce the attainment of my Big Data Certificate! 🎯 Delving into the depths of data analytics, I've honed skills in processing, analyzing, and interpreting vast data sets.\n\nFrom harnessing Hadoop to mastering Spark, this journey has been exhilarating. Grateful for the support and guidance throughout this pursuit Silvia Priyadharshini mam Learnbay\n\nThis certificate symbolizes a milestone in my commitment to excellence in the realm of data science. Excited to leverage these newfound skills in unlocking insights and driving impactful decisions. Onwards and upwards, ready to conquer new data frontiers! 🚀",
      timestamp: "1d",
      likes: 42,
      comments: 8,
      shares: 3,
      image: "/images/certificate1.jpg"
    }
  },
  {
    id: 2,
    name: "Priya Sharma",
    title: "AI Engineer",
    avatar: "/images/candidate2.jpg",
    linkedinPost: {
      content: "Just completed my AI certification from AI LINC! 🤖 The journey has been incredible - from learning prompt engineering to building real AI applications.\n\nSpecial thanks to the amazing mentors who guided us through this transformative experience. Ready to apply these skills in the real world! #AI #MachineLearning #Career",
      timestamp: "2d",
      likes: 67,
      comments: 12,
      shares: 5,
      image: "/images/certificate2.jpg"
    }
  },
  {
    id: 3,
    name: "Rahul Kumar",
    title: "Full Stack Developer",
    avatar: "/images/candidate3.jpg",
    linkedinPost: {
      content: "Excited to share that I've successfully transitioned from a non-tech background to becoming a Full Stack Developer! 💻\n\nThe AI LINC program provided the perfect blend of theoretical knowledge and hands-on experience. Built 5 real projects and gained industry-ready skills. #FullStack #CareerTransition #TechJourney",
      timestamp: "3d",
      likes: 89,
      comments: 15,
      shares: 7,
      image: "/images/project1.jpg"
    }
  },
  {
    id: 4,
    name: "Anisha Patel",
    title: "Product Manager",
    avatar: "/images/candidate4.jpg",
    linkedinPost: {
      content: "From idea to execution - just launched my first AI-powered product! 🚀\n\nThe AI LINC program taught me how to bridge the gap between technical possibilities and business needs. Grateful for the mentorship and support throughout this journey. #ProductManagement #AI #Innovation",
      timestamp: "4d",
      likes: 134,
      comments: 23,
      shares: 11,
      image: "/images/product1.jpg"
    }
  },
  {
    id: 5,
    name: "Vikram Singh",
    title: "ML Engineer",
    avatar: "/images/candidate5.jpg",
    linkedinPost: {
      content: "Thrilled to announce my placement at a top tech company! 🎉\n\nThe comprehensive AI and ML training at AI LINC prepared me for real-world challenges. From algorithms to deployment, every aspect was covered thoroughly. Thank you to the entire team! #MachineLearning #Placement #Success",
      timestamp: "5d",
      likes: 156,
      comments: 28,
      shares: 14,
      image: "/images/placement1.jpg"
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
                          <div className="w-full h-full rounded-full bg-[#1A202C] flex items-center justify-center">
                            <span className="text-lg font-bold text-white">
                              {candidate.name.split(' ').map(n => n[0]).join('')}
                            </span>
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
                    <div className="bg-[#0077B5] px-4 py-3 pt-8">
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
                          <div className="flex items-start space-x-3 mb-3">
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
                          </div>

                          {/* Post Content */}
                          <div className="mb-4">
                            <p className="text-sm text-gray-800 leading-relaxed whitespace-pre-line">
                              {currentCandidate.linkedinPost.content}
                            </p>
                          </div>

                          {/* Post Image */}
                          <div className="mb-4 bg-gray-200 rounded-lg h-40 flex items-center justify-center">
                            <div className="text-gray-500 text-xs">📸 Certificate/Project Image</div>
                          </div>

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