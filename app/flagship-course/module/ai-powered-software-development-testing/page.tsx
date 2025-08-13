"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import {
  Code,
  Bug,
  GitBranch,
  Terminal,
  Cpu,
  Shield,
  Zap,
  Eye,
  Users,
  Target,
  ChevronLeft,
  ChevronRight,
  Building2,
  Award,
  TrendingUp,
  Clock,
  ArrowUpRight,
  Layers,
  Database,
  CheckCircle,
  PlayCircle,
  Settings,
} from "lucide-react";

interface SoftwareTool {
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
  bgPattern: string;
  features: string[];
}

const softwareTools: SoftwareTool[] = [
  {
    id: "github-copilot",
    name: "GitHub Copilot",
    icon: Code,
    category: "AI Code Generation",
    subtitle: "Intelligent Code Completion & Generation",
    description:
      "AI-powered code assistant that provides real-time code suggestions, function completions, and helps developers write better code faster with contextual understanding.",
    caseStudy: {
      company: "GitHub",
      industry: "Developer Tools & Platform",
      implementation:
        "GitHub uses GitHub Copilot internally to assist developers in writing code by suggesting code completions, functions, and snippets. This helped their developers significantly reduce the time spent on repetitive coding tasks.",
      outcome:
        "Developers saw a 30% increase in productivity, with much faster code generation and fewer bugs.",
      metrics: {
        improvement: "30%",
        impact: "Developer Productivity",
        category: "Code Generation",
      },
    },
    color: "#10B981",
    bgPattern: "from-emerald-500/20 via-green-500/15 to-teal-500/10",
    features: [
      "Code Completion",
      "Function Generation",
      "Bug Reduction",
      "Productivity Boost",
    ],
  },
  {
    id: "cursor-tabnine",
    name: "Cursor / Tabnine / CodeWhisperer",
    icon: Terminal,
    category: "Code Intelligence Suite",
    subtitle: "Advanced Code Optimization & Suggestions",
    description:
      "Comprehensive AI coding assistants that provide intelligent code completions, optimization suggestions, and automated fixes for enhanced development efficiency.",
    caseStudy: {
      company: "Intuit",
      industry: "Financial Technology",
      implementation:
        "Intuit integrated Amazon CodeWhisperer into their development pipeline to enhance the efficiency of their engineers by suggesting code completions, automatically optimizing queries, and recommending fixes.",
      outcome:
        "The engineering team reduced development time for complex financial tools by 40% and minimized code errors by 20%.",
      metrics: {
        improvement: "40%",
        impact: "Development Speed",
        category: "Code Optimization",
      },
    },
    color: "#3B82F6",
    bgPattern: "from-blue-500/20 via-indigo-500/15 to-cyan-500/10",
    features: [
      "Query Optimization",
      "Error Reduction",
      "Financial Tools",
      "Code Intelligence",
    ],
  },
  {
    id: "copilot-reviewer",
    name: "GitHub Copilot Reviewer / CodeRabbit",
    icon: Eye,
    category: "Automated Code Review",
    subtitle: "AI-Powered Code Quality Assurance",
    description:
      "Intelligent code review systems that automatically analyze pull requests, detect potential bugs, and ensure code quality standards across development teams.",
    caseStudy: {
      company: "Uber",
      industry: "Ride-Sharing Technology",
      implementation:
        "Uber incorporated GitHub Copilot Reviewer and Cursor BugBot into their CI/CD pipelines. These tools automatically review pull requests and detect potential bugs, ensuring that only high-quality code is deployed.",
      outcome:
        "Uber decreased manual code review time by 50% and reduced production bugs by 30%.",
      metrics: {
        improvement: "50%",
        impact: "Review Efficiency",
        category: "Quality Assurance",
      },
    },
    color: "#8B5CF6",
    bgPattern: "from-purple-500/20 via-violet-500/15 to-indigo-500/10",
    features: [
      "Pull Request Review",
      "Bug Detection",
      "CI/CD Integration",
      "Quality Control",
    ],
  },
  {
    id: "openai-codex",
    name: "OpenAI Codex / GPT-4 Coding Tools",
    icon: Cpu,
    category: "AI Code Synthesis",
    subtitle: "Natural Language to Code Translation",
    description:
      "Advanced AI models that transform natural language requirements into functional code, automating API generation and backend development processes.",
    caseStudy: {
      company: "Shopify",
      industry: "E-commerce Platform",
      implementation:
        "Shopify used OpenAI Codex to assist their engineers in automating the generation of APIs and backend integrations. Codex helped synthesize functional code from user requirements, streamlining the development process.",
      outcome:
        "Development time reduced by 35%, with significantly fewer bugs in generated code.",
      metrics: {
        improvement: "35%",
        impact: "Development Time",
        category: "API Generation",
      },
    },
    color: "#F59E0B",
    bgPattern: "from-amber-500/20 via-orange-500/15 to-yellow-500/10",
    features: [
      "API Generation",
      "Backend Integration",
      "Natural Language Processing",
      "Code Synthesis",
    ],
  },
  {
    id: "amazon-kiro",
    name: "Amazon Kiro (Beta)",
    icon: Zap,
    category: "Multi-Modal Development",
    subtitle: "Voice-Powered Code Generation",
    description:
      "Experimental AI coding platform that accepts multi-modal inputs including voice commands to generate code, detect issues, and optimize performance in real-time.",
    caseStudy: {
      company: "IBM",
      industry: "Cloud Computing & Enterprise",
      implementation:
        "IBM experimented with Amazon Kiro to automate code generation, detect issues, and optimize code performance. Kiro utilized multi-modal inputs, such as voice commands, to help developers generate code more quickly.",
      outcome:
        "Developers reduced manual coding time by 25% and improved code performance by 20% due to the real-time issue detection feature.",
      metrics: {
        improvement: "25%",
        impact: "Coding Efficiency",
        category: "Performance Optimization",
      },
    },
    color: "#EF4444",
    bgPattern: "from-red-500/20 via-pink-500/15 to-rose-500/10",
    features: [
      "Voice Commands",
      "Real-time Detection",
      "Performance Optimization",
      "Multi-modal Input",
    ],
  },
  {
    id: "reflection-ai",
    name: "Reflection AI / Graphite / Greptile",
    icon: GitBranch,
    category: "Agentic Software Management",
    subtitle: "Automated Project Management & Testing",
    description:
      "AI-driven software management platform that automates backlog prioritization, test generation, and bug reporting for streamlined development workflows.",
    caseStudy: {
      company: "Salesforce",
      industry: "Customer Relationship Management",
      implementation:
        "Salesforce integrated Reflection AI to automate the backlog prioritization, test generation, and bug reporting process for their CRM system. By leveraging agentic AI for software management, they were able to reduce manual effort.",
      outcome:
        "The backlog was reduced by 50% and testing processes were 30% faster, resulting in quicker releases.",
      metrics: {
        improvement: "50%",
        impact: "Backlog Reduction",
        category: "Project Management",
      },
    },
    color: "#06B6D4",
    bgPattern: "from-cyan-500/20 via-blue-500/15 to-indigo-500/10",
    features: [
      "Backlog Management",
      "Test Generation",
      "Bug Reporting",
      "Release Automation",
    ],
  },
  {
    id: "claude-code",
    name: "Zencoder Zen Agents / Claude Code",
    icon: Shield,
    category: "Automated Code Review & Testing",
    subtitle: "AI-Powered Quality Control System",
    description:
      "Advanced AI agents that handle routine code checks, automated testing, and quality assurance, allowing developers to focus on complex problem-solving.",
    caseStudy: {
      company: "Netflix",
      industry: "Streaming & Entertainment",
      implementation:
        "Netflix adopted Claude Code to automate the code review and testing process in their video streaming platform. The AI agents handled routine code checks and allowed developers to focus on more complex tasks.",
      outcome:
        "Netflix improved code quality by 40%, as the automated code review agents flagged issues faster and more accurately.",
      metrics: {
        improvement: "40%",
        impact: "Code Quality",
        category: "Automated Testing",
      },
    },
    color: "#EC4899",
    bgPattern: "from-pink-500/20 via-rose-500/15 to-red-500/10",
    features: [
      "Automated Review",
      "Quality Control",
      "Issue Detection",
      "Streaming Optimization",
    ],
  },
  {
    id: "testsigma",
    name: "Testsigma",
    icon: CheckCircle,
    category: "Natural Language Testing",
    subtitle: "Plain English Test Automation",
    description:
      "Innovative testing platform that converts natural language descriptions into executable test scripts, eliminating the need for complex test coding.",
    caseStudy: {
      company: "Walmart",
      industry: "Retail & E-commerce",
      implementation:
        "Walmart used Testsigma to automate the testing of their e-commerce platform's checkout process. Testsigma generated natural language test scripts and executed them without manual intervention, improving testing efficiency.",
      outcome:
        "Walmart reduced manual testing time by 60% and increased test coverage by 40%.",
      metrics: {
        improvement: "60%",
        impact: "Testing Efficiency",
        category: "Test Automation",
      },
    },
    color: "#14B8A6",
    bgPattern: "from-teal-500/20 via-emerald-500/15 to-green-500/10",
    features: [
      "Natural Language Scripts",
      "Checkout Testing",
      "Mobile Validation",
      "E-commerce Focus",
    ],
  },
  {
    id: "testrigor",
    name: "testRigor",
    icon: PlayCircle,
    category: "English-to-Test Conversion",
    subtitle: "Human Language Test Script Generation",
    description:
      "Revolutionary testing tool that converts plain English descriptions into executable test scripts, making testing accessible to non-technical team members.",
    caseStudy: {
      company: "Target",
      industry: "Retail Technology",
      implementation:
        "Target implemented testRigor to convert English language descriptions into executable test scripts for their e-commerce platform. The AI tool significantly reduced the time spent on writing and executing test scripts.",
      outcome:
        "Target achieved a 50% faster testing cycle, with fewer errors identified in live product environments.",
      metrics: {
        improvement: "50%",
        impact: "Testing Speed",
        category: "Script Generation",
      },
    },
    color: "#A855F7",
    bgPattern: "from-purple-500/20 via-violet-500/15 to-indigo-500/10",
    features: [
      "English Descriptions",
      "Script Generation",
      "E-commerce Testing",
      "Error Reduction",
    ],
  },
  {
    id: "mabl",
    name: "Mabl",
    icon: Layers,
    category: "Comprehensive Test Automation",
    subtitle: "Multi-Platform Testing Intelligence",
    description:
      "Advanced testing platform that automates functional and performance tests across web, mobile, and API interfaces with intelligent test execution.",
    caseStudy: {
      company: "Atlassian",
      industry: "Collaboration Software",
      implementation:
        "Atlassian used Mabl for automating functional and performance tests for their collaboration tools, such as Jira and Confluence. Mabl ran tests across web, mobile, and API interfaces, helping developers identify issues early.",
      outcome:
        "The company reported a 25% reduction in test execution time and identified performance bottlenecks in their products earlier.",
      metrics: {
        improvement: "25%",
        impact: "Test Execution",
        category: "Performance Testing",
      },
    },
    color: "#F97316",
    bgPattern: "from-orange-500/20 via-amber-500/15 to-yellow-500/10",
    features: [
      "Multi-platform Testing",
      "Performance Analysis",
      "API Testing",
      "Collaboration Tools",
    ],
  },
];

