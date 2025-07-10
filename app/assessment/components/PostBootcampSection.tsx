"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { motion } from "framer-motion"

interface PostBootcampSectionProps {
  onStartTest: () => void
}

export function PostBootcampSection({ onStartTest }: PostBootcampSectionProps) {
  return (
    <section className="py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <Card className="bg-white/5 backdrop-blur-lg border-white/10">
            <CardContent className="p-8">
              <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                <div className="space-y-2">
                  <h2 className="text-2xl font-bold text-white">
                    Post-Bootcamp Assessment:
                  </h2>
                  <p className="text-xl text-gray-300">
                    Your Path Forward Starts Here
                  </p>
                </div>
                
                <div className="text-center space-y-3">
                  <Button 
                    className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 font-medium"
                    onClick={onStartTest}
                  >
                    Start Assessment
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  )
} 