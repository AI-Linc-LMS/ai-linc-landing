import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Play, Calendar, Users, Lightbulb, Gift, Clock } from "lucide-react"

const webinarFeatures = [
  { icon: Lightbulb, title: "AI Industry Insights", desc: "Latest trends and opportunities in AI" },
  { icon: Users, title: "Expert Guidance", desc: "Learn from industry professionals" },
  { icon: Gift, title: "Exclusive Resources", desc: "Free AI tools and templates" },
  { icon: Clock, title: "Live Q&A Session", desc: "Get your questions answered directly" }
]

export function WebinarSection() {
  return (
    <section className="py-16 md:py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12 md:mb-16">
          <Badge variant="outline" className="text-cyan-400 border-cyan-400 mb-4">
            <Play className="w-4 h-4 mr-2" />
            Step 1
          </Badge>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 md:mb-6 px-2">
            Attend Our Free AI Career Webinar
          </h2>
          <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto px-4">
            Join our exclusive webinar to discover AI career opportunities, industry insights, and how to get started with AI development.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {webinarFeatures.map((item, index) => (
            <Card key={index} className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 border-gray-700 hover:border-cyan-400/50 transition-all duration-300">
              <CardHeader className="text-center pb-3">
                <item.icon className="w-10 h-10 md:w-12 md:h-12 text-cyan-400 mx-auto mb-3 md:mb-4" />
                <CardTitle className="text-base md:text-lg leading-tight px-2">{item.title}</CardTitle>
              </CardHeader>
              <CardContent className="pt-0">
                <p className="text-gray-300 text-center text-sm md:text-base px-2">{item.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-10 md:mt-12">
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="flex items-center text-cyan-400">
              <Calendar className="w-5 h-5 mr-2" />
              <span className="text-sm md:text-base">Next Session: Every Weekend</span>
            </div>
            <div className="flex items-center text-cyan-400">
              <Clock className="w-5 h-5 mr-2" />
              <span className="text-sm md:text-base">Duration: 90 Minutes</span>
            </div>
          </div>
          <p className="text-base md:text-lg text-gray-300 mb-4 md:mb-6 px-4">
            <span className="text-green-400 font-semibold">Completely Free. No strings attached.</span>
          </p>
          <a href="/workshop-registration">
          <Button  size="lg" className="bg-gradient-to-r from-cyan-400 to-blue-500 hover:from-cyan-500 hover:to-blue-600 text-sm sm:text-base px-6 sm:px-8">
            <Play className="w-5 h-5 mr-2" />
            Register for Free Webinar
          </Button>
          </a>
        </div>
      </div>
    </section>
  )
} 