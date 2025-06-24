import { useState, useEffect } from "react"

interface TimeLeft {
  days: number
  hours: number
  minutes: number
  seconds: number
}

export function CountdownTimer() {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  })

  useEffect(() => {
    const targetDate = new Date("2025-06-28T12:30:00")

    const interval = setInterval(() => {
      const now = new Date()
      const difference = targetDate.getTime() - now.getTime()

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60)
        })
      }
    }, 1000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="flex justify-center gap-4 mb-8">
      <div className="bg-background/30 rounded-lg p-4 min-w-[80px]">
        <div className="text-3xl font-bold text-[#0BC5EA]">{timeLeft.days}</div>
        <div className="text-sm text-foreground/60">Days</div>
      </div>
      <div className="bg-background/30 rounded-lg p-4 min-w-[80px]">
        <div className="text-3xl font-bold text-[#0BC5EA]">{timeLeft.hours}</div>
        <div className="text-sm text-foreground/60">Hours</div>
      </div>
      <div className="bg-background/30 rounded-lg p-4 min-w-[80px]">
        <div className="text-3xl font-bold text-[#0BC5EA]">{timeLeft.minutes}</div>
        <div className="text-sm text-foreground/60">Minutes</div>
      </div>
      <div className="bg-background/30 rounded-lg p-4 min-w-[80px]">
        <div className="text-3xl font-bold text-[#0BC5EA]">{timeLeft.seconds}</div>
        <div className="text-sm text-foreground/60">Seconds</div>
      </div>
    </div>
  )
} 