import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Linkedin, Youtube, Instagram } from "lucide-react"

interface SuccessModalProps {
  showModal: boolean
  onClose: () => void
}

export function SuccessModal({ showModal, onClose }: SuccessModalProps) {
  if (!showModal) return null

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3 }}
        className="bg-background/80 m-3 backdrop-blur-sm rounded-xl p-8 max-w-md w-full border border-[#0BC5EA]/30"
      >
        <h2 className="text-2xl font-bold text-[#0BC5EA] mb-4">Registration Successful!</h2>
        <p className="text-foreground/80 mb-6">
          Thank you for registering! You'll receive a confirmation email with further details soon.
        </p>
        <p className="text-foreground/80 mb-6">
          Join our WhatsApp community for AI opportunities and updates:
        </p>
        <div className="flex flex-col gap-2">
          <a
            href="https://chat.whatsapp.com/HKvxc1So7fl8LpQiz9tpGe?mode=r_t"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#25D366] hover:bg-[#25D366]/90 text-white px-6 py-3 rounded-lg text-center font-medium"
          >
            Join AI Community
          </a>
          <Button
            onClick={onClose}
            className="bg-[#0BC5EA] hover:bg-[#0BC5EA]/90 text-white mt-4"
          >
            Close
          </Button>
          <div className="flex justify-center gap-4 mt-4">
            <a
              href="https://youtube.com/@ailinc772?si=BhOlO4fwHqGiAncC"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#0BC5EA] hover:text-[#0BC5EA]/80 transition-colors"
              aria-label="Follow us on YouTube"
            >
              <Youtube className="size-6" />
            </a>
            <a
              href="https://www.linkedin.com/company/ai-linc772/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#0BC5EA] hover:text-[#0BC5EA]/80 transition-colors"
              aria-label="Follow us on LinkedIn"
            >
              <Linkedin className="size-6" />
            </a>
            <a
              href="https://www.instagram.com/ai_lincc/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#0BC5EA] hover:text-[#0BC5EA]/80 transition-colors"
              aria-label="Follow us on Instagram"
            >
              <Instagram className="size-6" />
            </a>
          </div>
        </div>
      </motion.div>
    </div>
  )
} 