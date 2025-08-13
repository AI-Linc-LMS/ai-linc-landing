"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import {
  Briefcase,
  FileText,
  TrendingUp,
  Users,
  Target,
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
  Building2,
  ArrowUpRight,
  CheckCircle2,
  Star,
  Zap,
  Search,
  User,
  Mail,
  Calendar,
  BarChart3,
  Layers,
  Globe,
  Crown,
  Shield,
  Rocket,
  Trophy,
  GraduationCap,
  UserCheck,
  MessageSquare,
} from "lucide-react";
import Link from "next/link";

interface CareerAITool {
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
  bgGradient: string;
  features: string[];
  careerStage: string;
}

const careerAITools: CareerAITool[] = [
  {
    id: "kickresume-ai",
    name: "Kickresume AI",
    icon: FileText,
    category: "Resume & CV Builder",
    subtitle: "AI-Powered Professional Profile Creation",
    description:
      "Advanced AI resume builder that creates compelling, ATS-optimized resumes and cover letters tailored to specific job requirements and industry standards.",
    caseStudy: {
      company: "LinkedIn",
      industry: "Professional Networking",
      benefit:
        "LinkedIn used Kickresume AI to assist users in drafting better cover letters and resumes, helping job seekers to stand out in competitive job markets.",
      outcome:
        "50% more users saw increased responses from recruiters after using Kickresume-powered features.",
      metrics: {
        improvement: "50%",
        impact: "Recruiter Response",
        category: "Resume Optimization",
      },
    },
    color: "#0077B5",
    bgGradient: "from-blue-600/20 via-cyan-500/15 to-blue-400/10",
    features: [
      "ATS Optimization",
      "Industry Templates",
      "AI Writing",
      "Skills Matching",
    ],
    careerStage: "Job Application",
  },
  {
    id: "grammarly-cover-letter",
    name: "Grammarly Cover Letter Generator",
    icon: MessageSquare,
    category: "Professional Communication",
    subtitle: "AI-Enhanced Business Writing Excellence",
    description:
      "Intelligent writing assistant that crafts professional cover letters with perfect grammar, tone optimization, and persuasive content structure.",
    caseStudy: {
      company: "KPMG",
      industry: "Professional Services",
      benefit:
        "KPMG used Grammarly's cover letter generator to improve the quality of applications received through their online portal, ensuring more consistent and professional submissions.",
      outcome:
        "Increased the quality of cover letter submissions by 40%, improving candidate shortlisting efficiency.",
      metrics: {
        improvement: "40%",
        impact: "Application Quality",
        category: "Communication Excellence",
      },
    },
    color: "#15C39A",
    bgGradient: "from-green-500/20 via-emerald-500/15 to-teal-400/10",
    features: [
      "Grammar Perfection",
      "Tone Analysis",
      "Content Suggestions",
      "Professional Templates",
    ],
    careerStage: "Application Writing",
  },
  {
    id: "teal-career",
    name: "Teal (Cover-Letter Tool)",
    icon: Target,
    category: "Job Matching & Personalization",
    subtitle: "Role-Specific Application Customization",
    description:
      "Smart career platform that analyzes job descriptions and tailors resumes and cover letters to match specific role requirements and company culture.",
    caseStudy: {
      company: "Goldman Sachs",
      industry: "Investment Banking",
      benefit:
        "Goldman Sachs implemented Teal's AI tools for applicants to tailor resumes and cover letters based on specific job descriptions, improving alignment with role requirements.",
      outcome:
        "Enhanced the quality of applications, reducing interview preparation time by 30%.",
      metrics: {
        improvement: "30%",
        impact: "Interview Prep Time",
        category: "Application Targeting",
      },
    },
    color: "#8B5CF6",
    bgGradient: "from-purple-500/20 via-violet-500/15 to-indigo-400/10",
    features: [
      "Job Description Analysis",
      "Role Alignment",
      "Keyword Optimization",
      "Custom Tailoring",
    ],
    careerStage: "Strategic Positioning",
  },
  {
    id: "ai-apply",
    name: "AIApply",
    icon: Rocket,
    category: "Application Automation",
    subtitle: "Streamlined Job Application Workflow",
    description:
      "Comprehensive AI platform that automates the entire job application process from resume submission to interview scheduling and follow-up communications.",
    caseStudy: {
      company: "IBM",
      industry: "Technology & Consulting",
      benefit:
        "IBM used AIApply to automate job application processes, from resume submission to interview scheduling, providing smoother experiences for both candidates and recruiters.",
      outcome:
        "Reduced hiring time by 25% and improved candidate satisfaction with the recruitment process.",
      metrics: {
        improvement: "25%",
        impact: "Hiring Speed",
        category: "Process Automation",
      },
    },
    color: "#F59E0B",
    bgGradient: "from-amber-500/20 via-orange-500/15 to-yellow-400/10",
    features: [
      "Auto-Application",
      "Interview Scheduling",
      "Follow-up Automation",
      "Pipeline Management",
    ],
    careerStage: "Application Management",
  },
  {
    id: "careerflow-ai",
    name: "Careerflow.ai",
    icon: BarChart3,
    category: "ATS Optimization & Analytics",
    subtitle: "Data-Driven Career Intelligence Platform",
    description:
      "Advanced analytics platform that optimizes resumes for Applicant Tracking Systems while providing career insights and market trend analysis.",
    caseStudy: {
      company: "Amazon",
      industry: "E-commerce & Cloud Computing",
      benefit:
        "Amazon used Careerflow.ai for optimizing resumes to pass Applicant Tracking Systems (ATS), ensuring job applications are more likely to be noticed by recruiters.",
      outcome:
        "Increased job application success rates by 30%, leading to faster hiring decisions.",
      metrics: {
        improvement: "30%",
        impact: "Application Success",
        category: "ATS Optimization",
      },
    },
    color: "#EF4444",
    bgGradient: "from-red-500/20 via-pink-500/15 to-rose-400/10",
    features: [
      "ATS Scoring",
      "Market Analytics",
      "Success Tracking",
      "Optimization Insights",
    ],
    careerStage: "Performance Analytics",
  },
];

