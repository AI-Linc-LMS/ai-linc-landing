"use client"

import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog"
import { RegistrationCount } from "@/app/workshop-registration/components/RegistrationCount"
import { useEffect, useState, useMemo } from "react"
import { useCountdown } from "@/hooks/use-countdown"
import { useWorkshopVariables } from "@/hooks/use-workshop-variables"

// Fallback date
const FALLBACK_WEBINAR_DATE = new Date("");

export function WebinarModal() {
  const [open, setOpen] = useState(false);
  const { data: workshopData, loading } = useWorkshopVariables();

  // Create webinar date from API data or use fallback
  const webinarDate = useMemo(() => {
    if (!workshopData) return FALLBACK_WEBINAR_DATE;
    
    // Parse date and time from API
    const [day, month, year] = workshopData.UpcomingWorkshopDate.split('-');
    const [hours, minutes, seconds] = workshopData.WorkshopTime.split(':');
    
    return new Date(`${year}-${month}-${day}T${hours}:${minutes}:${seconds}+05:30`);
  }, [workshopData]);

  const timeLeft = useCountdown(webinarDate);

  useEffect(() => {
    if (!loading) {
      setOpen(true);
    }
  }, [loading]);

  // Format date for display
  const formatDate = (date: Date) => {
    return date.toLocaleDateString('en-IN', {
      weekday: 'long',
      day: 'numeric',
      month: 'short',
      year: 'numeric'
    });
  };

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString('en-IN', {
      hour: 'numeric',
      minute: '2-digit',
      hour12: true
    });
  };

  // Use API data or fallback values
  const title = workshopData?.WorkshopTitle || "Deploy Your First AI App: Live No-Code AI Workshop";
  const sessionNumber = workshopData?.SessionNumber || "";
  const displayDate = `${formatDate(webinarDate)} ${formatTime(webinarDate)}`;

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="max-w-[95vw] sm:max-w-lg w-full  sm:mx-auto mx-auto sm:p-6">
        <DialogHeader className="space-y-2 sm:space-y-3">
          <DialogTitle className="text-base sm:text-xl md:text-2xl font-bold bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent animate-pulse leading-tight text-center">
           Webinar: "{title}"
          </DialogTitle>
          <DialogDescription className="space-y-2 sm:space-y-3">
            <div className="text-xs sm:text-sm md:text-base font-medium bg-gradient-to-r from-cyan-300 to-purple-400 bg-clip-text text-transparent text-center">
              Develop tech products without single line of code
            </div>
            <div className="text-xs sm:text-sm text-yellow-400 font-semibold text-center">{displayDate}</div>

            {/* Registration Count */}
            <div className="my-2 sm:my-3">
              <RegistrationCount className="scale-75 sm:scale-100" />
            </div>

            <div className="font-semibold text-xs sm:text-sm md:text-base text-orange-400 text-center"> Starts In:</div>
            <div className="font-mono text-sm sm:text-base md:text-lg bg-gradient-to-r from-red-400 to-orange-500 bg-clip-text text-transparent font-bold">
              <div className="grid grid-cols-4 gap-1 sm:gap-2 text-center">
                <div className="bg-black/20 rounded p-1 sm:p-2">
                  <div className="text-xs sm:text-sm font-bold">{timeLeft.days.toString().padStart(2, '0')}</div>
                  <div className="text-[10px] sm:text-xs text-gray-400">Days</div>
                </div>
                <div className="bg-black/20 rounded p-1 sm:p-2">
                  <div className="text-xs sm:text-sm font-bold">{timeLeft.hours.toString().padStart(2, '0')}</div>
                  <div className="text-[10px] sm:text-xs text-gray-400">Hours</div>
                </div>
                <div className="bg-black/20 rounded p-1 sm:p-2">
                  <div className="text-xs sm:text-sm font-bold">{timeLeft.minutes.toString().padStart(2, '0')}</div>
                  <div className="text-[10px] sm:text-xs text-gray-400">Min</div>
                </div>
                <div className="bg-black/20 rounded p-1 sm:p-2">
                  <div className="text-xs sm:text-sm font-bold">{timeLeft.seconds.toString().padStart(2, '0')}</div>
                  <div className="text-[10px] sm:text-xs text-gray-400">Sec</div>
                </div>
              </div>
            </div>

            <div className="pt-2 sm:pt-3 space-y-2">
              <a
                href="/workshop-registration"
                className="inline-block w-full text-center bg-gradient-to-r from-cyan-400 to-purple-500 text-white font-semibold px-3 sm:px-6 py-2 sm:py-3 rounded-lg shadow-lg hover:from-cyan-500 hover:to-purple-600 hover:shadow-xl hover:scale-105 transition-all duration-300 animate-bounce text-xs sm:text-sm md:text-base"
              >
                🎯 Register for free!
              </a>
              {/* {workshopData?.whatsAppGroupLink && (
                <a
                  href={workshopData.whatsAppGroupLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block w-full text-center bg-gradient-to-r from-green-400 to-blue-500 text-white font-semibold px-3 sm:px-6 py-2 sm:py-3 rounded-lg shadow-lg hover:from-green-500 hover:to-blue-600 hover:shadow-xl hover:scale-105 transition-all duration-300 text-xs sm:text-sm md:text-base"
                >
                  💬 Join WhatsApp Group
                </a>
              )} */}
              <a
                href="/assessment"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block w-full text-center bg-gradient-to-r from-green-400 to-blue-500 text-white font-semibold px-3 sm:px-6 py-2 sm:py-3 rounded-lg shadow-lg hover:from-green-500 hover:to-blue-600 hover:shadow-xl hover:scale-105 transition-all duration-300 text-xs sm:text-sm md:text-base"
              >
                📝 Take Assessment Test
              </a>
            </div>
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}