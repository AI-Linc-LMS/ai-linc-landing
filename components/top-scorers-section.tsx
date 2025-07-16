import React, { useState } from 'react';
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

    const nextScorer = () => {
        setCurrentScorer((prev) => (prev + 1) % topScorersData.length);
    };

    const prevScorer = () => {
        setCurrentScorer((prev) => (prev - 1 + topScorersData.length) % topScorersData.length);
    };

    const scorer = topScorersData[currentScorer];

    return (
        <section className="py-16 px-4  text-white">
            <div className="container mx-auto max-w-6xl">
                <h2 className="text-4xl font-bold text-center mb-12">Top Performers</h2>

                <div className="flex items-center justify-center space-x-4">
                    <button
                        onClick={prevScorer}
                        className="text-3xl hover:text-blue-500 transition-colors"
                    >
                        ←
                    </button>

                    <AnimatePresence mode="wait">
                        <motion.div
                            key={scorer.id}
                            initial={{ opacity: 0, x: 100 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -100 }}
                            transition={{ duration: 0.5 }}
                            className="max-w-2xl"
                        >
                            <Card className=" border-none shadow-2xl">
                                <CardContent className="flex flex-col md:flex-row items-center p-8 space-x-8">
                                    <div className="w-[600px] h-[600px]  overflow-hidden border-4 ">
                                        <img
                                            src={scorer.imageUrl}
                                            alt={scorer.name}
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                    {/* <div className="flex-1">
                    <h3 className="text-2xl font-semibold mb-2">{scorer.name}</h3>
                    <p className="text-lg text-blue-300 mb-4">{scorer.program} | Score: {scorer.score}/100</p>
                    <blockquote className="italic text-gray-300">
                      "{scorer.testimonial}"
                    </blockquote>
                  </div> */}
                                </CardContent>
                            </Card>
                        </motion.div>
                    </AnimatePresence>

                    <button
                        onClick={nextScorer}
                        className="text-3xl hover:text-blue-500 transition-colors"
                    >
                        →
                    </button>
                </div>
            </div>
        </section>
    );
}; 