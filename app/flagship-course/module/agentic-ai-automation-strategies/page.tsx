"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import {
  Bot,
  Zap,
  Users,
  Target,
  TrendingUp,
  Clock,
  CheckCircle,
  ArrowRight,
  Cpu,
  Brain,
  Network,
  Workflow,
  Sparkles,
  Building2,
  BarChart3,
  Shield,
  Rocket,
  Star,
  Globe,
  Timer,
  Award,
  ChevronRight,
  PlayCircle,
  Factory,
  Briefcase,
  DollarSign,
  Users2,
} from "lucide-react";

interface AgentTool {
  id: string;
  name: string;
  icon: React.ComponentType<{ className?: string }>;
  category: string;
  tagline: string;
  description: string;
  caseStudy: {
    company: string;
    industry: string;
    benefit: string;
    outcome: string;
    metrics: {
      primary: string;
      secondary?: string;
      tertiary?: string;
    };
  };
  color: string;
  bgGradient: string;
  features: string[];
}

const agentTools: AgentTool[] = [
  {
    id: "langchain",
    name: "LangChain",
    icon: Brain,
    category: "RAG Systems",
    tagline: "Build Intelligent Knowledge Networks",
    description:
      "Create powerful retrieval-augmented generation systems that transform your data into intelligent conversation partners.",
    caseStudy: {
      company: "P&G (Procter & Gamble)",
      industry: "Consumer Goods",
      benefit:
        "P&G uses LangChain to create retrieval-augmented generation (RAG) systems for customer service chatbots. This allows the bot to answer complex product queries in real-time by pulling information from internal knowledge bases.",
      outcome:
        "Customer satisfaction increased by 20% due to faster and more accurate responses.",
      metrics: {
        primary: "20% ↗",
        secondary: "Real-time",
        tertiary: "Smart RAG",
      },
    },
    color: "#10B981",
    bgGradient: "from-emerald-500/20 via-green-500/15 to-teal-500/10",
    features: [
      "RAG Systems",
      "Knowledge Retrieval",
      "Real-time Responses",
      "Data Integration",
    ],
  },
  {
    id: "crewai",
    name: "CrewAI",
    icon: Users2,
    category: "Multi-Agent Orchestration",
    tagline: "Orchestrate AI Teams Like Never Before",
    description:
      "Deploy coordinated AI agent teams that work together seamlessly across your entire development lifecycle.",
    caseStudy: {
      company: "Tata Consultancy Services (TCS)",
      industry: "Technology Services",
      benefit:
        "TCS uses CrewAI for orchestrating multiple agents within their software development lifecycle to handle different tasks (e.g., code review, bug detection, testing). This led to streamlined operations and reduced task handovers.",
      outcome:
        "Reduced development cycle time by 30% and increased collaboration between teams.",
      metrics: {
        primary: "30% ↗",
        secondary: "Team Sync",
        tertiary: "Multi-Agent",
      },
    },
    color: "#3B82F6",
    bgGradient: "from-blue-500/20 via-indigo-500/15 to-purple-500/10",
    features: [
      "Agent Coordination",
      "Task Distribution",
      "Workflow Automation",
      "Team Collaboration",
    ],
  },
  {
    id: "autogen",
    name: "AutoGen",
    icon: Workflow,
    category: "Autonomous Systems",
    tagline: "Autonomous Intelligence at Scale",
    description:
      "Build self-managing AI systems that handle complex workflows with minimal human intervention.",
    caseStudy: {
      company: "Accenture",
      industry: "Professional Services",
      benefit:
        "Accenture utilized AutoGen to build autonomous systems for automating customer service workflows and task delegation. This allowed them to reduce human intervention by automating routine tasks and approvals.",
      outcome:
        "Increased operational efficiency by 40%, with a significant reduction in manual errors.",
      metrics: {
        primary: "40% ↗",
        secondary: "Autonomous",
        tertiary: "Zero Errors",
      },
    },
    color: "#F59E0B",
    bgGradient: "from-amber-500/20 via-yellow-500/15 to-orange-500/10",
    features: [
      "Autonomous Operations",
      "Task Delegation",
      "Error Reduction",
      "Workflow Automation",
    ],
  },
  {
    id: "lindy",
    name: "Lindy.ai",
    icon: Sparkles,
    category: "No-Code Automation",
    tagline: "No-Code AI Revolution",
    description:
      "Transform complex business processes into intelligent automated workflows without writing a single line of code.",
    caseStudy: {
      company: "Cognizant",
      industry: "IT Services",
      benefit:
        "Cognizant integrated Lindy.ai's no-code platform for building multi-agent workflows to automate complex business processes like customer onboarding and document verification.",
      outcome: "Reduced onboarding time by 50% and enhanced user experience.",
      metrics: {
        primary: "50% ↗",
        secondary: "No-Code",
        tertiary: "Fast Deploy",
      },
    },
    color: "#8B5CF6",
    bgGradient: "from-purple-500/20 via-violet-500/15 to-indigo-500/10",
    features: [
      "No-Code Platform",
      "Multi-Agent Workflows",
      "Business Process Automation",
      "Quick Deployment",
    ],
  },
  {
    id: "agentflow",
    name: "AgentFlow / Pydantic AI",
    icon: Network,
    category: "Banking & Finance",
    tagline: "Enterprise-Grade AI Orchestration",
    description:
      "Sophisticated multi-agent systems designed for mission-critical financial and enterprise operations.",
    caseStudy: {
      company: "RBC (Royal Bank of Canada)",
      industry: "Banking & Finance",
      benefit:
        "RBC used AgentFlow to automate the client servicing process and implement multi-agent orchestration for handling banking transactions and customer queries.",
      outcome:
        "Improved customer satisfaction scores by 35% and reduced customer service call times.",
      metrics: {
        primary: "35% ↗",
        secondary: "Enterprise",
        tertiary: "Secure AI",
      },
    },
    color: "#EF4444",
    bgGradient: "from-red-500/20 via-rose-500/15 to-pink-500/10",
    features: [
      "Enterprise Security",
      "Banking Automation",
      "Client Servicing",
      "Transaction Processing",
    ],
  },
  {
    id: "flowhunt",
    name: "Flowhunt",
    icon: Target,
    category: "AI Tool Optimization",
    tagline: "Smart AI Tool Selection Engine",
    description:
      "Intelligent platform that optimizes your AI tool stack by automatically selecting the best agent for each specific task.",
    caseStudy: {
      company: "Wipro",
      industry: "IT Consulting",
      benefit:
        "Wipro used Flowhunt to choose between CrewAI and LangChain based on project needs. This helped them streamline their agentic AI adoption process. By using the right tool for each task, they improved efficiency in both customer service and data analysis.",
      outcome:
        "Reduced resource allocation time by 20%, optimizing the AI tool adoption process.",
      metrics: {
        primary: "20% ↗",
        secondary: "Smart Select",
        tertiary: "Optimized",
      },
    },
    color: "#06B6D4",
    bgGradient: "from-cyan-500/20 via-teal-500/15 to-blue-500/10",
    features: [
      "Tool Selection",
      "Resource Optimization",
      "Performance Analytics",
      "Smart Allocation",
    ],
  },
];

