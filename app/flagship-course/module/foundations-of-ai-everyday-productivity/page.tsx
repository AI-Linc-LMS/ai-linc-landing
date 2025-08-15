"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import {
  Sparkles,
  MessageSquare,
  FileText,
  Calendar,
  Brain,
  Search,
  CheckCircle,
  Image,
  Video,
  ChevronLeft,
  ChevronRight,
  Building2,
  Award,
  TrendingUp,
  Zap,
  ArrowUpRight,
  Users,
  Clock,
  Target,
  Layers,
  Bot,
  Edit,
  Camera,
  Play,
  Globe,
  Lightbulb,
  Diamond,
  Triangle,
  Square,
  Hexagon,
} from "lucide-react";

interface ProductivityTool {
  id: string;
  name: string;
  icon: React.ComponentType<{ className?: string }>;
  category: string;
  subtitle: string;
  description: string;
  caseStudy: {
    company: string;
    industry: string;
    implementation: string;
    outcome: string;
    metrics: {
      improvement: string;
      impact: string;
      category: string;
    };
  };
  color: string;
  crystallinePattern: string;
  features: string[];
  geometricShape: React.ComponentType<{ className?: string }>;
}

const productivityTools: ProductivityTool[] = [
  {
    id: "chatgpt-gpt4",
    name: "ChatGPT / GPT-4 / Claude / Gemini",
    icon: MessageSquare,
    category: "Conversational AI",
    subtitle: "Advanced Language Models",
    description:
      "Powerful conversational AI models transforming customer support, content generation, and business communications with natural language understanding.",
    caseStudy: {
      company: "HubSpot",
      industry: "Marketing Technology & CRM",
      implementation:
        "HubSpot uses GPT-3 and GPT-4 for automating customer support and generating content. By integrating GPT-powered chatbots for lead generation, customer service, and content drafting, HubSpot has increased productivity by reducing customer service response time by 50% and content generation time by 40%.",
      outcome: "Improved lead generation and content production speed.",
      metrics: {
        improvement: "50%",
        impact: "Response Time",
        category: "Customer Support",
      },
    },
    color: "#10B981",
    crystallinePattern: "from-emerald-500/30 via-green-400/20 to-teal-500/10",
    features: [
      "Customer Support",
      "Content Generation",
      "Lead Generation",
      "Chatbots",
    ],
    geometricShape: Triangle,
  },
  {
    id: "promptlayer",
    name: "PromptLayer",
    icon: Layers,
    category: "Prompt Engineering",
    subtitle: "Prompt Performance Tracking",
    description:
      "Advanced prompt management and optimization platform for tracking performance across AI models and enhancing response quality through systematic testing.",
    caseStudy: {
      company: "OpenAI",
      industry: "Artificial Intelligence",
      implementation:
        "OpenAI uses PromptLayer to track prompt performance across its models. By testing variations and tracking prompt performance, they optimized the response quality of their GPT models, enhancing user experience and satisfaction by 30%.",
      outcome: "More accurate outputs and faster iteration of prompts.",
      metrics: {
        improvement: "30%",
        impact: "User Satisfaction",
        category: "Prompt Optimization",
      },
    },
    color: "#3B82F6",
    crystallinePattern: "from-blue-500/30 via-indigo-400/20 to-cyan-500/10",
    features: [
      "Prompt Testing",
      "Performance Tracking",
      "Model Optimization",
      "User Experience",
    ],
    geometricShape: Diamond,
  },
  {
    id: "promptbase",
    name: "PromptBase / PromptChainer",
    icon: Edit,
    category: "Prompt Marketplace",
    subtitle: "High-Quality Prompt Library",
    description:
      "Curated marketplace and chaining platform for accessing high-quality prompts, enabling efficient content creation with consistent tone and style.",
    caseStudy: {
      company: "AI Writer",
      industry: "Content Creation Technology",
      implementation:
        "AI Writer uses PromptBase to source high-quality prompts to generate blog posts and articles. This helped the company increase content output by 60% while reducing errors in tone and style.",
      outcome: "Increased efficiency in content creation.",
      metrics: {
        improvement: "60%",
        impact: "Content Output",
        category: "Content Creation",
      },
    },
    color: "#8B5CF6",
    crystallinePattern: "from-purple-500/30 via-violet-400/20 to-indigo-500/10",
    features: [
      "Content Creation",
      "Prompt Library",
      "Tone Consistency",
      "Style Management",
    ],
    geometricShape: Hexagon,
  },
  {
    id: "motion",
    name: "Motion (UseMotion)",
    icon: Calendar,
    category: "AI Scheduling",
    subtitle: "Intelligent Task Management",
    description:
      "AI-powered scheduling and resource optimization platform that automates task management and enhances operational efficiency across teams.",
    caseStudy: {
      company: "Zebra Medical Vision",
      industry: "Healthcare Technology",
      implementation:
        "Zebra Medical used Motion AI to automate scheduling and optimize resource allocation for their healthcare operations. This led to a 35% improvement in resource management efficiency.",
      outcome: "Enhanced operational efficiency and scheduling accuracy.",
      metrics: {
        improvement: "35%",
        impact: "Resource Efficiency",
        category: "Operations Management",
      },
    },
    color: "#F59E0B",
    crystallinePattern: "from-amber-500/30 via-orange-400/20 to-yellow-500/10",
    features: [
      "Task Automation",
      "Resource Allocation",
      "Scheduling Optimization",
      "Healthcare Operations",
    ],
    geometricShape: Square,
  },
  {
    id: "notion-copilot",
    name: "Notion AI / Microsoft Copilot",
    icon: FileText,
    category: "Document Automation",
    subtitle: "Intelligent Document Creation",
    description:
      "AI-powered document creation and analysis tools that automate internal communications, data analysis, and content preparation across enterprise workflows.",
    caseStudy: {
      company: "Siemens",
      industry: "Industrial Manufacturing",
      implementation:
        "Siemens used Microsoft Copilot in Office 365 to automate document creation, data analysis, and internal communications. This tool has reduced document preparation time by 50%.",
      outcome:
        "Significant time saved in document generation and increased employee productivity.",
      metrics: {
        improvement: "50%",
        impact: "Document Preparation",
        category: "Enterprise Productivity",
      },
    },
    color: "#EF4444",
    crystallinePattern: "from-red-500/30 via-pink-400/20 to-rose-500/10",
    features: [
      "Document Automation",
      "Data Analysis",
      "Internal Communications",
      "Employee Productivity",
    ],
    geometricShape: Triangle,
  },
  {
    id: "perplexity-deepseek",
    name: "Perplexity / DeepSeek",
    icon: Search,
    category: "AI Research Assistants",
    subtitle: "Intelligent Research & Fact-Checking",
    description:
      "Advanced AI research platforms that automate fact-checking, research tasks, and citation gathering for faster, more accurate content creation.",
    caseStudy: {
      company: "The Economist",
      industry: "Media & Publishing",
      implementation:
        "The Economist used DeepSeek to automate fact-checking and research tasks. This AI assistant enabled quicker access to accurate citations, saving editors 40% of their research time.",
      outcome: "Faster content creation and improved research accuracy.",
      metrics: {
        improvement: "40%",
        impact: "Research Time",
        category: "Editorial Efficiency",
      },
    },
    color: "#06B6D4",
    crystallinePattern: "from-cyan-500/30 via-teal-400/20 to-blue-500/10",
    features: [
      "Fact-Checking",
      "Research Automation",
      "Citation Gathering",
      "Editorial Efficiency",
    ],
    geometricShape: Diamond,
  },
  {
    id: "grammarly-ai",
    name: "Grammarly AI",
    icon: CheckCircle,
    category: "Communication Enhancement",
    subtitle: "AI-Powered Writing Assistant",
    description:
      "Intelligent writing enhancement platform that improves communication quality, reduces errors, and ensures brand consistency across all written content.",
    caseStudy: {
      company: "Hootsuite",
      industry: "Social Media Management",
      implementation:
        "Hootsuite uses Grammarly AI to improve the quality of social media posts, internal communications, and client-facing reports. This has helped reduce grammatical errors by 70%.",
      outcome: "Enhanced communication quality and brand consistency.",
      metrics: {
        improvement: "70%",
        impact: "Error Reduction",
        category: "Communication Quality",
      },
    },
    color: "#EC4899",
    crystallinePattern: "from-pink-500/30 via-rose-400/20 to-purple-500/10",
    features: [
      "Writing Enhancement",
      "Error Reduction",
      "Brand Consistency",
      "Social Media",
    ],
    geometricShape: Hexagon,
  },
  {
    id: "midjourney-dalle",
    name: "Midjourney / DALL·E / Stable Diffusion",
    icon: Image,
    category: "AI Image Generation",
    subtitle: "Creative Visual AI",
    description:
      "Revolutionary image generation platforms that create promotional visuals, marketing materials, and creative assets with unprecedented speed and quality.",
    caseStudy: {
      company: "Mercedes-Benz",
      industry: "Automotive Manufacturing",
      implementation:
        "Mercedes-Benz uses DALL·E for generating promotional images for their advertisements and product launches. This saved their design team significant time in visual ideation, allowing for faster turnaround in marketing campaigns.",
      outcome: "Reduced design costs and faster marketing execution.",
      metrics: {
        improvement: "50%",
        impact: "Design Speed",
        category: "Marketing Efficiency",
      },
    },
    color: "#14B8A6",
    crystallinePattern: "from-teal-500/30 via-emerald-400/20 to-green-500/10",
    features: [
      "Image Generation",
      "Marketing Materials",
      "Visual Ideation",
      "Design Automation",
    ],
    geometricShape: Square,
  },
  {
    id: "veo3",
    name: "Veo 3",
    icon: Video,
    category: "AI Video Generation",
    subtitle: "Intelligent Video Creation",
    description:
      "Advanced video generation platform that creates marketing videos, presentations, and sales content with professional quality in significantly reduced time.",
    caseStudy: {
      company: "Salesforce",
      industry: "Customer Relationship Management",
      implementation:
        "Salesforce used Veo 3 to generate marketing videos and presentations for sales pitches. This enabled their marketing team to produce polished video content in half the time.",
      outcome:
        "Reduced video production time and improved engagement with clients.",
      metrics: {
        improvement: "50%",
        impact: "Production Time",
        category: "Video Marketing",
      },
    },
    color: "#7C3AED",
    crystallinePattern: "from-violet-500/30 via-purple-400/20 to-indigo-500/10",
    features: [
      "Video Generation",
      "Marketing Content",
      "Sales Presentations",
      "Client Engagement",
    ],
    geometricShape: Triangle,
  },
];

