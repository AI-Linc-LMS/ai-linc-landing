"use client";

import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Bot,
  MessageSquare,
  Layers,
  Calendar,
  Brain,
  Search,
  PenTool,
  Image,
  Video,
  Music,
  Mic,
  ChevronRight,
  Sparkles,
  Zap,
  TrendingUp,
  Target,
  Users,
  Clock,
  DollarSign,
  Award,
  Globe,
  Briefcase,
} from "lucide-react";

interface Tool {
  id: string;
  name: string;
  icon: React.ComponentType<{ className?: string }>;
  category: string;
  marketDemand: string;
  salaryImpact: string;
  jobCount: string;
  urgency: string;
  color: string;
  bgGradient: string;
  realWorldImpact: {
    industry: string;
    usage: string;
    growth: string;
    requirement: "Essential" | "High Priority" | "Critical";
  };
}

const tools: Tool[] = [
  {
    id: "chatgpt",
    name: "ChatGPT / GPT-4 / Claude",
    icon: MessageSquare,
    category: "AI Communication",
    marketDemand: "95% of tech companies use AI assistants",
    salaryImpact: "+40% salary premium",
    jobCount: "2.3M+ AI-related jobs",
    urgency: "Must-have skill by 2025",
    color: "#0BC5EA",
    bgGradient: "from-[#0BC5EA]/10 to-[#0BC5EA]/5",
    realWorldImpact: {
      industry: "Every Industry",
      usage: "Content creation, customer service, coding assistance",
      growth: "300% increase in job requirements",
      requirement: "Essential",
    },
  },
  {
    id: "promptlayer",
    name: "PromptLayer",
    icon: Layers,
    category: "Prompt Engineering",
    marketDemand: "80% of AI roles require prompt skills",
    salaryImpact: "+35% for prompt engineers",
    jobCount: "500K+ prompt engineering jobs",
    urgency: "Top 3 AI skill in demand",
    color: "#6B46C1",
    bgGradient: "from-[#6B46C1]/10 to-[#6B46C1]/5",
    realWorldImpact: {
      industry: "Tech & Business",
      usage: "AI model optimization, performance tracking",
      growth: "450% growth in prompt engineering roles",
      requirement: "Critical",
    },
  },
  {
    id: "promptbase",
    name: "PromptBase / PromptChainer",
    icon: Bot,
    category: "Automation Workflows",
    marketDemand: "70% of businesses automating with AI",
    salaryImpact: "+50% for automation specialists",
    jobCount: "1.8M+ automation jobs",
    urgency: "Automation expertise = job security",
    color: "#10B981",
    bgGradient: "from-[#10B981]/10 to-[#10B981]/5",
    realWorldImpact: {
      industry: "Manufacturing to Finance",
      usage: "Complex workflow automation, business process optimization",
      growth: "250% increase in automation roles",
      requirement: "High Priority",
    },
  },
  {
    id: "motion",
    name: "Motion (UseMotion)",
    icon: Calendar,
    category: "Smart Productivity",
    marketDemand: "90% of executives use AI for scheduling",
    salaryImpact: "+25% productivity boost",
    jobCount: "800K+ productivity specialist roles",
    urgency: "Essential for remote work era",
    color: "#F59E0B",
    bgGradient: "from-[#F59E0B]/10 to-[#F59E0B]/5",
    realWorldImpact: {
      industry: "Corporate & Startups",
      usage: "AI-powered scheduling, task optimization, resource allocation",
      growth: "180% demand for productivity tools expertise",
      requirement: "Essential",
    },
  },
  {
    id: "notion-ai",
    name: "Notion AI / Microsoft Copilot",
    icon: Brain,
    category: "Knowledge Management",
    marketDemand: "85% of companies use AI documentation",
    salaryImpact: "+30% for knowledge workers",
    jobCount: "1.5M+ knowledge management jobs",
    urgency: "Standard requirement for office jobs",
    color: "#EF4444",
    bgGradient: "from-[#EF4444]/10 to-[#EF4444]/5",
    realWorldImpact: {
      industry: "All Knowledge Work",
      usage: "Document creation, data analysis, team collaboration",
      growth: "200% increase in AI-powered documentation needs",
      requirement: "Essential",
    },
  },
  {
    id: "perplexity",
    name: "Perplexity / DeepSeek",
    icon: Search,
    category: "AI Research",
    marketDemand: "75% of researchers use AI search",
    salaryImpact: "+45% for research roles",
    jobCount: "600K+ AI research positions",
    urgency: "Replacing traditional research methods",
    color: "#8B5CF6",
    bgGradient: "from-[#8B5CF6]/10 to-[#8B5CF6]/5",
    realWorldImpact: {
      industry: "Research & Development",
      usage: "Advanced research, fact-checking, knowledge discovery",
      growth: "320% growth in AI-assisted research roles",
      requirement: "Critical",
    },
  },
  {
    id: "grammarly",
    name: "Grammarly AI",
    icon: PenTool,
    category: "Writing Enhancement",
    marketDemand: "95% of content creators use AI writing",
    salaryImpact: "+35% for content professionals",
    jobCount: "1.2M+ content creation jobs",
    urgency: "Standard for professional communication",
    color: "#06B6D4",
    bgGradient: "from-[#06B6D4]/10 to-[#06B6D4]/5",
    realWorldImpact: {
      industry: "Marketing & Communications",
      usage: "Professional writing, content optimization, brand consistency",
      growth: "275% increase in AI-enhanced writing roles",
      requirement: "Essential",
    },
  },
  {
    id: "midjourney",
    name: "Midjourney / DALL·E",
    icon: Image,
    category: "Visual AI",
    marketDemand: "80% of design roles require AI skills",
    salaryImpact: "+60% for AI-skilled designers",
    jobCount: "900K+ AI design positions",
    urgency: "Revolutionizing creative industries",
    color: "#F97316",
    bgGradient: "from-[#F97316]/10 to-[#F97316]/5",
    realWorldImpact: {
      industry: "Creative & Marketing",
      usage: "Visual content creation, rapid prototyping, brand assets",
      growth: "400% surge in AI design job postings",
      requirement: "Critical",
    },
  },
  {
    id: "veo3",
    name: "Veo 3",
    icon: Video,
    category: "Video AI",
    marketDemand: "70% of video content uses AI",
    salaryImpact: "+55% for video AI specialists",
    jobCount: "400K+ AI video jobs",
    urgency: "Future of content creation",
    color: "#EC4899",
    bgGradient: "from-[#EC4899]/10 to-[#EC4899]/5",
    realWorldImpact: {
      industry: "Media & Entertainment",
      usage: "AI video generation, automated editing, content personalization",
      growth: "500% growth in AI video production roles",
      requirement: "High Priority",
    },
  },
  {
    id: "riffusion",
    name: "Riffusion",
    icon: Music,
    category: "Audio AI",
    marketDemand: "60% of audio content uses AI",
    salaryImpact: "+50% for audio AI creators",
    jobCount: "200K+ AI audio positions",
    urgency: "Emerging high-demand skill",
    color: "#14B8A6",
    bgGradient: "from-[#14B8A6]/10 to-[#14B8A6]/5",
    realWorldImpact: {
      industry: "Music & Media",
      usage: "AI music generation, audio enhancement, creative soundscapes",
      growth: "350% increase in AI audio job requirements",
      requirement: "High Priority",
    },
  },
  {
    id: "plaud",
    name: "Plaud NotePin",
    icon: Mic,
    category: "Voice AI",
    marketDemand: "85% of meetings use AI transcription",
    salaryImpact: "+30% productivity increase",
    jobCount: "700K+ voice AI opportunities",
    urgency: "Essential for modern workplace",
    color: "#A855F7",
    bgGradient: "from-[#A855F7]/10 to-[#A855F7]/5",
    realWorldImpact: {
      industry: "Business & Education",
      usage: "Smart transcription, meeting analysis, voice-to-text automation",
      growth: "220% growth in voice AI adoption",
      requirement: "Essential",
    },
  },
];