export default function AgenticAIAutomationStrategies() {
  const [activeAgent, setActiveAgent] = useState<string | null>(null);

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-slate-950 via-gray-900 to-black text-white overflow-hidden">
      {/* Hero Section */}
      <section className="relative py-12 sm:py-16 lg:py-20 overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12 w-full"
          >
            <Badge className="mb-6 bg-gradient-to-r from-purple-500/20 to-cyan-500/20 border-purple-500/30 text-purple-300 text-sm font-medium px-6 py-2">
              Module 4 • Advanced AI Orchestration
            </Badge>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent leading-tight">
              Agentic AI & Automation
              <br />
              <span className="text-emerald-400">Strategies Mastery</span>
            </h1>

            <p className="text-lg sm:text-xl lg:text-2xl text-gray-300 max-w-4xl mx-auto mb-8 leading-relaxed">
              Deploy intelligent AI agent teams that revolutionize business
              operations.
              <br className="hidden sm:block" />
              <span className="text-cyan-400 font-semibold">
                From autonomous workflows to enterprise-grade orchestration.
              </span>
            </p>

            {/* Key Impact Metrics */}
            <div className="flex flex-wrap justify-center gap-4 sm:gap-6 lg:gap-8 max-w-5xl mx-auto mb-12">
              {[
                {
                  icon: TrendingUp,
                  label: "40% Efficiency Boost",
                  color: "text-emerald-400",
                  bg: "from-emerald-500/10",
                },
                {
                  icon: Timer,
                  label: "50% Faster Processes",
                  color: "text-cyan-400",
                  bg: "from-cyan-500/10",
                },
                {
                  icon: Shield,
                  label: "Enterprise Security",
                  color: "text-purple-400",
                  bg: "from-purple-500/10",
                },
                {
                  icon: Award,
                  label: "Fortune 500 Proven",
                  color: "text-amber-400",
                  bg: "from-amber-500/10",
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                  className={`flex flex-col items-center p-4 sm:p-6 rounded-2xl bg-gradient-to-br ${item.bg} to-gray-900/20 border border-gray-700/30 backdrop-blur-sm min-w-[140px] sm:min-w-[160px]`}
                >
                  <item.icon
                    className={`w-6 h-6 sm:w-8 sm:h-8 ${item.color} mb-2`}
                  />
                  <span className="text-xs sm:text-sm font-semibold text-gray-300 text-center leading-tight">
                    {item.label}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Floating Background Elements */}
        <div className="absolute top-10 left-10 opacity-10">
          <motion.div
            animate={{ y: [0, -20, 0], rotate: [0, 180, 360] }}
            transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          >
            <Bot className="w-16 h-16 text-purple-500" />
          </motion.div>
        </div>
        <div className="absolute top-20 right-16 opacity-10">
          <motion.div
            animate={{ y: [0, 15, 0], rotate: [0, -90, 0] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          >
            <Network className="w-12 h-12 text-cyan-500" />
          </motion.div>
        </div>
        <div className="absolute bottom-10 left-20 opacity-10">
          <motion.div
            animate={{ y: [0, -15, 0], x: [0, 10, 0] }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          >
            <Workflow className="w-14 h-14 text-emerald-500" />
          </motion.div>
        </div>

        {/* Background Gradient Effects */}
        <div className="absolute top-0 left-1/3 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/3 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl"></div>
      </section>

      {/* AI Agents Showcase */}
      <section className="py-12 sm:py-16 lg:py-20 relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
              6 Revolutionary AI Agent Platforms
            </h2>
            <p className="text-lg sm:text-xl text-gray-400 max-w-3xl mx-auto">
              Enterprise-proven solutions transforming Fortune 500 operations
            </p>
          </motion.div>

          {/* Agent Tools Grid */}
          <div className="flex flex-col gap-6 lg:gap-8">
            {agentTools.map((agent, index) => (
              <motion.div
                key={agent.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group w-full"
                onMouseEnter={() => setActiveAgent(agent.id)}
                onMouseLeave={() => setActiveAgent(null)}
              >
                {/* Main Agent Card */}
                <div className="relative">
                  <div
                    className={`flex flex-col lg:flex-row gap-6 lg:gap-8 p-6 sm:p-8 lg:p-10 bg-gradient-to-br ${agent.bgGradient} backdrop-blur-sm rounded-3xl border border-gray-700/30 hover:border-gray-600/50 transition-all duration-500 group-hover:scale-[1.02]`}
                  >
                    {/* Left: Agent Identity */}
                    <div className="flex-shrink-0 flex flex-col items-center lg:items-start text-center lg:text-left">
                      {/* Agent Icon with Company Badge */}
                      <div className="relative mb-6">
                        <motion.div
                          whileHover={{ scale: 1.1, rotate: 5 }}
                          className="w-20 h-20 sm:w-24 sm:h-24 lg:w-28 lg:h-28 rounded-3xl flex items-center justify-center"
                          style={{
                            background: `linear-gradient(135deg, ${agent.color}30, ${agent.color}15)`,
                            boxShadow: `0 20px 60px ${agent.color}20`,
                          }}
                        >
                          <agent.icon
                            className={`w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14`}
                          
                          />
                        </motion.div>

                        {/* Industry Badge */}
                        <div className="absolute -bottom-2 -right-2 bg-gradient-to-r from-gray-800 to-gray-700 text-white text-xs font-bold px-3 py-1 rounded-full border border-gray-600">
                          {agent.caseStudy.industry}
                        </div>
                      </div>

                      <div className="mb-4">
                        <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white mb-2">
                          {agent.name}
                        </h3>
                        <Badge className="bg-gray-700/40 text-gray-300 text-xs px-3 py-1 mb-2">
                          {agent.category}
                        </Badge>
                        <p
                          className="text-sm sm:text-base font-medium text-gray-300 mb-4"
                          style={{ color: agent.color }}
                        >
                          {agent.tagline}
                        </p>
                      </div>

                      {/* Key Features */}
                      <div className="flex flex-wrap gap-2 justify-center lg:justify-start">
                        {agent.features.slice(0, 2).map((feature, idx) => (
                          <span
                            key={idx}
                            className="text-xs px-2 py-1 rounded-full bg-gray-800/50 text-gray-400 border border-gray-700/50"
                          >
                            {feature}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Center: Case Study Content */}
                    <div className="flex-1 flex flex-col justify-between min-h-0">
                      {/* Company Showcase */}
                      <div className="mb-6">
                        <div className="flex items-center gap-3 mb-4">
                          <Building2
                            className={`w-5 h-5`}
                            // If you want to apply dynamic color, use inline style with a wrapper span or use a fixed Tailwind color class
                          />
                          <h4 className="text-lg sm:text-xl font-bold text-white">
                            {agent.caseStudy.company}
                          </h4>
                        </div>

                        <p className="text-gray-400 text-sm sm:text-base leading-relaxed mb-4">
                          {agent.description}
                        </p>

                        {/* Implementation Details */}
                        <div className="bg-gray-900/40 rounded-2xl p-4 sm:p-5 border border-gray-700/30">
                          <div className="flex items-start gap-3">
                            <Rocket className="w-4 h-4 text-emerald-400 mt-1 flex-shrink-0" />
                            <div>
                              <p className="text-gray-300 text-sm leading-relaxed mb-3">
                                {agent.caseStudy.benefit}
                              </p>
                              <div className="flex items-start gap-2">
                                <CheckCircle className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                                <p className="text-green-300 text-sm font-medium">
                                  {agent.caseStudy.outcome}
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Right: Impact Metrics */}
                    <div className="flex-shrink-0 lg:w-48">
                      <div className="flex flex-row lg:flex-col gap-3 lg:gap-4 justify-around lg:justify-start h-full">
                        {/* Primary Metric */}
                        <div className="text-center lg:text-left p-4 lg:p-5 bg-gray-800/30 rounded-2xl flex-1 lg:flex-initial border border-gray-700/20">
                          <div
                            className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-2"
                            style={{ color: agent.color }}
                          >
                            {agent.caseStudy.metrics.primary}
                          </div>
                          <div className="text-xs text-gray-400 leading-tight mb-2">
                            Impact Improvement
                          </div>
                          <div className="text-xs text-gray-500">
                            Proven Results
                          </div>
                        </div>

                        {/* Secondary Metrics */}
                        <div className="flex flex-col gap-2 lg:gap-3 flex-1 lg:flex-initial">
                          {agent.caseStudy.metrics.secondary && (
                            <div className="text-center lg:text-left p-3 bg-gray-800/20 rounded-xl border border-gray-700/10">
                              <div className="text-sm font-bold text-white mb-1">
                                {agent.caseStudy.metrics.secondary}
                              </div>
                              <div className="text-xs text-gray-400">
                                Technology
                              </div>
                            </div>
                          )}

                          {agent.caseStudy.metrics.tertiary && (
                            <div className="text-center lg:text-left p-3 bg-gray-800/20 rounded-xl border border-gray-700/10">
                              <div className="text-sm font-bold text-white mb-1">
                                {agent.caseStudy.metrics.tertiary}
                              </div>
                              <div className="text-xs text-gray-400">
                                Approach
                              </div>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Expandable Features Section */}
                  {activeAgent === agent.id && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="mt-4 p-6 bg-gray-800/20 rounded-2xl border border-gray-700/20">
                        <h5 className="text-white font-semibold mb-4 flex items-center">
                          <Sparkles
                            className="w-4 h-4 mr-2"
                            style={{ color: agent.color }}
                          />
                          Complete Feature Set
                        </h5>
                        <div className="flex flex-wrap gap-2">
                          {agent.features.map((feature, idx) => (
                            <span
                              key={idx}
                              className="text-xs px-3 py-2 rounded-lg bg-gray-700/40 text-gray-300 border border-gray-600/30"
                            >
                              {feature}
                            </span>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Mobile-Optimized Summary Cards */}
          <div className="block lg:hidden mt-12">
            <h3 className="text-xl font-bold text-white mb-6 text-center">
              Quick Impact Overview
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {agentTools.slice(0, 4).map((agent, index) => (
                <motion.div
                  key={`mobile-${agent.id}`}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="p-4 bg-gray-800/30 rounded-2xl border border-gray-700/30"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center"
                      style={{ backgroundColor: `${agent.color}20` }}
                    >
                      <agent.icon
                        className="w-5 h-5"
                      />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-white">
                        {agent.name}
                      </h4>
                      <p className="text-xs text-gray-400">
                        {agent.caseStudy.company}
                      </p>
                    </div>
                  </div>
                  <div className="text-center">
                    <div
                      className="text-xl font-bold mb-1"
                      style={{ color: agent.color }}
                    >
                      {agent.caseStudy.metrics.primary}
                    </div>
                    <div className="text-xs text-gray-400">
                      Performance Boost
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA Section */}
      <section className="py-16 sm:py-20 bg-gradient-to-r from-purple-900/20 via-gray-900/30 to-cyan-900/20 relative overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-6 text-white">
              Ready to Deploy Intelligent AI Agent Teams?
            </h2>
            <p className="text-lg sm:text-xl text-gray-300 mb-8 leading-relaxed">
              Join the Fortune 500 companies already transforming their
              operations with agentic AI.
              <br className="hidden sm:block" />
              <span className="text-cyan-400 font-semibold">
                Master the future of autonomous business intelligence.
              </span>
            </p>

            {/* Final Impact Stats */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 max-w-3xl mx-auto mb-10">
              {[
                {
                  label: "Enterprise Clients",
                  value: "Fortune 500",
                  icon: Building2,
                },
                {
                  label: "Efficiency Gains",
                  value: "Up to 50%",
                  icon: TrendingUp,
                },
                { label: "Deployment Speed", value: "No-Code", icon: Zap },
                { label: "ROI Timeline", value: "30 Days", icon: Timer },
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center p-4 rounded-xl bg-gray-800/30 border border-gray-700/30"
                >
                  <stat.icon className="w-6 h-6 text-cyan-400 mx-auto mb-2" />
                  <div className="text-lg font-bold text-white mb-1">
                    {stat.value}
                  </div>
                  <div className="text-xs text-gray-400">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Background Effects */}
        <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-black/50 to-transparent"></div>
        <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-500/5 rounded-full blur-3xl"></div>
      </section>
    </div>
  );
}
