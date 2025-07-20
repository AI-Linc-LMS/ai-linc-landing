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
        <div className="lg:sticky lg:top-24 bg-card/50 border border-border/20 rounded-xl space-y-4 lg:space-y-6 shadow-lg overflow-hidden">
            {/* Course Title and Description */}
            <div className="px-4 lg:px-6 pt-4 lg:pt-6">
                <h2 className="text-[12px] lg:text-xl font-bold my-2">AI Professional Nanodegree Program</h2>
                {/* <p className="text-foreground/80 mb-4">
                    A comprehensive program designed to transform you into an AI professional. Learn cutting-edge AI technologies, practical applications, and gain industry-relevant skills to excel in the rapidly evolving world of artificial intelligence.
                </p> */}
            </div>

            {/* Video Preview Section */}
            <div className="relative group">
                <img
                    src="/images/1st-pic.png"
                    alt="Course Preview Thumbnail"
                    className="w-full h-[200px] lg:h-[250px] object-cover"
                />
                <div
                    onClick={() => setIsVideoModalOpen(true)}
                    className="absolute inset-0 bg-black/30 flex items-center justify-center cursor-pointer opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                >
                    <div className="bg-white/20 p-3 lg:p-4 rounded-full backdrop-blur-sm">
                        <Play className="w-8 h-8 lg:w-12 lg:h-12 text-white fill-current" />
                    </div>
                </div>
                <div className="absolute bottom-3 lg:bottom-4 left-3 lg:left-4 bg-black/50 text-white px-2 lg:px-3 py-1 rounded text-xs lg:text-sm flex items-center gap-2">
                    <span>Preview this course</span>
                </div>
            </div>

            {/* Pricing and Rating Section */}
            <div className="px-4 lg:px-4  pt-2 ">
                <div className="flex justify-between items-center mb-4">
                    <div>
                        <div className="flex items-baseline gap-2">
                            <span className="text-2xl lg:text-3xl font-bold text-primary">₹4,999</span>
                        </div>
                    </div>
                    <div className="flex items-center gap-1 text-yellow-400">
                        <Star className="w-4 h-4 lg:w-5 lg:h-5 fill-current" />
                        <span className="text-base lg:text-lg font-semibold">4.6</span>
                        <span className="text-xs lg:text-sm text-foreground/70">(10,519)</span>
                    </div>
                </div>

                {/* Seat Booking Option - Redesigned */}
                <div className="bg-gradient-to-r from-orange-500/20 to-red-500/20 border border-orange-400/50 rounded-lg p-3 mb-4 backdrop-blur-sm">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                            <div className="text-center">
                                <div className="text-lg lg:text-xl font-bold text-orange-400">₹499</div>
                                <div className="text-xs text-orange-300">Book Seat</div>
                            </div>
                            <div className="text-xs lg:text-sm text-orange-200 leading-tight">
                                Reserve your spot ,<br />
                                Pay rest later
                            </div>
                        </div>
                        <Button
                            size="sm"
                            className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-4 py-2 shadow-lg hover:shadow-xl transition-all duration-200"
                            onClick={() => window.open('https://rzp.io/rzp/wnrwzzhe', '_blank')}
                        >
                            Book Now
                        </Button>
                    </div>
                </div>

                {/* Plan Selection */}
                <div className="flex gap-2 mb-4">
                    <Button
                        variant={selectedPlan === 'personal' ? 'default' : 'outline'}
                        onClick={() => setSelectedPlan('personal')}
                        className="w-full text-sm lg:text-base"
                        size="sm"
                    >
                        Personal
                    </Button>
                    <Button
                        variant={selectedPlan === 'teams' ? 'default' : 'outline'}
                        onClick={() => setSelectedPlan('teams')}
                        className="w-full text-sm lg:text-base"
                        size="sm"
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
                        className="space-y-3 lg:space-y-1 mb-2"
                    >
                        <div className="flex items-center gap-2 lg:gap-3">
                            <Clock className="w-4 h-4 lg:w-5 lg:h-5 text-cyan-400 flex-shrink-0" />
                            <span className="text-sm lg:text-base">Full Lifetime Access</span>
                        </div>
                        <div className="flex items-center gap-2 lg:gap-3">
                            <Gift className="w-4 h-4 lg:w-5 lg:h-5 text-purple-400 flex-shrink-0" />
                            <span className="text-sm lg:text-base">30-Day Money-Back Guarantee</span>
                        </div>
                        <div className="flex items-center gap-2 lg:gap-3">
                            <ShieldCheck className="w-4 h-4 lg:w-5 lg:h-5 text-green-400 flex-shrink-0" />
                            <span className="text-sm lg:text-base">Certificate of Completion</span>
                        </div>
                    </motion.div>
                )}

                {selectedPlan === 'teams' && (
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3 }}
                        className="space-y-3 lg:space-y-4 mb-4"
                    >
                        <p className="text-foreground/80 text-sm lg:text-base">
                            Get this course for your entire team, plus 26,000+ top-rated courses.
                        </p>
                        <div className="text-xs lg:text-sm text-foreground/70">
                            {/* Starting at ₹850 per month */}
                        </div>
                    </motion.div>
                )}

                {/* Action Buttons */}
                <div className="space-y-4 pb-4 lg:pb-0">
                    <Button
                        size="lg"
                        className="w-full bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 text-sm lg:text-base py-3 lg:py-4"
                        onClick={() => window.open('https://app.ailinc.com/nanodegree-program-payment?data=3uv_szo8vp_n.0b7e8fe4', '_blank')}
                    >
                        Buy Now
                    </Button>
                </div>

                {/* Removed Price Countdown */}
            </div>

            {/* Video Modal */}
            {isVideoModalOpen && (
                <div
                    className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
                    onClick={() => setIsVideoModalOpen(false)}
                >
                    <div
                        className="max-w-4xl w-full aspect-video"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <video
                            src=""
                            controls
                            autoPlay
                            className="w-full h-full rounded-lg"
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