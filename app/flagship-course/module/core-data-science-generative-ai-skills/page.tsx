"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import {
  Brain,
  Database,
  Zap,
  Cpu,
  Network,
  BarChart3,
  Eye,
  MessageSquare,
  ChevronLeft,
  ChevronRight,
  Building2,
  Award,
  TrendingUp,
  Sparkles,
  ArrowUpRight,
  Activity,
  Layers,
  Code,
  Image,
  Music,
  Search,
  Bot,
  Gauge,
  Target,
  PlayCircle,
  GitBranch,
  Lightbulb,
  Atom,
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
    implementation: string;
    outcome: string;
    metrics: {
      improvement: string;
      impact: string;
      category: string;
    };
  };
  color: string;
  neuralPattern: string;
  features: string[];
  neuralConnections: number[];
}

const dataScienceTools: DataScienceTool[] = [
  {
    id: "openai-gpt",
    name: "OpenAI GPT-4 / Claude 4 / Gemini",
    icon: Brain,
    category: "Large Language Models",
    subtitle: "Advanced Conversational AI & NLP",
    description:
      "State-of-the-art language models powering next-generation natural language processing, enterprise search, and intelligent data interaction systems.",
    caseStudy: {
      company: "Microsoft",
      industry: "Cloud Computing & Enterprise Services",
      implementation:
        "Microsoft integrated GPT-4 into their Azure services to provide natural language processing capabilities. This tool helped streamline enterprise search engines and enable businesses to interact with their data more efficiently.",
      outcome:
        "Azure's enterprise AI search capabilities improved by 30%, enhancing data access and retrieval speed for clients.",
      metrics: {
        improvement: "30%",
        impact: "Search Efficiency",
        category: "Enterprise AI",
      },
    },
    color: "#10B981",
    neuralPattern: "from-emerald-500/20 via-green-400/10 to-teal-500/5",
    features: [
      "Natural Language Processing",
      "Enterprise Search",
      "Data Interaction",
      "Azure Integration",
    ],
    neuralConnections: [0, 45, 90, 135, 180, 225, 270, 315],
  },
  {
    id: "huggingface-transformers",
    name: "Hugging Face Hub (Transformers)",
    icon: Activity,
    category: "Model Fine-tuning & NLP",
    subtitle: "Pre-trained Transformer Models",
    description:
      "Comprehensive library of pre-trained models enabling rapid deployment of state-of-the-art NLP solutions for recommendation systems and content personalization.",
    caseStudy: {
      company: "Spotify",
      industry: "Music Streaming & Entertainment",
      implementation:
        "Spotify uses Hugging Face Transformers to fine-tune models for music recommendation. They employed NLP to better understand user feedback and tailor content.",
      outcome:
        "Enhanced playlist recommendations, resulting in a 15% increase in user engagement.",
      metrics: {
        improvement: "15%",
        impact: "User Engagement",
        category: "Recommendation Systems",
      },
    },
    color: "#F59E0B",
    neuralPattern: "from-amber-500/20 via-orange-400/10 to-yellow-500/5",
    features: [
      "Model Fine-tuning",
      "Music Recommendations",
      "User Feedback Analysis",
      "Content Personalization",
    ],
    neuralConnections: [30, 75, 120, 165, 210, 255, 300, 345],
  },
  {
    id: "tensorflow-pytorch",
    name: "TensorFlow / PyTorch + AutoML",
    icon: Cpu,
    category: "Deep Learning Frameworks",
    subtitle: "Automated Machine Learning Pipeline",
    description:
      "Industry-leading deep learning frameworks with AutoML capabilities for automated model training, hyperparameter optimization, and scalable AI deployment.",
    caseStudy: {
      company: "Facebook AI Research",
      industry: "Social Media & AI Research",
      implementation:
        "Facebook AI Research used TensorFlow and PyTorch for creating deep learning models. With AutoML, they automated the model training process, reducing manual intervention in hyperparameter tuning.",
      outcome:
        "Increased model efficiency by 25%, improving facial recognition accuracy and personalization algorithms.",
      metrics: {
        improvement: "25%",
        impact: "Model Efficiency",
        category: "Deep Learning",
      },
    },
    color: "#8B5CF6",
    neuralPattern: "from-purple-500/20 via-violet-400/10 to-indigo-500/5",
    features: [
      "Deep Learning Models",
      "AutoML Training",
      "Hyperparameter Tuning",
      "Facial Recognition",
    ],
    neuralConnections: [15, 60, 105, 150, 195, 240, 285, 330],
  },
  {
    id: "runway-midjourney",
    name: "Runway ML / DreamStudio / Midjourney",
    icon: Image,
    category: "Generative AI for Creative Content",
    subtitle: "AI-Powered Creative Generation",
    description:
      "Cutting-edge generative AI platforms for creating visual content, special effects, and creative assets with unprecedented speed and quality.",
    caseStudy: {
      company: "Warner Bros",
      industry: "Entertainment & Film Production",
      implementation:
        "Warner Bros used Midjourney and DreamStudio for generating visual content and special effects for films. This allowed their creative teams to generate conceptual visuals and design elements quickly during production.",
      outcome:
        "Reduced creative content generation time by 40%, speeding up pre-production and design iterations.",
      metrics: {
        improvement: "40%",
        impact: "Content Generation Speed",
        category: "Creative Production",
      },
    },
    color: "#EF4444",
    neuralPattern: "from-red-500/20 via-pink-400/10 to-rose-500/5",
    features: [
      "Visual Content Generation",
      "Special Effects",
      "Conceptual Design",
      "Production Acceleration",
    ],
    neuralConnections: [22, 67, 112, 157, 202, 247, 292, 337],
  },
  {
    id: "rasa-spacy",
    name: "Rasa / spaCy / Hugging Face NLP",
    icon: MessageSquare,
    category: "Conversational AI & NLP",
    subtitle: "Advanced Chatbot Development",
    description:
      "Comprehensive NLP toolkit for building intelligent conversational interfaces, chatbots, and automated customer service systems with complex query understanding.",
    caseStudy: {
      company: "Vodafone",
      industry: "Telecommunications",
      implementation:
        "Vodafone used Rasa and spaCy to develop an NLP-powered customer service chatbot that can understand complex queries and automate customer interactions.",
      outcome:
        "Increased customer service efficiency by 30%, with a significant reduction in manual handling of customer queries.",
      metrics: {
        improvement: "30%",
        impact: "Service Efficiency",
        category: "Customer Automation",
      },
    },
    color: "#3B82F6",
    neuralPattern: "from-blue-500/20 via-sky-400/10 to-cyan-500/5",
    features: [
      "Chatbot Development",
      "Complex Query Understanding",
      "Customer Automation",
      "Service Efficiency",
    ],
    neuralConnections: [37, 82, 127, 172, 217, 262, 307, 352],
  },
  {
    id: "weights-biases",
    name: "Weights & Biases / Comet",
    icon: BarChart3,
    category: "ML Experiment Tracking",
    subtitle: "Model Performance Monitoring",
    description:
      "Advanced experiment tracking and model monitoring platforms for optimizing machine learning workflows, tracking performance metrics, and ensuring model reliability.",
    caseStudy: {
      company: "Uber",
      industry: "Transportation & Mobility",
      implementation:
        "Uber used Weights & Biases for tracking experiments in their machine learning models related to driver behavior and route optimization.",
      outcome:
        "Improved model accuracy by 25%, leading to better route recommendations and reduced driver idle time.",
      metrics: {
        improvement: "25%",
        impact: "Model Accuracy",
        category: "Route Optimization",
      },
    },
    color: "#06B6D4",
    neuralPattern: "from-cyan-500/20 via-teal-400/10 to-blue-500/5",
    features: [
      "Experiment Tracking",
      "Driver Behavior Analysis",
      "Route Optimization",
      "Performance Monitoring",
    ],
    neuralConnections: [52, 97, 142, 187, 232, 277, 322, 7],
  },
  {
    id: "langchain-rag",
    name: "LangChain/OpenAI RAG Apps",
    icon: Network,
    category: "Retrieval-Augmented Generation",
    subtitle: "Context-Aware AI Applications",
    description:
      "Advanced RAG systems combining large language models with external knowledge bases for real-time, context-aware responses in specialized domains.",
    caseStudy: {
      company: "Bloomberg",
      industry: "Financial Services & Media",
      implementation:
        "Bloomberg integrated LangChain and OpenAI's GPT models into their financial news apps, enabling users to query financial reports and get real-time, context-aware answers.",
      outcome:
        "Increased customer engagement by 20%, as users found the AI-generated insights more relevant and accurate.",
      metrics: {
        improvement: "20%",
        impact: "Customer Engagement",
        category: "Financial AI",
      },
    },
    color: "#EC4899",
    neuralPattern: "from-pink-500/20 via-rose-400/10 to-purple-500/5",
    features: [
      "RAG Systems",
      "Financial Reports",
      "Real-time Answers",
      "Context Awareness",
    ],
    neuralConnections: [67, 112, 157, 202, 247, 292, 337, 22],
  },
];

