"use client"

import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle, TrendingUp, Users, Award, Target, Briefcase } from "lucide-react"
import { useState, useEffect } from "react"

interface WhyTestModalProps {
  isOpen: boolean
  onClose: () => void
  onStartTest: () => void
}

export function WhyTestModal({ isOpen, onClose, onStartTest }: WhyTestModalProps) {
  const [isStarting, setIsStarting] = useState(false)
  
  useEffect(() => {
    if (isOpen) {
      setIsStarting(false)
    }
  }, [isOpen])

  const benefits = [
    {
      icon: Briefcase,
      title: "Direct Placement Opportunities",
      description: "Get shortlisted for interviews with our 50+ hiring partner companies including startups and Fortune 500 companies."
    },
    {
      icon: Award,
      title: "Industry-Recognized Certificate",
      description: "Receive a verified digital certificate that validates your AI and full-stack development skills."
    },
    {
      icon: Users,
      title: "FREE LinkedIn Optimization",
      description: "Get professional LinkedIn profile review and optimization by our career experts to attract recruiters."
    },
    {
      icon: Target,
      title: "Personalized Readiness Score",
      description: "Detailed analysis of your strengths and areas for improvement with customized learning recommendations."
    },
    {
      icon: TrendingUp,
      title: "Upskilling Pathways",
      description: "If you don't score high, get access to personalized learning paths to bridge skill gaps."
    },
    {
      icon: CheckCircle,
      title: "Career Guidance",
      description: "One-on-one mentorship sessions with industry experts to plan your career trajectory."
    }
  ]

  const handleStartTest = () => {
    setIsStarting(true)
    onClose()
    onStartTest()
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] bg-gray-900 border-gray-700 text-white overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-center text-blue-400">
            Why Take This Assessment?
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-6">
          {/* Introduction */}
          <div className="text-center space-y-4">
            <p className="text-lg text-gray-300">
              This isn't just another test – it's your gateway to exciting career opportunities in AI and technology.
            </p>
            <div className="bg-blue-900/30 border border-blue-700 rounded-lg p-4">
              <p className="text-blue-300 font-semibold">
                🚀 Over 80% of our assessment takers get interview calls within 2 weeks!
              </p>
            </div>
          </div>

          {/* Benefits Grid */}
          <div className="grid md:grid-cols-2 gap-6">
            {benefits.map((benefit, index) => (
              <Card key={index} className="bg-gray-800 border-gray-700">
                <CardContent className="p-4 space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                      <benefit.icon className="w-5 h-5 text-white" />
                    </div>
                    <h3 className="font-semibold text-white">{benefit.title}</h3>
                  </div>
                  <p className="text-gray-300 text-sm">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Assessment Details */}
          <div className="bg-gray-800 rounded-lg p-6 space-y-4">
            <h3 className="text-xl font-semibold text-white mb-4">What You'll Be Tested On:</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <h4 className="font-semibold text-blue-400">Technical Skills</h4>
                <ul className="text-sm text-gray-300 space-y-1">
                  <li>• AI Fundamentals & Machine Learning</li>
                  <li>• JavaScript & Modern Frameworks</li>
                  <li>• React.js & Component Architecture</li>
                  <li>• Node.js & Backend Development</li>
                </ul>
              </div>
              <div className="space-y-2">
                <h4 className="font-semibold text-blue-400">Core Competencies</h4>
                <ul className="text-sm text-gray-300 space-y-1">
                  <li>• HTML/CSS & Responsive Design</li>
                  <li>• Cloud Database Management</li>
                  <li>• Logic & Problem Solving</li>
                  <li>• Analytical Aptitude</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Success Stories */}
          <div className="bg-green-900/20 border border-green-700 rounded-lg p-4">
            <h3 className="font-semibold text-green-400 mb-2">Success Stories</h3>
            <p className="text-green-300 text-sm">
              "After taking this assessment, I got interviews with 3 companies and landed a role at a fintech startup with 40% salary hike!" - Priya S., AI Engineer
            </p>
          </div>

          {/* Call to Action */}
          {/* <div className="flex justify-center gap-4 pt-4">
            <Button 
              variant="outline" 
              onClick={onClose}
              className="border-gray-600 text-white hover:bg-gray-700"
            >
              Maybe Later
            </Button>
            <Button 
              onClick={handleStartTest}
              className="bg-blue-600 hover:bg-blue-700 text-white px-8"
              disabled={isStarting}
            >
              Start Assessment Now
            </Button>
          </div> */}
        </div>
      </DialogContent>
    </Dialog>
  )
} 