"use client"

import React from "react"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { cn } from "@/lib/utils"
import { motion, AnimatePresence } from "framer-motion"
import { useLenis } from "@/hooks/use-lenis"

export function Navbar() {
  const { scrollTo } = useLenis()
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled ? "bg-background/90 backdrop-blur-md shadow-lg border-b border-border/20" : "bg-transparent",
      )}
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center">
            <span className="text-2xl font-bold bg-gradient-to-r from-[#0BC5EA] to-[#6B46C1] bg-clip-text text-transparent">
              AI LINC
            </span>
          </Link>

          <NavigationMenu className="hidden md:flex">
            <NavigationMenuList>
              <NavigationMenuItem>
                <Link href="#program" legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>Program</NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="#curriculum" legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>Curriculum</NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="#instructors" legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>Instructors</NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="#community" legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>Community</NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="#pricing" legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>Pricing</NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          <div className="hidden md:block">
            <Button
              className="bg-gradient-to-r from-[#0BC5EA] to-[#6B46C1] hover:opacity-90 text-white font-medium px-6 py-2 rounded-md transition-all duration-300 shadow-[0_0_15px_rgba(11,197,234,0.5)]"
              size="lg"
              onClick={() => {
                console.log('Navbar Apply Now button clicked!');
                
                // Try Lenis first
                try {
                  scrollTo('#contact-apply', { duration: 1.5 });
                  console.log('Navbar Lenis scroll attempted');
                } catch (error) {
                  console.log('Navbar Lenis failed, using fallback:', error);
                  // Fallback to native scroll
                  const element = document.getElementById('contact-apply');
                  if (element) {
                    element.scrollIntoView({ 
                      behavior: 'smooth',
                      block: 'start'
                    });
                    console.log('Navbar native scroll used');
                  } else {
                    console.log('Navbar: Element not found!');
                  }
                }
              }}
            >
              Apply Now
            </Button>
          </div>

          <button className="md:hidden text-foreground" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-background/95 backdrop-blur-md border-b border-border/20"
          >
            <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
              <Link
                href="#program"
                className="text-foreground/80 hover:text-foreground transition-colors py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Program
              </Link>
              <Link
                href="#curriculum"
                className="text-foreground/80 hover:text-foreground transition-colors py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Curriculum
              </Link>
              <Link
                href="#instructors"
                className="text-foreground/80 hover:text-foreground transition-colors py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Instructors
              </Link>
              <Link
                href="#community"
                className="text-foreground/80 hover:text-foreground transition-colors py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Community
              </Link>
              <Link
                href="#pricing"
                className="text-foreground/80 hover:text-foreground transition-colors py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Pricing
              </Link>
              <Button
                className="bg-gradient-to-r from-[#0BC5EA] to-[#6B46C1] hover:opacity-90 text-white font-medium w-full py-2 rounded-md transition-all duration-300 shadow-[0_0_15px_rgba(11,197,234,0.5)]"
                onClick={() => {
                  setMobileMenuOpen(false);
                  setTimeout(() => {
                    console.log('Mobile Apply Now button clicked!');
                    
                    // Try Lenis first
                    try {
                      scrollTo('#contact-apply', { duration: 1.5 });
                      console.log('Mobile Lenis scroll attempted');
                    } catch (error) {
                      console.log('Mobile Lenis failed, using fallback:', error);
                      // Fallback to native scroll
                      const element = document.getElementById('contact-apply');
                      if (element) {
                        element.scrollIntoView({ 
                          behavior: 'smooth',
                          block: 'start'
                        });
                        console.log('Mobile native scroll used');
                      } else {
                        console.log('Mobile: Element not found!');
                      }
                    }
                  }, 300);
                }}
              >
                Apply Now
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}

const ListItem = React.forwardRef<React.ElementRef<"a">, React.ComponentPropsWithoutRef<"a"> & { title: string }>(
  ({ className, title, children, ...props }, ref) => {
    return (
      <li>
        <NavigationMenuLink asChild>
          <a
            ref={ref}
            className={cn(
              "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
              className,
            )}
            {...props}
          >
            <div className="text-sm font-medium leading-none">{title}</div>
            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">{children}</p>
          </a>
        </NavigationMenuLink>
      </li>
    )
  },
)
ListItem.displayName = "ListItem"
