"use client"

import React, { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { CheckCircle } from "lucide-react"

interface CheatSheetSuccessModalProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  message: string
}

export function CheatSheetSuccessModal({ 
  open, 
  onOpenChange, 
  message 
}: CheatSheetSuccessModalProps) {
  const [countdown, setCountdown] = useState(3)
  const router = useRouter()

  useEffect(() => {
    if (open) {
      setCountdown(3)
      
      const timer = setInterval(() => {
        setCountdown((prev) => {
          if (prev <= 1) {
            clearInterval(timer)
            onOpenChange(false)
            router.push('/courses')
            return 0
          }
          return prev - 1
        })
      }, 1000)

      return () => clearInterval(timer)
    }
  }, [open, onOpenChange, router])

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[425px]">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <CheckCircle 
            className="text-green-500" 
            size={64} 
            strokeWidth={1.5} 
          />
          <DialogTitle className="text-2xl font-bold">
            Cheat Sheet Sent!
          </DialogTitle>
          <p className="text-muted-foreground">
            {message}
          </p>
          <div className="flex flex-col items-center space-y-2">
            <p className="text-sm text-muted-foreground">
              Redirecting to courses in {countdown} seconds...
            </p>
            <Button 
              onClick={() => {
                onOpenChange(false)
                router.push('/courses')
              }}
              className="bg-gradient-to-r from-green-400 to-blue-500 hover:opacity-90"
            >
              Go to Courses Now
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
} 