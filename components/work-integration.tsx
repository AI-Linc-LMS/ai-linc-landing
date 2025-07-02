"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  CheckCircle,
  Code,
  FileText,
  Users,
  MessageSquare,
  GitBranch,
  GitPullRequest,
  Briefcase,
  Award,
} from "lucide-react"

export function WorkIntegration() {
  const [activeTab, setActiveTab] = useState("project1")

  const projects = [
    {
      id: "project1",
      name: "AI Content Platform",
      type: "SaaS Development",
      skills: ["Prompt Engineering", "API Integration", "UI/UX Design"],
      progress: 85,
      tasks: [
        { id: 1, name: "Design System Implementation", status: "completed" },
        { id: 2, name: "API Integration with OpenAI", status: "completed" },
        { id: 3, name: "User Authentication Flow", status: "in-progress" },
        { id: 4, name: "Content Generation Module", status: "in-progress" },
        { id: 5, name: "Analytics Dashboard", status: "planned" },
      ],
    },
    {
      id: "project2",
      name: "Predictive Analytics Tool",
      type: "Enterprise Solution",
      skills: ["Data Visualization", "ML Integration", "Business Intelligence"],
      progress: 62,
      tasks: [
        { id: 1, name: "Data Pipeline Setup", status: "completed" },
        { id: 2, name: "AI Agentic Implementation", status: "completed" },
        { id: 3, name: "Dashboard Development", status: "in-progress" },
        { id: 4, name: "User Testing & Feedback", status: "planned" },
        { id: 5, name: "Documentation & Training", status: "planned" },
      ],
    },
    {
      id: "project3",
      name: "AI Customer Service Bot",
      type: "Conversational AI",
      skills: ["NLP", "Conversation Design", "Integration Testing"],
      progress: 40,
      tasks: [
        { id: 1, name: "Conversation Flow Design", status: "completed" },
        { id: 2, name: "No code development with ai ", status: "in-progress" },
        { id: 3, name: "Integration with CRM", status: "in-progress" },
        { id: 4, name: "User Testing & Refinement", status: "planned" },
        { id: 5, name: "Deployment & Monitoring", status: "planned" },
      ],
    },
  ]

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  }

  return (
    <section id="work-integration" className="py-16 sm:py-20 relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-white to-[#0BC5EA] bg-clip-text text-transparent">
            Real-World Work Integration
          </h2>
          <p className="text-xl text-foreground/80 max-w-2xl mx-auto">
            Apply your skills on actual projects with industry partners while receiving expert guidance
          </p>
        </motion.div>

        <Tabs defaultValue={activeTab} onValueChange={setActiveTab} className="w-full">
          <div className="flex flex-col md:flex-row gap-8">
            <div className="md:w-1/3">
              <TabsList className="flex flex-col h-auto bg-transparent space-y-2">
                {projects.map((project) => (
                  <TabsTrigger
                    key={project.id}
                    value={project.id}
                    className="w-full justify-start text-left p-4 h-auto border border-transparent data-[state=active]:border-[#0BC5EA]/50 data-[state=active]:bg-card/50 data-[state=active]:backdrop-blur-sm"
                  >
                    <div className="flex flex-col items-start">
                      <Badge variant="outline" className="mb-1 bg-[#0BC5EA]/10 text-[#0BC5EA] border-[#0BC5EA]/30">
                        {project.type}
                      </Badge>
                      <div className="font-semibold text-base">{project.name}</div>
                      <div className="mt-2 w-full bg-background/50 h-1.5 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-gradient-to-r from-[#0BC5EA] to-[#6B46C1]"
                          style={{ width: `${project.progress}%` }}
                        />
                      </div>
                      <div className="text-xs text-foreground/60 mt-1">{project.progress}% Complete</div>
                    </div>
                  </TabsTrigger>
                ))}
              </TabsList>
            </div>

            <div className="md:w-2/3">
              {projects.map((project) => (
                <TabsContent key={project.id} value={project.id} className="mt-0">
                  <Card className="bg-card/30 backdrop-blur-sm border-[#0BC5EA]/20 overflow-hidden">
                    <CardContent className="p-6">
                      <div className="grid md:grid-cols-2 gap-8">
                        <div>
                          <div className="flex items-center mb-6">
                            <div className="size-12 rounded-full bg-[#0BC5EA]/10 flex items-center justify-center mr-4">
                              <Code className="size-6 text-[#0BC5EA]" />
                            </div>
                            <div>
                              <Badge
                                variant="outline"
                                className="bg-[#0BC5EA]/10 text-[#0BC5EA] border-[#0BC5EA]/30 mb-1"
                              >
                                {project.type}
                              </Badge>
                              <h3 className="text-2xl font-bold text-white">{project.name}</h3>
                            </div>
                          </div>

                          <div className="mb-6">
                            <div className="text-sm font-medium text-foreground/60 mb-2">Applied Skills</div>
                            <div className="flex flex-wrap gap-2">
                              {project.skills.map((skill, index) => (
                                <Badge key={index} variant="secondary" className="bg-[#6B46C1]/20 text-white">
                                  {skill}
                                </Badge>
                              ))}
                            </div>
                          </div>

                          <div>
                            <div className="text-sm font-medium text-foreground/60 mb-2">Project Tasks</div>
                            <div className="space-y-2">
                              {project.tasks.map((task) => (
                                <div key={task.id} className="flex items-center bg-background/30 p-2 rounded-lg">
                                  <div
                                    className={`size-5 rounded-full flex items-center justify-center mr-3 ${
                                      task.status === "completed"
                                        ? "bg-[#0BC5EA]/20 text-[#0BC5EA]"
                                        : task.status === "in-progress"
                                          ? "bg-[#6B46C1]/20 text-[#6B46C1]"
                                          : "bg-foreground/20 text-foreground/60"
                                    }`}
                                  >
                                    {task.status === "completed" ? (
                                      <CheckCircle className="size-3.5" />
                                    ) : task.status === "in-progress" ? (
                                      <motion.div
                                        className="size-2 bg-[#6B46C1] rounded-full"
                                        animate={{ scale: [1, 1.2, 1] }}
                                        transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                                      />
                                    ) : (
                                      <div className="size-2 bg-foreground/60 rounded-full" />
                                    )}
                                  </div>
                                  <div className="text-sm">{task.name}</div>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>

                        <div className="relative">
                          {/* Project Dashboard Mockup */}
                          <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            className="relative rounded-lg overflow-hidden border border-[#0BC5EA]/30 shadow-[0_0_20px_rgba(11,197,234,0.2)]"
                            style={{
                              transformStyle: "preserve-3d",
                              transform: "rotateX(5deg) rotateY(-5deg)",
                            }}
                          >
                            <div className="bg-card/80 backdrop-blur-sm p-2 border-b border-[#0BC5EA]/20 flex items-center">
                              <div className="flex space-x-1 mr-2">
                                <div className="size-2 rounded-full bg-red-500/70"></div>
                                <div className="size-2 rounded-full bg-yellow-500/70"></div>
                                <div className="size-2 rounded-full bg-green-500/70"></div>
                              </div>
                              <div className="text-xs text-foreground/60 flex-1 text-center">
                                {project.name} Dashboard
                              </div>
                            </div>
                            <div className="bg-background/30 p-4 h-64 overflow-hidden">
                              <div className="grid grid-cols-2 gap-2 mb-2">
                                <div className="bg-card/50 rounded p-2">
                                  <div className="text-xs text-foreground/60 mb-1">Progress</div>
                                  <div className="text-lg font-bold">{project.progress}%</div>
                                  <div className="w-full bg-background/50 h-1.5 rounded-full overflow-hidden mt-1">
                                    <motion.div
                                      className="h-full bg-gradient-to-r from-[#0BC5EA] to-[#6B46C1]"
                                      initial={{ width: 0 }}
                                      animate={{ width: `${project.progress}%` }}
                                      transition={{ duration: 1 }}
                                    />
                                  </div>
                                </div>
                                <div className="bg-card/50 rounded p-2">
                                  <div className="text-xs text-foreground/60 mb-1">Tasks</div>
                                  <div className="flex items-end">
                                    <div className="text-lg font-bold">
                                      {project.tasks.filter((t) => t.status === "completed").length}
                                    </div>
                                    <div className="text-xs text-foreground/60 ml-1 mb-0.5">
                                      /{project.tasks.length}
                                    </div>
                                  </div>
                                  <div className="flex space-x-1 mt-1">
                                    {project.tasks.map((task, i) => (
                                      <div
                                        key={i}
                                        className={`flex-1 h-1.5 rounded-full ${
                                          task.status === "completed"
                                            ? "bg-[#0BC5EA]"
                                            : task.status === "in-progress"
                                              ? "bg-[#6B46C1]"
                                              : "bg-foreground/20"
                                        }`}
                                      />
                                    ))}
                                  </div>
                                </div>
                              </div>

                              <div className="bg-card/50 rounded p-2 mb-2">
                                <div className="flex justify-between items-center mb-1">
                                  <div className="text-xs text-foreground/60">Activity</div>
                                  <div className="text-xs text-[#0BC5EA]">View all</div>
                                </div>
                                <div className="space-y-1.5">
                                  <div className="flex items-center text-xs">
                                    <GitPullRequest className="size-3 mr-1.5 text-[#0BC5EA]" />
                                    <span className="text-[#0BC5EA] mr-1">Sarah T.</span>
                                    <span className="text-foreground/60">merged a pull request</span>
                                    <span className="ml-auto text-foreground/40">2h</span>
                                  </div>
                                  <div className="flex items-center text-xs">
                                    <GitBranch className="size-3 mr-1.5 text-[#6B46C1]" />
                                    <span className="text-[#6B46C1] mr-1">Alex M.</span>
                                    <span className="text-foreground/60">created a new branch</span>
                                    <span className="ml-auto text-foreground/40">5h</span>
                                  </div>
                                  <div className="flex items-center text-xs">
                                    <MessageSquare className="size-3 mr-1.5 text-[#0BC5EA]" />
                                    <span className="text-[#0BC5EA] mr-1">You</span>
                                    <span className="text-foreground/60">commented on a task</span>
                                    <span className="ml-auto text-foreground/40">1d</span>
                                  </div>
                                </div>
                              </div>

                              <div className="grid grid-cols-2 gap-2">
                                <div className="bg-card/50 rounded p-2">
                                  <div className="text-xs text-foreground/60 mb-1">Team</div>
                                  <div className="flex -space-x-2">
                                    <div className="size-6 rounded-full bg-[#0BC5EA]/30 border border-[#0BC5EA] flex items-center justify-center text-xs">
                                      ST
                                    </div>
                                    <div className="size-6 rounded-full bg-[#6B46C1]/30 border border-[#6B46C1] flex items-center justify-center text-xs">
                                      AM
                                    </div>
                                    <div className="size-6 rounded-full bg-[#0BC5EA]/30 border border-[#0BC5EA] flex items-center justify-center text-xs">
                                      JD
                                    </div>
                                    <div className="size-6 rounded-full bg-background/50 border border-foreground/20 flex items-center justify-center text-xs">
                                      +2
                                    </div>
                                  </div>
                                </div>
                                <div className="bg-card/50 rounded p-2">
                                  <div className="text-xs text-foreground/60 mb-1">Deadline</div>
                                  <div className="text-sm font-medium">May 15, 2025</div>
                                  <div className="text-xs text-foreground/60">18 days remaining</div>
                                </div>
                              </div>
                            </div>
                          </motion.div>

                          {/* Floating UI Elements */}
                          <motion.div
                            className="absolute -top-4 -right-4 md:-right-8 bg-card/80 backdrop-blur-sm border border-[#0BC5EA]/30 rounded-lg p-3 shadow-lg"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.3 }}
                            style={{ transformStyle: "preserve-3d", transform: "rotateX(10deg) rotateY(-5deg)" }}
                          >
                            <div className="flex items-center mb-2">
                              <FileText className="size-4 text-[#0BC5EA] mr-2" />
                              <div className="text-xs font-medium">Documentation</div>
                            </div>
                            <div className="text-xs text-foreground/60">12 files updated</div>
                          </motion.div>

                          <motion.div
                            className="absolute -bottom-4 -left-4 md:-left-8 bg-card/80 backdrop-blur-sm border border-[#6B46C1]/30 rounded-lg p-3 shadow-lg"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.5 }}
                            style={{ transformStyle: "preserve-3d", transform: "rotateX(-5deg) rotateY(10deg)" }}
                          >
                            <div className="flex items-center mb-2">
                              <Users className="size-4 text-[#6B46C1] mr-2" />
                              <div className="text-xs font-medium">Collaboration</div>
                            </div>
                            <div className="text-xs text-foreground/60">5 team members active</div>
                          </motion.div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
              ))}
            </div>
          </div>
        </Tabs>

        {/* Skills to Work Application Visualization */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-16 relative"
        >
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-full max-w-3xl h-0.5 bg-gradient-to-r from-[#0BC5EA]/50 via-[#6B46C1]/50 to-[#0BC5EA]/50"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
            <Card className="bg-card/30 backdrop-blur-sm border-[#0BC5EA]/20 overflow-hidden">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="size-10 rounded-full bg-[#0BC5EA]/10 flex items-center justify-center mr-3">
                    <Code className="size-5 text-[#0BC5EA]" />
                  </div>
                  <h3 className="text-xl font-bold text-white">Learn</h3>
                </div>
                <p className="text-foreground/70 text-sm mb-4">
                  Master AI skills through our structured curriculum and hands-on exercises
                </p>
                <div className="space-y-2">
                  <div className="bg-background/30 p-2 rounded-lg text-sm flex items-center">
                    <div className="size-4 rounded-full bg-[#0BC5EA]/20 flex items-center justify-center mr-2">
                      <div className="size-1.5 bg-[#0BC5EA] rounded-full"></div>
                    </div>
                    Prompt Engineering
                  </div>
                  <div className="bg-background/30 p-2 rounded-lg text-sm flex items-center">
                    <div className="size-4 rounded-full bg-[#0BC5EA]/20 flex items-center justify-center mr-2">
                      <div className="size-1.5 bg-[#0BC5EA] rounded-full"></div>
                    </div>
                    AI Tools & Applications
                  </div>
                  <div className="bg-background/30 p-2 rounded-lg text-sm flex items-center">
                    <div className="size-4 rounded-full bg-[#0BC5EA]/20 flex items-center justify-center mr-2">
                      <div className="size-1.5 bg-[#0BC5EA] rounded-full"></div>
                    </div>
                    Data Visualization
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-card/30 backdrop-blur-sm border-[#6B46C1]/20 overflow-hidden md:mt-8">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="size-10 rounded-full bg-[#6B46C1]/10 flex items-center justify-center mr-3">
                    <Briefcase className="size-5 text-[#6B46C1]" />
                  </div>
                  <h3 className="text-xl font-bold text-white">Apply</h3>
                </div>
                <p className="text-foreground/70 text-sm mb-4">
                  Apply your skills on real-world projects with industry partners
                </p>
                <div className="space-y-2">
                  <div className="bg-background/30 p-2 rounded-lg text-sm flex items-center">
                    <div className="size-4 rounded-full bg-[#6B46C1]/20 flex items-center justify-center mr-2">
                      <div className="size-1.5 bg-[#6B46C1] rounded-full"></div>
                    </div>
                    Client Projects
                  </div>
                  <div className="bg-background/30 p-2 rounded-lg text-sm flex items-center">
                    <div className="size-4 rounded-full bg-[#6B46C1]/20 flex items-center justify-center mr-2">
                      <div className="size-1.5 bg-[#6B46C1] rounded-full"></div>
                    </div>
                    Team Collaboration
                  </div>
                  <div className="bg-background/30 p-2 rounded-lg text-sm flex items-center">
                    <div className="size-4 rounded-full bg-[#6B46C1]/20 flex items-center justify-center mr-2">
                      <div className="size-1.5 bg-[#6B46C1] rounded-full"></div>
                    </div>
                    Mentored Development
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-card/30 backdrop-blur-sm border-[#0BC5EA]/20 overflow-hidden md:mt-16">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="size-10 rounded-full bg-[#0BC5EA]/10 flex items-center justify-center mr-3">
                    <Award className="size-5 text-[#0BC5EA]" />
                  </div>
                  <h3 className="text-xl font-bold text-white">Achieve</h3>
                </div>
                <p className="text-foreground/70 text-sm mb-4">
                  Build a professional portfolio and launch your AI career
                </p>
                <div className="space-y-2">
                  <div className="bg-background/30 p-2 rounded-lg text-sm flex items-center">
                    <div className="size-4 rounded-full bg-[#0BC5EA]/20 flex items-center justify-center mr-2">
                      <div className="size-1.5 bg-[#0BC5EA] rounded-full"></div>
                    </div>
                    Portfolio Development
                  </div>
                  <div className="bg-background/30 p-2 rounded-lg text-sm flex items-center">
                    <div className="size-4 rounded-full bg-[#0BC5EA]/20 flex items-center justify-center mr-2">
                      <div className="size-1.5 bg-[#0BC5EA] rounded-full"></div>
                    </div>
                    Job Placement Support
                  </div>
                  <div className="bg-background/30 p-2 rounded-lg text-sm flex items-center">
                    <div className="size-4 rounded-full bg-[#0BC5EA]/20 flex items-center justify-center mr-2">
                      <div className="size-1.5 bg-[#0BC5EA] rounded-full"></div>
                    </div>
                    Industry Certification
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Animated connection lines */}
          <svg className="absolute inset-0 w-full h-full" style={{ zIndex: -1 }}>
            <motion.path
              d="M150,50 C200,100 250,150 300,100"
              stroke="url(#lineGradient)"
              strokeWidth="2"
              fill="none"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 0.6 }}
              transition={{ duration: 1.5, delay: 0.8 }}
            />
            <motion.path
              d="M350,100 C400,50 450,100 500,150"
              stroke="url(#lineGradient)"
              strokeWidth="2"
              fill="none"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 0.6 }}
              transition={{ duration: 1.5, delay: 1 }}
            />
            <defs>
              <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#0BC5EA" />
                <stop offset="100%" stopColor="#6B46C1" />
              </linearGradient>
            </defs>
          </svg>
        </motion.div>
      </div>

      {/* Background glow effects */}
      <div className="absolute top-1/3 right-1/4 size-96 bg-[#0BC5EA]/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/3 left-1/4 size-96 bg-[#6B46C1]/5 rounded-full blur-3xl"></div>
    </section>
  )
}
