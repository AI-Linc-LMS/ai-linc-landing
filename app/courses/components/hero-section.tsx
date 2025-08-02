import { Button } from "@/components/ui/button"
import { Trophy, ArrowRight } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative pt-20 md:pt-32 pb-16  px-4">
      <div className="max-w-6xl mx-auto text-center">
        <div className="flex flex-col sm:flex-row items-center justify-center mb-6">
          {/* <Trophy className="w-6 h-6 sm:w-8 sm:h-8 text-yellow-400 mb-2 sm:mb-0 sm:mr-3" /> */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent leading-tight">
            Programs at AI Linc
          </h1>
        </div>
        <p className="text-lg sm:text-xl md:text-2xl text-gray-300 mb-6 md:mb-8 max-w-4xl mx-auto px-2">
          Your Journey from Aspiration to AI Career Starts Here
        </p>
        {/* <Button 
          size="lg" 
          className="bg-gradient-to-r from-cyan-400 to-purple-500 hover:from-cyan-500 hover:to-purple-600 text-white font-semibold px-6 sm:px-8 py-3 rounded-full text-sm sm:text-base transition-all duration-300 ease-in-out transform hover:scale-105"
          onClick={() => {
            const nextSection = document.querySelector('section:nth-of-type(2)');
            nextSection?.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }}
        >
          Start Your Journey
          <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5 transition-transform duration-200 group-hover:translate-x-1" />
        </Button> */}
      </div>
    </section>
  )
} 