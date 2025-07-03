import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { CheckCircle, Star, ArrowRight } from "lucide-react"

interface ModalColorScheme {
  bg: string
  border: string
  iconBg: string
  textColor: string
  buttonClass: string
}

interface ModalOptionProps {
  icon: any
  title: string
  subtitle: string
  badge: { icon: any, text: string }
  features: string[]
  buttonText: string
  onClick: () => void
  colorScheme: ModalColorScheme
  variant?: "default" | "outline"
}

export function ModalOption({ 
  icon: Icon, 
  title, 
  subtitle, 
  badge, 
  features, 
  buttonText, 
  onClick, 
  colorScheme,
  variant = "default"
}: ModalOptionProps) {
  return (
    <div className="group relative">
      <div className={`absolute inset-0 ${colorScheme.bg} rounded-xl blur-sm group-hover:blur-none transition-all duration-300`}></div>
      <Card className={`relative bg-gradient-to-br from-slate-800/80 to-slate-900/80 ${colorScheme.border} hover:border-opacity-75 transition-all duration-300 group-hover:scale-[1.02] group-hover:shadow-xl`}>
        <CardContent className="p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center space-x-3">
              <div className={`p-2 ${colorScheme.iconBg} rounded-lg`}>
                <Icon className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className={`text-lg font-semibold ${colorScheme.textColor}`}>{title}</h3>
                <p className="text-sm text-slate-400">{subtitle}</p>
              </div>
            </div>
            <Badge className={`${colorScheme.textColor.replace('text-', 'bg-')}/20 ${colorScheme.textColor} ${colorScheme.border}`}>
              <badge.icon className="w-3 h-3 mr-1" />
              {badge.text}
            </Badge>
          </div>
          
          <div className="space-y-2 mb-4">
            {features.map((feature, index) => (
              <div key={index} className="flex items-center text-sm text-slate-300">
                {variant === "outline" ? (
                  <Star className="w-4 h-4 text-yellow-400 mr-2" />
                ) : (
                  <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                )}
                {feature}
              </div>
            ))}
          </div>

          <Button
            variant={variant}
            className={`w-full ${colorScheme.buttonClass} font-semibold py-3 px-6 rounded-lg transition-all duration-300 group`}
            onClick={onClick}
          >
            {buttonText}
            <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
        </CardContent>
      </Card>
    </div>
  )
} 