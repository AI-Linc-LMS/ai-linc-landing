"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import {
  Phone,
  CreditCard,
  ArrowRight,
  X,
  Shield,
  Clock,
  CheckCircle,
  Sparkles,
} from "lucide-react";

export function StickyCtaButtons() {
  const [isVisible, setIsVisible] = useState(false);
  const [showReserveModal, setShowReserveModal] = useState(false);
  const [showNotification, setShowNotification] = useState(false);
  const [currentNotification, setCurrentNotification] = useState({
    name: "",
    seatsLeft: 5,
  });
  const [seatsRemaining, setSeatsRemaining] = useState(5);
  const [isDismissed, setIsDismissed] = useState(false);
  const router = useRouter();

  // Random names for notifications
  const randomNames = [
    "Rahul",
    "Priya",
    "Amit",
    "Sneha",
    "Vikash",
    "Ananya",
    "Rohan",
    "Kavya",
    "Arjun",
    "Divya",
    "Karan",
    "Pooja",
    "Siddharth",
    "Nisha",
    "Raj",
    "Meera",
    "Abhishek",
    "Riya",
    "Nikhil",
    "Shreya",
    "Akash",
    "Tanvi",
    "Varun",
    "Isha",
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      // Show after scrolling 300px and only if not dismissed
      setIsVisible(scrollY > 300 && !isDismissed);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isDismissed]);

  // Random notification system
  useEffect(() => {
    const showRandomNotification = () => {
      if (seatsRemaining > 0) {
        const randomName =
          randomNames[Math.floor(Math.random() * randomNames.length)];
        const newSeatsLeft = Math.max(1, seatsRemaining - 1);

        setCurrentNotification({
          name: randomName,
          seatsLeft: 5,
        });
        setSeatsRemaining(5);
        setShowNotification(true);

        // Hide notification after 4 seconds
        setTimeout(() => {
          setShowNotification(false);
        }, 4000);
      }
    };

    // Show first notification after 5 seconds
    const initialTimer = setTimeout(showRandomNotification, 5000);

    // Then show notifications every 15-25 seconds randomly
    const intervalTimer = setInterval(() => {
      const randomDelay = Math.random() * 10000 + 15000; // 15-25 seconds
      setTimeout(showRandomNotification, randomDelay);
    }, 25000);

    return () => {
      clearTimeout(initialTimer);
      clearInterval(intervalTimer);
    };
  }, [seatsRemaining, randomNames]);

  const handleApplyNow = () => {
    // Navigate to contact us form within the website
    try {
      router.push("/contact-us");
    } catch (error) {
      console.error("Router navigation failed:", error);
      window.location.href = "/contact-us";
    }
  };

  const handleReserveSeat = () => {
    setShowReserveModal(true);
  };

  const handleReserveSubmit = () => {
    try {
      router.push("/contact-us");
    } catch (error) {
      console.error("Router navigation failed:", error);
      window.location.href = "/contact-us";
    }
  };

  const handleCloseCta = () => {
    setIsDismissed(true);
    setIsVisible(false);
  };

  return (
    <>
      {/* Notification Popup */}
      <AnimatePresence>
        {showNotification && currentNotification && (
          <motion.div
            initial={{ x: 300, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: 300, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="fixed top-6 right-4 z-[60] bg-white border border-gray-200 rounded-lg shadow-lg p-4 max-w-xs"
          >
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                <svg
                  className="w-4 h-4 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
              <div className="flex-1">
                <p className="text-sm font-medium text-gray-900">
                  {currentNotification.name} just booked a seat!
                </p>
                <p className="text-xs text-red-600 font-semibold">
                  Only {currentNotification.seatsLeft} seats remaining
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Sticky CTA Buttons */}
      <AnimatePresence>
        {isVisible && !isDismissed && (
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 100 }}
            transition={{ duration: 0.3 }}
            className="fixed bottom-6 right-6 z-50"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
              className="w-80"
            >
              <Card className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 border-slate-700/50 shadow-2xl backdrop-blur-sm relative">
                <CardContent className="p-6">
                  {/* Close Button */}
                  <button
                    onClick={handleCloseCta}
                    className="absolute top-3 right-3 w-6 h-6 bg-slate-700/50 hover:bg-slate-600/50 rounded-full flex items-center justify-center transition-colors group"
                    aria-label="Close"
                  >
                    <X className="w-3 h-3 text-slate-400 group-hover:text-white transition-colors" />
                  </button>

                  <div className="mb-4">
                    <h3 className="text-lg font-bold text-white text-center pr-6">
                      Take Action Now!
                    </h3>
                  </div>

                  <div className="space-y-4">
                    {/* Apply Now Option */}
                    <div className="bg-gradient-to-r from-[#0BC5EA]/10 to-[#6B46C1]/10 border border-[#0BC5EA]/30 rounded-lg p-4">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-8 h-8 bg-gradient-to-r from-[#0BC5EA] to-[#6B46C1] rounded-full flex items-center justify-center">
                          <Phone className="w-4 h-4 text-white" />
                        </div>
                        <div>
                          <div className="text-white font-semibold text-sm">
                            Apply for Scholarship
                          </div>
                          <div className="text-gray-400 text-xs">
                            Get personalized guidance
                          </div>
                        </div>
                      </div>
                      <Button
                        onClick={handleApplyNow}
                        className="w-full bg-gradient-to-r from-[#0BC5EA] to-[#6B46C1] hover:from-[#0BC5EA]/90 hover:to-[#6B46C1]/90 text-white font-semibold"
                      >
                        Apply Now
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Button>
                    </div>

                    {/* Reserve Seat Option */}
                    <div className="bg-gradient-to-r from-yellow-600/10 to-orange-600/10 border border-yellow-600/30 rounded-lg p-4">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-8 h-8 bg-gradient-to-r from-yellow-600 to-orange-600 rounded-full flex items-center justify-center">
                          <CreditCard className="w-4 h-4 text-white" />
                        </div>
                        <div>
                          <div className="text-white font-semibold text-sm">
                            Reserve Your Seat
                          </div>
                          <div className="text-gray-400 text-xs">
                            Secure your spot today
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-2 mb-3">
                        <Badge className="bg-yellow-600/20 text-yellow-400 border-yellow-600/30 text-xs">
                          <Shield className="w-3 h-3 mr-1" />
                          Refundable in 7 days
                        </Badge>
                      </div>
                      <Button
                        onClick={handleReserveSeat}
                        className="w-full bg-gradient-to-r from-yellow-600 to-orange-600 hover:from-yellow-700 hover:to-orange-700 text-white font-semibold"
                      >
                        Reserve at ₹499/-
                        <CreditCard className="w-4 h-4 ml-2" />
                      </Button>
                    </div>

                    <div className="text-center pt-2">
                      <p className="text-xs text-gray-400">
                        Limited seats available • Secure your future today
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Reserve Seat Modal */}
      <Dialog open={showReserveModal} onOpenChange={setShowReserveModal}>
        <DialogContent className="max-w-md bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 border-slate-700/50">
          <DialogHeader className="text-center pb-4">
            <div className="w-16 h-16 bg-gradient-to-r from-yellow-600 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <CreditCard className="w-8 h-8 text-white" />
            </div>
            <DialogTitle className="text-2xl font-bold text-white">
              Reserve Your Seat
            </DialogTitle>
            <DialogDescription className="text-slate-300">
              Secure your spot in the AI Generalist Program for just ₹499/-
            </DialogDescription>
          </DialogHeader>

          <div className="space-y-6">
            <div className="bg-gradient-to-r from-yellow-600/10 to-orange-600/10 border border-yellow-600/30 rounded-lg p-4">
              <h4 className="text-white font-semibold mb-3 flex items-center gap-2">
                <Shield className="w-4 h-4 text-yellow-400" />
                Reservation Benefits
              </h4>
              <div className="space-y-2 text-sm text-slate-300">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-3 h-3 text-green-400" />
                  <span>Guaranteed seat in next batch</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-3 h-3 text-green-400" />
                  <span>100% refundable within 7 days</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-3 h-3 text-green-400" />
                  <span>Early access to course materials</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-3 h-3 text-green-400" />
                  <span>Priority support from mentors</span>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="First Name"
                  className="w-full px-4 py-3 bg-slate-800/50 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:border-yellow-500 transition-colors"
                />
                <input
                  type="text"
                  placeholder="Last Name"
                  className="w-full px-4 py-3 bg-slate-800/50 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:border-yellow-500 transition-colors"
                />
              </div>
              <input
                type="email"
                placeholder="Email Address"
                className="w-full px-4 py-3 bg-slate-800/50 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:border-yellow-500 transition-colors"
              />
              <input
                type="tel"
                placeholder="Phone Number"
                className="w-full px-4 py-3 bg-slate-800/50 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:border-yellow-500 transition-colors"
              />
            </div>

            <div className="bg-slate-800/30 rounded-lg p-4">
              <div className="flex items-center justify-between mb-2">
                <span className="text-white font-semibold">
                  Reservation Fee
                </span>
                <span className="text-2xl font-bold text-yellow-400">
                  ₹499/-
                </span>
              </div>
              <div className="flex items-center gap-2 text-xs text-slate-400">
                <Clock className="w-3 h-3" />
                <span>Refundable within 7 days of course start</span>
              </div>
            </div>

            <Button
              onClick={handleReserveSubmit}
              className="w-full bg-gradient-to-r from-yellow-600 to-orange-600 hover:from-yellow-700 hover:to-orange-700 text-white font-semibold py-3"
            >
              Proceed to Payment
              <CreditCard className="w-4 h-4 ml-2" />
            </Button>

            <p className="text-xs text-slate-400 text-center">
              Secure payment powered by Razorpay • Your data is protected
            </p>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}
