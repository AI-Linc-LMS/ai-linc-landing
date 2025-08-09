"use client"
import { useCountdown } from "@/hooks/use-countdown"
import { useMemo } from "react"

interface WorkshopData {
  UpcomingWorkshopDate: string
  WorkshopTime: string
  WorkshopTitle: string
  SessionNumber: string
}

interface CountdownTimerProps {
  workshopData?: WorkshopData | null
}

const FALLBACK_DATE = new Date("2025-08-10T12:00:00+05:30")

export function CountdownTimer({ workshopData }: CountdownTimerProps) {
  // Create webinar date from API data or use fallback
  const workshopDate = useMemo(() => {
    if (!workshopData) return FALLBACK_DATE

    try {
      const [day, month, year] = workshopData.UpcomingWorkshopDate.split("-")
      const [hours, minutes, seconds] = workshopData.WorkshopTime.split(":")

      return new Date(
        `${year}-${month}-${day}T${hours}:${minutes}:${seconds || "00"}+05:30`
      )
    } catch (error) {
      console.error("Error parsing workshop date:", error)
      return FALLBACK_DATE
    }
  }, [workshopData])

  const timeLeft = useCountdown(workshopDate)

  // Format date for display
  const formatDate = (date: Date) => {
    return date.toLocaleDateString("en-IN", {
      weekday: "long",
      day: "numeric",
      month: "short",
      year: "numeric"
    })
  }

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString("en-IN", {
      hour: "numeric",
      minute: "2-digit",
      hour12: true
    })
  }

  return (
    <div className="mb-12">
      <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center">
        Workshop Starts In
      </h2>
      <div className="text-center mb-4">
        <p className="text-lg text-[#0BC5EA] font-semibold">
          {formatDate(workshopDate)} at {formatTime(workshopDate)}
        </p>
      </div>
      <div className="grid grid-cols-4 gap-4 max-w-md mx-auto">
        <div className="bg-gradient-to-br from-[#0BC5EA]/20 to-[#6B46C1]/20 backdrop-blur-sm border border-[#0BC5EA]/30 rounded-lg p-4 text-center">
          <div className="text-2xl md:text-3xl font-bold text-[#0BC5EA]">
            {timeLeft.days.toString().padStart(2, "0")}
          </div>
          <div className="text-sm text-gray-300">Days</div>
        </div>
        <div className="bg-gradient-to-br from-[#0BC5EA]/20 to-[#6B46C1]/20 backdrop-blur-sm border border-[#0BC5EA]/30 rounded-lg p-4 text-center">
          <div className="text-2xl md:text-3xl font-bold text-[#0BC5EA]">
            {timeLeft.hours.toString().padStart(2, "0")}
          </div>
          <div className="text-sm text-gray-300">Hours</div>
        </div>
        <div className="bg-gradient-to-br from-[#0BC5EA]/20 to-[#6B46C1]/20 backdrop-blur-sm border border-[#0BC5EA]/30 rounded-lg p-4 text-center">
          <div className="text-2xl md:text-3xl font-bold text-[#0BC5EA]">
            {timeLeft.minutes.toString().padStart(2, "0")}
          </div>
          <div className="text-sm text-gray-300">Minutes</div>
        </div>
        <div className="bg-gradient-to-br from-[#0BC5EA]/20 to-[#6B46C1]/20 backdrop-blur-sm border border-[#0BC5EA]/30 rounded-lg p-4 text-center">
          <div className="text-2xl md:text-3xl font-bold text-[#0BC5EA]">
            {timeLeft.seconds.toString().padStart(2, "0")}
          </div>
          <div className="text-sm text-gray-300">Seconds</div>
        </div>
      </div>
    </div>
  )
}