"use client"
import { motion } from "framer-motion"
import { AlertTriangle, Clock, RefreshCw } from "lucide-react"
import { Button } from "@/components/ui/button"

interface MaintenanceModalProps {
  isOpen: boolean
  onRetry: () => void
  isRetrying: boolean
}

export function MaintenanceModal({ isOpen, onRetry, isRetrying }: MaintenanceModalProps) {
  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.8, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className="bg-background/95 backdrop-blur-sm rounded-xl p-8 max-w-md w-full border border-red-500/30 shadow-2xl"
      >
        <div className="text-center">
          <div className="mx-auto w-16 h-16 bg-red-500/10 rounded-full flex items-center justify-center mb-4">
            <AlertTriangle className="w-8 h-8 text-red-500" />
          </div>
          
          <h2 className="text-2xl font-bold text-red-500 mb-4">
            Service Temporarily Unavailable
          </h2>
          
          <div className="space-y-3 text-foreground/80 mb-6">
            <p className="flex items-center justify-center gap-2">
              <Clock className="w-4 h-4 text-yellow-500" />
              We're currently under maintenance
            </p>
            <p className="text-sm">
              Our registration system is temporarily down. We're working hard to get everything back up and running.
            </p>
            <p className="text-sm font-medium text-[#0BC5EA]">
              Please hold tight and try again in a few minutes!
            </p>
          </div>

          <Button
            onClick={onRetry}
            disabled={isRetrying}
            className="w-full bg-gradient-to-r from-[#0BC5EA] to-[#6B46C1] hover:opacity-90 text-white"
          >
            {isRetrying ? (
              <>
                <RefreshCw className="w-4 h-4 mr-2 animate-spin" />
                Retrying...
              </>
            ) : (
              <>
                <RefreshCw className="w-4 h-4 mr-2" />
                Try Again
              </>
            )}
          </Button>
          
          <p className="text-xs text-foreground/60 mt-4">
            If the issue persists, please contact our support team.
          </p>
        </div>
      </motion.div>
    </div>
  )
} 