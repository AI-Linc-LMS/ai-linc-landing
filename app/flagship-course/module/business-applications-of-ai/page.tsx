"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import {
  Briefcase,
  Shield,
  MessageSquare,
  TrendingUp,
  Users,
  FileText,
  BarChart3,
  Zap,
  Building2,
  Target,
  Globe,
  Clock,
  Award,
  ChevronLeft,
  ChevronRight,
  Sparkles,
  Brain,
  Bot,
  Network,
  DollarSign,
  Eye,
  Lightbulb,
  Layers,
  ArrowUpRight,
  CheckCircle2,
  Star,
  Truck,
  Scale,
  Search,
} from "lucide-react";
import Link from "next/link";

interface BusinessAITool {
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
  features: string[];
}

const businessAITools: BusinessAITool[] = [
  {
    id: "grammarly-jasper",
    name: "Grammarly Business / Jasper",
    icon: MessageSquare,
    category: "Content & Communication",
    subtitle: "AI-Powered Content Creation & Quality Assurance",
    description:
      "Enterprise-grade writing assistance and content generation platforms that ensure brand consistency and error-free communications across all business channels.",
    caseStudy: {
      company: "Nike",
      industry: "Sports & Fashion",
      benefit:
        "Nike utilized Jasper and Grammarly Business for creating marketing content and internal communications. This ensured consistent brand voice and error-free content creation across various campaigns.",
      outcome:
        "Improved content quality and reduced review cycles by 40%, increasing campaign speed.",
      metrics: {
        improvement: "40%",
        impact: "Faster Campaigns",
        category: "Content Quality",
      },
    },
    color: "#00C851",
    bgPattern: "from-green-500/20 via-emerald-500/15 to-teal-500/10",
    features: [
      "Brand Voice Consistency",
      "Grammar Checking",
      "Content Generation",
      "Team Collaboration",
    ],
  },
  {
    id: "hubspot-salesforce",
    name: "HubSpot AI / Salesforce Einstein",
    icon: Users,
    category: "CRM & Marketing Automation",
    subtitle: "Intelligent Customer Relationship Management",
    description:
      "Advanced CRM platforms with AI-driven insights for personalized marketing campaigns, lead scoring, and predictive customer behavior analysis.",
    caseStudy: {
      company: "T-Mobile",
      industry: "Telecommunications",
      benefit:
        "T-Mobile integrated Salesforce Einstein for CRM insights and marketing automation. This allowed them to better predict customer behavior and personalize marketing campaigns.",
      outcome:
        "Increased lead conversion by 25% through more targeted campaigns.",
      metrics: {
        improvement: "25%",
        impact: "Lead Conversion",
        category: "Marketing ROI",
      },
    },
    color: "#FF6B35",
    bgPattern: "from-orange-500/20 via-red-500/15 to-pink-500/10",
    features: [
      "Lead Scoring",
      "Predictive Analytics",
      "Campaign Automation",
      "Customer Insights",
    ],
  },
  {
    id: "supply-chain-ai",
    name: "Supply Chain AI (Llamasoft, ClearMetal)",
    icon: Truck,
    category: "Supply Chain Optimization",
    subtitle: "Intelligent Logistics & Inventory Management",
    description:
      "AI-powered supply chain platforms that optimize inventory management, demand forecasting, and logistics operations for maximum efficiency.",
    caseStudy: {
      company: "Unilever",
      industry: "Consumer Goods",
      benefit:
        "Unilever used ClearMetal's AI for demand forecasting and inventory management, helping them optimize their supply chain.",
      outcome:
        "Reduced supply chain costs by 20% and improved on-time deliveries by 30%.",
      metrics: {
        improvement: "20%",
        impact: "Cost Reduction",
        category: "Supply Chain",
      },
    },
    color: "#007BFF",
    bgPattern: "from-blue-500/20 via-cyan-500/15 to-indigo-500/10",
    features: [
      "Demand Forecasting",
      "Inventory Optimization",
      "Route Planning",
      "Cost Analytics",
    ],
  },
  {
    id: "legal-tech-ai",
    name: "Legal-Tech AI (Evisort, LawGeex)",
    icon: Scale,
    category: "Legal & Compliance",
    subtitle: "Contract Analysis & Legal Automation",
    description:
      "Sophisticated legal AI tools that automate contract review, compliance monitoring, and legal document analysis for enhanced operational efficiency.",
    caseStudy: {
      company: "PwC",
      industry: "Professional Services",
      benefit:
        "PwC implemented Evisort for contract analysis and automation, enabling their legal team to process contracts faster and with fewer errors.",
      outcome:
        "Reduced contract review time by 50%, improving overall efficiency in legal operations.",
      metrics: {
        improvement: "50%",
        impact: "Review Speed",
        category: "Legal Efficiency",
      },
    },
    color: "#6F42C1",
    bgPattern: "from-purple-500/20 via-violet-500/15 to-indigo-500/10",
    features: [
      "Contract Analysis",
      "Compliance Monitoring",
      "Document Review",
      "Risk Assessment",
    ],
  },
  {
    id: "cybersecurity-ai",
    name: "Darktrace / CrowdStrike AI",
    icon: Shield,
    category: "Cybersecurity & Threat Detection",
    subtitle: "AI-Driven Security Operations",
    description:
      "Advanced cybersecurity platforms using AI to detect, prevent, and respond to threats in real-time, protecting enterprise infrastructure and data.",
    caseStudy: {
      company: "GitHub",
      industry: "Software Development",
      benefit:
        "GitHub used Darktrace's AI to monitor and detect potential security threats within their repository systems. This proactive approach helped prevent data breaches.",
      outcome: "Reduced cybersecurity incident response times by 40%.",
      metrics: {
        improvement: "40%",
        impact: "Response Speed",
        category: "Security Operations",
      },
    },
    color: "#DC3545",
    bgPattern: "from-red-500/20 via-pink-500/15 to-rose-500/10",
    features: [
      "Threat Detection",
      "Behavioral Analysis",
      "Incident Response",
      "Risk Prevention",
    ],
  },
  {
    id: "business-intelligence",
    name: "Akkio / MonkeyLearn / Domo",
    icon: BarChart3,
    category: "Business Intelligence & Analytics",
    subtitle: "Data-Driven Decision Making Platform",
    description:
      "Comprehensive business intelligence platforms that transform raw data into actionable insights through sentiment analysis and predictive analytics.",
    caseStudy: {
      company: "H&M",
      industry: "Fashion Retail",
      benefit:
        "H&M used MonkeyLearn to analyze customer sentiment and feedback on social media, helping them make data-driven decisions in their marketing and product design strategies.",
      outcome:
        "Improved customer satisfaction scores by 30% by incorporating real-time sentiment analysis.",
      metrics: {
        improvement: "30%",
        impact: "Customer Satisfaction",
        category: "Business Intelligence",
      },
    },
    color: "#FFC107",
    bgPattern: "from-yellow-500/20 via-amber-500/15 to-orange-500/10",
    features: [
      "Sentiment Analysis",
      "Predictive Analytics",
      "Data Visualization",
      "Real-time Insights",
    ],
  },
];

