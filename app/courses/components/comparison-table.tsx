"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, X } from "lucide-react"

const comparisonData = [
  {
    feature: "100+ hours of video content",
    nanodegree: true,
    flagship: true,
  },
  {
    feature: "Auto-evaluated quizzes and coding assignments",
    nanodegree: true,
    flagship: true,
  },
  {
    feature: "21-Day No-Code AI Product Builder",
    nanodegree: true,
    flagship: true,
  },
  {
    feature: "90-Day Real-Client Work Experience",
    nanodegree: true,
    flagship: true,
  },
  {
    feature: "Career reports, weekly mentorship, and lifetime platform access",
    nanodegree: true,
    flagship: true,
  },
  {
    feature: "Live sessions by professionals from MAANG",
    nanodegree: false,
    flagship: true,
  },
  {
    feature: "Resume branding + AI-powered portfolio support",
    nanodegree: false,
    flagship: true,
  },
  {
    feature: "Direct referrals to our hiring partners",
    nanodegree: false,
    flagship: true,
  },
  {
    feature: "Technical + behavioral mock interviews",
    nanodegree: false,
    flagship: true,
  },
  {
    feature: "Personal mentorship from product managers",
    nanodegree: false,
    flagship: true,
  },
]

export function ComparisonTable() {
  return (
    <section className="py-8 sm:py-12 md:py-16 lg:py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8 sm:mb-10 md:mb-12 lg:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4 md:mb-6 px-2">
            📊 Compare Programs
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-3xl mx-auto px-2 leading-relaxed">
            See what's included in each program to make the right choice for your career goals.
          </p>
        </div>

        {/* Mobile Card Layout */}
        <div className="block md:hidden space-y-4">
          <div className="grid grid-cols-2 gap-3 mb-6">
            <Card className="bg-gray-900/50 border-gray-700 p-4 text-center" onClick={() => window.location.href = '/nanodegree'}>
              <Badge className="bg-green-400 text-green-900 text-xs mb-2">NANODEGREE</Badge>
              <p className="text-sm text-gray-400">₹4,999</p>
            </Card>
            <Card className="bg-gray-900/50 border-gray-700 p-4 text-center" onClick={() => window.location.href = '/flagship-course'}>
              <Badge className="bg-yellow-400 text-yellow-900 text-xs mb-2">FLAGSHIP</Badge>
              <p className="text-sm text-gray-400">Up to 100% Scholarship</p>
            </Card>
          </div>
          
          {comparisonData.map((item, index) => (
            <Card key={index} className="bg-gray-900/50 border-gray-700">
              <CardContent className="p-4">
                <h3 className="text-sm font-medium mb-3 text-white leading-tight">{item.feature}</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex items-center justify-center">
                    <div className="text-center">
                      {item.nanodegree ? (
                        <CheckCircle className="w-6 h-6 text-green-400 mx-auto mb-1" />
                      ) : (
                        <X className="w-6 h-6 text-red-400 mx-auto mb-1" />
                      )}
                      <p className="text-xs text-gray-400">Nanodegree</p>
                    </div>
                  </div>
                  <div className="flex items-center justify-center">
                    <div className="text-center">
                      {item.flagship ? (
                        <CheckCircle className="w-6 h-6 text-yellow-400 mx-auto mb-1" />
                      ) : (
                        <X className="w-6 h-6 text-red-400 mx-auto mb-1" />
                      )}
                      <p className="text-xs text-gray-400">Flagship</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Desktop Table Layout */}
        <Card className="hidden md:block bg-gray-900/50 border-gray-700 overflow-hidden">
          <CardHeader className="pb-4">
            <CardTitle className="text-xl sm:text-2xl text-center">Feature Comparison</CardTitle>
          </CardHeader>
          <CardContent className="p-0">
            <div className="overflow-x-auto">
              <table className="w-full min-w-[600px]">
                <thead>
                  <tr className="border-b border-gray-700">
                    <th className="text-left p-3 sm:p-4 font-semibold text-sm sm:text-base w-1/2">Feature</th>
                    <th className="text-center p-3 sm:p-4 font-semibold text-sm sm:text-base w-1/4">
                      <div className="flex flex-col items-center gap-1 sm:gap-2">
                        <Badge className="bg-green-400 text-green-900 text-xs">NANODEGREE</Badge>
                        <span className="text-xs sm:text-sm text-gray-400">₹4,999</span>
                      </div>
                    </th>
                    <th className="text-center p-3 sm:p-4 font-semibold text-sm sm:text-base w-1/4">
                      <div className="flex flex-col items-center gap-1 sm:gap-2">
                        <Badge className="bg-yellow-400 text-yellow-900 text-xs">FLAGSHIP</Badge>
                        <span className="text-xs sm:text-sm text-gray-400">Up to 100% Scholarship</span>
                      </div>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonData.map((item, index) => (
                    <tr key={index} className="border-b border-gray-800 hover:bg-gray-800/30 transition-colors">
                      <td className="p-3 sm:p-4 text-sm sm:text-base">{item.feature}</td>
                      <td className="p-3 sm:p-4 text-center">
                        {item.nanodegree ? (
                          <CheckCircle className="w-5 h-5 sm:w-6 sm:h-6 text-green-400 mx-auto" />
                        ) : (
                          <X className="w-5 h-5 sm:w-6 sm:h-6 text-red-400 mx-auto" />
                        )}
                      </td>
                      <td className="p-3 sm:p-4 text-center">
                        {item.flagship ? (
                          <CheckCircle className="w-5 h-5 sm:w-6 sm:h-6 text-yellow-400 mx-auto" />
                        ) : (
                          <X className="w-5 h-5 sm:w-6 sm:h-6 text-red-400 mx-auto" />
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
} 