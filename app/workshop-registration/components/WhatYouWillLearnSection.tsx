"use client";
import { motion } from "framer-motion";
import { useRef } from "react";

interface LearningItem {
  title: string;
  description: string;
  icon: string;
}

const learningItems: LearningItem[] = [
  {
    title: "Build a website in 5 Minutes",
    description: "No coding, no stress!",
    icon: "",
  },
  {
    title: "How generative AI works",
    description: "Be smart to learn new technologies",
    icon: "",
  },
  {
    title: "AI tools to make Videos & PPTs Instantly",
    description: "Save your time, Its precious!",
    icon: "",
  },
  {
    title: "Automate Emails & Reports",
    description: "Save time, work smart",
    icon: "",
  },
  {
    title: "Correct usage of Prompts",
    description: "Your right prompt matters!",
    icon: "",
  },
  {
    title: "Re  al Use Cases",
    description: "Hiring, onboarding, training... all with AI",
    icon: "",
  },
  {
    title: "Build Resume in minutes",
    description: "Level up your personal brand",
    icon: "",
  },
];

export function WhatYouWillLearnSection({
  scrollToRegistration,
}: {
  scrollToRegistration: () => void;
}) {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <div className="mb-16 px-4 md:px-0" ref={containerRef}>
      <div className="text-center mb-12">
        <motion.h2
          className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-white"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          What will you learn
        </motion.h2>
        <motion.p
          className="text-xl md:text-2xl lg:text-3xl font-semibold text-white mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          in 5 days?
        </motion.p>

        {/* Day 1 Header */}
        <motion.div
          className="mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <p className="text-sm text-gray-400">
            *Recording of This Session Will Not Be Provided
          </p>
        </motion.div>
      </div>

      {/* Timeline Layout */}
      <div className="relative max-w-6xl mx-auto">
        {/* Vertical Timeline Line - Hidden on mobile */}
        <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 bg-gradient-to-b from-[#0BC5EA] to-[#6B46C1] h-full hidden md:block"></div>

        {/* Mobile Timeline Line - Left aligned */}
        <div className="absolute left-6 w-0.5 bg-gradient-to-b from-[#0BC5EA] to-[#6B46C1] h-full md:hidden"></div>

        {/* Learning Items */}
        <div className="space-y-8 md:space-y-16">
          {learningItems.map((item, index) => {
            return (
              <motion.div
                key={index}
                className={`flex items-center gap-4 md:gap-8 ${
                  // Mobile: always left-aligned, Desktop: alternating
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
              >
                {/* Timeline Dot - Mobile positioning */}
                <div className="relative z-10 md:order-2">
                  <motion.div
                    className="w-5 h-5 md:w-7 md:h-7 bg-[#0BC5EA] rounded-full shadow-lg flex-shrink-0"
                    whileHover={{ scale: 1.3 }}
                    transition={{ type: "spring", stiffness: 400 }}
                  />
                </div>

                {/* Content Card */}
                <div
                  className={`flex-1 md:order-1 ${
                    // Mobile: always left-aligned, Desktop: alternating alignment
                    index % 2 === 0 ? "md:text-right" : "md:text-left"
                  }`}
                >
                  <motion.div
                    className={`bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700/50 hover:border-[#0BC5EA]/50 rounded-lg p-4 md:p-6 shadow-lg w-full md:max-w-md md:inline-block ${
                      // Mobile: no margin, Desktop: alternating margin
                      index % 2 === 0 ? "md:mr-8" : "md:ml-8"
                    }`}
                    whileHover={{
                      scale: 1.02,
                      borderColor: "rgba(11, 197, 234, 0.5)",
                    }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <div className="flex items-center gap-3 mb-3">
                      <span className="text-xl md:text-2xl">{item.icon}</span>
                      <h4 className="text-base md:text-lg font-bold text-white">
                        {item.title}
                      </h4>
                    </div>
                    <p className="text-gray-300 text-sm">{item.description}</p>
                  </motion.div>
                </div>

                {/* Spacer for opposite side - Hidden on mobile */}
                <div className="hidden md:block md:flex-1 md:order-3"></div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Bottom Pricing Section */}
      <motion.div
        className="mt-16 flex flex-col md:flex-row justify-between items-center bg-gradient-to-r from-[#0BC5EA]/10 to-[#6B46C1]/10 rounded-lg p-6 border border-gray-700/30"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.8 }}
      >
        <div className="text-center md:text-left mb-4 md:mb-0">
          <div className="text-3xl md:text-4xl font-bold text-white mb-2">
            FREE
            <span className="text-lg text-gray-400 line-through ml-2">
              ₹499
            </span>
            <span className="text-lg text-[#0BC5EA] ml-2">100% OFF</span>
          </div>
          <p className="text-gray-300">Deadline 9 August 2025</p>
        </div>

        <div className="flex items-center gap-4">
          <div className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm">
            10 Seats Left!
          </div>
          <button
            onClick={scrollToRegistration}
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg transition-colors duration-300"
          >
            Enroll Now
          </button>
        </div>
      </motion.div>
    </div>
  );
}
