import { useState } from "react"
import { useRouter } from "next/navigation"

export function useProgramHandlers() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const router = useRouter()

  const handleProgramSelection = () => setIsModalOpen(true)

  const handleAssessment = () => {
    const url = '/assessment'
    const newWindow = window.open(url, '_blank', 'noopener,noreferrer')

    if (newWindow) {
      newWindow.focus()
      setIsModalOpen(false)
    } else {
      const userChoice = confirm('Popup blocked! Would you like to open the assessment in the same tab? Click OK to continue or Cancel to stay here.')
      if (userChoice) window.location.href = url
      setIsModalOpen(false)
    }
  }

  const handleWebinarRegistration = () => {
    setIsModalOpen(false)
    try {
      router.push('/workshop-registration')
    } catch (error) {
      console.error('Router navigation failed:', error)
      window.location.href = '/workshop-registration'
    }
  }

  return {
    isModalOpen,
    setIsModalOpen,
    handleProgramSelection,
    handleAssessment,
    handleWebinarRegistration
  }
} 