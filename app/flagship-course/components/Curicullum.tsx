"use client"

import { Button } from "@/components/ui/button"
import { Download, Users, TrendingUp, Award, Clock, Star, CheckCircle, ArrowRight, Sparkles } from "lucide-react"
import { useState } from "react"

export function CurriculumSection() {
    const [hoveredModule, setHoveredModule] = useState<number | null>(null)
    const [hoveredStat, setHoveredStat] = useState<number | null>(null)
    const [isDownloading, setIsDownloading] = useState(false)

    const handleDownloadBrochure = async () => {
        try {
            setIsDownloading(true)
            
            // First check if file exists
            const response = await fetch('/Brochure/ai-linc-curriculum-brochure.pdf', { method: 'HEAD' })
            
            if (!response.ok) {
                // If PDF doesn't exist, create a temporary fallback or show message
                alert("Brochure is being prepared. Please contact us directly for curriculum details.")
                return
            }

            // Create a link element and trigger download
            const link = document.createElement('a')
            link.href = '/brochure/ai-linc-curriculum-brochure.pdf'
            link.download = 'AI-LINC-Curriculum-Brochure.pdf'
            
            // Append to body, click, and remove
            document.body.appendChild(link)
            link.click()
            document.body.removeChild(link)
            
            console.log("Brochure download initiated...")
        } catch (error) {
            console.error("Download failed:", error)
            // Fallback: redirect to contact or show form
            alert("Download temporarily unavailable. Please contact us at info@ai-linc.com for the brochure.")
        } finally {
            setIsDownloading(false)
        }
    }

    const stats = [
        { value: "50,000+", label: "Learners", color: "blue" },
        { value: "Top 1%", label: "Global Mentors", color: "purple" },
        { value: "55%", label: "Average Salary Hike", color: "green" },
        { value: "6 Months", label: "Intensive Program", color: "yellow" }
    ]

    const modules = [
        { title: "Foundations & Productivity", icon: Clock, desc: "AI concepts & productivity tools" },
        { title: "Data & Business Analysis", icon: TrendingUp, desc: "Excel, Power BI, SQL with AI" },
        { title: "Software Dev & Testing", icon: Award, desc: "AI-powered development & QA" },
        { title: "Agentic AI & Automation", icon: Users, desc: "LangChain, RAG bots, workflows" },
        { title: "Career Readiness & Leadership", icon: Award, desc: "Resume, interviews, negotiation" },
        { title: "Business Applications", icon: TrendingUp, desc: "Product management, legal tech" },
        { title: "Core Data Science & Gen AI", icon: Clock, desc: "ML, deep learning, NLP" }
    ]

    const features = [
        { number: "100+", title: "AI Tools", subtitle: "For 100x Efficiency", color: "blue", icon: Sparkles },
        { number: "36", title: "Projects", subtitle: "Real-world Portfolio", color: "purple", icon: Award },
        { number: "100%", title: "Money-back", subtitle: "Guarantee", color: "green", icon: CheckCircle }
    ]

    return (
        <section className="relative py-24 px-4 max-w-7xl mx-auto overflow-hidden">
            {/* Bottom fade overlay */}
            <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-gray-900 via-gray-900/70 to-transparent pointer-events-none z-20"></div>

            {/* Animated background elements */}
            <div className="absolute inset-0 opacity-10">
                <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
                <div className="absolute top-40 right-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-300"></div>
                <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-700"></div>
            </div>

            {/* Hero Stats */}
            <div className="text-center mb-16 relative z-10">
                <div className="animate-fade-in">
                    <h2 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-400 bg-clip-text text-transparent animate-gradient-x">
                        Become an AI Generalist
                    </h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-600 mx-auto mb-8 rounded-full"></div>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-12">
                    {stats.map((stat, index) => (
                        <div
                            key={index}
                            className="text-center group cursor-pointer transform transition-all duration-300 hover:scale-110"
                            style={{ animationDelay: `${index * 200}ms` }}
                            onMouseEnter={() => setHoveredStat(index)}
                            onMouseLeave={() => setHoveredStat(null)}
                        >
                            <div className={`relative p-6 rounded-2xl bg-gradient-to-br from-gray-800/60 to-gray-900/60 border transition-all duration-300 ${hoveredStat === index
                                ? `border-${stat.color}-400 shadow-lg shadow-${stat.color}-400/20`
                                : 'border-gray-700/50'
                                }`}>
                                <div className={`text-3xl font-bold mb-2 transition-colors duration-300 ${stat.color === 'blue' ? 'text-blue-400' :
                                    stat.color === 'purple' ? 'text-purple-400' :
                                        stat.color === 'green' ? 'text-green-400' :
                                            'text-yellow-400'
                                    }`}>
                                    {stat.value}
                                </div>
                                <div className="text-sm text-gray-400 group-hover:text-white transition-colors duration-300">
                                    {stat.label}
                                </div>
                                {hoveredStat === index && (
                                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-400/10 to-purple-400/10 animate-pulse"></div>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Vision & Mission */}
            <div className="grid md:grid-cols-2 gap-12 mb-20">
                <div className="group cursor-pointer transform transition-all duration-500 hover:scale-105">
                    <div className="bg-gradient-to-br from-blue-900/30 to-purple-900/30 p-8 rounded-2xl border border-blue-500/30 backdrop-blur-sm relative overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 to-purple-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                        <Star className="w-8 h-8 text-blue-400 mb-4 animate-pulse" />
                        <h3 className="text-2xl font-bold mb-4 text-blue-300 relative z-10">Our Vision</h3>
                        <p className="text-gray-300 leading-relaxed relative z-10">
                            To empower every learner and professional to become AI ready, driving innovation,
                            productivity, and purposeful impact across industries.
                        </p>
                    </div>
                </div>
                <div className="group cursor-pointer transform transition-all duration-500 hover:scale-105">
                    <div className="bg-gradient-to-br from-purple-900/30 to-pink-900/30 p-8 rounded-2xl border border-purple-500/30 backdrop-blur-sm relative overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/5 to-pink-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                        <Award className="w-8 h-8 text-purple-400 mb-4 animate-pulse" />
                        <h3 className="text-2xl font-bold mb-4 text-purple-300 relative z-10">Our Mission</h3>
                        <p className="text-gray-300 leading-relaxed relative z-10">
                            To democratize access to real-world AI education through hands-on training,
                            global mentorship, and job-ready programs.
                        </p>
                    </div>
                </div>
            </div>

            {/* Curriculum Modules */}
            <div className="mb-20 relative">
                <div className="text-center mb-12">
                    <h3 className="text-3xl font-bold text-white mb-4">
                        Our 6-Month Curriculum Roadmap
                    </h3>
                    <div className="w-32 h-1 bg-gradient-to-r from-blue-400 to-purple-600 mx-auto rounded-full"></div>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-7 gap-4 relative">
                    {modules.map((module, index) => (
                        <div
                            key={index}
                            className="group cursor-pointer transform transition-all duration-300 hover:scale-105"
                            style={{ animationDelay: `${index * 100}ms` }}
                            onMouseEnter={() => setHoveredModule(index)}
                            onMouseLeave={() => setHoveredModule(null)}
                        >
                            <div className="bg-gradient-to-b from-gray-800/60 to-gray-900/60 p-6 rounded-xl border border-gray-700/50 text-center h-full relative overflow-hidden backdrop-blur-sm group-hover:border-blue-400/50 transition-all duration-300">
                                {hoveredModule === index && (
                                    <div className="absolute inset-0 bg-gradient-to-br from-blue-400/10 to-purple-400/10 animate-pulse"></div>
                                )}
                                <div className="relative z-10">
                                    <module.icon className="w-10 h-10 mx-auto mb-4 text-blue-400 group-hover:text-blue-300 transition-colors duration-300 group-hover:animate-bounce" />
                                    <div className="text-sm font-medium text-gray-300 mb-2 group-hover:text-white transition-colors duration-300">
                                        {module.title}
                                    </div>
                                    <div className="text-xs text-gray-500 group-hover:text-gray-400 transition-colors duration-300">
                                        {module.desc}
                                    </div>
                                </div>
                                <div className="absolute bottom-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    <ArrowRight className="w-4 h-4 text-blue-400" />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Bottom fade overlay for curriculum teaser effect */}
                {/* <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-gray-900 via-gray-900/90 to-transparent pointer-events-none z-10"></div> */}

                {/* Teaser text overlay */}
                {/* <div className="absolute bottom-4 left-0 right-0 text-center z-20 pointer-events-none">
                    <p className="text-gray-400 text-sm mb-2 animate-pulse">
                        Want to see the complete curriculum details?
                    </p>
                    <p className="text-xs text-gray-500">
                        Download our brochure for full module breakdown, projects & more
                    </p>
                </div> */}
            </div>

            {/* Key Features */}
            <div className="grid md:grid-cols-3 gap-8 mb-16">
                {features.map((feature, index) => (
                    <div
                        key={index}
                        className="text-center group cursor-pointer transform transition-all duration-300 hover:scale-105"
                        style={{ animationDelay: `${index * 200}ms` }}
                    >
                        <div className="bg-gradient-to-br from-gray-800/40 to-gray-900/40 p-8 rounded-2xl border border-gray-700/50 relative overflow-hidden backdrop-blur-sm group-hover:border-blue-400/50 transition-all duration-300">
                            <div className="absolute inset-0 bg-gradient-to-br from-blue-400/5 to-purple-400/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                            <feature.icon className="w-12 h-12 mx-auto mb-4 text-gray-400 group-hover:text-blue-400 transition-colors duration-300 group-hover:animate-pulse" />
                            <div className={`text-4xl font-bold mb-2 transition-colors duration-300 ${feature.color === 'blue' ? 'text-blue-400 group-hover:text-blue-300' :
                                feature.color === 'purple' ? 'text-purple-400 group-hover:text-purple-300' :
                                    'text-green-400 group-hover:text-green-300'
                                }`}>
                                {feature.number}
                            </div>
                            <div className="text-lg font-medium text-gray-300 mb-2 group-hover:text-white transition-colors duration-300">
                                {feature.title}
                            </div>
                            <div className="text-sm text-gray-500 group-hover:text-gray-400 transition-colors duration-300">
                                {feature.subtitle}
                            </div>
                        </div>
                    </div>
                ))}


            </div>


            {/* Certifications Preview */}
            <div className="text-center mb-16">
                <h3 className="text-2xl font-bold mb-6 text-gray-300">
                    Industry Certifications Included
                </h3>
                <div className="flex flex-wrap justify-center gap-4 mb-4">
                    {["Microsoft Power BI", "SQL Server", "Excel Expert", "PowerPoint Associate"].map((cert, index) => (
                        <div
                            key={index}
                            className="bg-gray-800/40 px-6 py-3 rounded-xl border border-gray-700/50 backdrop-blur-sm hover:border-blue-400/50 transition-all duration-300 transform hover:scale-105 group cursor-pointer"
                            style={{ animationDelay: `${index * 100}ms` }}
                        >
                            <span className="text-sm text-gray-400 group-hover:text-white transition-colors duration-300">{cert}</span>
                        </div>
                    ))}
                </div>
                {/* <p className="text-sm text-gray-500 animate-pulse">+ 15 milestone certificates</p> */}
            </div>

            {/* Pre-CTA Teaser Section with Fade */}
            <div className="relative mb-16">
                {/* Bottom fade overlay for teaser effect */}
                <div className="absolute bottom-0 left-0 right-0 h-[140px] bg-gradient-to-t from-gray-900 via-gray-900/100 to-transparent pointer-events-none z-10"></div>

                {/* Teaser text overlay */}
                <div className="absolute bottom-8 left-0 right-0 text-center z-20 pointer-events-none">
                    <p className="text-gray-400 text-sm mb-2 animate-pulse">
                        Want to see the complete curriculum details?
                    </p>
                    <p className="text-xs text-gray-500">
                        Download our brochure for full module breakdown, projects & many more
                    </p>
                </div>
            </div>

            {/* CTA Section */}
            <div className="text-center relative overflow-hidden">
                <div className="bg-gradient-to-r from-blue-900/40 to-purple-900/40 p-12 rounded-2xl border border-blue-500/30 backdrop-blur-sm relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10 animate-pulse"></div>
                    <div className="relative z-10">
                        <h3 className="text-3xl font-bold mb-4 text-white">
                            Ready to Lead in the Age of AI?
                        </h3>
                        <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
                            In a world where AI is replacing tasks, companies are now paying more to those who know how to use it.
                            Get the complete curriculum details and start your transformation today.
                        </p>
                        <Button
                            onClick={handleDownloadBrochure}
                            disabled={isDownloading}
                            className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 rounded-xl font-semibold text-lg shadow-2xl hover:shadow-blue-500/25 transition-all duration-300 transform hover:scale-105 group relative overflow-hidden disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                        >
                            <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                            <Download className={`w-5 h-5 mr-2 ${isDownloading ? 'animate-spin' : 'group-hover:animate-bounce'}`} />
                            {isDownloading ? 'Downloading...' : 'Download Full Brochure'}
                        </Button>
                        <p className="text-sm text-gray-500 mt-6 animate-fade-in">
                            Complete curriculum details • Pricing • Success stories • And more
                        </p>
                    </div>
                </div>
            </div>

            <style jsx>{`
                @keyframes gradient-x {
                    0%, 100% {
                        background-size: 200% 200%;
                        background-position: left center;
                    }
                    50% {
                        background-size: 200% 200%;
                        background-position: right center;
                    }
                }
                @keyframes fade-in {
                    from {
                        opacity: 0;
                        transform: translateY(20px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }
                .animate-gradient-x {
                    animation: gradient-x 3s ease infinite;
                }
                .animate-fade-in {
                    animation: fade-in 1s ease-out;
                }
            `}</style>
        </section>
    )
}