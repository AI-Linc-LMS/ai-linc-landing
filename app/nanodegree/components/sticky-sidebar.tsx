"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Clock, Gift, ShieldCheck, Star, Play } from "lucide-react"

export function StickySidebar() {
    const [selectedPlan, setSelectedPlan] = useState('personal')
    const [isVideoModalOpen, setIsVideoModalOpen] = useState(false)

    return (
        <div className="sticky top-24 bg-card/50 border border-border/20 rounded-xl space-y-6 shadow-lg overflow-hidden">
            {/* Course Title and Description */}
            <div className="px-6 ">
                <h2 className="text-2xl font-bold mb-2">AI Professional Nanodegree Program</h2>
                {/* <p className="text-foreground/80 mb-4">
                    A comprehensive program designed to transform you into an AI professional. Learn cutting-edge AI technologies, practical applications, and gain industry-relevant skills to excel in the rapidly evolving world of artificial intelligence.
                </p> */}
            </div>

            {/* Video Preview Section */}
            <div className="relative group">
                <img 
                    src="/images/1st-pic.png" 
                    alt="Course Preview Thumbnail" 
                    className="w-full h-[250px] object-cover"
                />
                <div 
                    onClick={() => setIsVideoModalOpen(true)}
                    className="absolute inset-0 bg-black/30 flex items-center justify-center cursor-pointer opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                >
                    <div className="bg-white/20 p-4 rounded-full backdrop-blur-sm">
                        <Play className="w-12 h-12 text-white fill-current" />
                    </div>
                </div>
                <div className="absolute bottom-4 left-4 bg-black/50 text-white px-3 py-1 rounded text-sm flex items-center gap-2">
                    <span>Preview this course</span>
                </div>
            </div>

            {/* Pricing and Rating Section */}
            <div className="px-6 pt-4">
                <div className="flex justify-between items-center mb-4">
                    <div>
                        <div className="flex items-baseline gap-2">
                            <span className="text-3xl font-bold text-primary">₹4,999</span>
                        </div>
                    </div>
                    <div className="flex items-center gap-1 text-yellow-400">
                        <Star className="w-5 h-5 fill-current" />
                        <span className="text-lg font-semibold">4.6</span>
                        <span className="text-sm text-foreground/70">(10,519)</span>
                    </div>
                </div>

                {/* Plan Selection */}
                <div className="flex gap-2 mb-4">
                    <Button 
                        variant={selectedPlan === 'personal' ? 'default' : 'outline'}
                        onClick={() => setSelectedPlan('personal')}
                        className="w-full"
                    >
                        Personal
                    </Button>
                    <Button 
                        variant={selectedPlan === 'teams' ? 'default' : 'outline'}
                        onClick={() => setSelectedPlan('teams')}
                        className="w-full"
                    >
                        Teams
                    </Button>
                </div>

                {/* Plan Details */}
                {selectedPlan === 'personal' && (
                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3 }}
                        className="space-y-4 mb-4"
                    >
                        <div className="flex items-center gap-3">
                            <Clock className="w-5 h-5 text-cyan-400" />
                            <span>Full Lifetime Access</span>
                        </div>
                        <div className="flex items-center gap-3">
                            <Gift className="w-5 h-5 text-purple-400" />
                            <span>30-Day Money-Back Guarantee</span>
                        </div>
                        <div className="flex items-center gap-3">
                            <ShieldCheck className="w-5 h-5 text-green-400" />
                            <span>Certificate of Completion</span>
                        </div>
                    </motion.div>
                )}

                {selectedPlan === 'teams' && (
                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3 }}
                        className="space-y-4 mb-4"
                    >
                        <p className="text-foreground/80">
                            Get this course for your entire team, plus 26,000+ top-rated courses.
                        </p>
                        <div className="text-sm text-foreground/70">
                            Starting at ₹850 per month
                        </div>
                    </motion.div>
                )}

                {/* Action Buttons */}
                <div className="space-y-4">
                    <Button 
                        size="lg" 
                        className="w-full bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600"
                        onClick={() => window.open('https://staging.ailinc.com/nanodegree-program-payment?data=3uv_szhmpq_n.959605af', '_blank')}
                    >
                        Buy Now
                    </Button>
                </div>

                {/* Removed Price Countdown */}
            </div>

            {/* Video Modal */}
            {isVideoModalOpen && (
                <div 
                    className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center"
                    onClick={() => setIsVideoModalOpen(false)}
                >
                    <div 
                        className="max-w-4xl w-full aspect-video"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <video 
                            src="/videos/ai_video.mp4" 
                            controls 
                            autoPlay 
                            className="w-full h-full"
                            poster="/images/ai-course-video-thumbnail.png"
                        >
                            Your browser does not support the video tag.
                        </video>
                    </div>
                </div>
            )}
        </div>
    )
} 