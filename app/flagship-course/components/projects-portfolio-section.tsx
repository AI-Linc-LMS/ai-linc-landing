"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  Code, 
  Brain, 
  Database, 
  Globe, 
  Smartphone, 
  BarChart, 
  Users, 
  Zap,
  ChevronRight,
  ExternalLink,
  Star,
  Trophy,
  Target
} from "lucide-react";

const individualProjects = [
  {
    id: 1,
    title: "AI-Powered Product Ideation Tool",
    description: "Create a no-code application that generates innovative product concepts using AI prompts",
    module: "Natural Language Processing",
    difficulty: "Beginner",
    duration: "2-3 days",
    skills: ["Tana", "MidJourney", "ChatGPT"],
    icon: Brain,
    color: "from-blue-500 to-cyan-500"
  },
  {
    id: 2,
    title: "Automated Workflow Builder",
    description: "Design a multi-tool integration platform that connects Zapier, Airtable, and AI assistants",
    module: "Workflow Automation",
    difficulty: "Intermediate",
    duration: "3-4 days",
    skills: ["Zapier", "Airtable", "Claude"],
    icon: Zap,
    color: "from-green-500 to-emerald-500"
  }
];

const capstoneProjects = [
  {
    id: 1,
    title: "AI-Powered E-commerce Platform",
    description: "Full-stack e-commerce solution with AI recommendations, chatbot support, and dynamic pricing",
    duration: "4-6 weeks",
    teamSize: "3-4 members",
    technologies: ["React", "Node.js", "Python", "MongoDB", "AWS"],
    features: [
      "Personalized product recommendations",
      "AI chatbot for customer support",
      "Dynamic pricing algorithm",
      "Inventory management system",
      "Real-time analytics dashboard"
    ],
    icon: Globe,
    color: "from-blue-600 to-purple-600"
  },
  {
    id: 2,
    title: "Healthcare AI Diagnostic System",
    description: "Medical image analysis platform for disease detection and patient monitoring",
    duration: "5-7 weeks",
    teamSize: "4-5 members",
    technologies: ["Python", "TensorFlow", "React", "Flask", "PostgreSQL"],
    features: [
      "Medical image classification",
      "Patient data management",
      "Diagnostic report generation",
      "Doctor-patient portal",
      "Appointment scheduling system"
    ],
    icon: Users,
    color: "from-green-600 to-teal-600"
  },
  {
    id: 3,
    title: "Smart City IoT Analytics",
    description: "IoT data processing platform for smart city management and optimization",
    duration: "6-8 weeks",
    teamSize: "4-6 members",
    technologies: ["Python", "Apache Kafka", "React", "InfluxDB", "Docker"],
    features: [
      "Real-time sensor data processing",
      "Traffic optimization algorithms",
      "Environmental monitoring",
      "Predictive maintenance",
      "Citizen engagement platform"
    ],
    icon: BarChart,
    color: "from-orange-600 to-red-600"
  },
  {
    id: 4,
    title: "AI Financial Trading Bot",
    description: "Automated trading system with risk management and portfolio optimization",
    duration: "5-7 weeks",
    teamSize: "3-4 members",
    technologies: ["Python", "Django", "React", "Redis", "PostgreSQL"],
    features: [
      "Algorithmic trading strategies",
      "Risk assessment models",
      "Portfolio optimization",
      "Real-time market analysis",
      "Performance tracking dashboard"
    ],
    icon: Target,
    color: "from-purple-600 to-pink-600"
  },
  {
    id: 5,
    title: "AI Content Creation Studio",
    description: "Multi-modal AI platform for content generation, editing, and optimization",
    duration: "6-8 weeks",
    teamSize: "4-5 members",
    technologies: ["Python", "FastAPI", "React", "MongoDB", "AWS S3"],
    features: [
      "Text, image, and video generation",
      "Content optimization tools",
      "Brand voice consistency",
      "Multi-platform publishing",
      "Analytics and insights"
    ],
    icon: Zap,
    color: "from-cyan-600 to-blue-600"
  }
];

const collaborationCompanies = [
  { name: "Replit", logo: "https://vectorseek.com/wp-content/uploads/2023/08/Replit-Logo-Vector.svg-.png", link: "https://replit.com" },
  { name: "OpenAI", logo: "https://freelogopng.com/images/all_img/1681142315open-ai-logo.png", link: "https://openai.com" },
  { name: "Notion", logo: "https://upload.wikimedia.org/wikipedia/commons/4/45/Notion_app_logo.png", link: "https://notion.so" },
  { name: "Zapier", logo: "https://1000logos.net/wp-content/uploads/2022/09/Zapier-Logo-1536x864.png", link: "https://zapier.com" }
];

