import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';

// Define an interface for a top scorer
interface TopScorer {
    id: number;
    name: string;
    score: number;
    program: string;
    imageUrl: string;
    testimonial: string;
}

// Sample data - replace with actual data from your backend
const topScorersData: TopScorer[] = [
    {
        id: 1,
        name: 'Emily Chen',
        score: 98,
        program: 'AI Engineering',
        imageUrl: '/top-scrorer/1.png',
        testimonial: 'The program transformed my understanding of AI and opened up incredible career opportunities.'
    },
    {
        id: 2,
        name: 'Michael Rodriguez',
        score: 95,
        program: 'Machine Learning',
        imageUrl: '/top-scrorer/2.png',
        testimonial: 'I never thought I could master complex ML algorithms, but this program made it possible.'
    },
    {
        id: 3,
        name: 'Sarah Kim',
        score: 97,
        program: 'Data Science',
        imageUrl: '/top-scrorer/3.png',
        testimonial: 'The hands-on approach and expert guidance were key to my success.'
    },
    {
        id: 4,
        name: 'David Thompson',
        score: 96,
        program: 'AI Engineering',
        imageUrl: '/top-scrorer/4.png',
        testimonial: 'The program transformed my understanding of AI and opened up incredible career opportunities.'
    },
    {
        id: 5,
        name: 'Jessica Wang',
        score: 94,
        program: 'Machine Learning',
        imageUrl: '/top-scrorer/5.png',
        testimonial: 'I never thought I could master complex ML algorithms, but this program made it possible.'
    },
    {
        id: 6,
        name: 'Alex Johnson',
        score: 99,
        program: 'Data Science',
        imageUrl: '/top-scrorer/6.png',
        testimonial: 'The hands-on approach and expert guidance were key to my success.'
    },
    {
        id: 7,
        name: 'Maria Garcia',
        score: 93,
        program: 'AI Engineering',
        imageUrl: '/top-scrorer/7.png',
        testimonial: 'The program transformed my understanding of AI and opened up incredible career opportunities.'
    },
    {
        id: 8,
        name: 'James Wilson',
        score: 96,
        program: 'Machine Learning',
        imageUrl: '/top-scrorer/8.png',
        testimonial: 'I never thought I could master complex ML algorithms, but this program made it possible.'
    },
    {
        id: 9,
        name: 'Lisa Anderson',
        score: 98,
        program: 'Data Science',
        imageUrl: '/top-scrorer/9.png',
        testimonial: 'The hands-on approach and expert guidance were key to my success.'
    },
    {
        id: 10,
        name: 'Robert Lee',
        score: 95,
        program: 'AI Engineering',
        imageUrl: '/top-scrorer/10.png',
        testimonial: 'The program transformed my understanding of AI and opened up incredible career opportunities.'
    },
    {
        id: 11,
        name: 'Amanda Davis',
        score: 97,
        program: 'Machine Learning',
        imageUrl: '/top-scrorer/11.png',
        testimonial: 'I never thought I could master complex ML algorithms, but this program made it possible.'
    },
    {
        id: 12,
        name: 'Kevin Brown',
        score: 94,
        program: 'Data Science',
        imageUrl: '/top-scrorer/12.png',
        testimonial: 'The hands-on approach and expert guidance were key to my success.'
    },
    {
        id: 13,
        name: 'Rachel Martinez',
        score: 99,
        program: 'AI Engineering',
        imageUrl: '/top-scrorer/13.png',
        testimonial: 'The program transformed my understanding of AI and opened up incredible career opportunities.'
    },
    {
        id: 14,
        name: 'Daniel Taylor',
        score: 96,
        program: 'Machine Learning',
        imageUrl: '/top-scrorer/14.png',
        testimonial: 'I never thought I could master complex ML algorithms, but this program made it possible.'
    },
    {
        id: 15,
        name: 'Nicole White',
        score: 98,
        program: 'Data Science',
        imageUrl: '/top-scrorer/15.png',
        testimonial: 'The hands-on approach and expert guidance were key to my success.'
    },
    {
        id: 16,
        name: 'Christopher Moore',
        score: 95,
        program: 'AI Engineering',
        imageUrl: '/top-scrorer/16.png',
        testimonial: 'The program transformed my understanding of AI and opened up incredible career opportunities.'
    },
    {
        id: 17,
        name: 'Stephanie Clark',
        score: 97,
        program: 'Machine Learning',
        imageUrl: '/top-scrorer/17.png',
        testimonial: 'I never thought I could master complex ML algorithms, but this program made it possible.'
    },
    {
        id: 18,
        name: 'Matthew Lewis',
        score: 94,
        program: 'Data Science',
        imageUrl: '/top-scrorer/18.png',
        testimonial: 'The hands-on approach and expert guidance were key to my success.'
    },
    {
        id: 19,
        name: 'Jennifer Hall',
        score: 99,
        program: 'AI Engineering',
        imageUrl: '/top-scrorer/19.png',
        testimonial: 'The program transformed my understanding of AI and opened up incredible career opportunities.'
    },
    {
        id: 20,
        name: 'Andrew Young',
        score: 96,
        program: 'Machine Learning',
        imageUrl: '/top-scrorer/20.png',
        testimonial: 'I never thought I could master complex ML algorithms, but this program made it possible.'
    }
];

