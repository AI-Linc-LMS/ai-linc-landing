"use client"

import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Clock, BookOpen, Users } from "lucide-react"

export function HeroSection() {
    return (
        <section className="relative py-16 md:py-24 px-4">
            <div className="max-w-6xl mx-auto flex flex-col items-center text-center">
                <motion.div 
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="space-y-6 max-w-3xl"
                >
                    <Badge variant="secondary" className="text-sm">
                        AI Linc Nanodegree Program
                    </Badge>
                    <h1 className="text-4xl md:text-6xl font-bold leading-tight bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">
                        Your Structured Pathway into AI & Full-Stack Product Development
                    </h1>
                    <p className="text-xl md:text-2xl text-foreground/80 mb-6">
                        A comprehensive, self-paced learning experience designed to transform you into a full-stack AI product developer
                    </p>
                    
                    <div className="flex justify-center flex-wrap gap-4 mb-6">
                        <div className="flex items-center gap-2">
                            <Clock className="w-5 h-5 text-cyan-400" />
                            <span>100+ hours of video content</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <BookOpen className="w-5 h-5 text-purple-400" />
                            <span>Auto-evaluated Assignments</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <Users className="w-5 h-5 text-green-400" />
                            <span>Weekly Mentorship</span>
                        </div>
                    </div>

                    <div className="flex justify-center gap-4">
                        <Button size="lg" className="bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600">
                            Enroll Now
                        </Button>
                        <Button variant="outline" size="lg">
                            Explore Curriculum
                        </Button>
                    </div>
                </motion.div>
            </div>
        </section>
    )
} 