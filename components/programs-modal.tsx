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
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, mounted]);

  const courses = [
    {
      id: 1,
      title: "Flagship Course",
      description: "Our flagship AI course",
      duration: "4 Months",
      format: "Live & Recorded Sessions",
      startDate: "Starting Soon",
      price: "Up to 100% Scholarship",
      features: [
        "AI fundamentals & prompt engineering",
        "Practical AI tools & workflows",
        "Project-based learning approach",
        "Expert guidance & support",
        "Industry-relevant curriculum"
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
        "Certification upon completion"
      ],
      href: "/nanodegree",
      category: "Specialized Program",
    },
  ];

  const workshops = [
    {
      id: 1,
      title: "LinkedIn Growth With AI",
      mentor: "",
      duration: "5 Days",
      time: "7 PM IST",
      date: "29th Aug, 2025",
      price: "₹499",
      category: "Growth",
    },
    {
      id: 2,
      title: "Generative AI Workshop",
      mentor: "",
      duration: "3 Hours",
      time: "7 PM IST",
      date: "1st Aug, 2025",
      price: "₹499",
      category: "AI",
    },
    {
      id: 3,
      title: "Generative AI Business Mastermind",
      mentor: "",
      duration: "2 Days",
      time: "10 AM IST",
      date: "Coming Soon",
      price: "₹999",
      category: "Business",
    },
    {
      id: 4,
      title: "Product Management With AI",
      mentor: "",
      duration: "3 Hours",
      time: "11 AM IST",
      date: "10th Aug, 2025",
      price: "₹499",
      category: "Product",
    },
    {
      id: 5,
      title: "Generative AI Marketing Mastermind",
      mentor: "",
      duration: "2 Days",
      time: "7 AM IST",
      date: "1st Aug, 2025",
      price: "₹999",
      category: "Marketing",
    },
    {
      id: 6,
      title: "AI For Consultants",
      mentor: "",
      duration: "3 Hours",
      time: "11 AM IST",
      date: "Coming Soon",
      price: "₹499",
      category: "Consulting",
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
              <h2 id="programs-modal-title" className="text-2xl font-bold text-white">
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
          <div className="p-6 overflow-y-auto max-h-[70vh]" onWheel={(e) => e.stopPropagation()}>
            <div className="grid gap-8 grid-cols-1 lg:grid-cols-3">
              {/* AI Courses Section */}
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <h3 className="text-xl font-semibold text-white">AI Courses</h3>
                  <Badge variant="outline" className="bg-[#0BC5EA]/10 text-[#0BC5EA] border-[#0BC5EA]/30">
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
                            <h4 className="text-lg font-semibold text-white group-hover:text-[#0BC5EA] transition-colors">
                              {course.title}
                            </h4>
                            <Badge variant="outline" className="bg-[#0BC5EA]/10 text-[#0BC5EA] border-[#0BC5EA]/30 text-xs">
                              {course.category}
                            </Badge>
                          </div>
                          <p className="text-gray-400 mb-3 text-sm">{course.description}</p>
                          <div className="flex flex-wrap gap-2 mb-4">
                            <Badge variant="outline" className="text-xs">
                              <Calendar className="w-3 h-3 mr-1" />
                              {course.duration}
                            </Badge>
                            <Badge variant="outline" className="text-xs text-green-400 border-green-400/30">
                              {course.price}
                            </Badge>
                          </div>
                        </div>
                        <ArrowRight className="w-4 h-4 text-gray-500 group-hover:text-[#0BC5EA] transition-colors flex-shrink-0 ml-2" />
                      </div>
                      <div className="space-y-1">
                        {course.features.slice(0, 3).map((feature, index) => (
                          <div key={index} className="flex items-center text-xs text-gray-300">
                            <Star className="w-3 h-3 text-[#0BC5EA] mr-2 flex-shrink-0" />
                            <span>{feature}</span>
                          </div>
                        ))}
                      </div>
                      <div className="mt-3 text-xs text-gray-500">{course.startDate}</div>
                    </Link>
                  ))}
                </div>
              </div>

              {/* Specialized AI Programs Section */}
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <h3 className="text-xl font-semibold text-white">Specialized Programs</h3>
                  <Badge variant="outline" className="bg-[#F59E0B]/10 text-[#F59E0B] border-[#F59E0B]/30">
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
                            <Badge variant="outline" className="bg-[#F59E0B]/10 text-[#F59E0B] border-[#F59E0B]/30 text-xs">
                              {program.category}
                            </Badge>
                          </div>
                          <p className="text-gray-400 mb-3 text-sm">{program.description}</p>
                          <div className="flex flex-wrap gap-2 mb-4">
                            <Badge variant="outline" className="text-xs">
                              <Calendar className="w-3 h-3 mr-1" />
                              {program.duration}
                            </Badge>
                            <Badge variant="outline" className="text-xs text-green-400 border-green-400/30">
                              {program.price}
                            </Badge>
                          </div>
                        </div>
                        <ArrowRight className="w-4 h-4 text-gray-500 group-hover:text-[#F59E0B] transition-colors flex-shrink-0 ml-2" />
                      </div>
                      <div className="space-y-1">
                        {program.features.slice(0, 3).map((feature, index) => (
                          <div key={index} className="flex items-center text-xs text-gray-300">
                            <Star className="w-3 h-3 text-[#F59E0B] mr-2 flex-shrink-0" />
                            <span>{feature}</span>
                          </div>
                        ))}
                      </div>
                      <div className="mt-3 text-xs text-gray-500">{program.startDate}</div>
                    </Link>
                  ))}
                </div>
              </div>

              {/* Workshops Section */}
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <h3 className="text-xl font-semibold text-white">Workshops</h3>
                  <Badge variant="outline" className="bg-[#6B46C1]/10 text-[#6B46C1] border-[#6B46C1]/30">
                    Focused Learning
                  </Badge>
                </div>

                <div className="grid gap-3 grid-cols-1">
                  {workshops.map((workshop) => (
                    <div
                      key={workshop.id}
                      className="bg-gray-800/30 backdrop-blur-sm border border-gray-700/50 rounded-lg p-3 hover:border-[#6B46C1]/50 transition-all duration-300 group cursor-pointer"
                    >
                      <div className="flex items-start gap-3">
                        <div className="w-12 h-12 bg-gradient-to-br from-[#6B46C1]/20 to-[#0BC5EA]/20 rounded-lg flex items-center justify-center flex-shrink-0">
                          <Users className="w-6 h-6 text-[#6B46C1]" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <h4 className="font-semibold text-white mb-1 group-hover:text-[#6B46C1] transition-colors text-sm">
                            {workshop.title}
                          </h4>
                          <p className="text-xs text-gray-400 mb-2 truncate">{workshop.mentor}</p>
                          <div className="flex flex-wrap gap-1 mb-2">
                            <Badge variant="outline" className="text-xs">
                              {workshop.duration}
                            </Badge>
                            <Badge variant="outline" className="text-xs text-green-400 border-green-400/30">
                              {workshop.price}
                            </Badge>
                          </div>
                          <div className="text-xs text-gray-500">{workshop.date}</div>
                        </div>
                        <ArrowRight className="w-3 h-3 text-gray-500 group-hover:text-[#6B46C1] transition-colors flex-shrink-0" />
                      </div>
                    </div>
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
