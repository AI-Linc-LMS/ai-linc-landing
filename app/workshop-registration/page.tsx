"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { ThemeProvider } from "@/components/theme-provider";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { toast, Toaster } from "sonner";
import { CountdownTimer } from "./components/CountdownTimer";
import { SpeakersSection } from "./components/SpeakersSection";
import { RegistrationForm } from "./components/RegistrationForm";
import { BootcampBenefits } from "./components/BootcampBenefits";
import { SuccessModal } from "./components/SuccessModal";
import { RegistrationCount } from "./components/RegistrationCount";
import { WhatYouWillLearnSection } from "./components/WhatYouWillLearnSection";
import { MentorSection } from "./components/MentorSection";
import { AboutWorkshopSection } from "./components/AboutWorkshopSection";
import { WhoIsThisWorkshopForSection } from "./components/WhoIsThisWorkshopForSection";
import { BonusSection } from "./components/BonusSection";
import { StickyBottomBar } from "./components/StickyBottomBar";
import { StickyCtaButtons } from "../flagship-course/components/sticky-cta-buttons";

export default function WorkshopRegistration() {
  const [showModal, setShowModal] = useState(false);
  const [seatsLeft, setSeatsLeft] = useState(30); // Simulating limited seats

  
  const scrollToRegistration = () => {
    const registrationElement = document.getElementById("registration-form");
    if (registrationElement) {
      registrationElement.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };
  
  const handleRegistrationSuccess = () => {
    setShowModal(true);
  };
  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
      <main className="relative min-h-screen bg-gradient-to-b from-[#0A1128] to-[#1A202C] text-white overflow-hidden">
        <Toaster position="top-center" richColors />
        <Navbar />

        <div className="container mx-auto px-4 py-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-4xl mx-auto z-10"
          >
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-[#0BC5EA] to-[#6B46C1] bg-clip-text text-transparent">
                Deploy Your First AI App: Live No-Code AI Workshop
              </h1>
              <p className="text-xl text-foreground/80 mb-8">
                Develop Products without writing code
              </p>

              {/* Live Registration Count */}
              <RegistrationCount className="mb-8" />

              {/* Registration Button and Pricing */}
              <div className="mb-8 space-y-4">
                <Button
                  onClick={scrollToRegistration}
                  className="bg-gradient-to-r from-[#0BC5EA] to-[#6B46C1] hover:from-[#0BC5EA]/90 hover:to-[#6B46C1]/90 text-white font-semibold py-4 px-8 rounded-lg text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl w-full md:w-auto min-w-[280px]"
                  size="lg"
                >
                  Register Now for FREE
                </Button>
                <p className="text-md font-semibold text-[#0BC5EA] mb-4">
                  Join for Rs{" "}
                  <span className="line-through text-gray-400">499</span> FREE
                </p>
              </div>

              {/* Countdown Timer */}
              <CountdownTimer />

              {/* YouTube Video */}
              <div className="mb-12">
                <div className="relative w-full max-w-4xl mx-auto">
                  <div className="relative pb-[56.25%] h-0 overflow-hidden rounded-lg shadow-2xl">
                    <iframe
                      src="https://www.youtube.com/embed/aqrZuRF65u8?si=wi7TiBBDb8v03jRF"
                      title="YouTube video player"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowFullScreen
                      className="absolute top-0 left-0 w-full h-full"
                    ></iframe>
                  </div>
                </div>
              </div>

              {/* About the Workshop Section */}
              <AboutWorkshopSection
                onRegistrationClick={scrollToRegistration}
                onRegistrationSuccess={handleRegistrationSuccess}
                seatsLeft={seatsLeft}
                setSeatsLeft={setSeatsLeft}
              />

              {/* What You Will Learn Section */}
              <WhatYouWillLearnSection
                scrollToRegistration={scrollToRegistration}
              />

              {/* Mentor Section */}
              <MentorSection />

              {/* Speakers */}
              <SpeakersSection />

              <WhoIsThisWorkshopForSection
                onRegistrationClick={scrollToRegistration}
              />

              {/* Bonus Section */}
              <BonusSection onRegistrationClick={scrollToRegistration} />
            </div>
          </motion.div>
        </div>

        {/* Registration Success Modal */}
        <SuccessModal showModal={showModal} onClose={closeModal} />

        {/* Sticky Bottom Bar */}
        <StickyBottomBar
          onRegistrationClick={scrollToRegistration}
          seatsLeft={seatsLeft}
        />

        <StickyCtaButtons onReserveSeat={scrollToRegistration}/>

        <Footer />

        <div className="absolute top-1/4 right-1/3 size-96 bg-[#0BC5EA]/5 rounded-full blur-3xl z-0 pointer-events-none"></div>
        <div className="absolute bottom-1/4 left-1/3 size-96 bg-[#6B46C1]/5 rounded-full blur-3xl z-0 pointer-events-none"></div>
      </main>
    </ThemeProvider>
  );
}
