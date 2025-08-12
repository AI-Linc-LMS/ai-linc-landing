"use client";

import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Code,
  GitBranch,
  Bug,
  Bot,
  Zap,
  CheckCircle,
  ArrowRight,
  TrendingUp,
  Clock,
  Users,
  Target,
  Cpu,
  Terminal,
  FileCode,
  TestTube,
  Shield,
  Rocket,
  Star,
  ChevronRight,
  PlayCircle,
} from "lucide-react";

interface Tool {
  id: string;
  name: string;
  icon: React.ComponentType<{ className?: string }>;
  category: string;
  description: string;
  caseStudy: {
    company: string;
    benefit: string;
    outcome: string;
    example: string;
    metrics: {
      productivity?: string;
      timeReduction?: string;
      bugReduction?: string;
      performance?: string;
    };
  };
  color: string;
  bgColor: string;
}

const tools: Tool[] = [
  {
    id: "github-copilot",
    name: "GitHub Copilot",
    icon: Code,
    category: "AI Code Generation",
    description:
      "AI-powered code suggestions and completions that help developers write code faster and with fewer errors.",
    caseStudy: {
      company: "GitHub",
      benefit:
        "GitHub uses GitHub Copilot to assist developers in writing code by suggesting code completions, functions, and snippets. This helped their developers significantly reduce the time spent on repetitive coding tasks.",
      outcome:
        "Developers saw a 30% increase in productivity, with much faster code generation and fewer bugs.",
      example:
        "Copilot was used for auto-completing code blocks in complex repositories, improving coding efficiency for new developers.",
      metrics: {
        productivity: "30% increase",
        timeReduction: "50% faster coding",
        bugReduction: "25% fewer bugs",
      },
    },
    color: "#10B981",
    bgColor: "from-green-500/10 to-green-600/5",
  },
  {
    id: "cursor-tabnine",
    name: "Cursor / Tabnine / CodeWhisperer",
    icon: Terminal,
    category: "Smart Code Assistants",
    description:
      "Advanced AI coding assistants that provide intelligent code completions and optimization suggestions.",
    caseStudy: {
      company: "Intuit",
      benefit:
        "Intuit integrated Amazon CodeWhisperer into their development pipeline to enhance the efficiency of their engineers by suggesting code completions, automatically optimizing queries, and recommending fixes.",
      outcome:
        "The engineering team reduced development time for complex financial tools by 40% and minimized code errors by 20%.",
      example:
        "Developers used it for building tax calculation features that were error-free and optimized.",
      metrics: {
        timeReduction: "40% faster development",
        bugReduction: "20% fewer errors",
        productivity: "35% boost",
      },
    },
    color: "#3B82F6",
    bgColor: "from-blue-500/10 to-blue-600/5",
  },
  {
    id: "code-review-tools",
    name: "GitHub Copilot Reviewer / CodeRabbit",
    icon: GitBranch,
    category: "Automated Code Review",
    description:
      "AI-powered code review tools that automatically detect bugs and ensure code quality in pull requests.",
    caseStudy: {
      company: "Uber",
      benefit:
        "Uber incorporated GitHub Copilot Reviewer and Cursor BugBot into their CI/CD pipelines. These tools automatically review pull requests and detect potential bugs, ensuring that only high-quality code is deployed.",
      outcome:
        "Uber decreased manual code review time by 50% and reduced production bugs by 30%.",
      example:
        "The tools helped in the review of Uber's ride-sharing algorithm code, catching issues related to ride allocation and pricing.",
      metrics: {
        timeReduction: "50% less review time",
        bugReduction: "30% fewer bugs",
        productivity: "60% automation",
      },
    },
    color: "#8B5CF6",
    bgColor: "from-purple-500/10 to-purple-600/5",
  },
  {
    id: "openai-codex",
    name: "OpenAI Codex / GPT-4.1 Tools",
    icon: Bot,
    category: "AI Code Generation",
    description:
      "Advanced language models that generate functional code from natural language descriptions and requirements.",
    caseStudy: {
      company: "Shopify",
      benefit:
        "Shopify used OpenAI Codex to assist their engineers in automating the generation of APIs and backend integrations. Codex helped synthesize functional code from user requirements, streamlining the development process.",
      outcome:
        "Development time reduced by 35%, with significantly fewer bugs in generated code.",
      example:
        "Used for automatically generating customer-facing APIs based on the business logic of e-commerce applications.",
      metrics: {
        timeReduction: "35% faster development",
        bugReduction: "40% fewer bugs",
        productivity: "45% improvement",
      },
    },
    color: "#F59E0B",
    bgColor: "from-amber-500/10 to-amber-600/5",
  },
  {
    id: "amazon-kiro",
    name: "Amazon Kiro (Beta)",
    icon: Cpu,
    category: "Multi-Modal AI Development",
    description:
      "Next-generation AI development tool with multi-modal inputs including voice commands for code generation.",
    caseStudy: {
      company: "IBM",
      benefit:
        "IBM experimented with Amazon Kiro to automate code generation, detect issues, and optimize code performance. Kiro utilized multi-modal inputs, such as voice commands, to help developers generate code more quickly.",
      outcome:
        "Developers reduced manual coding time by 25% and improved code performance by 20% due to the real-time issue detection feature.",
      example:
        "Kiro was used by developers working on cloud-based solutions to auto-generate functions and optimize resource utilization.",
      metrics: {
        timeReduction: "25% less coding time",
        performance: "20% better performance",
        productivity: "30% boost",
      },
    },
    color: "#EF4444",
    bgColor: "from-red-500/10 to-red-600/5",
  },
  {
    id: "reflection-ai",
    name: "Reflection AI / Graphite / Greptile",
    icon: Target,
    category: "Agentic Software Management",
    description:
      "AI agents that automate backlog prioritization, test generation, and bug reporting processes.",
    caseStudy: {
      company: "Salesforce",
      benefit:
        "Salesforce integrated Reflection AI to automate the backlog prioritization, test generation, and bug reporting process for their CRM system. By leveraging agentic AI for software management, they were able to reduce manual effort.",
      outcome:
        "The backlog was reduced by 50% and testing processes were 30% faster, resulting in quicker releases.",
      example:
        "Reflection AI helped identify potential regression bugs in Salesforce's complex feature updates, allowing teams to focus on more critical tasks.",
      metrics: {
        timeReduction: "30% faster testing",
        productivity: "50% backlog reduction",
        bugReduction: "40% fewer regressions",
      },
    },
    color: "#06B6D4",
    bgColor: "from-cyan-500/10 to-cyan-600/5",
  },
  {
    id: "claude-code",
    name: "Zencoder Zen Agents / Claude Code",
    icon: Shield,
    category: "Automated Code Review & Testing",
    description:
      "AI agents that handle routine code checks and automated testing for complex applications.",
    caseStudy: {
      company: "Netflix",
      benefit:
        "Netflix adopted Claude Code to automate the code review and testing process in their video streaming platform. The AI agents handled routine code checks and allowed developers to focus on more complex tasks.",
      outcome:
        "Netflix improved code quality by 40%, as the automated code review agents flagged issues faster and more accurately.",
      example:
        "Claude Code was used to automatically test new features, such as personalized recommendation algorithms, before deployment.",
      metrics: {
        productivity: "40% quality improvement",
        timeReduction: "60% faster reviews",
        bugReduction: "35% fewer issues",
      },
    },
    color: "#8B5CF6",
    bgColor: "from-violet-500/10 to-violet-600/5",
  },
  {
    id: "testsigma",
    name: "Testsigma",
    icon: TestTube,
    category: "Natural Language Testing",
    description:
      "AI-powered testing platform that generates test scripts from natural language descriptions.",
    caseStudy: {
      company: "Walmart",
      benefit:
        "Walmart used Testsigma to automate the testing of their e-commerce platform's checkout process. Testsigma generated natural language test scripts and executed them without manual intervention, improving testing efficiency.",
      outcome:
        "Walmart reduced manual testing time by 60% and increased test coverage by 40%.",
      example:
        "Used for validating the user experience on their mobile app, ensuring that checkout and payment processes worked seamlessly across various devices.",
      metrics: {
        timeReduction: "60% less testing time",
        productivity: "40% more coverage",
        bugReduction: "30% fewer issues",
      },
    },
    color: "#F97316",
    bgColor: "from-orange-500/10 to-orange-600/5",
  },
  {
    id: "testrigor",
    name: "testRigor",
    icon: FileCode,
    category: "English-to-Test Automation",
    description:
      "Convert plain English descriptions into executable test scripts with AI-powered automation.",
    caseStudy: {
      company: "Target",
      benefit:
        "Target implemented testRigor to convert English language descriptions into executable test scripts for their e-commerce platform. The AI tool significantly reduced the time spent on writing and executing test scripts.",
      outcome:
        "Target achieved a 50% faster testing cycle, with fewer errors identified in live product environments.",
      example:
        "Test scripts were automatically generated for scenarios such as product browsing, cart additions, and payment gateway functionality.",
      metrics: {
        timeReduction: "50% faster cycles",
        productivity: "70% automation",
        bugReduction: "25% fewer errors",
      },
    },
    color: "#EC4899",
    bgColor: "from-pink-500/10 to-pink-600/5",
  },
  {
    id: "mabl",
    name: "Mabl",
    icon: Rocket,
    category: "Intelligent Test Automation",
    description:
      "AI-driven testing platform for web, mobile, and API interfaces with performance optimization.",
    caseStudy: {
      company: "Atlassian",
      benefit:
        "Atlassian used Mabl for automating functional and performance tests for their collaboration tools, such as Jira and Confluence. Mabl ran tests across web, mobile, and API interfaces, helping developers identify issues early.",
      outcome:
        "The company reported a 25% reduction in test execution time and identified performance bottlenecks in their products earlier.",
      example:
        "Mabl helped test and optimize the performance of Atlassian's cloud-based services to ensure smoother user experience during peak traffic times.",
      metrics: {
        timeReduction: "25% faster execution",
        performance: "30% better optimization",
        productivity: "40% early detection",
      },
    },
    color: "#14B8A6",
    bgColor: "from-teal-500/10 to-teal-600/5",
  },
];

