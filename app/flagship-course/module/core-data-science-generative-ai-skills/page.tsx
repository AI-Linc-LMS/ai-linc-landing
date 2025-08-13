"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import {
  Brain,
  Database,
  Sparkles,
  Cpu,
  BarChart3,
  Zap,
  Target,
  TrendingUp,
  Music,
  Search,
  FileText,
  MessageSquare,
  Route,
  DollarSign,
  Users,
  Clock,
  Award,
  Layers,
  Code2,
  Palette,
  Bot,
  ChartBar,
  Globe,
  Building2,
  Eye,
  Headphones,
  Film,
  Phone,
  Car,
  Newspaper,
  ArrowUpRight,
  Lightbulb,
  Atom,
  Network,
} from "lucide-react";

interface DataScienceTool {
  id: string;
  name: string;
  icon: React.ComponentType<{ className?: string }>;
  category: string;
  subtitle: string;
  description: string;
  caseStudy: {
    company: string;
    industry: string;
    benefit: string;
    outcome: string;
    metrics: {
      improvement: string;
      impact: string;
      category: string;
    };
  };
  color: string;
  bgPattern: string;
  techStack: string[];
}

const dataScienceTools: DataScienceTool[] = [
  {
    id: "openai-gpt4",
    name: "OpenAI GPT-4 / Claude 4 / Gemini",
    icon: Brain,
    category: "Language Models",
    subtitle: "Next-Gen Conversational Intelligence",
    description:
      "Advanced large language models transforming enterprise natural language processing and intelligent data interaction capabilities.",
    caseStudy: {
      company: "Microsoft",
      industry: "Cloud Computing",
      benefit:
        "Microsoft integrated GPT-4 into their Azure services to provide natural language processing capabilities. This tool helped streamline enterprise search engines and enable businesses to interact with their data more efficiently.",
      outcome:
        "Azure's enterprise AI search capabilities improved by 30%, enhancing data access and retrieval speed for clients.",
      metrics: {
        improvement: "30%",
        impact: "Enhanced Search",
        category: "Enterprise AI",
      },
    },
    color: "#00D2FF",
    bgPattern: "from-cyan-500/20 via-blue-500/15 to-indigo-500/10",
    techStack: ["GPT-4", "Claude 4", "Gemini", "Azure AI"],
  },
  {
    id: "huggingface",
    name: "Hugging Face Hub (Transformers)",
    icon: Atom,
    category: "Model Hub",
    subtitle: "Open-Source AI Ecosystem",
    description:
      "Comprehensive transformer model library enabling rapid deployment of state-of-the-art NLP models for personalized user experiences.",
    caseStudy: {
      company: "Spotify",
      industry: "Music Streaming",
      benefit:
        "Spotify uses Hugging Face Transformers to fine-tune models for music recommendation. They employed NLP to better understand user feedback and tailor content.",
      outcome:
        "Enhanced playlist recommendations, resulting in a 15% increase in user engagement.",
      metrics: {
        improvement: "15%",
        impact: "User Engagement",
        category: "Personalization",
      },
    },
    color: "#FFB800",
    bgPattern: "from-amber-500/20 via-yellow-500/15 to-orange-500/10",
    techStack: ["Transformers", "NLP", "Model Fine-tuning", "Recommendation"],
  },
  {
    id: "tensorflow-pytorch",
    name: "TensorFlow / PyTorch + AutoML",
    icon: Cpu,
    category: "Deep Learning",
    subtitle: "Automated Machine Learning Pipeline",
    description:
      "Industry-leading deep learning frameworks with automated model optimization for scalable AI solution development.",
    caseStudy: {
      company: "Facebook AI Research",
      industry: "Social Technology",
      benefit:
        "Facebook AI Research used TensorFlow and PyTorch for creating deep learning models. With AutoML, they automated the model training process, reducing manual intervention in hyperparameter tuning.",
      outcome:
        "Increased model efficiency by 25%, improving facial recognition accuracy and personalization algorithms.",
      metrics: {
        improvement: "25%",
        impact: "Model Efficiency",
        category: "Computer Vision",
      },
    },
    color: "#FF6B6B",
    bgPattern: "from-red-500/20 via-pink-500/15 to-rose-500/10",
    techStack: ["TensorFlow", "PyTorch", "AutoML", "Deep Learning"],
  },
  {
    id: "runway-midjourney",
    name: "Runway ML / DreamStudio / Midjourney",
    icon: Palette,
    category: "Creative AI",
    subtitle: "Visual Content Generation Revolution",
    description:
      "Cutting-edge generative AI platforms for creating stunning visual content, concept art, and special effects at unprecedented speed.",
    caseStudy: {
      company: "Warner Bros",
      industry: "Entertainment",
      benefit:
        "Warner Bros used Midjourney and DreamStudio for generating visual content and special effects for films. This allowed their creative teams to generate conceptual visuals and design elements quickly during production.",
      outcome:
        "Reduced creative content generation time by 40%, speeding up pre-production and design iterations.",
      metrics: {
        improvement: "40%",
        impact: "Production Speed",
        category: "Creative Workflow",
      },
    },
    color: "#9C27B0",
    bgPattern: "from-purple-500/20 via-violet-500/15 to-fuchsia-500/10",
    techStack: ["Midjourney", "DreamStudio", "Runway ML", "Creative AI"],
  },
  {
    id: "rasa-spacy",
    name: "Rasa / spaCy / Hugging Face NLP",
    icon: MessageSquare,
    category: "Conversational AI",
    subtitle: "Intelligent Customer Interaction",
    description:
      "Advanced NLP frameworks for building sophisticated chatbots and conversational AI systems that understand complex user queries.",
    caseStudy: {
      company: "Vodafone",
      industry: "Telecommunications",
      benefit:
        "Vodafone used Rasa and spaCy to develop an NLP-powered customer service chatbot that can understand complex queries and automate customer interactions.",
      outcome:
        "Increased customer service efficiency by 30%, with a significant reduction in manual handling of customer queries.",
      metrics: {
        improvement: "30%",
        impact: "Service Efficiency",
        category: "Customer Support",
      },
    },
    color: "#4CAF50",
    bgPattern: "from-green-500/20 via-emerald-500/15 to-teal-500/10",
    techStack: ["Rasa", "spaCy", "NLP", "Chatbots"],
  },
  {
    id: "weights-biases",
    name: "Weights & Biases / Comet",
    icon: BarChart3,
    category: "ML Operations",
    subtitle: "Experiment Tracking & Optimization",
    description:
      "Professional MLOps platforms for tracking experiments, optimizing model performance, and managing machine learning workflows at scale.",
    caseStudy: {
      company: "Uber",
      industry: "Transportation",
      benefit:
        "Uber used Weights & Biases for tracking experiments in their machine learning models related to driver behavior and route optimization.",
      outcome:
        "Improved model accuracy by 25%, leading to better route recommendations and reduced driver idle time.",
      metrics: {
        improvement: "25%",
        impact: "Model Accuracy",
        category: "Route Optimization",
      },
    },
    color: "#FF9800",
    bgPattern: "from-orange-500/20 via-amber-500/15 to-yellow-500/10",
    techStack: ["W&B", "Comet", "MLOps", "Experiment Tracking"],
  },
  {
    id: "langchain-rag",
    name: "LangChain/OpenAI RAG Applications",
    icon: Network,
    category: "Knowledge Systems",
    subtitle: "Context-Aware Information Retrieval",
    description:
      "Sophisticated retrieval-augmented generation systems that provide contextually relevant answers from vast knowledge bases.",
    caseStudy: {
      company: "Bloomberg",
      industry: "Financial Services",
      benefit:
        "Bloomberg integrated LangChain and OpenAI's GPT models into their financial news apps, enabling users to query financial reports and get real-time, context-aware answers.",
      outcome:
        "Increased customer engagement by 20%, as users found the AI-generated insights more relevant and accurate.",
      metrics: {
        improvement: "20%",
        impact: "User Engagement",
        category: "Financial Intelligence",
      },
    },
    color: "#3F51B5",
    bgPattern: "from-indigo-500/20 via-blue-500/15 to-cyan-500/10",
    techStack: ["LangChain", "RAG", "OpenAI", "Knowledge Retrieval"],
  },
];

