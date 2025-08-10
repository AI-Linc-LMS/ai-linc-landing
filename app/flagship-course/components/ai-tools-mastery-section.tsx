"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const aiTools = [
  {
    name: "ChatGPT",
    logo: "https://freelogopng.com/images/all_img/1681142315open-ai-logo.png",
    category: "Conversational AI",
    color: "from-green-500 to-emerald-500",
  },
  {
    name: "HUMATA",
    logo: "https://cdn.prod.website-files.com/64f4c1b0d5b2e889cedd7b0b/64f4c1b0d5b2e889cedd7b37_favicon-32x32.png",
    category: "Document AI",
    color: "from-orange-500 to-red-500",
  },
  {
    name: "Copilot",
    logo: "https://github.githubassets.com/assets/GitHub-Mark-ea2971cee799.png",
    category: "Code Assistant",
    color: "from-blue-500 to-cyan-500",
  },
  // {
  //   name: "Perplexity",
  //   logo: "https://yt3.googleusercontent.com/WMhp_9de--WM9k5Bwv2L9hKRBz5VPRhqCGC5wd2SkUnJw1BnsI8O3_v2rFdSaOYQJ5jzAl2b=s900-c-k-c0x00ffffff-no-rj",
  //   category: "Research AI",
  //   color: "from-purple-500 to-pink-500",
  // },
  {
    name: "Claude",
    logo: "https://claude.ai/images/claude_app_icon.png",
    category: "AI Assistant",
    color: "from-indigo-500 to-blue-500",
  },
  {
    name: "Notion AI",
    logo: "https://upload.wikimedia.org/wikipedia/commons/4/45/Notion_app_logo.png",
    category: "Productivity AI",
    color: "from-gray-500 to-gray-600",
  },
  {
    name: "Zapier",
    logo: "https://1000logos.net/wp-content/uploads/2022/09/Zapier-Logo-1536x864.png",
    category: "Automation",
    color: "from-orange-500 to-yellow-500",
  },
  // {
  //   name: "MidJourney",
  //   logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/midjourney/midjourney-original.svg",
  //   category: "Image Generation",
  //   color: "from-pink-500 to-rose-500",
  // },
];

const automationTasks = [
  {
    title: "Optimizing your profile",
    description:
      "AI-powered LinkedIn and resume optimization for maximum recruiter visibility",
    icon: "👤",
  },
  {
    title: "Generating content ideas",
    description:
      "Creative AI assistance for blog posts, social media, and professional content",
    icon: "💡",
  },
  {
    title: "Creating a custom note",
    description:
      "Intelligent note-taking systems with AI categorization and insights",
    icon: "📝",
  },
  {
    title: "Automating your replies",
    description:
      "Smart email and message automation with personalized responses",
    icon: "📧",
  },
  {
    title: "Communication in different languages",
    description: "Multi-language AI translation and communication tools",
    icon: "🌍",
  },
  {
    title: "Create video content",
    description:
      "AI-powered video creation, editing, and optimization workflows",
    icon: "🎥",
  },
  {
    title: "Generating images for presentations",
    description:
      "Custom visual content creation for professional presentations",
    icon: "🖼️",
  },
  {
    title: "Repurposing content",
    description: "Transform content across platforms with AI-driven adaptation",
    icon: "♻️",
  },
];

export function AiToolsMasterySection() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const toolItem = {
    hidden: { opacity: 0, scale: 0.8 },
    show: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
  };

  return (
    <section
      id="ai-tools-mastery"
      className="py-16 sm:py-20 relative overflow-hidden"
    >
      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-white via-[#0BC5EA] to-[#6B46C1] bg-clip-text text-transparent">
            You will master AI tools like
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Become proficient with industry-leading AI tools and automation
            platforms that are reshaping the modern workplace
          </p>
        </motion.div>

        {/* AI Tools Grid */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-3 gap-4 sm:gap-6 mb-12">
            {aiTools.map((tool, index) => (
              <motion.div key={tool.name} variants={toolItem}>
                <Card className="bg-gradient-to-b from-gray-800/50 to-gray-900/50 backdrop-blur-sm border-gray-700/50 hover:border-[#0BC5EA]/50 transition-all duration-300 group">
                  <CardContent className="p-4 sm:p-6 text-center">
                    <div className="flex items-center justify-center mb-4">
                      <div className="w-12 h-12 sm:w-16 sm:h-16 bg-white rounded-lg p-2 sm:p-3 flex items-center justify-center">
                        <img
                          src={tool.logo}
                          alt={`${tool.name} logo`}
                          className="w-full h-full object-contain"
                          loading="lazy"
                        />
                      </div>
                    </div>
                    <h3 className="text-lg sm:text-xl font-bold text-white mb-2 group-hover:text-[#0BC5EA] transition-colors">
                      {tool.name}
                    </h3>
                    <Badge
                      variant="outline"
                      className="border-gray-600/50 text-gray-400 text-xs"
                    >
                      {tool.category}
                    </Badge>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Automation Tasks Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 text-white">
            To help automate
          </h3>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Transform your workflow with AI-powered automation across these key
            areas
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {automationTasks.map((task, index) => (
              <motion.div key={task.title} variants={item}>
                <Card className="bg-gradient-to-b from-gray-800/30 to-gray-900/30 backdrop-blur-sm border-gray-700/30 hover:border-[#6B46C1]/50 transition-all duration-300 h-full group">
                  <CardContent className="p-4 sm:p-6 h-full flex flex-col">
                    <div className="text-2xl sm:text-3xl mb-3 sm:mb-4">
                      {task.icon}
                    </div>
                    <h4 className="text-lg sm:text-xl font-semibold text-white mb-2 sm:mb-3 group-hover:text-[#6B46C1] transition-colors">
                      {task.title}
                    </h4>
                    <p className="text-gray-300 text-sm sm:text-base flex-1">
                      {task.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <div className="bg-gradient-to-r from-[#0BC5EA]/10 to-[#6B46C1]/10 rounded-xl p-6 sm:p-8 border border-[#0BC5EA]/20">
            <p className="text-lg sm:text-xl text-gray-300 mb-4">
              <span className="text-[#0BC5EA] font-semibold">
                Master 25+ AI tools
              </span>{" "}
              and learn to
              <span className="text-[#6B46C1] font-semibold">
                {" "}
                automate 80% of your daily tasks
              </span>
            </p>
            <p className="text-gray-400">
              Join thousands of professionals who have transformed their
              productivity with AI
            </p>
          </div>
        </motion.div>

        {/* Background Effects */}
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-[#0BC5EA]/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-[#6B46C1]/5 rounded-full blur-3xl"></div>
      </div>
    </section>
  );
}
