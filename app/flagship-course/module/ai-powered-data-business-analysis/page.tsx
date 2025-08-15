"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import {
  BarChart3,
  Database,
  TrendingUp,
  Eye,
  Activity,
  PieChart,
  LineChart,
  Zap,
  ChevronLeft,
  ChevronRight,
  Building2,
  Award,
  Target,
  ArrowUpRight,
  Users,
  Clock,
  Layers,
  Brain,
  Search,
  Globe,
  Cpu,
  Settings,
  Gauge,
  Lightbulb,
  Hexagon,
  BarChart,
  TrendingDown,
  MousePointer,
} from "lucide-react";

interface DataAnalysisTool {
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
  hexPattern: string;
  features: string[];
  dataConnections: number[];
}

const dataAnalysisTools: DataAnalysisTool[] = [
  {
    id: "fabi-ai",
    name: "Fabi.ai",
    icon: Database,
    category: "Automated SQL & Data Visualization",
    subtitle: "Intelligent Query Automation",
    description:
      "Advanced AI platform that automates SQL queries and data visualization, transforming complex data analysis into intuitive insights for business intelligence.",
    caseStudy: {
      company: "Walmart",
      industry: "Retail & Supply Chain",
      implementation:
        "Walmart implemented Fabi.ai to automate SQL queries and data visualization for inventory and sales analysis. This reduced manual analysis time by 50% and provided better insights into stock replenishment.",
      outcome: "Faster data analysis and improved supply chain management.",
      metrics: {
        improvement: "50%",
        impact: "Analysis Time",
        category: "Data Automation",
      },
    },
    color: "#10B981",
    hexPattern: "from-emerald-500/30 via-green-400/20 to-teal-500/10",
    features: [
      "SQL Automation",
      "Data Visualization",
      "Inventory Analysis",
      "Supply Chain Insights",
    ],
    dataConnections: [0, 60, 120, 180, 240, 300],
  },
  {
    id: "julius-ai",
    name: "Julius AI",
    icon: Search,
    category: "Exploratory Data Analysis",
    subtitle: "Intelligent Data Exploration",
    description:
      "Powerful EDA platform that accelerates data exploration and pattern discovery, enabling rapid insights into complex datasets and user behavior analysis.",
    caseStudy: {
      company: "Netflix",
      industry: "Entertainment & Streaming",
      implementation:
        "Netflix used Julius AI for exploratory data analysis (EDA) to understand viewer behaviors and preferences. This tool reduced time spent on data exploration by 30% and enabled personalized content recommendations.",
      outcome: "Improved content recommendations and user experience.",
      metrics: {
        improvement: "30%",
        impact: "Exploration Time",
        category: "Data Discovery",
      },
    },
    color: "#F59E0B",
    hexPattern: "from-amber-500/30 via-orange-400/20 to-yellow-500/10",
    features: [
      "Data Exploration",
      "Behavior Analysis",
      "Pattern Discovery",
      "Content Personalization",
    ],
    dataConnections: [30, 90, 150, 210, 270, 330],
  },
  {
    id: "power-bi-copilot",
    name: "Power BI (with Copilot)",
    icon: BarChart3,
    category: "Business Intelligence & Reporting",
    subtitle: "AI-Enhanced Analytics Platform",
    description:
      "Microsoft's enterprise BI platform enhanced with AI Copilot for automated reporting, real-time analytics, and intelligent business insights.",
    caseStudy: {
      company: "Coca-Cola",
      industry: "Consumer Beverages",
      implementation:
        "Coca-Cola implemented Power BI with Copilot to automate reporting across sales and marketing teams. This enhanced decision-making speed and reduced reporting time by 35%.",
      outcome:
        "Streamlined business intelligence operations and better decision-making.",
      metrics: {
        improvement: "35%",
        impact: "Reporting Speed",
        category: "Business Intelligence",
      },
    },
    color: "#3B82F6",
    hexPattern: "from-blue-500/30 via-indigo-400/20 to-cyan-500/10",
    features: [
      "Automated Reporting",
      "Real-time Analytics",
      "Sales Intelligence",
      "Marketing Insights",
    ],
    dataConnections: [45, 105, 165, 225, 285, 345],
  },
  {
    id: "tableau-ai",
    name: "Tableau (with AI features)",
    icon: PieChart,
    category: "Advanced Data Visualization",
    subtitle: "AI-Powered Visual Analytics",
    description:
      "Leading data visualization platform enhanced with AI capabilities for predictive analytics, automated insights, and intelligent dashboard creation.",
    caseStudy: {
      company: "UPS",
      industry: "Logistics & Transportation",
      implementation:
        "UPS used Tableau with AI features to create real-time dashboards for route optimization and fleet management. This led to a 25% reduction in fuel costs by optimizing delivery routes.",
      outcome: "Reduced operational costs and improved delivery efficiency.",
      metrics: {
        improvement: "25%",
        impact: "Cost Reduction",
        category: "Operations Analytics",
      },
    },
    color: "#8B5CF6",
    hexPattern: "from-purple-500/30 via-violet-400/20 to-indigo-500/10",
    features: [
      "Route Optimization",
      "Fleet Management",
      "Real-time Dashboards",
      "Predictive Analytics",
    ],
    dataConnections: [15, 75, 135, 195, 255, 315],
  },
  {
    id: "quadratic-ai",
    name: "Quadratic AI",
    icon: Layers,
    category: "Business Data Automation",
    subtitle: "Intelligent Data Processing",
    description:
      "Comprehensive business analytics platform that automates data aggregation, processing, and reporting for enhanced operational efficiency.",
    caseStudy: {
      company: "Accenture",
      industry: "Professional Consulting",
      implementation:
        "Accenture leveraged Quadratic AI for business data reporting and automation. This reduced the time spent on manual data aggregation and reporting by 40%.",
      outcome: "Improved efficiency in reporting and business intelligence.",
      metrics: {
        improvement: "40%",
        impact: "Data Processing",
        category: "Automation Efficiency",
      },
    },
    color: "#EF4444",
    hexPattern: "from-red-500/30 via-pink-400/20 to-rose-500/10",
    features: [
      "Data Aggregation",
      "Report Automation",
      "Business Intelligence",
      "Process Optimization",
    ],
    dataConnections: [22, 82, 142, 202, 262, 322],
  },
  {
    id: "polynomial-tools",
    name: "Polynomial Tools (Domo, Sisense, MonkeyLearn)",
    icon: TrendingUp,
    category: "Predictive Analytics Suite",
    subtitle: "AI-Driven Market Intelligence",
    description:
      "Integrated suite of predictive analytics tools combining market analysis, machine learning, and business intelligence for accurate forecasting.",
    caseStudy: {
      company: "Zillow",
      industry: "Real Estate Technology",
      implementation:
        "Zillow used Domo to analyze real estate market trends with AI-powered predictive analytics. This allowed them to forecast property price changes more accurately, improving decision-making for both buyers and sellers.",
      outcome: "Increased forecasting accuracy by 50%.",
      metrics: {
        improvement: "50%",
        impact: "Forecasting Accuracy",
        category: "Predictive Analytics",
      },
    },
    color: "#06B6D4",
    hexPattern: "from-cyan-500/30 via-teal-400/20 to-blue-500/10",
    features: [
      "Market Analysis",
      "Price Forecasting",
      "Predictive Models",
      "Decision Intelligence",
    ],
    dataConnections: [37, 97, 157, 217, 277, 337],
  },
  {
    id: "bigquery-vertex",
    name: "BigQuery + Vertex AI",
    icon: Cpu,
    category: "Cloud Data & ML Platform",
    subtitle: "Enterprise-Scale AI Analytics",
    description:
      "Google's integrated cloud platform combining massive-scale data warehousing with advanced machine learning for real-time analytics and predictive insights.",
    caseStudy: {
      company: "Spotify",
      industry: "Music Streaming & AI",
      implementation:
        "Spotify used Google BigQuery and Vertex AI for real-time user data analysis. This combination helped them predict trends in user listening behavior, improving playlist recommendations.",
      outcome: "Enhanced user satisfaction with personalized playlists.",
      metrics: {
        improvement: "35%",
        impact: "User Satisfaction",
        category: "Personalization AI",
      },
    },
    color: "#EC4899",
    hexPattern: "from-pink-500/30 via-rose-400/20 to-purple-500/10",
    features: [
      "Real-time Analytics",
      "User Behavior Prediction",
      "Playlist Intelligence",
      "Cloud ML",
    ],
    dataConnections: [52, 112, 172, 232, 292, 352],
  },
];

