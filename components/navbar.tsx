"use client";
// Array of flagship course modules (replace with real titles as needed)
const flagshipModules = [
  {
    title: "Module 1: Foundations of AI & Everyday Productivity",
    slug: "foundations-of-ai-everyday-productivity",
  },
  {
    title: "Module 2: AI‑Powered Data & Business Analysis",
    slug: "ai-powered-data-business-analysis",
  },
  {
    title: "Module 3: AI‑Powered Software Development & Testing",
    slug: "ai-powered-software-development-testing",
  },
  {
    title: "Module 4: Agentic AI & Automation Strategies",
    slug: "agentic-ai-automation-strategies",
  },
  {
    title: "Module 5: Core Data Science & Generative AI Skills",
    slug: "core-data-science-generative-ai-skills",
  },
  {
    title: "Module 6: Business Applications of AI",
    slug: "business-applications-of-ai",
  },
  {
    title: "Module 7: AI‑Powered Career Advancement Strategies",
    slug: "ai-powered-career-advancement-strategies",
  },
];

import React from "react";
import { createPortal } from "react-dom";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Download, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";
import { useLenis } from "@/hooks/use-lenis";
import { useRouter, usePathname } from "next/navigation";
import { ContactFormModal } from "@/components/contact-form-modal";
import { AICheatSheetModal } from "@/components/ai-cheatsheet-modal";
import { CheatSheetSuccessModal } from "@/components/cheatsheet-success-modal";
import { ProgramsModal } from "@/components/programs-modal";