export default function FoundationsOfAI() {
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
    <div className="min-h-screen bg-gradient-to-b from-[#0A1128] to-[#1A202C] text-white">
      {/* Hero Section */}
      <section className="relative py-20 sm:py-24 overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16 w-full"
          >
            <Badge className="mb-6 bg-gradient-to-r from-[#0BC5EA]/20 to-[#6B46C1]/20 border-[#0BC5EA]/30 text-[#01323c] text-sm font-medium px-4 py-2">
              Module 1 • Foundations of AI & Everyday Productivity
            </Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-[#0BC5EA] to-[#6B46C1] bg-clip-text text-transparent">
              Master AI Tools That Are <br />
              <span className="text-yellow-400">Reshaping Every Career</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-8">
              These aren't just tools – they're the new job requirements. <br />
              <span className="text-[#0BC5EA] font-semibold">
                Get ahead or get left behind.
              </span>
            </p>

            {/* Urgency Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-12">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="bg-gradient-to-r from-red-500/10 to-red-600/10 border border-red-500/30 rounded-xl p-6"
              >
                <div className="text-3xl font-bold text-red-400 mb-2">85%</div>
                <div className="text-white font-medium">
                  of jobs will require AI skills by 2025
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="bg-gradient-to-r from-green-500/10 to-green-600/10 border border-green-500/30 rounded-xl p-6"
              >
                <div className="text-3xl font-bold text-green-400 mb-2">
                  +50%
                </div>
                <div className="text-white font-medium">
                  average salary boost with AI skills
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="bg-gradient-to-r from-[#0BC5EA]/10 to-[#6B46C1]/10 border border-[#0BC5EA]/30 rounded-xl p-6"
              >
                <div className="text-3xl font-bold text-[#0BC5EA] mb-2">
                  12M+
                </div>
                <div className="text-white font-medium">
                  new AI jobs created globally
                </div>
              </motion.div>
            </div>

            {/* Hero Visual */}
            <div className="relative max-w-5xl mx-auto">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, delay: 0.6 }}
                className="bg-gradient-to-r from-[#0BC5EA]/10 to-[#6B46C1]/10 rounded-3xl p-8 border border-gray-700/50 backdrop-blur-sm"
              >
                <div className="grid grid-cols-2 md:grid-cols-6 gap-4">
                  {[Bot, MessageSquare, Brain, Image, Video, Sparkles].map(
                    (Icon, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                        className="flex flex-col items-center"
                      >
                        <div className="w-12 h-12 bg-gradient-to-r from-[#0BC5EA] to-[#6B46C1] rounded-xl flex items-center justify-center mb-2">
                          <Icon className="w-6 h-6 text-white" />
                        </div>
                        <div className="w-8 h-1 bg-gradient-to-r from-[#0BC5EA]/50 to-[#6B46C1]/50 rounded-full"></div>
                      </motion.div>
                    )
                  )}
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Background Effects */}
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-[#0BC5EA]/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-[#6B46C1]/5 rounded-full blur-3xl"></div>
      </section>

      {/* Market Reality Section */}
      <section className="py-16 sm:py-20 bg-gradient-to-r from-gray-900/50 to-gray-800/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16 w-full"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
              The AI Skills Gap Is{" "}
              <span className="text-red-400">Widening Fast</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-12">
              While you're thinking about it, others are already getting hired.
              Don't let this opportunity slip away.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
              {[
                {
                  icon: Briefcase,
                  stat: "3.2M",
                  label: "AI Jobs Unfilled",
                  color: "text-red-400",
                },
                {
                  icon: DollarSign,
                  stat: "$120K",
                  label: "Average AI Salary",
                  color: "text-green-400",
                },
                {
                  icon: Users,
                  stat: "78%",
                  label: "Companies Hiring AI Talent",
                  color: "text-blue-400",
                },
                {
                  icon: Clock,
                  stat: "6 Months",
                  label: "Time to Master These Tools",
                  color: "text-yellow-400",
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-gradient-to-b from-gray-800/80 to-gray-900/80 rounded-xl p-6 border border-gray-700/50"
                >
                  <item.icon
                    className={`w-12 h-12 ${item.color} mx-auto mb-4`}
                  />
                  <div className={`text-3xl font-bold ${item.color} mb-2`}>
                    {item.stat}
                  </div>
                  <div className="text-gray-300 font-medium">{item.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Tools Grid */}
      <section className="py-16 sm:py-20 relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16 w-full"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-white via-[#0BC5EA] to-[#6B46C1] bg-clip-text text-transparent">
              11 AI Tools That Will <br />
              <span className="text-yellow-400">Define Your Career</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              These are the exact tools top companies are looking for. Master
              them and watch opportunities flood in.
            </p>
            <Badge className="bg-gradient-to-r from-yellow-500/20 to-orange-500/20 border-yellow-500/30 text-yellow-400 text-sm font-medium px-4 py-2">
              ⚡ High-Impact • Fast ROI • Career Essential
            </Badge>
          </motion.div>

          {/* Interactive Timeline Design */}
          <div className="relative w-full mx-auto">
            {/* Central Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-gradient-to-b from-[#0BC5EA] via-[#6B46C1] to-[#0BC5EA] h-full hidden lg:block"></div>

            {/* Mobile Timeline Line */}
            <div className="absolute left-4 w-1 bg-gradient-to-b from-[#0BC5EA] via-[#6B46C1] to-[#0BC5EA] h-full lg:hidden"></div>

            <div className="space-y-16 lg:space-y-24 w-full">
              {tools.map((tool, index) => {
                const isLeft = index % 2 === 0;
                return (
                  <motion.div
                    key={tool.id}
                    initial={{ opacity: 0, x: isLeft ? -100 : 100 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className={`relative flex items-center w-full ${
                      isLeft ? "lg:justify-start" : "lg:justify-end"
                    } justify-center lg:px-8 px-2`}
                  >
                    {/* Timeline Node */}
                    <div
                      className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 rounded-full border-4 border-white z-10 hidden lg:block"
                      style={{ backgroundColor: tool.color }}
                    ></div>

                    {/* Mobile Timeline Node */}
                    <div
                      className="absolute left-4 transform -translate-x-1/2 w-4 h-4 rounded-full border-2 border-white z-10 lg:hidden"
                      style={{ backgroundColor: tool.color }}
                    ></div>

                    {/* Tool Bubble */}
                    <motion.div
                      whileHover={{ scale: 1.05, rotateY: 5 }}
                      className={`relative w-full max-w-md lg:max-w-lg ${
                        isLeft ? "lg:mr-auto lg:ml-0" : "lg:ml-auto lg:mr-0"
                      } ml-8 lg:ml-0`}
                    >
                      <div
                        className="relative bg-gradient-to-br from-gray-800/90 to-gray-900/90 backdrop-blur-sm rounded-3xl p-4 sm:p-6 lg:p-8 border-2 hover:shadow-2xl transition-all duration-500 w-full"
                        style={{
                          borderColor: `${tool.color}50`,
                          boxShadow: `0 0 30px ${tool.color}20`,
                        }}
                      >
                        {/* Floating Icon */}
                        <motion.div
                          animate={{
                            y: [0, -10, 0],
                            rotate: [0, 5, -5, 0],
                          }}
                          transition={{
                            duration: 4,
                            repeat: Infinity,
                            ease: "easeInOut",
                          }}
                          className="absolute -top-6 left-4 sm:left-6 w-12 h-12 rounded-2xl flex items-center justify-center z-20"
                          style={{
                            background: `linear-gradient(135deg, ${tool.color}, ${tool.color}80)`,
                            boxShadow: `0 10px 30px ${tool.color}40`,
                          }}
                        >
                          <tool.icon className="w-6 h-6 text-white" />
                        </motion.div>

                        {/* Requirement Badge */}
                        <div className="flex justify-between items-start mb-6 mt-4">
                          <Badge
                            className={`text-xs font-bold px-3 py-1 ${
                              tool.realWorldImpact.requirement === "Essential"
                                ? "bg-red-500/20 text-red-400 border-red-500/50"
                                : tool.realWorldImpact.requirement ===
                                  "Critical"
                                ? "bg-orange-500/20 text-orange-400 border-orange-500/50"
                                : "bg-yellow-500/20 text-yellow-400 border-yellow-500/50"
                            }`}
                          >
                            {tool.realWorldImpact.requirement.toUpperCase()}
                          </Badge>
                          <Badge className="bg-gray-700/50 text-gray-300 text-xs px-2 py-1">
                            {tool.category}
                          </Badge>
                        </div>

                        {/* Tool Name */}
                        <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-white mb-4 leading-tight text-center sm:text-left">
                          {tool.name}
                        </h3>

                        {/* Impact Metrics in Pill Format */}
                        <div className="grid grid-cols-1 gap-2 sm:gap-3 mb-4 sm:mb-6 w-full">
                          <div className="flex items-center bg-gradient-to-r from-green-500/10 to-green-600/10 border border-green-500/30 rounded-full px-3 sm:px-4 py-2 w-full">
                            <DollarSign className="w-4 h-4 mr-2 text-green-400 flex-shrink-0" />
                            <span className="text-green-400 font-semibold text-xs sm:text-sm truncate">
                              {tool.salaryImpact}
                            </span>
                          </div>
                          <div className="flex items-center bg-gradient-to-r from-blue-500/10 to-blue-600/10 border border-blue-500/30 rounded-full px-3 sm:px-4 py-2 w-full">
                            <Globe className="w-4 h-4 mr-2 text-blue-400 flex-shrink-0" />
                            <span className="text-blue-400 font-semibold text-xs sm:text-sm truncate">
                              {tool.marketDemand}
                            </span>
                          </div>
                          <div className="flex items-center bg-gradient-to-r from-yellow-500/10 to-yellow-600/10 border border-yellow-500/30 rounded-full px-3 sm:px-4 py-2 w-full">
                            <Briefcase className="w-4 h-4 mr-2 text-yellow-400 flex-shrink-0" />
                            <span className="text-yellow-400 font-semibold text-xs sm:text-sm truncate">
                              {tool.jobCount}
                            </span>
                          </div>
                        </div>

                        {/* Usage Description */}
                        <div className="bg-gradient-to-r from-gray-700/30 to-gray-800/30 rounded-xl p-3 sm:p-4 mb-4 sm:mb-6 w-full">
                          <div className="text-gray-400 text-xs uppercase tracking-wide mb-2 text-center sm:text-left">
                            Real-World Usage
                          </div>
                          <div className="text-gray-300 text-xs sm:text-sm leading-relaxed mb-3 text-center sm:text-left">
                            {tool.realWorldImpact.usage}
                          </div>
                          <div className="flex items-center justify-center sm:justify-start">
                            <TrendingUp className="w-3 h-3 mr-1 text-[#0BC5EA]" />
                            <span className="text-[#0BC5EA] text-xs font-medium">
                              {tool.realWorldImpact.growth}
                            </span>
                          </div>
                        </div>

                        {/* Urgency Alert */}
                        <motion.div
                          animate={{
                            boxShadow: [
                              `0 0 0 0 ${tool.color}40`,
                              `0 0 0 6px ${tool.color}10`,
                              `0 0 0 0 ${tool.color}40`,
                            ],
                          }}
                          transition={{ duration: 2, repeat: Infinity }}
                          className="p-3 rounded-lg border-l-4 mb-4 sm:mb-6 w-full"
                          style={{
                            backgroundColor: `${tool.color}10`,
                            borderColor: tool.color,
                          }}
                        >
                          <div className="flex items-center justify-center sm:justify-start">
                            <Zap
                              className="w-4 h-4 mr-2"
                              style={{ color: tool.color }}
                            />
                            <span className="text-white font-medium text-xs sm:text-sm text-center sm:text-left">
                              {tool.urgency}
                            </span>
                          </div>
                        </motion.div>

                        {/* Interactive CTA Button */}
                        <motion.div
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className="w-full"
                        >
                          <Button className="w-full bg-gradient-to-r from-[#0BC5EA] to-[#6B46C1] hover:from-[#0BC5EA]/90 hover:to-[#6B46C1]/90 text-white font-semibold py-3 transition-all duration-300 group text-sm sm:text-base">
                            <Sparkles className="w-4 h-4 mr-2 group-hover:animate-spin" />
                            Master {tool.name.split(" ")[0]}
                            <ChevronRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                          </Button>
                        </motion.div>

                        {/* Decorative Elements */}
                        <div
                          className="absolute top-4 right-4 w-8 h-8 rounded-full opacity-20"
                          style={{ backgroundColor: tool.color }}
                        ></div>
                        <div
                          className="absolute bottom-4 left-4 w-4 h-4 rounded-full opacity-30"
                          style={{ backgroundColor: tool.color }}
                        ></div>
                      </div>

                      {/* Connection Line to Timeline (Desktop only) */}
                      <div
                        className={`absolute top-1/2 transform -translate-y-1/2 w-8 h-0.5 bg-gradient-to-r hidden lg:block ${
                          isLeft
                            ? "right-0 from-transparent"
                            : "left-0 to-transparent"
                        }`}
                        style={{ backgroundColor: `${tool.color}60` }}
                      ></div>
                    </motion.div>
                  </motion.div>
                );
              })}
            </div>

            {/* Timeline End Marker */}
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 1 }}
              viewport={{ once: true }}
              className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-8 h-8 rounded-full bg-gradient-to-r from-[#0BC5EA] to-[#6B46C1] border-4 border-white flex items-center justify-center hidden lg:block"
            >
              <Target className="w-4 h-4 text-white" />
            </motion.div>

            {/* Mobile Timeline End Marker */}
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 1 }}
              viewport={{ once: true }}
              className="absolute bottom-0 left-4 transform -translate-x-1/2 w-6 h-6 rounded-full bg-gradient-to-r from-[#0BC5EA] to-[#6B46C1] border-2 border-white flex items-center justify-center lg:hidden"
            >
              <Target className="w-3 h-3 text-white" />
            </motion.div>
          </div>
        </div>

        {/* Background Effects */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#0BC5EA]/3 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#6B46C1]/3 rounded-full blur-3xl"></div>
      </section>

      {/* CTA Section
      <section className="py-16 sm:py-20 bg-gradient-to-r from-[#0BC5EA]/10 to-[#6B46C1]/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto w-full"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
              Stop Watching Others Get Ahead
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Every day you wait, the competition gets stronger. These tools
              aren't going away – they're becoming the standard. Start now and
              secure your future.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center w-full">
              <Button
                size="lg"
                className="bg-gradient-to-r from-[#0BC5EA] to-[#6B46C1] hover:from-[#0BC5EA]/90 hover:to-[#6B46C1]/90 text-white font-semibold px-6 sm:px-8 py-4 text-base sm:text-lg w-full sm:w-auto"
              >
                <Sparkles className="w-5 h-5 mr-2" />
                Start Your AI Transformation
                <ChevronRight className="w-5 h-5 ml-2" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-gray-600 text-gray-300 hover:bg-gray-800 px-6 sm:px-8 py-4 text-base sm:text-lg w-full sm:w-auto"
              >
                <Award className="w-5 h-5 mr-2" />
                View Course Curriculum
              </Button>
            </div>

            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-8 text-sm text-gray-400 w-full">
              <div className="flex items-center">
                <Users className="w-4 h-4 mr-1" />
                50,000+ Students
              </div>
              <div className="flex items-center">
                <Award className="w-4 h-4 mr-1" />
                Industry Certified
              </div>
              <div className="flex items-center">
                <Clock className="w-4 h-4 mr-1" />
                Start Immediately
              </div>
            </div>
          </motion.div>
        </div>
      </section> */}
    </div>
  );
}
