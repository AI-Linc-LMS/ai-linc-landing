"use client"

import { useState } from "react"
import { RegistrationForm } from "@/app/workshop-registration/components/RegistrationForm"
import { RegistrationCount } from "@/app/workshop-registration/components/RegistrationCount"
import { useCountdown } from "@/hooks/use-countdown"

const WEBINAR_DATE = new Date("2025-07-27T12:30:00+05:30"); // IST timezone

interface RegistrationSectionProps {
  onSuccess: () => void
}

const benefits = [
  { icon: "", title: "Expert Guidance", desc: "Learn from industry leaders with 10+ years experience" },
  { icon: "", title: "Career Acceleration", desc: "Fast-track your AI career with proven strategies" },
  { icon: "", title: "Networking", desc: "Connect with like-minded professionals and mentors" },
  { icon: "", title: "Certificate", desc: "Receive a completion certificate to boost your profile" }
]

const stats = [
  { number: "10K+", label: "Students Trained", color: "from-[#0BC5EA] to-[#6B46C1]" },
  { number: "95%", label: "Success Rate", color: "from-[#6B46C1] to-[#0BC5EA]" },
  { number: "500+", label: "Companies Hiring", color: "from-[#0BC5EA] to-[#6B46C1]" },
  { number: "₹8L+", label: "Avg. Salary", color: "from-[#6B46C1] to-[#0BC5EA]" }
]

