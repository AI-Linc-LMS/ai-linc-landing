"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { motion, Variants } from "framer-motion"

interface AssessmentCardProps {
  itemVariants: Variants
  onStartTest: () => void
  onWhyTest: () => void
}

export function AssessmentCard({ itemVariants, onStartTest, onWhyTest }: AssessmentCardProps) {
  const topics = [
    "AI Fundamentals",
    "JavaScript", 
    "React",
    "Node.js",
    "HTML/CSS",
    "Cloud Database",
    "Logic & Aptitude"
  ]

  return (
    <motion.div variants={itemVariants}>
      <Card className="bg-white/10 backdrop-blur-lg border-white/20 hover:bg-white/15 transition-all duration-300">
        <CardContent className="p-6 space-y-6">
          <div className="space-y-3">
            <div className="flex items-center gap-2 text-sm">
              <span className="bg-blue-500/20 text-blue-300 px-2 py-1 rounded-full text-xs font-medium border border-blue-500/30">
                AI-Linc Scholarship Test
              </span>
            </div>
            <h2 className="text-xl font-bold text-white">
              Attempt all Questions to
            </h2>
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-sm text-gray-300">
                <span className="w-2 h-2 bg-orange-400 rounded-full"></span>
                <span>Total Questions: 30 MCQ</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-300">
                <span className="w-2 h-2 bg-green-400 rounded-full"></span>
                <span>Duration: 30 minutes</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-300">
                <span className="w-2 h-2 bg-blue-400 rounded-full"></span>
                <span>Topics:</span>
              </div>
            </div>
          </div>

          {/* Topics */}
          <div className="space-y-3">
            <div className="flex flex-wrap gap-2">
              {topics.map((topic, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Badge 
                    variant="secondary" 
                    className="bg-blue-500/20 text-blue-300 border-blue-500/30 hover:bg-blue-500/30 transition-colors cursor-pointer text-xs"
                  >
                    {topic}
                  </Badge>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Action Buttons */}
          <div className="grid grid-cols-2 gap-3 pt-4">
            <Button 
              variant="outline" 
              className="border-white/30 text-white hover:bg-white/10"
              onClick={onWhyTest}
            >
              Why Take This Test?
            </Button>
            <Button 
              className="bg-green-600 hover:bg-green-700 text-white font-medium"
              onClick={onStartTest}
            >
              Start Assessment
            </Button>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )
} 