export default function FoundationsOfAIEverydayProductivity() {
  const [hoveredTool, setHoveredTool] = useState<number | null>(null);
  const [activeCategory, setActiveCategory] = useState<string>("all");

  const categories = [
    { id: "all", name: "All Tools", icon: Sparkles },
    { id: "conversational", name: "Conversational AI", icon: MessageSquare },
    { id: "content", name: "Content Creation", icon: FileText },
    { id: "visual", name: "Visual AI", icon: Image },
    { id: "productivity", name: "Productivity", icon: Zap },
  ];

  const filteredTools = React.useMemo(() => {
    if (activeCategory === "all") return productivityTools;

    switch (activeCategory) {
      case "conversational":
        return productivityTools.filter((tool) =>
          ["Conversational AI", "AI Research Assistants"].includes(
            tool.category
          )
        );
      case "content":
        return productivityTools.filter((tool) =>
          [
            "Prompt Engineering",
            "Prompt Marketplace",
            "Document Automation",
            "Communication Enhancement",
          ].includes(tool.category)
        );
      case "visual":
        return productivityTools.filter((tool) =>
          ["AI Image Generation", "AI Video Generation"].includes(tool.category)
        );
      case "productivity":
        return productivityTools.filter((tool) =>
          ["AI Scheduling"].includes(tool.category)
        );
      default:
        return productivityTools;
    }
  }, [activeCategory]);

  const handleHover = React.useCallback((index: number | null) => {
    setHoveredTool(index);
  }, []);

  const handleCategoryChange = React.useCallback((categoryId: string) => {
    setActiveCategory(categoryId);
  }, []);

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-slate-950 via-gray-900 to-slate-950 text-white relative overflow-hidden">
      {/* Navigation Links - Crystalline Style */}
      <div className="fixed top-6 left-6 right-6 z-50 flex justify-between items-center">
        <Link
          href="/flagship-course"
          className="group flex items-center gap-3 px-5 py-3 bg-gradient-to-r from-slate-800/90 to-gray-800/80 backdrop-blur-md rounded-2xl border border-gray-600/40 text-gray-300 hover:text-white hover:from-slate-700/90 hover:to-gray-700/80 transition-all duration-300 shadow-lg"
        >
          <ChevronLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform duration-300" />
          <span className="text-sm font-medium hidden sm:block">
            Course Overview
          </span>
        </Link>

        <Badge className="bg-gradient-to-r from-emerald-500/20 to-blue-500/20 border-emerald-400/30 text-emerald-900 text-sm font-medium px-8 py-3 shadow-lg backdrop-blur-sm">
          Module 1 • AI‑Powered Data & Business Analysis
        </Badge>

        <Link
          href="/flagship-course/module/ai-powered-data-business-analysis"
          className="group flex items-center gap-3 px-5 py-3 bg-gradient-to-r from-slate-800/90 to-gray-800/80 backdrop-blur-md rounded-2xl border border-gray-600/40 text-gray-300 hover:text-white hover:from-slate-700/90 hover:to-gray-700/80 transition-all duration-300 shadow-lg"
        >
          <span className="text-sm font-medium hidden sm:block">Module 2</span>
          <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
        </Link>
      </div>

      {/* Hero Section - Crystalline Theme */}
      <section className="relative py-20 sm:py-24 lg:py-32 overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2 }}
            className="text-center mb-20"
          >
            {/* Crystalline Formation Symbol */}
            <div className="flex justify-center mb-12">
              <motion.div
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 1, delay: 0.3 }}
                className="relative"
              >
                <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-3xl bg-gradient-to-br from-emerald-500/30 to-blue-500/20 border border-emerald-400/30 flex items-center justify-center backdrop-blur-sm">
                  <div>
                    <Sparkles className="w-12 h-12 sm:w-14 sm:h-14 text-emerald-400" />
                  </div>
                </div>

                {/* Crystalline fragments */}
                {[
                  { size: "w-3 h-3", position: "top-2 left-2", delay: 0 },
                  { size: "w-2 h-2", position: "top-2 right-2", delay: 0.5 },
                  { size: "w-3 h-3", position: "bottom-2 left-2", delay: 1 },
                  { size: "w-2 h-2", position: "bottom-2 right-2", delay: 1.5 },
                ].map((fragment, index) => (
                  <motion.div
                    key={index}
                    animate={{
                      scale: [1, 1.2, 1],
                      opacity: [0.4, 0.6, 0.4],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      delay: fragment.delay,
                      ease: "easeInOut",
                    }}
                    className={`absolute ${fragment.position} ${fragment.size} bg-emerald-400/60 rounded-full`}
                  />
                ))}

                {/* Prismatic reflection */}
                <div className="absolute inset-0 border border-dashed border-blue-400/20 rounded-3xl scale-150" />
              </motion.div>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-bold mb-8 leading-tight">
              <span className="bg-gradient-to-r from-emerald-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
                Foundations of AI &
              </span>
              <br />
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Everyday Productivity
              </span>
            </h1>

            <p className="text-lg sm:text-xl lg:text-2xl text-gray-300 max-w-5xl mx-auto mb-12 leading-relaxed">
              Master essential AI tools that transform daily workflows and boost
              productivity across all business functions.
              <br className="hidden sm:block" />
              <span className="text-transparent bg-gradient-to-r from-emerald-400 to-blue-400 bg-clip-text font-semibold">
                From conversational AI to creative generation and intelligent
                automation.
              </span>
            </p>

            {/* Crystalline Productivity Metrics */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 max-w-6xl mx-auto">
              {[
                {
                  icon: Sparkles,
                  label: "AI Tools",
                  value: "9 Essential",
                  color: "text-emerald-400",
                  shape: Triangle,
                },
                {
                  icon: TrendingUp,
                  label: "Efficiency",
                  value: "+70%",
                  color: "text-blue-400",
                  shape: Diamond,
                },
                {
                  icon: Building2,
                  label: "Enterprise",
                  value: "Fortune 500",
                  color: "text-purple-400",
                  shape: Square,
                },
                {
                  icon: Zap,
                  label: "Productivity",
                  value: "Automated",
                  color: "text-pink-400",
                  shape: Hexagon,
                },
              ].map((metric, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8, y: 30 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.6 + index * 0.1 }}
                  className="group relative"
                >
                  <div className="relative p-4 sm:p-6">
                    <div className="absolute inset-0 bg-gradient-to-br from-gray-800/50 to-gray-900/30 border border-gray-700/40 backdrop-blur-sm rounded-2xl group-hover:border-gray-600/60 transition-all duration-300" />

                    <div className="relative z-10 text-center">
                      <div className="flex justify-center mb-3">
                        <div className="relative">
                          <metric.icon
                            className={`w-6 h-6 sm:w-8 sm:h-8 ${metric.color} group-hover:scale-110 transition-transform duration-300`}
                          />
                          <metric.shape
                            className={`absolute -top-1 -right-1 w-3 h-3 ${metric.color} opacity-60`}
                          />
                        </div>
                      </div>
                      <div className="text-lg sm:text-xl font-bold text-white mb-1">
                        {metric.value}
                      </div>
                      <div className="text-xs sm:text-sm text-gray-400">
                        {metric.label}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Crystalline Background Patterns */}
        <div className="absolute top-24 left-20 opacity-5">
          <div className="w-16 h-16 rounded-2xl border-2 border-emerald-400/20" />
        </div>
        <div className="absolute top-40 right-24 opacity-5">
          <div className="w-12 h-12 bg-gradient-to-br from-blue-500/15 to-emerald-500/10 rounded-2xl" />
        </div>
        <div className="absolute bottom-40 left-32 opacity-5">
          <div className="w-8 h-8 border border-purple-400/20 rounded-2xl" />
        </div>

        {/* Background Gradients */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
      </section>

      {/* Tool Category Filter */}
      <section className="py-8 sm:py-12 relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 bg-gradient-to-r from-emerald-400 to-blue-400 bg-clip-text text-transparent">
              AI Productivity Categories
            </h2>
            <p className="text-gray-400 text-lg">
              Explore essential tools for everyday AI-powered productivity
            </p>
          </motion.div>

          {/* Crystalline Category Pills */}
          <div className="flex flex-wrap justify-center gap-3 sm:gap-4 mb-16">
            {categories.map((category, index) => (
              <motion.button
                key={category.id}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                onClick={() => handleCategoryChange(category.id)}
                className={`group flex items-center gap-2 sm:gap-3 px-4 sm:px-6 py-3 sm:py-4 rounded-2xl transform transition-all duration-300 ${
                  activeCategory === category.id
                    ? "bg-gradient-to-r from-emerald-500/30 to-blue-500/20 border-emerald-400/50"
                    : "bg-gray-800/40 border-gray-600/30 hover:bg-gray-700/50"
                } border backdrop-blur-sm`}
              >
                <category.icon className="w-4 h-4 sm:w-5 sm:h-5 text-emerald-400" />
                <span className="text-sm sm:text-base font-medium text-white">
                  {category.name}
                </span>
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* Productivity Tools Crystalline Layout */}
      <section className="py-16 sm:py-20 relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-emerald-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
              9 Essential Productivity Tools
            </h2>
            <p className="text-lg sm:text-xl text-gray-400 max-w-4xl mx-auto">
              Enterprise-grade AI tools transforming daily workflows and
              business productivity
            </p>
          </motion.div>

          {/* Crystalline Tools Grid */}
          <div className="space-y-12 sm:space-y-16">
            {filteredTools.map((tool, index) => (
              <motion.div
                key={tool.id}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: (index % 2) * 0.1 }}
                viewport={{ once: true, margin: "-50px" }}
                className="group relative"
                onMouseEnter={() => handleHover(index)}
                onMouseLeave={() => handleHover(null)}
              >
                {/* Crystalline Connection */}
                {index < filteredTools.length - 1 && (
                  <div className="absolute left-1/2 -bottom-8 w-px h-8 bg-gradient-to-b from-emerald-400/30 to-transparent transform -translate-x-1/2 z-0" />
                )}

                <div className="relative rounded-3xl bg-gradient-to-br from-gray-900/60 to-gray-800/40 border border-gray-700/40 backdrop-blur-sm group-hover:border-gray-600/60 transition-all duration-300 overflow-hidden">
                  {/* Simplified Background Pattern */}
                  <div
                    className="absolute inset-0 opacity-5"
                    style={{
                      background: `linear-gradient(45deg, ${tool.color}15 0%, transparent 50%)`,
                    }}
                  />

                  <div className="relative z-10 p-8 sm:p-12">
                    {/* Tool Header */}
                    <div className="flex flex-col lg:flex-row lg:items-start gap-8 mb-8">
                      {/* Crystalline Icon Section */}
                      <div className="flex-shrink-0">
                        <div className="relative">
                          <div
                            className="w-24 h-24 sm:w-28 sm:h-28 flex items-center justify-center border border-gray-600/30 backdrop-blur-sm group-hover:scale-105 transition-all duration-300 rounded-3xl"
                            style={{
                              background: `linear-gradient(135deg, ${tool.color}40, ${tool.color}10)`,
                              boxShadow: `0 20px 40px ${tool.color}25`,
                            }}
                          >
                            <div>
                              <tool.icon className="w-12 h-12 sm:w-14 sm:h-14 transition-all duration-300" />
                            </div>
                          </div>

                          {/* Geometric accents */}
                          <div className="absolute -top-2 -right-2">
                            <tool.geometricShape className="w-6 h-6" />
                          </div>

                          {/* Category badge */}
                          <div className="absolute -bottom-2 -left-2">
                            <Badge className="bg-gray-900/80 border-gray-600/50 text-gray-200 hover:text-black px-2 py-1 text-xs backdrop-blur-md rounded-xl">
                              {tool.category}
                            </Badge>
                          </div>
                        </div>
                      </div>

                      {/* Content Section */}
                      <div className="flex-1 min-w-0">
                        <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-300 group-hover:bg-clip-text transition-all duration-300">
                          {tool.name}
                        </h3>
                        <p
                          className="text-xl sm:text-2xl font-medium mb-6"
                          style={{ color: tool.color }}
                        >
                          {tool.subtitle}
                        </p>
                        <p className="text-gray-300 text-lg leading-relaxed mb-8 max-w-4xl">
                          {tool.description}
                        </p>

                        {/* Features Crystalline Layout */}
                        <div className="flex flex-wrap gap-3 mb-8">
                          {tool.features.map((feature, featureIndex) => (
                            <div
                              key={featureIndex}
                              className="flex items-center gap-2 px-4 py-2 bg-gray-800/30 border border-gray-700/20 hover:bg-gray-700/30 transition-colors duration-200 rounded-2xl"
                            >
                              <div
                                className="w-2 h-2 rounded-full"
                                style={{ backgroundColor: tool.color }}
                              />
                              <span className="text-gray-300 text-sm font-medium">
                                {feature}
                              </span>
                            </div>
                          ))}
                        </div>

                        {/* Impact Metric */}
                        <div className="flex items-center gap-6 p-6 bg-gray-800/40 border border-gray-700/30 rounded-2xl">
                          <div className="flex items-center gap-3">
                            <TrendingUp
                              className="w-6 h-6"
                              style={{ color: tool.color }}
                            />
                            <span className="text-gray-400">
                              Enterprise Impact:
                            </span>
                          </div>
                          <div className="flex items-center gap-4">
                            <div
                              className="text-3xl font-bold"
                              style={{ color: tool.color }}
                            >
                              {tool.caseStudy.metrics.improvement}
                            </div>
                            <div className="text-gray-300">
                              {tool.caseStudy.metrics.impact}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Case Study Section */}
                    <div className="grid lg:grid-cols-2 gap-8">
                      {/* Company Info */}
                      <div className="p-6 bg-gray-800/30 border border-gray-700/30 rounded-2xl">
                        <div className="flex items-center gap-4 mb-6">
                          <div className="w-14 h-14 bg-gray-700/50 border border-gray-600/30 flex items-center justify-center rounded-3xl">
                            <Building2
                              className="w-7 h-7"
                              style={{ color: tool.color }}
                            />
                          </div>
                          <div>
                            <h4 className="text-2xl font-bold text-white">
                              {tool.caseStudy.company}
                            </h4>
                            <p className="text-gray-400 font-medium">
                              {tool.caseStudy.industry}
                            </p>
                          </div>
                        </div>

                        <div className="space-y-4">
                          <div>
                            <h5 className="text-white font-semibold mb-2 flex items-center">
                              <tool.geometricShape className="w-4 h-4 mr-2" />
                              Implementation
                            </h5>
                            <p className="text-gray-300 text-sm leading-relaxed">
                              {tool.caseStudy.implementation}
                            </p>
                          </div>
                        </div>
                      </div>

                      {/* Results */}
                      <div className="p-6 bg-gray-800/30 border border-gray-700/30 rounded-2xl">
                        <div className="mb-6">
                          <h5 className="text-white font-semibold mb-4 flex items-center">
                            <Award className="w-5 h-5 mr-2 text-emerald-400" />
                            Business Outcome
                          </h5>
                          <p className="text-emerald-300 font-medium leading-relaxed">
                            {tool.caseStudy.outcome}
                          </p>
                        </div>

                        {/* Success Metric Visualization */}
                        <div className="p-6 bg-gradient-to-r from-gray-800/40 to-gray-700/30 border border-gray-600/30 rounded-2xl">
                          <div className="flex items-center justify-between">
                            <div>
                              <div className="text-gray-400 text-sm mb-1">
                                {tool.caseStudy.metrics.category}
                              </div>
                              <div
                                className="text-4xl font-bold"
                                style={{ color: tool.color }}
                              >
                                {tool.caseStudy.metrics.improvement}
                              </div>
                            </div>
                            <div
                              className="w-16 h-16 border-2 border-dashed flex items-center justify-center opacity-60 rounded-3xl"
                              style={{ borderColor: tool.color }}
                            >
                              <Target
                                className="w-8 h-8"
                                style={{ color: tool.color }}
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Hover Effect */}
                    {hoveredTool === index && (
                      <div className="absolute top-6 right-6 z-20 opacity-100 transition-opacity duration-200">
                        <div
                          className="w-12 h-12 flex items-center justify-center backdrop-blur-sm border border-gray-600/40 rounded-3xl"
                          style={{ background: `${tool.color}20` }}
                        >
                          <ArrowUpRight
                            className="w-6 h-6"
                            style={{ color: tool.color }}
                          />
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer Section with Navigation CTAs */}
      <footer className="py-16 sm:py-20 bg-gradient-to-r from-gray-900/50 via-slate-900/40 to-gray-900/50 relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-5xl mx-auto"
          >
            <div className="flex justify-center mb-8">
              <div className="w-16 h-16 rounded-3xl bg-gradient-to-br from-emerald-500/30 to-blue-500/20 border border-emerald-400/30 flex items-center justify-center backdrop-blur-sm">
                <Sparkles className="w-8 h-8 text-emerald-400" />
              </div>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-8 text-white">
              Master AI-Powered Productivity
            </h2>
            <p className="text-lg sm:text-xl text-gray-300 mb-12 leading-relaxed">
              You've explored the essential AI tools that transform everyday
              workflows and boost business productivity.
              <br className="hidden sm:block" />
              <span className="text-transparent bg-gradient-to-r from-emerald-400 to-blue-400 bg-clip-text font-semibold">
                Ready to dive deeper into data analysis and business
                intelligence? Continue your journey.
              </span>
            </p>

            {/* Crystalline Success Stats */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto mb-12">
              {[
                {
                  label: "Productivity Tools",
                  value: "9 Essential",
                  icon: Sparkles,
                  color: "text-emerald-400",
                  shape: Triangle,
                },
                {
                  label: "Enterprise Success",
                  value: "Fortune 500",
                  icon: Building2,
                  color: "text-blue-400",
                  shape: Diamond,
                },
                {
                  label: "Efficiency Boost",
                  value: "30-70%",
                  icon: TrendingUp,
                  color: "text-purple-400",
                  shape: Square,
                },
                {
                  label: "Workflow Automation",
                  value: "Intelligent",
                  icon: Zap,
                  color: "text-pink-400",
                  shape: Hexagon,
                },
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8, y: 20 }}
                  whileInView={{ opacity: 1, scale: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="group"
                >
                  <div className="p-6 bg-gray-800/40 border border-gray-700/30 backdrop-blur-sm group-hover:scale-105 group-hover:border-gray-600/50 transition-all duration-200 rounded-2xl">
                    <div className="flex justify-center mb-3">
                      <div className="relative">
                        <stat.icon
                          className={`w-8 h-8 ${stat.color} group-hover:animate-pulse`}
                        />
                        <stat.shape
                          className={`absolute -top-1 -right-1 w-3 h-3 ${stat.color} opacity-60`}
                        />
                      </div>
                    </div>
                    <div className="text-2xl font-bold text-white mb-2">
                      {stat.value}
                    </div>
                    <div className="text-sm text-gray-400">{stat.label}</div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Navigation CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <Link
                  href="/flagship-course"
                  className="group flex items-center gap-4 px-8 py-6 bg-gradient-to-r from-gray-800/60 to-gray-700/50 border border-gray-600/30 text-white hover:from-gray-700/60 hover:to-gray-600/50 hover:border-gray-500/40 transition-all duration-200 backdrop-blur-sm rounded-2xl"
                >
                  <ChevronLeft className="w-6 h-6 text-gray-400 group-hover:-translate-x-1 transition-transform duration-300" />
                  <div className="text-left">
                    <div className="text-lg font-bold">Course Overview</div>
                    <div className="text-sm text-gray-300">
                      Flagship Program Structure
                    </div>
                  </div>
                </Link>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                viewport={{ once: true }}
              >
                <Link
                  href="/flagship-course/module/ai-powered-data-business-analysis"
                  className="group flex items-center gap-4 px-8 py-6 bg-gradient-to-r from-emerald-500/20 to-blue-500/20 border border-emerald-400/30 text-white hover:from-emerald-500/30 hover:to-blue-500/30 hover:border-emerald-400/50 transition-all duration-200 backdrop-blur-sm rounded-2xl"
                >
                  <div className="text-left">
                    <div className="text-lg font-bold">
                      Continue to Module 2
                    </div>
                    <div className="text-sm text-gray-300">
                      Data & Business Analysis
                    </div>
                  </div>
                  <ChevronRight className="w-6 h-6 text-emerald-400 group-hover:translate-x-1 transition-transform duration-300" />
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Crystalline Background Effects */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-emerald-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl"></div>
      </footer>
    </div>
  );
}