export default function AIPoweredSoftwareDevelopmentTesting() {
  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-slate-900 via-gray-900 to-black text-white">
      {/* Hero Section */}
      <section className="relative py-16 sm:py-20 lg:py-24 overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16 w-full"
          >
            <Badge className="mb-6 bg-gradient-to-r from-blue-500/20 to-purple-500/20 border-blue-500/30 text-blue-300 text-sm font-medium px-6 py-2">
              Module 3 • Advanced Development Track
            </Badge>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent leading-tight">
              AI-Powered Software Development
              <br />
              <span className="text-green-400">& Testing Revolution</span>
            </h1>

            <p className="text-lg sm:text-xl lg:text-2xl text-gray-300 max-w-4xl mx-auto mb-8 leading-relaxed">
              Master the cutting-edge AI tools that are transforming how
              developers code, test, and deploy software.
              <br className="hidden sm:block" />
              <span className="text-blue-400 font-semibold">
                From GitHub Copilot to intelligent testing platforms.
              </span>
            </p>

            {/* Key Benefits */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 max-w-5xl mx-auto mb-12">
              {[
                {
                  icon: Code,
                  label: "60% Faster Coding",
                  color: "text-green-400",
                },
                { icon: Bug, label: "40% Fewer Bugs", color: "text-blue-400" },
                {
                  icon: TestTube,
                  label: "Automated Testing",
                  color: "text-purple-400",
                },
                {
                  icon: Rocket,
                  label: "Rapid Deployment",
                  color: "text-cyan-400",
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                  className="flex flex-col items-center p-4 rounded-xl bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700/30 backdrop-blur-sm"
                >
                  <item.icon
                    className={`w-6 h-6 sm:w-8 sm:h-8 ${item.color} mb-2`}
                  />
                  <span className="text-sm sm:text-base font-medium text-gray-300">
                    {item.label}
                  </span>
                </motion.div>
              ))}
            </div>

            {/* CTA Section */}
            {/* 
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
              <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white font-semibold px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg w-full sm:w-auto">
                <PlayCircle className="w-5 h-5 mr-2" />
                Start Development Journey
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <Button
                variant="outline"
                className="border-gray-600 text-gray-300 hover:bg-gray-800 px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg w-full sm:w-auto"
              >
                <Star className="w-5 h-5 mr-2" />
                View Case Studies
              </Button>
            </motion.div>
            */}
          </motion.div>
        </div>

        {/* Floating Tech Icons */}
        <div className="absolute top-20 left-10 opacity-20">
          <motion.div
            animate={{ y: [0, -20, 0], rotate: [0, 180, 360] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          >
            <Code className="w-12 h-12 text-blue-500" />
          </motion.div>
        </div>
        <div className="absolute top-32 right-16 opacity-20">
          <motion.div
            animate={{ y: [0, 15, 0], rotate: [0, -180, -360] }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          >
            <GitBranch className="w-10 h-10 text-purple-500" />
          </motion.div>
        </div>
        <div className="absolute bottom-20 left-20 opacity-20">
          <motion.div
            animate={{ y: [0, -15, 0], x: [0, 10, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          >
            <TestTube className="w-8 h-8 text-green-500" />
          </motion.div>
        </div>

        {/* Background Gradient Effects */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>
      </section>

      {/* Tools Section with Modern Open Design */}
      <section className="py-16 sm:py-20 relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              10 Game-Changing Development Tools
            </h2>
            <p className="text-lg sm:text-xl text-gray-400 max-w-2xl mx-auto">
              Real transformations from industry leaders
            </p>
          </motion.div>

          {/* Modern Flex Layout */}
          <div className="flex flex-col gap-4 sm:gap-6 lg:gap-8">
            {tools.map((tool, index) => (
              <motion.div
                key={tool.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group w-full"
              >
                {/* Open Design Card */}
                <div className="relative">
                  {/* Main Content Area */}
                  <div className="flex flex-col lg:flex-row gap-4 lg:gap-8 p-4 sm:p-6 lg:p-8 bg-gradient-to-br from-gray-900/40 to-gray-800/20 backdrop-blur-sm rounded-3xl border border-gray-700/20 hover:border-gray-600/40 transition-all duration-500 group-hover:scale-[1.02] w-full">
                    {/* Left: Icon & Tool Info */}
                    <div className="flex-shrink-0 flex flex-col sm:flex-row lg:flex-col items-center sm:items-start lg:items-center text-center lg:text-center w-full lg:w-auto">
                      <div className="relative flex justify-center mb-4 sm:mb-0 sm:mr-4 lg:mr-0 lg:mb-4">
                        {/* Large Floating Icon */}
                        <motion.div
                          whileHover={{ scale: 1.1, rotate: 5 }}
                          className="w-16 h-16 sm:w-18 sm:h-18 lg:w-24 lg:h-24 rounded-2xl flex items-center justify-center"
                          style={{
                            background: `linear-gradient(135deg, ${tool.color}20, ${tool.color}10)`,
                            boxShadow: `0 10px 40px ${tool.color}20`,
                          }}
                        >
                          <tool.icon
                            className={`w-8 h-8 sm:w-9 sm:h-9 lg:w-12 lg:h-12`}
                          />
                        </motion.div>

                        {/* Company Badge */}
                        <div className="absolute -top-2 -right-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white text-xs font-bold px-2 sm:px-3 py-1 rounded-full">
                          {tool.caseStudy.company}
                        </div>
                      </div>

                      <div className="flex-1 sm:flex-initial lg:flex-initial">
                        <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-white mb-2 leading-tight">
                          {tool.name}
                        </h3>
                        <Badge className="bg-gray-700/40 text-gray-300 text-xs px-3 py-1">
                          {tool.category}
                        </Badge>
                      </div>
                    </div>

                    {/* Center: Description */}
                    <div className="flex-1 flex flex-col justify-center px-0 sm:px-4 lg:px-6">
                      <p className="text-gray-400 text-sm sm:text-base leading-relaxed mb-4">
                        {tool.description}
                      </p>

                      {/* Quick Benefit */}
                      <div className="bg-gray-800/30 rounded-xl p-3 sm:p-4">
                        <div className="flex items-start">
                          <CheckCircle className="w-4 h-4 text-green-400 mr-2 mt-0.5 flex-shrink-0" />
                          <p className="text-gray-300 text-xs sm:text-sm">
                            {tool.caseStudy.outcome}
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Right: Key Metrics */}
                    <div className="flex-shrink-0 lg:w-64">
                      {/* Impact Metrics - Responsive Layout */}
                      <div className="flex flex-row lg:flex-col gap-3 lg:gap-4 justify-around lg:justify-start">
                        {Object.entries(tool.caseStudy.metrics)
                          .slice(0, 3)
                          .map(([key, value]) => (
                            <div
                              key={key}
                              className="text-center lg:text-left p-2 lg:p-3 bg-gray-800/20 rounded-xl flex-1 lg:flex-initial"
                            >
                              <div
                                className="text-xl sm:text-2xl lg:text-3xl font-bold mb-1"
                                style={{ color: tool.color }}
                              >
                                {value.split(" ")[0]}
                              </div>
                              <div className="text-xs text-gray-400 leading-tight">
                                {value.split(" ").slice(1).join(" ")}
                                <br className="hidden lg:block" />
                                <span className="hidden sm:inline lg:inline">
                                  {key.replace(/([A-Z])/g, " $1").trim()}
                                </span>
                              </div>
                            </div>
                          ))}
                      </div>
                    </div>
                  </div>

                  {/* Expandable Details Section */}
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    whileHover={{ height: "auto", opacity: 1 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="mt-4 p-4 sm:p-6 bg-gray-800/20 rounded-2xl border border-gray-700/10">
                      {/* Case Study Details */}
                      <div className="flex flex-col lg:flex-row gap-4 lg:gap-6">
                        <div className="flex-1">
                          <h4 className="text-white font-semibold mb-2 flex items-center">
                            <Target
                              className={`w-4 h-4 mr-2`}
                              color={tool.color}
                            />
                            Implementation Example
                          </h4>
                          <p className="text-gray-400 text-sm leading-relaxed">
                            {tool.caseStudy.benefit}
                          </p>
                        </div>

                        {/* Real Example */}
                        <div className="flex-1 bg-gray-900/40 rounded-xl p-4">
                          <div className="flex items-start">
                            <CheckCircle className="w-4 h-4 text-green-400 mr-2 mt-0.5 flex-shrink-0" />
                            <p className="text-gray-300 text-xs italic leading-relaxed">
                              {tool.caseStudy.example}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Mobile Optimized Quick View */}
          <div className="block sm:hidden mt-8">
            <div className="flex flex-col space-y-4">
              {tools.slice(0, 6).map((tool, index) => (
                <motion.div
                  key={`mobile-${tool.id}`}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="relative"
                >
                  <div className="flex items-center justify-between p-4 bg-gradient-to-r from-gray-800/30 to-gray-900/20 rounded-2xl border border-gray-700/20">
                    {/* Left: Icon & Tool Info */}
                    <div className="flex items-center space-x-3 flex-1 min-w-0">
                      <div
                        className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                        style={{ backgroundColor: `${tool.color}20` }}
                      >
                        <tool.icon
                          className={`w-6 h-6`}
                        />
                      </div>

                      <div className="flex-1 min-w-0">
                        <h3 className="text-base font-bold text-white mb-1 truncate">
                          {tool.name}
                        </h3>
                        <div className="flex items-center space-x-2 text-sm">
                          <span className="text-gray-400 text-xs">
                            {tool.caseStudy.company}
                          </span>
                          <span className="text-gray-500">•</span>
                          <Badge className="bg-gray-700/40 text-gray-300 text-xs px-2 py-0.5">
                            {tool.category.split(" ")[0]}
                          </Badge>
                        </div>
                      </div>
                    </div>

                    {/* Right: Key Metrics Stacked */}
                    <div className="text-right flex-shrink-0 ml-2">
                      <div className="flex flex-col space-y-1">
                        {Object.entries(tool.caseStudy.metrics)
                          .slice(0, 2)
                          .map(([key, value], idx) => (
                            <div
                              key={key}
                              className="flex items-center justify-end space-x-1"
                            >
                              <span
                                className="text-sm font-bold"
                                style={{ color: tool.color }}
                              >
                                {value.split(" ")[0]}
                              </span>
                              <span className="text-xs text-gray-400">
                                {value.split(" ").slice(1).join(" ")}
                              </span>
                            </div>
                          ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-16 sm:py-20 bg-gradient-to-r from-blue-900/20 to-purple-900/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-6 text-white">
              Ready to Transform Your Development Workflow?
            </h2>
            <p className="text-lg sm:text-xl text-gray-300 mb-8">
              Join thousands of developers who have already automated their
              coding, testing, and deployment processes with AI.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white font-semibold px-8 py-4 text-lg w-full sm:w-auto">
                <Rocket className="w-5 h-5 mr-2" />
                Start AI Development Track
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <Button
                variant="outline"
                className="border-gray-600 text-gray-300 hover:bg-gray-800 px-8 py-4 text-lg w-full sm:w-auto"
              >
                <Clock className="w-5 h-5 mr-2" />
                View Full Curriculum
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
