import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Zap, ArrowRight } from "lucide-react"

export function FinalCtaSection() {
  return (
    <section className="py-16 md:py-20 px-4 bg-gradient-to-br from-gray-900 via-purple-900/20 to-gray-900">
      <div className="max-w-4xl mx-auto text-center">
        <Card className="bg-gradient-to-br from-purple-900/30 to-pink-900/30 border-purple-400/30 overflow-hidden">
          <CardContent className="p-6 md:p-8">
            <div className="mb-6 md:mb-8">
              <Zap className="w-12 h-12 sm:w-16 sm:h-16 text-yellow-400 mx-auto mb-4 md:mb-6" />
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 md:mb-6 px-2">
                ⚡ Don't Wait. Your Career Won't.
              </h2>
              <p className="text-lg sm:text-xl md:text-2xl text-gray-300 mb-6 md:mb-8 px-2">
                While you're thinking, others are building. While others are building, we're placing them.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6 mb-8 md:mb-10 text-left">
              <div className="bg-gray-800/50 p-4 md:p-6 rounded-lg">
                <h3 className="text-lg sm:text-xl font-bold text-green-400 mb-2 sm:mb-3">✅ If you join today:</h3>
                <ul className="space-y-1 sm:space-y-2 text-sm sm:text-base">
                  <li>• Start building immediately</li>
                  <li>• Get mentorship from day 1</li>
                  <li>• Secure your seat (limited spots)</li>
                  <li>• Full refund guarantee</li>
                </ul>
              </div>
              <div className="bg-gray-800/50 p-4 md:p-6 rounded-lg">
                <h3 className="text-lg sm:text-xl font-bold text-red-400 mb-2 sm:mb-3">❌ If you wait:</h3>
                <ul className="space-y-1 sm:space-y-2 text-sm sm:text-base">
                  <li>• Seats might fill up</li>
                  <li>• Another month of status quo</li>
                  <li>• Competition gets ahead</li>
                  <li>• Opportunity cost increases</li>
                </ul>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Button 
                  size="lg" 
                  className="w-full sm:w-auto bg-green-600 hover:bg-green-700 text-sm sm:text-base md:text-lg px-6 sm:px-8 py-3 sm:py-4"
                >
                  Secure Nanodegree Seat Now
                  <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5" />
                </Button>
                <Button 
                  size="lg" 
                  className="w-full sm:w-auto bg-yellow-600 hover:bg-yellow-700 text-sm sm:text-base md:text-lg px-6 sm:px-8 py-3 sm:py-4"
                >
                  Apply for Flagship Program
                  <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5" />
                </Button>
              </div>
              <p className="text-xs sm:text-sm text-gray-400 px-2">
                💡 <strong>Risk-free decision:</strong> Full refund within 7 days if you're not satisfied
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
} 