"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { Twitter, Linkedin, Instagram, Github } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Separator } from "@/components/ui/separator"

export function Footer() {
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
          className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12"
        >
          <motion.div variants={item}>
            <div className="text-2xl font-bold bg-gradient-to-r from-[#0BC5EA] to-[#6B46C1] bg-clip-text text-transparent mb-4">
              AI LINC
            </div>
            <p className="text-foreground/60 mb-4">
              The 111-Day Program That Makes You 100X More Valuable in the AI Economy
            </p>
            <div className="flex space-x-4">
              <Button variant="ghost" size="icon" className="rounded-full hover:bg-[#0BC5EA]/10 hover:text-[#0BC5EA]">
                <Twitter className="size-5" />
                <span className="sr-only">Twitter</span>
              </Button>
              <Button variant="ghost" size="icon" className="rounded-full hover:bg-[#0BC5EA]/10 hover:text-[#0BC5EA]">
                <Linkedin className="size-5" />
                <span className="sr-only">LinkedIn</span>
              </Button>
              <Button variant="ghost" size="icon" className="rounded-full hover:bg-[#0BC5EA]/10 hover:text-[#0BC5EA]">
                <Instagram className="size-5" />
                <span className="sr-only">Instagram</span>
              </Button>
              <Button variant="ghost" size="icon" className="rounded-full hover:bg-[#0BC5EA]/10 hover:text-[#0BC5EA]">
                <Github className="size-5" />
                <span className="sr-only">GitHub</span>
              </Button>
            </div>
          </motion.div>
          <motion.div variants={item}>
            <h3 className="text-lg font-semibold text-white mb-4">Program</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#program" className="text-foreground/60 hover:text-[#0BC5EA] transition-colors">
                  Program Structure
                </Link>
              </li>
              <li>
                <Link href="#curriculum" className="text-foreground/60 hover:text-[#0BC5EA] transition-colors">
                  Curriculum
                </Link>
              </li>
              <li>
                <Link href="#instructors" className="text-foreground/60 hover:text-[#0BC5EA] transition-colors">
                  Instructors
                </Link>
              </li>
              <li>
                <Link href="#pricing" className="text-foreground/60 hover:text-[#0BC5EA] transition-colors">
                  Pricing
                </Link>
              </li>
            </ul>
          </motion.div>
          <motion.div variants={item}>
            <h3 className="text-lg font-semibold text-white mb-4">Company</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-foreground/60 hover:text-[#0BC5EA] transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="#" className="text-foreground/60 hover:text-[#0BC5EA] transition-colors">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="#" className="text-foreground/60 hover:text-[#0BC5EA] transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="#" className="text-foreground/60 hover:text-[#0BC5EA] transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </motion.div>
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
        </motion.div>
        <Separator className="bg-[#0BC5EA]/10 mb-8" />
        <div className="flex flex-col md:flex-row justify-between items-center text-foreground/60 text-sm">
          <p>&copy; {new Date().getFullYear()} AI LINC. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link href="#" className="hover:text-[#0BC5EA] transition-colors">
              Terms of Service
            </Link>
            <Link href="#" className="hover:text-[#0BC5EA] transition-colors">
              Privacy Policy
            </Link>
            <Link href="#" className="hover:text-[#0BC5EA] transition-colors">
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>

      {/* Background glow effects */}
      <div className="absolute bottom-0 left-1/4 size-96 bg-[#0BC5EA]/5 rounded-full blur-3xl"></div>
      <div className="absolute top-0 right-1/4 size-96 bg-[#6B46C1]/5 rounded-full blur-3xl"></div>
    </footer>
  )
}
