"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { 
  ChevronDown, 
  ChevronRight, 
  Clock, 
  BookOpen, 
  Code, 
  Brain, 
  Lightbulb,
  Target,
  CheckCircle,
  Calendar,
  Users,
  Zap,
  Trophy,
  ArrowLeft,
  Home
} from "lucide-react"
import Link from "next/link"

const syllabusData = {
  title: "Product Development Using Agentic AI",
  duration: "111 Days",
  phases: [
    {
      id: 1,
      title: "No-Code AI Product Development",
      duration: "Weeks 1–3",
      color: "from-blue-500 to-cyan-500",
      icon: Brain,
      weeks: [
        {
          week: 1,
          title: "Introduction to Agentic AI & Prompting",
          topics: [
            "Understanding Agentic AI and its significance",
            "Exploring AI tools: Claude, ChatGPT, Midjourney, Tana",
            "Prompt Engineering fundamentals",
            "Creative product ideation with AI"
          ],
          learnings: [
            "Learn how to structure prompts to receive usable, context-aware AI output.",
            "Understand what differentiates Agentic AI from traditional models.",
            "Experiment with visual and text-based AI tools to ideate features.",
            "Lay the foundation for AI-integrated thinking in development."
          ],
          skills: ["Prompt Engineering", "Creative Ideation", "AI Reasoning", "Product Visioning"],
          tools: ["Claude", "ChatGPT", "Midjourney", "Tana"],
          takeaway: "Able to ideate product concepts and structure AI prompts to get usable insights and UI flows."
        },
        {
          week: 2,
          title: "Building with No-Code AI Tools",
          topics: [
            "Using Glide for UI-driven app creation",
            "Workflow logic with Zapier and Make",
            "Database structuring with Airtable",
            "Connecting no-code tools using Claude prompts"
          ],
          learnings: [
            "Automate app logic using drag-and-drop tools combined with AI.",
            "Build complete front-end + back-end workflows without coding.",
            "Generate mock data and test flows via AI tools.",
            "Bridge data, UI, and workflows seamlessly using prompt-driven integration."
          ],
          skills: ["Workflow Automation", "Data Mapping", "No-Code Logic", "AI Tool Chaining"],
          tools: ["Glide", "Zapier", "Airtable", "Make", "Claude"],
          takeaway: "Capable of building a fully functional MVP using no-code AI tools, without writing a single line of code."
        },
        {
          week: 3,
          title: "Final Demos + Product Thinking",
          topics: [
            "Creating user journeys and UI without code",
            "Storyboarding using AI and Midjourney",
            "Pitching and presenting MVPs",
            "UX evaluation and feedback implementation"
          ],
          learnings: [
            "Refine your no-code product based on real-time mentor feedback.",
            "Use AI to create slide decks and storytelling narratives.",
            "Master demo delivery using AI-generated scripts.",
            "Evaluate user experience flows and adapt accordingly."
          ],
          skills: ["Storytelling", "UX Design", "Product Pitching", "MVP Validation"],
          tools: ["Tana", "Midjourney", "ChatGPT"],
          takeaway: "Able to present and defend an AI product MVP with solid UX and business narrative."
        }
      ]
    },
    {
      id: 2,
      title: "MERN Stack + AI Integration",
      duration: "Weeks 4–16",
      color: "from-purple-500 to-pink-500",
      icon: Code,
      weeks: [
        {
          week: 4,
          title: "Getting Started with Web-Development Fundamentals",
          topics: [
            "Introduction to web development concepts",
            "Client-server architecture",
            "Using Git and GitHub for version control",
            "HTML/CSS scaffold using AI prompts"
          ],
          learnings: [
            "Understand the internet and how web applications communicate.",
            "Learn Git basics and push projects to GitHub.",
            "Set up development environments and browser dev tools.",
            "Use AI to bootstrap basic web layouts and page structures."
          ],
          skills: ["Web Foundations", "Client-Server Concepts", "Git Basics"],
          tools: ["HTML", "CSS", "Git", "GitHub", "Copilot"],
          takeaway: "Able to set up and commit code with Git, and understand how the web works at a structural level."
        },
        {
          week: 5,
          title: "HTML & CSS Project",
          topics: [
            "HTML structure and semantic tags",
            "CSS fundamentals and selectors",
            "Responsive design using Flexbox and Grid",
            "AI-assisted layout generation using Tailwind"
          ],
          learnings: [
            "Build modern responsive layouts using clean HTML/CSS.",
            "Use Tailwind to rapidly style UI with Claude assistance.",
            "Design mobile-first components and responsive containers.",
            "Translate visual wireframes into working layouts with AI."
          ],
          skills: ["Responsive Layouts", "Semantic HTML", "Modern UI Styling"],
          tools: ["HTML5", "CSS3", "Tailwind", "ChatGPT"],
          takeaway: "Able to create a professional, fully responsive landing page using AI-enhanced design flow."
        },
        {
          week: 6,
          title: "JavaScript Fundamentals",
          topics: [
            "JavaScript variables, functions, loops, arrays",
            "Data types and object manipulation",
            "ES6+ syntax and modular code",
            "Using AI to debug and generate JS code"
          ],
          learnings: [
            "Write core JavaScript logic from scratch.",
            "Understand how variables and functions interact in runtime.",
            "Use Copilot/Claude to refactor and scaffold logic.",
            "Practice creating simple applications and calculators."
          ],
          skills: ["Variables", "Loops", "Functions", "Conditionals"],
          tools: ["JavaScript (ES6+)", "Copilot", "Claude"],
          takeaway: "Able to write dynamic behavior into web pages and create interactive client-side logic."
        },
        {
          week: 7,
          title: "DOM Projects & Advanced JavaScript",
          topics: [
            "DOM access and manipulation",
            "Event handling and form interactivity",
            "Asynchronous programming and fetch",
            "AI-generated interactivity using JS"
          ],
          learnings: [
            "Create interactive web pages using DOM scripting.",
            "Use fetch API to retrieve external data sources.",
            "Use prompts to generate JS logic for event flows.",
            "Build dynamic single-page apps without frameworks."
          ],
          skills: ["DOM Manipulation", "Event Handling", "Async Programming"],
          tools: ["JavaScript", "ChatGPT", "Copilot"],
          takeaway: "Able to build dynamic single-page apps with real-time interactivity powered by AI guidance."
        },
        {
          week: 8,
          title: "React Fundamentals",
          topics: [
            "React fundamentals (JSX, components, props)",
            "Functional vs class-based components",
            "Intro to hooks: useState, useEffect",
            "Copilot for reusable component generation"
          ],
          learnings: [
            "Build component-driven UIs using React.",
            "Use Claude/Copilot to scaffold UI modules.",
            "Create and manage component lifecycle and states.",
            "Build reusable design systems with AI."
          ],
          skills: ["Component Design", "JSX", "Props & State"],
          tools: ["React", "Copilot", "CursorAI"],
          takeaway: "Able to create modern, reusable, interactive UIs using component-driven development."
        },
        {
          week: 9,
          title: "React State Management & Integration",
          topics: [
            "Advanced state management: Context API, Redux",
            "API integration using fetch/axios",
            "Prompt-based state architecture",
            "React form handling and validation"
          ],
          learnings: [
            "Manage app-wide state using Context and Redux.",
            "Fetch and render data from APIs in real-time.",
            "Use AI to auto-write boilerplate and logic for stores.",
            "Build production-grade components with validations."
          ],
          skills: ["Context API", "Redux", "API Integration", "React Hooks"],
          tools: ["React", "Redux", "ChatGPT", "Copilot"],
          takeaway: "Able to manage and share complex data across components and connect to real APIs using AI-optimized logic."
        },
        {
          week: 10,
          title: "React-based Project",
          topics: [
            "Planning a React project architecture",
            "Connecting backend with frontend",
            "Using GitHub and Copilot for collaboration",
            "Deploying frontend app on Vercel"
          ],
          learnings: [
            "Work on a real-world UI application end-to-end.",
            "Use agile flow and branch-based development.",
            "Use AI to optimize and review code before deployment.",
            "Understand CI/CD basics for frontend delivery."
          ],
          skills: ["Component Architecture", "UI Integration", "Project Structuring"],
          tools: ["React", "GitHub", "Copilot"],
          takeaway: "Able to create and deploy a real-world frontend application on Vercel with clean code and AI reviews."
        },
        {
          week: 11,
          title: "API Fundamentals",
          topics: [
            "REST API principles and design",
            "Understanding HTTP methods and status codes",
            "API testing using Postman",
            "Swagger documentation via ChatGPT"
          ],
          learnings: [
            "Design RESTful APIs and understand backend-to-frontend flow.",
            "Write endpoint handlers for CRUD operations.",
            "Test endpoints with Postman and use Claude for error debugging.",
            "Generate API docs that are human-readable and dev-ready."
          ],
          skills: ["REST API Design", "HTTP Methods", "API Testing"],
          tools: ["Postman", "Swagger", "ChatGPT"],
          takeaway: "Able to design, test, and document RESTful APIs that power the backend of full-stack apps."
        },
        {
          week: 12,
          title: "Node.js and Backend Integration",
          topics: [
            "Node.js fundamentals and Express intro",
            "File structuring and modular routing",
            "Auth using JWT and middleware",
            "Using AI to scaffold server logic"
          ],
          learnings: [
            "Create an Express-based backend with secure login flow.",
            "Modularize routes and services with best practices.",
            "Use AI to generate boilerplate for login/signup/reset.",
            "Handle tokens, cookies, and API protection strategies."
          ],
          skills: ["Backend Architecture", "Middleware", "Token Auth"],
          tools: ["Node.js", "Express", "JWT", "Copilot"],
          takeaway: "Able to build secure backend services with login, tokens, and route protection using AI."
        },
        {
          week: 13,
          title: "Express and Server-Side Routing",
          topics: [
            "Route protection and session management",
            "Controller/services model",
            "Input validation with Zod/Yup",
            "Express error handling with AI support"
          ],
          learnings: [
            "Build scalable backend logic with clean separation.",
            "Protect user sessions and sensitive routes.",
            "Validate incoming requests with schema-based validation.",
            "Use prompts to handle exceptions and generate safe error outputs."
          ],
          skills: ["Routing", "Controllers", "Auth Handling"],
          tools: ["Express.js", "Copilot", "Claude"],
          takeaway: "Able to develop modular server APIs and manage user sessions and logic flow seamlessly."
        },
        {
          week: 14,
          title: "MongoDB and Mongoose",
          topics: [
            "NoSQL database basics",
            "MongoDB CRUD operations",
            "Schema relationships using Mongoose",
            "Prompt-based schema and model generation"
          ],
          learnings: [
            "Design scalable data models and implement relations.",
            "Create nested schemas for e-commerce, blogs, etc.",
            "Use Claude to generate optimized aggregation queries.",
            "Connect backend and database seamlessly for data-driven apps."
          ],
          skills: ["Schema Design", "Data Modeling", "Aggregation"],
          tools: ["MongoDB", "Mongoose", "ChatGPT"],
          takeaway: "Able to architect and connect NoSQL databases using intelligent, AI-driven schema suggestions."
        },
        {
          week: 15,
          title: "Backend Project – Part 1",
          topics: [
            "Project architecture planning",
            "Backend service implementation",
            "API testing and security check",
            "Code reviews and mentor sync"
          ],
          learnings: [
            "Start real client project with backend focus.",
            "Deliver weekly demos and build milestone-based modules.",
            "Collaborate using Git + Copilot for clean code practices.",
            "Integrate AI into dev decisions and debugging."
          ],
          skills: ["Team Collaboration", "Agile Execution", "Milestone Planning"],
          tools: ["Full MERN Stack", "Git", "Claude"],
          takeaway: "Able to contribute meaningfully to real client backend projects with weekly stand-ups and sprints."
        },
        {
          week: 16,
          title: "Backend Project – Part 2",
          topics: [
            "Final integrations and deployments",
            "QA automation and testing prompts",
            "Live project demo presentation",
            "Post-project documentation and handoff"
          ],
          learnings: [
            "Complete and deploy a production-grade full-stack product.",
            "Use AI to generate deployment configs and scripts.",
            "Prepare resumes and project portfolios with Claude.",
            "Demonstrate team collaboration and technical maturity."
          ],
          skills: ["Feature Completion", "Deployment", "QA Automation"],
          tools: ["Vercel", "Render", "Claude", "GitHub"],
          takeaway: "Able to deploy production-ready apps and showcase client-approved projects with confidence."
        }
      ]
    }
  ]
}

