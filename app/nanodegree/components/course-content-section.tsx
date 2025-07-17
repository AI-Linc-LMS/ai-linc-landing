"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { ChevronDown, ChevronUp, PlayCircle } from "lucide-react"

export function CourseContentSection() {
    type CourseSection = {
        title: string;
        lectures: number;
        duration: string;
        subLectures?: {
            title: string;
            duration?: string;
        }[];
    }

    type CourseWeek = {
        title: string;
        sections: CourseSection[];
    }

    const [expandedSections, setExpandedSections] = useState<{ [key: string]: boolean }>({})
    const [expandedSubSections, setExpandedSubSections] = useState<{ [key: string]: boolean }>({})
    const [showAllWeeks, setShowAllWeeks] = useState(false)

    const courseContent: CourseWeek[] = [
        {
            title: "Week 1: AI-Enhanced MERN Stack Development",
            sections: [
                {
                    title: "Introduction to GPT and GenAI for Developers",
                    lectures: 5,
                    duration: "50 mins",
                    subLectures: [
                        {
                            title: "Generative AI for Developers",
                            duration: "10 mins"
                        },
                        {
                            title: "AI Tools for Development",
                            duration: "10 mins"
                        },
                        {
                            title: "AI Tools for Algorithmic and Development Tasks",
                            duration: "10 mins"
                        },
                        {
                            title: "Prompt Engineering for AI Tools",
                            duration: "10 mins"
                        },
                        {
                            title: "Prompt Engineering for more AI Tools",
                            duration: "10 mins"
                        }
                    ]
                },
                {
                    title: "Setting Up GenAI Workflow",
                    lectures: 4,
                    duration: "40 mins",
                    subLectures: [
                        {
                            title: "Setting up Cursor AI",
                            duration: "10 mins"
                        },
                        {
                            title: "Using chatGPT prompts in development",
                            duration: "10 mins"
                        },
                        {
                            title: "AI Tools as Prompt Partners in Development",
                            duration: "10 mins"
                        },
                        {
                            title: "Setting up Co-pilot",
                            duration: "10 mins"
                        }
                    ]
                },
                {
                    title: "AI-Driven Frontend Development",
                    lectures: 4,
                    duration: "40 mins",
                    subLectures: [
                        {
                            title: "Building Reusable UI Components with Cursor AI",
                            duration: "10 mins"
                        },
                        {
                            title: "Styling with tailwind css",
                            duration: "10 mins"
                        },
                        {
                            title: "Prompt react state mangement.",
                            duration: "10 mins"
                        },
                        {
                            title: "How to slove react error using AI",
                            duration: "10 mins"
                        }
                    ]
                }
            ]
        },
        {
            title: "Week 2: AI-Enhanced MERN Stack Development-2",
            sections: [
                {
                    title: "AI-Assisted Backend with Node + Express",
                    lectures: 5,
                    duration: "50 mins",
                    subLectures: [
                        {
                            title: "Building REST APIs with AI Prompts",
                            duration: "10 mins"
                        },
                        {
                            title: "Building more REST APIs with AI Prompts",
                            duration: "10 mins"
                        },
                        {
                            title: "Adding middleware and auth",
                            duration: "10 mins"
                        },
                        {
                            title: "Validation schema error handling",
                            duration: "10 mins"
                        },
                        {
                            title: "Debugging with node apis",
                            duration: "10 mins"
                        }
                    ]
                },
                {
                    title: "AI in Database Integration",
                    lectures: 3,
                    duration: "30 mins",
                    subLectures: [
                        {
                            title: "MongoDB schema desing",
                            duration: "10 mins"
                        },
                        {
                            title: "AI aided query building.",
                            duration: "10 mins"
                        },
                        {
                            title: "Seeding data with ai",
                            duration: "10 mins"
                        }
                    ]
                }
            ]
        },
        {
            title: "Week 3: AI-Enhanced MERN Stack Development-3",
            sections: [
                {
                    title: "Full MERN Project via Prompts",
                    lectures: 5,
                    duration: "50 mins",
                    subLectures: [
                        {
                            title: "Project overview todo app",
                            duration: "10 mins"
                        },
                        {
                            title: "Breaking down into prompts",
                            duration: "10 mins"
                        },
                        {
                            title: "End-to-end development using ai part 1",
                            duration: "10 mins"
                        },
                        {
                            title: "End-to-end development part 2",
                            duration: "10 mins"
                        },
                        {
                            title: "Code reviews and AI-prompts",
                            duration: "10 mins"
                        }
                    ]
                },
                {
                    title: "Best Practices & Limitations",
                    lectures: 4,
                    duration: "40 mins",
                    subLectures: [
                        {
                            title: "How to write effective prompts.",
                            duration: "10 mins"
                        },
                        {
                            title: "Limitations of AI in Development",
                            duration: "10 mins"
                        },
                        {
                            title: "How to verify ai generated code.",
                            duration: "10 mins"
                        },
                        {
                            title: "Balancing ai and humans.",
                            duration: "10 mins"
                        }
                    ]
                }
            ]
        },
        {
            title: "Week 4: Getting started with Web-development fundamentals",
            sections: [
                {
                    title: "Introduction to HTML",
                    lectures: 13,
                    duration: "130 mins",
                    subLectures: [
                        {
                            title: "Intro to web Devlopment.",
                            duration: "0 mins"
                        },
                        {
                            title: "Introduction to HTML",
                            duration: "10 mins"
                        },
                        {
                            title: "HTML tags",
                            duration: "10 mins"
                        },
                        {
                            title: "Formatting tags",
                            duration: "10 mins"
                        },
                        {
                            title: "Form input tags",
                            duration: "10 mins"
                        },
                        {
                            title: "iframe",
                            duration: "10 mins"
                        },
                        {
                            title: "Image tag",
                            duration: "10 mins"
                        },
                        {
                            title: "video tag",
                            duration: "10 mins"
                        },
                        {
                            title: "Audio tag",
                            duration: "10 mins"
                        },
                        {
                            title: "List tags",
                            duration: "10 mins"
                        },
                        {
                            title: "Table tag",
                            duration: "10 mins"
                        },
                        {
                            title: "Html semantic and non-semantic",
                            duration: "10 mins"
                        },
                        {
                            title: "Meta tags",
                            duration: "10 mins"
                        }
                    ]
                },
                {
                    title: "Intro to CSS",
                    lectures: 8,
                    duration: "80 mins",
                    subLectures: [
                        {
                            title: "What is CSS?",
                            duration: "10 mins"
                        },
                        {
                            title: "Syantax for css",
                            duration: "10 mins"
                        },
                        {
                            title: "Simple selector",
                            duration: "10 mins"
                        },
                        {
                            title: "Combined Selector",
                            duration: "10 mins"
                        },
                        {
                            title: "Combined Selector part:2",
                            duration: "10 mins"
                        },
                        {
                            title: "Pseudo class part 1",
                            duration: "10 mins"
                        },
                        {
                            title: "Pseudo class part 2",
                            duration: "10 mins"
                        },
                        {
                            title: "Attribute selector",
                            duration: "10 mins"
                        }
                    ]
                },
                {
                    title: "CSS Typography & Layout",
                    lectures: 8,
                    duration: "80 mins",
                    subLectures: [
                        {
                            title: "css fonts",
                            duration: "10 mins"
                        },
                        {
                            title: "Css units",
                            duration: "10 mins"
                        },
                        {
                            title: "Css colour",
                            duration: "10 mins"
                        },
                        {
                            title: "Css background-colour",
                            duration: "10 mins"
                        },
                        {
                            title: "Css table",
                            duration: "10 mins"
                        },
                        {
                            title: "Css icons",
                            duration: "10 mins"
                        },
                        {
                            title: "CSS Form",
                            duration: "10 mins"
                        },
                        {
                            title: "Css texts",
                            duration: "10 mins"
                        }
                    ]
                },
                {
                    title: "CSS Flexbox & Media",
                    lectures: 15,
                    duration: "150 mins",
                    subLectures: [
                        {
                            title: "Css Position",
                            duration: "10 mins"
                        },
                        {
                            title: "Css float",
                            duration: "10 mins"
                        },
                        {
                            title: "css display",
                            duration: "10 mins"
                        },
                        {
                            title: "Css Box-Model",
                            duration: "10 mins"
                        },
                        {
                            title: "Css Box-sizing",
                            duration: "10 mins"
                        },
                        {
                            title: "Css grid",
                            duration: "10 mins"
                        },
                        {
                            title: "Css grid part:2",
                            duration: "10 mins"
                        },
                        {
                            title: "Css navigation bar",
                            duration: "10 mins"
                        },
                        {
                            title: "CSS Dropdown",
                            duration: "10 mins"
                        },
                        {
                            title: "CSS Image Galery Spirties",
                            duration: "10 mins"
                        },
                        {
                            title: "Css image style and reflection",
                            duration: "10 mins"
                        },
                        {
                            title: "Css object",
                            duration: "10 mins"
                        },
                        {
                            title: "Css flexbox",
                            duration: "10 mins"
                        },
                        {
                            title: "Css flexbox with more detailing",
                            duration: "10 mins"
                        },
                        {
                            title: "CSS Gradient",
                            duration: "10 mins"
                        }
                    ]
                },
                {
                    title: "CSS Effects & UI Enhance",
                    lectures: 7,
                    duration: "70 mins",
                    subLectures: [
                        {
                            title: "CSS Transition",
                            duration: "10 mins"
                        },
                        {
                            title: "CSS Animation",
                            duration: "10 mins"
                        },
                        {
                            title: "CSS Transform",
                            duration: "10 mins"
                        },
                        {
                            title: "Css media query",
                            duration: "10 mins"
                        },
                        {
                            title: "CSS Pagination",
                            duration: "10 mins"
                        },
                        {
                            title: "CSS Variables",
                            duration: "10 mins"
                        },
                        {
                            title: "Css multi-column",
                            duration: "10 mins"
                        }
                    ]
                },
                {
                    title: "Bootstrap Essentials",
                    lectures: 11,
                    duration: "110 mins",
                    subLectures: [
                        {
                            title: "Intro To Bootstrap",
                            duration: "10 mins"
                        },
                        {
                            title: "Bootstrap Color",
                            duration: "10 mins"
                        },
                        {
                            title: "Bootstrap Container",
                            duration: "10 mins"
                        },
                        {
                            title: "Bootstrap column",
                            duration: "10 mins"
                        },
                        {
                            title: "Bootstrap dropdown",
                            duration: "10 mins"
                        },
                        {
                            title: "Bootstrap display -1",
                            duration: "10 mins"
                        },
                        {
                            title: "Bootstrap display - 2",
                            duration: "10 mins"
                        },
                        {
                            title: "Bootstrap button",
                            duration: "10 mins"
                        },
                        {
                            title: "Bootstrap spacing",
                            duration: "10 mins"
                        },
                        {
                            title: "bootstrap modal",
                            duration: "10 mins"
                        },
                        {
                            title: "Bootstrap Navbar",
                            duration: "10 mins"
                        }
                    ]
                },
                {
                    title: "Bootstrap UI & Components",
                    lectures: 7,
                    duration: "70 mins",
                    subLectures: [
                        {
                            title: "Bootstraps Image",
                            duration: "10 mins"
                        },
                        {
                            title: "Bootstrap spinner progress",
                            duration: "10 mins"
                        },
                        {
                            title: "Bootstrap Carousel",
                            duration: "10 mins"
                        },
                        {
                            title: "Bootstrap card",
                            duration: "10 mins"
                        },
                        {
                            title: "Bootstrap pagination",
                            duration: "10 mins"
                        },
                        {
                            title: "Bootstraps Tooltip Popover",
                            duration: "10 mins"
                        },
                        {
                            title: "Bootstrap scrollspy",
                            duration: "10 mins"
                        }
                    ]
                },
                {
                    title: "Mini Project -Insta Clone",
                    lectures: 3,
                    duration: "30 mins",
                    subLectures: [
                        {
                            title: "Insta Clone Part-1",
                            duration: "10 mins"
                        },
                        {
                            title: "Insta Clone Part 2",
                            duration: "10 mins"
                        },
                        {
                            title: "Insta Clone 3",
                            duration: "10 mins"
                        }
                    ]
                }
            ]
        },
        {
            title: "Week 5: HTML&CSS-Project",
            sections: [
                {
                    title: "HTML and CSS Project",
                    lectures: 5,
                    duration: "50 mins",
                    subLectures: [
                        {
                            title: "Creating a stunting website with html and css",
                            duration: "10 mins"
                        },
                        {
                            title: "Creating the hero section .",
                            duration: "10 mins"
                        },
                        {
                            title: "Creating about us and services section .",
                            duration: "10 mins"
                        },
                        {
                            title: "Creating the project section .",
                            duration: "10 mins"
                        },
                        {
                            title: "Creating the footer section",
                            duration: "10 mins"
                        }
                    ]
                }
            ]
        },
        {
            title: "Week 6: JavaScript Fundamentals",
            sections: [
                {
                    title: "Getting Started with JavaScript",
                    lectures: 6,
                    duration: "20 mins",
                    subLectures: [
                        {
                            title: "Introduction to JavaScript",
                            duration: "0 mins"
                        },
                        {
                            title: "Types (internal of JS)",
                            duration: "10 mins"
                        },
                        {
                            title: "Variables",
                            duration: "0 mins"
                        },
                        {
                            title: "var,let and const",
                            duration: "0 mins"
                        },
                        {
                            title: "Scope of Variables",
                            duration: "0 mins"
                        },
                        {
                            title: "Data Types",
                            duration: "10 mins"
                        }
                    ]
                },
                {
                    title: "Understanding JavaScript Internals",
                    lectures: 2,
                    duration: "20 mins",
                    subLectures: [
                        {
                            title: "Operators in JavaScript",
                            duration: "10 mins"
                        },
                        {
                            title: "Conditions",
                            duration: "10 mins"
                        }
                    ]
                },
                {
                    title: "Control Structures and Logic Building",
                    lectures: 6,
                    duration: "60 mins",
                    subLectures: [
                        {
                            title: "Loops part:1",
                            duration: "10 mins"
                        },
                        {
                            title: "Loops part 2:",
                            duration: "10 mins"
                        },
                        {
                            title: "Arrays",
                            duration: "10 mins"
                        },
                        {
                            title: "Objects in JavaScript",
                            duration: "10 mins"
                        },
                        {
                            title: "Functions",
                            duration: "10 mins"
                        },
                        {
                            title: "Paradigms of Programming",
                            duration: "10 mins"
                        }
                    ]
                },
                {
                    title: "Objects and OOP in JavaScript",
                    lectures: 3,
                    duration: "30 mins",
                    subLectures: [
                        {
                            title: "OOPs",
                            duration: "10 mins"
                        },
                        {
                            title: "Classes and Objects",
                            duration: "10 mins"
                        },
                        {
                            title: "Types of OOP Concepts",
                            duration: "10 mins"
                        }
                    ]
                }
            ]
        },
        {
            title: "Week 7: DOM Projects & Advanced JavaScript",
            sections: [
                {
                    title: "The World of the DOM",
                    lectures: 3,
                    duration: "30 mins",
                    subLectures: [
                        {
                            title: "Doms",
                            duration: "10 mins"
                        },
                        {
                            title: "Events",
                            duration: "10 mins"
                        },
                        {
                            title: "Adding styles in JavaScript",
                            duration: "10 mins"
                        }
                    ]
                },
                {
                    title: "Practical DOM Applications & Projects",
                    lectures: 4,
                    duration: "40 mins",
                    subLectures: [
                        {
                            title: "Form validation",
                            duration: "10 mins"
                        },
                        {
                            title: "CRUD part 1",
                            duration: "10 mins"
                        },
                        {
                            title: "CRUD part 2",
                            duration: "10 mins"
                        },
                        {
                            title: "CRUD part 3",
                            duration: "10 mins"
                        }
                    ]
                },
                {
                    title: "Advanced JavaScript Concepts",
                    lectures: 10,
                    duration: "100 mins",
                    subLectures: [
                        {
                            title: "Hoisting",
                            duration: "10 mins"
                        },
                        {
                            title: "Higher Order Functions",
                            duration: "10 mins"
                        },
                        {
                            title: "Array (Advanced)",
                            duration: "10 mins"
                        },
                        {
                            title: "Spread and Rest Operator",
                            duration: "10 mins"
                        },
                        {
                            title: "Destructuring",
                            duration: "10 mins"
                        },
                        {
                            title: "Closure",
                            duration: "10 mins"
                        },
                        {
                            title: "Asynchronous JS",
                            duration: "10 mins"
                        },
                        {
                            title: "Promise",
                            duration: "10 mins"
                        },
                        {
                            title: "Async await",
                            duration: "10 mins"
                        },
                        {
                            title: "Fetch",
                            duration: "10 mins"
                        }
                    ]
                }
            ]
        },
        {
            title: "Week 8: React Fundamentals",
            sections: [
                {
                    title: "Introduction to React and JSX",
                    lectures: 5,
                    duration: "60 mins",
                    subLectures: [
                        {
                            title: "Introduction to react",
                            duration: "10 mins"
                        },
                        {
                            title: "Virtual Dom",
                            duration: "10 mins"
                        },
                        {
                            title: "JSX",
                            duration: "10 mins"
                        },
                        {
                            title: "Components",
                            duration: "10 mins"
                        },
                        {
                            title: "Styling in react",
                            duration: "10 mins"
                        },
                        {
                            title: "Props in react",
                            duration: "10 mins"
                        }
                    ]
                },
                {
                    title: "Events and Forms",
                    lectures: 3,
                    duration: "30 mins",
                    subLectures: [
                        {
                            title: "Event Handling in react",
                            duration: "10 mins"
                        },
                        {
                            title: "State in react",
                            duration: "10 mins"
                        },
                        {
                            title: "Maps",
                            duration: "10 mins"
                        }
                    ]
                },
                {
                    title: "Core React Hooks",
                    lectures: 3,
                    duration: "30 mins",
                    subLectures: [
                        {
                            title: "React Hooks",
                            duration: "10 mins"
                        },
                        {
                            title: "useReducer Hook",
                            duration: "10 mins"
                        },
                        {
                            title: "This Keyword",
                            duration: "10 mins"
                        }
                    ]
                }
            ]
        },
        {
            title: "Week 9: React State Management and Integration",
            sections: [
                {
                    title: "Advanced State Management",
                    lectures: 8,
                    duration: "80 mins",
                    subLectures: [
                        {
                            title: "Context Api",
                            duration: "10 mins"
                        },
                        {
                            title: "React Router",
                            duration: "10 mins"
                        },
                        {
                            title: "React Forms",
                            duration: "10 mins"
                        },
                        {
                            title: "React Redux - I",
                            duration: "10 mins"
                        },
                        {
                            title: "React Redux - II",
                            duration: "10 mins"
                        },
                        {
                            title: "Api Integration - I",
                            duration: "10 mins"
                        },
                        {
                            title: "Api Integration - II",
                            duration: "10 mins"
                        },
                        {
                            title: "Hoisting",
                            duration: "10 mins"
                        }
                    ]
                },
                {
                    title: "Routing and API Integration",
                    lectures: 4,
                    duration: "40 mins",
                    subLectures: [
                        {
                            title: "CRUD Baisc Operations",
                            duration: "10 mins"
                        },
                        {
                            title: "CRUD Context Api",
                            duration: "10 mins"
                        },
                        {
                            title: "CRUD Redux",
                            duration: "10 mins"
                        },
                        {
                            title: "CRUD Form Validation",
                            duration: "10 mins"
                        }
                    ]
                }
            ]
        },
        {
            title: "Week 10: React-based project",
            sections: [
                {
                    title: "React JS Project",
                    lectures: 11,
                    duration: "110 mins",
                    subLectures: [
                        {
                            title: "Introduction.",
                            duration: "10 mins"
                        },
                        {
                            title: "Creating nav bar",
                            duration: "10 mins"
                        },
                        {
                            title: "Creating hero section.",
                            duration: "10 mins"
                        },
                        {
                            title: "Creating about section.",
                            duration: "10 mins"
                        },
                        {
                            title: "We will be creating slider .",
                            duration: "10 mins"
                        },
                        {
                            title: "We will create a modal",
                            duration: "10 mins"
                        },
                        {
                            title: "Creating FAQ section.",
                            duration: "10 mins"
                        },
                        {
                            title: "Footer section",
                            duration: "10 mins"
                        },
                        {
                            title: "Setting up for rest of the pages.",
                            duration: "10 mins"
                        },
                        {
                            title: "Pricing pages",
                            duration: "10 mins"
                        },
                        {
                            title: "Contact page",
                            duration: "10 mins"
                        }
                    ]
                }
            ]
        },
        {
            title: "Week 11: API Fundamentals",
            sections: [
                {
                    title: "Introduction to APIs",
                    lectures: 6,
                    duration: "60 mins",
                    subLectures: [
                        {
                            title: "Introduction to Api",
                            duration: "10 mins"
                        },
                        {
                            title: "Basic Setup",
                            duration: "10 mins"
                        },
                        {
                            title: "GET",
                            duration: "10 mins"
                        },
                        {
                            title: "POST",
                            duration: "10 mins"
                        },
                        {
                            title: "PATCH",
                            duration: "10 mins"
                        },
                        {
                            title: "DELETE",
                            duration: "10 mins"
                        }
                    ]
                }
            ]
        },
        {
            title: "Week 12: Node.js and Backend Integration",
            sections: [
                {
                    title: "Introduction to Node.js",
                    lectures: 4,
                    duration: "40 mins",
                    subLectures: [
                        {
                            title: "Introduction to Node js",
                            duration: "10 mins"
                        },
                        {
                            title: "History of Nodejs",
                            duration: "10 mins"
                        },
                        {
                            title: "Client Server Model",
                            duration: "10 mins"
                        },
                        {
                            title: "Node js Fundamentals",
                            duration: "10 mins"
                        }
                    ]
                },
                {
                    title: "Working with Core Node Modules",
                    lectures: 12,
                    duration: "120 mins",
                    subLectures: [
                        {
                            title: "Modules",
                            duration: "10 mins"
                        },
                        {
                            title: "Core Modules",
                            duration: "10 mins"
                        },
                        {
                            title: "Fs Module",
                            duration: "10 mins"
                        },
                        {
                            title: "Os Module",
                            duration: "10 mins"
                        },
                        {
                            title: "Path Module",
                            duration: "10 mins"
                        },
                        {
                            title: "NPM",
                            duration: "10 mins"
                        },
                        {
                            title: "URL Module",
                            duration: "10 mins"
                        },
                        {
                            title: "Event Module",
                            duration: "10 mins"
                        },
                        {
                            title: "Streams",
                            duration: "10 mins"
                        },
                        {
                            title: "Json",
                            duration: "10 mins"
                        },
                        {
                            title: "HTTP Module",
                            duration: "10 mins"
                        },
                        {
                            title: "Api",
                            duration: "10 mins"
                        }
                    ]
                }
            ]
        },
        {
            title: "Week 13: Express and Server-Side Routing",
            sections: [
                {
                    title: "Getting Started with Express",
                    lectures: 3,
                    duration: "30 mins",
                    subLectures: [
                        {
                            title: "Introduction To Express",
                            duration: "10 mins"
                        },
                        {
                            title: "Creating a Server",
                            duration: "10 mins"
                        },
                        {
                            title: "Sending Response",
                            duration: "10 mins"
                        }
                    ]
                },
                {
                    title: "Building with Express",
                    lectures: 4,
                    duration: "40 mins",
                    subLectures: [
                        {
                            title: "Rendering HTML",
                            duration: "10 mins"
                        },
                        {
                            title: "EJS Template Engine",
                            duration: "10 mins"
                        },
                        {
                            title: "Middlewares",
                            duration: "10 mins"
                        },
                        {
                            title: "Express Routing",
                            duration: "10 mins"
                        }
                    ]
                }
            ]
        },
        {
            title: "Week 14: MongoDB and Mongoose",
            sections: [
                {
                    title: "Introduction and Setup",
                    lectures: 3,
                    duration: "30 mins",
                    subLectures: [
                        {
                            title: "Database introduction",
                            duration: "10 mins"
                        },
                        {
                            title: "Mongo DB Introduction",
                            duration: "10 mins"
                        },
                        {
                            title: "Installations",
                            duration: "10 mins"
                        }
                    ]
                },
                {
                    title: "Working with MongoDB",
                    lectures: 8,
                    duration: "80 mins",
                    subLectures: [
                        {
                            title: "Commands (Theoretical)",
                            duration: "10 mins"
                        },
                        {
                            title: "Commands (Practical)",
                            duration: "10 mins"
                        },
                        {
                            title: "Mongoose Introduction",
                            duration: "10 mins"
                        },
                        {
                            title: "Schema and Model",
                            duration: "10 mins"
                        },
                        {
                            title: "Create Document",
                            duration: "10 mins"
                        },
                        {
                            title: "Read Document",
                            duration: "10 mins"
                        },
                        {
                            title: "Update Document",
                            duration: "10 mins"
                        },
                        {
                            title: "Delete Document",
                            duration: "10 mins"
                        }
                    ]
                },
                {
                    title: "Advanced MongoDB with Mongoose",
                    lectures: 2,
                    duration: "20 mins",
                    subLectures: [
                        {
                            title: "Validation",
                            duration: "10 mins"
                        },
                        {
                            title: "Schema and Model",
                            duration: "10 mins"
                        }
                    ]
                }
            ]
        },
        {
            title: "Week 15: Backend Project - Part 1",
            sections: [
                {
                    title: "Project Initialization and Routing",
                    lectures: 4,
                    duration: "40 mins",
                    subLectures: [
                        {
                            title: "Project Introduction",
                            duration: "10 mins"
                        },
                        {
                            title: "Project Set up",
                            duration: "10 mins"
                        },
                        {
                            title: "Backend Routing Setup",
                            duration: "10 mins"
                        },
                        {
                            title: "CRUD Operations in Database",
                            duration: "10 mins"
                        }
                    ]
                },
                {
                    title: "Connecting Frontend and Backend",
                    lectures: 4,
                    duration: "40 mins",
                    subLectures: [
                        {
                            title: "Frontend Setup and Getting Record from Backend",
                            duration: "10 mins"
                        },
                        {
                            title: "Post Record using Frontend",
                            duration: "10 mins"
                        },
                        {
                            title: "Delete Record using Frontend",
                            duration: "10 mins"
                        },
                        {
                            title: "Update Record using Frontend",
                            duration: "10 mins"
                        }
                    ]
                },
                {
                    title: "Component and Context Setup",
                    lectures: 4,
                    duration: "40 mins",
                    subLectures: [
                        {
                            title: "Components Setup and their Routing",
                            duration: "10 mins"
                        },
                        {
                            title: "Context API Setup",
                            duration: "10 mins"
                        },
                        {
                            title: "Creating Data using Context API",
                            duration: "10 mins"
                        },
                        {
                            title: "Delete and Update Data using Context",
                            duration: "10 mins"
                        }
                    ]
                }
            ]
        },
        {
            title: "Week 16: Backend Project - Part 2",
            sections: [
                {
                    title: "Styling and Authentication",
                    lectures: 10,
                    duration: "100 mins",
                    subLectures: [
                        {
                            title: "Styling the Website",
                            duration: "10 mins"
                        },
                        {
                            title: "Adding Authentication Part-1",
                            duration: "10 mins"
                        },
                        {
                            title: "Adding Authentication Part-2",
                            duration: "10 mins"
                        },
                        {
                            title: "Adding Authentication Part-3",
                            duration: "10 mins"
                        },
                        {
                            title: "Adding Authentication Part-4",
                            duration: "10 mins"
                        },
                        {
                            title: "Adding Authentication part- 5",
                            duration: "10 mins"
                        },
                        {
                            title: "Adding Authentication part- 6",
                            duration: "10 mins"
                        },
                        {
                            title: "Adding Authentication part- 7",
                            duration: "10 mins"
                        },
                        {
                            title: "Adding Authentication part- 8",
                            duration: "10 mins"
                        },
                        {
                            title: "Adding Authentication part- 9",
                            duration: "10 mins"
                        }
                    ]
                },
                {
                    title: "User Authorization and Final Touches",
                    lectures: 5,
                    duration: "50 mins",
                    subLectures: [
                        {
                            title: "Adding Conditional Rendering",
                            duration: "10 mins"
                        },
                        {
                            title: "Adding Authentication while Routing Components",
                            duration: "10 mins"
                        },
                        {
                            title: "Adding Middleware",
                            duration: "10 mins"
                        },
                        {
                            title: "Passing user token",
                            duration: "10 mins"
                        },
                        {
                            title: "Filter Records using UserId",
                            duration: "10 mins"
                        }
                    ]
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

    const toggleSubSection = (sectionTitle: string) => {
        setExpandedSubSections(prev => ({
            ...prev,
            [sectionTitle]: !prev[sectionTitle]
        }))
    }

    // Calculate total lectures and duration
    const totalLectures = courseContent.reduce((total: number, week: CourseWeek) =>
        total + week.sections.reduce((weekTotal: number, section: CourseSection) => weekTotal + section.lectures, 0), 0)
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
                        {courseContent.length} 
                        weeks • {totalLectures}
                         lectures • 
                         {/* {totalDuration} total length */}
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
                                            <div 
                                                onClick={() => section.subLectures && toggleSubSection(section.title)}
                                                className="flex justify-between items-center cursor-pointer hover:bg-accent/10 rounded-lg p-2"
                                            >
                                                <div>
                                                    <h4 className="text-md font-medium text-foreground/90">{section.title}</h4>
                                                    <p className="text-sm text-foreground/70">
                                                        {section.lectures} lectures • {section.duration}
                                                    </p>
                                                </div>
                                                {section.subLectures && (
                                                    expandedSubSections[section.title] ? (
                                                        <ChevronUp className="w-6 h-6 text-foreground/70" />
                                                    ) : (
                                                        <ChevronDown className="w-6 h-6 text-foreground/70" />
                                                    )
                                                )}
                                            </div>
                                            {section.subLectures && expandedSubSections[section.title] && (
                                                <div className="mt-4 space-y-2 pl-6">
                                                    {section.subLectures.map((subLecture, subIndex) => (
                                                        <div 
                                                            key={subLecture.title} 
                                                            className="border-l-2 border-cyan-400 pl-4 py-2"
                                                        >
                                                            <p className="text-sm text-foreground/80">{subLecture.title}</p>
                                                            {subLecture.duration && (
                                                                <p className="text-xs text-foreground/60">{subLecture.duration}</p>
                                                            )}
                                                        </div>
                                                    ))}
                                                </div>
                                            )}
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