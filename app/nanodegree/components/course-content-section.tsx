"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { ChevronDown, ChevronUp, PlayCircle } from "lucide-react"

export function CourseContentSection() {
    type CourseSection = {
        title: string;
        lectures: number;
        duration: string;
    }

    type CourseWeek = {
        title: string;
        sections: CourseSection[];
    }

    const [expandedSections, setExpandedSections] = useState<{[key: string]: boolean}>({})
    const [showAllWeeks, setShowAllWeeks] = useState(false)

    const courseContent: CourseWeek[] = [
        {
            title: "Week 1: AI-Enhanced MERN Stack Development",
            sections: [
                { 
                    title: "Introduction to GPT and GenAI for Developers", 
                    lectures: 5,
                    duration: "TBD"
                },
                { 
                    title: "Setting Up GenAI Workflow", 
                    lectures: 4,
                    duration: "TBD"
                },
                { 
                    title: "AI-Driven Frontend Development", 
                    lectures: 4,
                    duration: "TBD"
                }
            ]
        },
        {
            title: "Week 2: AI-Enhanced MERN Stack Development-2",
            sections: [
                { 
                    title: "AI-Assisted Backend with Node + Express", 
                    lectures: 5,
                    duration: "TBD"
                },
                { 
                    title: "AI in Database Integration", 
                    lectures: 3,
                    duration: "TBD"
                }
            ]
        },
        {
            title: "Week 3: AI-Enhanced MERN Stack Development-3",
            sections: [
                { 
                    title: "Full MERN Project via Prompts", 
                    lectures: 5,
                    duration: "TBD"
                },
                { 
                    title: "Best Practices & Limitations", 
                    lectures: 4,
                    duration: "TBD"
                }
            ]
        },
        {
            title: "Week 4: Getting started with Web-development fundamentals",
            sections: [
                { 
                    title: "Introduction to HTML", 
                    lectures: 13,
                    duration: "TBD"
                },
                { 
                    title: "Intro to CSS", 
                    lectures: 10,
                    duration: "TBD"
                },
                { 
                    title: "CSS Typography & Layout", 
                    lectures: 11,
                    duration: "TBD"
                },
                { 
                    title: "CSS Flexbox & Media", 
                    lectures: 8,
                    duration: "TBD"
                },
                { 
                    title: "CSS Effects & UI Enhance", 
                    lectures: 9,
                    duration: "TBD"
                },
                { 
                    title: "Bootstrap Essentials", 
                    lectures: 11,
                    duration: "TBD"
                },
                { 
                    title: "Bootstrap UI & Components", 
                    lectures: 7,
                    duration: "TBD"
                },
                { 
                    title: "Mini Project -Insta Clone", 
                    lectures: 3,
                    duration: "TBD"
                }
            ]
        },
        {
            title: "Week 5: HTML&CSS-Project",
            sections: [
                { 
                    title: "HTML and CSS Project", 
                    lectures: 5,
                    duration: "TBD"
                }
            ]
        },
        {
            title: "Week 6: JavaScript Fundamentals",
            sections: [
                { 
                    title: "Getting Started with JavaScript", 
                    lectures: 6,
                    duration: "TBD"
                },
                { 
                    title: "Understanding JavaScript Internals", 
                    lectures: 2,
                    duration: "TBD"
                },
                { 
                    title: "Control Structures and Logic Building", 
                    lectures: 6,
                    duration: "TBD"
                },
                { 
                    title: "Objects and OOP in JavaScript", 
                    lectures: 3,
                    duration: "TBD"
                }
            ]
        },
        {
            title: "Week 7: DOM Projects & Advanced JavaScript",
            sections: [
                { 
                    title: "The World of the DOM", 
                    lectures: 3,
                    duration: "TBD"
                },
                { 
                    title: "Practical DOM Applications & Projects", 
                    lectures: 4,
                    duration: "TBD"
                },
                { 
                    title: "Advanced JavaScript Concepts", 
                    lectures: 10,
                    duration: "TBD"
                }
            ]
        },
        {
            title: "Week 8: React Fundamentals",
            sections: [
                { 
                    title: "Introduction to React and JSX", 
                    lectures: 5,
                    duration: "TBD"
                },
                { 
                    title: "Events and Forms", 
                    lectures: 4,
                    duration: "TBD"
                },
                { 
                    title: "Unnamed Section", 
                    lectures: 6,
                    duration: "TBD"
                }
            ]
        },
        {
            title: "Week 9: React State Management and Integration",
            sections: [
                { 
                    title: "Advanced State Management", 
                    lectures: 7,
                    duration: "TBD"
                },
                { 
                    title: "Routing and API Integration", 
                    lectures: 3,
                    duration: "TBD"
                }
            ]
        },
        {
            title: "Week 10: React-based project",
            sections: [
                { 
                    title: "React JS Project", 
                    lectures: 10,
                    duration: "TBD"
                }
            ]
        },
        {
            title: "Week 11: API Fundamentals",
            sections: [
                { 
                    title: "Introduction to APIs", 
                    lectures: 6,
                    duration: "TBD"
                }
            ]
        },
        {
            title: "Week 12: Node.js and Backend Integration",
            sections: [
                { 
                    title: "Introduction to Node.js", 
                    lectures: 7,
                    duration: "TBD"
                },
                { 
                    title: "Working with Core Node Modules", 
                    lectures: 6,
                    duration: "TBD"
                }
            ]
        },
        {
            title: "Week 13: Express and Server-Side Routing",
            sections: [
                { 
                    title: "Getting Started with Express", 
                    lectures: 3,
                    duration: "TBD"
                },
                { 
                    title: "Building with Express", 
                    lectures: 4,
                    duration: "TBD"
                }
            ]
        },
        {
            title: "Week 14: MongoDB and Mongoose",
            sections: [
                { 
                    title: "Introduction and Setup", 
                    lectures: 3,
                    duration: "TBD"
                },
                { 
                    title: "Working with MongoDB", 
                    lectures: 4,
                    duration: "TBD"
                },
                { 
                    title: "Advanced MongoDB with Mongoose", 
                    lectures: 5,
                    duration: "TBD"
                }
            ]
        },
        {
            title: "Week 15: Backend Project - Part 1",
            sections: [
                { 
                    title: "Project Initialization and Routing", 
                    lectures: 4,
                    duration: "TBD"
                },
                { 
                    title: "Connecting Frontend and Backend", 
                    lectures: 4,
                    duration: "TBD"
                },
                { 
                    title: "Component and Context Setup", 
                    lectures: 4,
                    duration: "TBD"
                }
            ]
        },
        {
            title: "Week 16: Backend Project - Part 2",
            sections: [
                { 
                    title: "Styling and Authentication", 
                    lectures: 6,
                    duration: "TBD"
                },
                { 
                    title: "User Authorization and Final Touches", 
                    lectures: 5,
                    duration: "TBD"
                }
            ]
        }
    ]

    const toggleSection = (title: string) => {
        setExpandedSections(prev => ({
            ...prev,
            [title]: !prev[title]
        }))
    }

    // Calculate total lectures and duration
    const totalLectures = courseContent.reduce((total, week) => 
        total + week.sections.reduce((weekTotal, section) => weekTotal + section.lectures, 0), 0)
    const totalDuration = "TBD" // You might want to calculate this dynamically

    // Determine which weeks to display
    const displayedWeeks = showAllWeeks ? courseContent : courseContent.slice(0, 8)

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
                        {courseContent.length} weeks • {totalLectures} lectures • {totalDuration} total length
                    </p>
                </motion.div>

                <div className="space-y-4">
                    {displayedWeeks.map((week, weekIndex) => (
                        <motion.div 
                            key={week.title}
                            initial={{ opacity: 0, x: weekIndex % 2 === 0 ? -50 : 50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: weekIndex * 0.1 }}
                            className="bg-card/50 rounded-xl border border-border/20 hover:border-primary/30 transition-all"
                        >
                            <div 
                                onClick={() => toggleSection(week.title)}
                                className="flex justify-between items-center p-6 cursor-pointer hover:bg-accent/10 rounded-xl"
                            >
                                <div className="flex items-center gap-4">
                                    <PlayCircle className="w-6 h-6 text-cyan-400 flex-shrink-0" />
                                    <div>
                                        <h3 className="text-lg font-semibold">{week.title}</h3>
                                        <p className="text-sm text-foreground/70">
                                            {week.sections.length} sections • {week.sections.reduce((total, section) => total + section.lectures, 0)} lectures
                                        </p>
                                    </div>
                                </div>
                                {expandedSections[week.title] ? (
                                    <ChevronUp className="w-6 h-6 text-foreground/70" />
                                ) : (
                                    <ChevronDown className="w-6 h-6 text-foreground/70" />
                                )}
                            </div>
                            {expandedSections[week.title] && (
                                <div className="p-6 pt-0">
                                    {week.sections.map((section, sectionIndex) => (
                                        <div 
                                            key={section.title} 
                                            className="border-t border-border/20 py-4 last:border-b"
                                        >
                                            <div className="flex justify-between items-center">
                                                <div>
                                                    <h4 className="text-md font-medium text-foreground/90">{section.title}</h4>
                                                    <p className="text-sm text-foreground/70">
                                                        {section.lectures} lectures • {section.duration}
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </motion.div>
                    ))}
                </div>

                <div className="text-center mt-8">
                    {!showAllWeeks && courseContent.length > 8 && (
                        <button 
                            onClick={() => setShowAllWeeks(true)}
                            className="px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors mr-4"
                        >
                            See More Weeks
                        </button>
                    )}
                    {showAllWeeks && (
                        <button 
                            onClick={() => {
                                setShowAllWeeks(false)
                                // Reset any expanded sections when collapsing
                                setExpandedSections({})
                            }}
                            className="px-6 py-3 bg-secondary text-secondary-foreground rounded-lg hover:bg-secondary/90 transition-colors"
                        >
                            See Less
                        </button>
                    )}
                </div>
            </div>
        </section>
    )
} 