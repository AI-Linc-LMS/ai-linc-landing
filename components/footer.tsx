"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { Linkedin, Mail, Send, Users } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Separator } from "@/components/ui/separator"
import { useLenis } from "@/hooks/use-lenis"
import { useRouter, usePathname } from "next/navigation"

export function Footer() {
  const { scrollTo } = useLenis()
  const router = useRouter()
  const pathname = usePathname()

  // Function to handle navigation to sections
  const navigateToSection = (sectionId: string, duration: number = 1.5) => {
    if (pathname === '/') {
      // Already on home page, just scroll
      scrollTo(`#${sectionId}`, { duration })
    } else {
      // Navigate to home page first, then scroll
      router.push(`/#${sectionId}`)
    }
  }

  // Function to handle contact/apply form navigation
  const navigateToContactForm = (formType: "contact" | "apply") => {
    if (pathname === '/') {
      // Already on home page, trigger form and scroll
      const section = document.getElementById("contact-apply")
      const trigger = section?.querySelector(`[value="${formType}"]`)
      trigger && (trigger as HTMLElement).click()
      scrollTo("#contact-apply", { duration: 1.5 })
    } else {
      // Navigate to home page with hash to trigger form
      router.push(`/#contact-apply-${formType}`)
    }
  }

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  }

  return (
    <footer className="bg-background border-t border-[#0BC5EA]/10 py-12 sm:py-16 relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 lg:gap-12 mb-12"
        >
          {/* Column 1: About AI Linc */}
          <motion.div variants={item} className="space-y-4">
            <div className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-[#0BC5EA] to-[#6B46C1] bg-clip-text text-transparent mb-4">
              AI LINC
            </div>
            <h3 className="text-lg sm:text-xl font-semibold text-white mb-3">About AI Linc</h3>
            <p className="text-sm sm:text-base text-foreground/70 leading-relaxed mb-4">
              Bridging the gap between AI talent and opportunity. We assess, elevate, and deploy professionals into high-impact AI roles.
            </p>
            <ul className="space-y-2 text-sm sm:text-base">
              <li>
                <Link
                  href="/about-us"
                  className="text-foreground/60 hover:text-[#0BC5EA] transition-colors text-left"
                >
                  Who We Are
                </Link>
              </li>
              <li>
                <Link
                  href="/about-us"
                  className="text-foreground/60 hover:text-[#0BC5EA] transition-colors text-left"
                >
                  What We Do
                </Link>
              </li>
              <li>
                <button
                  onClick={() => navigateToSection("how-we-do-it")}
                  className="text-foreground/60 hover:text-[#0BC5EA] transition-colors text-left"
                >
                  How We Do It
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigateToSection("success-stories")}
                  className="text-foreground/60 hover:text-[#0BC5EA] transition-colors text-left"
                >
                  Success Stories
                </button>
              </li>
            </ul>
          </motion.div>

          {/* Column 2: Hire Talent */}
          <motion.div variants={item} className="space-y-4">
            <h3 className="text-lg sm:text-xl font-semibold text-white mb-3">Hire Talent</h3>
            <p className="text-sm sm:text-base text-foreground/70 leading-relaxed mb-4">
              Access our curated pool of AI-ready professionals for your organization.
            </p>
            <ul className="space-y-2 text-sm sm:text-base">
              <li>
                <button
                  onClick={() => navigateToSection("success-stories")}
                  className="text-foreground/60 hover:text-[#0BC5EA] transition-colors text-left"
                >
                  Browse Talent Pool
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigateToSection("how-we-do-it")}
                  className="text-foreground/60 hover:text-[#0BC5EA] transition-colors text-left"
                >
                  Hiring Process
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigateToSection("what-we-do")}
                  className="text-foreground/60 hover:text-[#0BC5EA] transition-colors text-left"
                >
                  Enterprise Solutions
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigateToContactForm("contact")}
                  className="text-foreground/60 hover:text-[#0BC5EA] transition-colors text-left"
                >
                  Pricing for Employers
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigateToContactForm("contact")}
                  className="text-[#0BC5EA] font-semibold hover:text-[#06B6D4] transition-colors text-left"
                >
                  Get in Touch →
                </button>
              </li>
            </ul>
          </motion.div>

          {/* Column 3: Join as Talent */}
          <motion.div variants={item} className="space-y-4">
            <h3 className="text-lg sm:text-xl font-semibold text-white mb-3">Join as Talent</h3>
            <p className="text-sm sm:text-base text-foreground/70 leading-relaxed mb-4">
              Transform your career and get deployed into high-impact AI roles.
            </p>
            <ul className="space-y-2 text-sm sm:text-base">
              <li>
                <button
                  onClick={() => navigateToSection("how-we-do-it")}
                  className="text-foreground/60 hover:text-[#0BC5EA] transition-colors text-left"
                >
                  AI Readiness Assessment
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigateToSection("how-we-do-it")}
                  className="text-foreground/60 hover:text-[#0BC5EA] transition-colors text-left"
                >
                  Live Role Simulations
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigateToSection("how-we-do-it")}
                  className="text-foreground/60 hover:text-[#0BC5EA] transition-colors text-left"
                >
                  Personalized Upskilling
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigateToSection("work-integration")}
                  className="text-foreground/60 hover:text-[#0BC5EA] transition-colors text-left"
                >
                  Deployment Process
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigateToContactForm("apply")}
                  className="text-[#6B46C1] font-semibold hover:text-[#8B5CF6] transition-colors text-left"
                >
                  Apply Now →
                </button>
              </li>
            </ul>
          </motion.div>

          {/* Column 4: Connect & Subscribe */}
          <motion.div variants={item} className="space-y-4">
            <h3 className="text-lg sm:text-xl font-semibold text-white mb-3">Stay Connected</h3>

            {/* Social Links */}
            <div className="space-y-3">
              <Button
                variant="ghost"
                className="w-full justify-start p-3 hover:bg-[#0BC5EA]/10 hover:text-[#0BC5EA] transition-colors"
                asChild
              >
                <Link href="https://www.linkedin.com/company/ai-linc772/" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="size-5 mr-3" />
                  LinkedIn
                </Link>
              </Button>

              <Button
                variant="ghost"
                className="w-full justify-start p-3 hover:bg-[#0BC5EA]/10 hover:text-[#0BC5EA] transition-colors"
                onClick={() => window.open("/contact-us", "_blank")}
              >
                <Mail className="size-5 mr-3" />
                Contact
              </Button>

              <Button
                variant="ghost"
                className="w-full justify-start p-3 hover:bg-[#0BC5EA]/10 hover:text-[#0BC5EA] transition-colors"
                asChild
              >
                <Link href="/about-us">
                  <Users className="size-5 mr-3" />
                  About Us
                </Link>
              </Button>
            </div>

            {/* Newsletter Signup */}
            <div className="mt-6">
              <div className="flex items-center mb-3">
                <Send className="size-5 mr-2 text-[#0BC5EA]" />
                <span className="font-semibold text-white">Newsletter</span>
              </div>
              <p className="text-sm text-foreground/60 mb-3">
                Get the latest AI insights and opportunities
              </p>
              <div className="space-y-2">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  className="bg-background/50 border-[#0BC5EA]/30 focus:border-[#0BC5EA] focus:ring-[#0BC5EA]/20 text-sm"
                />
                <Button className="w-full bg-gradient-to-r from-[#0BC5EA] to-[#06B6D4] hover:from-[#06B6D4] hover:to-[#0891B2] text-white font-semibold text-sm">
                  Subscribe
                </Button>
              </div>
            </div>
          </motion.div>
        </motion.div>

        <Separator className="bg-[#0BC5EA]/10 mb-8" />

        {/* Bottom footer row */}
        <motion.div
          variants={item}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="flex flex-col lg:flex-row justify-between items-center text-foreground/60 text-sm space-y-4 lg:space-y-0"
        >
          <p>&copy; {new Date().getFullYear()} AI LINC. All rights reserved.</p>
          <div className="flex flex-wrap justify-center lg:justify-end gap-x-6 gap-y-2">
            <Link href="/terms" className="hover:text-[#0BC5EA] transition-colors">Terms</Link>
            <Link href="/privacy" className="hover:text-[#0BC5EA] transition-colors">Privacy</Link>
            <Link href="/refund" className="hover:text-[#0BC5EA] transition-colors">Refunds</Link>
            <Link href="/contact-us" className="hover:text-[#0BC5EA] transition-colors">Support</Link>
          </div>
        </motion.div>
      </div>

      {/* Background effects */}
      <div className="absolute bottom-0 left-1/4 size-64 sm:size-80 lg:size-96 bg-[#0BC5EA]/5 rounded-full blur-3xl"></div>
      <div className="absolute top-0 right-1/4 size-64 sm:size-80 lg:size-96 bg-[#6B46C1]/5 rounded-full blur-3xl"></div>
    </footer>
  )
}