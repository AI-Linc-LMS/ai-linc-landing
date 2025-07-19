"use client"

import React from "react"
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
          <Button 
            onClick={() => onOpenChange(false)}
            className="mt-4 bg-gradient-to-r from-green-400 to-blue-500 hover:opacity-90"
          >
            Close
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  )
} 