export default function AIPoweredDataBusinessAnalysis() {
  const [hoveredTool, setHoveredTool] = useState<number | null>(null);
  const [activeCategory, setActiveCategory] = useState<string>("all");

  const categories = [
    { id: "all", name: "All Tools", icon: BarChart3 },
    { id: "automation", name: "Data Automation", icon: Database },
    { id: "visualization", name: "Visualization", icon: PieChart },
    { id: "predictive", name: "Predictive Analytics", icon: TrendingUp },
    { id: "cloud", name: "Cloud Analytics", icon: Cpu },
  ];

  const filteredTools = React.useMemo(() => {
    if (activeCategory === "all") return dataAnalysisTools;

    switch (activeCategory) {
      case "automation":
        return dataAnalysisTools.filter((tool) =>
          [
            "Automated SQL & Data Visualization",
            "Business Data Automation",
          ].includes(tool.category)
        );
      case "visualization":
        return dataAnalysisTools.filter((tool) =>
          [
            "Business Intelligence & Reporting",
            "Advanced Data Visualization",
          ].includes(tool.category)
        );
      case "predictive":
        return dataAnalysisTools.filter((tool) =>
          ["Exploratory Data Analysis", "Predictive Analytics Suite"].includes(
            tool.category
          )
        );
      case "cloud":
        return dataAnalysisTools.filter((tool) =>
          ["Cloud Data & ML Platform"].includes(tool.category)
        );
      default:
        return dataAnalysisTools;
    }
  }, [activeCategory]);

  const handleHover = React.useCallback((index: number | null) => {
    setHoveredTool(index);
  }, []);

  const handleCategoryChange = React.useCallback((categoryId: string) => {
    setActiveCategory(categoryId);
  }, []);

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-slate-950 via-blue-950/20 to-slate-950 text-white relative overflow-hidden">
      {/* Navigation Links - Rounded Data Flow Style */}
      <div className="fixed top-6 left-6 right-6 z-50 flex justify-between items-center">
        <Link
          href="/flagship-course/module/foundations-of-ai-everyday-productivity"
          className="group flex items-center gap-3 px-5 py-3 bg-gradient-to-r from-slate-800/90 to-blue-800/30 backdrop-blur-md rounded-2xl border border-blue-500/30 text-gray-300 hover:text-white hover:from-slate-700/90 hover:to-blue-700/40 transition-all duration-300 shadow-lg"
        >
          <ChevronLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform duration-300" />
          <span className="text-sm font-medium hidden sm:block">Module 1</span>
        </Link>

        <Badge className="bg-gradient-to-r from-blue-500/20 to-cyan-500/20 border-blue-400/30 text-blue-900 text-sm font-medium px-8 py-3 shadow-lg backdrop-blur-sm rounded-2xl">
          Module 2 • AI‑Powered Data & Business Analysis
        </Badge>

        <Link
          href="/flagship-course/module/ai-powered-software-development-testing"
          className="group flex items-center gap-3 px-5 py-3 bg-gradient-to-r from-slate-800/90 to-blue-800/30 backdrop-blur-md rounded-2xl border border-blue-500/30 text-gray-300 hover:text-white hover:from-slate-700/90 hover:to-blue-700/40 transition-all duration-300 shadow-lg"
        >
          <span className="text-sm font-medium hidden sm:block">Module 3</span>
          <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
        </Link>
      </div>

      {/* Hero Section - Hexagonal Data Theme */}
      <section className="relative py-20 sm:py-24 lg:py-32 overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2 }}
            className="text-center mb-20"
          >
            {/* Data Hub Symbol - Rounded */}
            <div className="flex justify-center mb-12">
              <motion.div
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 1, delay: 0.3 }}
                className="relative"
              >
                <div className="w-24 h-24 sm:w-28 sm:h-28 bg-gradient-to-br from-blue-500/30 to-cyan-500/20 border border-blue-400/30 flex items-center justify-center backdrop-blur-sm rounded-3xl">
                  <BarChart3 className="w-12 h-12 sm:w-14 sm:h-14 text-blue-400" />
                </div>

                {/* Data flow nodes */}
                {[0, 60, 120, 180, 240, 300].map((angle, index) => (
                  <motion.div
                    key={index}
                    animate={{
                      scale: [1, 1.3, 1],
                      opacity: [0.4, 0.8, 0.4],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      delay: index * 0.7,
                      ease: "easeInOut",
                    }}
                    className="absolute inset-0 flex items-center justify-center"
                  >
                    <div
                      className="absolute w-3 h-3 bg-blue-400/80 rounded-full"
                      style={{
                        transform: `rotate(${angle}deg) translateY(-45px)`,
                      }}
                    />
                  </motion.div>
                ))}

                {/* Data flow connections */}
                <motion.div
                  animate={{
                    rotate: [0, 360],
                  }}
                  transition={{
                    duration: 25,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  className="absolute inset-0 border border-dashed border-cyan-400/20 rounded-full scale-150"
                />
              </motion.div>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-bold mb-8 leading-tight">
              <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent">
                AI-Powered Data &
              </span>
              <br />
              <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-400 bg-clip-text text-transparent">
                Business Analysis
              </span>
            </h1>

            <p className="text-lg sm:text-xl lg:text-2xl text-gray-300 max-w-5xl mx-auto mb-12 leading-relaxed">
              Transform raw data into actionable business insights with
              intelligent analytics platforms and automated reporting systems.
              <br className="hidden sm:block" />
              <span className="text-transparent bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text font-semibold">
                From SQL automation to predictive analytics and enterprise-scale
                business intelligence.
              </span>
            </p>

            {/* Data Metrics - Rounded */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 max-w-6xl mx-auto">
              {[
                {
                  icon: Database,
                  label: "Data Tools",
                  value: "7 Essential",
                  color: "text-blue-400",
                },
                {
                  icon: TrendingUp,
                  label: "Efficiency",
                  value: "+50%",
                  color: "text-cyan-400",
                },
                {
                  icon: Building2,
                  label: "Enterprise",
                  value: "Fortune 500",
                  color: "text-purple-400",
                },
                {
                  icon: Eye,
                  label: "Analytics",
                  value: "Real-time",
                  color: "text-indigo-400",
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
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-800/30 to-gray-900/30 border border-blue-600/40 backdrop-blur-sm rounded-2xl group-hover:border-blue-500/60 transition-all duration-300" />

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

        {/* Rounded Background Patterns */}
        <div className="absolute top-20 left-16 opacity-5">
          <motion.div
            animate={{
              rotate: [0, 360],
              scale: [1, 1.2, 1],
            }}
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
            className="w-20 h-20 border-2 border-blue-400/20 rounded-2xl"
          />
        </div>
        <div className="absolute top-32 right-20 opacity-5">
          <motion.div
            animate={{
              y: [0, -25, 0],
              x: [0, 20, 0],
            }}
            transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
            className="w-16 h-16 bg-gradient-to-br from-cyan-500/15 to-blue-500/10 rounded-3xl"
          />
        </div>
        <div className="absolute bottom-40 left-24 opacity-5">
          <motion.div
            animate={{
              scale: [1, 1.4, 1],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
            className="w-12 h-12 border border-purple-400/20 rounded-xl"
          />
        </div>

        {/* Background Gradients */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl"></div>
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
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Data Analytics Categories
            </h2>
            <p className="text-gray-400 text-lg">
              Explore intelligent data analysis and business intelligence
              platforms
            </p>
          </motion.div>

          {/* Rounded Category Pills */}
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
                    ? "bg-gradient-to-r from-blue-500/30 to-cyan-500/20 border-blue-400/50"
                    : "bg-gray-800/40 border-gray-600/30 hover:bg-blue-700/20"
                } border backdrop-blur-sm`}
              >
                <category.icon className="w-4 h-4 sm:w-5 sm:h-5 text-blue-400" />
                <span className="text-sm sm:text-base font-medium text-white">
                  {category.name}
                </span>
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* Data Analysis Tools Hexagonal Layout */}
      <section className="py-16 sm:py-20 relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent">
              7 Essential Data Analytics Tools
            </h2>
            <p className="text-lg sm:text-xl text-gray-400 max-w-4xl mx-auto">
              Enterprise-grade platforms transforming data into actionable
              business intelligence
            </p>
          </motion.div>

          {/* Hexagonal Tools Grid */}
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
                {/* Hexagonal Connection Line */}
                {index < filteredTools.length - 1 && (
                  <motion.div
                    initial={{ scaleY: 0 }}
                    whileInView={{ scaleY: 1 }}
                    transition={{ duration: 1, delay: 0.5 }}
                    className="absolute left-1/2 -bottom-8 w-px h-8 bg-gradient-to-b from-blue-400/30 to-transparent transform -translate-x-1/2 z-0"
                  />
                )}

                <div className="relative bg-gradient-to-br from-gray-900/60 to-blue-900/20 rounded-3xl border border-blue-600/30 backdrop-blur-sm group-hover:border-blue-500/50 transition-all duration-500 overflow-hidden">
                  {/* Hexagonal Pattern Background */}
                  <div className="absolute inset-0 opacity-5">
                    <motion.div
                      animate={{
                        rotate: [0, 360],
                      }}
                      transition={{
                        duration: 50,
                        repeat: Infinity,
                        ease: "linear",
                      }}
                      className="w-full h-full"
                      style={{
                        background: `radial-gradient(circle at 25% 25%, ${tool.color}25 0%, transparent 40%), radial-gradient(circle at 75% 75%, ${tool.color}15 0%, transparent 40%)`,
                      }}
                    />
                  </div>

                  <div className="relative z-10 p-8 sm:p-12">
                    {/* Tool Header */}
                    <div className="flex flex-col lg:flex-row lg:items-start gap-8 mb-8">
                      {/* Hexagonal Icon Section */}
                      <div className="flex-shrink-0">
                        <motion.div
                          whileHover={{ scale: 1.05 }}
                          className="relative"
                        >
                          <div
                            className="w-24 h-24 sm:w-28 sm:h-28 flex items-center justify-center border border-blue-500/30 backdrop-blur-sm group-hover:scale-105 transition-all duration-500 rounded-3xl"
                            style={{
                              background: `radial-gradient(circle, ${tool.color}40, ${tool.color}10)`,
                              boxShadow: `0 20px 40px ${tool.color}25`,
                            }}
                          >
                            <tool.icon
                              className="w-12 h-12 sm:w-14 sm:h-14 transition-all duration-500"
                           
                            />
                          </div>

                          {/* Data flow indicators */}
                          {tool.dataConnections.map((angle, connIndex) => (
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
                              className="absolute w-1.5 h-1.5 rounded-full"
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
                            <Badge className="bg-blue-900/80 border-blue-500/50 text-blue-200 hover:text-black px-2 py-1 text-xs backdrop-blur-md">
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

                        {/* Features Hexagonal Layout */}
                        <div className="flex flex-wrap gap-3 mb-8">
                          {tool.features.map((feature, featureIndex) => (
                            <div
                              key={featureIndex}
                              className="flex items-center gap-2 px-4 py-2 bg-blue-800/20 border border-blue-600/30 hover:bg-blue-700/30 transition-colors duration-300 rounded-2xl"
                            >
                              <div
                                className="w-2 h-2 rounded-full"
                                style={{
                                  backgroundColor: tool.color,
                                }}
                              />
                              <span className="text-gray-300 text-sm font-medium">
                                {feature}
                              </span>
                            </div>
                          ))}
                        </div>

                        {/* Impact Metric */}
                        <div className="flex items-center gap-6 p-6 bg-blue-800/20 border border-blue-600/30 rounded-2xl">
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
                      <div className="p-6 bg-blue-800/20 border border-blue-600/30 rounded-2xl">
                        <div className="flex items-center gap-4 mb-6">
                          <div className="w-14 h-14 bg-blue-700/30 border border-blue-500/30 flex items-center justify-center rounded-3xl">
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
                              <Database
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
                      <div className="p-6 bg-blue-800/20 border border-blue-600/30 rounded-2xl">
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
                        <div className="p-6 bg-gradient-to-r from-blue-800/30 to-gray-700/20 border border-blue-500/30 rounded-2xl">
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
                              style={{
                                borderColor: tool.color,
                              }}
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
                          className="w-12 h-12 flex items-center justify-center backdrop-blur-sm border border-blue-500/40 rounded-3xl"
                          style={{
                            background: `${tool.color}20`,
                          }}
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
      <footer className="py-16 sm:py-20 bg-gradient-to-r from-blue-900/30 via-slate-900/40 to-blue-900/30 relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-5xl mx-auto"
          >
            <div className="flex justify-center mb-8">
              <div
                className="w-16 h-16 bg-gradient-to-br from-blue-500/30 to-cyan-500/20 border border-blue-400/30 flex items-center justify-center backdrop-blur-sm"
                style={{
                  clipPath:
                    "polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)",
                }}
              >
                <BarChart3 className="w-8 h-8 text-blue-400" />
              </div>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-8 text-white">
              Transform Data into Business Intelligence
            </h2>
            <p className="text-lg sm:text-xl text-gray-300 mb-12 leading-relaxed">
              You've explored the essential platforms that turn raw data into
              actionable business insights and competitive advantages.
              <br className="hidden sm:block" />
              <span className="text-transparent bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text font-semibold">
                Ready to accelerate software development with AI? Continue your
                transformation journey.
              </span>
            </p>

            {/* Hexagonal Success Stats */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto mb-12">
              {[
                {
                  label: "Analytics Tools",
                  value: "7 Essential",
                  icon: Database,
                  color: "text-blue-400",
                },
                {
                  label: "Enterprise Success",
                  value: "Fortune 500",
                  icon: Building2,
                  color: "text-cyan-400",
                },
                {
                  label: "Efficiency Gain",
                  value: "25-50%",
                  icon: TrendingUp,
                  color: "text-purple-400",
                },
                {
                  label: "Data Intelligence",
                  value: "Real-time",
                  icon: Eye,
                  color: "text-indigo-400",
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
                  <div
                    className="p-6 bg-blue-800/30 border border-blue-600/30 backdrop-blur-sm group-hover:scale-105 group-hover:border-blue-500/50 transition-all duration-300"
                    style={{
                      clipPath: "polygon(15% 0%, 100% 0%, 85% 100%, 0% 100%)",
                    }}
                  >
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
                  href="/flagship-course/module/foundations-of-ai-everyday-productivity"
                  className="group flex items-center gap-4 px-8 py-6 bg-gradient-to-r from-gray-800/60 to-blue-700/30 border border-blue-500/30 text-white hover:from-gray-700/60 hover:to-blue-600/40 hover:border-blue-400/40 transition-all duration-300 backdrop-blur-sm"
                  style={{
                    clipPath: "polygon(0% 0%, 90% 0%, 100% 85%, 10% 100%)",
                  }}
                >
                  <ChevronLeft className="w-6 h-6 text-gray-400 group-hover:-translate-x-1 transition-transform duration-300" />
                  <div className="text-left">
                    <div className="text-lg font-bold">Previous Module</div>
                    <div className="text-sm text-gray-300">
                      AI Foundations & Productivity
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
                  href="/flagship-course/module/ai-powered-software-development-testing"
                  className="group flex items-center gap-4 px-8 py-6 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 border border-blue-400/30 text-white hover:from-blue-500/30 hover:to-cyan-500/30 hover:border-blue-400/50 transition-all duration-300 backdrop-blur-sm"
                  style={{
                    clipPath: "polygon(10% 0%, 100% 0%, 90% 100%, 0% 85%)",
                  }}
                >
                  <div className="text-left">
                    <div className="text-lg font-bold">
                      Continue to Module 3
                    </div>
                    <div className="text-sm text-gray-300">
                      Software Development & Testing
                    </div>
                  </div>
                  <ChevronRight className="w-6 h-6 text-blue-400 group-hover:translate-x-1 transition-transform duration-300" />
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Hexagonal Background Effects */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-cyan-500/5 rounded-full blur-3xl"></div>
      </footer>
    </div>
  );
}
