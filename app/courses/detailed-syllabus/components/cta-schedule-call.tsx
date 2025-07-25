"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Users, Calendar, User, Mail, Phone, Clock, MessageCircle } from "lucide-react"

export function CtaScheduleCall() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    preferredTime: "",
    message: "",
    course: "Product Development Using Agentic AI"
  })

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here (API call, etc.)
    console.log("Form submitted:", formData)
    setIsModalOpen(false)
    setFormData({
      name: "",
      email: "",
      phone: "",
      preferredTime: "",
      message: "",
      course: "Product Development Using Agentic AI"
    })
  }

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }))
  }

  return (
    <div className="text-center max-w-4xl mx-auto my-8 px-2 sm:px-4">
      <Card className="bg-gradient-to-r from-cyan-500/10 to-purple-500/10 border-cyan-500/20 p-4 sm:p-8">
        <CardContent className="p-0">
          <h3 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4">Ready to Start Your AI Journey?</h3>
          <p className="text-base sm:text-xl text-gray-300 mb-4 sm:mb-6">
            Join thousands of students who have transformed their careers with our comprehensive AI development program
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center w-full">
            <Button
              size="lg"
              className="w-full sm:w-auto bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600"
              onClick={() => window.location.href = '/assessment'}
            >
              <Users className="w-5 h-5 mr-2" />
              Enroll Now
            </Button>
            <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
              <DialogTrigger asChild>
                <Button
                  size="lg"
                  variant="outline"
                  className="w-full sm:w-auto border-cyan-500/50 text-cyan-400 hover:bg-cyan-500/10"
                >
                  <Calendar className="w-5 h-5 mr-2" />
                  Schedule a Call
                </Button>
              </DialogTrigger>
              <DialogContent className="w-[95vw] max-w-[95vw] sm:max-w-[600px] bg-gray-900 border-gray-700 px-2 sm:px-6 py-4 sm:py-8">
                <DialogHeader>
                  <DialogTitle className="text-xl sm:text-2xl font-bold text-center mb-2">
                    Schedule a Call with Our Team
                  </DialogTitle>
                  <p className="text-gray-400 text-center text-sm sm:text-base">
                    Get personalized guidance about our AI development program
                  </p>
                </DialogHeader>
                <form onSubmit={handleFormSubmit} className="space-y-4 sm:space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name" className="text-sm font-medium flex items-center">
                        <User className="w-4 h-4 mr-2" />
                        Full Name *
                      </Label>
                      <Input
                        id="name"
                        type="text"
                        placeholder="Enter your full name"
                        value={formData.name}
                        onChange={(e) => handleInputChange('name', e.target.value)}
                        className="bg-gray-800 border-gray-600 text-white"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-sm font-medium flex items-center">
                        <Mail className="w-4 h-4 mr-2" />
                        Email Address *
                      </Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="Enter your email"
                        value={formData.email}
                        onChange={(e) => handleInputChange('email', e.target.value)}
                        className="bg-gray-800 border-gray-600 text-white"
                        required
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="phone" className="text-sm font-medium flex items-center">
                        <Phone className="w-4 h-4 mr-2" />
                        Phone Number *
                      </Label>
                      <Input
                        id="phone"
                        type="tel"
                        placeholder="Enter your phone number"
                        value={formData.phone}
                        onChange={(e) => handleInputChange('phone', e.target.value)}
                        className="bg-gray-800 border-gray-600 text-white"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="preferredTime" className="text-sm font-medium flex items-center">
                        <Clock className="w-4 h-4 mr-2" />
                        Preferred Time *
                      </Label>
                      <Select value={formData.preferredTime} onValueChange={(value) => handleInputChange('preferredTime', value)}>
                        <SelectTrigger className="bg-gray-800 border-gray-600 text-white">
                          <SelectValue placeholder="Select preferred time" />
                        </SelectTrigger>
                        <SelectContent className="bg-gray-800 border-gray-600">
                          <SelectItem value="morning">Morning (9 AM - 12 PM)</SelectItem>
                          <SelectItem value="afternoon">Afternoon (12 PM - 5 PM)</SelectItem>
                          <SelectItem value="evening">Evening (5 PM - 8 PM)</SelectItem>
                          <SelectItem value="flexible">Flexible</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message" className="text-sm font-medium flex items-center">
                      <MessageCircle className="w-4 h-4 mr-2" />
                      Message (Optional)
                    </Label>
                    <Textarea
                      id="message"
                      placeholder="Tell us about your background and what you'd like to discuss..."
                      value={formData.message}
                      onChange={(e) => handleInputChange('message', e.target.value)}
                      className="bg-gray-800 border-gray-600 text-white min-h-[100px]"
                      rows={4}
                    />
                  </div>

                  <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 pt-2 sm:pt-4">
                    <Button
                      type="submit"
                      className="flex-1 w-full sm:w-auto bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600"
                    >
                      <Calendar className="w-4 h-4 mr-2" />
                      Schedule Call
                    </Button>
                    <Button
                      type="button"
                      variant="outline"
                      onClick={() => setIsModalOpen(false)}
                      className="flex-1 w-full sm:w-auto border-gray-600 text-gray-300 hover:bg-gray-700"
                    >
                      Cancel
                    </Button>
                  </div>
                </form>
              </DialogContent>
            </Dialog>
          </div>
        </CardContent>
      </Card>
    </div>
  )
} 