"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { 
  GraduationCap, 
  Clock, 
  Calendar, 
  CreditCard, 
  Phone, 
  MessageCircle,
  Sparkles,
  CheckCircle,
  Target,
  BookOpen,
  Users
} from "lucide-react";

export function ProgramHighlightSection() {
  const [isCounselingModalOpen, setIsCounselingModalOpen] = useState(false);

  const handleBookCounseling = () => {
    setIsCounselingModalOpen(true);
  };

  const handleCounselingSubmit = () => {
    // Handle counseling booking logic here
    setIsCounselingModalOpen(false);
    // You can add form submission logic or redirect to calendar booking
  };

  const keyFeatures = [
    "Master AI in Tech, Data Science, BA, Product Management, Cybersecurity, Marketing, HR & more",
    "100+ AI tools for 100x efficiency",
    "Live projects with industry mentors",
    "Job placement assistance"
  ];

  return (
    <>
      <section className="py-12 md:py-16 mt-20 relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="grid lg:grid-cols-2 gap-8 items-center"
          >
            {/* Left Content */}
            <div className="space-y-6">
              <div className="space-y-4">
                <Badge className="bg-gradient-to-r from-[#0BC5EA]/20 to-[#6B46C1]/20 text-[#0BC5EA] border-[#0BC5EA]/30 px-3 py-1">
                  <Sparkles className="w-4 h-4 mr-2" />
                  6-Month AI Program
                </Badge>
                
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
                  Get trained in the most{" "}
                  <span className="bg-gradient-to-r from-[#0BC5EA] to-[#6B46C1] bg-clip-text text-transparent">
                    in-demand AI skills
                  </span>{" "}
                  with our 6-months program
                </h1>
                
                <p className="text-lg md:text-xl text-gray-300">
                  Designed for AI Enthusiasts who want to transform their careers
                </p>
              </div>

              {/* Key Features */}
              <div className="space-y-3">
                {keyFeatures.map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                    className="flex items-start gap-3"
                  >
                    <CheckCircle className="w-5 h-5 text-[#0BC5EA] mt-0.5 flex-shrink-0" />
                    <span className="text-gray-200">{feature}</span>
                  </motion.div>
                ))}
              </div>

              {/* Program Stats */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-6">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.6 }}
                  className="bg-card/30 backdrop-blur-sm border border-[#0BC5EA]/20 rounded-lg p-4 text-center"
                >
                  <CreditCard className="w-6 h-6 text-[#0BC5EA] mx-auto mb-2" />
                  <div className="text-sm text-gray-400 mb-1">No Cost EMI from</div>
                  <div className="text-lg font-bold text-white">INR 4,666*</div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.7 }}
                  className="bg-card/30 backdrop-blur-sm border border-[#6B46C1]/20 rounded-lg p-4 text-center"
                >
                  <Calendar className="w-6 h-6 text-[#6B46C1] mx-auto mb-2" />
                  <div className="text-sm text-gray-400 mb-1">Admission Deadline</div>
                  <div className="text-lg font-bold text-white">Every Month End</div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.8 }}
                  className="bg-card/30 backdrop-blur-sm border border-[#F59E0B]/20 rounded-lg p-4 text-center"
                >
                  <Clock className="w-6 h-6 text-[#F59E0B] mx-auto mb-2" />
                  <div className="text-sm text-gray-400 mb-1">Duration</div>
                  <div className="text-lg font-bold text-white">6 Months</div>
                </motion.div>
              </div>
            </div>

            {/* Right Content - Counseling CTA */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="lg:pl-8"
            >
              <Card className="bg-gradient-to-br from-[#0BC5EA]/10 to-[#6B46C1]/10 border-[#0BC5EA]/30 backdrop-blur-sm overflow-hidden">
                <CardContent className="p-8 text-center">
                  <div className="space-y-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-[#0BC5EA] to-[#6B46C1] rounded-full flex items-center justify-center mx-auto">
                      <Phone className="w-8 h-8 text-white" />
                    </div>
                    
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-2">Confused?</h3>
                      <p className="text-gray-300 mb-4">
                        Get personalized guidance from our AI career experts
                      </p>
                    </div>

                    <div className="bg-background/30 rounded-lg p-4 space-y-2">
                      <div className="flex items-center justify-center gap-2 text-[#0BC5EA]">
                        <MessageCircle className="w-4 h-4" />
                        <span className="text-sm font-medium">Free 15-Minute Session</span>
                      </div>
                      <div className="text-xs text-gray-400">
                        • Program guidance • Career roadmap • Scholarship info
                      </div>
                    </div>

                    <Button
                      onClick={handleBookCounseling}
                      className="w-full bg-gradient-to-r from-[#0BC5EA] to-[#6B46C1] hover:from-[#0BC5EA]/90 hover:to-[#6B46C1]/90 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 group"
                    >
                      <Phone className="w-5 h-5 mr-2 group-hover:animate-pulse" />
                      Book Free Counseling
                    </Button>

                    <p className="text-xs text-gray-400">
                      No spam, just genuine career guidance
                    </p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        </div>

        {/* Background Effects */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#0BC5EA]/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#6B46C1]/5 rounded-full blur-3xl"></div>
      </section>

      {/* Counseling Modal */}
      <Dialog open={isCounselingModalOpen} onOpenChange={setIsCounselingModalOpen}>
        <DialogContent className="max-w-md bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 border-slate-700/50">
          <DialogHeader className="text-center pb-4">
            <div className="w-16 h-16 bg-gradient-to-br from-[#0BC5EA] to-[#6B46C1] rounded-full flex items-center justify-center mx-auto mb-4">
              <Phone className="w-8 h-8 text-white" />
            </div>
            <DialogTitle className="text-2xl font-bold text-white">
              Book Your Free Counseling
            </DialogTitle>
            <DialogDescription className="text-slate-300">
              Get personalized guidance from our AI career experts
            </DialogDescription>
          </DialogHeader>

          <div className="space-y-6">
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="First Name"
                  className="w-full px-4 py-3 bg-slate-800/50 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:border-[#0BC5EA] transition-colors"
                />
                <input
                  type="text"
                  placeholder="Last Name"
                  className="w-full px-4 py-3 bg-slate-800/50 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:border-[#0BC5EA] transition-colors"
                />
              </div>
              <input
                type="email"
                placeholder="Email Address"
                className="w-full px-4 py-3 bg-slate-800/50 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:border-[#0BC5EA] transition-colors"
              />
              <input
                type="tel"
                placeholder="Phone Number"
                className="w-full px-4 py-3 bg-slate-800/50 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:border-[#0BC5EA] transition-colors"
              />
              <select className="w-full px-4 py-3 bg-slate-800/50 border border-slate-600 rounded-lg text-white focus:outline-none focus:border-[#0BC5EA] transition-colors">
                <option value="">Preferred Time Slot</option>
                <option value="morning">Morning (9 AM - 12 PM)</option>
                <option value="afternoon">Afternoon (12 PM - 6 PM)</option>
                <option value="evening">Evening (6 PM - 9 PM)</option>
              </select>
            </div>

            <div className="bg-slate-800/30 rounded-lg p-4">
              <h4 className="text-sm font-semibold text-white mb-2">What you'll get:</h4>
              <div className="space-y-1 text-xs text-slate-300">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-3 h-3 text-[#0BC5EA]" />
                  <span>Personalized AI career roadmap</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-3 h-3 text-[#0BC5EA]" />
                  <span>Program recommendations based on your goals</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-3 h-3 text-[#0BC5EA]" />
                  <span>Scholarship and financing options</span>
                </div>
              </div>
            </div>

            <Button
              onClick={handleCounselingSubmit}
              className="w-full bg-gradient-to-r from-[#0BC5EA] to-[#6B46C1] hover:from-[#0BC5EA]/90 hover:to-[#6B46C1]/90 text-white font-semibold py-3"
            >
              Schedule My Free Session
            </Button>

            <p className="text-xs text-slate-400 text-center">
              Our counselors will contact you within 24 hours to schedule your session
            </p>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}
