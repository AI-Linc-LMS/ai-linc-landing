"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Target,
  Briefcase,
  TrendingUp,
  DollarSign,
  Rocket,
  CheckCircle,
} from "lucide-react";

const outcomes = [
  {
    id: 1,
    title: "Become AI-Ready Across Domains",
    description:
      "Master AI concepts applicable to various industries and job functions.",
    icon: Target,
    color: "from-blue-500 to-cyan-500",
    bgColor: "bg-blue-500/10",
    borderColor: "border-blue-500/30",
  },
  {
    id: 2,
    title: "Build Real AI Projects",
    description:
      "Develop a robust portfolio with practical projects in web, app, automation, and data analysis.",
    icon: Briefcase,
    color: "from-green-500 to-emerald-500",
    bgColor: "bg-green-500/10",
    borderColor: "border-green-500/30",
  },
  {
    id: 3,
    title: "Crack High-Paying Roles",
    description:
      "Secure lucrative positions across business, tech, and strategy sectors.",
    icon: DollarSign,
    color: "from-yellow-500 to-orange-500",
    bgColor: "bg-yellow-500/10",
    borderColor: "border-yellow-500/30",
  },
  {
    id: 4,
    title: "Achieve Faster Career Growth",
    description:
      "Accelerate your professional trajectory with in-demand AI expertise.",
    icon: TrendingUp,
    color: "from-purple-500 to-pink-500",
    bgColor: "bg-purple-500/10",
    borderColor: "border-purple-500/30",
  },
  {
    id: 5,
    title: "Better Salary Offers",
    description:
      "Command higher compensation packages through specialized AI skills.",
    icon: Rocket,
    color: "from-indigo-500 to-blue-500",
    bgColor: "bg-indigo-500/10",
    borderColor: "border-indigo-500/30",
  },
];

export function TangibleOutcomesSection() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const numberVariant = {
    hidden: { scale: 0, opacity: 0 },
    show: {
      scale: 1,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 10,
        duration: 0.6,
      },
    },
  };

  return (
    <section
      id="tangible-outcomes"
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
            Achieve Tangible Outcomes with AI
          </h2>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Our programs are designed to equip you with practical AI skills,
            translating directly into
            <span className="text-[#0BC5EA] font-semibold">
              {" "}
              career growth
            </span>{" "}
            and
            <span className="text-[#6B46C1] font-semibold">
              {" "}
              enhanced earning potential.
            </span>
          </p>
        </motion.div>

        {/* Outcomes Grid */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="space-y-6"
        >
          {outcomes.map((outcome, index) => (
            <motion.div key={outcome.id} variants={item}>
              <Card className="bg-gradient-to-r from-gray-800/50 to-gray-900/50 backdrop-blur-sm border-gray-700/50 hover:border-[#0BC5EA]/50 transition-all duration-300 group overflow-hidden">
                <CardContent className="p-6 sm:p-8">
                  <div className="flex flex-col lg:flex-row items-start lg:items-center gap-6">
                    {/* Number Badge */}
                    <motion.div
                      variants={numberVariant}
                      className="flex-shrink-0"
                    >
                      <div className="relative">
                        <div
                          className={`w-16 h-16 sm:w-20 sm:h-20 rounded-full ${outcome.bgColor} ${outcome.borderColor} border-2 flex items-center justify-center`}
                        >
                          <span className="text-2xl sm:text-3xl font-bold text-white">
                            {outcome.id}
                          </span>
                        </div>
                        <div className="absolute -top-1 -right-1">
                          <CheckCircle className="w-6 h-6 text-[#0BC5EA]" />
                        </div>
                      </div>
                    </motion.div>

                    {/* Icon */}
                    <div className="flex-shrink-0">
                      <div
                        className={`p-4 rounded-xl bg-gradient-to-r ${outcome.color}`}
                      >
                        <outcome.icon className="w-8 h-8 text-white" />
                      </div>
                    </div>

                    {/* Content */}
                    <div className="flex-1">
                      <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 group-hover:text-[#0BC5EA] transition-colors">
                        {outcome.title}
                      </h3>
                      <p className="text-gray-300 text-base sm:text-lg leading-relaxed">
                        {outcome.description}
                      </p>
                    </div>

                    {/* Decorative Element */}
                    <div className="hidden lg:block flex-shrink-0">
                      <div
                        className={`w-1 h-20 bg-gradient-to-b ${outcome.color} rounded-full opacity-50 group-hover:opacity-100 transition-opacity`}
                      ></div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom Statistics */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <div className="bg-gradient-to-r from-[#0BC5EA]/10 to-[#6B46C1]/10 rounded-xl p-6 sm:p-8 border border-[#0BC5EA]/20">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
              <div>
                <div className="text-3xl sm:text-4xl font-bold text-[#0BC5EA] mb-2">
                  92%
                </div>
                <div className="text-gray-300">Career Growth Reported</div>
              </div>
              <div>
                <div className="text-3xl sm:text-4xl font-bold text-[#6B46C1] mb-2">
                  65%
                </div>
                <div className="text-gray-300">Average Salary Increase</div>
              </div>
              <div>
                <div className="text-3xl sm:text-4xl font-bold text-[#0BC5EA] mb-2">
                  3 months
                </div>
                <div className="text-gray-300">Average Time to Role</div>
              </div>
            </div>

            <div className="mt-6 pt-6 border-t border-gray-700/50">
              <p className="text-center text-gray-300 text-lg">
                Join{" "}
                <span className="text-[#0BC5EA] font-semibold">
                  5,000+ professionals
                </span>{" "}
                who have transformed their careers with AI expertise
              </p>
            </div>
          </div>
        </motion.div>

        {/* Background Effects */}
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-[#0BC5EA]/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-[#6B46C1]/5 rounded-full blur-3xl"></div>
      </div>
    </section>
  );
}
