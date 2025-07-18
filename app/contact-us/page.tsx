import Link from "next/link"
import Image from "next/image"
import { ArrowLeft, Mail, Phone, MapPin, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function ContactUsPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-12">
        {/* Back button */}
        <div className="mb-8">
          <Button variant="ghost" asChild className="hover:bg-[#0BC5EA]/10 hover:text-[#0BC5EA]">
            <Link href="/" className="flex items-center gap-2">
              <ArrowLeft className="size-4" />
              Back to Home
            </Link>
          </Button>
        </div>

        {/* Header */}
        <div className="mb-12 text-center">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-[#0BC5EA] to-[#6B46C1] bg-clip-text text-transparent mb-4">
            Contact Us
          </h1>
          <p className="text-foreground/60 text-lg max-w-2xl mx-auto">
            Have questions about our AI LINC program? We're here to help! Reach out to us through any of the channels below.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-semibold text-white mb-6">Get in Touch</h2>
              <div className="space-y-6">
                <Card className="bg-background/50 border-[#0BC5EA]/20">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="p-3 bg-[#0BC5EA]/10 rounded-lg">
                        <Mail className="size-6 text-[#0BC5EA]" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-white mb-2">Email Support</h3>
                        <p className="text-foreground/60 mb-2">For general inquiries and support</p>
                        <Link href="mailto:communications@ailinc.com" className="text-[#0BC5EA] hover:underline">
                          communications@ailinc.com
                        </Link>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-background/50 border-[#0BC5EA]/20">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="p-3 bg-[#0BC5EA]/10 rounded-lg">
                        <Phone className="size-6 text-[#0BC5EA]" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-white mb-2">Phone Support</h3>
                        <p className="text-foreground/60 mb-2">Speak directly with our team</p>
                        <Link href="tel:+919693941136" className="text-[#0BC5EA] hover:underline">
                          +91 96939 41136
                        </Link>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-background/50 border-[#0BC5EA]/20">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="p-3 bg-[#0BC5EA]/10 rounded-lg">
                        <Clock className="size-6 text-[#0BC5EA]" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-white mb-2">Business Hours</h3>
                        <div className="text-foreground/60 space-y-1">
                          <p>Monday - Friday: 9:00 AM - 6:00 PM IST</p>
                          <p>Saturday: 10:00 AM - 4:00 PM IST</p>
                          <p>Sunday: Closed</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-background/50 border-[#0BC5EA]/20">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="p-3 bg-[#0BC5EA]/10 rounded-lg">
                        <MapPin className="size-6 text-[#0BC5EA]" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-white mb-2">Office Address</h3>
                        <div className="text-foreground/60">
                          <p>Leapify Technologies Private Limited</p>
                          <p>Flat No 102, Raghu Ram Enclave</p>
                          <p>Silpa Park, Kondapur</p>
                          <p>Hyderabad, Rangareddy</p>
                          <p>Telangana, 500084</p>
                          <p>India</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* FAQ Section */}
            <div>
              <h2 className="text-2xl font-semibold text-white mb-6">Frequently Asked Questions</h2>
              <div className="space-y-4">
                <Card className="bg-background/50 border-[#0BC5EA]/20">
                  <CardHeader>
                    <CardTitle className="text-lg text-white">How long does it take to get a response?</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-foreground/60">We typically respond to all inquiries within 24-48 hours during business days.</p>
                  </CardContent>
                </Card>

                <Card className="bg-background/50 border-[#0BC5EA]/20">
                  <CardHeader>
                    <CardTitle className="text-lg text-white">Can I schedule a call with an advisor?</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-foreground/60">Yes! Contact us to schedule a personalized consultation about the AI LINC program.</p>
                  </CardContent>
                </Card>

                <Card className="bg-background/50 border-[#0BC5EA]/20">
                  <CardHeader>
                    <CardTitle className="text-lg text-white">Do you offer technical support?</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-foreground/60">Absolutely! Our technical support team is available to help with any platform or access issues.</p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <Card className="bg-background/50 border-[#0BC5EA]/20">
              <CardHeader>
                <CardTitle className="text-2xl text-white">Send us a Message</CardTitle>
                <CardDescription className="text-foreground/60">
                  Fill out the form below and we'll get back to you as soon as possible.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-white mb-2">
                      First Name *
                    </label>
                    <Input
                      id="firstName"
                      type="text"
                      placeholder="Your first name"
                      className="bg-background/50 border-[#0BC5EA]/30 focus:border-[#0BC5EA] focus:ring-[#0BC5EA]/20"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-white mb-2">
                      Last Name *
                    </label>
                    <Input
                      id="lastName"
                      type="text"
                      placeholder="Your last name"
                      className="bg-background/50 border-[#0BC5EA]/30 focus:border-[#0BC5EA] focus:ring-[#0BC5EA]/20"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-white mb-2">
                    Email Address *
                  </label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="your.email@example.com"
                    className="bg-background/50 border-[#0BC5EA]/30 focus:border-[#0BC5EA] focus:ring-[#0BC5EA]/20"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-white mb-2">
                    Phone Number
                  </label>
                  <Input
                    id="phone"
                    type="tel"
                    placeholder="+91 123 456 7890"
                    className="bg-background/50 border-[#0BC5EA]/30 focus:border-[#0BC5EA] focus:ring-[#0BC5EA]/20"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-white mb-2">
                    Subject *
                  </label>
                  <Input
                    id="subject"
                    type="text"
                    placeholder="What's this about?"
                    className="bg-background/50 border-[#0BC5EA]/30 focus:border-[#0BC5EA] focus:ring-[#0BC5EA]/20"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-white mb-2">
                    Message *
                  </label>
                  <Textarea
                    id="message"
                    placeholder="Tell us how we can help you..."
                    rows={5}
                    className="bg-background/50 border-[#0BC5EA]/30 focus:border-[#0BC5EA] focus:ring-[#0BC5EA]/20"
                    required
                  />
                </div>

                <Button className="w-full bg-[#0BC5EA] hover:bg-[#0BC5EA]/90 text-white">
                  Send Message
                </Button>

                <p className="text-sm text-foreground/60 text-center">
                  * Required fields. We'll never share your information with third parties.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Team Section */}
        <div className="mt-16">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-semibold text-white mb-8 text-center">Our Leadership Team</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card className="bg-background/50 border-[#0BC5EA]/20 transform transition-all duration-300 hover:scale-105 hover:shadow-lg 
                relative overflow-hidden group
                before:absolute before:inset-0 before:bg-[#0BC5EA]/10 before:opacity-0 hover:before:opacity-100 
                before:transition-opacity before:duration-300
                after:absolute after:inset-[-50%] after:bg-[radial-gradient(closest-side,#0BC5EA_0%,transparent_100%)] 
                after:opacity-0 hover:after:opacity-20 after:transition-opacity after:duration-300 after:z-0">
                <CardContent className="p-6 flex flex-col items-center text-center relative z-10">
                  <div className="w-24 h-24 mb-4 rounded-full overflow-hidden border-4 border-[#0BC5EA]/30">
                    <Image 
                      src="/shubham_lal.jpg" 
                      alt="Shubham Lal" 
                      width={96} 
                      height={96} 
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">Shubham </h3>
                  <p className="text-foreground/60 mb-2"> Director</p>
                  <p className="text-foreground/60 text-sm text-center">
                    Driving AI LINC's vision and strategic growth with innovative leadership.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-background/50 border-[#6B46C1]/20 transform transition-all duration-300 hover:scale-105 hover:shadow-lg 
                relative overflow-hidden group
                before:absolute before:inset-0 before:bg-[#6B46C1]/10 before:opacity-0 hover:before:opacity-100 
                before:transition-opacity before:duration-300
                after:absolute after:inset-[-50%] after:bg-[radial-gradient(closest-side,#6B46C1_0%,transparent_100%)] 
                after:opacity-0 hover:after:opacity-20 after:transition-opacity after:duration-300 after:z-0">
                <CardContent className="p-6 flex flex-col items-center text-center relative z-10">
                  <div className="w-24 h-24 mb-4 rounded-full overflow-hidden border-4 border-[#6B46C1]/30">
                    <Image 
                      src="/poorva_image.jpg" 
                      alt="Poorva Gupta" 
                      width={96} 
                      height={96} 
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">Poorva</h3>
                  <p className="text-foreground/60 mb-2">Director</p>
                  <p className="text-foreground/60 text-sm text-center">
                    Pioneering innovative solutions and driving AI LINC's technological advancement.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-background/50 border-[#48BB78]/20 transform transition-all duration-300 hover:scale-105 hover:shadow-lg 
                relative overflow-hidden group
                before:absolute before:inset-0 before:bg-[#48BB78]/10 before:opacity-0 hover:before:opacity-100 
                before:transition-opacity before:duration-300
                after:absolute after:inset-[-50%] after:bg-[radial-gradient(closest-side,#48BB78_0%,transparent_100%)] 
                after:opacity-0 hover:after:opacity-20 after:transition-opacity after:duration-300 after:z-0">
                <CardContent className="p-6 flex flex-col items-center text-center relative z-10">
                  <div className="w-24 h-24 mb-4 rounded-full overflow-hidden border-4 border-[#48BB78]/30">
                    <Image 
                      src="/sandeep.jpeg" 
                      alt="Sandeep Dubey" 
                      width={96} 
                      height={96} 
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">Sandeep</h3>
                  <p className="text-foreground/60 mb-2">Director</p>
                  <p className="text-foreground/60 text-sm text-center">
                    Guiding AI LINC's strategic partnerships and business development.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-background/50 border-[#ED64A6]/20 transform transition-all duration-300 hover:scale-105 hover:shadow-lg 
                relative overflow-hidden group
                before:absolute before:inset-0 before:bg-[#ED64A6]/10 before:opacity-0 hover:before:opacity-100 
                before:transition-opacity before:duration-300
                after:absolute after:inset-[-50%] after:bg-[radial-gradient(closest-side,#ED64A6_0%,transparent_100%)] 
                after:opacity-0 hover:after:opacity-20 after:transition-opacity after:duration-300 after:z-0">
                <CardContent className="p-6 flex flex-col items-center text-center relative z-10">
                  <div className="w-24 h-24 mb-4 rounded-full overflow-hidden border-4 border-[#ED64A6]/30">
                    <Image 
                      src="/noorman.jpeg" 
                      alt="Noorman Mulla" 
                      width={96} 
                      height={96} 
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">Noorman</h3>
                  <p className="text-foreground/60 mb-2">Chief Marketing Officer</p>
                  <p className="text-foreground/60 text-sm text-center">
                    Crafting AI LINC's brand narrative and market positioning.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="mt-16 pt-8 border-t border-[#0BC5EA]/20">
          <div className="bg-background/30 border border-[#0BC5EA]/20 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-white mb-3">Disclaimer</h3>
            <p className="text-foreground/60 text-sm leading-relaxed">
              The above content is created at Leapify Technologies Private Limited's sole discretion. Razorpay shall not be liable for any content provided here and shall not be responsible for any claims and liability that may arise due to merchant's non-adherence to it.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}