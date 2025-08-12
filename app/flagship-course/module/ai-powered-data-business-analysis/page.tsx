"use client";

import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  BarChart3,
  Database,
  LineChart,
  PieChart,
  TrendingUp,
  Brain,
  Zap,
  Target,
  DollarSign,
  Clock,
  Users,
  Award,
  ChevronRight,
  Sparkles,
  Building2,
  Cpu,
  Globe,
  Briefcase,
  Eye,
  Settings,
  Activity,
  Search,
  GitBranch,
} from "lucide-react";

interface DataTool {
  id: string;
  name: string;
  icon: React.ComponentType<{ className?: string }>;
  category: string;
  businessValue: string;
  roiImpact: string;
  marketGrowth: string;
  urgency: string;
  color: string;
  bgGradient: string;
  realWorldImpact: {
    company: string;
    sector: string;
    challenge: string;
    result: string;
    metric: string;
    businessOutcome: string;
  };
}

const dataTools: DataTool[] = [
  {
    id: "fabi-ai",
    name: "Fabi.ai",
    icon: Database,
    category: "SQL Automation & Data Viz",
    businessValue: "Automate complex SQL queries instantly",
    roiImpact: "50% reduction in analysis time",
    marketGrowth: "380% demand for SQL automation skills",
    urgency: "Critical for data analyst roles",
    color: "#3B82F6",
    bgGradient: "from-[#3B82F6]/10 to-[#3B82F6]/5",
    realWorldImpact: {
      company: "Walmart",
      sector: "Retail Giant",
      challenge: "Manual SQL queries for inventory analysis",
      result: "Automated SQL queries and data visualization",
      metric: "50% faster analysis",
      businessOutcome: "Improved supply chain efficiency",
    },
  },
  {
    id: "julius-ai",
    name: "Julius AI",
    icon: Search,
    category: "Exploratory Data Analysis",
    businessValue: "AI-powered data exploration & insights",
    roiImpact: "30% faster data exploration",
    marketGrowth: "290% growth in EDA specialist roles",
    urgency: "Essential for data science careers",
    color: "#8B5CF6",
    bgGradient: "from-[#8B5CF6]/10 to-[#8B5CF6]/5",
    realWorldImpact: {
      company: "Netflix",
      sector: "Streaming Media",
      challenge: "Understanding viewer behavior patterns",
      result: "Automated exploratory data analysis",
      metric: "30% time reduction",
      businessOutcome: "Enhanced personalized recommendations",
    },
  },
  {
    id: "power-bi-copilot",
    name: "Power BI (with Copilot)",
    icon: BarChart3,
    category: "Business Intelligence",
    businessValue: "AI-enhanced business reporting",
    roiImpact: "35% faster reporting cycles",
    marketGrowth: "Microsoft BI skills = $95K average salary",
    urgency: "Standard requirement for analysts",
    color: "#F59E0B",
    bgGradient: "from-[#F59E0B]/10 to-[#F59E0B]/5",
    realWorldImpact: {
      company: "Coca-Cola",
      sector: "Global Beverage",
      challenge: "Manual reporting across sales teams",
      result: "Automated reporting with AI insights",
      metric: "35% faster decisions",
      businessOutcome: "Streamlined business intelligence",
    },
  },
  {
    id: "tableau-ai",
    name: "Tableau (with AI features)",
    icon: LineChart,
    category: "Advanced Data Visualization",
    businessValue: "Real-time dashboards with AI insights",
    roiImpact: "25% operational cost reduction",
    marketGrowth: "Tableau expertise = $110K median salary",
    urgency: "Top visualization skill in demand",
    color: "#EF4444",
    bgGradient: "from-[#EF4444]/10 to-[#EF4444]/5",
    realWorldImpact: {
      company: "UPS",
      sector: "Logistics",
      challenge: "Route optimization and fleet management",
      result: "Real-time AI-powered dashboards",
      metric: "25% fuel cost savings",
      businessOutcome: "Optimized delivery operations",
    },
  },
  {
    id: "quadratic-ai",
    name: "Quadratic AI",
    icon: Activity,
    category: "Business Data Automation",
    businessValue: "Automated data aggregation & reporting",
    roiImpact: "40% reduction in manual work",
    marketGrowth: "350% increase in automation roles",
    urgency: "Future of business analytics",
    color: "#10B981",
    bgGradient: "from-[#10B981]/10 to-[#10B981]/5",
    realWorldImpact: {
      company: "Accenture",
      sector: "Consulting",
      challenge: "Manual data aggregation workflows",
      result: "Automated business reporting",
      metric: "40% time savings",
      businessOutcome: "Enhanced consulting efficiency",
    },
  },
  {
    id: "polynomial-tools",
    name: "Polynomial Tools (Domo, Sisense)",
    icon: PieChart,
    category: "Predictive Analytics",
    businessValue: "AI-powered market trend prediction",
    roiImpact: "50% improvement in forecasting accuracy",
    marketGrowth: "420% demand for predictive analytics",
    urgency: "Critical for strategic roles",
    color: "#06B6D4",
    bgGradient: "from-[#06B6D4]/10 to-[#06B6D4]/5",
    realWorldImpact: {
      company: "Zillow",
      sector: "Real Estate",
      challenge: "Property price trend forecasting",
      result: "AI-powered predictive analytics",
      metric: "50% forecasting accuracy",
      businessOutcome: "Better market predictions",
    },
  },
  {
    id: "bigquery-vertex",
    name: "BigQuery + Vertex AI",
    icon: Cpu,
    category: "Cloud Data Analytics",
    businessValue: "Real-time big data processing",
    roiImpact: "Enhanced user satisfaction metrics",
    marketGrowth: "Google Cloud skills = $130K salary",
    urgency: "Cloud analytics is the future",
    color: "#F97316",
    bgGradient: "from-[#F97316]/10 to-[#F97316]/5",
    realWorldImpact: {
      company: "Spotify",
      sector: "Music Streaming",
      challenge: "Real-time user behavior analysis",
      result: "Predictive listening trend analysis",
      metric: "Improved personalization",
      businessOutcome: "Enhanced user experience",
    },
  },
  {
    id: "databricks-automl",
    name: "Databricks (with AutoML)",
    icon: Brain,
    category: "Machine Learning Automation",
    businessValue: "Automated predictive maintenance",
    roiImpact: "30% reduction in maintenance costs",
    marketGrowth: "500% growth in AutoML positions",
    urgency: "ML automation is mandatory",
    color: "#EC4899",
    bgGradient: "from-[#EC4899]/10 to-[#EC4899]/5",
    realWorldImpact: {
      company: "Shell",
      sector: "Energy",
      challenge: "Equipment failure prediction",
      result: "Predictive maintenance with AutoML",
      metric: "30% cost reduction",
      businessOutcome: "Reduced equipment downtime",
    },
  },
  {
    id: "knime",
    name: "KNIME",
    icon: GitBranch,
    category: "Data Processing Workflows",
    businessValue: "Visual data pipeline automation",
    roiImpact: "40% faster research analysis",
    marketGrowth: "280% demand for workflow automation",
    urgency: "Essential for data engineers",
    color: "#14B8A6",
    bgGradient: "from-[#14B8A6]/10 to-[#14B8A6]/5",
    realWorldImpact: {
      company: "Bayer",
      sector: "Pharmaceutical",
      challenge: "Complex agricultural research data",
      result: "Automated data processing workflows",
      metric: "40% faster analysis",
      businessOutcome: "Accelerated research timelines",
    },
  },
  {
    id: "deepnote",
    name: "Deepnote",
    icon: Users,
    category: "Collaborative Data Science",
    businessValue: "Team-based data science projects",
    roiImpact: "25% faster model development",
    marketGrowth: "340% growth in collaborative analytics",
    urgency: "Future of team data science",
    color: "#A855F7",
    bgGradient: "from-[#A855F7]/10 to-[#A855F7]/5",
    realWorldImpact: {
      company: "Airbnb",
      sector: "Travel Tech",
      challenge: "Cross-team data science collaboration",
      result: "Real-time collaborative analytics",
      metric: "25% faster development",
      businessOutcome: "Improved pricing algorithms",
    },
  },
];