export default function CoreDataScienceGenerativeAISkills() {
  const [hoveredTool, setHoveredTool] = useState<number | null>(null);
  const [activeCategory, setActiveCategory] = useState<string>("all");

  const categories = [
    { id: "all", name: "All Tools", icon: Database },
    { id: "llm", name: "Language Models", icon: Brain },
    { id: "deep-learning", name: "Deep Learning", icon: Cpu },
    { id: "generative", name: "Generative AI", icon: Sparkles },
    { id: "nlp", name: "NLP & Chatbots", icon: MessageSquare },
  ];

  const filteredTools = React.useMemo(() => {
    if (activeCategory === "all") return dataScienceTools;

    switch (activeCategory) {
      case "llm":
        return dataScienceTools.filter((tool) =>
          ["Large Language Models", "Retrieval-Augmented Generation"].includes(
            tool.category
          )
        );
      case "deep-learning":
        return dataScienceTools.filter((tool) =>
          ["Deep Learning Frameworks", "ML Experiment Tracking"].includes(
            tool.category
          )
        );
      case "generative":
        return dataScienceTools.filter((tool) =>
          ["Generative AI for Creative Content"].includes(tool.category)
        );
      case "nlp":
        return dataScienceTools.filter((tool) =>
          ["Model Fine-tuning & NLP", "Conversational AI & NLP"].includes(
            tool.category
          )
        );
      default:
        return dataScienceTools;
    }
  }, [activeCategory]);

  const handleHover = React.useCallback((index: number | null) => {
    setHoveredTool(index);
  }, []);

  const handleCategoryChange = React.useCallback((categoryId: string) => {
    setActiveCategory(categoryId);
  }, []);

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-slate-950 via-purple-950/20 to-slate-950 text-white relative overflow-hidden">
      {/* Navigation Links - Neural Network Style */}
      <div className="fixed top-6 left-6 right-6 z-50 flex justify-between items-center">
        <Link
          href="/flagship-course/module/agentic-ai-automation-strategies"
          className="group flex items-center gap-3 px-5 py-3 bg-gradient-to-r from-slate-800/90 to-purple-800/30 backdrop-blur-md rounded-2xl border border-purple-500/30 text-gray-300 hover:text-white hover:from-slate-700/90 hover:to-purple-700/40 transition-all duration-300 shadow-lg"
        >
          <ChevronLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform duration-300" />
          <span className="text-sm font-medium hidden sm:block">Module 4</span>
        </Link>

        <Badge className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 border-purple-400/30 text-purple-900 text-sm font-medium px-8 py-3 shadow-lg backdrop-blur-sm">
          Module 5 • Core Data Science & Generative AI Skills
        </Badge>

        <Link
          href="/flagship-course/module/business-applications-of-ai"
          className="group flex items-center gap-3 px-5 py-3 bg-gradient-to-r from-slate-800/90 to-purple-800/30 backdrop-blur-md rounded-2xl border border-purple-500/30 text-gray-300 hover:text-white hover:from-slate-700/90 hover:to-purple-700/40 transition-all duration-300 shadow-lg"
        >
          <span className="text-sm font-medium hidden sm:block">Module 6</span>
          <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
        </Link>
      </div>

      {/* Hero Section - Neural Network Theme */}
      <section className="relative py-20 sm:py-24 lg:py-32 overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2 }}
            className="text-center mb-20"
          >
            {/* Neural Brain Symbol */}
            <div className="flex justify-center mb-12">
              <motion.div
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 1, delay: 0.3 }}
                className="relative"
              >
                <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-full bg-gradient-to-br from-purple-500/30 to-pink-500/20 border border-purple-400/30 flex items-center justify-center backdrop-blur-sm">
                  <Brain className="w-12 h-12 sm:w-14 sm:h-14 text-purple-400" />
                </div>

                {/* Neural connection pulses */}
                {[0, 60, 120, 180, 240, 300].map((angle, index) => (
                  <motion.div
                    key={index}
                    animate={{
                      scale: [1, 1.5, 1],
                      opacity: [0.3, 0.8, 0.3],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      delay: index * 0.8,
                      ease: "easeInOut",
                    }}
                    className="absolute inset-0 flex items-center justify-center"
                  >
                    <div
                      className="absolute w-2 h-2 bg-purple-400 rounded-full"
                      style={{
                        transform: `rotate(${angle}deg) translateY(-50px)`,
                      }}
                    />
                  </motion.div>
                ))}

                {/* Synaptic connections */}
                <motion.div
                  animate={{
                    rotate: [0, 360],
                  }}
                  transition={{
                    duration: 30,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  className="absolute inset-0 border border-dashed border-purple-400/20 rounded-full scale-150"
                />
              </motion.div>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-bold mb-8 leading-tight">
              <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
                Core Data Science &
              </span>
              <br />
              <span className="bg-gradient-to-r from-pink-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
                Generative AI Skills
              </span>
            </h1>

            <p className="text-lg sm:text-xl lg:text-2xl text-gray-300 max-w-5xl mx-auto mb-12 leading-relaxed">
              Master essential data science frameworks and generative AI tools
              powering modern intelligent systems.
              <br className="hidden sm:block" />
              <span className="text-transparent bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text font-semibold">
                From neural networks to creative AI generation and enterprise ML
                deployment.
              </span>
            </p>

            {/* Neural Network Metrics */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 max-w-6xl mx-auto">
              {[
                {
                  icon: Brain,
                  label: "AI Models",
                  value: "7 Essential",
                  color: "text-purple-400",
                },
                {
                  icon: TrendingUp,
                  label: "Performance",
                  value: "+40%",
                  color: "text-pink-400",
                },
                {
                  icon: Building2,
                  label: "Enterprise",
                  value: "Fortune 500",
                  color: "text-blue-400",
                },
                {
                  icon: Sparkles,
                  label: "Generative AI",
                  value: "Creative",
                  color: "text-cyan-400",
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
                    <div className="absolute inset-0 bg-gradient-to-br from-purple-800/30 to-gray-900/30 border border-purple-600/40 backdrop-blur-sm rounded-2xl group-hover:border-purple-500/60 transition-all duration-300" />

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

        {/* Neural Background Patterns */}
        <div className="absolute top-20 left-12 opacity-10">
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              rotate: [0, 180, 360],
            }}
            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
            className="w-16 h-16 border-2 border-purple-400/30 rounded-lg"
          />
        </div>
        <div className="absolute top-40 right-16 opacity-10">
          <motion.div
            animate={{
              y: [0, -30, 0],
              x: [0, 20, 0],
            }}
            transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
            className="w-12 h-12 bg-gradient-to-br from-pink-500/20 to-purple-500/10 rounded-full"
          />
        </div>
        <div className="absolute bottom-32 left-20 opacity-10">
          <motion.div
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.3, 0.7, 0.3],
            }}
            transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
            className="w-8 h-8 border border-pink-400/30 rounded-full"
          />
        </div>

        {/* Background Gradients */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-pink-500/5 rounded-full blur-3xl"></div>
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
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Data Science & AI Categories
            </h2>
            <p className="text-gray-400 text-lg">
              Explore cutting-edge frameworks and generative AI tools
            </p>
          </motion.div>

          {/* Neural Category Pills */}
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
                    ? "bg-gradient-to-r from-purple-500/30 to-pink-500/20 border-purple-400/50"
                    : "bg-gray-800/40 border-gray-600/30 hover:bg-purple-700/20"
                } border backdrop-blur-sm`}
              >
                <category.icon className="w-4 h-4 sm:w-5 sm:h-5 text-purple-400" />
                <span className="text-sm sm:text-base font-medium text-white">
                  {category.name}
                </span>
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* Data Science Tools Neural Network Layout */}
      <section className="py-16 sm:py-20 relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
              7 Essential Data Science Tools
            </h2>
            <p className="text-lg sm:text-xl text-gray-400 max-w-4xl mx-auto">
              Enterprise-grade frameworks powering modern AI and machine
              learning systems
            </p>
          </motion.div>

          {/* Neural Tools Grid */}
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
                {/* Neural Connection Line */}
                {index < filteredTools.length - 1 && (
                  <motion.div
                    initial={{ scaleY: 0 }}
                    whileInView={{ scaleY: 1 }}
                    transition={{ duration: 1, delay: 0.5 }}
                    className="absolute left-1/2 -bottom-8 w-px h-8 bg-gradient-to-b from-purple-400/30 to-transparent transform -translate-x-1/2 z-0"
                  />
                )}

                <div className="relative bg-gradient-to-br from-gray-900/60 to-purple-900/20 rounded-3xl border border-purple-600/30 backdrop-blur-sm group-hover:border-purple-500/50 transition-all duration-500 overflow-hidden">
                  {/* Neural Pattern Background */}
                  <div className="absolute inset-0 opacity-5">
                    <motion.div
                      animate={{
                        rotate: [0, 360],
                      }}
                      transition={{
                        duration: 60,
                        repeat: Infinity,
                        ease: "linear",
                      }}
                      className="w-full h-full"
                      style={{
                        background: `conic-gradient(from 0deg, ${tool.color}20 0%, transparent 25%, ${tool.color}10 50%, transparent 75%)`,
                      }}
                    />
                  </div>

                  <div className="relative z-10 p-8 sm:p-12">
                    {/* Tool Header */}
                    <div className="flex flex-col lg:flex-row lg:items-start gap-8 mb-8">
                      {/* Neural Icon Section */}
                      <div className="flex-shrink-0">
                        <motion.div
                          whileHover={{ scale: 1.05 }}
                          className="relative"
                        >
                          <div
                            className="w-24 h-24 sm:w-28 sm:h-28 flex items-center justify-center rounded-full border border-purple-500/30 backdrop-blur-sm group-hover:scale-105 transition-all duration-500"
                            style={{
                              background: `radial-gradient(circle, ${tool.color}40, ${tool.color}10)`,
                              boxShadow: `0 20px 40px ${tool.color}25`,
                            }}
                          >
                            <tool.icon
                              className="w-12 h-12 sm:w-14 sm:h-14 transition-all duration-500"
                           
                            />
                          </div>

                          {/* Neural synapses */}
                          {tool.neuralConnections.map((angle, connIndex) => (
                            <motion.div
                              key={connIndex}
                              animate={{
                                scale: [1, 1.2, 1],
                                opacity: [0.3, 0.7, 0.3],
                              }}
                              transition={{
                                duration: 3,
                                repeat: Infinity,
                                delay: connIndex * 0.5,
                                ease: "easeInOut",
                              }}
                              className="absolute w-1 h-1 rounded-full"
                              style={{
                                backgroundColor: tool.color,
                                top: "50%",
                                left: "50%",
                                transform: `translate(-50%, -50%) rotate(${angle}deg) translateY(-40px)`,
                              }}
                            />
                          ))}

                          {/* Category badge */}
                          <div className="absolute -top-2 -right-2">
                            <Badge className="bg-purple-900/80 border-purple-500/50 hover:text-purple-900 text-white px-2 py-1 text-xs backdrop-blur-md">
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
                        <p
                          className="text-xl sm:text-2xl font-medium mb-6"
                          style={{ color: tool.color }}
                        >
                          {tool.subtitle}
                        </p>
                        <p className="text-gray-300 text-lg leading-relaxed mb-8 max-w-4xl">
                          {tool.description}
                        </p>

                        {/* Features Neural Network */}
                        <div className="flex flex-wrap gap-3 mb-8">
                          {tool.features.map((feature, featureIndex) => (
                            <div
                              key={featureIndex}
                              className="flex items-center gap-2 px-4 py-2 bg-purple-800/20 rounded-full border border-purple-600/30 hover:bg-purple-700/30 transition-colors duration-300"
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
                        <div className="flex items-center gap-6 p-6 bg-purple-800/20 rounded-2xl border border-purple-600/30">
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
                      <div className="p-6 bg-purple-800/20 rounded-2xl border border-purple-600/30">
                        <div className="flex items-center gap-4 mb-6">
                          <div className="w-14 h-14 rounded-2xl bg-purple-700/30 border border-purple-500/30 flex items-center justify-center">
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
                              <Cpu
                                className="w-4 h-4 mr-2"
                                style={{ color: tool.color }}
                              />
                              Implementation
                            </h5>
                            <p className="text-gray-300 text-sm leading-relaxed">
                              {tool.caseStudy.implementation}
                            </p>
                          </div>
                        </div>
                      </div>

                      {/* Results */}
                      <div className="p-6 bg-purple-800/20 rounded-2xl border border-purple-600/30">
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
                        <div className="p-6 bg-gradient-to-r from-purple-800/30 to-gray-700/20 rounded-2xl border border-purple-500/30">
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
                              className="w-16 h-16 rounded-full border-2 border-dashed flex items-center justify-center opacity-60"
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
                      <motion.div
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        className="absolute top-6 right-6 z-20"
                      >
                        <div
                          className="w-12 h-12 rounded-2xl flex items-center justify-center backdrop-blur-sm border border-purple-500/40"
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
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer Section with Navigation CTAs */}
      <footer className="py-16 sm:py-20 bg-gradient-to-r from-purple-900/30 via-slate-900/40 to-purple-900/30 relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-5xl mx-auto"
          >
            <div className="flex justify-center mb-8">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-purple-500/30 to-pink-500/20 border border-purple-400/30 flex items-center justify-center backdrop-blur-sm">
                <Brain className="w-8 h-8 text-purple-400" />
              </div>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-8 text-white">
              Master Data Science & Generative AI
            </h2>
            <p className="text-lg sm:text-xl text-gray-300 mb-12 leading-relaxed">
              You've explored the essential frameworks powering modern AI
              systems and data science workflows.
              <br className="hidden sm:block" />
              <span className="text-transparent bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text font-semibold">
                Ready for the next phase of your AI mastery journey? Continue
                exploring.
              </span>
            </p>

            {/* Neural Success Stats */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto mb-12">
              {[
                {
                  label: "AI Frameworks",
                  value: "7 Essential",
                  icon: Brain,
                  color: "text-purple-400",
                },
                {
                  label: "Enterprise Success",
                  value: "Fortune 500",
                  icon: Building2,
                  color: "text-pink-400",
                },
                {
                  label: "Performance Boost",
                  value: "15-40%",
                  icon: TrendingUp,
                  color: "text-blue-400",
                },
                {
                  label: "Generative AI",
                  value: "Creative",
                  icon: Sparkles,
                  color: "text-cyan-400",
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
                  <div className="p-6 rounded-2xl bg-purple-800/30 border border-purple-600/30 backdrop-blur-sm group-hover:scale-105 group-hover:border-purple-500/50 transition-all duration-300">
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
                  href="/flagship-course/module/agentic-ai-automation-strategies"
                  className="group flex items-center gap-4 px-8 py-6 bg-gradient-to-r from-gray-800/60 to-purple-700/30 border border-purple-500/30 rounded-2xl text-white hover:from-gray-700/60 hover:to-purple-600/40 hover:border-purple-400/40 transition-all duration-300 backdrop-blur-sm"
                >
                  <ChevronLeft className="w-6 h-6 text-gray-400 group-hover:-translate-x-1 transition-transform duration-300" />
                  <div className="text-left">
                    <div className="text-lg font-bold">Previous Module</div>
                    <div className="text-sm text-gray-300">
                      Agentic AI & Automation
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
                  href="/flagship-course/module/business-applications-of-ai"
                  className="group flex items-center gap-4 px-8 py-6 bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-400/30 rounded-2xl text-white hover:from-purple-500/30 hover:to-pink-500/30 hover:border-purple-400/50 transition-all duration-300 backdrop-blur-sm"
                >
                  <div className="text-left">
                    <div className="text-lg font-bold">
                      Continue to Module 6
                    </div>
                  </div>
                  <ChevronRight className="w-6 h-6 text-purple-400 group-hover:translate-x-1 transition-transform duration-300" />
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Neural Background Effects */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-purple-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-pink-500/5 rounded-full blur-3xl"></div>
      </footer>
    </div>
  );
}
