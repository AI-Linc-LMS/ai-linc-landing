'use client'
import React, { useState, useEffect } from 'react'

const cards = [
    {
        title: 'AI Learning & Education',
        subtitle: 'Empowering individuals and organizations with cutting-edge AI knowledge, training, and educational resources.',
        features: [
            'Interactive AI Courses',
            'Certification Programs',
            'Workshops & Webinars',
            'AI Literacy for All',
            'Custom Learning Paths',
            'AI in Schools & Universities',
            'Corporate AI Upskilling',
        ],
        action: 'Explore AI Learning',
        logo: (
            <svg width="36" height="36" viewBox="0 0 100 100" className="fill-current text-blue-300 mx-auto md:w-12 md:h-12 w-9 h-9">
                <rect x="12" y="12" width="28" height="28" rx="6" />
                <rect x="60" y="12" width="28" height="28" rx="6" />
                <rect x="12" y="60" width="28" height="28" rx="6" />
                <rect x="60" y="60" width="28" height="28" rx="6" />
            </svg>
        ),
        sideLabel: 'AI Learning',
    },
    {
        title: 'AI Deployment',
        subtitle:
            'Seamlessly deploy, manage, and scale AI models and solutions across diverse environments and industries.',
        features: [
            'Model Deployment Tools',
            'MLOps & Monitoring',
            'Cloud & On-Premise Support',
            'Security & Compliance',
            'Automated Scaling',
        ],
        action: 'Discover AI Deployment',
        logo: (
            <svg width="36" height="36" viewBox="0 0 100 100" className="fill-current text-blue-300 mx-auto md:w-12 md:h-12 w-9 h-9">
                <rect x="12" y="12" width="28" height="28" rx="6" />
                <rect x="60" y="12" width="28" height="28" rx="6" />
                <rect x="12" y="60" width="28" height="28" rx="6" />
                <rect x="60" y="60" width="28" height="28" rx="6" />
            </svg>
        ),
        sideLabel: 'AI Deployment',
    },
    {
        title: 'AI Products and Services',
        subtitle:
            'A comprehensive suite of AI-powered products and services designed to drive innovation and business value.',
        features: [
            'AI Consulting',
            'Custom AI Solutions',
            'Pre-built AI Products',
            'Integration Services',
            'Ongoing Support',
        ],
        action: 'View AI Products',
        logo: (
            <svg width="36" height="36" viewBox="0 0 100 100" className="fill-current text-blue-300 mx-auto md:w-12 md:h-12 w-9 h-9">
                <rect x="12" y="12" width="28" height="28" rx="6" />
                <rect x="60" y="12" width="28" height="28" rx="6" />
                <rect x="12" y="60" width="28" height="28" rx="6" />
                <rect x="60" y="60" width="28" height="28" rx="6" />
            </svg>
        ),
        sideLabel: 'AI Products',
    },
]

const stackLabels = [
    'AI Learning & Education',
    'AI Deployment',
    'AI Products and Services',
    'PaaS',
    'IaaS',
]

const stackSideLabels = [
    'AI Learning',
    'AI Deployment',
    'AI Products',
    'SageMaker Azure',
    'AWS / Microsoft / Google Cloud',
]

const MOBILE_BREAKPOINT = 768

