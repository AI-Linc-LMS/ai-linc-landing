import { useState, useEffect } from "react"
import { TimeLeft } from "../types"
import { talentJourney, keyMetrics } from "../data"

export function useHeroTimers() {
  const [activeProcess, setActiveProcess] = useState(0)
  const [currentMetric, setCurrentMetric] = useState(0)
  const [progressValue, setProgressValue] = useState(0)
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 7,
    hours: 23,
    minutes: 59,
    seconds: 59,
  })

  useEffect(() => {
    // Countdown timer
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.days === 0 && prev.hours === 0 && prev.minutes === 0 && prev.seconds === 0) {
          clearInterval(timer)
          return prev
        }

        let newSeconds = prev.seconds - 1
        let newMinutes = prev.minutes
        let newHours = prev.hours
        let newDays = prev.days

        if (newSeconds < 0) {
          newSeconds = 59
          newMinutes -= 1
        }

        if (newMinutes < 0) {
          newMinutes = 59
          newHours -= 1
        }

        if (newHours < 0) {
          newHours = 23
          newDays -= 1
        }

        return {
          days: newDays,
          hours: newHours,
          minutes: newMinutes,
          seconds: newSeconds,
        }
      })
    }, 1000)

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