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
import { ContactFormModal } from "@/components/contact-form-modal";

export function StickyCtaButtons({
  onReserveSeat,
}: {
  onReserveSeat: () => void;
}) {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [showNotification, setShowNotification] = useState(false);
  const [currentNotification, setCurrentNotification] = useState({
    name: "",
    message: "",
    seatsLeft: 5,
    showSeatsLeft: false,
  });
  const [seatsRemaining, setSeatsRemaining] = useState(5);
  const [isDismissed, setIsDismissed] = useState(false);
  const [recentlyUsed, setRecentlyUsed] = useState<string[]>([]);
  const router = useRouter();

  // Expanded list of names
  const randomNames = [
    "Rahul", "Priya", "Amit", "Sneha", "Vikash", "Ananya", "Rohan", "Kavya",
    "Arjun", "Divya", "Karan", "Pooja", "Siddharth", "Nisha", "Raj", "Meera",
    "Abhishek", "Riya", "Nikhil", "Shreya", "Akash", "Tanvi", "Varun", "Isha",
    "Taniya", "Harsh", "Aisha", "Manish", "Deepika", "Rohit", "Sakshi", "Gaurav",
    "Neha", "Vikas", "Preeti", "Ajay", "Swati", "Suresh", "Kritika", "Naveen",
    "Shweta", "Ravi", "Anjali", "Vishal", "Madhuri", "Sandeep", "Pallavi", "Ashish",
    "Sunita", "Ramesh", "Komal", "Yogesh", "Vandana", "Mahesh", "Richa", "Rajesh",
    "Geeta", "Sunil", "Rekha", "Dinesh", "Kavita", "Mukesh", "Sonia", "Pankaj",
    "Archana", "Vinod", "Shilpa", "Anil", "Babita", "Deepak", "Sapna", "Manoj",
    "Urmila", "Vijay", "Kiran", "Subhash", "Mala", "Prakash", "Seema", "Lalit",
    "Bharti", "Arun", "Sushma", "Jitendra", "Lata", "Bharat", "Usha", "Narayan"
  ];

  // Varied notification messages
  const notificationMessages = [
    "just signed up on the platform",
    "just booked a seat",
    "just joined the course",
    "just reserved their spot",
    "just enrolled in the program",
    "just completed registration",
    "just secured their seat",
    "just applied for the course",
    "just confirmed their enrollment",
    "just joined the waiting list"
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
        // Get available names (not recently used)
        const availableNames = randomNames.filter(name => !recentlyUsed.includes(name));
        const namesToUse = availableNames.length > 0 ? availableNames : randomNames;
        
        const randomName = namesToUse[Math.floor(Math.random() * namesToUse.length)];
        const randomMessage = notificationMessages[Math.floor(Math.random() * notificationMessages.length)];
        const newSeatsLeft = Math.max(1, seatsRemaining - 1);

        setCurrentNotification({
          name: randomName,
          message: randomMessage,
          seatsLeft: 5,
          showSeatsLeft: randomMessage === "just booked a seat",
        });
        setSeatsRemaining(5);
        setShowNotification(true);

        // Update recently used names (keep last 10)
        setRecentlyUsed(prev => {
          const updated = [randomName, ...prev];
          return updated.slice(0, Math.min(10, Math.floor(randomNames.length / 3)));
        });

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
  }, [seatsRemaining, randomNames, notificationMessages, recentlyUsed]);

  const handleApplyNow = () => {
    setIsContactModalOpen(true);
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
            className="fixed top-10 right-4 z-[60] bg-white border border-gray-200 rounded-lg shadow-lg p-4 max-w-xs"
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
                  {currentNotification.name} {currentNotification.message}!
                </p>
                {currentNotification.showSeatsLeft && (
                  <p className="text-xs text-red-600 font-semibold">
                    Only {currentNotification.seatsLeft} seats remaining
                  </p>
                )}
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
                    className="absolute top-10 right-3 w-6 h-6 bg-slate-700/50 hover:bg-slate-600/50 rounded-full flex items-center justify-center transition-colors group"
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
                            Apply Now
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
                        onClick={onReserveSeat}
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

      <ContactFormModal
        open={isContactModalOpen}
        onOpenChange={setIsContactModalOpen}
      />
    </>
  );
}