export function DetailedSyllabusContent() {
  const [activePhase, setActivePhase] = useState(0)
  const [activeWeek, setActiveWeek] = useState(0)
  const [expandedWeeks, setExpandedWeeks] = useState<number[]>([])

  const toggleWeekExpansion = (weekIndex: number) => {
    setExpandedWeeks(prev => 
      prev.includes(weekIndex) 
        ? prev.filter(w => w !== weekIndex)
        : [...prev, weekIndex]
    )
  }

  return (
    <div className="pt-20 pb-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Navigation Breadcrumb */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="mb-8"
        >
          <div className="flex items-center gap-4 mb-6">
            <Link href="/courses">
              <Button variant="outline" size="sm" className="border-gray-600 text-gray-300 hover:bg-gray-700">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Courses
              </Button>
            </Link>
            <div className="flex items-center text-sm text-gray-400">
              <Link href="/" className="hover:text-gray-300 transition-colors">
                <Home className="w-4 h-4" />
              </Link>
              <ChevronRight className="w-4 h-4 mx-2" />
              <Link href="/courses" className="hover:text-gray-300 transition-colors">
                Courses
              </Link>
              <ChevronRight className="w-4 h-4 mx-2" />
              <span className="text-gray-300">Detailed Syllabus</span>
            </div>
          </div>
        </motion.div>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            {syllabusData.title}
          </h1>
          <div className="flex items-center justify-center gap-4 mb-8">
            <Badge className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-4 py-2 text-lg">
              <Clock className="w-5 h-5 mr-2" />
              {syllabusData.duration}
            </Badge>
            <Badge className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-2 text-lg">
              <BookOpen className="w-5 h-5 mr-2" />
              2 Phases
            </Badge>
          </div>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto">
            A comprehensive journey from no-code AI product development to full-stack MERN development with AI integration
          </p>
        </motion.div>

        {/* Phase Navigation */}
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Phase Selector */}
          <div className="lg:w-1/3">
            <div className="sticky top-24">
              <h3 className="text-2xl font-bold mb-6 text-center lg:text-left">Course Phases</h3>
              <div className="space-y-4">
                {syllabusData.phases.map((phase, index) => {
                  const Icon = phase.icon
                  return (
                    <motion.div
                      key={phase.id}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                    >
                      <Card 
                        className={`cursor-pointer transition-all duration-300 ${
                          activePhase === index 
                            ? 'bg-gradient-to-r ' + phase.color + ' border-transparent shadow-lg shadow-cyan-500/25' 
                            : 'bg-gray-800/50 border-gray-700 hover:border-gray-600'
                        }`}
                        onClick={() => setActivePhase(index)}
                      >
                        <CardContent className="p-6">
                          <div className="flex items-center">
                            <div className={`w-12 h-12 rounded-full flex items-center justify-center mr-4 ${
                              activePhase === index ? 'bg-white/20' : 'bg-gray-700'
                            }`}>
                              <Icon className="w-6 h-6" />
                            </div>
                            <div>
                              <h4 className="font-semibold text-lg">Phase {phase.id}</h4>
                              <p className="text-sm opacity-90">{phase.title}</p>
                              <p className="text-xs opacity-75">{phase.duration}</p>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </motion.div>
                  )
                })}
              </div>
            </div>
          </div>

          {/* Week Details */}
          <div className="lg:w-2/3">
            <AnimatePresence mode="wait">
              <motion.div
                key={activePhase}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
              >
                <div className="mb-8">
                  <h2 className="text-3xl font-bold mb-4">
                    Phase {syllabusData.phases[activePhase].id}: {syllabusData.phases[activePhase].title}
                  </h2>
                  <Badge className={`bg-gradient-to-r ${syllabusData.phases[activePhase].color} text-white px-3 py-1`}>
                    {syllabusData.phases[activePhase].duration}
                  </Badge>
                </div>

                <div className="space-y-6">
                  {syllabusData.phases[activePhase].weeks.map((week, weekIndex) => (
                    <motion.div
                      key={week.week}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: weekIndex * 0.1 }}
                    >
                      <Card className="bg-gray-800/50 border-gray-700 overflow-hidden">
                        <CardHeader 
                          className="cursor-pointer hover:bg-gray-700/50 transition-colors"
                          onClick={() => toggleWeekExpansion(weekIndex)}
                        >
                          <div className="flex items-center justify-between">
                            <div className="flex items-center">
                              <div className="w-10 h-10 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 flex items-center justify-center mr-4">
                                <span className="font-bold text-sm">{week.week}</span>
                              </div>
                              <div>
                                <CardTitle className="text-xl">{week.title}</CardTitle>
                                <p className="text-sm text-gray-400">Week {week.week}</p>
                              </div>
                            </div>
                            <ChevronDown 
                              className={`w-5 h-5 transition-transform duration-200 ${
                                expandedWeeks.includes(weekIndex) ? 'rotate-180' : ''
                              }`}
                            />
                          </div>
                        </CardHeader>

                        <AnimatePresence>
                          {expandedWeeks.includes(weekIndex) && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: 'auto', opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.3 }}
                            >
                              <CardContent className="pt-0">
                                <div className="grid md:grid-cols-2 gap-6">
                                  {/* Topics Covered */}
                                  <div>
                                    <h4 className="font-semibold text-lg mb-3 flex items-center">
                                      <BookOpen className="w-5 h-5 mr-2 text-cyan-400" />
                                      Topics Covered
                                    </h4>
                                    <ul className="space-y-2">
                                      {week.topics.map((topic, index) => (
                                        <li key={index} className="flex items-start">
                                          <ChevronRight className="w-4 h-4 text-cyan-400 mt-1 mr-2 flex-shrink-0" />
                                          <span className="text-sm text-gray-300">{topic}</span>
                                        </li>
                                      ))}
                                    </ul>
                                  </div>

                                  {/* What You Will Learn */}
                                  <div>
                                    <h4 className="font-semibold text-lg mb-3 flex items-center">
                                      <Lightbulb className="w-5 h-5 mr-2 text-yellow-400" />
                                      What You Will Learn
                                    </h4>
                                    <ul className="space-y-2">
                                      {week.learnings.map((learning, index) => (
                                        <li key={index} className="flex items-start">
                                          <CheckCircle className="w-4 h-4 text-green-400 mt-1 mr-2 flex-shrink-0" />
                                          <span className="text-sm text-gray-300">{learning}</span>
                                        </li>
                                      ))}
                                    </ul>
                                  </div>

                                  {/* Skills & Tools */}
                                  <div>
                                    <h4 className="font-semibold text-lg mb-3 flex items-center">
                                      <Target className="w-5 h-5 mr-2 text-purple-400" />
                                      Skills Learned
                                    </h4>
                                    <div className="flex flex-wrap gap-2">
                                      {week.skills.map((skill, index) => (
                                        <Badge key={index} variant="secondary" className="bg-purple-500/20 text-purple-300">
                                          {skill}
                                        </Badge>
                                      ))}
                                    </div>
                                  </div>

                                  <div>
                                    <h4 className="font-semibold text-lg mb-3 flex items-center">
                                      <Zap className="w-5 h-5 mr-2 text-orange-400" />
                                      Languages & Tools
                                    </h4>
                                    <div className="flex flex-wrap gap-2">
                                      {week.tools.map((tool, index) => (
                                        <Badge key={index} variant="outline" className="border-orange-400/50 text-orange-300">
                                          {tool}
                                        </Badge>
                                      ))}
                                    </div>
                                  </div>
                                </div>

                                {/* Takeaway */}
                                <div className="mt-6 p-4 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-lg border border-cyan-500/20">
                                  <h4 className="font-semibold text-lg mb-2 flex items-center text-cyan-400">
                                    <Trophy className="w-5 h-5 mr-2" />
                                    What You'll Be Capable Of
                                  </h4>
                                  <p className="text-gray-300">{week.takeaway}</p>
                                </div>
                              </CardContent>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </Card>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 text-center"
        >
          <Card className="bg-gradient-to-r from-cyan-500/10 to-purple-500/10 border-cyan-500/20 p-8">
            <CardContent>
              <h3 className="text-3xl font-bold mb-4">Ready to Start Your AI Journey?</h3>
              <p className="text-xl text-gray-300 mb-6">
                Join thousands of students who have transformed their careers with our comprehensive AI development program
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600">
                  <Users className="w-5 h-5 mr-2" />
                  Enroll Now
                </Button>
                <Button size="lg" variant="outline" className="border-cyan-500/50 text-cyan-400 hover:bg-cyan-500/10">
                  <Calendar className="w-5 h-5 mr-2" />
                  Schedule a Call
                </Button>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  )
} 