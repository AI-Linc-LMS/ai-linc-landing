import { Video, FileText, Rocket, Users } from "lucide-react"

export const getActivityIcon = (type: string) => {
  switch (type) {
    case 'webinar': return Video
    case 'assessment': return FileText
    case 'deployment': return Rocket
    default: return Users
  }
}

export const getActivityColor = (type: string) => {
  switch (type) {
    case 'webinar': return 'text-blue-400'
    case 'assessment': return 'text-purple-400'
    case 'deployment': return 'text-green-400'
    default: return 'text-gray-400'
  }
} 