"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { Badge } from '@/components/ui/badge';
import { 
  Bot, 
  Network, 
  GitBranch, 
  Workflow, 
  Brain, 
  Zap, 
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
  Settings,
  Globe,
  Lightbulb,
  Link as LinkIcon,
  Cpu
} from 'lucide-react';

interface AgenticTool {
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

const agenticTools: AgenticTool[] = [
  {
    id: "langchain",
    name: "LangChain",
    icon: LinkIcon,
    category: "RAG & Knowledge Systems",
    subtitle: "Retrieval-Augmented Generation Framework",
    description: "Advanced framework for building context-aware applications with large language models, enabling sophisticated retrieval-augmented generation systems for enterprise knowledge management.",
    caseStudy: {
      company: "P&G (Procter & Gamble)",
      industry: "Consumer Goods & Manufacturing",
      implementation: "P&G uses LangChain to create retrieval-augmented generation (RAG) systems for customer service chatbots. This allows the bot to answer complex product queries in real-time by pulling information from internal knowledge bases.",
      outcome: "Customer satisfaction increased by 20% due to faster and more accurate responses.",
      metrics: {
        improvement: "20%",
        impact: "Customer Satisfaction",
        category: "Knowledge Retrieval"
      }
    },
    color: "#10B981",
    bgPattern: "from-emerald-500/20 via-green-500/15 to-teal-500/10",
    features: ["RAG Systems", "Knowledge Bases", "Real-time Queries", "Customer Service"]
  },
  {
    id: "crewai",
    name: "CrewAI",
    icon: Users,
    category: "Multi-Agent Orchestration",
    subtitle: "Collaborative AI Agent Framework",
    description: "Powerful platform for orchestrating multiple AI agents to work together on complex tasks, enabling seamless collaboration and automated workflow management across development teams.",
    caseStudy: {
      company: "Tata Consultancy Services (TCS)",
      industry: "Information Technology Services",
      implementation: "TCS uses CrewAI for orchestrating multiple agents within their software development lifecycle to handle different tasks (e.g., code review, bug detection, testing). This led to streamlined operations and reduced task handovers.",
      outcome: "Reduced development cycle time by 30% and increased collaboration between teams.",
      metrics: {
        improvement: "30%",
        impact: "Development Speed",
        category: "Team Collaboration"
      }
    },
    color: "#3B82F6",
    bgPattern: "from-blue-500/20 via-indigo-500/15 to-cyan-500/10",
    features: ["Agent Orchestration", "Code Review", "Bug Detection", "Team Collaboration"]
  },
  {
    id: "autogen",
    name: "AutoGen",
    icon: Bot,
    category: "Autonomous System Building",
    subtitle: "Multi-Agent Conversation Framework",
    description: "Microsoft's framework for creating autonomous multi-agent systems that can engage in complex conversations and task delegation, reducing human intervention in routine operations.",
    caseStudy: {
      company: "Accenture",
      industry: "Professional Consulting Services",
      implementation: "Accenture utilized AutoGen to build autonomous systems for automating customer service workflows and task delegation. This allowed them to reduce human intervention by automating routine tasks and approvals.",
      outcome: "Increased operational efficiency by 40%, with a significant reduction in manual errors.",
      metrics: {
        improvement: "40%",
        impact: "Operational Efficiency",
        category: "Process Automation"
      }
    },
    color: "#8B5CF6",
    bgPattern: "from-purple-500/20 via-violet-500/15 to-indigo-500/10",
    features: ["Autonomous Systems", "Task Delegation", "Workflow Automation", "Error Reduction"]
  },
  {
    id: "lindy-ai",
    name: "Lindy.ai",
    icon: Workflow,
    category: "No-Code Agent Builder",
    subtitle: "Visual Multi-Agent Workflow Platform",
    description: "No-code platform that empowers users to build sophisticated multi-agent workflows for automating complex business processes without requiring technical expertise.",
    caseStudy: {
      company: "Cognizant",
      industry: "Technology Consulting",
      implementation: "Cognizant integrated Lindy.ai's no-code platform for building multi-agent workflows to automate complex business processes like customer onboarding and document verification.",
      outcome: "Reduced onboarding time by 50% and enhanced user experience.",
      metrics: {
        improvement: "50%",
        impact: "Onboarding Speed",
        category: "Process Optimization"
      }
    },
    color: "#F59E0B",
    bgPattern: "from-amber-500/20 via-orange-500/15 to-yellow-500/10",
    features: ["No-Code Platform", "Workflow Builder", "Document Verification", "User Experience"]
  },
  {
    id: "agentflow",
    name: "AgentFlow / Pydantic AI",
    icon: Network,
    category: "Enterprise Agent Orchestration",
    subtitle: "Scalable Multi-Agent Architecture",
    description: "Enterprise-grade platform for building and managing complex multi-agent systems with robust orchestration capabilities for large-scale business operations.",
    caseStudy: {
      company: "RBC (Royal Bank of Canada)",
      industry: "Banking & Financial Services",
      implementation: "RBC used AgentFlow to automate the client servicing process and implement multi-agent orchestration for handling banking transactions and customer queries.",
      outcome: "Improved customer satisfaction scores by 35% and reduced customer service call times.",
      metrics: {
        improvement: "35%",
        impact: "Customer Satisfaction",
        category: "Service Automation"
      }
    },
    color: "#EF4444",
    bgPattern: "from-red-500/20 via-pink-500/15 to-rose-500/10",
    features: ["Client Servicing", "Banking Transactions", "Customer Queries", "Service Optimization"]
  },
  {
    id: "flowhunt",
    name: "Flowhunt",
    icon: Brain,
    category: "AI Tool Selection & Optimization",
    subtitle: "Intelligent Framework Selector",
    description: "Advanced platform that intelligently selects between different agentic AI frameworks based on project requirements, optimizing tool adoption and resource allocation.",
    caseStudy: {
      company: "Wipro",
      industry: "IT Services & Consulting",
      implementation: "Wipro used Flowhunt to choose between CrewAI and LangChain based on project needs. This helped them streamline their agentic AI adoption process. By using the right tool for each task, they improved efficiency in both customer service and data analysis.",
      outcome: "Reduced resource allocation time by 20%, optimizing the AI tool adoption process.",
      metrics: {
        improvement: "20%",
        impact: "Resource Efficiency",
        category: "Tool Optimization"
      }
    },
    color: "#06B6D4",
    bgPattern: "from-cyan-500/20 via-blue-500/15 to-indigo-500/10",
    features: ["Framework Selection", "Resource Allocation", "Process Optimization", "Tool Adoption"]
  }
];

export default function AgenticAIAutomationStrategies() {
  const [hoveredTool, setHoveredTool] = useState<number | null>(null);
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const categories = [
    { id: 'all', name: 'All Tools', icon: Settings },
    { id: 'orchestration', name: 'Orchestration', icon: Network },
    { id: 'automation', name: 'Automation', icon: Bot },
    { id: 'workflows', name: 'Workflows', icon: Workflow }
  ];

  const filteredTools = React.useMemo(() => {
    if (activeCategory === 'all') return agenticTools;
    
    switch(activeCategory) {
      case 'orchestration': 
        return agenticTools.filter(tool => 
          ['Multi-Agent Orchestration', 'Enterprise Agent Orchestration', 'AI Tool Selection & Optimization'].includes(tool.category)
        );
      case 'automation': 
        return agenticTools.filter(tool => 
          ['Autonomous System Building', 'RAG & Knowledge Systems'].includes(tool.category)
        );
      case 'workflows': 
        return agenticTools.filter(tool => 
          ['No-Code Agent Builder'].includes(tool.category)
        );
      default: 
        return agenticTools;
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
      
      {/* Navigation Links - Agentic Flow design */}
      <div className="fixed top-6 left-6 right-6 z-50 flex justify-between items-center">
        <Link 
          href="/flagship-course/module/ai-powered-software-development-testing"
          className="group flex items-center gap-3 px-5 py-3 bg-gradient-to-r from-slate-800/90 to-gray-800/80 backdrop-blur-md rounded-2xl border border-gray-600/40 text-gray-300 hover:text-white hover:from-slate-700/90 hover:to-gray-700/80 transition-all duration-300 shadow-lg"
        >
          <ChevronLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform duration-300" />
          <span className="text-sm font-medium hidden sm:block">Module 3</span>
        </Link>
        
        <Badge className="bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border-cyan-500/30 text-black text-sm font-medium px-8 py-3 shadow-lg backdrop-blur-sm">
          Module 4 • Agentic AI & Automation Strategies
        </Badge>
        
        <Link 
          href="/flagship-course/module/core-data-science-generative-ai-skills"
          className="group flex items-center gap-3 px-5 py-3 bg-gradient-to-r from-slate-800/90 to-gray-800/80 backdrop-blur-md rounded-2xl border border-gray-600/40 text-gray-300 hover:text-white hover:from-slate-700/90 hover:to-gray-700/80 transition-all duration-300 shadow-lg"
        >
          <span className="text-sm font-medium hidden sm:block">Module 5</span>
          <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
        </Link>
      </div>

      {/* Hero Section - Agentic Flow Theme */}
      <section className="relative py-20 sm:py-24 lg:py-32 overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2 }}
            className="text-center mb-20"
          >
            {/* Agentic Network Symbol */}
            <div className="flex justify-center mb-12">
              <motion.div
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 1, delay: 0.3 }}
                className="relative"
              >
                <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-3xl bg-gradient-to-br from-cyan-500/30 to-purple-500/20 border border-cyan-400/30 flex items-center justify-center backdrop-blur-sm">
                  <Network className="w-12 h-12 sm:w-14 sm:h-14 text-cyan-400" />
                </div>
                {/* Flow connection animations */}
                <motion.div
                  animate={{ 
                    opacity: [0.3, 0.8, 0.3],
                    scale: [1, 1.1, 1]
                  }}
                  transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute inset-0 border border-dashed border-cyan-400/20 rounded-3xl"
                />
                {/* Flowing agent nodes */}
                {[0, 60, 120, 180, 240, 300].map((angle, index) => (
                  <motion.div
                    key={index}
                    animate={{ 
                      rotate: [angle, angle + 360]
                    }}
                    transition={{ duration: 25, repeat: Infinity, ease: "linear", delay: index * 1.5 }}
                    className="absolute inset-0"
                  >
                    <div 
                      className="absolute w-3 h-3 bg-cyan-400 rounded-full opacity-60"
                      style={{
                        top: '10%',
                        left: '50%',
                        transform: 'translateX(-50%)',
                        boxShadow: '0 0 10px rgba(34, 211, 238, 0.4)'
                      }}
                    />
                  </motion.div>
                ))}
              </motion.div>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-bold mb-8 leading-tight">
              <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-blue-400 bg-clip-text text-transparent">
                Agentic AI &
              </span>
              <br />
              <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
                Automation Strategies
              </span>
            </h1>
            
            <p className="text-lg sm:text-xl lg:text-2xl text-gray-300 max-w-5xl mx-auto mb-12 leading-relaxed">
              Build intelligent multi-agent systems that collaborate, orchestrate, and automate complex workflows.
              <br className="hidden sm:block" />
              <span className="text-transparent bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text font-semibold">
                From autonomous decision-making to enterprise-scale agent orchestration.
              </span>
            </p>

            {/* Agentic Impact Metrics - Flow Design */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 max-w-6xl mx-auto">
              {[
                { icon: Network, label: "Agent Networks", value: "Multi-Agent", color: "text-cyan-400" },
                { icon: Bot, label: "Automation", value: "40%+ Faster", color: "text-purple-400" },
                { icon: TrendingUp, label: "Efficiency", value: "+35%", color: "text-blue-400" },
                { icon: Workflow, label: "Workflows", value: "Orchestrated", color: "text-pink-400" }
              ].map((metric, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8, y: 30 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.6 + index * 0.1 }}
                  className="group relative"
                >
                  {/* Flow card background */}
                  <div className="relative p-4 sm:p-6">
                    <div className="absolute inset-0 bg-gradient-to-br from-gray-800/50 to-gray-900/30 border border-gray-700/40 backdrop-blur-sm rounded-2xl group-hover:border-gray-600/60 transition-all duration-300" />
                    
                    <div className="relative z-10 text-center">
                      <metric.icon className={`w-6 h-6 sm:w-8 sm:h-8 ${metric.color} mx-auto mb-3 group-hover:scale-110 transition-transform duration-300`} />
                      <div className="text-lg sm:text-xl font-bold text-white mb-1">{metric.value}</div>
                      <div className="text-xs sm:text-sm text-gray-400">{metric.label}</div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Animated Flow Background */}
        <div className="absolute top-24 left-16 opacity-5">
          <motion.div 
            animate={{ 
              rotate: [0, 360],
              scale: [1, 1.2, 1]
            }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="w-20 h-20 border-2 border-cyan-400/20 rounded-full"
          />
        </div>
        <div className="absolute top-32 right-20 opacity-5">
          <motion.div 
            animate={{ 
              x: [0, 30, 0],
              y: [0, -20, 0]
            }}
            transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
            className="w-16 h-16 bg-gradient-to-br from-purple-500/15 to-cyan-500/10 rounded-2xl transform rotate-45"
          />
        </div>
        <div className="absolute bottom-40 left-24 opacity-5">
          <motion.div 
            animate={{ 
              scale: [1, 1.4, 1],
              opacity: [0.3, 0.6, 0.3]
            }}
            transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
            className="w-12 h-12 border border-purple-400/20 rounded-lg"
          />
        </div>

        {/* Background Gradients */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>
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
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Agentic AI Categories
            </h2>
            <p className="text-gray-400 text-lg">Explore intelligent automation and orchestration frameworks</p>
          </motion.div>

          {/* Category Filter Pills - Flow themed */}
          <div className="flex flex-wrap justify-center gap-3 sm:gap-4 mb-16">
            {categories.map((category, index) => (
              <motion.button
                key={category.id}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                onClick={() => handleCategoryChange(category.id)}
                className={`group flex items-center gap-2 sm:gap-3 px-4 sm:px-6 py-3 sm:py-4 rounded-2xl transition-all duration-300 ${
                  activeCategory === category.id 
                    ? 'bg-gradient-to-r from-cyan-500/30 to-purple-500/20 border-cyan-400/50' 
                    : 'bg-gray-800/40 border-gray-600/30 hover:bg-gray-700/50'
                } border backdrop-blur-sm`}
              >
                <category.icon className="w-4 h-4 sm:w-5 sm:h-5 text-cyan-400" />
                <span className="text-sm sm:text-base font-medium text-white">{category.name}</span>
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* Agentic Tools Showcase */}
      <section className="py-16 sm:py-20 relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-purple-400 to-blue-400 bg-clip-text text-transparent">
              6 Essential Agentic Frameworks
            </h2>
            <p className="text-lg sm:text-xl text-gray-400 max-w-4xl mx-auto">
              Enterprise-grade platforms orchestrating intelligent multi-agent systems
            </p>
          </motion.div>

          {/* Tools Flow Layout */}
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
                {/* Flow Connection Line */}
                {index < filteredTools.length - 1 && (
                  <motion.div
                    initial={{ scaleY: 0 }}
                    whileInView={{ scaleY: 1 }}
                    transition={{ duration: 1, delay: 0.5 }}
                    className="absolute left-1/2 -bottom-8 w-px h-8 bg-gradient-to-b from-cyan-400/30 to-transparent transform -translate-x-1/2 z-0"
                  />
                )}

                <div className="relative bg-gradient-to-br from-gray-900/60 to-gray-800/40 rounded-3xl border border-gray-700/40 backdrop-blur-sm group-hover:border-gray-600/60 transition-all duration-500 overflow-hidden">
                  
                  {/* Flowing Background Pattern */}
                  <div className="absolute inset-0 opacity-5">
                    <motion.div
                      animate={{ 
                        x: [0, 100, 0],
                        y: [0, -50, 0]
                      }}
                      transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                      className="w-full h-full"
                      style={{
                        background: `radial-gradient(circle at 30% 70%, ${tool.color}20 0%, transparent 50%)`
                      }}
                    />
                  </div>

                  <div className="relative z-10 p-8 sm:p-12">
                    
                    {/* Tool Header */}
                    <div className="flex flex-col lg:flex-row lg:items-start gap-8 mb-8">
                      
                      {/* Icon Section */}
                      <div className="flex-shrink-0">
                        <motion.div
                          whileHover={{ scale: 1.05, rotate: 5 }}
                          className="relative"
                        >
                          <div 
                            className="w-24 h-24 sm:w-28 sm:h-28 flex items-center justify-center rounded-3xl border border-gray-600/30 backdrop-blur-sm group-hover:scale-105 transition-all duration-500"
                            style={{ 
                              background: `linear-gradient(135deg, ${tool.color}40, ${tool.color}10)`,
                              boxShadow: `0 20px 40px ${tool.color}25`
                            }}
                          >
                            <tool.icon 
                              className="w-12 h-12 sm:w-14 sm:h-14 transition-all duration-500" 
                              
                            />
                          </div>
                          
                          {/* Flow indicator */}
                          <div className="absolute -top-2 -right-2">
                            <Badge className="bg-gray-900/80 border-gray-600/50 text-gray-200 hover:text-gray-900 pl-15 py-1 text-xs backdrop-blur-md">
                              {tool.category}
                            </Badge>
                          </div>
                        </motion.div>
                      </div>

                      {/* Content Section */}
                      <div className="flex-1 min-w-0">
                        <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-300 group-hover:bg-clip-text transition-all duration-300">
                          {tool.name}
                        </h3>
                        <p className="text-xl sm:text-2xl font-medium mb-6" style={{ color: tool.color }}>
                          {tool.subtitle}
                        </p>
                        <p className="text-gray-300 text-lg leading-relaxed mb-8 max-w-4xl">
                          {tool.description}
                        </p>

                        {/* Features Flow */}
                        <div className="flex flex-wrap gap-3 mb-8">
                          {tool.features.map((feature, featureIndex) => (
                            <div
                              key={featureIndex}
                              className="flex items-center gap-2 px-4 py-2 bg-gray-800/30 rounded-full border border-gray-700/20 hover:bg-gray-700/30 transition-colors duration-300"
                            >
                              <div className="w-2 h-2 rounded-full" style={{ backgroundColor: tool.color }} />
                              <span className="text-gray-300 text-sm font-medium">{feature}</span>
                            </div>
                          ))}
                        </div>

                        {/* Impact Metric */}
                        <div className="flex items-center gap-6 p-6 bg-gray-800/40 rounded-2xl border border-gray-700/30">
                          <div className="flex items-center gap-3">
                            <TrendingUp className="w-6 h-6" style={{ color: tool.color }} />
                            <span className="text-gray-400">Enterprise Impact:</span>
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
                      <div className="p-6 bg-gray-800/30 rounded-2xl border border-gray-700/30">
                        <div className="flex items-center gap-4 mb-6">
                          <div className="w-14 h-14 rounded-2xl bg-gray-700/50 border border-gray-600/30 flex items-center justify-center">
                            <Building2 className="w-7 h-7" style={{ color: tool.color }} />
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
                              <Settings className="w-4 h-4 mr-2" style={{ color: tool.color }} />
                              Implementation
                            </h5>
                            <p className="text-gray-300 text-sm leading-relaxed">
                              {tool.caseStudy.implementation}
                            </p>
                          </div>
                        </div>
                      </div>

                      {/* Results */}
                      <div className="p-6 bg-gray-800/30 rounded-2xl border border-gray-700/30">
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
                        <div className="p-6 bg-gradient-to-r from-gray-800/40 to-gray-700/30 rounded-2xl border border-gray-600/30">
                          <div className="flex items-center justify-between">
                            <div>
                              <div className="text-gray-400 text-sm mb-1">{tool.caseStudy.metrics.category}</div>
                              <div 
                                className="text-4xl font-bold"
                                style={{ color: tool.color }}
                              >
                                {tool.caseStudy.metrics.improvement}
                              </div>
                            </div>
                            <div
                              className="w-16 h-16 rounded-full border-2 border-dashed flex items-center justify-center opacity-60"
                              style={{ borderColor: tool.color }}
                            >
                              <Target className="w-8 h-8" style={{ color: tool.color }} />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Hover Effect */}
                    {hoveredTool === index && (
                      <motion.div
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        className="absolute top-6 right-6 z-20"
                      >
                        <div className="w-12 h-12 rounded-2xl flex items-center justify-center backdrop-blur-sm border border-gray-600/40" 
                             style={{ background: `${tool.color}20` }}>
                          <ArrowUpRight className="w-6 h-6" style={{ color: tool.color }} />
                        </div>
                      </motion.div>
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
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-cyan-500/30 to-purple-500/20 border border-cyan-400/30 flex items-center justify-center backdrop-blur-sm">
                <Network className="w-8 h-8 text-cyan-400" />
              </div>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-8 text-white">
              Orchestrate Intelligent Agent Networks
            </h2>
            <p className="text-lg sm:text-xl text-gray-300 mb-12 leading-relaxed">
              You've explored the frameworks that enable intelligent multi-agent collaboration and automation.
              <br className="hidden sm:block" />
              <span className="text-transparent bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text font-semibold">
                Ready to dive into data science and machine learning? Continue your journey.
              </span>
            </p>
            
            {/* Agentic Success Stats */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto mb-12">
              {[
                { label: "Agentic Frameworks", value: "6 Essential", icon: Network, color: "text-cyan-400" },
                { label: "Enterprise Cases", value: "Fortune 500", icon: Building2, color: "text-purple-400" },
                { label: "Efficiency Gain", value: "20-50%", icon: TrendingUp, color: "text-blue-400" },
                { label: "Automation Level", value: "Multi-Agent", icon: Bot, color: "text-pink-400" }
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
                    <stat.icon className={`w-8 h-8 ${stat.color} mx-auto mb-3 group-hover:animate-pulse`} />
                    <div className="text-2xl font-bold text-white mb-2">{stat.value}</div>
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
                  href="/flagship-course/module/ai-powered-software-development-testing"
                  className="group flex items-center gap-4 px-8 py-6 bg-gradient-to-r from-gray-800/60 to-gray-700/50 border border-gray-600/30 rounded-2xl text-white hover:from-gray-700/60 hover:to-gray-600/50 hover:border-gray-500/40 transition-all duration-300 backdrop-blur-sm"
                >
                  <ChevronLeft className="w-6 h-6 text-gray-400 group-hover:-translate-x-1 transition-transform duration-300" />
                  <div className="text-left">
                    <div className="text-lg font-bold">Previous Module</div>
                    <div className="text-sm text-gray-300">Software Development & Testing</div>
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
                  href="/flagship-course/module/core-data-science-generative-ai-skills"
                  className="group flex items-center gap-4 px-8 py-6 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-400/30 rounded-2xl text-white hover:from-cyan-500/30 hover:to-purple-500/30 hover:border-cyan-400/50 transition-all duration-300 backdrop-blur-sm"
                >
                  <div className="text-left">
                    <div className="text-lg font-bold">Continue to Module 5</div>
                    <div className="text-sm text-gray-300">Data Science & Machine Learning</div>
                  </div>
                  <ChevronRight className="w-6 h-6 text-cyan-400 group-hover:translate-x-1 transition-transform duration-300" />
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Background Effects */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-cyan-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-purple-500/5 rounded-full blur-3xl"></div>
      </footer>
    </div>
  );
}
