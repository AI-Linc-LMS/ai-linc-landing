import { useState, useEffect } from "react"
import { TimeLeft } from "../types"
import { talentJourney, keyMetrics } from "../data"

const WEBINAR_DATE = new Date("2025-08-17T12:30:00+05:30"); // IST timezone

export function useHeroTimers() {
  const [activeProcess, setActiveProcess] = useState(0)
  const [currentMetric, setCurrentMetric] = useState(0)
  const [progressValue, setProgressValue] = useState(0)
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  })

  useEffect(() => {
    // Countdown timer - calculate actual time remaining
    const updateCountdown = () => {
      const now = new Date()
      const diff = WEBINAR_DATE.getTime() - now.getTime()
      
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

    // Auto-cycle through talent journey
    const processTimer = setInterval(() => {
      setActiveProcess((prev) => (prev + 1) % talentJourney.length)
    }, 4000)

    // Cycle through metrics
    const metricTimer = setInterval(() => {
      setCurrentMetric((prev) => (prev + 1) % keyMetrics.length)
    }, 3000)

    // Animate progress bar
    const progressTimer = setInterval(() => {
      setProgressValue((prev) => (prev >= 100 ? 0 : prev + 2))
    }, 100)

    return () => {
      clearInterval(timer)
      clearInterval(processTimer)
      clearInterval(metricTimer)
      clearInterval(progressTimer)
    }
  }, [])

  return {
    activeProcess,
    setActiveProcess,
    currentMetric,
    progressValue,
    timeLeft,
  }
} 