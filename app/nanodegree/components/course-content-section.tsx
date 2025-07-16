"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { ChevronDown, ChevronUp, PlayCircle } from "lucide-react"

export function CourseContentSection() {
    const [expandedSections, setExpandedSections] = useState<{[key: string]: boolean}>({})

    const courseContent = [
        {
            title: "Introduction",
            lectures: 9,
            duration: "1hr 39min",
            expanded: false
        },
        {
            title: "Python Control Flow",
            lectures: 2,
            duration: "49min",
            expanded: false
        },
        {
            title: "Data Structures Using Python",
            lectures: 4,
            duration: "1hr 48min",
            expanded: false
        },
        {
            title: "Functions In Python",
            lectures: 5,
            duration: "1hr 22min",
            expanded: false
        },
        {
            title: "Importing, Creating Modules And Packages",
            lectures: 2,
            duration: "35min",
            expanded: false
        },
        {
            title: "File Handling In Python",
            lectures: 2,
            duration: "26min",
            expanded: false
        },
        {
            title: "Exception Handling",
            lectures: 1,
            duration: "25min",
            expanded: false
        },
        {
            title: "OOPS Classes And Objects",
            lectures: 7,
            duration: "1hr 49min",
            expanded: false
        },
        {
            title: "Streamlit With Python",
            lectures: 2,
            duration: "26min",
            expanded: false
        },
        {
            title: "Machine Learning For NLP (Prerequisites)",
            lectures: 26,
            duration: "4hr 48min",
            expanded: false
        },
        {
            title: "Deep Learning For NLP (Prerequisites)",
            lectures: 2,
            duration: "39min",
            expanded: false
        },
        {
            title: "Simple RNN Indepth Intuition",
            lectures: 3,
            duration: "1hr 21min",
            expanded: false
        }
    ]

    const toggleSection = (title: string) => {
        setExpandedSections(prev => ({
            ...prev,
            [title]: !prev[title]
        }))
    }

    return (
        <section className="py-16 md:py-20 px-4">
            <div className="max-w-6xl mx-auto">
                <motion.div 
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-12"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">
                        Course Content
                    </h2>
                    <p className="text-xl text-foreground/80 max-w-3xl mx-auto">
                        49 sections • 207 lectures • 54h 6m total length
                    </p>
                </motion.div>

                <div className="space-y-4">
                    {courseContent.map((section, index) => (
                        <motion.div 
                            key={section.title}
                            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            className="bg-card/50 rounded-xl border border-border/20 hover:border-primary/30 transition-all"
                        >
                            <div 
                                onClick={() => toggleSection(section.title)}
                                className="flex justify-between items-center p-6 cursor-pointer hover:bg-accent/10 rounded-xl"
                            >
                                <div className="flex items-center gap-4">
                                    <PlayCircle className="w-6 h-6 text-cyan-400 flex-shrink-0" />
                                    <div>
                                        <h3 className="text-lg font-semibold">{section.title}</h3>
                                        <p className="text-sm text-foreground/70">
                                            {section.lectures} lectures • {section.duration}
                                        </p>
                                    </div>
                                </div>
                                {expandedSections[section.title] ? (
                                    <ChevronUp className="w-6 h-6 text-foreground/70" />
                                ) : (
                                    <ChevronDown className="w-6 h-6 text-foreground/70" />
                                )}
                            </div>
                            {expandedSections[section.title] && (
                                <div className="p-6 pt-0 text-foreground/80">
                                    <p>Detailed content for {section.title} will be added here.</p>
                                </div>
                            )}
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
} 