export default function AIPoweredDataBusinessAnalysis() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0F172A] to-[#1E293B] text-white">
      {/* Hero Section */}
      <section className="relative py-20 sm:py-24 overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <Badge className="mb-6 bg-gradient-to-r from-blue-500/20 to-purple-500/20 border-blue-500/30 text-blue-400 text-sm font-medium px-4 py-2">
              Module 2 • AI-Powered Data & Business Analysis
            </Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-blue-400 to-purple-500 bg-clip-text text-transparent">
              Turn Data Into <br />
              <span className="text-green-400">Million-Dollar Decisions</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-8">
              Master AI-powered analytics tools that Fortune 500 companies use
              to make <br />
              <span className="text-blue-400 font-semibold">
                billion-dollar strategic decisions
              </span>
            </p>

            {/* Business Impact Stats */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 max-w-5xl mx-auto mb-12">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="bg-gradient-to-r from-blue-600/10 to-blue-700/10 border border-blue-500/30 rounded-xl p-4"
              >
                <div className="text-2xl font-bold text-blue-400 mb-1">
                  $2.3T
                </div>
                <div className="text-white text-sm font-medium">
                  Global data analytics market
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="bg-gradient-to-r from-green-500/10 to-green-600/10 border border-green-500/30 rounded-xl p-4"
              >
                <div className="text-2xl font-bold text-green-400 mb-1">
                  73%
                </div>
                <div className="text-white text-sm font-medium">
                  of companies are data-driven
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="bg-gradient-to-r from-purple-500/10 to-purple-600/10 border border-purple-500/30 rounded-xl p-4"
              >
                <div className="text-2xl font-bold text-purple-400 mb-1">
                  +65%
                </div>
                <div className="text-white text-sm font-medium">
                  salary boost for data skills
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="bg-gradient-to-r from-orange-500/10 to-orange-600/10 border border-orange-500/30 rounded-xl p-4"
              >
                <div className="text-2xl font-bold text-orange-400 mb-1">
                  5.2M
                </div>
                <div className="text-white text-sm font-medium">
                  data analytics jobs available
                </div>
              </motion.div>
            </div>

            {/* Data Flow Visual */}
            <div className="relative max-w-6xl mx-auto">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, delay: 0.7 }}
                className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-3xl p-8 border border-gray-700/50 backdrop-blur-sm"
              >
                <div className="grid grid-cols-3 md:grid-cols-5 gap-6">
                  {[Database, BarChart3, Brain, TrendingUp, Target].map(
                    (Icon, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.9 + index * 0.1 }}
                        className="flex flex-col items-center relative"
                      >
                        <div className="w-14 h-14 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl flex items-center justify-center mb-3">
                          <Icon className="w-7 h-7 text-white" />
                        </div>
                        {index < 4 && (
                          <div className="absolute top-7 left-full w-6 h-0.5 bg-gradient-to-r from-blue-500/50 to-purple-500/50 hidden md:block"></div>
                        )}
                        <div className="w-10 h-1 bg-gradient-to-r from-blue-500/50 to-purple-500/50 rounded-full"></div>
                      </motion.div>
                    )
                  )}
                </div>
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 1.4 }}
                  className="text-center mt-6"
                >
                  <div className="text-sm text-gray-400 mb-2">
                    Data Pipeline Flow
                  </div>
                  <div className="text-white font-medium">
                    Raw Data → Analysis → AI Insights → Business Decisions → ROI
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Background Effects */}
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-blue-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-purple-500/5 rounded-full blur-3xl"></div>
      </section>

      {/* Market Demand Section */}
      <section className="py-16 sm:py-20 bg-gradient-to-r from-slate-900/50 to-slate-800/50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
              Why Data Analytics Skills Are{" "}
              <span className="text-green-400">Worth Their Weight in Gold</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto mb-12">
              Every business decision today is backed by data. Companies are
              desperately seeking professionals who can turn raw data into
              actionable insights.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
              {[
                {
                  icon: Building2,
                  stat: "$150K",
                  label: "Senior Data Analyst Salary",
                  color: "text-green-400",
                  desc: "Average compensation for experienced professionals",
                },
                {
                  icon: Globe,
                  stat: "94%",
                  label: "Fortune 500 Use Analytics",
                  color: "text-blue-400",
                  desc: "Major corporations rely on data-driven decisions",
                },
                {
                  icon: TrendingUp,
                  stat: "23%",
                  label: "Annual Job Growth",
                  color: "text-purple-400",
                  desc: "Fastest growing career field globally",
                },
                {
                  icon: Zap,
                  stat: "2-3x",
                  label: "Career Acceleration",
                  color: "text-orange-400",
                  desc: "Faster promotions with analytics skills",
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-gradient-to-b from-slate-800/80 to-slate-900/80 rounded-xl p-6 border border-slate-700/50 hover:border-blue-500/30 transition-colors"
                >
                  <item.icon
                    className={`w-12 h-12 ${item.color} mx-auto mb-4`}
                  />
                  <div className={`text-3xl font-bold ${item.color} mb-2`}>
                    {item.stat}
                  </div>
                  <div className="text-white font-medium mb-2">
                    {item.label}
                  </div>
                  <div className="text-gray-400 text-sm">{item.desc}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Tools Grid */}
      <section className="py-16 sm:py-20 relative">
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-white via-blue-400 to-purple-500 bg-clip-text text-transparent">
              10 Data Analytics Tools That <br />
              <span className="text-green-400">Run Fortune 500 Companies</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto mb-8">
              These are the exact platforms that Netflix, Walmart, Spotify, and
              other giants use to analyze billions of data points and make
              strategic decisions worth millions.
            </p>
            <Badge className="bg-gradient-to-r from-green-500/20 to-blue-500/20 border-green-500/30 text-green-400 text-sm font-medium px-4 py-2">
              🚀 Enterprise-Grade • Battle-Tested • Revenue-Generating
            </Badge>
          </motion.div>

          {/* Interactive Tool Showcase */}
          <div className="space-y-8">
            {dataTools.map((tool, index) => (
              <motion.div
                key={tool.id}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`flex flex-col lg:flex-row items-center gap-8 ${
                  index % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
              >
                {/* Tool Info Side */}
                <div className="flex-1 space-y-6">
                  <div className="flex items-center gap-4">
                    <div
                      className="p-6 rounded-2xl"
                      style={{
                        background: `linear-gradient(135deg, ${tool.color}30, ${tool.color}10)`,
                        border: `2px solid ${tool.color}40`,
                      }}
                    >
                      <tool.icon
                        className="w-12 h-12"
                      />
                    </div>
                    <div>
                      <Badge className="mb-2 bg-gradient-to-r from-slate-600/50 to-slate-700/50 border-slate-600/50 text-slate-300 text-xs">
                        {tool.category}
                      </Badge>
                      <h3 className="text-2xl lg:text-3xl font-bold text-white">
                        {tool.name}
                      </h3>
                    </div>
                  </div>

                  <p className="text-lg text-gray-300 leading-relaxed">
                    {tool.businessValue}
                  </p>

                  {/* Metrics Row */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="bg-gradient-to-r from-green-500/10 to-green-600/10 border border-green-500/30 rounded-xl p-4">
                      <div className="flex items-center mb-2">
                        <DollarSign className="w-5 h-5 mr-2 text-green-400" />
                        <span className="text-green-400 font-semibold text-sm">
                          ROI Impact
                        </span>
                      </div>
                      <div className="text-white font-bold">
                        {tool.roiImpact}
                      </div>
                    </div>
                    <div className="bg-gradient-to-r from-blue-500/10 to-blue-600/10 border border-blue-500/30 rounded-xl p-4">
                      <div className="flex items-center mb-2">
                        <TrendingUp className="w-5 h-5 mr-2 text-blue-400" />
                        <span className="text-blue-400 font-semibold text-sm">
                          Market Growth
                        </span>
                      </div>
                      <div className="text-white font-bold text-sm">
                        {tool.marketGrowth}
                      </div>
                    </div>
                    <div className="bg-gradient-to-r from-purple-500/10 to-purple-600/10 border border-purple-500/30 rounded-xl p-4">
                      <div className="flex items-center mb-2">
                        <Clock className="w-5 h-5 mr-2 text-purple-400" />
                        <span className="text-purple-400 font-semibold text-sm">
                          Urgency
                        </span>
                      </div>
                      <div className="text-white font-bold text-sm">
                        {tool.urgency}
                      </div>
                    </div>
                  </div>

                  <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white font-semibold px-8 py-4 text-lg w-full md:w-auto">
                    <Sparkles className="w-5 h-5 mr-2" />
                    Master {tool.name}
                    <ChevronRight className="w-5 h-5 ml-2" />
                  </Button>
                </div>

                {/* Interactive Visual Side */}
                <div className="flex-1 relative">
                  <div className="bg-gradient-to-br from-slate-800/80 to-slate-900/80 rounded-3xl p-8 border border-slate-700/50 backdrop-blur-sm">
                    {/* Company Showcase */}
                    <div className="text-center mb-6">
                      <Badge className="mb-4 bg-gradient-to-r from-slate-700/50 to-slate-800/50 border-slate-600/50 text-slate-300 text-sm px-4 py-2">
                        Real-World Success Story
                      </Badge>
                      <div className="flex items-center justify-center mb-4">
                        <div className="w-16 h-16 bg-white rounded-xl flex items-center justify-center mr-4">
                          <Building2 className="w-10 h-10 text-slate-800" />
                        </div>
                        <div className="text-left">
                          <div className="text-xl font-bold text-white">
                            {tool.realWorldImpact.company}
                          </div>
                          <div className="text-sm text-gray-400">
                            {tool.realWorldImpact.sector}
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Challenge → Solution Flow */}
                    <div className="space-y-6">
                      {/* Challenge */}
                      <div className="bg-gradient-to-r from-red-500/10 to-red-600/10 border border-red-500/30 rounded-xl p-4">
                        <div className="flex items-center mb-2">
                          <Target className="w-4 h-4 mr-2 text-red-400" />
                          <span className="text-red-400 font-semibold text-sm">
                            Challenge
                          </span>
                        </div>
                        <div className="text-gray-300 text-sm">
                          {tool.realWorldImpact.challenge}
                        </div>
                      </div>

                      {/* Arrow */}
                      <div className="flex justify-center">
                        <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
                          <ChevronRight className="w-5 h-5 text-white" />
                        </div>
                      </div>

                      {/* Solution */}
                      <div
                        className="border border-l-4 rounded-xl p-4"
                        style={{
                          backgroundColor: `${tool.color}10`,
                          borderColor: tool.color,
                          borderLeftColor: tool.color,
                        }}
                      >
                        <div className="flex items-center mb-2">
                          <Zap
                            className="w-4 h-4 mr-2"
                            style={{ color: tool.color }}
                          />
                          <span
                            className="font-semibold text-sm"
                            style={{ color: tool.color }}
                          >
                            Solution
                          </span>
                        </div>
                        <div className="text-gray-300 text-sm mb-3">
                          {tool.realWorldImpact.result}
                        </div>

                        {/* Result Metric */}
                        <div className="bg-gradient-to-r from-green-500/20 to-green-600/20 border border-green-500/30 rounded-lg p-3">
                          <div className="flex items-center justify-between">
                            <span className="text-green-400 font-semibold text-sm">
                              Result
                            </span>
                            <div className="text-green-400 font-bold">
                              {tool.realWorldImpact.metric}
                            </div>
                          </div>
                          <div className="text-gray-300 text-xs mt-1">
                            {tool.realWorldImpact.businessOutcome}
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Animated Progress Indicator */}
                    <div className="mt-6">
                      <div className="flex justify-between text-xs text-gray-400 mb-2">
                        <span>Implementation Progress</span>
                        <span>100%</span>
                      </div>
                      <div className="w-full bg-slate-700 rounded-full h-2">
                        <motion.div
                          className="h-2 rounded-full"
                          style={{
                            background: `linear-gradient(90deg, ${tool.color}, ${tool.color}80)`,
                          }}
                          initial={{ width: 0 }}
                          whileInView={{ width: "100%" }}
                          transition={{ duration: 2, delay: index * 0.2 }}
                          viewport={{ once: true }}
                        />
                      </div>
                    </div>
                  </div>

                  {/* Floating Elements */}
                  <motion.div
                    className="absolute -top-4 -right-4 w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center"
                    animate={{ y: [0, -10, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    <Sparkles className="w-4 h-4 text-white" />
                  </motion.div>

                  <motion.div
                    className="absolute -bottom-4 -left-4 w-6 h-6 rounded-full flex items-center justify-center"
                    style={{ backgroundColor: tool.color }}
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 3, repeat: Infinity, delay: 1 }}
                  >
                    <Target className="w-3 h-3 text-white" />
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Background Effects */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/3 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/3 rounded-full blur-3xl"></div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-20 bg-gradient-to-r from-blue-600/10 to-purple-600/10">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
              Start Making Data-Driven Decisions Like{" "}
              <span className="text-green-400">Industry Leaders</span>
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Every day you delay, competitors are getting better at turning
              data into profits. Join the ranks of analysts who shape business
              strategy at the highest level.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Button
                size="lg"
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white font-semibold px-8 py-4 text-lg"
              >
                <Sparkles className="w-5 h-5 mr-2" />
                Start Your Analytics Journey
                <ChevronRight className="w-5 h-5 ml-2" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-slate-600 text-slate-300 hover:bg-slate-800 px-8 py-4 text-lg"
              >
                <Eye className="w-5 h-5 mr-2" />
                Preview Course Content
              </Button>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-sm text-gray-400">
              <div className="flex items-center justify-center">
                <Users className="w-4 h-4 mr-1" />
                75,000+ Analysts Trained
              </div>
              <div className="flex items-center justify-center">
                <Award className="w-4 h-4 mr-1" />
                Fortune 500 Approved
              </div>
              <div className="flex items-center justify-center">
                <Clock className="w-4 h-4 mr-1" />
                8-Week Mastery Program
              </div>
              <div className="flex items-center justify-center">
                <Briefcase className="w-4 h-4 mr-1" />
                Job Placement Support
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