const StackedCards = () => {
    const [activeTab, setActiveTab] = useState(0)
    const [hoveredTab, setHoveredTab] = useState<number | null>(null)
    const [isMobile, setIsMobile] = useState(false)

    // Defensive: Clamp activeTab to valid range
    const safeActiveTab = Number.isInteger(activeTab) && activeTab >= 0 && activeTab < cards.length ? activeTab : 0
    const activeCard = cards[safeActiveTab] ?? {}

    // Detect mobile
    useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth < MOBILE_BREAKPOINT)
        checkMobile()
        window.addEventListener('resize', checkMobile)
        return () => window.removeEventListener('resize', checkMobile)
    }, [])

    // Autoplay for mobile
    useEffect(() => {
        if (!isMobile) return
        const interval = setInterval(() => {
            setActiveTab((prev) => (prev + 1) % cards.length)
        }, 2000)
        return () => clearInterval(interval)
    }, [isMobile])

    // On desktop, hovering a tab or card sets active
    const handleTabHover = (idx: number) => {
        if (!isMobile) setActiveTab(idx)
        setHoveredTab(idx)
    }
    const handleTabLeave = () => setHoveredTab(null)

    // Responsive card height/width/spacing
    const cardHeights = ['h-20', 'md:h-24', 'lg:h-28']
    const cardWidths = ['w-full', 'max-w-xs', 'sm:max-w-sm', 'md:max-w-md', 'lg:max-w-lg']
    const cardSpacing = isMobile ? 20 : 32

    // 3D stack transform logic
    const getCardTransform = (index: number) => {
        if (index === safeActiveTab) {
            return {
                transform: `translateY(${index * cardSpacing - (isMobile ? 12 : 24)}px) translateZ(48px) scale(1.04)`,
                zIndex: 10,
                opacity: 1,
                boxShadow: '0 8px 32px 0 rgba(0,0,0,0.30)',
                filter: 'none',
            }
        }
        // Faded, blurred, and stacked
        return {
            transform: `translateY(${index * cardSpacing}px) scale(0.98)`,
            zIndex: 5 - index,
            opacity: 0.35,
            boxShadow: '0 2px 8px 0 rgba(0,0,0,0.10)',
            filter: 'blur(1.5px) grayscale(0.7)',
        }
    }

    return (
        <div className="min-h-screen flex items-center justify-center px-2 md:px-4 py-8 md:py-12">
            <style>{`
        .stack-perspective {
          perspective: 1200px;
        }
        .stack-card {
          transition: transform 0.6s cubic-bezier(.4,2,.3,1), box-shadow 0.4s, opacity 0.4s, filter 0.4s;
        }
      `}</style>
            <div className="w-full max-w-7xl flex flex-col md:flex-row items-center justify-between gap-8">
                {/* Left: 3D Stack */}
                <div className="w-full md:w-1/2 flex flex-col items-center">
                    {/* Tabs */}
                    <div className="flex justify-center mb-6 md:mb-10 w-full overflow-x-visible">
                        <div className="flex w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg justify-between flex-wrap">
                            {cards.map((card, idx) => (
                                <div
                                    key={card.title}
                                    className={`text-base md:text-lg font-semibold px-3 py-1 md:px-4 md:py-2 transition-all duration-300 cursor-pointer select-none whitespace-nowrap rounded-full mx-1
                    ${safeActiveTab === idx
                                            ? 'bg-blue-700/30 text-white font-bold shadow-sm'
                                            : 'text-gray-400 hover:text-white hover:bg-blue-700/10'}
                  `}
                                    onMouseEnter={() => handleTabHover(idx)}
                                    onMouseLeave={handleTabLeave}
                                >
                                    {card.title}
                                </div>
                            ))}
                        </div>
                    </div>
                    {/* 3D Stack Visualization */}
                    <div className={`relative stack-perspective ${cardHeights.join(' ')} ${cardWidths.join(' ')} mt-2 mx-auto`} style={{ minWidth: 0 }}>
                        {[0, 1, 2, 3, 4].map((i) => (
                            <div
                                key={i}
                                className={`absolute left-0 right-0 mx-auto stack-card rounded-xl border border-blue-200/10 bg-white/10 backdrop-blur-md ${i === safeActiveTab ? 'shadow-2xl' : ''
                                    } ${cardHeights.join(' ')} ${cardWidths.join(' ')}`}
                                style={{
                                    ...getCardTransform(i),
                                }}
                                onMouseEnter={() => handleTabHover(i)}
                                onMouseLeave={handleTabLeave}
                            >
                                <div className="flex h-full items-center px-4 md:px-8 relative">
                                    {/* Logo only for top card */}
                                    {i === safeActiveTab && (
                                        <div className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2">{cards[i]?.logo}</div>
                                    )}
                                    <div className="flex-1 flex flex-col justify-center pl-14 md:pl-20">
                                        <span className={`font-bold transition-all text-base md:text-2xl ${i === safeActiveTab ? 'text-white' : 'text-gray-300'}`}>{stackLabels[i]}</span>
                                        <span className={`transition-all text-xs md:text-base ${i === safeActiveTab ? 'text-blue-200' : 'text-gray-400'}`}>{stackSideLabels[i]}</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                {/* Right: Content */}
                <div className="w-full md:w-1/2 md:pl-10 lg:pl-16 mt-10 md:mt-0">
                    <h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-4 md:mb-6">
                        {activeCard?.title ?? ''}
                    </h1>
                    <p className="text-base sm:text-lg md:text-2xl text-blue-100 mb-6 md:mb-8 leading-relaxed">
                        {activeCard?.subtitle ?? ''}
                    </p>
                    <ul className="space-y-2 md:space-y-3 mb-8 md:mb-10">
                        {(Array.isArray(activeCard?.features) ? activeCard.features : []).map((feature, idx) => (
                            <li key={feature} className="text-blue-100 flex items-center text-sm sm:text-base md:text-lg lg:text-xl">
                                <span className="w-2 h-2 md:w-3 md:h-3 bg-blue-400 rounded-full mr-3 md:mr-4"></span>
                                {feature}
                            </li>
                        ))}
                    </ul>
                    {/* <button className="group flex items-center text-white hover:text-blue-400 transition-all duration-300 text-base md:text-xl font-bold">
                        <span>{activeCard?.action}</span>
                        <svg className="ml-2 md:ml-3 w-5 h-5 md:w-6 md:h-6 group-hover:translate-x-2 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                    </button> */}
                </div>
            </div>
        </div>
    )
}

export default StackedCards