export default function AIPoweredSoftwareDevelopmentTesting() {
  const [hoveredTool, setHoveredTool] = useState<number | null>(null);
  const [activeFilter, setActiveFilter] = useState<string>("all");

  const categories = [
    { id: "all", name: "All Tools", icon: Settings },
    { id: "generation", name: "Code Generation", icon: Code },
    { id: "review", name: "Code Review", icon: Eye },
    { id: "testing", name: "Testing & QA", icon: CheckCircle },
  ];

  const filteredTools = React.useMemo(() => {
    if (activeFilter === "all") return softwareTools;

    switch (activeFilter) {
      case "generation":
        return softwareTools.filter((tool) =>
          [
            "AI Code Generation",
            "Code Intelligence Suite",
            "AI Code Synthesis",
            "Multi-Modal Development",
          ].includes(tool.category)
        );
      case "review":
        return softwareTools.filter((tool) =>
          [
            "Automated Code Review",
            "Agentic Software Management",
            "Automated Code Review & Testing",
          ].includes(tool.category)
        );
      case "testing":
        return softwareTools.filter((tool) =>
          [
            "Natural Language Testing",
            "English-to-Test Conversion",
            "Comprehensive Test Automation",
          ].includes(tool.category)
        );
      default:
        return softwareTools;
    }
  }, [activeFilter]);

  const handleHover = React.useCallback((index: number | null) => {
    setHoveredTool(index);
  }, []);

  const handleFilterChange = React.useCallback((filterId: string) => {
    setActiveFilter(filterId);
  }, []);

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-slate-950 via-gray-900 to-slate-950 text-white relative overflow-hidden">
      {/* Navigation Links - Code-themed design */}
      <div className="fixed top-6 left-6 right-6 z-50 flex justify-between items-center">
        <Link
          href="/flagship-course/module/ai-powered-data-business-analysis"
          className="group flex items-center gap-3 px-5 py-3 bg-gradient-to-r from-slate-800/90 to-gray-800/80 backdrop-blur-md rounded-2xl border border-gray-600/40 text-gray-300 hover:text-white hover:from-slate-700/90 hover:to-gray-700/80 transition-all duration-300 shadow-lg"
        >
          <ChevronLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform duration-300" />
          <span className="text-sm font-medium hidden sm:block">Module 2</span>
        </Link>

        <Badge className="bg-gradient-to-r from-emerald-500/20 to-blue-500/20 border-emerald-500/30 text-emerald-900 text-sm font-medium px-8 py-3 shadow-lg backdrop-blur-sm">
          Module 3 • AI‑Powered Software Development & Testing
        </Badge>

        <Link
          href="/flagship-course/module/agentic-ai-automation-strategies"
          className="group flex items-center gap-3 px-5 py-3 bg-gradient-to-r from-slate-800/90 to-gray-800/80 backdrop-blur-md rounded-2xl border border-gray-600/40 text-gray-300 hover:text-white hover:from-slate-700/90 hover:to-gray-700/80 transition-all duration-300 shadow-lg"
        >
          <span className="text-sm font-medium hidden sm:block">Module 4</span>
          <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
        </Link>
      </div>

      {/* Hero Section - Modern Grid Theme */}
      <section className="relative py-20 sm:py-24 lg:py-32 overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2 }}
            className="text-center mb-20"
          >
            {/* Code Development Symbol */}
            <div className="flex justify-center mb-12">
              <motion.div
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 1, delay: 0.3 }}
                className="relative"
              >
                <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-3xl bg-gradient-to-br from-emerald-500/30 to-blue-500/20 border border-emerald-400/30 flex items-center justify-center backdrop-blur-sm">
                  <Code className="w-12 h-12 sm:w-14 sm:h-14 text-emerald-400" />
                </div>
                {/* Grid pattern animation */}
                <motion.div
                  animate={{
                    opacity: [0.3, 0.8, 0.3],
                    scale: [1, 1.05, 1],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="absolute inset-0 border border-dashed border-emerald-400/20 rounded-3xl"
                />
                {/* Floating code elements */}
                {[0, 90, 180, 270].map((rotation, index) => (
                  <motion.div
                    key={index}
                    animate={{
                      rotate: [rotation, rotation + 360],
                    }}
                    transition={{
                      duration: 30,
                      repeat: Infinity,
                      ease: "linear",
                      delay: index * 2,
                    }}
                    className="absolute inset-0"
                  >
                    <div
                      className="absolute w-2 h-2 bg-emerald-400 rounded-sm opacity-40"
                      style={{
                        top: index % 2 === 0 ? "15%" : "85%",
                        left: "50%",
                        transform: "translateX(-50%)",
                      }}
                    />
                  </motion.div>
                ))}
              </motion.div>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-bold mb-8 leading-tight">
              <span className="bg-gradient-to-r from-emerald-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
                AI-Powered Software
              </span>
              <br />
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-emerald-400 bg-clip-text text-transparent">
                Development & Testing
              </span>
            </h1>

            <p className="text-lg sm:text-xl lg:text-2xl text-gray-300 max-w-5xl mx-auto mb-12 leading-relaxed">
              Accelerate development cycles with AI-powered coding assistants
              and automated testing platforms.
              <br className="hidden sm:block" />
              <span className="text-transparent bg-gradient-to-r from-emerald-400 to-blue-400 bg-clip-text font-semibold">
                From intelligent code generation to comprehensive quality
                assurance automation.
              </span>
            </p>

            {/* Development Impact Metrics - Grid Design */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 max-w-6xl mx-auto">
              {[
                {
                  icon: Code,
                  label: "Code Generation",
                  value: "10x Faster",
                  color: "text-emerald-400",
                },
                {
                  icon: Bug,
                  label: "Bug Reduction",
                  value: "Up to 50%",
                  color: "text-blue-400",
                },
                {
                  icon: TrendingUp,
                  label: "Productivity",
                  value: "+40%",
                  color: "text-purple-400",
                },
                {
                  icon: CheckCircle,
                  label: "Test Coverage",
                  value: "90%+",
                  color: "text-orange-400",
                },
              ].map((metric, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8, y: 30 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.6 + index * 0.1 }}
                  className="group relative"
                >
                  {/* Grid card background */}
                  <div className="relative p-4 sm:p-6">
                    <div className="absolute inset-0 bg-gradient-to-br from-gray-800/50 to-gray-900/30 border border-gray-700/40 backdrop-blur-sm rounded-2xl group-hover:border-gray-600/60 transition-all duration-300" />

                    <div className="relative z-10 text-center">
                      <metric.icon
                        className={`w-6 h-6 sm:w-8 sm:h-8 ${metric.color} mx-auto mb-3 group-hover:scale-110 transition-transform duration-300`}
                      />
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

        {/* Animated Grid Background */}
        <div className="absolute top-32 left-20 opacity-5">
          <motion.div
            animate={{
              rotate: [0, 90, 0],
              scale: [1, 1.1, 1],
            }}
            transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
            className="w-16 h-16 border-2 border-emerald-400/20 rounded-lg"
          />
        </div>
        <div className="absolute top-40 right-16 opacity-5">
          <motion.div
            animate={{
              y: [0, -15, 0],
              opacity: [0.2, 0.4, 0.2],
            }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            className="w-12 h-12 bg-gradient-to-br from-blue-500/15 to-emerald-500/10 rounded-lg transform rotate-45"
          />
        </div>
        <div className="absolute bottom-32 left-32 opacity-5">
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              rotate: [0, 180, 360],
            }}
            transition={{ duration: 16, repeat: Infinity, ease: "linear" }}
            className="w-10 h-10 border border-blue-400/20 rounded-md"
          />
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
              Development Tool Categories
            </h2>
            <p className="text-gray-400 text-lg">
              Explore AI-powered development and testing solutions
            </p>
          </motion.div>

          {/* Category Filter Pills - Grid themed */}
          <div className="flex flex-wrap justify-center gap-3 sm:gap-4 mb-16">
            {categories.map((category, index) => (
              <motion.button
                key={category.id}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                onClick={() => handleFilterChange(category.id)}
                className={`group flex items-center gap-2 sm:gap-3 px-4 sm:px-6 py-3 sm:py-4 rounded-2xl transition-all duration-300 ${
                  activeFilter === category.id
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

      {/* Software Development Tools Showcase */}
      <section className="py-16 sm:py-20 relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-emerald-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
              10 Essential Development Tools
            </h2>
            <p className="text-lg sm:text-xl text-gray-400 max-w-4xl mx-auto">
              Enterprise-grade AI tools revolutionizing software development and
              testing workflows
            </p>
          </motion.div>

          {/* Tools Grid - Advanced Card Layout */}
          <div className="space-y-8 sm:space-y-12">
            {filteredTools.map((tool, index) => (
              <motion.div
                key={tool.id}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: (index % 2) * 0.1 }}
                viewport={{ once: true, margin: "-50px" }}
                className={`group flex flex-col lg:flex-row items-stretch gap-8 ${
                  index % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
                onMouseEnter={() => handleHover(index)}
                onMouseLeave={() => handleHover(null)}
              >
                {/* Tool Information Panel */}
                <div className="flex-1 lg:flex-[3] relative">
                  <div
                    className={`h-full p-8 sm:p-10 rounded-3xl bg-gradient-to-br ${tool.bgPattern} border border-gray-700/40 group-hover:border-gray-600/60 transition-all duration-500 backdrop-blur-sm`}
                  >
                    {/* Floating Category Badge */}
                    <div className="absolute -top-4 left-8 z-10">
                      <Badge className="bg-gray-900/80 border-gray-600/50 text-gray-200 hover:text-black px-4 py-2 text-sm backdrop-blur-md">
                        {tool.category}
                      </Badge>
                    </div>

                    {/* Tool Header */}
                    <div className="mb-8">
                      <div className="flex items-start gap-6 mb-6">
                        <motion.div
                          whileHover={{ scale: 1.1, rotate: 10 }}
                          className="relative"
                        >
                          {/* Advanced Icon Container */}
                          <div className="relative">
                            <div
                              className="w-20 h-20 sm:w-24 sm:h-24 flex items-center justify-center rounded-2xl border border-gray-600/30 backdrop-blur-sm group-hover:scale-105 transition-all duration-500"
                              style={{
                                background: `linear-gradient(135deg, ${tool.color}40, ${tool.color}10)`,
                                boxShadow: `0 20px 40px ${tool.color}25`,
                              }}
                            >
                              <tool.icon
                                className="w-10 h-10 sm:w-12 sm:h-12 transition-all duration-500"
                             
                              />
                            </div>
                            {/* Animated Ring */}
                            <div
                              className="absolute inset-0 border border-dashed rounded-2xl opacity-20"
                              style={{ borderColor: tool.color }}
                            />
                          </div>
                        </motion.div>

                        <div className="flex-1 min-w-0">
                          <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-3 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-300 group-hover:bg-clip-text transition-all duration-300">
                            {tool.name}
                          </h3>
                          <p
                            className="text-lg sm:text-xl font-medium mb-4"
                            style={{ color: tool.color }}
                          >
                            {tool.subtitle}
                          </p>
                          <p className="text-gray-300 text-base sm:text-lg leading-relaxed line-clamp-2">
                            {tool.description}
                          </p>
                        </div>
                      </div>

                      {/* Metric Highlight */}
                      <div className="flex items-center gap-4 p-4 bg-gray-800/40 rounded-2xl border border-gray-700/30">
                        <div className="flex items-center gap-2">
                          <TrendingUp
                            className="w-5 h-5"
                            style={{ color: tool.color }}
                          />
                          <span className="text-gray-400 text-sm">Impact:</span>
                        </div>
                        <div className="flex items-center gap-4">
                          <div
                            className="text-2xl font-bold"
                            style={{ color: tool.color }}
                          >
                            {tool.caseStudy.metrics.improvement}
                          </div>
                          <div className="text-gray-300 text-sm">
                            {tool.caseStudy.metrics.impact}
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Features Section */}
                    <div className="mb-8">
                      <h4 className="text-white font-semibold text-lg mb-4 flex items-center">
                        <Layers
                          className="w-5 h-5 mr-2"
                          style={{ color: tool.color }}
                        />
                        Key Capabilities
                      </h4>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {tool.features.map((feature, featureIndex) => (
                          <div
                            key={featureIndex}
                            className="flex items-center gap-3 p-3 bg-gray-800/30 rounded-xl border border-gray-700/20 hover:bg-gray-700/30 transition-colors duration-300"
                          >
                            <CheckCircle
                              className="w-4 h-4 flex-shrink-0"
                              style={{ color: tool.color }}
                            />
                            <span className="text-gray-300 text-sm font-medium">
                              {feature}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Quick Stats */}
                    <div className="grid grid-cols-3 gap-4">
                      <div className="text-center p-3 bg-gray-800/20 rounded-xl border border-gray-700/20">
                        <div className="text-lg font-bold text-white">
                          {tool.caseStudy.metrics.improvement}
                        </div>
                        <div className="text-xs text-gray-400">Improvement</div>
                      </div>
                      <div className="text-center p-3 bg-gray-800/20 rounded-xl border border-gray-700/20">
                        <div className="text-lg font-bold text-emerald-400">
                          Enterprise
                        </div>
                        <div className="text-xs text-gray-400">Grade</div>
                      </div>
                      <div className="text-center p-3 bg-gray-800/20 rounded-xl border border-gray-700/20">
                        <div
                          className="text-lg font-bold"
                          style={{ color: tool.color }}
                        >
                          Active
                        </div>
                        <div className="text-xs text-gray-400">Status</div>
                      </div>
                    </div>

                    {/* Hover Effect */}
                    {hoveredTool === index && (
                      <motion.div
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        className="absolute top-4 right-4 z-10"
                      >
                        <div
                          className="w-12 h-12 rounded-2xl flex items-center justify-center backdrop-blur-sm border border-gray-600/40"
                          style={{ background: `${tool.color}20` }}
                        >
                          <ArrowUpRight
                            className="w-6 h-6"
                            style={{ color: tool.color }}
                          />
                        </div>
                      </motion.div>
                    )}
                  </div>
                </div>

                {/* Case Study Panel */}
                <div className="flex-1 lg:flex-[2] relative">
                  <div className="h-full">
                    <div className="h-full p-8 sm:p-10 bg-gray-900/60 rounded-3xl border border-gray-700/40 backdrop-blur-sm group-hover:bg-gray-900/80 transition-all duration-500">
                      {/* Company Showcase */}
                      <div className="text-center mb-8">
                        <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-gray-800/50 border border-gray-600/30 flex items-center justify-center">
                          <Building2
                            className="w-8 h-8"
                            style={{ color: tool.color }}
                          />
                        </div>
                        <h4 className="text-2xl font-bold text-white mb-2">
                          {tool.caseStudy.company}
                        </h4>
                        <p className="text-gray-400 text-sm font-medium">
                          {tool.caseStudy.industry}
                        </p>
                      </div>

                      {/* Implementation Story */}
                      <div className="space-y-6">
                        <div className="p-6 bg-gray-800/30 rounded-2xl border border-gray-700/30">
                          <h5 className="text-white font-semibold text-base mb-4 flex items-center">
                            <Settings
                              className="w-5 h-5 mr-2"
                              style={{ color: tool.color }}
                            />
                            Implementation
                          </h5>
                          <p className="text-gray-300 text-sm leading-relaxed">
                            {tool.caseStudy.implementation}
                          </p>
                        </div>

                        <div className="p-6 bg-gray-800/30 rounded-2xl border border-gray-700/30">
                          <h5 className="text-white font-semibold text-base mb-4 flex items-center">
                            <Award className="w-5 h-5 mr-2 text-emerald-400" />
                            Business Outcome
                          </h5>
                          <p className="text-emerald-300 text-sm font-medium leading-relaxed">
                            {tool.caseStudy.outcome}
                          </p>
                        </div>

                        {/* Success Metric Card */}
                        <div className="p-6 bg-gradient-to-r from-gray-800/40 to-gray-700/30 rounded-2xl border border-gray-600/30">
                          <div className="flex items-center justify-between">
                            <div>
                              <div className="text-gray-400 text-sm mb-1">
                                {tool.caseStudy.metrics.category}
                              </div>
                              <div
                                className="text-3xl font-bold"
                                style={{ color: tool.color }}
                              >
                                {tool.caseStudy.metrics.improvement}
                              </div>
                            </div>
                            <div
                              className="w-12 h-12 rounded-full border-2 border-dashed flex items-center justify-center opacity-60"
                              style={{ borderColor: tool.color }}
                            >
                              <Target
                                className="w-6 h-6"
                                style={{ color: tool.color }}
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
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
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-emerald-500/30 to-blue-500/20 border border-emerald-400/30 flex items-center justify-center backdrop-blur-sm">
                <Code className="w-8 h-8 text-emerald-400" />
              </div>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-8 text-white">
              Accelerate Development with AI
            </h2>
            <p className="text-lg sm:text-xl text-gray-300 mb-12 leading-relaxed">
              You've discovered the AI tools transforming software development
              and testing workflows.
              <br className="hidden sm:block" />
              <span className="text-transparent bg-gradient-to-r from-emerald-400 to-blue-400 bg-clip-text font-semibold">
                Ready to explore intelligent agent orchestration? Continue to
                the next module.
              </span>
            </p>

            {/* Development Success Stats */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto mb-12">
              {[
                {
                  label: "Development Tools",
                  value: "10 Essential",
                  icon: Code,
                  color: "text-emerald-400",
                },
                {
                  label: "Enterprise Cases",
                  value: "Fortune 500",
                  icon: Building2,
                  color: "text-blue-400",
                },
                {
                  label: "Productivity Gain",
                  value: "25-50%",
                  icon: TrendingUp,
                  color: "text-purple-400",
                },
                {
                  label: "Bug Reduction",
                  value: "Up to 50%",
                  icon: Bug,
                  color: "text-orange-400",
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
                  <div className="p-6 rounded-2xl bg-gray-800/40 border border-gray-700/30 backdrop-blur-sm group-hover:scale-105 group-hover:border-gray-600/50 transition-all duration-300">
                    <stat.icon
                      className={`w-8 h-8 ${stat.color} mx-auto mb-3 group-hover:animate-pulse`}
                    />
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
                  href="/flagship-course/module/ai-powered-data-business-analysis"
                  className="group flex items-center gap-4 px-8 py-6 bg-gradient-to-r from-gray-800/60 to-gray-700/50 border border-gray-600/30 rounded-2xl text-white hover:from-gray-700/60 hover:to-gray-600/50 hover:border-gray-500/40 transition-all duration-300 backdrop-blur-sm"
                >
                  <ChevronLeft className="w-6 h-6 text-gray-400 group-hover:-translate-x-1 transition-transform duration-300" />
                  <div className="text-left">
                    <div className="text-lg font-bold">Previous Module</div>
                    <div className="text-sm text-gray-300">
                      Data & Business Analysis
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
                  href="/flagship-course/module/agentic-ai-automation-strategies"
                  className="group flex items-center gap-4 px-8 py-6 bg-gradient-to-r from-emerald-500/20 to-blue-500/20 border border-emerald-400/30 rounded-2xl text-white hover:from-emerald-500/30 hover:to-blue-500/30 hover:border-emerald-400/50 transition-all duration-300 backdrop-blur-sm"
                >
                  <div className="text-left">
                    <div className="text-lg font-bold">
                      Continue to Module 4
                    </div>
                    <div className="text-sm text-gray-300">
                      Agent Orchestration & Automation
                    </div>
                  </div>
                  <ChevronRight className="w-6 h-6 text-emerald-400 group-hover:translate-x-1 transition-transform duration-300" />
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Background Effects */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-emerald-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl"></div>
      </footer>
    </div>
  );
}