export function RegistrationSection({ onSuccess }: RegistrationSectionProps) {
  const [seatsLeft, setSeatsLeft] = useState(47)
  const timeLeft = useCountdown(WEBINAR_DATE)

  return (
    <section id="registration" className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        {/* Enhanced Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-[#0BC5EA]/20 to-[#6B46C1]/20 rounded-full border border-[#0BC5EA]/30 mb-6">
            <div className="w-2 h-2 bg-[#0BC5EA] rounded-full animate-pulse"></div>
            <span className="text-[#0BC5EA] font-medium">Limited Time Offer</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-[#0BC5EA] to-[#6B46C1] bg-clip-text text-transparent">
            Register for Free Workshop
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Transform your career with our exclusive AI workshop. Join industry experts and unlock your potential in the world of artificial intelligence.
          </p>
          
          {/* Live Registration Count */}
          <RegistrationCount className="mb-8" />
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-3 gap-8 items-start">
          {/* Left Column - Benefits */}
          <div className="lg:col-span-1 space-y-6">
            <div className="text-center lg:text-left">
              <h3 className="text-2xl font-bold text-white mb-6">What You'll Get</h3>
            </div>

            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="flex items-start gap-4 p-4 rounded-xl bg-gradient-to-r from-white/5 to-[#0BC5EA]/5 border border-white/10 hover:border-[#0BC5EA]/30 transition-all duration-300 hover:transform hover:scale-105"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-3xl">{benefit.icon}</div>
                <div>
                  <h4 className="font-semibold text-white mb-1">{benefit.title}</h4>
                  <p className="text-sm text-gray-400">{benefit.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Center Column - Registration Form */}
          <div className="lg:col-span-1">
            {/* Workshop Date and Timer */}
            <div className="mb-8 p-6 bg-gradient-to-br from-[#0BC5EA]/10 via-[#6B46C1]/10 to-[#0BC5EA]/5 rounded-2xl border border-[#0BC5EA]/20 backdrop-blur-sm relative overflow-hidden">
              {/* Animated background elements */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#0BC5EA]/10 rounded-full blur-2xl animate-pulse"></div>
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-[#6B46C1]/10 rounded-full blur-xl animate-pulse" style={{ animationDelay: '1s' }}></div>

              <div className="relative z-10">
                <div className="text-center mb-6">
                  <div className="inline-flex items-center gap-2 px-3 py-1 bg-yellow-400/20 rounded-full mb-3">
                    <div className="w-2 h-2 bg-yellow-400 rounded-full animate-ping"></div>
                    <span className="text-yellow-400 font-medium text-sm">Live Workshop</span>
                  </div>
                  <div className="text-yellow-400 font-semibold text-lg">
                     Sunday, July 27, 2025 at 12:30 PM IST
                  </div>
                </div>

                <div className="text-center mb-4">
                  <div className="font-semibold text-orange-400 mb-3"> Workshop Starts In:</div>
                  <div className="grid grid-cols-4 gap-2">
                    {[
                      { value: timeLeft.days, label: 'Days' },
                      { value: timeLeft.hours, label: 'Hours' },
                      { value: timeLeft.minutes, label: 'Min' },
                      { value: timeLeft.seconds, label: 'Sec' }
                    ].map((item, index) => (
                      <div key={index} className="bg-black/40 rounded-lg p-3 border border-[#0BC5EA]/20 hover:border-[#0BC5EA]/40 transition-colors">
                        <div className="text-2xl font-bold text-[#0BC5EA] font-mono">{item.value.toString().padStart(2, '0')}</div>
                        <div className="text-xs text-gray-400">{item.label}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Registration Form */}
            <div className="bg-gradient-to-br from-white/5 to-[#0BC5EA]/5 rounded-2xl p-6 border border-white/10 backdrop-blur-sm">
              <RegistrationForm
                onSuccess={onSuccess}
                seatsLeft={seatsLeft}
                setSeatsLeft={setSeatsLeft}
              />
            </div>
          </div>

          {/* Right Column - Stats & Social Proof */}
          <div className="lg:col-span-1 space-y-6">
            <div className="text-center lg:text-left">
              <h3 className="text-2xl font-bold text-white mb-6">Join Thousands</h3>
            </div>

            {/* Stats Cards */}
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="p-4 rounded-xl bg-gradient-to-br from-white/5 to-[#0BC5EA]/5 border border-white/10 hover:border-[#0BC5EA]/30 transition-all duration-300 hover:transform hover:scale-105 text-center"
                  style={{ animationDelay: `${index * 0.15}s` }}
                >
                  <div className={`text-2xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent`}>
                    {stat.number}
                  </div>
                  <div className="text-xs text-gray-400 mt-1">{stat.label}</div>
                </div>
              ))}
            </div>

            {/* Testimonial */}
            <div className="p-6 rounded-xl bg-gradient-to-br from-[#0BC5EA]/10 to-[#6B46C1]/10 border border-[#0BC5EA]/20 relative overflow-hidden">
              <div className="absolute top-0 right-0 text-6xl text-[#0BC5EA]/10">"</div>
              <div className="relative z-10">
                <p className="text-gray-300 mb-4 italic">
                  "This workshop completely transformed my understanding of AI. The practical approach and expert guidance helped me land my dream job!"
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-r from-[#0BC5EA] to-[#6B46C1] flex items-center justify-center text-white font-bold">
                    S
                  </div>
                  <div>
                    <div className="font-semibold text-white">Sarah Johnson</div>
                    <div className="text-xs text-gray-400">AI Engineer at Google</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Urgency Indicator */}
            <div className="p-4 rounded-xl bg-gradient-to-r from-red-500/10 to-orange-500/10 border border-red-500/20 text-center">
              <div className="flex items-center justify-center gap-2 mb-2">
                <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
                <span className="text-red-400 font-semibold">Only {seatsLeft} seats left!</span>
              </div>
              <div className="text-xs text-gray-400">Register now to secure your spot</div>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Background Effects */}
      <div className="absolute top-1/4 left-1/4 size-96 bg-[#0BC5EA]/5 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-1/4 right-1/4 size-96 bg-[#6B46C1]/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 size-[800px] bg-gradient-to-r from-[#0BC5EA]/3 to-[#6B46C1]/3 rounded-full blur-3xl"></div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-4 h-4 bg-[#0BC5EA]/30 rounded-full animate-bounce" style={{ animationDelay: '0.5s' }}></div>
      <div className="absolute top-40 right-20 w-6 h-6 bg-[#6B46C1]/30 rounded-full animate-bounce" style={{ animationDelay: '1.5s' }}></div>
      <div className="absolute bottom-20 left-1/4 w-3 h-3 bg-[#0BC5EA]/40 rounded-full animate-bounce" style={{ animationDelay: '2.5s' }}></div>
    </section>
  )
} 