export default function AIPoweredCareerAdvancementStrategies() {
  const [activeStage, setActiveStage] = useState<string | null>(null);
  const [hoveredTool, setHoveredTool] = useState<number | null>(null);

  const careerStages = [
    {
      id: "application",
      name: "Job Application",
      icon: FileText,
      color: "text-blue-400",
    },
    {
      id: "writing",
      name: "Application Writing",
      icon: MessageSquare,
      color: "text-green-400",
    },
    {
      id: "positioning",
      name: "Strategic Positioning",
      icon: Target,
      color: "text-purple-400",
    },
    {
      id: "management",
      name: "Application Management",
      icon: Rocket,
      color: "text-orange-400",
    },
    {
      id: "analytics",
      name: "Performance Analytics",
      icon: BarChart3,
      color: "text-red-400",
    },
  ];

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-gray-950 via-slate-900 to-gray-950 text-white relative overflow-hidden">
      {/* Navigation Links - Floating Design */}
      <div className="flex text-start mt-10"></div>

      <div className="fixed top-6 left-6 right-6 z-50 flex justify-between items-center">
        <Link
          href="/flagship-course/module/business-applications-of-ai"
          className="group flex items-center gap-3 px-5 py-3 bg-gradient-to-r from-gray-800/90 to-gray-700/80 backdrop-blur-md rounded-2xl border border-gray-600/40 text-gray-300 hover:text-white hover:from-gray-700/90 hover:to-gray-600/80 transition-all duration-300 shadow-lg"
        >
          <ChevronLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform duration-300" />
          <span className="text-sm font-medium hidden sm:block">Module 6</span>
        </Link>
        <div className="absolute left-1/2 transform -translate-x-1/2">
          <Badge className="bg-gradient-to-r from-purple-500/20 to-blue-500/20 border-purple-500/30 text-purple-900 text-sm font-medium px-8 py-3 shadow-lg backdrop-blur-sm">
            Module 7 • AI‑Powered Career Advancement Strategies
          </Badge>
        </div>
      </div>

      {/* Hero Section - Career-Focused Design */}
      <section className="relative py-20 sm:py-24 lg:py-32 overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2 }}
            className="text-center mb-24"
          >
            {/* Career Journey Visual */}
            <div className="flex justify-center mb-12">
              <div className="relative">
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                  className="w-20 h-20 sm:w-24 sm:h-24 rounded-3xl bg-gradient-to-br from-purple-500/30 to-blue-500/20 border border-purple-400/30 flex items-center justify-center backdrop-blur-sm"
                >
                  <GraduationCap className="w-10 h-10 sm:w-12 sm:h-12 text-purple-400" />
                </motion.div>
                <motion.div
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                  className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center"
                >
                  <Crown className="w-4 h-4 text-white" />
                </motion.div>
              </div>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-bold mb-8 leading-tight">
              <span className="bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
                AI-Powered Career
              </span>
              <br />
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Advancement
              </span>
            </h1>

            <p className="text-lg sm:text-xl lg:text-2xl text-gray-300 max-w-5xl mx-auto mb-12 leading-relaxed">
              Transform your career trajectory with AI-powered tools and
              strategies.
              <br className="hidden sm:block" />
              <span className="text-transparent bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text font-semibold">
                From resume optimization to interview success, accelerate your
                professional growth with intelligent automation.
              </span>
            </p>

            {/* Career Success Metrics */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 max-w-6xl mx-auto">
              {[
                {
                  icon: TrendingUp,
                  label: "Success Rate",
                  value: "+50%",
                  color: "text-green-400",
                },
                {
                  icon: Clock,
                  label: "Time Saved",
                  value: "25-30%",
                  color: "text-blue-400",
                },
                {
                  icon: Trophy,
                  label: "Interview Rate",
                  value: "+40%",
                  color: "text-yellow-400",
                },
                {
                  icon: UserCheck,
                  label: "Recruiter Response",
                  value: "+35%",
                  color: "text-purple-400",
                },
              ].map((metric, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8, y: 30 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 + index * 0.1 }}
                  className="group relative"
                >
                  <div className="p-4 sm:p-6 rounded-2xl bg-gradient-to-br from-gray-800/50 to-gray-900/30 border border-gray-700/40 backdrop-blur-sm group-hover:scale-105 group-hover:border-gray-600/60 transition-all duration-300">
                    <metric.icon
                      className={`w-8 h-8 sm:w-10 sm:h-10 ${metric.color} mx-auto mb-3 group-hover:animate-pulse`}
                    />
                    <div className="text-xl sm:text-2xl font-bold text-white mb-2">
                      {metric.value}
                    </div>
                    <div className="text-xs sm:text-sm text-gray-400">
                      {metric.label}
                    </div>
                  </div>
                  {/* Hover glow effect */}
                  <div
                    className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{
                      background: `radial-gradient(circle at center, ${metric.color
                        .replace("text-", "")
                        .replace("-400", "")}15, transparent 70%)`,
                      filter: "blur(10px)",
                      zIndex: -1,
                    }}
                  />
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Animated Career Path Background Elements */}
        <div className="absolute top-20 left-10 opacity-20">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="w-16 h-16 border-2 border-purple-400/30 rounded-2xl"
          />
        </div>
        <div className="absolute top-40 right-16 opacity-20">
          <motion.div
            animate={{ y: [-10, 10, -10] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="w-12 h-12 bg-gradient-to-br from-blue-500/20 to-purple-500/10 rounded-full"
          />
        </div>
        <div className="absolute bottom-20 left-20 opacity-20">
          <motion.div
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            className="w-14 h-14 border border-cyan-400/30 rounded-xl"
          />
        </div>

        {/* Background Gradients */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
      </section>

      {/* Career Stage Navigator */}
      <section className="py-8 sm:py-12 relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              Your AI-Powered Career Journey
            </h2>
            <p className="text-gray-400 text-lg">
              Navigate through each stage of professional advancement
            </p>
          </motion.div>

          {/* Stage Pills */}
          <div className="flex flex-wrap justify-center gap-3 sm:gap-4 mb-16">
            {careerStages.map((stage, index) => (
              <motion.button
                key={stage.id}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                onClick={() =>
                  setActiveStage(activeStage === stage.id ? null : stage.id)
                }
                className={`group flex items-center gap-2 sm:gap-3 px-3 sm:px-6 py-2 sm:py-3 rounded-2xl transition-all duration-300 ${
                  activeStage === stage.id
                    ? "bg-gradient-to-r from-purple-500/30 to-blue-500/20 border-purple-400/50"
                    : "bg-gray-800/40 border-gray-600/30 hover:bg-gray-700/50"
                } border backdrop-blur-sm`}
              >
                <stage.icon
                  className={`w-4 h-4 sm:w-5 sm:h-5 ${stage.color} group-hover:animate-pulse`}
                />
                <span className="text-xs sm:text-sm font-medium text-white">
                  {stage.name}
                </span>
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* Career AI Tools Showcase */}
      <section className="py-16 sm:py-20 relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
              5 Essential Career AI Tools
            </h2>
            <p className="text-lg sm:text-xl text-gray-400 max-w-4xl mx-auto">
              Professional tools trusted by Fortune 500 companies for talent
              acquisition and career development
            </p>
          </motion.div>

          {/* Tools Vertical Stack with Unique Design */}
          <div className="space-y-8 sm:space-y-12 max-w-6xl mx-auto">
            {careerAITools.map((tool, index) => (
              <motion.div
                key={tool.id}
                initial={{ opacity: 0, x: index % 2 === 0 ? -60 : 60 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
                onMouseEnter={() => setHoveredTool(index)}
                onMouseLeave={() => setHoveredTool(null)}
              >
                <div
                  className={`relative overflow-hidden rounded-3xl bg-gradient-to-br ${tool.bgGradient} border border-gray-700/40 group-hover:border-gray-600/60 transition-all duration-500`}
                >
                  {/* Main Content Container */}
                  <div className="flex flex-col lg:flex-row">
                    {/* Visual Section */}
                    <div className="lg:w-2/5 p-6 sm:p-8 lg:p-10 flex flex-col justify-center relative">
                      {/* Career Stage Badge */}
                      <div className="mb-6">
                        <Badge className="bg-gray-800/60 text-gray-300 hover:text-gray-800 text-xs px-3 py-1 mb-4">
                          {tool.careerStage}
                        </Badge>
                        <Badge className="bg-gray-800/40 text-gray-400 hover:text-gray-800 text-xs px-3 py-1">
                          {tool.category}
                        </Badge>
                      </div>

                      {/* Tool Icon & Name */}
                      <div className="flex items-center gap-6 mb-6">
                        <motion.div
                          whileHover={{ scale: 1.1, rotate: 5 }}
                          className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl flex items-center justify-center backdrop-blur-sm border border-gray-600/30"
                          style={{
                            background: `linear-gradient(135deg, ${tool.color}30, ${tool.color}10)`,
                            boxShadow: `0 10px 30px ${tool.color}20`,
                          }}
                        >
                          <tool.icon className="w-8 h-8 sm:w-10 sm:h-10" />
                        </motion.div>

                        <div>
                          <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white mb-2 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-300 group-hover:bg-clip-text transition-all duration-300">
                            {tool.name}
                          </h3>
                          <p
                            className="text-base sm:text-lg font-medium"
                            style={{ color: tool.color }}
                          >
                            {tool.subtitle}
                          </p>
                        </div>
                      </div>

                      {/* Features Grid */}
                      <div className="grid grid-cols-2 gap-2 sm:gap-3">
                        {tool.features.map((feature, featureIndex) => (
                          <motion.div
                            key={featureIndex}
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{
                              duration: 0.4,
                              delay: 0.1 * featureIndex,
                            }}
                            className="flex items-center gap-2 p-2 sm:p-3 bg-gray-800/30 rounded-xl border border-gray-700/20"
                          >
                            <CheckCircle2
                              className="w-3 h-3 sm:w-4 sm:h-4"
                              style={{ color: tool.color }}
                            />
                            <span className="text-xs sm:text-sm text-gray-300">
                              {feature}
                            </span>
                          </motion.div>
                        ))}
                      </div>
                    </div>

                    {/* Content Section */}
                    <div className="lg:w-3/5 p-6 sm:p-8 lg:p-10 bg-gray-900/30 backdrop-blur-sm">
                      {/* Description */}
                      <p className="text-gray-300 text-sm sm:text-base leading-relaxed mb-8">
                        {tool.description}
                      </p>

                      {/* Case Study Section */}
                      <div className="bg-gray-800/40 rounded-2xl p-4 sm:p-6 border border-gray-700/30">
                        {/* Company Header */}
                        <div className="flex items-center justify-between mb-6">
                          <div className="flex items-center gap-4">
                            <div className="w-12 h-12 rounded-xl bg-gray-700/50 flex items-center justify-center">
                              <Building2
                                className="w-6 h-6"
                                style={{ color: tool.color }}
                              />
                            </div>
                            <div>
                              <h4 className="text-lg sm:text-xl font-bold text-white">
                                {tool.caseStudy.company}
                              </h4>
                              <p className="text-sm text-gray-400">
                                {tool.caseStudy.industry}
                              </p>
                            </div>
                          </div>

                          {/* Impact Metric */}
                          <div className="text-right">
                            <div
                              className="text-2xl sm:text-3xl font-bold mb-1"
                              style={{ color: tool.color }}
                            >
                              {tool.caseStudy.metrics.improvement}
                            </div>
                            <div className="text-xs text-gray-400">
                              {tool.caseStudy.metrics.impact}
                            </div>
                          </div>
                        </div>

                        {/* Implementation & Outcome */}
                        <div className="space-y-4">
                          <div className="bg-gray-700/30 rounded-xl p-4 border border-gray-600/20">
                            <h5 className="text-white font-semibold text-sm mb-3 flex items-center">
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

                          <div className="bg-gray-700/30 rounded-xl p-4 border border-gray-600/20">
                            <h5 className="text-white font-semibold text-sm mb-3 flex items-center">
                              <Trophy className="w-4 h-4 mr-2 text-yellow-400" />
                              Career Impact
                            </h5>
                            <p className="text-green-300 text-sm font-medium">
                              {tool.caseStudy.outcome}
                            </p>
                          </div>
                        </div>

                        {/* Success Metrics Row */}
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

                  {/* Hover Enhancement Indicator */}
                  {hoveredTool === index && (
                    <motion.div
                      initial={{ scale: 0, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      className="absolute top-6 right-6 z-10"
                    >
                      <div
                        className="w-10 h-10 rounded-full flex items-center justify-center backdrop-blur-sm border border-gray-600/40"
                        style={{ background: `${tool.color}20` }}
                      >
                        <ArrowUpRight
                          className="w-5 h-5"
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

      {/* Bottom Career Success Section */}
      <section className="py-16 sm:py-20 bg-gradient-to-r from-gray-900/50 via-slate-900/40 to-gray-900/50 relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-5xl mx-auto"
          >
            <div className="flex justify-center mb-8">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-500/30 to-blue-500/20 border border-purple-400/30 flex items-center justify-center backdrop-blur-sm">
                <Rocket className="w-8 h-8 text-purple-400" />
              </div>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-8 text-white">
              Accelerate Your Career with AI Intelligence
            </h2>
            <p className="text-lg sm:text-xl text-gray-300 mb-12 leading-relaxed">
              Join professionals at LinkedIn, KPMG, Goldman Sachs, IBM, and
              Amazon who are leveraging AI for career advancement.
              <br className="hidden sm:block" />
              <span className="text-transparent bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text font-semibold">
                Transform your professional journey with data-driven career
                strategies and intelligent automation.
              </span>
            </p>

            {/* Final Career Success Stats */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
              {[
                {
                  label: "Professional Networks",
                  value: "Top 5",
                  icon: Network,
                  color: "text-purple-400",
                },
                {
                  label: "Career Success Rate",
                  value: "50%+",
                  icon: TrendingUp,
                  color: "text-green-400",
                },
                {
                  label: "Time to Hire",
                  value: "25% Faster",
                  icon: Clock,
                  color: "text-blue-400",
                },
                {
                  label: "Industry Coverage",
                  value: "All Sectors",
                  icon: Globe,
                  color: "text-orange-400",
                },
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8, y: 20 }}
                  whileInView={{ opacity: 1, scale: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="group relative"
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
                  {/* Subtle glow effect */}
                  <div
                    className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"
                    style={{
                      background: `radial-gradient(circle at center, ${stat.color
                        .replace("text-", "")
                        .replace("-400", "")}10, transparent 70%)`,
                      filter: "blur(15px)",
                    }}
                  />
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Background Effects */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-purple-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl"></div>
      </section>
    </div>
  );
}
