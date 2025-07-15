import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"

interface ColorScheme {
  gradient: string
  border: string
  badge: string
  badgeText: string
  accent: string
  button: string
  icon: any
}

interface ProgramCardProps {
  type: string
  title: string
  description: string
  features: string[]
  price: string
  booking: string
  seats: string
  onSelect: () => void
  colorScheme: ColorScheme
}

export function ProgramCard({
  type,
  title,
  description,
  features,
  price,
  booking,
  seats,
  onSelect,
  colorScheme
}: ProgramCardProps) {
  return (
    <Card className={`${colorScheme.gradient} ${colorScheme.border} relative overflow-hidden flex flex-col h-full`}>
      <div className={`absolute top-0 left-0 w-full h-2 bg-gradient-to-r ${colorScheme.accent}`}></div>
      <CardHeader className="pb-4">
        <div className="flex flex-col sm:flex-row items-center sm:items-start justify-between mb-4 gap-2">
          <Badge className={`${colorScheme.badge} ${colorScheme.badgeText} text-xs sm:text-sm text-white`}>{type}</Badge>
          <Badge variant="outline" className={`${colorScheme.badgeText} ${colorScheme.border} text-xs sm:text-sm`}>{seats}</Badge>
        </div>
        <CardTitle className="text-xl sm:text-2xl mb-2">{title}</CardTitle>
        <CardDescription className="text-base sm:text-lg">{description}</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4 md:space-y-6 flex flex-col flex-1">
        <div className="space-y-2 md:space-y-3 flex-1">
          {type === "🟡 FLAGSHIP" && (
            <p className={`text-xs sm:text-sm ${colorScheme.badgeText} font-semibold`}></p>
          )}
          {features.map((feature, index) => (
            <div key={index} className="flex items-start">
              <colorScheme.icon className={`w-4 h-4 sm:w-5 sm:h-5 ${colorScheme.badgeText} mr-2 sm:mr-3 mt-0.5 flex-shrink-0`} />
              <span className="text-sm sm:text-base">{feature}</span>
            </div>
          ))}
        </div>
        <div className="mt-auto">
          <Separator className="bg-gray-700 mb-4" />
          <div className="space-y-2 mb-4">
            <div className="flex justify-between items-center">
              <span className="text-base sm:text-lg font-semibold">Price:</span>
              <span className={`text-xl sm:text-2xl font-bold ${colorScheme.badgeText}`}>{price}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm sm:text-base">Booking Amount:</span>
              <span className={`text-sm sm:text-lg ${colorScheme.badgeText}`}>{booking}</span>
            </div>
            {type === "🟡 FLAGSHIP" && (
              <p className="text-xs sm:text-sm text-gray-400">(based on your assessment)</p>
            )}
          </div>
          <Button className={`w-full ${colorScheme.button} text-sm sm:text-base py-2 sm:py-3`} onClick={onSelect}>
            {type === "🟢 NANODEGREE" ? "Choose Nanodegree" : "Choose Flagship"}
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}