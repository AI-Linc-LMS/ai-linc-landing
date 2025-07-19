"use client"

import React, { useState } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Download } from "lucide-react"

interface AICheatSheetModalProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  onDownload: (details: { name: string; email: string; phone: string }) => void
}

export function AICheatSheetModal({ 
  open, 
  onOpenChange, 
  onDownload 
}: AICheatSheetModalProps) {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    // Basic validation
    if (!name || !email || !phone) {
      alert("Please fill in all fields")
      return
    }

    setIsSubmitting(true)
    try {
      // Call the download handler passed from parent
      await onDownload({ name, email, phone })
      
      // Reset form and close modal
      setName("")
      setEmail("")
      setPhone("")
      onOpenChange(false)
    } catch (error) {
      console.error("Download failed", error)
      alert("Failed to download cheat sheet. Please try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-center">
            Download Free AI Cheat Sheet
          </DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4">
          <Input 
            placeholder="Full Name" 
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <Input 
            type="email" 
            placeholder="Email Address" 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <Input 
            type="tel" 
            placeholder="Phone Number" 
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
          />
          <Button 
            type="submit" 
            className="w-full bg-gradient-to-r from-green-400 to-blue-500 hover:opacity-90"
            disabled={isSubmitting}
          >
            <Download className="mr-2" size={20} /> 
            {isSubmitting ? "Downloading..." : "Get Cheat Sheet"}
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  )
} 