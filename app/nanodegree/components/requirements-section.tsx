"use client"

import { motion } from "framer-motion"
import { BookOpen, Code, Brain, Terminal } from "lucide-react"

export function RequirementsSection() {
    const requirements = [
        {
            icon: BookOpen,
            title: "Python Proficiency",
            description: "Familiarity with Python programming language, including basic syntax, data structures, and functions."
        },
        {
            icon: Brain,
            title: "Machine Learning Basics",
            description: "Basic understanding of machine learning concepts, including supervised and unsupervised learning, and fundamental AI principles."
        },
        {
            icon: Code,
            title: "Deep Learning Knowledge",
            description: "Basic knowledge of deep learning concepts and frameworks (e.g., TensorFlow or PyTorch) is advantageous but not strictly required."
        },
        {
            icon: Terminal,
            title: "Command Line Skills",
            description: "Ability to navigate and execute commands in a command line interface (CLI) or terminal."
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
                        Course Requirements
                    </h2>
                    <p className="text-xl text-foreground/80 max-w-3xl mx-auto">
                        Prepare for your Generative AI journey with these recommended prerequisites
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