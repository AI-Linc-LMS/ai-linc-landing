"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { Youtube, Linkedin, Instagram } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Separator } from "@/components/ui/separator"
import { useLenis } from "@/hooks/use-lenis"

export function Footer() {
  const { scrollTo } = useLenis()

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
    <footer className="bg-background border-t border-[#0BC5EA]/10 py-12 relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-5 gap-8 mb-12"
        >
          {/* Column 1: Brand */}
          <motion.div variants={item}>
            <div className="text-2xl font-bold bg-gradient-to-r from-[#0BC5EA] to-[#6B46C1] bg-clip-text text-transparent mb-4">
              AI LINC
            </div>
            <p className="text-foreground/60 mb-4">
              The 111-Day Program That Makes You 100X More Valuable in the AI Economy
            </p>
            <p className="text-foreground/60 mb-4">Follow us</p>
            <div className="flex space-x-4">
              <Button variant="ghost" size="icon" className="rounded-full hover:bg-[#0BC5EA]/10 hover:text-[#0BC5EA]" asChild>
                <Link href="https://youtube.com/@ailinc772?si=BhOlO4fwHqGiAncC" target="_blank" rel="noopener noreferrer">
                  <Youtube className="size-5" />
                </Link>
              </Button>
              <Button variant="ghost" size="icon" className="rounded-full hover:bg-[#0BC5EA]/10 hover:text-[#0BC5EA]" asChild>
                <Link href="https://www.linkedin.com/company/ai-linc772/" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="size-5" />
                </Link>
              </Button>
              <Button variant="ghost" size="icon" className="rounded-full hover:bg-[#0BC5EA]/10 hover:text-[#0BC5EA]" asChild>
                <Link href="https://www.instagram.com/ai_lincc/" target="_blank" rel="noopener noreferrer">
                  <Instagram className="size-5" />
                </Link>
              </Button>
            </div>
          </motion.div>

          {/* Column 2: Program */}
          <motion.div variants={item}>
            <h3 className="text-lg font-semibold text-white mb-4">Program</h3>
            <ul className="space-y-2">
              <li><Link href="#program" className="text-foreground/60 hover:text-[#0BC5EA]">Program Structure</Link></li>
              <li><Link href="#curriculum" className="text-foreground/60 hover:text-[#0BC5EA]">Curriculum</Link></li>
              <li><Link href="#instructors" className="text-foreground/60 hover:text-[#0BC5EA]">Instructors</Link></li>
              <li><Link href="#pricing" className="text-foreground/60 hover:text-[#0BC5EA]">Pricing</Link></li>
              <li>
                <Link
                  href="#contact-apply"
                  className="text-foreground/60 hover:text-[#0BC5EA]"
                  onClick={() => {
                    const section = document.getElementById("contact-apply")
                    const trigger = section?.querySelector('[value="apply"]')
                    trigger && (trigger as HTMLElement).click()
                    scrollTo("#contact-apply", { duration: 1.5 })
                  }}
                >
                  Apply Now
                </Link>
              </li>
            </ul>
          </motion.div>

          {/* Column 3: Company */}
          <motion.div variants={item}>
            <h3 className="text-lg font-semibold text-white mb-4">Company</h3>
            <ul className="space-y-2">
              <li><Link href="#" className="text-foreground/60 hover:text-[#0BC5EA]">About Us</Link></li>
              <li><Link href="#" className="text-foreground/60 hover:text-[#0BC5EA]">Careers</Link></li>
              <li><Link href="#" className="text-foreground/60 hover:text-[#0BC5EA]">Blog</Link></li>
              <li>
                <Link
                  href="#contact-apply"
                  className="text-foreground/60 hover:text-[#0BC5EA]"
                  onClick={() => {
                    const section = document.getElementById("contact-apply")
                    const trigger = section?.querySelector('[value="contact"]')
                    trigger && (trigger as HTMLElement).click()
                    scrollTo("#contact-apply", { duration: 1.5 })
                  }}
                >
                  Contact
                </Link>
              </li>
            </ul>
          </motion.div>

          {/* Column 4: Subscribe */}
          <motion.div variants={item}>
            <h3 className="text-lg font-semibold text-white mb-4">Subscribe</h3>
            <p className="text-foreground/60 mb-4">Get the latest updates and news from AI LINC</p>
            <div className="flex space-x-2">
              <Input
                type="email"
                placeholder="Enter your email"
                className="bg-background/50 border-[#0BC5EA]/30 focus:border-[#0BC5EA] focus:ring-[#0BC5EA]/20"
              />
              <Button className="bg-[#0BC5EA] hover:bg-[#0BC5EA]/90 text-white">Subscribe</Button>
            </div>
          </motion.div>

          {/* Column 5: Razorpay Policies */}
          <motion.div variants={item}>
            <h3 className="text-lg font-semibold text-white mb-4">Policies (Created by Razorpay)</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="https://merchant.razorpay.com/policy/QhQP3KrkBeMFEv/terms"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-foreground/60 hover:text-[#0BC5EA]"
                >
                  Terms and Conditions
                </Link>
              </li>
              <li>
                <Link
                  href="https://merchant.razorpay.com/policy/QhQP3KrkBeMFEv/privacy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-foreground/60 hover:text-[#0BC5EA]"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="https://merchant.razorpay.com/policy/QhQP3KrkBeMFEv/refund"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-foreground/60 hover:text-[#0BC5EA]"
                >
                  Cancellations and Refunds
                </Link>
              </li>
              <li>
                <Link
                  href="https://merchant.razorpay.com/policy/QhQP3KrkBeMFEv/shipping"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-foreground/60 hover:text-[#0BC5EA]"
                >
                  Shipping Policy
                </Link>
              </li>
              <li>
                <Link
                  href="https://merchant.razorpay.com/policy/QhQP3KrkBeMFEv/contact_us"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-foreground/60 hover:text-[#0BC5EA]"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </motion.div>
        </motion.div>

        <Separator className="bg-[#0BC5EA]/10 mb-8" />

        {/* Bottom footer row */}
        <div className="flex flex-col md:flex-row justify-between items-center text-foreground/60 text-sm">
          <p>&copy; {new Date().getFullYear()} AI LINC. All rights reserved.</p>
          <div className="flex flex-col md:flex-row md:space-x-6 space-y-2 md:space-y-0 mt-4 md:mt-0 text-center md:text-left">
            <Link href="https://merchant.razorpay.com/policy/QhQP3KrkBeMFEv/terms" target="_blank" rel="noopener noreferrer" className="hover:text-[#0BC5EA]">Terms and Conditions</Link>
            <Link href="https://merchant.razorpay.com/policy/QhQP3KrkBeMFEv/privacy" target="_blank" rel="noopener noreferrer" className="hover:text-[#0BC5EA]">Privacy Policy</Link>
            <Link href="https://merchant.razorpay.com/policy/QhQP3KrkBeMFEv/refund" target="_blank" rel="noopener noreferrer" className="hover:text-[#0BC5EA]">Cancellations and Refunds</Link>
            <Link href="https://merchant.razorpay.com/policy/QhQP3KrkBeMFEv/shipping" target="_blank" rel="noopener noreferrer" className="hover:text-[#0BC5EA]">Shipping Policy</Link>
            <Link href="https://merchant.razorpay.com/policy/QhQP3KrkBeMFEv/contact_us" target="_blank" rel="noopener noreferrer" className="hover:text-[#0BC5EA]">Contact Us</Link>
          </div>
        </div>
      </div>

      {/* Background effects */}
      <div className="absolute bottom-0 left-1/4 size-96 bg-[#0BC5EA]/5 rounded-full blur-3xl"></div>
      <div className="absolute top-0 right-1/4 size-96 bg-[#6B46C1]/5 rounded-full blur-3xl"></div>
    </footer>
  )
}