export default function BusinessApplicationsOfAI() {
  const [activeCard, setActiveCard] = useState<number | null>(null);

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-slate-950 via-gray-900 to-black text-white relative overflow-hidden">
      {/* Navigation Links - Fixed Position */}
      <div className="fixed top-6 left-6 right-6 z-50 flex justify-between items-center">
        <Link
          href="/flagship-course/module/core-data-science-generative-ai-skills"
          className="flex items-center gap-2 px-4 py-2 bg-gray-800/80 backdrop-blur-sm rounded-xl border border-gray-600/30 text-gray-300 hover:text-white hover:bg-gray-700/80 transition-all duration-300"
        >
          <ChevronLeft className="w-4 h-4" />
          <span className="text-sm font-medium hidden sm:block">Module 5</span>
        </Link>

        <Badge className="bg-gradient-to-r from-blue-500/20 to-purple-500/20 border-blue-500/30 text-blue-800 text-sm font-medium px-6 py-2">
          Module 6 • Business Applications of AI
        </Badge>

        <Link
          href="/flagship-course/module/ai-powered-career-advancement-strategies"
          className="flex items-center gap-2 px-4 py-2 bg-gray-800/80 backdrop-blur-sm rounded-xl border border-gray-600/30 text-gray-300 hover:text-white hover:bg-gray-700/80 transition-all duration-300"
        >
          <span className="text-sm font-medium hidden sm:block">Module 7</span>
          <ChevronRight className="w-4 h-4" />
        </Link>
      </div>

      {/* Hero Section */}
      <section className="relative py-20 sm:py-24 lg:py-32 overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-center mb-20"
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-bold mb-8 leading-tight">
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Business Applications
              </span>
              <br />
              <span className="bg-gradient-to-r from-orange-400 via-red-400 to-pink-400 bg-clip-text text-transparent">
                of AI
              </span>
            </h1>

            <p className="text-lg sm:text-xl lg:text-2xl text-gray-300 max-w-5xl mx-auto mb-12 leading-relaxed">
              Transform your business operations with enterprise-proven AI
              solutions.
              <br className="hidden sm:block" />
              <span className="text-transparent bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text font-semibold">
                From content creation to cybersecurity, discover how industry
                leaders leverage AI for competitive advantage.
              </span>
            </p>

            {/* Business Impact Metrics */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 max-w-6xl mx-auto">
              {[
                {
                  icon: TrendingUp,
                  label: "ROI Increase",
                  value: "Up to 50%",
                  color: "text-green-400",
                },
                {
                  icon: Clock,
                  label: "Time Savings",
                  value: "40% Faster",
                  color: "text-blue-400",
                },
                {
                  icon: DollarSign,
                  label: "Cost Reduction",
                  value: "20-30%",
                  color: "text-orange-400",
                },
                {
                  icon: Star,
                  label: "Satisfaction",
                  value: "+30% Score",
                  color: "text-purple-400",
                },
              ].map((metric, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8, delay: 0.3 + index * 0.1 }}
                  className="flex flex-col items-center p-4 sm:p-6 rounded-2xl bg-gradient-to-br from-gray-800/40 to-gray-900/20 border border-gray-700/30 backdrop-blur-sm group hover:scale-105 transition-all duration-300"
                >
                  <metric.icon
                    className={`w-8 h-8 sm:w-10 sm:h-10 ${metric.color} mb-3 group-hover:animate-pulse`}
                  />
                  <span className="text-lg sm:text-xl font-bold text-white mb-1">
                    {metric.value}
                  </span>
                  <span className="text-xs sm:text-sm text-gray-400">
                    {metric.label}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Floating Elements */}
        <div className="absolute top-20 left-10 opacity-10">
          <div className="w-20 h-20 bg-gradient-to-br from-blue-500/20 to-purple-500/10 rounded-3xl border border-gray-600/20" />
        </div>
        <div className="absolute top-40 right-16 opacity-10">
          <div className="w-16 h-16 bg-gradient-to-br from-orange-500/20 to-red-500/10 rounded-3xl border border-gray-600/20" />
        </div>
        <div className="absolute bottom-20 left-20 opacity-10">
          <div className="w-18 h-18 bg-gradient-to-br from-green-500/20 to-teal-500/10 rounded-3xl border border-gray-600/20" />
        </div>

        {/* Background Gradients */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>
      </section>

      {/* Business AI Tools Showcase */}
      <section className="py-16 sm:py-20 relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              6 Essential Business AI Solutions
            </h2>
            <p className="text-lg sm:text-xl text-gray-400 max-w-4xl mx-auto">
              Enterprise-grade AI tools powering Fortune 500 digital
              transformation
            </p>
          </motion.div>

          {/* Tools Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            {businessAITools.map((tool, index) => (
              <motion.div
                key={tool.id}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group cursor-pointer"
                onMouseEnter={() => setActiveCard(index)}
                onMouseLeave={() => setActiveCard(null)}
              >
                <div
                  className={`relative p-6 sm:p-8 rounded-3xl bg-gradient-to-br ${tool.bgPattern} border border-gray-700/30 overflow-hidden group-hover:border-gray-600/50 transition-all duration-500 h-full`}
                >
                  {/* Header Section */}
                  <div className="flex items-start gap-6 mb-6">
                    <div
                      className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300"
                      style={{
                        background: `linear-gradient(135deg, ${tool.color}40, ${tool.color}20)`,
                        boxShadow: `0 10px 30px ${tool.color}20`,
                      }}
                    >
                      <tool.icon
                        className="w-8 h-8 sm:w-10 sm:h-10"
                      />
                    </div>

                    <div className="flex-1 min-w-0">
                      <Badge className="mb-3 bg-gray-800/50 text-gray-300 hover:text-gray-950 text-xs px-3 py-1">
                        {tool.category}
                      </Badge>
                      <h3 className="text-xl sm:text-2xl font-bold text-white mb-2 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-300 group-hover:bg-clip-text transition-all duration-300">
                        {tool.name}
                      </h3>
                      <p
                        className="text-base font-medium mb-4"
                        style={{ color: tool.color }}
                      >
                        {tool.subtitle}
                      </p>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-gray-300 text-sm sm:text-base leading-relaxed mb-6">
                    {tool.description}
                  </p>

                  {/* Features Pills */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {tool.features.map((feature, featureIndex) => (
                      <span
                        key={featureIndex}
                        className="text-xs px-3 py-1 rounded-full bg-gray-800/40 text-gray-300 border border-gray-600/30"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>

                  {/* Case Study Section */}
                  <div className="bg-gray-900/40 rounded-2xl p-4 sm:p-6 border border-gray-700/20">
                    {/* Company Header */}
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <Building2
                          className="w-5 h-5"
                          style={{ color: tool.color }}
                        />
                        <div>
                          <h4 className="text-lg font-bold text-white">
                            {tool.caseStudy.company}
                          </h4>
                          <p className="text-xs text-gray-400">
                            {tool.caseStudy.industry}
                          </p>
                        </div>
                      </div>

                      {/* Metrics Badge */}
                      <div className="flex items-center gap-2 px-3 py-2 rounded-xl bg-gray-800/40 border border-gray-600/20">
                        <TrendingUp
                          className="w-4 h-4"
                          style={{ color: tool.color }}
                        />
                        <span
                          className="font-bold text-sm"
                          style={{ color: tool.color }}
                        >
                          {tool.caseStudy.metrics.improvement}
                        </span>
                      </div>
                    </div>

                    {/* Implementation & Outcome */}
                    <div className="space-y-3">
                      <div className="bg-gray-800/30 rounded-lg p-3 border border-gray-700/10">
                        <h5 className="text-white font-semibold text-sm mb-2 flex items-center">
                          <Lightbulb
                            className="w-3 h-3 mr-2"
                            style={{ color: tool.color }}
                          />
                          Implementation
                        </h5>
                        <p className="text-gray-300 text-xs leading-relaxed">
                          {tool.caseStudy.benefit}
                        </p>
                      </div>

                      <div className="bg-gray-800/30 rounded-lg p-3 border border-gray-700/10">
                        <h5 className="text-white font-semibold text-sm mb-2 flex items-center">
                          <CheckCircle2 className="w-3 h-3 mr-2 text-green-400" />
                          Business Impact
                        </h5>
                        <p className="text-green-300 text-xs font-medium">
                          {tool.caseStudy.outcome}
                        </p>
                      </div>
                    </div>

                    {/* Impact Metrics */}
                    <div className="flex gap-3 mt-4">
                      <div className="flex-1 text-center p-2 bg-gray-800/20 rounded-lg border border-gray-700/10">
                        <div
                          className="text-lg font-bold mb-1"
                          style={{ color: tool.color }}
                        >
                          {tool.caseStudy.metrics.improvement}
                        </div>
                        <div className="text-xs text-gray-400">
                          {tool.caseStudy.metrics.impact}
                        </div>
                      </div>
                      <div className="flex-1 text-center p-2 bg-gray-800/20 rounded-lg border border-gray-700/10">
                        <div className="text-sm font-bold text-white mb-1">
                          Enterprise
                        </div>
                        <div className="text-xs text-gray-400">
                          {tool.caseStudy.metrics.category}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Hover Effect Indicator */}
                  {activeCard === index && (
                    <motion.div
                      initial={{ scale: 0.8, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      className="absolute top-4 right-4"
                    >
                      <div
                        className="w-8 h-8 rounded-full flex items-center justify-center"
                        style={{ backgroundColor: `${tool.color}20` }}
                      >
                        <ArrowUpRight
                          className="w-4 h-4"
                          style={{ color: tool.color }}
                        />
                      </div>
                    </motion.div>
                  )}
                </div>
              </motion.div>
            ))}
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
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-8 text-white">
              AI-Powered Business Transformation
            </h2>
            <p className="text-lg sm:text-xl text-gray-300 mb-12 leading-relaxed">
              Join industry leaders who are reshaping their operations with
              enterprise AI solutions.
              <br className="hidden sm:block" />
              <span className="text-transparent bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text font-semibold">
                From Nike to T-Mobile, discover the strategies driving
                measurable business results.
              </span>
            </p>

            {/* Final Enterprise Stats */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
              {[
                {
                  label: "Fortune 500 Adoption",
                  value: "85%",
                  icon: Building2,
                  color: "text-blue-400",
                },
                {
                  label: "Average ROI",
                  value: "300%",
                  icon: TrendingUp,
                  color: "text-green-400",
                },
                {
                  label: "Implementation Time",
                  value: "30 Days",
                  icon: Clock,
                  color: "text-orange-400",
                },
                {
                  label: "Business Categories",
                  value: "6 Sectors",
                  icon: Globe,
                  color: "text-purple-400",
                },
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="p-6 rounded-2xl bg-gray-800/40 border border-gray-700/30 backdrop-blur-sm group hover:scale-105 transition-all duration-300"
                >
                  <stat.icon
                    className={`w-8 h-8 ${stat.color} mx-auto mb-3 group-hover:animate-pulse`}
                  />
                  <div className="text-2xl font-bold text-white mb-2">
                    {stat.value}
                  </div>
                  <div className="text-sm text-gray-400">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Background Effects */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-purple-500/5 rounded-full blur-3xl"></div>
      </section>
    </div>
  );
}
