"use client"

import { motion } from "framer-motion"
import { CheckCircle2 } from "lucide-react"

export function WhatYouLearnSection() {
    const learningPoints = [
        "Master the fundamentals of AI-enhanced web development, starting with a comprehensive no-code AI exploration in the first three weeks.",
        "Learn full-stack web development using the MERN stack (MongoDB, Express, React, Node.js) with cutting-edge AI integration techniques.",
        "Develop proficiency in HTML, CSS, and JavaScript, building a strong foundation for modern web development.",
        "Gain hands-on experience with React, including state management, routing, and creating interactive user interfaces.",
        "Understand backend development with Node.js, Express, and MongoDB, learning to build robust server-side applications.",
        "Explore AI-driven development workflows, leveraging generative AI tools to enhance coding productivity and problem-solving.",
        "Create full-stack projects that demonstrate practical application of web development and AI technologies.",
        "Learn best practices in web development, including responsive design, API integration, and modern development workflows."
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
                        Dive deep into the world of Generative AI with a comprehensive, hands-on approach to building, deploying, and optimizing AI models.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-6">
                    {learningPoints.map((point, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            className="bg-card/50 p-6 rounded-xl border border-border/20 hover:border-primary/30 transition-all"
                        >
                            <div className="flex items-start gap-4 mb-2">
                                <CheckCircle2 className="w-6 h-6 text-cyan-400 flex-shrink-0 mt-1" />
                                <p className="text-lg font-medium">{point}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
} 