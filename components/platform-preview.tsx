"use client"

import { motion } from "framer-motion"

export function PlatformPreview() {
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
            Learning Platform Preview
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Experience our state-of-the-art learning platform designed to accelerate your AI skills development.
          </p>
        </motion.div>

        <div className="relative h-[500px] md:h-[600px] mb-16">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="absolute inset-0 bg-[#1A202C] border border-[#0BC5EA]/30 rounded-2xl shadow-2xl overflow-hidden"
          >
            <div className="absolute inset-0 bg-[url('/images/Dashboard1.png?height=600&width=1200')] bg-cover bg-center opacity-40"></div>
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#0A1128]/90"></div>

            {/* Platform UI Elements */}
            {/* <div className="absolute top-8 left-8 right-8 h-12 bg-[#0A1128]/80 border border-[#0BC5EA]/20 rounded-lg flex items-center px-4">
              <div className="size-4 rounded-full bg-[#0BC5EA]/50 mr-2"></div>
              <div className="h-4 w-32 bg-white/20 rounded-md"></div>
              <div className="ml-auto flex space-x-4">
                <div className="h-4 w-16 bg-white/20 rounded-md"></div>
                <div className="h-4 w-16 bg-white/20 rounded-md"></div>
                <div className="h-4 w-16 bg-white/20 rounded-md"></div>
              </div>
            </div> */}

            {/* <div className="absolute top-28 left-8 bottom-8 w-64 bg-[#0A1128]/80 border border-[#0BC5EA]/20 rounded-lg p-4">
              <div className="h-4 w-32 bg-white/20 rounded-md mb-6"></div>
              <div className="space-y-3">
                <div className="h-8 bg-[#0BC5EA]/10 rounded-md"></div>
                <div className="h-8 bg-white/10 rounded-md"></div>
                <div className="h-8 bg-white/10 rounded-md"></div>
                <div className="h-8 bg-white/10 rounded-md"></div>
              </div>
              <div className="h-4 w-32 bg-white/20 rounded-md mt-8 mb-4"></div>
              <div className="space-y-3">
                <div className="h-8 bg-white/10 rounded-md"></div>
                <div className="h-8 bg-white/10 rounded-md"></div>
              </div>
            </div> */}

            {/* <div className="absolute top-28 left-80 right-8 bottom-8 bg-[#0A1128]/80 border border-[#0BC5EA]/20 rounded-lg p-6">
              <div className="h-8 w-64 bg-white/20 rounded-md mb-6"></div>
              <div className="grid grid-cols-2 gap-6 mb-8">
                <div className="h-32 bg-[#0BC5EA]/10 rounded-lg"></div>
                <div className="h-32 bg-[#6B46C1]/10 rounded-lg"></div>
              </div>
              <div className="h-6 w-48 bg-white/20 rounded-md mb-4"></div>
              <div className="h-32 bg-white/10 rounded-lg mb-6"></div>
              <div className="flex justify-between">
                <div className="h-10 w-32 bg-[#0BC5EA]/20 rounded-md"></div>
                <div className="h-10 w-32 bg-[#6B46C1]/20 rounded-md"></div>
              </div>
            </div> */}
          </motion.div>

          {/* Floating elements */}
          <motion.div
            initial={{ opacity: 0, x: -20, y: -20 }}
            whileInView={{ opacity: 1, x: 0, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="absolute top-16 right-16 size-32 bg-[#0A1128] border border-[#0BC5EA]/30 rounded-xl shadow-xl overflow-hidden transform rotate-6"
          >
            <div className="absolute inset-0 bg-[url('/images/course-conten-preview.png?height=128&width=128')] bg-cover bg-center opacity-40"></div>
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#0A1128]/90"></div>
            {/* <div className="absolute bottom-3 left-3 right-3">
              <div className="h-2 w-12 bg-[#0BC5EA] rounded-full mb-2"></div>
              <div className="h-3 w-20 bg-white/20 rounded-md"></div>
            </div> */}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20, y: 20 }}
            whileInView={{ opacity: 1, x: 0, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: true }}
            className="absolute bottom-16 left-16 size-40 bg-[#0A1128] border border-[#6B46C1]/30 rounded-xl shadow-xl overflow-hidden transform -rotate-3"
          >
            <div className="absolute inset-0 bg-[url('/images/login-preview.png?height=160&width=160')] bg-cover bg-center opacity-40"></div>
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#0A1128]/90"></div>
            {/* <div className="absolute bottom-4 left-4 right-4">
              <div className="h-2 w-16 bg-[#6B46C1] rounded-full mb-2"></div>
              <div className="h-3 w-24 bg-white/20 rounded-md"></div>
            </div> */}
          </motion.div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="bg-[#1A202C] border border-[#0BC5EA]/20 rounded-xl p-6 text-center"
          >
            <div className="size-16 rounded-full bg-[#0BC5EA]/10 flex items-center justify-center mx-auto mb-6">
              <div className="size-8 bg-[#0BC5EA]/30 rounded-full"></div>
            </div>
            <h3 className="text-xl font-bold mb-3 text-white">Interactive Learning</h3>
            <p className="text-gray-300">
              Engage with interactive exercises and real-time feedback to accelerate your learning journey.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-[#1A202C] border border-[#6B46C1]/20 rounded-xl p-6 text-center"
          >
            <div className="size-16 rounded-full bg-[#6B46C1]/10 flex items-center justify-center mx-auto mb-6">
              <div className="size-8 bg-[#6B46C1]/30 rounded-full"></div>
            </div>
            <h3 className="text-xl font-bold mb-3 text-white">AI-Powered Recommendations</h3>
            <p className="text-gray-300">
              Receive personalized learning paths and content recommendations based on your progress and goals.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="bg-[#1A202C] border border-[#0BC5EA]/20 rounded-xl p-6 text-center"
          >
            <div className="size-16 rounded-full bg-[#0BC5EA]/10 flex items-center justify-center mx-auto mb-6">
              <div className="size-8 bg-[#0BC5EA]/30 rounded-full"></div>
            </div>
            <h3 className="text-xl font-bold mb-3 text-white">Progress Tracking</h3>
            <p className="text-gray-300">
              Monitor your skill development with detailed analytics and achievement tracking throughout your journey.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Background glow effects */}
      <div className="absolute top-1/3 right-1/4 size-96 bg-[#0BC5EA]/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/3 left-1/4 size-96 bg-[#6B46C1]/5 rounded-full blur-3xl"></div>
    </section>
  )
}
