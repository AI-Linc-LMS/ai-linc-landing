"use client"

import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { ParticleBackground } from "@/components/particle-background"
import { ThemeProvider } from "@/components/theme-provider"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Separator } from "@/components/ui/separator"
import { CheckCircle, XCircle, Trophy, Target, BookOpen, Users, Clock, Award, ArrowRight, Star, Zap, Code, Brain, Rocket } from "lucide-react"

export default function CoursesPage() {
  return (
    <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
      <main className="relative min-h-screen bg-gradient-to-b from-[#0A1128] to-[#1A202C] text-white overflow-hidden">
        <ParticleBackground />
        <Navbar />
        
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 px-4">
          <div className="max-w-6xl mx-auto text-center">
            <div className="flex items-center justify-center mb-6">
              <Trophy className="w-8 h-8 text-yellow-400 mr-3" />
              <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                Programs at AI Linc
              </h1>
            </div>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Your Journey from Aspiration to AI Career Starts Here
            </p>
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-cyan-400 to-purple-500 hover:from-cyan-500 hover:to-purple-600 text-white font-semibold px-8 py-3 rounded-full"
            >
              Start Your Journey
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </div>
        </section>

        {/* Step 1: Free Assessment */}
        <section className="py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <Badge variant="outline" className="text-cyan-400 border-cyan-400 mb-4">
                <CheckCircle className="w-4 h-4 mr-2" />
                Step 1
              </Badge>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">Take the Free Assessment</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Begin with a short, smart test designed to assess your aptitude, reasoning, and tech readiness.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { icon: Target, title: "Aptitude + Reasoning Evaluation", desc: "Comprehensive skill assessment" },
                { icon: BookOpen, title: "Placement Readiness Report", desc: "Detailed analysis of your readiness" },
                { icon: Users, title: "LinkedIn Profile Review", desc: "Professional profile optimization" },
                { icon: Award, title: "AI Linc Certificate", desc: "Certificate of Participation (₹49 only)" }
              ].map((item, index) => (
                <Card key={index} className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 border-gray-700 hover:border-cyan-400/50 transition-all duration-300">
                  <CardHeader className="text-center">
                    <item.icon className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
                    <CardTitle className="text-lg">{item.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-300 text-center">{item.desc}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="text-center mt-12">
              <p className="text-lg text-gray-300 mb-6">
                <span className="text-green-400 font-semibold">No hidden fees. No commitment. Just clarity.</span>
              </p>
              <Button size="lg" className="bg-gradient-to-r from-green-400 to-blue-500 hover:from-green-500 hover:to-blue-600">
                Take Free Assessment
              </Button>
            </div>
          </div>
        </section>

        {/* Step 2: What Happens After */}
        <section className="py-20 px-4 bg-gradient-to-r from-gray-900/30 to-gray-800/30">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <Badge variant="outline" className="text-purple-400 border-purple-400 mb-4">
                <Target className="w-4 h-4 mr-2" />
                Step 2
              </Badge>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">What Happens After the Assessment?</h2>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {/* High Score Path */}
              <Card className="bg-gradient-to-br from-green-800/30 to-green-900/30 border-green-400/30">
                <CardHeader>
                  <div className="flex items-center mb-4">
                    <Trophy className="w-8 h-8 text-yellow-400 mr-3" />
                    <CardTitle className="text-2xl text-green-400">If You Score High</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  {[
                    "You're added to our Hiring Pool",
                    "Our Placement Team contacts you",
                    "Direct interviews are scheduled with hiring partners"
                  ].map((item, index) => (
                    <div key={index} className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </CardContent>
              </Card>

              {/* Need Improvement Path */}
              <Card className="bg-gradient-to-br from-orange-800/30 to-orange-900/30 border-orange-400/30">
                <CardHeader>
                  <div className="flex items-center mb-4">
                    <Zap className="w-8 h-8 text-orange-400 mr-3" />
                    <CardTitle className="text-2xl text-orange-400">If You Don't Qualify Yet</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  {[
                    "Our Counseling Team reaches out",
                    "You receive a Personalized Skill Gap Report",
                    "You're guided to one of our career-ready programs below"
                  ].map((item, index) => (
                    <div key={index} className="flex items-center">
                      <ArrowRight className="w-5 h-5 text-orange-400 mr-3 flex-shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Programs Section */}
        <section className="py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                <Rocket className="inline w-12 h-12 text-cyan-400 mr-4" />
                Two Powerful Programs to Fill the Gap
              </h2>
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
              {/* Nanodegree Program */}
              <Card className="bg-gradient-to-br from-green-800/20 to-green-900/20 border-green-400/30 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-green-400 to-green-600"></div>
                <CardHeader>
                  <div className="flex items-center justify-between mb-4">
                    <Badge className="bg-green-400 text-green-900">🟢 NANODEGREE</Badge>
                    <Badge variant="outline" className="text-green-400 border-green-400">50 Seats Only</Badge>
                  </div>
                  <CardTitle className="text-2xl">AI Linc Nanodegree Program</CardTitle>
                  <CardDescription className="text-lg">
                    Your structured, self-paced pathway into AI & full-stack product development
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-3">
                    {[
                      "100+ hours of video content on AI, MERN, and more",
                      "Auto-evaluated quizzes and coding assignments",
                      "21-Day No-Code AI Product Builder",
                      "90-Day Real-Client Work Experience",
                      "Career reports, weekly mentorship, and lifetime platform access"
                    ].map((feature, index) => (
                      <div key={index} className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-green-400 mr-3 mt-0.5 flex-shrink-0" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <Separator className="bg-gray-700" />
                  
                  <div className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-lg font-semibold">Price:</span>
                      <span className="text-2xl font-bold text-green-400">₹4,999</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>Booking Amount:</span>
                      <span className="text-lg text-green-400">₹499 (fully refundable within 7 days)</span>
                    </div>
                  </div>
                  
                  <Button className="w-full bg-green-600 hover:bg-green-700">
                    Choose Nanodegree
                  </Button>
                </CardContent>
              </Card>

              {/* Flagship Program */}
              <Card className="bg-gradient-to-br from-yellow-800/20 to-yellow-900/20 border-yellow-400/30 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-yellow-400 to-yellow-600"></div>
                <CardHeader>
                  <div className="flex items-center justify-between mb-4">
                    <Badge className="bg-yellow-400 text-yellow-900">🟡 FLAGSHIP</Badge>
                    <Badge variant="outline" className="text-yellow-400 border-yellow-400">30 Seats Only</Badge>
                  </div>
                  <CardTitle className="text-2xl">AI Linc Flagship Career Launchpad</CardTitle>
                  <CardDescription className="text-lg">
                    A premium, outcome-driven program designed to get you placed — fast
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-3">
                    <p className="text-sm text-yellow-400 font-semibold">Includes everything in Nanodegree, plus:</p>
                    {[
                      "Live sessions by professionals from MAANG",
                      "Resume branding + AI-powered portfolio support",
                      "Direct referrals to our hiring partners",
                      "Technical + behavioral mock interviews",
                      "Personal mentorship from product managers"
                    ].map((feature, index) => (
                      <div key={index} className="flex items-start">
                        <Star className="w-5 h-5 text-yellow-400 mr-3 mt-0.5 flex-shrink-0" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <Separator className="bg-gray-700" />
                  
                  <div className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-lg font-semibold">Price:</span>
                      <span className="text-2xl font-bold text-yellow-400">Up to 100% Scholarship</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>Booking Amount:</span>
                      <span className="text-lg text-yellow-400">₹999 (fully refundable within 7 days)</span>
                    </div>
                    <p className="text-sm text-gray-400">(based on your assessment)</p>
                  </div>
                  
                  <Button className="w-full bg-yellow-600 hover:bg-yellow-700">
                    Choose Flagship
                  </Button>
                </CardContent>
              </Card>
            </div>

            {/* How to Choose */}
            <div className="mt-16 text-center">
              <h3 className="text-3xl font-bold mb-8">🤔 How to Choose?</h3>
              <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                <Card className="bg-gradient-to-br from-green-800/20 to-green-900/20 border-green-400/30">
                  <CardContent className="p-6 text-center">
                    <CheckCircle className="w-8 h-8 text-green-400 mx-auto mb-4" />
                    <p><strong>Choose Nanodegree</strong> if you want a self-paced, structured learning journey with real-world exposure.</p>
                  </CardContent>
                </Card>
                <Card className="bg-gradient-to-br from-yellow-800/20 to-yellow-900/20 border-yellow-400/30">
                  <CardContent className="p-6 text-center">
                    <Trophy className="w-8 h-8 text-yellow-400 mx-auto mb-4" />
                    <p><strong>Choose Flagship</strong> if you're close to job readiness and want branding, referrals, and intensive mentoring.</p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Comparison Table */}
        <section className="py-20 px-4 bg-gradient-to-r from-gray-900/30 to-gray-800/30">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12">🧾 Quick Comparison Table</h2>
            
            <div className="overflow-x-auto">
              <table className="w-full border-collapse border border-gray-700 rounded-lg overflow-hidden">
                <thead>
                  <tr className="bg-gradient-to-r from-cyan-900/50 to-purple-900/50">
                    <th className="border border-gray-700 p-4 text-left font-semibold">Feature</th>
                    <th className="border border-gray-700 p-4 text-center font-semibold text-green-400">Nanodegree</th>
                    <th className="border border-gray-700 p-4 text-center font-semibold text-yellow-400">Flagship</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { feature: "Full Platform Access", nano: true, flagship: true },
                    { feature: "Auto-Graded Assignments", nano: true, flagship: true },
                    { feature: "21-Day No-Code Builder", nano: true, flagship: true },
                    { feature: "90-Day Work Experience", nano: "Led by tech pro", flagship: "Led by MAANG PM" },
                    { feature: "Weekly Mentorship", nano: "1/week", flagship: "Multiple/week" },
                    { feature: "Resume Review", nano: false, flagship: true },
                    { feature: "Portfolio Support", nano: false, flagship: true },
                    { feature: "Direct Referrals", nano: false, flagship: true },
                    { feature: "MAANG Live Sessions", nano: false, flagship: true },
                    { feature: "Mock Interviews", nano: false, flagship: true }
                  ].map((row, index) => (
                    <tr key={index} className={index % 2 === 0 ? "bg-gray-800/30" : "bg-gray-900/30"}>
                      <td className="border border-gray-700 p-4 font-medium">{row.feature}</td>
                      <td className="border border-gray-700 p-4 text-center">
                        {typeof row.nano === 'boolean' ? (
                          row.nano ? <CheckCircle className="w-5 h-5 text-green-400 mx-auto" /> : <XCircle className="w-5 h-5 text-red-400 mx-auto" />
                        ) : (
                          <span className="text-green-400">{row.nano}</span>
                        )}
                      </td>
                      <td className="border border-gray-700 p-4 text-center">
                        {typeof row.flagship === 'boolean' ? (
                          row.flagship ? <CheckCircle className="w-5 h-5 text-yellow-400 mx-auto" /> : <XCircle className="w-5 h-5 text-red-400 mx-auto" />
                        ) : (
                          <span className="text-yellow-400">{row.flagship}</span>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              💡 Start Now — Your Future Begins with a Free Assessment
            </h2>
            <div className="space-y-4 mb-8">
              <div className="flex items-center justify-center">
                <Badge variant="outline" className="text-cyan-400 border-cyan-400 mr-2">Step 1</Badge>
                <span>Attend our next webinar</span>
              </div>
              <div className="flex items-center justify-center">
                <Badge variant="outline" className="text-purple-400 border-purple-400 mr-2">Step 2</Badge>
                <span>Appear for the assessment</span>
              </div>
              <div className="flex items-center justify-center">
                <Badge variant="outline" className="text-green-400 border-green-400 mr-2">Step 3</Badge>
                <span>Let us guide your next step based on your score</span>
              </div>
            </div>
            <div className="space-x-4">
              <Button size="lg" className="bg-gradient-to-r from-cyan-400 to-purple-500 hover:from-cyan-500 hover:to-purple-600">
                Register for Webinar
              </Button>
              <Button size="lg" variant="outline" className="border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white">
                Take Assessment Now
              </Button>
            </div>
          </div>
        </section>

        {/* Detailed Syllabus */}
        <section className="py-20 px-4 bg-gradient-to-r from-gray-900/30 to-gray-800/30">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                <BookOpen className="inline w-12 h-12 text-cyan-400 mr-4" />
                Course Syllabus: Product Development Using Agentic AI
              </h2>
              <div className="flex items-center justify-center space-x-8 text-lg">
                <div className="flex items-center">
                  <Clock className="w-5 h-5 text-cyan-400 mr-2" />
                  <span>Duration: 111 Days</span>
                </div>
                <div className="flex items-center">
                  <Brain className="w-5 h-5 text-purple-400 mr-2" />
                  <span>Phase 1: No-Code AI (Weeks 1–3)</span>
                </div>
                <div className="flex items-center">
                  <Code className="w-5 h-5 text-green-400 mr-2" />
                  <span>Phase 2: MERN + AI (Weeks 4–16)</span>
                </div>
              </div>
            </div>

            <Tabs defaultValue="phase1" className="w-full">
              <TabsList className="grid w-full grid-cols-2 mb-8">
                <TabsTrigger value="phase1" className="text-lg">Phase 1: No-Code AI (Weeks 1-3)</TabsTrigger>
                <TabsTrigger value="phase2" className="text-lg">Phase 2: MERN Stack + AI (Weeks 4-16)</TabsTrigger>
              </TabsList>

              <TabsContent value="phase1">
                <Accordion type="single" collapsible className="w-full space-y-4">
                  {[
                    {
                      week: "Week 1",
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
                      skills: "Prompt Engineering, Creative Ideation, AI Reasoning, Product Visioning",
                      tools: "Claude, ChatGPT, Midjourney, Tana",
                      takeaway: "Able to ideate product concepts and structure AI prompts to get usable insights and UI flows."
                    },
                    {
                      week: "Week 2",
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
                      skills: "Workflow Automation, Data Mapping, No-Code Logic, AI Tool Chaining",
                      tools: "Glide, Zapier, Airtable, Make, Claude",
                      takeaway: "Capable of building a fully functional MVP using no-code AI tools, without writing a single line of code."
                    },
                    {
                      week: "Week 3",
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
                      skills: "Storytelling, UX Design, Product Pitching, MVP Validation",
                      tools: "Tana, Midjourney, ChatGPT",
                      takeaway: "Able to present and defend an AI product MVP with solid UX and business narrative."
                    }
                  ].map((week, index) => (
                    <AccordionItem key={index} value={`week${index + 1}`} className="border border-gray-700 rounded-lg">
                      <AccordionTrigger className="px-6 py-4 hover:bg-gray-800/50">
                        <div className="flex items-center">
                          <Badge className="bg-purple-600 text-white mr-4">{week.week}</Badge>
                          <span className="text-xl font-semibold">{week.title}</span>
                        </div>
                      </AccordionTrigger>
                      <AccordionContent className="px-6 pb-6">
                        <div className="grid md:grid-cols-2 gap-6">
                          <div>
                            <h4 className="font-semibold text-cyan-400 mb-3">Topics Covered:</h4>
                            <ul className="space-y-2 mb-6">
                              {week.topics.map((topic, i) => (
                                <li key={i} className="flex items-start">
                                  <ArrowRight className="w-4 h-4 text-cyan-400 mr-2 mt-0.5 flex-shrink-0" />
                                  <span className="text-sm">{topic}</span>
                                </li>
                              ))}
                            </ul>
                            
                            <h4 className="font-semibold text-green-400 mb-3">What You Will Learn:</h4>
                            <ul className="space-y-2">
                              {week.learnings.map((learning, i) => (
                                <li key={i} className="flex items-start">
                                  <CheckCircle className="w-4 h-4 text-green-400 mr-2 mt-0.5 flex-shrink-0" />
                                  <span className="text-sm">{learning}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                          
                          <div>
                            <h4 className="font-semibold text-yellow-400 mb-3">Skills Learned:</h4>
                            <p className="text-sm mb-4 text-yellow-200">{week.skills}</p>
                            
                            <h4 className="font-semibold text-purple-400 mb-3">Languages & Tools:</h4>
                            <p className="text-sm mb-4 text-purple-200">{week.tools}</p>
                            
                            <h4 className="font-semibold text-orange-400 mb-3">What You'll Be Capable Of:</h4>
                            <p className="text-sm text-orange-200">{week.takeaway}</p>
                          </div>
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </TabsContent>

              <TabsContent value="phase2">
                <Accordion type="single" collapsible className="w-full space-y-4">
                  {[
                    {
                      week: "Week 4",
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
                      skills: "Web Foundations, Client-Server Concepts, Git Basics",
                      tools: "HTML, CSS, Git, GitHub, Copilot",
                      takeaway: "Able to set up and commit code with Git, and understand how the web works at a structural level."
                    },
                    {
                      week: "Week 5",
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
                      skills: "Responsive Layouts, Semantic HTML, Modern UI Styling",
                      tools: "HTML5, CSS3, Tailwind, ChatGPT",
                      takeaway: "Able to create a professional, fully responsive landing page using AI-enhanced design flow."
                    },
                    {
                      week: "Week 6",
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
                      skills: "Variables, Loops, Functions, Conditionals",
                      tools: "JavaScript (ES6+), Copilot, Claude",
                      takeaway: "Able to write dynamic behavior into web pages and create interactive client-side logic."
                    },
                    {
                      week: "Week 7",
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
                      skills: "DOM Manipulation, Event Handling, Async Programming",
                      tools: "JavaScript, ChatGPT, Copilot",
                      takeaway: "Able to build dynamic single-page apps with real-time interactivity powered by AI guidance."
                    },
                    {
                      week: "Week 8",
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
                      skills: "Component Design, JSX, Props & State",
                      tools: "React, Copilot, CursorAI",
                      takeaway: "Able to create modern, reusable, interactive UIs using component-driven development."
                    },
                    {
                      week: "Week 9",
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
                      skills: "Context API, Redux, API Integration, React Hooks",
                      tools: "React, Redux, ChatGPT, Copilot",
                      takeaway: "Able to manage and share complex data across components and connect to real APIs using AI-optimized logic."
                    },
                    {
                      week: "Week 10",
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
                      skills: "Component Architecture, UI Integration, Project Structuring",
                      tools: "React, GitHub, Copilot",
                      takeaway: "Able to create and deploy a real-world frontend application on Vercel with clean code and AI reviews."
                    },
                    {
                      week: "Week 11",
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
                      skills: "REST API Design, HTTP Methods, API Testing",
                      tools: "Postman, Swagger, ChatGPT",
                      takeaway: "Able to design, test, and document RESTful APIs that power the backend of full-stack apps."
                    },
                    {
                      week: "Week 12",
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
                      skills: "Backend Architecture, Middleware, Token Auth",
                      tools: "Node.js, Express, JWT, Copilot",
                      takeaway: "Able to build secure backend services with login, tokens, and route protection using AI."
                    },
                    {
                      week: "Week 13",
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
                      skills: "Routing, Controllers, Auth Handling",
                      tools: "Express.js, Copilot, Claude",
                      takeaway: "Able to develop modular server APIs and manage user sessions and logic flow seamlessly."
                    },
                    {
                      week: "Week 14",
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
                      skills: "Schema Design, Data Modeling, Aggregation",
                      tools: "MongoDB, Mongoose, ChatGPT",
                      takeaway: "Able to architect and connect NoSQL databases using intelligent, AI-driven schema suggestions."
                    },
                    {
                      week: "Week 15",
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
                      skills: "Team Collaboration, Agile Execution, Milestone Planning",
                      tools: "Full MERN Stack, Git, Claude",
                      takeaway: "Able to contribute meaningfully to real client backend projects with weekly stand-ups and sprints."
                    },
                    {
                      week: "Week 16",
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
                      skills: "Feature Completion, Deployment, QA Automation",
                      tools: "Vercel, Render, Claude, GitHub",
                      takeaway: "Able to deploy production-ready apps and showcase client-approved projects with confidence."
                    }
                  ].map((week, index) => (
                    <AccordionItem key={index} value={`week${index + 4}`} className="border border-gray-700 rounded-lg">
                      <AccordionTrigger className="px-6 py-4 hover:bg-gray-800/50">
                        <div className="flex items-center">
                          <Badge className="bg-green-600 text-white mr-4">{week.week}</Badge>
                          <span className="text-xl font-semibold">{week.title}</span>
                        </div>
                      </AccordionTrigger>
                      <AccordionContent className="px-6 pb-6">
                        <div className="grid md:grid-cols-2 gap-6">
                          <div>
                            <h4 className="font-semibold text-cyan-400 mb-3">Topics Covered:</h4>
                            <ul className="space-y-2 mb-6">
                              {week.topics.map((topic, i) => (
                                <li key={i} className="flex items-start">
                                  <ArrowRight className="w-4 h-4 text-cyan-400 mr-2 mt-0.5 flex-shrink-0" />
                                  <span className="text-sm">{topic}</span>
                                </li>
                              ))}
                            </ul>
                            
                            <h4 className="font-semibold text-green-400 mb-3">What You Will Learn:</h4>
                            <ul className="space-y-2">
                              {week.learnings.map((learning, i) => (
                                <li key={i} className="flex items-start">
                                  <CheckCircle className="w-4 h-4 text-green-400 mr-2 mt-0.5 flex-shrink-0" />
                                  <span className="text-sm">{learning}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                          
                          <div>
                            <h4 className="font-semibold text-yellow-400 mb-3">Skills Learned:</h4>
                            <p className="text-sm mb-4 text-yellow-200">{week.skills}</p>
                            
                            <h4 className="font-semibold text-purple-400 mb-3">Languages & Tools:</h4>
                            <p className="text-sm mb-4 text-purple-200">{week.tools}</p>
                            
                            <h4 className="font-semibold text-orange-400 mb-3">What You'll Be Capable Of:</h4>
                            <p className="text-sm text-orange-200">{week.takeaway}</p>
                          </div>
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </TabsContent>
            </Tabs>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-8">
              Ready to Transform Your Career?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join thousands of students who have already started their AI journey with us.
            </p>
            <div className="space-x-4">
              <Button size="lg" className="bg-gradient-to-r from-cyan-400 to-purple-500 hover:from-cyan-500 hover:to-purple-600">
                Start Free Assessment
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button size="lg" variant="outline" className="border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white">
                Download Syllabus
              </Button>
            </div>
          </div>
        </section>

        <Footer />
      </main>
    </ThemeProvider>
  )
} 