export default function CoreDataScienceGenerativeAISkills() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-gray-950 via-slate-900 to-black text-white relative overflow-hidden">
      {/* Hero Section */}
      <section className="relative py-16 sm:py-20 lg:py-24 overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-center mb-20"
          >
            <Badge className="mb-8 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border-cyan-500/30 text-cyan-300 text-sm font-medium px-8 py-3">
              Module 5 • Core Data Science & Generative AI Skills
            </Badge>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold mb-8 leading-tight">
              <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
                Core Data Science &
              </span>
              <br />
              <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-orange-400 bg-clip-text text-transparent">
                Generative AI Skills
              </span>
            </h1>

            <p className="text-lg sm:text-xl lg:text-2xl text-gray-300 max-w-5xl mx-auto mb-12 leading-relaxed">
              Master the essential tools and frameworks that power modern AI
              applications.
              <br className="hidden sm:block" />
              <span className="text-transparent bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text font-semibold">
                From language models to computer vision, build tomorrow's
                intelligent systems.
              </span>
            </p>

            {/* Key Technology Domains */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 max-w-6xl mx-auto">
              {[
                {
                  icon: Brain,
                  label: "Language Models",
                  color: "text-cyan-400",
                  count: "GPT-4 & Beyond",
                },
                {
                  icon: Cpu,
                  label: "Deep Learning",
                  color: "text-purple-400",
                  count: "AutoML Ready",
                },
                {
                  icon: Palette,
                  label: "Creative AI",
                  color: "text-pink-400",
                  count: "Visual Generation",
                },
                {
                  icon: BarChart3,
                  label: "MLOps",
                  color: "text-orange-400",
                  count: "Production Scale",
                },
              ].map((domain, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8, delay: 0.3 + index * 0.1 }}
                  className="flex flex-col items-center p-4 sm:p-6 rounded-2xl bg-gradient-to-br from-gray-800/40 to-gray-900/20 border border-gray-700/30 backdrop-blur-sm group hover:scale-105 transition-all duration-300"
                >
                  <domain.icon
                    className={`w-8 h-8 sm:w-10 sm:h-10 ${domain.color} mb-3 group-hover:animate-pulse`}
                  />
                  <span className="text-sm sm:text-base font-semibold text-white mb-1">
                    {domain.label}
                  </span>
                  <span className="text-xs text-gray-400">{domain.count}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Floating Geometric Elements - Simplified */}
        <div className="absolute top-20 left-10 opacity-10">
          <div className="w-16 h-16 bg-gradient-to-br from-cyan-500/20 to-blue-500/10 rounded-2xl border border-gray-600/20" />
        </div>
        <div className="absolute top-32 right-16 opacity-10">
          <div className="w-12 h-12 bg-gradient-to-br from-purple-500/20 to-violet-500/10 rounded-2xl border border-gray-600/20" />
        </div>
        <div className="absolute bottom-20 left-20 opacity-10">
          <div className="w-14 h-14 bg-gradient-to-br from-orange-500/20 to-amber-500/10 rounded-2xl border border-gray-600/20" />
        </div>

        {/* Background Gradients */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>
      </section>

      {/* Tools Showcase */}
      <section className="py-16 sm:py-20 relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-2xl sm:text-3xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              7 Essential AI Technology Stacks
            </h2>
            <p className="text-lg sm:text-xl text-gray-400 max-w-3xl mx-auto">
              Industry-proven tools driving innovation at global enterprises
            </p>
          </motion.div>

          {/* Tools Grid with Unique Layouts */}
          <div className="space-y-8 lg:space-y-12">
            {dataScienceTools.map((tool, index) => (
              <motion.div
                key={tool.id}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
                onMouseEnter={() => setActiveIndex(index)}
                onMouseLeave={() => setActiveIndex(null)}
              >
                {/* Alternating Layout Pattern */}
                <div
                  className={`flex flex-col ${
                    index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                  } gap-8 lg:gap-12`}
                >
                  {/* Visual Section */}
                  <div className="flex-1 relative">
                    <div
                      className={`relative p-8 sm:p-10 lg:p-12 rounded-3xl bg-gradient-to-br ${tool.bgPattern} border border-gray-700/30 overflow-hidden group-hover:border-gray-600/50 transition-all duration-300`}
                    >
                      {/* Icon & Category */}
                      <div className="relative z-10 flex flex-col items-center text-center">
                        <motion.div
                          whileHover={{ scale: 1.05 }}
                          className="w-24 h-24 sm:w-28 sm:h-28 lg:w-32 lg:h-32 rounded-3xl flex items-center justify-center mb-6"
                          style={{
                            background: `linear-gradient(135deg, ${tool.color}40, ${tool.color}20)`,
                            boxShadow: `0 10px 30px ${tool.color}20`,
                          }}
                        >
                          <tool.icon className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16" />
                        </motion.div>

                        <Badge className="mb-4 bg-gray-800/50 text-gray-300 text-sm px-4 py-2">
                          {tool.category}
                        </Badge>

                        <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white mb-3">
                          {tool.name}
                        </h3>

                        <p
                          className="text-lg font-medium mb-6"
                          style={{ color: tool.color }}
                        >
                          {tool.subtitle}
                        </p>

                        {/* Tech Stack Pills */}
                        <div className="flex flex-wrap gap-2 justify-center">
                          {tool.techStack.map((tech, techIndex) => (
                            <span
                              key={techIndex}
                              className="text-xs px-3 py-1 rounded-full bg-gray-800/60 text-gray-300 border border-gray-600/30"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Content Section */}
                  <div className="flex-1 space-y-6">
                    {/* Description */}
                    <div>
                      <p className="text-gray-300 text-base sm:text-lg leading-relaxed mb-6">
                        {tool.description}
                      </p>
                    </div>

                    {/* Case Study Card */}
                    <div className="bg-gray-900/50 rounded-2xl p-6 sm:p-8 border border-gray-700/40 backdrop-blur-sm">
                      {/* Company Header */}
                      <div className="flex items-center gap-4 mb-6">
                        <div className="flex items-center gap-3">
                          <Building2
                            className="w-6 h-6"
                            style={{ color: tool.color }}
                          />
                          <div>
                            <h4 className="text-lg sm:text-xl font-bold text-white">
                              {tool.caseStudy.company}
                            </h4>
                            <p className="text-sm text-gray-400">
                              {tool.caseStudy.industry}
                            </p>
                          </div>
                        </div>

                        {/* Impact Badge */}
                        <div className="ml-auto">
                          <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-gray-800/50 border border-gray-600/30">
                            <TrendingUp
                              className="w-4 h-4"
                              style={{ color: tool.color }}
                            />
                            <span
                              className="font-bold text-lg"
                              style={{ color: tool.color }}
                            >
                              {tool.caseStudy.metrics.improvement}
                            </span>
                          </div>
                        </div>
                      </div>

                      {/* Implementation Details */}
                      <div className="space-y-4">
                        <div className="bg-gray-800/40 rounded-xl p-4 border border-gray-700/20">
                          <h5 className="text-white font-semibold mb-2 flex items-center">
                            <Lightbulb
                              className="w-4 h-4 mr-2"
                              style={{ color: tool.color }}
                            />
                            Implementation Strategy
                          </h5>
                          <p className="text-gray-300 text-sm leading-relaxed">
                            {tool.caseStudy.benefit}
                          </p>
                        </div>

                        <div className="bg-gray-800/40 rounded-xl p-4 border border-gray-700/20">
                          <h5 className="text-white font-semibold mb-2 flex items-center">
                            <Award className="w-4 h-4 mr-2 text-green-400" />
                            Business Impact
                          </h5>
                          <p className="text-green-300 text-sm font-medium">
                            {tool.caseStudy.outcome}
                          </p>
                        </div>
                      </div>

                      {/* Metrics Row */}
                      <div className="flex gap-4 mt-6">
                        <div className="flex-1 text-center p-3 bg-gray-800/30 rounded-xl border border-gray-700/20">
                          <div
                            className="text-xl font-bold mb-1"
                            style={{ color: tool.color }}
                          >
                            {tool.caseStudy.metrics.improvement}
                          </div>
                          <div className="text-xs text-gray-400">
                            {tool.caseStudy.metrics.impact}
                          </div>
                        </div>
                        <div className="flex-1 text-center p-3 bg-gray-800/30 rounded-xl border border-gray-700/20">
                          <div className="text-lg font-bold text-white mb-1">
                            Enterprise
                          </div>
                          <div className="text-xs text-gray-400">
                            {tool.caseStudy.metrics.category}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Hover Expansion Details - Optimized */}
                {activeIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    transition={{ duration: 0.2 }}
                    className="overflow-hidden mt-6"
                  >
                    <div className="p-6 bg-gray-800/20 rounded-2xl border border-gray-700/30">
                      <h5 className="text-white font-semibold mb-4 flex items-center">
                        <Sparkles
                          className="w-4 h-4 mr-2"
                          style={{ color: tool.color }}
                        />
                        Complete Technology Stack
                      </h5>
                      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                        {tool.techStack.map((tech, techIndex) => (
                          <div
                            key={techIndex}
                            className="p-3 bg-gray-700/40 rounded-lg text-center border border-gray-600/30"
                          >
                            <span className="text-sm font-medium text-gray-300">
                              {tech}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>

          {/* Mobile Summary Grid - Simplified */}
          <div className="block sm:hidden mt-16">
            <h3 className="text-xl font-bold text-white mb-8 text-center">
              Technology Impact Summary
            </h3>
            <div className="grid grid-cols-1 gap-4">
              {dataScienceTools.map((tool, index) => (
                <div
                  key={`mobile-${tool.id}`}
                  className="p-4 bg-gray-800/30 rounded-2xl border border-gray-700/30"
                >
                  <div className="flex items-center gap-4">
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                      style={{ backgroundColor: `${tool.color}20` }}
                    >
                      <tool.icon className="w-6 h-6" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="text-base font-bold text-white mb-1 truncate">
                        {tool.name}
                      </h4>
                      <p className="text-sm text-gray-400">
                        {tool.caseStudy.company}
                      </p>
                    </div>
                    <div className="text-right">
                      <div
                        className="text-lg font-bold"
                        style={{ color: tool.color }}
                      >
                        {tool.caseStudy.metrics.improvement}
                      </div>
                      <div className="text-xs text-gray-400">Impact</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Bottom Impact Section */}
      <section className="py-16 sm:py-20 bg-gradient-to-r from-gray-900/40 via-slate-900/30 to-gray-900/40 relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-5xl mx-auto"
          >
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-8 text-white">
              The Future of AI is in Your Hands
            </h2>
            <p className="text-lg sm:text-xl text-gray-300 mb-12 leading-relaxed">
              Master these cutting-edge data science and generative AI tools to
              build the next generation of intelligent applications.
              <br className="hidden sm:block" />
              <span className="text-transparent bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text font-semibold">
                Join the revolution transforming how we interact with data and
                creativity.
              </span>
            </p>

            {/* Final Stats Grid - Simplified */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
              {[
                {
                  label: "Enterprise Adoption",
                  value: "Fortune 500",
                  icon: Building2,
                  color: "text-cyan-400",
                },
                {
                  label: "Performance Gains",
                  value: "Up to 40%",
                  icon: TrendingUp,
                  color: "text-purple-400",
                },
                {
                  label: "Industry Coverage",
                  value: "7 Sectors",
                  icon: Globe,
                  color: "text-orange-400",
                },
                {
                  label: "Technology Stack",
                  value: "28+ Tools",
                  icon: Layers,
                  color: "text-green-400",
                },
              ].map((stat, index) => (
                <div
                  key={index}
                  className="p-6 rounded-2xl bg-gray-800/40 border border-gray-700/30 backdrop-blur-sm"
                >
                  <stat.icon className={`w-8 h-8 ${stat.color} mx-auto mb-3`} />
                  <div className="text-xl font-bold text-white mb-2">
                    {stat.value}
                  </div>
                  <div className="text-sm text-gray-400">{stat.label}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Background Effects */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-cyan-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-purple-500/5 rounded-full blur-3xl"></div>
      </section>
    </div>
  );
}
