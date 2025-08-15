"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Calendar, Clock, ArrowRight, Star, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";

type ProgramsModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

export function ProgramsModal({ isOpen, onClose }: ProgramsModalProps) {
  const [mounted, setMounted] = useState(false);

  // Ensure component is mounted before rendering to prevent hydration issues
  useEffect(() => {
    setMounted(true);
  }, []);

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (!mounted) return;

    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen, mounted]);

  const courses = [
    {
      id: 1,
      title: "Flagship Program",
      description: "Become an AI Generalist in 6 months",
      duration: "6 Months",
      format: "Live & Recorded Sessions",
      startDate: "Starting Soon",
      price: "",
      features: [
        "Learn 100+ AI tools",
        "AI fundamentals & prompt engineering",
        "Practical AI tools & workflows",
        "Project-based learning approach",
        "Expert guidance & support",
        "Industry-relevant curriculum",
      ],
      href: "/flagship-course",
      category: "Core Program",
    },
  ];

  const specializedPrograms = [
    {
      id: 1,
      title: "AI in Tech: Build Products using Agentic AI",
      description: "Comprehensive AI nanodegree program",
      duration: "6 Months",
      format: "Live & Recorded Sessions",
      startDate: "Starting Soon",
      price: "₹4999",
      features: [
        "Complete AI fundamentals & advanced concepts",
        "Hands-on projects with real-world applications",
        "Industry mentorship from AI experts",
        "Career placement assistance",
        "Certification upon completion",
      ],
      href: "/nanodegree",
      category: "Specialized Program",
    },
  ];

  const flagshipModules = [
    {
      title: "Module 1: Foundations of AI & Everyday Productivity",
      slug: "foundations-of-ai-everyday-productivity",
    },
    {
      title: "Module 2: AI‑Powered Data & Business Analysis",
      slug: "ai-powered-data-business-analysis",
    },
    {
      title: "Module 3: AI‑Powered Software Development & Testing",
      slug: "ai-powered-software-development-testing",
    },
    {
      title: "Module 4: Agentic AI & Automation Strategies",
      slug: "agentic-ai-automation-strategies",
    },
    {
      title: "Module 5: Core Data Science & Generative AI Skills",
      slug: "core-data-science-generative-ai-skills",
    },
    {
      title: "Module 6: Business Applications of AI",
      slug: "business-applications-of-ai",
    },
    {
      title: "Module 7: AI‑Powered Career Advancement Strategies",
      slug: "ai-powered-career-advancement-strategies",
    },
  ];

  if (!isOpen || !mounted) return null;

  return (
    <AnimatePresence>
      <div
        className="fixed inset-0 z-[9999] flex items-center justify-center"
        role="dialog"
        aria-modal="true"
        aria-labelledby="programs-modal-title"
      >
        {/* Enhanced Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="absolute inset-0 bg-black/90 backdrop-blur-md"
          onClick={onClose}
          onWheel={(e) => e.preventDefault()}
        />

        {/* Modal */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.3 }}
          className="relative w-full max-w-6xl max-h-[90vh] bg-gradient-to-b from-[#0A1128] to-[#1A202C] border border-gray-700/50 rounded-2xl shadow-2xl overflow-hidden"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-gray-700/50">
            <div>
              <h2
                id="programs-modal-title"
                className="text-2xl font-bold text-white"
              >
                Explore Our Programs
              </h2>
              <p className="text-gray-400 mt-1">
                Choose from comprehensive courses or focused workshops
              </p>
            </div>
            <Button
              variant="ghost"
              size="sm"
              onClick={onClose}
              className="text-gray-400 hover:text-white"
            >
              <X className="w-5 h-5" />
            </Button>
          </div>

          {/* Content */}
          <div
            className="p-6 overflow-y-auto max-h-[70vh]"
            onWheel={(e) => e.stopPropagation()}
          >
            <div className="grid gap-8 grid-cols-1 lg:grid-cols-3">
              {/* AI Courses Section */}
              <div>
                <div className="flex items-center gap-3 mb-[52px]">
                  <h3 className="text-xl font-semibold text-white">
                    ALL Programs
                  </h3>
                  <Badge
                    variant="outline"
                    className="bg-[#0BC5EA]/10 text-[#0BC5EA] border-[#0BC5EA]/30"
                  >
                    Core Programs
                  </Badge>
                </div>

                <div className="grid gap-6 grid-cols-1">
                  {courses.map((course) => (
                    <Link
                      key={course.id}
                      href={course.href}
                      className="block bg-gray-800/30 backdrop-blur-sm border border-gray-700/50 rounded-lg p-6 hover:border-[#0BC5EA]/50 transition-all duration-300 group cursor-pointer"
                    >
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-2">
                            <h4 className="text-xl font-semibold text-white group-hover:text-[#0BC5EA] transition-colors">
                              {course.title}
                            </h4>
                            <Badge
                              variant="outline"
                              className="bg-[#0BC5EA]/10 text-[#0BC5EA] border-[#0BC5EA]/30 text-xs"
                            >
                              {course.category}
                            </Badge>
                          </div>
                          <p className="text-gray-400 mb-3 text-sm">
                            {course.description}
                          </p>
                          <div className="flex flex-wrap gap-2 mb-4">
                            <Badge variant="outline" className="text-xs">
                              <Calendar className="w-3 h-3 mr-1" />
                              {course.duration}
                            </Badge>
                            {/* <Badge variant="outline" className="text-xs text-green-400 border-green-400/30">
                              {course.price}
                            </Badge> */}
                          </div>
                        </div>
                        <ArrowRight className="w-4 h-4 text-gray-500 group-hover:text-[#0BC5EA] transition-colors flex-shrink-0 ml-2" />
                      </div>
                      <div className="space-y-1">
                        {course.features.slice(0, 3).map((feature, index) => (
                          <div
                            key={index}
                            className="flex items-center text-xs text-gray-300"
                          >
                            <Star className="w-3 h-3 text-[#0BC5EA] mr-2 flex-shrink-0" />
                            <span>{feature}</span>
                          </div>
                        ))}
                      </div>
                      <div className="mt-3 text-xs text-gray-500">
                        {course.startDate}
                      </div>
                    </Link>
                  ))}
                </div>
              </div>

              {/* Specialized AI Programs Section */}
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <h3 className="text-xl font-semibold text-white">
                    Specialized Programs
                  </h3>
                  <Badge
                    variant="outline"
                    className="bg-[#F59E0B]/10 text-[#F59E0B] border-[#F59E0B]/30"
                  >
                    Advanced Learning
                  </Badge>
                </div>

                <div className="grid gap-6 grid-cols-1">
                  {specializedPrograms.map((program) => (
                    <Link
                      key={program.id}
                      href={program.href}
                      className="block bg-gray-800/30 backdrop-blur-sm border border-gray-700/50 rounded-lg p-6 hover:border-[#F59E0B]/50 transition-all duration-300 group cursor-pointer"
                    >
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-2">
                            <h4 className="text-lg font-semibold text-white group-hover:text-[#F59E0B] transition-colors">
                              {program.title}
                            </h4>
                            <Badge
                              variant="outline"
                              className="bg-[#F59E0B]/10 text-[#F59E0B] border-[#F59E0B]/30 text-xs"
                            >
                              {program.category}
                            </Badge>
                          </div>
                          <p className="text-gray-400 mb-3 text-sm">
                            {program.description}
                          </p>
                          <div className="flex flex-wrap gap-2 mb-4">
                            <Badge variant="outline" className="text-xs">
                              <Calendar className="w-3 h-3 mr-1" />
                              {program.duration}
                            </Badge>
                            <Badge
                              variant="outline"
                              className="text-xs text-green-400 border-green-400/30"
                            >
                              {program.price}
                            </Badge>
                          </div>
                        </div>
                        <ArrowRight className="w-4 h-4 text-gray-500 group-hover:text-[#F59E0B] transition-colors flex-shrink-0 ml-2" />
                      </div>
                      <div className="space-y-1">
                        {program.features.slice(0, 3).map((feature, index) => (
                          <div
                            key={index}
                            className="flex items-center text-xs text-gray-300"
                          >
                            <Star className="w-3 h-3 text-[#F59E0B] mr-2 flex-shrink-0" />
                            <span>{feature}</span>
                          </div>
                        ))}
                      </div>
                      <div className="mt-3 text-xs text-gray-500">
                        {program.startDate}
                      </div>
                    </Link>
                  ))}
                </div>
              </div>

              {/* Flagship Modules Section */}
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <h3 className="text-xl font-semibold text-white">
                    Flagship Modules
                  </h3>
                  <Badge
                    variant="outline"
                    className="bg-[#6B46C1]/10 text-[#6B46C1] border-[#6B46C1]/30"
                  >
                    Course Modules
                  </Badge>
                </div>

                <div className="grid gap-3 grid-cols-1">
                  {flagshipModules.map((module, index) => (
                    <Link
                      key={index}
                      href={`/flagship-course/module/${module.slug}`}
                      className="bg-gray-800/30 backdrop-blur-sm border border-gray-700/50 rounded-lg p-3 hover:border-[#6B46C1]/50 transition-all duration-300 group cursor-pointer block"
                    >
                      <div className="flex items-start gap-3">
                        <div className="w-12 h-12 bg-gradient-to-br from-[#6B46C1]/20 to-[#0BC5EA]/20 rounded-lg flex items-center justify-center flex-shrink-0">
                          <span className="text-[#6B46C1] font-bold text-sm">
                            {index + 1}
                          </span>
                        </div>
                        <div className="flex-1 min-w-0">
                          <h4 className="font-semibold text-white mb-1 group-hover:text-[#6B46C1] transition-colors text-sm leading-tight">
                            {module.title}
                          </h4>
                          </div>
                        <ArrowRight className="w-3 h-3 text-gray-500 group-hover:text-[#6B46C1] transition-colors flex-shrink-0" />
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
