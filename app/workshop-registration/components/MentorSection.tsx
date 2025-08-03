"use client";
import Image from "next/image";
import { Linkedin } from "lucide-react";
import MicrosoftLogo from "../../../public/last_microsoft.png";

export function MentorSection() {
  return (
    <div className="mb-16">
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
          Meet Your Mentor
        </h2>
        <p className="text-xl text-gray-300">Expert from the Industry</p>
      </div>

      {/* Shubham Lal - Main Mentor */}
      <div className="max-w-5xl mx-auto bg-gradient-to-r from-[#0BC5EA]/10 to-[#6B46C1]/10 rounded-2xl p-8 border border-[#0BC5EA]/20 shadow-2xl">
        <div className="flex flex-col lg:flex-row items-start gap-8">
          {/* Profile Image */}
          <div className="flex-shrink-0">
            <div className="size-32 rounded-full overflow-hidden border-4 border-[#0BC5EA] p-1 shadow-lg">
              <Image
                src="/shubham_lal.jpg"
                alt="Shubham Lal"
                width={128}
                height={128}
                className="object-cover w-full h-full rounded-full"
              />
            </div>
          </div>

          {/* Content */}
          <div className="flex-1 text-center lg:text-left">
            <h3 className="text-3xl font-bold text-[#0BC5EA] mb-3">
              Shubham Lal
            </h3>

            {/* Role at Microsoft */}
            <div className="flex items-center justify-center lg:justify-start gap-3 mb-6">
              <p className="text-xl text-foreground/80">SDE II at</p>
              <Image
                src={MicrosoftLogo}
                alt="Microsoft Logo"
                width={80}
                height={80}
              />
            </div>

            {/* Key Points */}
            <div className="space-y-4 text-gray-300 text-left">
              <div className="flex items-start gap-3">
                <span className="text-[#0BC5EA] font-bold text-lg">•</span>
                <p>
                  Working at the cutting edge of AI and full‑stack engineering
                </p>
              </div>

              <div className="flex items-start gap-3">
                <span className="text-[#0BC5EA] font-bold text-lg">•</span>
                <p>
                  <strong>Founder & CEO of AILinc</strong> – Elevating AI
                  education for students and professionals across the globe
                </p>
              </div>

              <div className="flex items-start gap-3">
                <span className="text-[#0BC5EA] font-bold text-lg">•</span>
                <p>
                  <strong>Speaker at 300+ events</strong> – from colleges to
                  community forums, inspiring over 10,000+ learners on AI, Data
                  Science, and Soft Skills
                </p>
              </div>

              <div className="flex items-start gap-3">
                <span className="text-[#0BC5EA] font-bold text-lg">•</span>
                <p>
                  <strong>Trainer & Mentor</strong> – Delivered live AI sessions
                  and soft‑skills workshops to 1,000s of undergraduates and
                  working professionals
                </p>
              </div>

              <div className="flex items-start gap-3">
                <span className="text-[#0BC5EA] font-bold text-lg">•</span>
                <p>
                  <strong>Projects & Focus Areas:</strong> Building AI‑driven
                  tools, full-stack apps, prompt engineering, and responsible AI
                  curriculums for learners and institutions
                </p>
              </div>

              <div className="flex items-start gap-3">
                <span className="text-[#0BC5EA] font-bold text-lg">•</span>
                <p>
                  <strong>Advocates hands‑on learning</strong> with real-world
                  use cases for HR, hiring and personal growth using AI
                  platforms like ChatGPT, AutoML, and more
                </p>
              </div>
            </div>

            {/* LinkedIn Button */}
            <div className="mt-8">
              <a
                href="https://www.linkedin.com/in/shubhamlal/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-gradient-to-r from-[#0BC5EA] to-[#6B46C1] hover:from-[#0BC5EA]/90 hover:to-[#6B46C1]/90 text-white px-6 py-3 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl font-semibold"
              >
                <Linkedin className="size-5" />
                <span>Connect on LinkedIn</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
