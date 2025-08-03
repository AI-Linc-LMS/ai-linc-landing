"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Users, 
  Shield, 
  Target, 
  Calendar, 
  Zap, 
  Briefcase, 
  Infinity, 
  Globe, 
  MessageSquare, 
  BarChart3, 
  Award, 
  Trophy,
  TrendingUp,
  CheckCircle,
  Sparkles
} from "lucide-react";

export function KeyHighlightsSection() {
  const highlights = [
    {
      icon: Users,
      title: "Live sessions by professionals from MAANG",
      description: "Learn directly from experts working at Meta, Amazon, Apple, Netflix & Google",
      color: "#0BC5EA",
      bgColor: "from-[#0BC5EA]/10 to-[#0BC5EA]/5"
    },
    {
      icon: Shield,
      title: "100% Money-back guarantee",
      description: "If you don't get any opportunity within a year",
      color: "#10B981",
      bgColor: "from-[#10B981]/10 to-[#10B981]/5"
    },
    {
      icon: Target,
      title: "Master AI across multiple domains",
      description: "Tech, Data Science, BA, Product Management, Cybersecurity, Marketing, HR & more",
      color: "#6B46C1",
      bgColor: "from-[#6B46C1]/10 to-[#6B46C1]/5"
    },
    {
      icon: Calendar,
      title: "21 days dedicated to each domain",
      description: "Deep dive into each specialization with focused learning",
      color: "#F59E0B",
      bgColor: "from-[#F59E0B]/10 to-[#F59E0B]/5"
    },
    {
      icon: Zap,
      title: "100+ AI tools for 100x efficiency",
      description: "Access to comprehensive toolkit for maximum productivity",
      color: "#EF4444",
      bgColor: "from-[#EF4444]/10 to-[#EF4444]/5"
    },
    {
      icon: Briefcase,
      title: "Optional work simulations with MAANG PMs",
      description: "Real-world project experience with Product Managers from top companies",
      color: "#8B5CF6",
      bgColor: "from-[#8B5CF6]/10 to-[#8B5CF6]/5"
    },
    {
      icon: Infinity,
      title: "Lifetime access to AI Powered platform",
      description: "All future content & tools included forever",
      color: "#06B6D4",
      bgColor: "from-[#06B6D4]/10 to-[#06B6D4]/5"
    },
    {
      icon: Globe,
      title: "AI global events & Career fairs",
      description: "Recruitment drives and networking opportunities worldwide",
      color: "#84CC16",
      bgColor: "from-[#84CC16]/10 to-[#84CC16]/5"
    },
    {
      icon: MessageSquare,
      title: "Sessions with AI Industry leaders",
      description: "Direct access to thought leaders and pioneers in AI",
      color: "#F97316",
      bgColor: "from-[#F97316]/10 to-[#F97316]/5"
    },
    {
      icon: BarChart3,
      title: "Auto-generated reports",
      description: "On skills & improvement areas for continuous growth",
      color: "#EC4899",
      bgColor: "from-[#EC4899]/10 to-[#EC4899]/5"
    },
    {
      icon: Award,
      title: "Industry-recognized certifications",
      description: "From IBM, Microsoft, Salesforce & Google",
      color: "#0BC5EA",
      bgColor: "from-[#0BC5EA]/10 to-[#0BC5EA]/5"
    },
    {
      icon: Trophy,
      title: "AiLinc Certified AI Generalist Badge",
      description: "+ 15 Module Based Certifications",
      color: "#FBBF24",
      bgColor: "from-[#FBBF24]/10 to-[#FBBF24]/5"
    },
    {
      icon: TrendingUp,
      title: "Access to dashboards & progress tracking",
      description: "Streaks & detailed analytics for your learning journey",
      color: "#10B981",
      bgColor: "from-[#10B981]/10 to-[#10B981]/5"
    }
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <Badge className="bg-gradient-to-r from-[#0BC5EA]/20 to-[#6B46C1]/20 text-[#0BC5EA] border-[#0BC5EA]/30 px-4 py-2 mb-6">
            <Sparkles className="w-4 h-4 mr-2" />
            Program Highlights
          </Badge>
          
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-white to-[#0BC5EA] bg-clip-text text-transparent">
            Key Highlights
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Everything you need to become an AI expert and transform your career with industry-leading features
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {highlights.map((highlight, index) => (
            <motion.div
              key={index}
              variants={item}
              className="group"
            >
              <Card className="h-full bg-card/30 backdrop-blur-sm border border-gray-700/50 hover:border-opacity-100 transition-all duration-300 group-hover:scale-[1.02] group-hover:shadow-xl overflow-hidden">
                <CardContent className="p-6 h-full">
                  <div className={`absolute inset-0 bg-gradient-to-br ${highlight.bgColor} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
                  
                  <div className="relative z-10 h-full flex flex-col">
                    <div className="flex items-start gap-4 mb-4">
                      <div 
                        className="p-3 rounded-lg flex-shrink-0 transition-all duration-300 group-hover:scale-110"
                        style={{ 
                          backgroundColor: `${highlight.color}20`,
                          border: `1px solid ${highlight.color}30`
                        }}
                      >
                        <highlight.icon 
                          className="w-6 h-6" 
                          style={{ color: highlight.color }}
                        />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-opacity-90 transition-colors">
                          {highlight.title}
                        </h3>
                        <p className="text-sm text-gray-300 leading-relaxed">
                          {highlight.description}
                        </p>
                      </div>
                    </div>
                    
                    <div className="mt-auto">
                      <div className="flex items-center text-xs text-gray-500 group-hover:text-gray-400 transition-colors">
                        <CheckCircle className="w-3 h-3 mr-1" style={{ color: highlight.color }} />
                        <span>Included in program</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Additional Info Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <Card className="bg-gradient-to-r from-[#0BC5EA]/10 to-[#6B46C1]/10 border-[#0BC5EA]/30 backdrop-blur-sm">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-white mb-4">
                Complete AI Transformation Package
              </h3>
              <p className="text-gray-300 mb-6 max-w-3xl mx-auto">
                This comprehensive program is designed to take you from AI novice to expert, 
                with hands-on experience, industry certifications, and guaranteed career support.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-[#0BC5EA] mb-2">13</div>
                  <div className="text-sm text-gray-300">Key Highlight Features</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-[#6B46C1] mb-2">100+</div>
                  <div className="text-sm text-gray-300">AI Tools & Resources</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-[#10B981] mb-2">15+</div>
                  <div className="text-sm text-gray-300">Industry Certifications</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>

      {/* Background glow effects */}
      <div className="absolute top-1/4 right-1/4 size-96 bg-[#0BC5EA]/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 left-1/4 size-96 bg-[#6B46C1]/5 rounded-full blur-3xl"></div>
    </section>
  );
}
