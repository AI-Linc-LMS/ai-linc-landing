"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight, Users, Rocket } from "lucide-react"
import { ContactFormModal } from "@/components/contact-form-modal"

export function LetsWorkTogetherSection() {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false)

  return (
    <section className="py-16 sm:py-20 lg:py-24 relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Main CTA Banner */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative"
        >
          <div className="bg-gradient-to-r from-card/40 to-card/20 backdrop-blur-sm border border-[#0BC5EA]/30 rounded-2xl sm:rounded-3xl p-8 sm:p-12 lg:p-16 xl:p-20 relative overflow-hidden">
            {/* Background decorative elements */}
            <div className="absolute top-0 right-0 size-48 sm:size-64 lg:size-80 bg-gradient-to-bl from-[#0BC5EA]/10 to-transparent rounded-bl-full"></div>
            <div className="absolute bottom-0 left-0 size-48 sm:size-64 lg:size-80 bg-gradient-to-tr from-[#6B46C1]/10 to-transparent rounded-tr-full"></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-96 sm:size-[30rem] lg:size-[40rem] bg-gradient-to-r from-[#0BC5EA]/5 to-[#6B46C1]/5 rounded-full blur-3xl"></div>

            <div className="relative z-10 text-center max-w-5xl mx-auto">
              {/* Section Title */}
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 sm:mb-8 lg:mb-10"
              >
                <span className="bg-gradient-to-r from-white via-[#0BC5EA] to-[#6B46C1] bg-clip-text text-transparent">
                  Let's Work Together
                </span>
              </motion.h2>

              {/* Main Message */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                viewport={{ once: true }}
                className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl text-foreground/90 leading-relaxed mb-8 sm:mb-12 lg:mb-16 font-medium"
              >
                Whether you're looking to{" "}
                <span className="text-[#0BC5EA] font-semibold">hire top AI talent</span>{" "}
                or{" "}
                <span className="text-[#6B46C1] font-semibold">become one</span>{" "}
                — AI Linc is your launchpad.
              </motion.p>

              {/* CTA Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                viewport={{ once: true }}
                className="flex flex-col sm:flex-row gap-4 sm:gap-6 lg:gap-8 justify-center items-center"
              >
                {/* <Button
                  size="lg"
                  className="bg-gradient-to-r from-[#0BC5EA] to-[#06B6D4] hover:from-[#06B6D4] hover:to-[#0891B2] text-white font-semibold px-8 sm:px-10 lg:px-12 py-3 sm:py-4 lg:py-5 text-base sm:text-lg lg:text-xl rounded-full shadow-lg hover:shadow-xl transition-all duration-300 group w-full sm:w-auto"
                >
                  <Users className="size-5 sm:size-6 mr-2 sm:mr-3 group-hover:scale-110 transition-transform duration-300" />
                  Get in Touch
                  <ArrowRight className="size-5 sm:size-6 ml-2 sm:ml-3 group-hover:translate-x-1 transition-transform duration-300" />
                </Button> */}

                <Button
                  size="lg"
                  variant="outline"
                  onClick={() => setIsContactModalOpen(true)}
                  className="border-2 border-[#6B46C1] text-[#6B46C1] hover:bg-[#6B46C1] hover:text-white font-semibold px-8 sm:px-10 lg:px-12 py-3 sm:py-4 lg:py-5 text-base sm:text-lg lg:text-xl rounded-full shadow-lg hover:shadow-xl transition-all duration-300 group w-full sm:w-auto"
                >
                  <Rocket className="size-5 sm:size-6 mr-2 sm:mr-3 group-hover:scale-110 transition-transform duration-300" />
                  Talk to Our Team
                  <ArrowRight className="size-5 sm:size-6 ml-2 sm:ml-3 group-hover:translate-x-1 transition-transform duration-300" />
                </Button>
              </motion.div>

              {/* Supporting Text */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                viewport={{ once: true }}
                className="mt-8 sm:mt-12 lg:mt-16"
              >
                <p className="text-sm sm:text-base lg:text-lg text-foreground/60 max-w-3xl mx-auto leading-relaxed">
                  Join thousands of AI professionals and leading companies who trust AI Linc 
                  to bridge the gap between talent and opportunity in the AI revolution.
                </p>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Background glow effects */}
      <div className="absolute top-1/3 left-1/4 size-72 sm:size-96 lg:size-[30rem] bg-[#0BC5EA]/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/3 right-1/4 size-72 sm:size-96 lg:size-[30rem] bg-[#6B46C1]/10 rounded-full blur-3xl"></div>

      {/* Contact Form Modal */}
      <ContactFormModal 
        open={isContactModalOpen} 
        onOpenChange={setIsContactModalOpen} 
      />
    </section>
  )
} 