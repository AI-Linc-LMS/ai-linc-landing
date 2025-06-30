import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Clock, Users, Star } from "lucide-react"

export function CtaSection() {
  return (
    <section className="py-16 md:py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <Card className="bg-gradient-to-br from-purple-900/20 to-pink-900/20 border-purple-400/30 overflow-hidden">
          <CardContent className="p-6 md:p-8 text-center">
            <div className="mb-6 md:mb-8">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 md:mb-6 px-2">
                🚀 Ready to Transform Your Career?
              </h2>
              <p className="text-lg sm:text-xl text-gray-300 mb-6 md:mb-8 px-2">
                Join thousands of students who've already started their journey to success
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6 mb-8 md:mb-10">
              <div className="flex flex-col items-center">
                <Clock className="w-6 h-6 sm:w-8 sm:h-8 text-purple-400 mb-2 sm:mb-3" />
                <span className="text-sm sm:text-base font-semibold">Limited Time</span>
                <span className="text-xs sm:text-sm text-gray-400">Seats filling fast</span>
              </div>
              <div className="flex flex-col items-center">
                <Users className="w-6 h-6 sm:w-8 sm:h-8 text-purple-400 mb-2 sm:mb-3" />
                <span className="text-sm sm:text-base font-semibold">80 Total Seats</span>
                <span className="text-xs sm:text-sm text-gray-400">Both programs combined</span>
              </div>
              <div className="flex flex-col items-center">
                <Star className="w-6 h-6 sm:w-8 sm:h-8 text-purple-400 mb-2 sm:mb-3" />
                <span className="text-sm sm:text-base font-semibold">100% Refundable</span>
                <span className="text-xs sm:text-sm text-gray-400">Within 7 days</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button 
                size="lg" 
                className="w-full sm:w-auto bg-green-600 hover:bg-green-700 text-sm sm:text-base px-6 sm:px-8 py-3"
              >
                Choose Nanodegree (₹4,999)
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="w-full sm:w-auto border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-black text-sm sm:text-base px-6 sm:px-8 py-3"
              >
                Choose Flagship (Scholarship)
              </Button>
            </div>

            <p className="text-xs sm:text-sm text-gray-400 mt-4 sm:mt-6 px-2">
              Questions? Contact our team at <span className="text-purple-400">support@ailinc.com</span>
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  )
} 