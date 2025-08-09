"use client"

import { useState, useMemo } from "react"
import { RegistrationForm } from "@/app/workshop-registration/components/RegistrationForm"
import { RegistrationCount } from "@/app/workshop-registration/components/RegistrationCount"
import { useCountdown } from "@/hooks/use-countdown"
import { useWorkshopVariables } from "@/hooks/use-workshop-variables"

const FALLBACK_WEBINAR_DATE = new Date("2025-08-10T12:30:00+05:30");

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
  const { data: workshopData, loading } = useWorkshopVariables()

  // Create webinar date from API data or use fallback
  const webinarDate = useMemo(() => {
    if (!workshopData) return FALLBACK_WEBINAR_DATE;
    
    try {
      const [day, month, year] = workshopData.UpcomingWorkshopDate.split('-');
      const [hours, minutes, seconds] = workshopData.WorkshopTime.split(':');
      
      return new Date(`${year}-${month}-${day}T${hours}:${minutes}:${seconds || '00'}+05:30`);
    } catch (error) {
      console.error('Error parsing workshop date:', error);
      return FALLBACK_WEBINAR_DATE;
    }
  }, [workshopData]);

  const timeLeft = useCountdown(webinarDate);

  // Format date for display
  const formatWorkshopDate = (date: Date) => {
    return date.toLocaleDateString('en-IN', {
      weekday: 'long',
      day: 'numeric',
      month: 'short',
      year: 'numeric'
    }) + ' at ' + date.toLocaleTimeString('en-IN', {
      hour: 'numeric',
      minute: '2-digit',
      hour12: true
    }) + ' IST';
  };

  // Use API data or fallback values
  const workshopTitle = workshopData?.WorkshopTitle || "Deploy Your First AI App: Live No-Code AI Workshop";
  const sessionNumber = workshopData?.SessionNumber || "";
  const displayTitle = sessionNumber ? `${sessionNumber}: ${workshopTitle}` : workshopTitle;
  const formattedDate = formatWorkshopDate(webinarDate);

  if (loading) {
    return (
      <section id="registration" className="py-20 relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center">
            <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-[#0BC5EA] mx-auto mb-4"></div>
            <p className="text-xl">Loading workshop details...</p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="registration" className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        {/* No Code Workshop Callout */}
        <div className="mb-16">
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-r from-orange-500/10 via-red-500/10 to-pink-500/10 rounded-2xl p-8 border border-orange-500/20 backdrop-blur-sm relative overflow-hidden">
              {/* Background decorations */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-orange-500/10 rounded-full blur-2xl"></div>
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-pink-500/10 rounded-full blur-xl"></div>
              
              <div className="relative z-10 text-center">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-orange-400/20 to-red-400/20 rounded-full border border-orange-400/30 mb-6">
                  <div className="w-2 h-2 bg-orange-400 rounded-full animate-pulse"></div>
                  <span className="text-orange-400 font-medium">FREE Workshop</span>
                </div>
                
                <h3 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-orange-400 via-red-400 to-pink-400 bg-clip-text text-transparent">
                  {workshopTitle.includes("No-Code") ? "Scared of coding?" : "Ready to build AI products?"}
                </h3>
                
                <p className="text-xl text-gray-200 mb-6 leading-relaxed">
                  Attend our <span className="font-bold text-orange-400">FREE 90 mins Live Workshop</span> on {displayTitle.replace(/^Session-\d+:\s*/, "")}.
                </p>
                
                <div className="bg-gradient-to-r from-green-500/20 to-emerald-500/20 rounded-xl p-6 border border-green-500/30 mb-6">
                  <p className="text-lg font-semibold text-green-400 mb-2">
                    ✨ Yes, you don't need to write a single line of code to develop products!
                  </p>
                  <p className="text-gray-300">
                    Learn how to build AI-powered applications using visual tools and no-code platforms
                  </p>
                </div>
                
                <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-300">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-orange-400 rounded-full"></div>
                    <span>Build AI Apps Visually</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-red-400 rounded-full"></div>
                    <span>Create Chatbots & Agents</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-pink-400 rounded-full"></div>
                    <span>Deploy Real Products</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-orange-400 rounded-full"></div>
                    <span>No Programming Required</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

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
                    {formattedDate}
                  </div>
                  {sessionNumber && (
                    <div className="text-[#0BC5EA] font-medium text-sm mt-2">
                      {sessionNumber}
                    </div>
                  )}
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
                <span className="text-red-400 font-semibold">Only 30 seats left!</span>
              </div>
              <div className="text-xs text-gray-400">Register now to secure your spot</div>
            </div>
          </div>
        </div>

        {/* Add WhatsApp and Zoom links if available */}
        {/* {workshopData && (
          <div className="mt-12 text-center space-y-4">
            <div className="flex flex-wrap justify-center gap-4">
              {workshopData.whatsAppGroupLink && (
                <a
                  href={workshopData.whatsAppGroupLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-semibold rounded-lg transition-all duration-300 hover:scale-105"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                  </svg>
                  Join WhatsApp Group
                </a>
              )}
              {workshopData.ZoomJoiningLink && (
                <a
                  href={workshopData.ZoomJoiningLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-semibold rounded-lg transition-all duration-300 hover:scale-105"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19.5 0A4.5 4.5 0 0124 4.5v15A4.5 4.5 0 0119.5 24h-15A4.5 4.5 0 010 19.5v-15A4.5 4.5 0 014.5 0h15zm-8.25 6v12l9-6-9-6z"/>
                  </svg>
                  Join Workshop (Zoom)
                </a>
              )}
            </div>
          </div>
        )} */}
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