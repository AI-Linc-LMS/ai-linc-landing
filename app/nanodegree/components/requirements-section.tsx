"use client"

import { motion } from "framer-motion"
import { BookOpen, Code, Brain, Terminal } from "lucide-react"

export function RequirementsSection() {
    const requirements = [
        {
            icon: BookOpen,
            title: "AI Fundamentals",
            description: "Comprehensive understanding of AI principles, machine learning algorithms, and generative AI technologies."
        },
        {
            icon: Brain,
            title: "Practical AI Applications",
            description: "Hands-on experience in developing real-world AI solutions across various domains like healthcare, finance, and technology."
        },
        {
            icon: Code,
            title: "Advanced Generative AI",
            description: "In-depth knowledge of large language models, prompt engineering, and cutting-edge generative AI techniques."
        },
        {
            icon: Terminal,
            title: "Industry-Ready Skills",
            description: "Professional-grade skills in AI development, model deployment, and ethical AI implementation."
        }
    ]

    return (
        <section className="py-16 md:py-20 px-4 bg-background/50">
            <div className="max-w-6xl mx-auto">
                <motion.div 
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-12"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">
                        What You'll Learn
                    </h2>
                    <p className="text-xl text-foreground/80 max-w-3xl mx-auto">
                        Transform your career with our comprehensive AI Professional Nanodegree Program, designed to turn you into an AI expert
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-6">
                    {requirements.map((req, index) => (
                        <motion.div 
                            key={req.title}
                            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            className="bg-card/50 p-6 rounded-xl border border-border/20 hover:border-primary/30 transition-all"
                        >
                            <div className="flex items-start gap-4 mb-2">
                                <req.icon className="w-8 h-8 text-cyan-400 flex-shrink-0 mt-1" />
                                <div>
                                    <h3 className="text-xl font-semibold mb-2">{req.title}</h3>
                                    <p className="text-foreground/80">{req.description}</p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
} 