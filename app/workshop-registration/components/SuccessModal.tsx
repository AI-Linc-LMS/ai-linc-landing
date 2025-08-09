"use client"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { CheckCircle, MessageCircle, Video } from "lucide-react"
import { motion } from "framer-motion"

interface WorkshopData {
  whatsAppGroupLink: string
  ZoomJoiningLink: string
  WorkshopTitle: string
  UpcomingWorkshopDate: string
  WorkshopTime: string
  SessionNumber: string
}

interface SuccessModalProps {
  showModal: boolean
  onClose: () => void
  workshopData?: WorkshopData | null
}

export function SuccessModal({ showModal, onClose, workshopData }: SuccessModalProps) {
  if (!showModal) return null

  return (
    <Dialog open={showModal} onOpenChange={onClose}>
      <DialogContent className="max-w-md mx-auto bg-gradient-to-br from-[#0A1128] to-[#1A202C] border border-[#0BC5EA]/30">
        <DialogHeader>
          <DialogTitle className="text-center">
            <div className="flex flex-col items-center space-y-4">
              <CheckCircle className="w-16 h-16 text-green-500" />
              <h2 className="text-2xl font-bold text-white">Registration Successful!</h2>
            </div>
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-4 mt-6">
          <p className="text-center text-gray-300">
            Thank you for registering! You'll receive a confirmation email shortly.
          </p>

          <div className="space-y-3">
            {workshopData?.whatsAppGroupLink && (
              <Button
                asChild
                className="w-full bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700"
              >
                <a
                  href={workshopData.whatsAppGroupLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center space-x-2"
                >
                  <MessageCircle className="w-5 h-5" />
                  <span>Join WhatsApp Group</span>
                </a>
              </Button>
            )}

            {workshopData?.ZoomJoiningLink && (
              <Button
                asChild
                className="w-full bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700"
              >
                <a
                  href={workshopData.ZoomJoiningLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center space-x-2"
                >
                  <Video className="w-5 h-5" />
                  <span>Join Workshop (Zoom)</span>
                </a>
              </Button>
            )}

            <Button
              onClick={onClose}
              variant="outline"
              className="w-full border-[#0BC5EA]/30 text-[#0BC5EA] hover:bg-[#0BC5EA]/10"
            >
              Close
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}