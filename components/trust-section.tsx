"use client"

import { motion } from "framer-motion"

export function TrustSection() {
  const partners = ["Google", "Microsoft", "Amazon", "Meta", "Adobe", "Spotify", "IBM", "Salesforce"]

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
            Trusted By Industry Leaders
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Our graduates work at top companies across the tech industry.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-[#1A202C] border border-[#0BC5EA]/20 rounded-xl p-8 mb-16"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {partners.map((partner, index) => (
              <div key={index} className="flex items-center justify-center h-20">
                <div className="text-xl font-bold text-gray-400 hover:text-white transition-colors duration-300">
                  {partner}
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="bg-[#1A202C] border border-[#0BC5EA]/20 rounded-xl p-6"
          >
            <div className="text-4xl font-bold mb-2 bg-gradient-to-r from-[#0BC5EA] to-[#6B46C1] bg-clip-text text-transparent">
              94%
            </div>
            <div className="text-lg font-semibold mb-2 text-white">Job Placement Rate</div>
            <p className="text-gray-300 text-sm">
              Our graduates secure relevant positions within 3 months of program completion.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-[#1A202C] border border-[#6B46C1]/20 rounded-xl p-6"
          >
            <div className="text-4xl font-bold mb-2 bg-gradient-to-r from-[#6B46C1] to-[#0BC5EA] bg-clip-text text-transparent">
              3.2x
            </div>
            <div className="text-lg font-semibold mb-2 text-white">Average Salary Increase</div>
            <p className="text-gray-300 text-sm">
              Our students see significant salary growth after completing the program.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="bg-[#1A202C] border border-[#0BC5EA]/20 rounded-xl p-6"
          >
            <div className="text-4xl font-bold mb-2 bg-gradient-to-r from-[#0BC5EA] to-[#6B46C1] bg-clip-text text-transparent">
              4.9/5
            </div>
            <div className="text-lg font-semibold mb-2 text-white">Student Satisfaction</div>
            <p className="text-gray-300 text-sm">Our program consistently receives top ratings from our graduates.</p>
          </motion.div>
        </div>
      </div>

      {/* Background glow effects */}
      <div className="absolute top-1/4 right-1/3 size-96 bg-[#0BC5EA]/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 left-1/3 size-96 bg-[#6B46C1]/5 rounded-full blur-3xl"></div>
    </section>
  )
}
