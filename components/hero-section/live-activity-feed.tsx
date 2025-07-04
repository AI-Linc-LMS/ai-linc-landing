import React from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { BarChart3, Globe } from "lucide-react"
import { liveActivity } from "./data"
import { getActivityIcon, getActivityColor } from "./utils"

interface LiveActivityFeedProps {
  onWebinarOpen: () => void
}

export function LiveActivityFeed({ onWebinarOpen }: LiveActivityFeedProps) {
  return (
    <Card className="bg-black/40 border-white/10 backdrop-blur-sm">
      <CardContent className="p-4">
        <div className="flex items-center justify-between mb-4">
          <h4 className="text-sm font-medium text-white flex items-center gap-2">
            <BarChart3 className="w-4 h-4 text-[#0BC5EA]" />
            Live Activity Feed
          </h4>
          <Button
            size="sm"
            variant="ghost"
            className="text-[#0BC5EA] hover:bg-[#0BC5EA]/10 h-8 px-3"
            onClick={onWebinarOpen}
          >
            Join Now
          </Button>
        </div>
        <div className="space-y-3 max-h-48 overflow-y-auto">
          {liveActivity.map((activity, index) => {
            const Icon = getActivityIcon(activity.type)
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className="flex items-center gap-3 p-3 bg-white/5 rounded-lg hover:bg-white/10 transition-colors"
              >
                <div className={`p-2 rounded-full bg-white/10 ${getActivityColor(activity.type)}`}>
                  <Icon className="w-4 h-4" />
                </div>
                <div className="flex-1">
                  <div className="text-sm font-medium text-white">
                    {activity.user}
                  </div>
                  <div className="text-xs text-gray-400">
                    {activity.action}
                  </div>
                  {activity.location && (
                    <div className="text-xs text-gray-500 flex items-center gap-1">
                      <Globe className="w-3 h-3" />
                      {activity.location}
                    </div>
                  )}
                </div>
                <div className="text-right">
                  <div className="text-xs text-gray-500">
                    {activity.time}
                  </div>
                  {activity.score && (
                    <div className="text-xs text-green-400 font-medium">
                      {activity.score}
                    </div>
                  )}
                </div>
              </motion.div>
            )
          })}
        </div>
      </CardContent>
    </Card>
  )
} 