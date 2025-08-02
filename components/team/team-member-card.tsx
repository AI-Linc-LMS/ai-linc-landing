import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"

interface TeamMemberCardProps {
  name: string
  role: string
  description: string
  imageSrc: string
  borderColor: string
  hoverColor: string
}

export function TeamMemberCard({ 
  name, 
  role, 
  description, 
  imageSrc, 
  borderColor, 
  hoverColor 
}: TeamMemberCardProps) {
  return (
    <Card className={`bg-background/50 border-${borderColor}/20 transform transition-all duration-300 hover:scale-105 hover:shadow-lg 
      relative overflow-hidden group
      before:absolute before:inset-0 before:bg-${hoverColor}/10 before:opacity-0 hover:before:opacity-100 
      before:transition-opacity before:duration-300
      after:absolute after:inset-[-50%] after:bg-[radial-gradient(closest-side,${hoverColor}_0%,transparent_100%)] 
      after:opacity-0 hover:after:opacity-20 after:transition-opacity after:duration-300 after:z-0`}>
      <CardContent className="p-6 flex flex-col items-center text-center relative z-10">
        <div className={`w-24 h-24 mb-4 rounded-full overflow-hidden border-4 border-${borderColor}/30`}>
          <Image 
            src={imageSrc} 
            alt={name} 
            width={96} 
            height={96} 
            className="object-cover w-full h-full"
          />
        </div>
        <h3 className="text-lg font-semibold text-white mb-2">{name}</h3>
        <p className="text-foreground/60 mb-2">{role}</p>
        <p className="text-foreground/60 text-sm text-center">
          {description}
        </p>
      </CardContent>
    </Card>
  )
} 