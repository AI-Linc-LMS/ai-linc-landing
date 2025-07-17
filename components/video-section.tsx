import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';

export const VideoSection = () => {
    const [showContent, setShowContent] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setShowContent(true);
        }, 10000); // 10 seconds

        return () => clearTimeout(timer);
    }, []);

    const contentVariants = {
        hidden: { 
            opacity: 0, 
            y: 20 
        },
        visible: { 
            opacity: 1, 
            y: 0,
            transition: {
                duration: 0.8,
                ease: "easeOut"
            }
        }
    };

    return (
        <section className="relative min-h-screen flex items-center justify-center py-16 overflow-hidden">
            <div className="relative z-10 w-full mx-auto px-4">
                <div className="relative w-full max-w-7xl mx-auto group">
                    {/* Hover glow effect */}
                    <div className="absolute -inset-1 bg-gradient-to-r from-[#0BC5EA]/20 to-[#6B46C1]/20 rounded-2xl opacity-0 group-hover:opacity-50 transition-all duration-500 blur-xl"></div>

                    {/* Main Card Container */}
                    <div className="relative bg-gradient-to-br from-gray-800/40 via-gray-900/60 to-black/80 rounded-2xl p-8 md:p-12 shadow-2xl backdrop-blur-sm border border-gray-700/50 overflow-hidden min-h-[500px]">
                        <AnimatePresence>
                            {!showContent && (
                                <motion.div 
                                    initial={{ opacity: 1 }}
                                    exit={{ opacity: 0, transition: { duration: 0.5 } }}
                                    className="absolute inset-0 flex items-center justify-center"
                                >
                                    <div className="text-center">
                                        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">
                                            Preparing Your Fellowship Experience
                                        </h1>
                                        <p className="text-lg text-gray-300 max-w-2xl mx-auto">
                                            Crafting a personalized learning journey just for you...
                                        </p>
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>

                        <AnimatePresence>
                            {showContent && (
                                <motion.div
                                    initial="hidden"
                                    animate="visible"
                                    variants={contentVariants}
                                    className="absolute inset-0 flex items-end"
                                >
                                    <div className="w-full px-8 md:px-12 pb-8 flex items-end justify-between">
                                        {/* Left Content */}
                                        <div className="flex-1 text-left">
                                            <div className="w-20 h-32 bg-gradient-to-b from-[#0BC5EA] to-[#6B46C1] rounded-lg mb-8 shadow-[0_0_30px_rgba(11,197,234,0.6)] animate-pulse"></div>

                                            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-white leading-tight">
                                            Deploy Your First AI App: Live No-Code AI Workshop
                                            </h2>

                                            <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl leading-relaxed">
                                                Master the Fundamentals and Advanced Concepts of AI Through a Hybrid Learning Experience
                                            </p>

                                            {/* Features */}
                                            <div className="flex flex-wrap gap-6 text-gray-400 mb-8">
                                                <div className="flex items-center gap-2">
                                                    <div className="w-5 h-5 rounded-full border-2 border-gray-400 flex items-center justify-center">
                                                        <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
                                                    </div>
                                                    <span className="text-sm md:text-base">111 Days</span>
                                                </div>
                                                <div className="flex items-center gap-2">
                                                    <div className="w-5 h-5 rounded border border-gray-400"></div>
                                                    <span className="text-sm md:text-base">Remote Mode</span>
                                                </div>
                                                <div className="flex items-center gap-2">
                                                    {/* <div className="w-5 h-5 rounded-full border-2 border-gray-400 flex items-center justify-center">
                                                        <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
                                                    </div> */}
                                                    {/* <span className="text-sm md:text-base">8+ Countries</span> */}
                                                </div>
                                            </div>
                                        </div>

                                        {/* Right Content - Explore Button and Mentors */}
                                        <div className="flex-shrink-0 flex flex-col items-end">
                                            {/* Mentors indicator */}
                                            <div className="flex items-center gap-3 mb-4">
                                                <div className="flex -space-x-2">
                                                    <div className="w-8 h-8 rounded-full bg-gray-600 border-2 border-gray-800"></div>
                                                    <div className="w-8 h-8 rounded-full bg-gray-500 border-2 border-gray-800"></div>
                                                    <div className="w-8 h-8 rounded-full bg-gray-600 border-2 border-gray-800"></div>
                                                    <div className="w-8 h-8 rounded-full bg-[#0BC5EA] border-2 border-gray-800 flex items-center justify-center text-black text-xs font-bold">
                                                        +2
                                                    </div>
                                                </div>
                                                <span className="text-sm text-gray-300">
                                                    Multiple mentors from <br />
                                                    Google, Adobe & more
                                                </span>
                                            </div>

                                            <motion.div
                                                initial={{ opacity: 0, scale: 0.8 }}
                                                animate={{ opacity: 1, scale: 1 }}
                                                transition={{ 
                                                    duration: 0.5, 
                                                    delay: 0.5 
                                                }}
                                            >
                                                <Button
                                                    variant="default"
                                                    className="md:w-[260px] h-full bg-[#0BC5EA] text-black hover:bg-[#0BC5EA]/90 
                                                       transition-all duration-300 px-8 py-4 text-lg font-semibold rounded-xl
                                                       hover:shadow-[0_0_30px_rgba(11,197,234,0.6)]
                                                       transform hover:scale-105"
                                                    onClick={() => window.location.href = '/courses'}
                                                >
                                                    Explore Courses
                                                </Button>
                                            </motion.div>
                                        </div>
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>

                    {/* Background glow effects */}
                    <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-[#0BC5EA]/10 rounded-full blur-3xl opacity-60 group-hover:opacity-80 transition-opacity duration-500"></div>
                    <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-[#6B46C1]/10 rounded-full blur-3xl opacity-40 group-hover:opacity-60 transition-opacity duration-500"></div>
                </div>
            </div>
        </section>
    );
};