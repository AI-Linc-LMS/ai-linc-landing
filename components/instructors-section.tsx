"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export function InstructorsSection() {
  const instructors = [
    {
      name: "Shubham Lal",
      role: "SDE 2",
      company: "Microsoft",
      image: "/shubham_lal.jpg?height=300&width=300",
      expertise: "AI Product Developer",
      linkedin: "https://www.linkedin.com/in/shubhamlal/",
    },
    {
      name: "Yamini Bandi",
      role: "SDE 2",
      company: "Amazon",
      image: "/yamini_bandi.jpg?height=300&width=300",
      expertise: "ML Engineer",
      linkedin: "https://www.linkedin.com/in/yaminibandi/",
    },
    {
      name: "Divyansh Dubey",
      role: "Gen AI",
      company: "Google",
      image: "/Divyansh_dubey.jpg?height=300&width=300",
      expertise: "⁠Prompt and GenAI expert",
      linkedin: "https://www.linkedin.com/in/divyansh-dubey/",
    },
    {
      name: "Abirami Sukumaran",
      role: "Staff Developer Advocate",
      company: "Google",
      image: "/Abirami_sukumari.jpg?height=300&width=300",
      expertise: "Cloud AI and Databases",
      linkedin: "https://www.linkedin.com/in/abiramisukumaran/",
    },
  ];

  return (
    <section id="instructors" className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-white to-[#0BC5EA] bg-clip-text text-transparent">
            AI Industry Leaders
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Learn from industry leaders with extensive experience at top AI
            companies.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {instructors.map((instructor, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <a
                href={instructor.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="block bg-[#1A202C] border border-[#0BC5EA]/20 rounded-xl overflow-hidden group hover:shadow-[0_0_30px_rgba(11,197,234,0.2)] transition-all duration-500 cursor-pointer"
              >
                <div className="relative h-64 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0A1128] to-transparent z-10"></div>
                  <img
                    src={instructor.image || "/placeholder.svg"}
                    alt={instructor.name}
                    className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute bottom-0 left-0 right-0 p-4 z-20">
                    <div className="text-xs font-medium text-[#0BC5EA] mb-1">
                      {instructor.company}
                    </div>
                    <h3 className="text-xl font-bold text-white mb-1">
                      {instructor.name}
                    </h3>
                    <p className="text-gray-300 text-sm">{instructor.role}</p>
                  </div>
                </div>
                <div className="p-4 flex items-center justify-between">
                  <div className="text-sm text-gray-300">
                    {instructor.expertise}
                  </div>
                  <div className="size-8 rounded-full bg-[#0BC5EA]/10 flex items-center justify-center group-hover:bg-[#0BC5EA]/20 transition-all duration-300">
                    <ArrowRight className="size-4 text-[#0BC5EA]" />
                  </div>
                </div>
              </a>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Background glow effects */}
      <div className="absolute top-1/3 right-1/3 size-96 bg-[#0BC5EA]/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/3 left-1/3 size-96 bg-[#6B46C1]/5 rounded-full blur-3xl"></div>
    </section>
  );
}
