"use client"

import { useState } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { Clock, CheckCircle } from "lucide-react"

interface TestModalProps {
  isOpen: boolean
  onClose: () => void
}

export function TestModal({ isOpen, onClose }: TestModalProps) {
  const [currentQuestion, setCurrentQuestion] = useState(1)
  const [selectedAnswer, setSelectedAnswer] = useState("")
  const [timeRemaining, setTimeRemaining] = useState(1800) // 30 minutes in seconds

  const sampleQuestions = [
    {
      id: 1,
      question: "What is the primary purpose of React hooks?",
      options: [
        "To replace class components entirely",
        "To manage state and side effects in functional components",
        "To improve performance of React applications",
        "To handle routing in React applications"
      ],
      correct: 1
    },
    {
      id: 2,
      question: "Which of the following is NOT a core principle of AI?",
      options: [
        "Machine Learning",
        "Natural Language Processing",
        "Database Management",
        "Computer Vision"
      ],
      correct: 2
    }
  ]

  const currentQuestionData = sampleQuestions[currentQuestion - 1]
  const progressPercentage = (currentQuestion / 30) * 100

  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60)
    const remainingSeconds = seconds % 60
    return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`
  }

  const handleNext = () => {
    if (currentQuestion < 30) {
      setCurrentQuestion(currentQuestion + 1)
      setSelectedAnswer("")
    }
  }

  const handleSubmit = () => {
    // Handle test submission
    onClose()
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] bg-gray-900 border-gray-700 text-white">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-center">
            AI Linc Placement Assessment
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-6">
          {/* Progress and Timer */}
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-4">
              <span className="text-sm text-gray-400">
                Question {currentQuestion} of 30
              </span>
              <Progress value={progressPercentage} className="w-32" />
            </div>
            <div className="flex items-center gap-2 text-orange-400">
              <Clock className="w-4 h-4" />
              <span className="font-mono">{formatTime(timeRemaining)}</span>
            </div>
          </div>

          {/* Question */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">
              {currentQuestionData?.question}
            </h3>

            <RadioGroup 
              value={selectedAnswer} 
              onValueChange={setSelectedAnswer}
              className="space-y-3"
            >
              {currentQuestionData?.options.map((option, index) => (
                <div key={index} className="flex items-center space-x-2">
                  <RadioGroupItem 
                    value={index.toString()} 
                    id={`option-${index}`}
                    className="border-gray-600 text-blue-400"
                  />
                  <Label 
                    htmlFor={`option-${index}`}
                    className="flex-1 p-3 rounded-lg border border-gray-600 hover:border-blue-400 cursor-pointer transition-colors"
                  >
                    {option}
                  </Label>
                </div>
              ))}
            </RadioGroup>
          </div>

          {/* Navigation */}
          <div className="flex justify-between">
            <Button 
              variant="outline" 
              onClick={() => setCurrentQuestion(Math.max(1, currentQuestion - 1))}
              disabled={currentQuestion === 1}
              className="border-gray-600 text-white hover:bg-gray-700"
            >
              Previous
            </Button>
            
            <div className="flex gap-2">
              {currentQuestion === 30 ? (
                <Button 
                  onClick={handleSubmit}
                  className="bg-green-600 hover:bg-green-700"
                  disabled={!selectedAnswer}
                >
                  <CheckCircle className="w-4 h-4 mr-2" />
                  Submit Test
                </Button>
              ) : (
                <Button 
                  onClick={handleNext}
                  className="bg-blue-600 hover:bg-blue-700"
                  disabled={!selectedAnswer}
                >
                  Next Question
                </Button>
              )}
            </div>
          </div>

          {/* Test Info */}
          <div className="bg-gray-800 p-4 rounded-lg">
            <p className="text-sm text-gray-400">
              💡 <strong>Tip:</strong> All questions are mandatory. You can navigate back to previous questions to review your answers.
            </p>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
} 