export const TopScorersSection: React.FC = () => {
    const [currentScorer, setCurrentScorer] = useState(0);
    const [direction, setDirection] = useState<'right' | 'left'>('right');
    const [isAutoPlaying, setIsAutoPlaying] = useState(true);
    const intervalRef = useRef<NodeJS.Timeout | null>(null);

    const startAutoPlay = () => {
        // Clear any existing interval
        if (intervalRef.current) {
            clearInterval(intervalRef.current);
        }

        // Start new interval if auto-playing
        if (isAutoPlaying) {
            intervalRef.current = setInterval(() => {
                setCurrentScorer((prev) => (prev + 1) % topScorersData.length);
                setDirection('right');
            }, 3000);
        }
    };

    const navigateScorer = (newIndex: number, navDirection: 'right' | 'left') => {
        setCurrentScorer(newIndex);
        setDirection(navDirection);

        // Restart auto-play timer
        startAutoPlay();
    };

    const nextScorer = () => {
        const newIndex = (currentScorer + 1) % topScorersData.length;
        navigateScorer(newIndex, 'right');
    };

    const prevScorer = () => {
        const newIndex = (currentScorer - 1 + topScorersData.length) % topScorersData.length;
        navigateScorer(newIndex, 'left');
    };

    const handleImageClick = (e: React.MouseEvent<HTMLDivElement>) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const clickX = e.clientX - rect.left;
        const halfWidth = rect.width / 2;

        if (clickX < halfWidth) {
            // Left half clicked
            prevScorer();
        } else {
            // Right half clicked
            nextScorer();
        }
    };

    // Start auto-play on component mount
    useEffect(() => {
        startAutoPlay();

        // Cleanup interval on component unmount
        return () => {
            if (intervalRef.current) {
                clearInterval(intervalRef.current);
            }
        };
    }, [isAutoPlaying]);

    const scorer = topScorersData[currentScorer];

    return (
        <section
            className="py-8 md:py-16 px-4 text-white"
            onMouseEnter={() => setIsAutoPlaying(false)}
            onMouseLeave={() => setIsAutoPlaying(true)}
        >
            <div className="container mx-auto max-w-6xl">
                <h2 className="text-2xl md:text-4xl font-bold text-center mb-8 md:mb-12">Our students in placement pool</h2>

                <div className="flex items-center justify-center space-x-2 md:space-x-4">
                    <button
                        onClick={prevScorer}
                        className="text-xl md:text-3xl hover:text-blue-500 transition-colors p-2 md:p-0"
                    >
                        ←
                    </button>

                    <AnimatePresence mode="wait">
                        <motion.div
                            key={scorer.id}
                            initial={{ opacity: 0, x: direction === 'right' ? 100 : -100 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: direction === 'right' ? -100 : 100 }}
                            transition={{ duration: 0.5 }}
                            className="w-full max-w-xs sm:max-w-sm md:max-w-2xl"
                        >
                            <Card className="border-none shadow-2xl">
                                <CardContent className="flex flex-col items-center p-4 md:p-8">
                                    <div
                                        className="w-full max-w-[680px] h-[280px] sm:max-w-[320px] sm:h-[320px] md:max-w-[600px] md:h-[400px] lg:w-[600px] lg:h-[600px] overflow-hidden border-4 rounded-lg cursor-pointer relative"
                                        onClick={handleImageClick}
                                    >
                                        <img
                                            src={scorer.imageUrl}
                                            alt={scorer.name}
                                            className="w-full h-full object-cover"
                                        />
                                        {/* Optional: Add visual indicators for clickable areas */}
                                        <div className="absolute inset-0 flex">
                                            <div
                                                className="w-1/2 h-full"
                                                title="Previous"
                                                style={{ cursor: 'w-resize' }}
                                            ></div>
                                            <div
                                                className="w-1/2 h-full"
                                                title="Next"
                                                style={{ cursor: 'e-resize' }}
                                            ></div>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        </motion.div>
                    </AnimatePresence>

                    <button
                        onClick={nextScorer}
                        className="text-xl md:text-3xl hover:text-blue-500 transition-colors p-2 md:p-0"
                    >
                        →
                    </button>
                </div>
            </div>
        </section>
    );
}; 