export function Navbar() {
  const { scrollTo } = useLenis();
  const router = useRouter();
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const [modalPurpose, setModalPurpose] = useState<
    "apply" | "cheatsheet" | null
  >(null);
  const [isAICheatSheetModalOpen, setIsAICheatSheetModalOpen] = useState(false);
  const [isCheatSheetSuccessModalOpen, setIsCheatSheetSuccessModalOpen] =
    useState(false);
  const [cheatSheetSuccessMessage, setCheatSheetSuccessMessage] = useState("");
  const [isProgramsModalOpen, setIsProgramsModalOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Function to handle navigation to contact/apply form
  const navigateToApply = () => {
    setModalPurpose("apply");
    setIsContactModalOpen(true);
  };

  // Function to handle cheat sheet download
  const handleCheatSheetDownload = async (details: {
    name: string;
    email: string;
    phone: string;
  }) => {
    try {
      // Prepare the payload matching the API request body
      const payload = {
        name: details.name,
        email: details.email,
        phone_number: details.phone,
        workshop_name: "AI-Cheat Sheet",
        session_number: "AI-Cheat Sheet leads",
        referal_code: "",
      };

      // Make the API call
      const response = await fetch(
        "https://be-app.ailinc.com/api/clients/1/free-cheat-sheet-download/",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(payload),
        }
      );

      if (!response.ok) {
        throw new Error("Failed to download cheat sheet");
      }

      // Parse the response
      const responseData = await response.json();

      // Set success message and open success modal
      if (responseData.message) {
        setCheatSheetSuccessMessage(responseData.message);
        setIsAICheatSheetModalOpen(false);
        setIsCheatSheetSuccessModalOpen(true);
      }
      // Optional: If there's a download URL, open it
      if (responseData.download_url) {
        window.open(responseData.download_url, "_blank");
      }
    } catch (error) {
      console.error("Cheat sheet download error:", error);
      alert("Failed to download cheat sheet. Please try again.");
    }
  };

  // Function to handle cheat sheet modal open (desktop)
  const navigateToCheatSheet = () => {
    setIsContactModalOpen(false); // Close the existing contact modal if open
    setIsAICheatSheetModalOpen(true);
  };

  // Function to handle mobile menu apply navigation
  const handleMobileApplyClick = () => {
    setMobileMenuOpen(false);
    setModalPurpose("apply");
    setIsContactModalOpen(true);
  };

  // Function to handle mobile cheat sheet download
  const handleMobileCheatSheetClick = () => {
    setMobileMenuOpen(false);
    setIsContactModalOpen(false); // Close the existing contact modal
    setIsAICheatSheetModalOpen(true);
  };

  const [showModuleMenu, setShowModuleMenu] = useState(false);
  const [moduleMenuPos, setModuleMenuPos] = useState({ top: 0, left: 0 });
  const flagshipRef = React.useRef<HTMLLIElement>(null);
  // Timer for delayed close
  const closeTimer = React.useRef<NodeJS.Timeout | null>(null);

  // Helper functions for hover logic
  const openModuleMenu = (e: React.MouseEvent<HTMLLIElement>) => {
    if (closeTimer.current) {
      clearTimeout(closeTimer.current);
      closeTimer.current = null;
    }
    setShowModuleMenu(true);
    const rect = e.currentTarget.getBoundingClientRect();
    setModuleMenuPos({
      top: rect.top + rect.height / 2 - 24,
      left: rect.right + 8,
    });
  };
  const closeModuleMenu = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    closeTimer.current = setTimeout(() => setShowModuleMenu(false), 120);
  };
  const cancelCloseModuleMenu = () => {
    if (closeTimer.current) {
      clearTimeout(closeTimer.current);
      closeTimer.current = null;
    }
  };

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          isScrolled
            ? "bg-background/90 backdrop-blur-md shadow-lg border-b border-border/20"
            : "bg-transparent"
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
                  <Link href="/" legacyBehavior passHref>
                    <NavigationMenuLink
                      className={navigationMenuTriggerStyle()}
                    >
                      Home
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <div className="flex items-center">
                    <NavigationMenuTrigger
                      className={navigationMenuTriggerStyle()}
                      onClick={() => setIsProgramsModalOpen(true)}
                    >
                      Programs
                    </NavigationMenuTrigger>
                  </div>
                  <NavigationMenuContent>
                    <div className="flex relative overflow-visible z-[100]">
                      <ul className="grid w-[280px] gap-3 p-4 relative">
                        <li
                          className="relative"
                          ref={flagshipRef}
                          onMouseEnter={openModuleMenu}
                          onMouseLeave={closeModuleMenu}
                        >
                          <ListItem
                            href="/flagship-course"
                            title="Flagship Course"
                          >
                            Our flagship AI course
                          </ListItem>
                        </li>
                        {/* Portal-style module menu, rendered at the body level for full visibility */}
                        {typeof window !== "undefined" &&
                          createPortal(
                            <AnimatePresence>
                              {showModuleMenu && (
                                <motion.div
                                  initial={{ opacity: 0, y: 10 }}
                                  animate={{ opacity: 1, y: 0 }}
                                  exit={{ opacity: 0, y: 10 }}
                                  transition={{
                                    duration: 0.18,
                                    ease: "easeOut",
                                  }}
                                  className="min-w-[260px] bg-background border border-border rounded-lg shadow-lg p-4 flex flex-col gap-2 z-[9999] fixed"
                                  style={{
                                    top: moduleMenuPos.top,
                                    left: moduleMenuPos.left,
                                  }}
                                  onMouseEnter={cancelCloseModuleMenu}
                                  onMouseLeave={closeModuleMenu}
                                >
                                  <div className="font-semibold text-base mb-2 text-[#0BC5EA]">
                                    Flagship Modules
                                  </div>
                                  {flagshipModules.map((mod) => (
                                    <Link
                                      key={mod.slug}
                                      href={`/flagship-course/module/${mod.slug}`}
                                      className="block px-3 py-2 rounded hover:bg-accent hover:text-accent-foreground text-sm text-foreground transition-colors"
                                    >
                                      {mod.title}
                                    </Link>
                                  ))}
                                </motion.div>
                              )}
                            </AnimatePresence>,
                            document.body
                          )}
                        <li className="text-sm font-medium text-gray-400 px-3 py-1 border-t border-gray-700 mt-2 pt-3">
                          Specialized Programs
                        </li>
                        <ListItem
                          href="/nanodegree"
                          title="AI in Tech: Build Products using Agentic AI"
                        >
                          Comprehensive AI nanodegree program
                        </ListItem>
                      </ul>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <Link
                    href="/flagship-course#instructors"
                    legacyBehavior
                    passHref
                  >
                    <NavigationMenuLink
                      className={navigationMenuTriggerStyle()}
                    >
                      Instructors
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <Link href="/blogs" legacyBehavior passHref>
                    <NavigationMenuLink
                      className={navigationMenuTriggerStyle()}
                    >
                      Blogs
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <Link href="/workshop-registration" legacyBehavior passHref>
                    <NavigationMenuLink
                      className={navigationMenuTriggerStyle()}
                    >
                      Webinar
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>

            <div className="hidden md:block">
              <div className="flex items-center space-x-4">
                <Button
                  className={navigationMenuTriggerStyle()}
                  onClick={() => setIsProgramsModalOpen(true)}
                  variant="outline"
                >
                  Join the AI Linc Community
                </Button>
                <Button
                  className="bg-gradient-to-r from-green-400 to-blue-500 hover:opacity-90 text-white font-medium px-6 py-2 rounded-md transition-all duration-300 shadow-[0_0_15px_rgba(75,192,192,0.5)]"
                  size="lg"
                  onClick={navigateToCheatSheet}
                >
                  <Download className="mr-2" size={20} /> Free AI Cheat Sheet
                </Button>
              </div>
            </div>

            <button
              className="md:hidden text-foreground"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
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
                  href="/"
                  className="text-foreground/80 hover:text-foreground transition-colors py-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Home
                </Link>
                <div className="relative">
                  <div
                    className="flex items-center justify-between text-foreground/80 hover:text-foreground transition-colors py-2 cursor-pointer"
                    onClick={() => {
                      setMobileMenuOpen(false);
                      setIsProgramsModalOpen(true);
                    }}
                  >
                    Programs
                    <ChevronDown className="ml-2 h-4 w-4" />
                  </div>
                </div>
                <Link
                  href="/flagship-course#instructors"
                  className="text-foreground/80 hover:text-foreground transition-colors py-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Instructors
                </Link>
                <Link
                  href="/blogs"
                  className="text-foreground/80 hover:text-foreground transition-colors py-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Blogs
                </Link>
                <Link
                  href="/workshop-registration"
                  className="text-foreground/80 hover:text-foreground transition-colors py-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Webinar
                </Link>
                <Link href="/#contact-apply">
                  <Button
                    className="bg-gradient-to-r from-[#0BC5EA] to-[#6B46C1] hover:opacity-90 text-white font-medium w-full py-2 rounded-md transition-all duration-300 shadow-[0_0_15px_rgba(11,197,234,0.5)]"
                    onClick={() =>
                      window.open("https://app.ailinc.com/jobs", "_blank")
                    }
                  >
                    Get Placed
                  </Button>
                </Link>
                <Button
                  className="bg-gradient-to-r from-green-400 to-blue-500 hover:opacity-90 text-white font-medium w-full py-2 rounded-md transition-all duration-300 shadow-[0_0_15px_rgba(75,192,192,0.5)]"
                  onClick={handleMobileCheatSheetClick}
                >
                  <Download className="mr-2" size={20} /> Free AI Cheat Sheet
                </Button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      <ContactFormModal
        open={isContactModalOpen}
        onOpenChange={setIsContactModalOpen}
        purpose={modalPurpose}
      />

      <AICheatSheetModal
        open={isAICheatSheetModalOpen}
        onOpenChange={setIsAICheatSheetModalOpen}
        onDownload={handleCheatSheetDownload}
      />

      <CheatSheetSuccessModal
        open={isCheatSheetSuccessModalOpen}
        onOpenChange={setIsCheatSheetSuccessModalOpen}
        message={cheatSheetSuccessMessage}
      />

      <ProgramsModal
        isOpen={isProgramsModalOpen}
        onClose={() => setIsProgramsModalOpen(false)}
      />
    </>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a"> & { title: string }
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
