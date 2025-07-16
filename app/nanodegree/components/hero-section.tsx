"use client"

import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Clock, BookOpen, Users } from "lucide-react"

export function HeroSection() {
    return (
        <section className="relative py-16 md:py-24 px-4">
            <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 items-center">
                <motion.div 
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                    className="space-y-6"
                >
                    <Badge variant="secondary" className="text-sm">
                        Generative AI Nanodegree
                    </Badge>
                    <h1 className="text-4xl md:text-5xl font-bold leading-tight bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">
                        Complete Generative AI Course With Langchain and Huggingface
                    </h1>
                    <p className="text-xl text-foreground/80 mb-6">
                        Complete Guide to Building, Deploying, and Optimizing Generative AI with Langchain and Huggingface
                    </p>
                    
                    <div className="flex flex-wrap gap-4">
                        <div className="flex items-center gap-2">
                            <Clock className="w-5 h-5 text-cyan-400" />
                            <span>54 hours on-demand video</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <BookOpen className="w-5 h-5 text-purple-400" />
                            <span>2 articles</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <Users className="w-5 h-5 text-green-400" />
                            <span>77,326 learners</span>
                        </div>
                    </div>

                    <div className="flex gap-4">
                        <Button size="lg" className="bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600">
                            Enroll Now
                        </Button>
                        <Button variant="outline" size="lg">
                            Preview Course
                        </Button>
                    </div>
                </motion.div>

                <motion.div 
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                    className="hidden md:block"
                >
                    <div className="bg-gradient-to-br from-cyan-500/10 to-purple-500/10 rounded-xl p-6">
                        <img 
                            src="/images/ai-course-hero.png" 
                            alt="Generative AI Course" 
                            className="rounded-lg shadow-2xl transform hover:scale-105 transition-transform duration-300"
                        />
                    </div>
                </motion.div>
            </div>
        </section>
    )
} 