import { useState, useEffect } from "react"

export interface CountdownTime {
  days: number
  hours: number
  minutes: number
  seconds: number
}

export function useCountdown(targetDate: Date): CountdownTime {
  const [timeLeft, setTimeLeft] = useState<CountdownTime>({ days: 0, hours: 0, minutes: 0, seconds: 0 })

  useEffect(() => {
    function updateCountdown() {
      const now = new Date()
      const diff = targetDate.getTime() - now.getTime()
      
      if (diff <= 0) {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 })
        return
      }
      
      const days = Math.floor(diff / (1000 * 60 * 60 * 24))
      const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
      const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60))
      const seconds = Math.floor((diff % (1000 * 60)) / 1000)
      
      setTimeLeft({ days, hours, minutes, seconds })
    }
    
    updateCountdown()
    const timer = setInterval(updateCountdown, 1000)
    return () => clearInterval(timer)
  }, [targetDate])

  return timeLeft
} 