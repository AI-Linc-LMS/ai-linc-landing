"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Clock, Users, Star, ArrowRight } from "lucide-react";
import { useRouter } from "next/navigation";
import { ContactFormModal } from "@/components/contact-form-modal";
import { useState } from "react";

export function CareerTransformationCta({
  onReserveSeat,
}: {
  onReserveSeat: () => void;
}) {
  const router = useRouter();

  const handleApplyNow = () => {
    setIsContactModalOpen(true);
  };

  const handleBookSeat = () => {
    onReserveSeat();
  };

  const openPaymentPage = () => {
    window.open("https://app.ailinc.com/flagship-program-payment?data=dv_t0rkn9_f.4759bfe8", "_blank");
  };
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  return (
    <section className="py-16 sm:py-20 relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <Card className="bg-gradient-to-br from-[#1A1B3F] to-[#2A1B5C] border-[#0BC5EA]/30 backdrop-blur-sm overflow-hidden">
            <CardContent className="p-8 sm:p-12">
              {/* Header */}
              <div className="text-center mb-8">
                <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.1 }}
                  viewport={{ once: true }}
                  className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4"
                >
                  Ready to Transform Your Career?
                </motion.h2>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.15 }}
                  viewport={{ once: true }}
                  className="text-lg sm:text-xl text-gray-300"
                >
                  Join thousands of students who've already started their
                  journey to success
                </motion.p>
              </div>

              {/* Stats Row */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.18 }}
                viewport={{ once: true }}
                className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8"
              >
                <div className="text-center">
                  <div className="flex items-center justify-center mb-3">
                    <Clock className="w-8 h-8 text-[#0BC5EA] mr-2" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-1">
                    Limited Time
                  </h3>
                  <p className="text-gray-400 text-sm">Seats filling fast</p>
                </div>

                <div className="text-center">
                  <div className="flex items-center justify-center mb-3">
                    <Users className="w-8 h-8 text-[#0BC5EA] mr-2" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-1">
                    80 Total Seats
                  </h3>
                  <p className="text-gray-400 text-sm">
                    Both programs combined
                  </p>
                </div>

                <div className="text-center">
                  <div className="flex items-center justify-center mb-3">
                    <Star className="w-8 h-8 text-[#0BC5EA] mr-2" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-1">
                    100% Refundable
                  </h3>
                  <p className="text-gray-400 text-sm">Within 7 days</p>
                </div>
              </motion.div>

              {/* CTA Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.2 }}
                viewport={{ once: true }}
                className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-6"
              >
                <Button
                  onClick={handleApplyNow}
                  className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white px-8 py-4 text-lg font-semibold rounded-lg transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl group w-full sm:w-auto cursor-pointer"
                >
                  Apply Now
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
                </Button>

                <Button
                  onClick={openPaymentPage}
                  className="bg-gradient-to-r from-[#0BC5EA] to-[#6B46C1] hover:from-[#0BC5EA]/80 hover:to-[#6B46C1]/80 text-white px-8 py-4 text-lg font-semibold rounded-lg transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl group w-full sm:w-auto cursor-pointer"
                >
                  Book your seat at ₹499/-
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
                </Button>
              </motion.div>

              {/* Contact Info */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.25 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <p className="text-gray-400 text-sm">
                  Questions? Contact our team at{" "}
                  <a
                    href="mailto:support@ailinc.com"
                    className="text-[#0BC5EA] hover:text-[#0BC5EA]/80 transition-colors"
                  >
                    support@ailinc.com
                  </a>
                </p>
              </motion.div>

              {/* Background Decorations */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#0BC5EA]/10 rounded-full blur-2xl"></div>
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-[#6B46C1]/10 rounded-full blur-2xl"></div>
            </CardContent>
          </Card>
        </motion.div>

        <ContactFormModal
          open={isContactModalOpen}
          onOpenChange={setIsContactModalOpen}
        />
        {/* Background Effects */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#0BC5EA]/5 rounded-full blur-3xl"></div>
      </div>
    </section>
  );
}
