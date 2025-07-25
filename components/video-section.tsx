import React, { useState, useEffect, useRef, useCallback } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent } from '@/components/ui/dialog';
import { Play, Pause, Volume2, VolumeX, X } from 'lucide-react';

export const VideoSection = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isPlaying, setIsPlaying] = useState(false);
    const [videoLoaded, setVideoLoaded] = useState(false);
    const [videoError, setVideoError] = useState(false);
    const [isMuted, setIsMuted] = useState(false);
    const [currentTime, setCurrentTime] = useState(0);
    const [duration, setDuration] = useState(0);
    const videoRef = useRef<HTMLVideoElement>(null);

    // --- Fix: Use requestAnimationFrame for smooth progress/timer updates ---
    useEffect(() => {
        let rafId: number;
        const update = () => {
            const video = videoRef.current;
            if (video && !video.paused && !video.ended) {
                setCurrentTime(video.currentTime);
                rafId = requestAnimationFrame(update);
            }
        };
        if (isPlaying) {
            rafId = requestAnimationFrame(update);
        }
        return () => {
            if (rafId) cancelAnimationFrame(rafId);
        };
    }, [isPlaying]);

    // --- Fix: Always sync currentTime on timeupdate (for seeking, etc) ---
    useEffect(() => {
        const video = videoRef.current;
        if (!video) return;

        const handleTimeUpdate = () => setCurrentTime(video.currentTime);
        const handleDurationChange = () => {
            if (video.duration && !isNaN(video.duration) && isFinite(video.duration)) {
                setDuration(video.duration);
            }
        };
        const handleLoadedMetadata = () => {
            setVideoLoaded(true);
            setVideoError(false);
            handleDurationChange();
        };
        const handleCanPlay = () => {
            setVideoLoaded(true);
            handleDurationChange();
        };
        const handleError = () => {
            setVideoError(true);
            setVideoLoaded(false);
        };

        video.addEventListener('timeupdate', handleTimeUpdate);
        video.addEventListener('loadedmetadata', handleLoadedMetadata);
        video.addEventListener('canplay', handleCanPlay);
        video.addEventListener('durationchange', handleDurationChange);
        video.addEventListener('error', handleError);

        // Initial sync
        if (video.readyState >= 1) {
            handleDurationChange();
            setCurrentTime(video.currentTime);
        }

        return () => {
            video.removeEventListener('timeupdate', handleTimeUpdate);
            video.removeEventListener('loadedmetadata', handleLoadedMetadata);
            video.removeEventListener('canplay', handleCanPlay);
            video.removeEventListener('durationchange', handleDurationChange);
            video.removeEventListener('error', handleError);
        };
    }, [isModalOpen]);

    // --- Fix: Reset time and play from start on open ---
    const handleWatchVideoClick = () => {
        setIsModalOpen(true);
        setCurrentTime(0);
        setDuration(0);
        setVideoError(false);

        setTimeout(() => {
            if (videoRef.current) {
                videoRef.current.currentTime = 0;
                videoRef.current.load();
                const playWhenReady = () => {
                    if (videoRef.current && videoRef.current.readyState >= 2) {
                        videoRef.current.play().then(() => {
                            setIsPlaying(true);
                        }).catch((error) => {
                            setIsPlaying(false);
                            // Don't log error on user gesture
                        });
                    } else {
                        setTimeout(playWhenReady, 100);
                    }
                };
                playWhenReady();
            }
        }, 300);
    };

    const handlePlayPause = () => {
        if (videoRef.current) {
            if (isPlaying) {
                videoRef.current.pause();
                setIsPlaying(false);
            } else {
                videoRef.current.play().then(() => {
                    setIsPlaying(true);
                }).catch(() => {
                    setIsPlaying(false);
                });
            }
        }
    };

    const handleVideoEnd = () => {
        setIsPlaying(false);
        setCurrentTime(duration);
    };

    const handleVideoLoaded = () => {
        setVideoLoaded(true);
        setVideoError(false);
        // Force duration update
        if (videoRef.current && videoRef.current.duration) {
            setDuration(videoRef.current.duration);
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

    const handleModalClose = () => {
        // Pause video when modal closes
        if (videoRef.current) {
            videoRef.current.pause();
            setIsPlaying(false);
        }
        setIsModalOpen(false);
        // No need to reset showTimedButton
    };

    const formatTime = (time: number) => {
        if (!time || isNaN(time) || !isFinite(time)) return '0:00';
        const minutes = Math.floor(time / 60);
        const seconds = Math.floor(time % 60);
        return `${minutes}:${seconds.toString().padStart(2, '0')}`;
    };

    const handleProgressClick = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!videoRef.current || !duration || duration === 0) {
            return;
        }

        const rect = e.currentTarget.getBoundingClientRect();
        const clickX = e.clientX - rect.left;
        const newTime = (clickX / rect.width) * duration;

        videoRef.current.currentTime = newTime;
        setCurrentTime(newTime);
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
        <>
            <section className="relative py-16 sm:py-20 lg:py-24 overflow-hidden">
                {/* Background Effects */}
                <div className="absolute inset-0">
                    <div className="absolute top-1/4 left-1/4 w-64 h-64 sm:w-96 sm:h-96 bg-[#0BC5EA]/10 rounded-full blur-3xl opacity-30"></div>
                    <div className="absolute bottom-1/4 right-1/4 w-64 h-64 sm:w-96 sm:h-96 bg-[#6B46C1]/10 rounded-full blur-3xl opacity-20"></div>

                    {/* Animated flowing lines similar to the image */}
                    <div className="absolute inset-0 overflow-hidden">
                        {/* <svg className="absolute top-0 right-0 w-full h-full" viewBox="0 0 1200 800" fill="none">
                            <defs>
                                <linearGradient id="flowGradient1" x1="0%" y1="0%" x2="100%" y2="100%">
                                    <stop offset="0%" stopColor="#0BC5EA" stopOpacity="0.3" />
                                    <stop offset="50%" stopColor="#6B46C1" stopOpacity="0.2" />
                                    <stop offset="100%" stopColor="#F59E0B" stopOpacity="0.1" />
                                </linearGradient>
                            </defs>
                            <path
                                d="M800,100 Q1000,200 1200,150 Q1000,300 800,250 Q600,400 400,350 Q200,500 0,450"
                                stroke="url(#flowGradient1)"
                                strokeWidth="2"
                                fill="none"
                                className="animate-pulse"
                            />
                            <path
                                d="M1000,200 Q800,300 600,250 Q400,400 200,350 Q100,500 0,480"
                                stroke="url(#flowGradient1)"
                                strokeWidth="1.5"
                                fill="none"
                                className="animate-pulse"
                                style={{ animationDelay: '1s' }}
                            />
                        </svg> */}
                    </div>
                </div>

                <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial="hidden"
                        animate="visible"
                        variants={contentVariants}
                        className="max-w-4xl"
                    >
                        {/* Small heading */}
                        <motion.p
                            className="text-[#0BC5EA] text-sm sm:text-base font-medium  uppercase mb-6"
                            variants={contentVariants}
                        >
                            TRANSFORMING CAREERS WITH AGENTIC AI
                        </motion.p>

                        {/* Main heading with blue accent bar */}
                        <motion.div
                            className="flex items-start mb-8"
                            variants={contentVariants}
                        >
                            <div className="w-1 bg-[#0BC5EA] mr-6 flex-shrink-0" style={{ height: '200px' }}></div>
                            <div>
                                <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-light bg-gradient-to-r from-white via-[#0BC5EA] to-[#6B46C1] bg-clip-text text-transparent">
                                    Build powerful software and websites without coding.
                                </h1>
                                <h2 className="mt-4 text-lg sm:text-xl lg:text-2xl font-light bg-gradient-to-r from-white via-[#0BC5EA] to-[#6B46C1] bg-clip-text text-transparent">
                                    AI LINC teaches you to harness AI tools for no-code development, transforming ideas into reality.
                                </h2>
                            </div>

                        </motion.div>

                        {/* Watch video button and Learn more */}
                        <motion.div
                            className="flex flex-col sm:flex-row items-start sm:items-center gap-6 sm:gap-8"
                            variants={contentVariants}
                        >
                            <button
                                onClick={handleWatchVideoClick}
                                className="flex items-center gap-4 group cursor-pointer"
                            >
                                <div className="w-12 h-12 sm:w-14 sm:h-14 bg-white rounded-full flex items-center justify-center group-hover:bg-gray-100 transition-colors duration-300">
                                    <Play className="w-5 h-5 sm:w-6 sm:h-6 text-black ml-0.5" fill="currentColor" />
                                </div>
                                <span className="text-white text-base sm:text-lg font-medium group-hover:text-[#0BC5EA] transition-colors duration-300">
                                    Watch the video
                                </span>
                            </button>

                            <button className="text-white text-base sm:text-lg font-medium border-b border-white/30 hover:border-[#0BC5EA] hover:text-[#0BC5EA] transition-colors duration-300" onClick={() => window.location.href = '/courses'}>
                                Learn more
                            </button>
                        </motion.div>
                    </motion.div>
                </div>
            </section>

            {/* Full Screen Video Modal */}
            <Dialog open={isModalOpen} onOpenChange={handleModalClose}>
                <DialogContent className="max-w-[100vw] max-h-[100vh] w-full h-full p-0 bg-black border-none rounded-none overflow-hidden">
                    <div className="relative w-full h-full flex items-center justify-center">
                        {/* Close button */}
                        <button
                            onClick={handleModalClose}
                            className="absolute top-4 right-4 z-50 w-12 h-12 bg-black/50 hover:bg-black/70 rounded-full flex items-center justify-center backdrop-blur-sm transition-all duration-300 hover:scale-110"
                        >
                            <X className="w-6 h-6 text-white" />
                        </button>

                        {/* Video container */}
                        <div className="relative w-full h-full max-w-7xl max-h-[90vh] mx-auto">
                            <video
                                ref={videoRef}
                                className="w-full h-full object-contain"
                                preload="metadata"
                                muted={isMuted}
                                playsInline
                                onEnded={handleVideoEnd}
                                onLoadedData={handleVideoLoaded}
                                onError={handleVideoError}
                                onCanPlay={() => {
                                    setVideoLoaded(true);
                                    if (videoRef.current && videoRef.current.duration) {
                                        setDuration(videoRef.current.duration);
                                    }
                                }}
                                onLoadedMetadata={() => {
                                    if (videoRef.current && videoRef.current.duration) {
                                        setDuration(videoRef.current.duration);
                                    }
                                }}
                            >
                                <source src="/videos/ailinc10_2.mp4" type="video/mp4" />
                                Your browser does not support the video tag.
                            </video>

                            {/* Video Controls Overlay */}
                            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-4 sm:p-6">
                                {/* Progress Bar */}
                                <div
                                    className="w-full h-2 bg-white/20 rounded-full mb-4 cursor-pointer"
                                    onClick={handleProgressClick}
                                >
                                    <div
                                        className="h-full bg-[#0BC5EA] rounded-full transition-all duration-100 ease-linear"
                                        style={{
                                            width: `${duration > 0 ? (currentTime / duration) * 100 : 0}%`
                                        }}
                                    />
                                </div>

                                {/* Control buttons and time */}
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center space-x-4">
                                        {/* Play/Pause button */}
                                        <button
                                            onClick={handlePlayPause}
                                            className="w-12 h-12 bg-[#0BC5EA] hover:bg-[#0BC5EA]/90 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
                                        >
                                            {isPlaying ? (
                                                <Pause className="w-6 h-6 text-black" fill="currentColor" />
                                            ) : (
                                                <Play className="w-6 h-6 text-black ml-0.5" fill="currentColor" />
                                            )}
                                        </button>

                                        {/* Mute button */}
                                        <button
                                            onClick={handleMuteToggle}
                                            className="w-10 h-10 bg-black/50 hover:bg-black/70 rounded-full flex items-center justify-center backdrop-blur-sm transition-all duration-300 hover:scale-110"
                                        >
                                            {isMuted ? (
                                                <VolumeX className="w-5 h-5 text-white" />
                                            ) : (
                                                <Volume2 className="w-5 h-5 text-white" />
                                            )}
                                        </button>

                                        {/* Time display */}
                                        <div className="text-white text-sm font-mono">
                                            {formatTime(currentTime)} / {formatTime(duration)}
                                        </div>

                                    </div>

                                    {/* "Explore Courses" button always visible */}
                                    <motion.div
                                        initial={{ opacity: 0, scale: 0.8, x: 20 }}
                                        animate={{ opacity: 1, scale: 1, x: 0 }}
                                        exit={{ opacity: 0, scale: 0.8, x: 20 }}
                                        transition={{ duration: 0.5, ease: "easeOut" }}
                                    >
                                        <Button
                                            variant="default"
                                            className="bg-[#0BC5EA] text-black hover:bg-[#0BC5EA]/90
                                            transition-all duration-300 px-4 py-2 sm:px-6 sm:py-3 text-sm sm:text-base font-semibold rounded-lg
                                            hover:shadow-[0_0_20px_rgba(11,197,234,0.4)] sm:hover:shadow-[0_0_30px_rgba(11,197,234,0.6)]
                                            transform hover:scale-105 shadow-lg backdrop-blur-sm"
                                            onClick={() => window.location.href = '/courses'}
                                        >
                                            Explore Courses
                                        </Button>
                                    </motion.div>
                                </div>
                            </div>
                        </div>
                    </div>
                </DialogContent>
            </Dialog>
        </>
    );
};