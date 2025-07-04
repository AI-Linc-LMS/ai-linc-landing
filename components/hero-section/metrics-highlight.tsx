import React from "react"
import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { keyMetrics } from "./data"

interface MetricsHighlightProps {
  currentMetric: number
}

export function MetricsHighlight({ currentMetric }: MetricsHighlightProps) {
  const metric = keyMetrics[currentMetric]

  return (
    <motion.div
      key={currentMetric}
      initial={{ opacity: 0, scale: 0.8, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="mb-6"
    >
      <Card className={`bg-gradient-to-r ${metric.color}/10 border-[#0BC5EA]/30 backdrop-blur-sm hover:scale-105 transition-all duration-300`}>
        <CardContent className="p-6">
          <div className="flex items-center justify-between">
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-2">
                <div className={`text-4xl font-bold bg-gradient-to-r ${metric.color} bg-clip-text text-transparent text-white`}>
                  {metric.value}
                </div>
                <div className="text-white text-sm font-medium bg-green-400/10 px-2 py-1 rounded-full">
                  {metric.trend}
                </div>
              </div>
              <div className="text-white font-medium mb-1">
                {metric.label}
              </div>
              <div className="text-sm text-white">
                {metric.subtext}
              </div>
            </div>
            <div className={`text-[#0BC5EA] p-3 bg-[#0BC5EA]/10 rounded-full`}>
              {React.createElement(metric.icon, { className: "w-8 h-8" })}
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )
} 