export function ProjectsPortfolioSection() {
  const [activeTab, setActiveTab] = useState<"individual" | "capstone">("individual");
  const [selectedProject, setSelectedProject] = useState<number | null>(null);

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section id="projects-portfolio" className="py-16 sm:py-20 relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-white via-[#0BC5EA] to-[#6B46C1] bg-clip-text text-transparent">
            Build Your AI Portfolio
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Complete <span className="text-[#0BC5EA] font-semibold">36 individual projects</span> after each major skill module and <span className="text-[#6B46C1] font-semibold">5 capstone projects</span> for a real-world AI portfolio
          </p>

          {/* Tab Navigation */}
          <div className="flex justify-center mb-8">
            <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-1">
              <Button
                onClick={() => setActiveTab("individual")}
                variant={activeTab === "individual" ? "default" : "ghost"}
                className={`px-6 py-3 rounded-lg transition-all duration-300 ${
                  activeTab === "individual"
                    ? "bg-gradient-to-r from-[#0BC5EA] to-[#6B46C1] text-white"
                    : "text-gray-300 hover:text-white"
                }`}
              >
                <Code className="w-4 h-4 mr-2" />
                36 Individual Projects
              </Button>
              <Button
                onClick={() => setActiveTab("capstone")}
                variant={activeTab === "capstone" ? "default" : "ghost"}
                className={`px-6 py-3 rounded-lg transition-all duration-300 ${
                  activeTab === "capstone"
                    ? "bg-gradient-to-r from-[#0BC5EA] to-[#6B46C1] text-white"
                    : "text-gray-300 hover:text-white"
                }`}
              >
                <Trophy className="w-4 h-4 mr-2" />
                5 Capstone Projects
              </Button>
            </div>
          </div>
        </motion.div>

        {/* Individual Projects */}
        {activeTab === "individual" && (
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="mb-16"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {individualProjects.map((project, index) => (
                <motion.div key={project.id} variants={item}>
                  <Card className="bg-gradient-to-b from-gray-800/50 to-gray-900/50 backdrop-blur-sm border-gray-700/50 hover:border-[#0BC5EA]/50 transition-all duration-300 h-full group">
                    <CardContent className="p-6 h-full flex flex-col">
                      <div className="flex items-center mb-4">
                        <div className={`p-3 rounded-lg bg-gradient-to-r ${project.color} mr-4`}>
                          <project.icon className="w-6 h-6 text-white" />
                        </div>
                        <div className="flex-1">
                          <Badge 
                            variant="outline" 
                            className={`mb-2 ${
                              project.difficulty === "Beginner" 
                                ? "border-green-500/50 text-green-400"
                                : project.difficulty === "Intermediate"
                                ? "border-yellow-500/50 text-yellow-400"
                                : "border-red-500/50 text-red-400"
                            }`}
                          >
                            {project.difficulty}
                          </Badge>
                        </div>
                      </div>

                      <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#0BC5EA] transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-gray-300 mb-4 flex-1">
                        {project.description}
                      </p>

                      <div className="space-y-3">
                        <div className="flex items-center text-sm text-gray-400">
                          <span className="font-medium">Module:</span>
                          <span className="ml-2">{project.module}</span>
                        </div>
                        <div className="flex items-center text-sm text-gray-400">
                          <span className="font-medium">Duration:</span>
                          <span className="ml-2">{project.duration}</span>
                        </div>
                        <div className="flex flex-wrap gap-2">
                          {project.skills.map((skill, skillIndex) => (
                            <Badge key={skillIndex} variant="secondary" className="bg-gray-700/50 text-gray-300">
                              {skill}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>

            <motion.div 
              variants={item}
              className="text-center mt-8"
            >
              <p className="text-gray-400 text-lg">
                + 34 more projects covering <span className="text-[#0BC5EA]">Advanced AI</span>, <span className="text-[#6B46C1]">MLOps</span>, <span className="text-[#0BC5EA]">Deep Learning</span>, and more...
              </p>
            </motion.div>
          </motion.div>
        )}

        {/* Capstone Projects */}
        {activeTab === "capstone" && (
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="mb-16"
          >
            {/* Marketing Description */}
            <motion.div variants={item} className="text-center mb-12">
              <Card className="bg-gradient-to-r from-gray-800/50 to-gray-900/50 backdrop-blur-sm border-gray-700/50 p-8">
                <CardContent className="p-0">
                  <div className="flex items-center justify-center mb-6">
                    <div className="p-4 rounded-xl bg-gradient-to-r from-[#6B46C1] to-[#0BC5EA] mr-4">
                      <Trophy className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-2">
                        Industry-Level Capstone Projects
                      </h3>
                      <p className="text-gray-400">Build production-ready solutions that employers want to see</p>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-[#0BC5EA] mb-2">5</div>
                      <div className="text-gray-300">Capstone Projects</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-[#6B46C1] mb-2">4-8 weeks</div>
                      <div className="text-gray-300">Project Duration</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-[#0BC5EA] mb-2">3-6</div>
                      <div className="text-gray-300">Team Members</div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-4">What You'll Build:</h4>
                      <div className="space-y-3">
                        <div className="flex items-center">
                          <ChevronRight className="w-4 h-4 text-[#0BC5EA] mr-3 flex-shrink-0" />
                          <span className="text-gray-300">AI-Powered E-commerce Platform with recommendation engine</span>
                        </div>
                        <div className="flex items-center">
                          <ChevronRight className="w-4 h-4 text-[#0BC5EA] mr-3 flex-shrink-0" />
                          <span className="text-gray-300">Healthcare AI Diagnostic System for medical imaging</span>
                        </div>
                        <div className="flex items-center">
                          <ChevronRight className="w-4 h-4 text-[#0BC5EA] mr-3 flex-shrink-0" />
                          <span className="text-gray-300">Smart City IoT Analytics for urban optimization</span>
                        </div>
                        <div className="flex items-center">
                          <ChevronRight className="w-4 h-4 text-[#0BC5EA] mr-3 flex-shrink-0" />
                          <span className="text-gray-300">AI Financial Trading Bot with risk management</span>
                        </div>
                        <div className="flex items-center">
                          <ChevronRight className="w-4 h-4 text-[#0BC5EA] mr-3 flex-shrink-0" />
                          <span className="text-gray-300">AI Content Creation Studio for multi-modal generation</span>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h4 className="text-lg font-semibold text-white mb-4">Why Capstone Projects Matter:</h4>
                      <div className="space-y-3">
                        <div className="flex items-center">
                          <ChevronRight className="w-4 h-4 text-[#6B46C1] mr-3 flex-shrink-0" />
                          <span className="text-gray-300">Real-world complexity that mirrors actual job responsibilities</span>
                        </div>
                        <div className="flex items-center">
                          <ChevronRight className="w-4 h-4 text-[#6B46C1] mr-3 flex-shrink-0" />
                          <span className="text-gray-300">Team collaboration experience valued by employers</span>
                        </div>
                        <div className="flex items-center">
                          <ChevronRight className="w-4 h-4 text-[#6B46C1] mr-3 flex-shrink-0" />
                          <span className="text-gray-300">Portfolio pieces that demonstrate end-to-end capabilities</span>
                        </div>
                        <div className="flex items-center">
                          <ChevronRight className="w-4 h-4 text-[#6B46C1] mr-3 flex-shrink-0" />
                          <span className="text-gray-300">Industry mentorship throughout development process</span>
                        </div>
                        <div className="flex items-center">
                          <ChevronRight className="w-4 h-4 text-[#6B46C1] mr-3 flex-shrink-0" />
                          <span className="text-gray-300">Deployment experience on production platforms</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="mt-8 p-6 bg-gradient-to-r from-[#0BC5EA]/10 to-[#6B46C1]/10 rounded-lg border border-[#0BC5EA]/20">
                    <p className="text-center text-gray-300 text-lg">
                      <span className="text-[#0BC5EA] font-semibold">100% of our capstone graduates</span> receive portfolio feedback from industry professionals, 
                      and <span className="text-[#6B46C1] font-semibold">85% secure interviews</span> within 3 months of completion.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        )}

        {/* In Collaboration With Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-gray-800/50 border border-gray-700 rounded-xl p-6 sm:p-8"
        >
          <div className="text-center mb-8">
            <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-[#0BC5EA] to-[#6B46C1]">
              In collaboration with
            </h3>
            <p className="text-sm sm:text-base lg:text-lg text-gray-400">
              AI and No-Code Tool Providers
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 place-items-center">
            {collaborationCompanies.map((company, index) => (
              <motion.a
                key={company.name}
                href={company.link}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="opacity-70 hover:opacity-100 transition-all duration-300 w-full max-w-[120px] sm:max-w-[140px] flex items-center justify-center"
              >
                <div className="w-full h-12 sm:h-14 lg:h-16 flex items-center justify-center bg-white/5 rounded-lg p-2 hover:bg-white/10 transition-colors">
                  <img
                    src={company.logo}
                    alt={`${company.name} logo`}
                    className="max-w-full max-h-full object-contain hover:grayscale-0 transition-all duration-300"
                    loading="lazy"
                  />
                </div>
              </motion.a>
            ))}
          </div>
        </motion.div>

        {/* Background Effects */}
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-[#0BC5EA]/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-[#6B46C1]/5 rounded-full blur-3xl"></div>
      </div>
    </section>
  );
}
