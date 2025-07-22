import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Play, Pause, Volume2, VolumeX } from 'lucide-react';

export const VideoSection = () => {
    const [showContent, setShowContent] = useState(true);
    const [isPlaying, setIsPlaying] = useState(false);
    const [showOverlay, setShowOverlay] = useState(true);
    const [videoLoaded, setVideoLoaded] = useState(false);
    const [videoError, setVideoError] = useState(false);
    const [shouldLoadVideo, setShouldLoadVideo] = useState(false);
    const [showTimedButton, setShowTimedButton] = useState(false);
    const [isMuted, setIsMuted] = useState(false);
    const videoRef = useRef<HTMLVideoElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);
    const timerRef = useRef<NodeJS.Timeout | null>(null);

    // Lazy loading with Intersection Observer
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting && !shouldLoadVideo) {
                        setShouldLoadVideo(true);
                        observer.disconnect(); // Stop observing once we start loading
                    }
                });
            },
            {
                rootMargin: '100px', // Start loading when video is 100px away from viewport
                threshold: 0.1
            }
        );

        if (containerRef.current) {
            observer.observe(containerRef.current);
        }

        return () => observer.disconnect();
    }, [shouldLoadVideo]);

    // Timer for showing the button after 10 seconds
    useEffect(() => {
        if (isPlaying && !showTimedButton) {
            // Start timer when video starts playing, but only if button hasn't been shown yet
            timerRef.current = setTimeout(() => {
                setShowTimedButton(true);
            }, 10000); // 10 seconds
        } else if (!isPlaying && timerRef.current) {
            // Only clear timer if video is paused AND button hasn't appeared yet
            if (!showTimedButton) {
                clearTimeout(timerRef.current);
                timerRef.current = null;
            }
        }

        // Cleanup timer on unmount
        return () => {
            if (timerRef.current) {
                clearTimeout(timerRef.current);
            }
        };
    }, [isPlaying, showTimedButton]);

    const handlePlayPause = () => {
        // If video hasn't started loading yet, trigger loading
        if (!shouldLoadVideo) {
            setShouldLoadVideo(true);
        }

        if (videoRef.current) {
            if (isPlaying) {
                videoRef.current.pause();
                setIsPlaying(false);
                setShowOverlay(true);
            } else {
                videoRef.current.play();
                setIsPlaying(true);
                setShowOverlay(false);
            }
        }
    };

    const handleVideoEnd = () => {
        setIsPlaying(false);
        setShowOverlay(true);
    };

    const handleVideoLoaded = () => {
        setVideoLoaded(true);
        setVideoError(false);
        // Seek to first frame to show preview
        if (videoRef.current) {
            videoRef.current.currentTime = 0.5;
        }
    };

    const handleVideoError = () => {
        setVideoError(true);
        setVideoLoaded(false);
    };

    const handleMuteToggle = () => {
        if (videoRef.current) {
            const newMutedState = !isMuted;
            setIsMuted(newMutedState);
            videoRef.current.muted = newMutedState;
        }
    };

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
        <section className="relative min-h-screen flex items-center justify-center py-8 sm:py-12 lg:py-16 overflow-hidden">
            <div className="relative z-10 w-full mx-auto px-4 sm:px-6 lg:px-8">
                <div className="relative w-full max-w-7xl mx-auto group">
                    {/* Hover glow effect */}
                    <div className="absolute -inset-1 bg-gradient-to-r from-[#0BC5EA]/20 to-[#6B46C1]/20 rounded-xl sm:rounded-2xl opacity-0 group-hover:opacity-50 transition-all duration-500 blur-xl -z-10"></div>

                    {/* Main Card Container */}
                    <div className="relative bg-gradient-to-br from-gray-800/40 via-gray-900/60 to-black/80 rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 lg:p-12 shadow-2xl backdrop-blur-sm border border-gray-700/50 overflow-hidden min-h-[400px] sm:min-h-[450px] lg:min-h-[500px] z-20">
                        <motion.div
                            initial="hidden"
                            animate="visible"
                            variants={contentVariants}
                            className="w-full h-full flex items-center justify-center"
                        >
                            <div className="w-full max-w-6xl mx-auto">
                                {/* Video Container */}
                                <div ref={containerRef} className="relative w-full aspect-video rounded-lg sm:rounded-xl overflow-hidden shadow-2xl group/video">
                                    {/* Fallback background when video doesn't load or hasn't started loading */}
                                    {(!shouldLoadVideo || !videoLoaded || videoError) && (
                                        <div className="absolute inset-0 bg-gradient-to-br from-gray-700 to-gray-900 flex items-center justify-center">
                                            <div className="text-center p-8">
                                                <div className="w-20 h-20 mx-auto mb-4 bg-gradient-to-br from-[#0BC5EA] to-[#6B46C1] rounded-lg flex items-center justify-center">
                                                    <Play className="w-8 h-8 text-white" fill="currentColor" />
                                                </div>
                                                <h3 className="text-white text-lg font-semibold mb-2">AI Workshop Preview</h3>
                                                <p className="text-gray-300 text-sm">
                                                    {!shouldLoadVideo
                                                        ? "Scroll down or click to load video preview"
                                                        : videoError
                                                            ? "Click to retry loading video"
                                                            : "Loading video preview..."
                                                    }
                                                </p>
                                                {shouldLoadVideo && !videoError && (
                                                    <div className="mt-4">
                                                        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-[#0BC5EA] mx-auto"></div>
                                                    </div>
                                                )}
                                            </div>
                                        </div>
                                    )}

                                    {/* Only render video element when lazy loading is triggered */}
                                    {shouldLoadVideo && (
                                        <video
                                            ref={videoRef}
                                            className={`w-full h-full object-cover transition-opacity duration-500 ${videoLoaded && !videoError ? 'opacity-100' : 'opacity-0'}`}
                                            preload="metadata"
                                            muted={isMuted}
                                            playsInline
                                            onEnded={handleVideoEnd}
                                            onLoadedData={handleVideoLoaded}
                                            onError={handleVideoError}
                                            onCanPlay={() => setVideoLoaded(true)}
                                        >
                                            <source src="/videos/ailinc10_2.mp4" type="video/mp4" />
                                            Your browser does not support the video tag.
                                        </video>
                                    )}

                                    {/* Video overlay */}
                                    <AnimatePresence>
                                        {showOverlay && (
                                            <motion.div
                                                initial={{ opacity: 0 }}
                                                animate={{ opacity: 1 }}
                                                exit={{ opacity: 0 }}
                                                transition={{ duration: 0.3 }}
                                                className="absolute inset-0 bg-black/20 flex items-center justify-center group-hover/video:bg-black/10 transition-colors duration-300 z-30"
                                            >
                                                {/* Play Button */}
                                                <motion.div
                                                    initial={{ scale: 0.8, opacity: 0 }}
                                                    animate={{ scale: 1, opacity: 1 }}
                                                    transition={{ delay: 0.2, duration: 0.3 }}
                                                    className="relative z-40 cursor-pointer"
                                                    onClick={(e) => {
                                                        e.stopPropagation();
                                                        handlePlayPause();
                                                    }}
                                                >
                                                    {/* Glow effect */}
                                                    <div className="absolute inset-0 bg-[#0BC5EA]/40 rounded-full blur-xl scale-150 group-hover/video:bg-[#0BC5EA]/60 transition-colors duration-300 pointer-events-none"></div>

                                                    {/* Play button */}
                                                    <div className="relative w-20 h-20 sm:w-24 sm:h-24 bg-[#0BC5EA] rounded-full flex items-center justify-center shadow-2xl group-hover/video:bg-[#0BC5EA]/95 hover:scale-110 transition-all duration-300 backdrop-blur-sm">
                                                        <Play
                                                            className="w-8 h-8 sm:w-10 sm:h-10 text-black ml-1 pointer-events-none"
                                                            fill="currentColor"
                                                        />
                                                    </div>
                                                </motion.div>

                                                {/* Mentors indicator - moved to bottom left */}
                                                {/* <div className="absolute bottom-6 left-6 pointer-events-none">
<div className="flex items-center gap-3">
<div className="flex -space-x-2">
<div className="w-8 h-8 rounded-full bg-gray-600 border-2 border-gray-800"></div>
<div className="w-8 h-8 rounded-full bg-gray-500 border-2 border-gray-800"></div>
<div className="w-8 h-8 rounded-full bg-gray-600 border-2 border-gray-800"></div>
<div className="w-8 h-8 rounded-full bg-[#0BC5EA] border-2 border-gray-800 flex items-center justify-center text-black text-xs font-bold">
+2
</div>
</div>
<span className="text-sm text-gray-300">
Multiple mentors from Google, Adobe & more
</span>
</div>
</div> */}

                                                {/* Clickable area for video background */}
                                                <div
                                                    className="absolute inset-0 cursor-pointer z-10"
                                                    onClick={(e) => {
                                                        e.stopPropagation();
                                                        handlePlayPause();
                                                    }}
                                                ></div>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>

                                    {/* Timed "Explore Courses" button overlay - appears after 10 seconds during video playback */}
                                    <AnimatePresence>
                                        {showTimedButton && (
                                            <motion.div
                                                initial={{ opacity: 0, scale: 0.8, y: 20 }}
                                                animate={{ opacity: 1, scale: 1, y: 0 }}
                                                exit={{ opacity: 0, scale: 0.8, y: 20 }}
                                                transition={{ duration: 0.5, ease: "easeOut" }}
                                                className="absolute bottom-6 right-6 z-40"
                                            >
                                                <Button
                                                    variant="default"
                                                    className="bg-[#0BC5EA] text-black hover:bg-[#0BC5EA]/90
transition-all duration-300 px-6 py-3 text-base font-semibold rounded-xl
hover:shadow-[0_0_30px_rgba(11,197,234,0.6)]
transform hover:scale-105 shadow-2xl backdrop-blur-sm"
                                                    onClick={() => window.location.href = '/courses'}
                                                >
                                                    Explore Courses
                                                </Button>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>

                                    {/* Mute/Unmute button - appears when video is playing */}
                                    <AnimatePresence>
                                        {isPlaying && (
                                            <motion.div
                                                initial={{ opacity: 0, scale: 0.8 }}
                                                animate={{ opacity: 1, scale: 1 }}
                                                exit={{ opacity: 0, scale: 0.8 }}
                                                transition={{ duration: 0.3 }}
                                                className="absolute top-6 right-6 z-40"
                                            >
                                                <button
                                                    onClick={handleMuteToggle}
                                                    className="w-12 h-12 bg-black/50 hover:bg-black/70 rounded-full flex items-center justify-center backdrop-blur-sm transition-all duration-300 hover:scale-110"
                                                >
                                                    {isMuted ? (
                                                        <VolumeX className="w-5 h-5 text-white" />
                                                    ) : (
                                                        <Volume2 className="w-5 h-5 text-white" />
                                                    )}
                                                </button>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>

                                    {/* Pause overlay for when video is playing */}
                                    {isPlaying && (
                                        <div
                                            className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300 bg-black/20 cursor-pointer z-30"
                                            onClick={(e) => {
                                                e.stopPropagation();
                                                handlePlayPause();
                                            }}
                                        >
                                            <div className="w-16 h-16 bg-black/50 rounded-full flex items-center justify-center backdrop-blur-sm">
                                                <Pause className="w-6 h-6 text-white pointer-events-none" fill="currentColor" />
                                            </div>
                                        </div>
                                    )}
                                </div>

                                {/* Video Title and Description */}
                                <div className="mt-6 sm:mt-8 text-center">
                                    {/* <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-4 text-white leading-tight">
Deploy Your First AI App: Live No-Code AI Workshop
</h2> */}

                                    {/* <p className="text-sm sm:text-base md:text-lg text-gray-300 mb-6 sm:mb-8 max-w-3xl mx-auto leading-relaxed">
Master the Fundamentals and Advanced Concepts of AI Through a Hybrid Learning Experience
</p> */}

                                    {/* Features */}
                                    {/* <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 text-gray-400 mb-6 sm:mb-8">
<div className="flex items-center gap-2">
<div className="w-4 h-4 sm:w-5 sm:h-5 rounded-full border-2 border-gray-400 flex items-center justify-center">
<div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-gray-400 rounded-full"></div>
</div>
<span className="text-xs sm:text-sm md:text-base">111 Days</span>
</div>
<div className="flex items-center gap-2">
<div className="w-4 h-4 sm:w-5 sm:h-5 rounded border border-gray-400"></div>
<span className="text-xs sm:text-sm md:text-base">Remote Mode</span>
</div>
</div> */}

                                    {/* Mentors and CTA */}
                                    {/* <div className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-8"> */}
                                    {/* Mentors indicator */}
                                    {/* <div className="flex items-center gap-3">
<div className="flex -space-x-2">
<div className="w-8 h-8 rounded-full bg-gray-600 border-2 border-gray-800"></div>
<div className="w-8 h-8 rounded-full bg-gray-500 border-2 border-gray-800"></div>
<div className="w-8 h-8 rounded-full bg-gray-600 border-2 border-gray-800"></div>
<div className="w-8 h-8 rounded-full bg-[#0BC5EA] border-2 border-gray-800 flex items-center justify-center text-black text-xs font-bold">
+2
</div>
</div>
<span className="text-sm text-gray-300">
Multiple mentors from Google, Adobe & more
</span>
</div> */}

                                    {/* CTA Button */}
                                    {/* <motion.div
initial={{ opacity: 0, scale: 0.8 }}
animate={{ opacity: 1, scale: 1 }}
transition={{
duration: 0.5,
delay: 0.5
}}
>
<Button
variant="default"
className="bg-[#0BC5EA] text-black hover:bg-[#0BC5EA]/90
transition-all duration-300 px-8 py-4 text-lg font-semibold rounded-xl
hover:shadow-[0_0_30px_rgba(11,197,234,0.6)]
transform hover:scale-105"
onClick={() => window.location.href = '/courses'}
>
Explore Courses
</Button>
</motion.div> */}
                                    {/* </div> */}
                                </div>
                            </div>
                        </motion.div>
                    </div>

                    {/* Background glow effects */}
                    <div className="absolute top-1/3 left-1/4 w-48 h-48 sm:w-72 sm:h-72 lg:w-96 lg:h-96 bg-[#0BC5EA]/10 rounded-full blur-3xl opacity-60 group-hover:opacity-80 transition-opacity duration-500 -z-10"></div>
                    <div className="absolute bottom-1/3 right-1/4 w-48 h-48 sm:w-72 sm:h-72 lg:w-96 lg:h-96 bg-[#6B46C1]/10 rounded-full blur-3xl opacity-40 group-hover:opacity-60 transition-opacity duration-500 -z-10"></div>
                </div>
            </div>
        </section>
    );
};