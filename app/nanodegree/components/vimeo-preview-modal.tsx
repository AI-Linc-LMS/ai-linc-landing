"use client"

import { X } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { useState } from "react"

type VimeoPreviewModalProps = {
    vimeoId: string
    title: string
    isOpen: boolean
    onClose: () => void
}

export function VimeoPreviewModal({ 
    vimeoId, 
    title, 
    isOpen, 
    onClose 
}: VimeoPreviewModalProps) {
    if (!isOpen || !vimeoId) return null

    return (
        <AnimatePresence>
            <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4"
                onClick={onClose}
            >
                <motion.div
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0.9, opacity: 0 }}
                    className=" rounded-xl shadow-2xl w-full max-w-4xl"
                    onClick={(e) => e.stopPropagation()}
                >
                    <div className="flex justify-between items-center p-4 border-b">
                        <h3 className="text-xl font-semibold">{title}</h3>
                        <button 
                            onClick={onClose} 
                            className="text-gray-500 hover:text-gray-700"
                        >
                            <X className="w-6 h-6" />
                        </button>
                    </div>
                    <div className="p-4">
                        <div className="aspect-video">
                            <iframe 
                                src={`https://player.vimeo.com/video/${vimeoId}`}
                                width="100%" 
                                height="100%" 
                                frameBorder="0" 
                                allow="autoplay; fullscreen; picture-in-picture" 
                                allowFullScreen
                                title={title}
                            ></iframe>
                        </div>
                    </div>
                </motion.div>
            </motion.div>
        </AnimatePresence>
    )
}

// Custom hook for managing video modal state
export function useVideoModal() {
    const [isVideoModalOpen, setIsVideoModalOpen] = useState(false)
    const [currentVideo, setCurrentVideo] = useState<{ id: string, title: string } | null>(null)

    const openVideoModal = (vimeoId: string, title: string) => {
        setCurrentVideo({ id: vimeoId, title })
        setIsVideoModalOpen(true)
    }

    const closeVideoModal = () => {
        setIsVideoModalOpen(false)
        setCurrentVideo(null)
    }

    return {
        isVideoModalOpen,
        currentVideo,
        openVideoModal,
        closeVideoModal
    }
} 