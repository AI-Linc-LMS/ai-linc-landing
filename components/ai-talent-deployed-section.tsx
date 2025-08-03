"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { MapPin, Briefcase, TrendingUp, Users } from "lucide-react";

export function AiTalentDeployedSection() {
  const deploymentStats = [
    {
      icon: Users,
      value: "500+",
      label: "AI Professionals Deployed",
      description: "Across Fortune 500 companies",
    },
    {
      icon: Briefcase,
      value: "150+",
      label: "Companies Served",
      description: "Global tech leaders and startups",
    },
    {
      icon: TrendingUp,
      value: "85%",
      label: "Salary Increase",
      description: "Average post-deployment growth",
    },
    {
      icon: MapPin,
      value: "25+",
      label: "Countries",
      description: "Worldwide deployment reach",
    },
  ];

  const successStories = [
    {
      name: "Rohit Goldani",
      previousRole: "Marketing Executive",
      currentRole: "GM Marketing",
      company: "Nexzu Mobility",
      companyLogo: "/placeholder-logo.png",
      image: "/placeholder-user.jpg",
      salaryIncrease: "120%",
      story:
        "Transformed from traditional marketing to AI-driven growth strategies",
    },
    {
      name: "Trishita Malhotra",
      previousRole: "Business Analyst",
      currentRole: "Co-Founder",
      company: "Self-employed",
      companyLogo: "/placeholder-logo.png",
      image: "/placeholder-user.jpg",
      salaryIncrease: "300%",
      story: "Built an AI-powered startup after completing our program",
    },
    {
      name: "Rohit Kapoor",
      previousRole: "Systems Engineer",
      currentRole: "Brand Partner Specialist",
      company: "Shopimize",
      companyLogo: "/placeholder-logo.png",
      image: "/placeholder-user.jpg",
      salaryIncrease: "85%",
      story: "Leveraged AI skills to transition into brand partnerships",
    },
    {
      name: "Arpan Srivastava",
      previousRole: "Software Developer",
      currentRole: "Founder Director",
      company: "Faira Electronics & Services",
      companyLogo: "/placeholder-logo.png",
      image: "/placeholder-user.jpg",
      salaryIncrease: "200%",
      story: "Founded AI-driven electronics company",
    },
    {
      name: "Aniket Nadkar",
      previousRole: "Marketing Associate",
      currentRole: "Growth & Marketing Lead",
      company: "Tada7 Asia",
      companyLogo: "/placeholder-logo.png",
      image: "/placeholder-user.jpg",
      salaryIncrease: "95%",
      story: "Applied AI tools to scale marketing operations",
    },
    {
      name: "Divyansh Dubey",
      previousRole: "Junior Developer",
      currentRole: "Gen AI Specialist",
      company: "Google",
      companyLogo: "/Google.png",
      image: "/Divyansh_dubey.jpg",
      salaryIncrease: "150%",
      story: "Now working on cutting-edge AI projects at Google",
    },
  ];

  const companiesDeployed = [
    { name: "Google", logo: "/Google.png", count: "45+" },
    { name: "Microsoft", logo: "/Microsoft_logo.png", count: "38+" },
    { name: "Amazon", logo: "/amazon.png", count: "52+" },
    { name: "Meta", logo: "/placeholder-logo.png", count: "23+" },
    { name: "Apple", logo: "/placeholder-logo.png", count: "31+" },
    { name: "Tesla", logo: "/placeholder-logo.png", count: "19+" },
  ];

  const roleCategories = [
    {
      category: "AI/ML Engineering",
      roles: [
        "ML Engineer",
        "AI Research Scientist",
        "Data Scientist",
        "AI Solutions Architect",
      ],
      percentage: 35,
      color: "#0BC5EA",
    },
    {
      category: "Product & Strategy",
      roles: [
        "AI Product Manager",
        "AI Strategy Consultant",
        "Technical Program Manager",
      ],
      percentage: 25,
      color: "#6B46C1",
    },
    {
      category: "AI Implementation",
      roles: [
        "AI Implementation Specialist",
        "Automation Engineer",
        "AI Trainer",
      ],
      percentage: 20,
      color: "#F59E0B",
    },
    {
      category: "Leadership & Innovation",
      roles: ["AI Team Lead", "Chief AI Officer", "Innovation Director"],
      percentage: 20,
      color: "#10B981",
    },
  ];

  return (
    <section className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-white to-[#0BC5EA] bg-clip-text text-transparent">
            AI Talent Deployed
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Our graduates are transforming industries worldwide, bringing AI
            innovation to leading companies across the globe.
          </p>
        </motion.div>

        {/* Deployment Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {deploymentStats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-card/30 backdrop-blur-sm border border-[#0BC5EA]/20 rounded-xl p-6 text-center hover:border-[#0BC5EA]/40 transition-all duration-300"
            >
              <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-br from-[#0BC5EA]/20 to-[#6B46C1]/20 rounded-lg mb-4">
                <stat.icon className="w-6 h-6 text-[#0BC5EA]" />
              </div>
              <div className="text-2xl md:text-3xl font-bold text-white mb-2">
                {stat.value}
              </div>
              <div className="text-sm font-medium text-white mb-1">
                {stat.label}
              </div>
              <div className="text-xs text-gray-400">{stat.description}</div>
            </motion.div>
          ))}
        </div>

        {/* Success Stories */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h3 className="text-2xl font-bold text-center mb-8 text-white">
            Success Stories: Our Learners at Leading Companies
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {successStories.map((story, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-card/30 backdrop-blur-sm border border-gray-700/50 rounded-xl p-6 hover:border-[#0BC5EA]/40 transition-all duration-300 group"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-16 h-16 rounded-full overflow-hidden flex-shrink-0">
                    <img
                      src={story.image || "/placeholder-user.jpg"}
                      alt={story.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-white mb-1">
                      {story.name}
                    </h4>
                    <div className="flex items-center gap-2 mb-2">
                      <img
                        src={story.companyLogo || "/placeholder-logo.png"}
                        alt={story.company}
                        className="w-6 h-6 object-contain filter brightness-0 invert opacity-70"
                      />
                      <span className="text-sm text-[#0BC5EA] font-medium">
                        {story.company}
                      </span>
                    </div>
                    <p className="text-sm text-gray-300">{story.currentRole}</p>
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="bg-background/30 rounded-lg p-3">
                    <div className="text-xs text-gray-400 mb-1">
                      Career Transition
                    </div>
                    <div className="text-sm text-white">
                      <span className="text-gray-400">
                        {story.previousRole}
                      </span>
                      <span className="mx-2 text-[#0BC5EA]">→</span>
                      <span className="font-medium">{story.currentRole}</span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between bg-background/30 rounded-lg p-3">
                    <div>
                      <div className="text-xs text-gray-400 mb-1">
                        Salary Growth
                      </div>
                      <div className="text-lg font-bold text-green-400">
                        +{story.salaryIncrease}
                      </div>
                    </div>
                    <div className="w-12 h-12 bg-gradient-to-br from-green-400/20 to-[#0BC5EA]/20 rounded-lg flex items-center justify-center">
                      <TrendingUp className="w-6 h-6 text-green-400" />
                    </div>
                  </div>

                  <p className="text-xs text-gray-400 italic">
                    "{story.story}"
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Background glow effects */}
      <div className="absolute top-1/4 right-1/4 size-96 bg-[#0BC5EA]/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 left-1/4 size-96 bg-[#6B46C1]/5 rounded-full blur-3xl"></div>
    </section>
  );
}
