"use client"

import { motion } from "framer-motion"
import { Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"

export function PricingSection() {
  const features = [
    "21-day AI & Prompt Engineering Foundations",
    "90-day Guided Work Experience",
    "1-on-1 Mentorship Sessions",
    "Project Portfolio Development",
    "Career Support & Job Placement",
    "Lifetime Community Access",
    "AI Tools & Resources",
    "Certification Upon Completion",
  ]

  const applicationSteps = [
    { step: "Apply", description: "Submit your application" },
    { step: "Interview", description: "Brief screening call" },
    { step: "Enroll", description: "Secure your spot" },
    { step: "Start", description: "Begin your AI journey" },
  ]

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  }

  return (
    <section id="pricing" className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-white to-[#0BC5EA] bg-clip-text text-transparent">
            Pricing & Application
          </h2>
          <p className="text-xl text-foreground/80 max-w-2xl mx-auto">
            Invest in your future with our comprehensive AI skills program.
          </p>
        </motion.div>

        <Tabs defaultValue="full" className="mb-12">
          <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 mb-8">
            <TabsTrigger value="full">Full Payment</TabsTrigger>
            <TabsTrigger value="installment">Installment Plan</TabsTrigger>
          </TabsList>
          <TabsContent value="full">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <Card className="bg-gradient-to-b from-card/50 to-background/80 backdrop-blur-sm border-[#0BC5EA]/30 rounded-xl shadow-[0_0_30px_rgba(11,197,234,0.1)] relative overflow-hidden">
                  <div className="absolute top-0 right-0 size-64 bg-gradient-to-bl from-[#0BC5EA]/10 to-transparent rounded-bl-full"></div>
                  <div className="absolute bottom-0 left-0 size-64 bg-gradient-to-tr from-[#6B46C1]/10 to-transparent rounded-tr-full"></div>

                  <CardHeader>
                    <Badge variant="outline" className="w-fit bg-[#0BC5EA]/20 text-[#0BC5EA] border-[#0BC5EA]/30 mb-2">
                      Premium Program
                    </Badge>
                    <CardTitle className="text-3xl font-bold text-white">AI LINC 111-Day Program</CardTitle>
                    <div className="flex items-baseline">
                      <span className="text-4xl font-bold text-white">₹1,20,000</span>
                      {/* <span className="text-foreground/80 ml-2">USD</span> */}
                    </div>
                    <CardDescription className="text-foreground/80">
                      Flexible payment options available. Income share agreements for qualified applicants.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <motion.div
                      variants={container}
                      initial="hidden"
                      whileInView="show"
                      viewport={{ once: true }}
                      className="space-y-4"
                    >
                      {features.map((feature, index) => (
                        <motion.div key={index} variants={item} className="flex items-start">
                          <div className="size-5 rounded-full bg-[#0BC5EA]/20 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                            <Check className="size-3 text-[#0BC5EA]" />
                          </div>
                          <span className="text-foreground/80">{feature}</span>
                        </motion.div>
                      ))}
                    </motion.div>
                  </CardContent>
                  <CardFooter className="flex flex-col">
                    <Button className="w-full bg-gradient-to-r from-[#0BC5EA] to-[#6B46C1] hover:opacity-90 text-white font-medium py-6 text-lg rounded-md transition-all duration-300 shadow-[0_0_20px_rgba(11,197,234,0.5)] hover:shadow-[0_0_30px_rgba(11,197,234,0.7)]">
                      Apply Now - Limited Spots
                    </Button>
                    <p className="text-center text-foreground/60 text-sm mt-4">Next cohort starts in 10 June</p>
                  </CardFooter>
                </Card>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <h3 className="text-2xl font-bold mb-6 text-white">Application Process</h3>
                <div className="space-y-6 mb-8">
                  {applicationSteps.map((step, index) => (
                    <div
                      key={index}
                      className="flex items-start bg-card/50 backdrop-blur-sm border-[#0BC5EA]/20 rounded-lg p-4 relative"
                    >
                      <div className="size-8 rounded-full bg-[#0BC5EA]/20 flex items-center justify-center mr-4 flex-shrink-0">
                        <span className="text-[#0BC5EA] font-bold">{index + 1}</span>
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-white mb-1">{step.step}</h4>
                        <p className="text-foreground/80 text-sm">{step.description}</p>
                      </div>
                      {index < applicationSteps.length - 1 && (
                        <div className="absolute top-12 left-4 h-10 w-0.5 bg-[#0BC5EA]/20"></div>
                      )}
                    </div>
                  ))}
                </div>

                <Card className="bg-card/50 backdrop-blur-sm border-[#6B46C1]/20 rounded-xl">
                  <CardHeader>
                    <CardTitle className="text-xl font-bold">Our Guarantee</CardTitle>
                    <CardDescription className="text-foreground/80">
                      If you don't secure a job within 6 months of completing the program, we'll refund your tuition.
                      We're that confident in our program's effectiveness.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center">
                      <div className="size-10 rounded-full bg-[#6B46C1]/20 flex items-center justify-center mr-3">
                        <div className="size-5 bg-[#6B46C1]/50 rounded-full"></div>
                      </div>
                      <div>
                        <div className="font-semibold text-white">Need more information?</div>
                        <div className="text-[#6B46C1]">Schedule a free consultation call</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </TabsContent>
          <TabsContent value="installment">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <Card className="bg-gradient-to-b from-card/50 to-background/80 backdrop-blur-sm border-[#0BC5EA]/30 rounded-xl shadow-[0_0_30px_rgba(11,197,234,0.1)] relative overflow-hidden">
                  <div className="absolute top-0 right-0 size-64 bg-gradient-to-bl from-[#0BC5EA]/10 to-transparent rounded-bl-full"></div>
                  <div className="absolute bottom-0 left-0 size-64 bg-gradient-to-tr from-[#6B46C1]/10 to-transparent rounded-tr-full"></div>

                  <CardHeader>
                    <Badge variant="outline" className="w-fit bg-[#0BC5EA]/20 text-[#0BC5EA] border-[#0BC5EA]/30 mb-2">
                      Installment Plan
                    </Badge>
                    <CardTitle className="text-3xl font-bold text-white">AI LINC 111-Day Program</CardTitle>
                    <div className="flex items-baseline">
                      <span className="text-4xl font-bold text-white">₹46,667</span>
                      <span className="text-foreground/80 ml-2">INR / month</span>
                    </div>
                    <CardDescription className="text-foreground/80">
                      3 monthly payments. Total cost: ₹1,40,000. Save ₹30,000 with full payment.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <motion.div
                      variants={container}
                      initial="hidden"
                      whileInView="show"
                      viewport={{ once: true }}
                      className="space-y-4"
                    >
                      {features.map((feature, index) => (
                        <motion.div key={index} variants={item} className="flex items-start">
                          <div className="size-5 rounded-full bg-[#0BC5EA]/20 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                            <Check className="size-3 text-[#0BC5EA]" />
                          </div>
                          <span className="text-foreground/80">{feature}</span>
                        </motion.div>
                      ))}
                    </motion.div>
                  </CardContent>
                  <CardFooter className="flex flex-col">
                    <Button className="w-full bg-gradient-to-r from-[#0BC5EA] to-[#6B46C1] hover:opacity-90 text-white font-medium py-6 text-lg rounded-md transition-all duration-300 shadow-[0_0_20px_rgba(11,197,234,0.5)] hover:shadow-[0_0_30px_rgba(11,197,234,0.7)]">
                      Apply Now - Limited Spots
                    </Button>
                    <p className="text-center text-foreground/60 text-sm mt-4">Next cohort starts in 7 days</p>
                  </CardFooter>
                </Card>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <h3 className="text-2xl font-bold mb-6 text-white">Flexible Payment Options</h3>
                <div className="space-y-6 mb-8">
                  <Card className="bg-card/50 backdrop-blur-sm border-[#0BC5EA]/20 rounded-lg">
                    <CardContent className="p-4">
                      <h4 className="text-lg font-semibold text-white mb-2">Income Share Agreement</h4>
                      <p className="text-foreground/80 text-sm mb-2">
                        Pay nothing upfront. Share a percentage of your income after you get hired.
                      </p>
                      <Badge variant="outline" className="bg-[#0BC5EA]/10 text-[#0BC5EA] border-[#0BC5EA]/30">
                        15% of income for 24 months
                      </Badge>
                    </CardContent>
                  </Card>

                  <Card className="bg-card/50 backdrop-blur-sm border-[#0BC5EA]/20 rounded-lg">
                    <CardContent className="p-4">
                      <h4 className="text-lg font-semibold text-white mb-2">Employer Sponsorship</h4>
                      <p className="text-foreground/80 text-sm mb-2">
                        Many employers will sponsor your education. We can help with the paperwork.
                      </p>
                      <Badge variant="outline" className="bg-[#0BC5EA]/10 text-[#0BC5EA] border-[#0BC5EA]/30">
                        Ask about our corporate rates
                      </Badge>
                    </CardContent>
                  </Card>

                  <Card className="bg-card/50 backdrop-blur-sm border-[#0BC5EA]/20 rounded-lg">
                    <CardContent className="p-4">
                      <h4 className="text-lg font-semibold text-white mb-2">Scholarships</h4>
                      <p className="text-foreground/80 text-sm mb-2">
                        Limited scholarships available for underrepresented groups in tech.
                      </p>
                      <Badge variant="outline" className="bg-[#0BC5EA]/10 text-[#0BC5EA] border-[#0BC5EA]/30">
                        Up to 50% tuition coverage
                      </Badge>
                    </CardContent>
                  </Card>
                </div>

                <Card className="bg-card/50 backdrop-blur-sm border-[#6B46C1]/20 rounded-xl">
                  <CardHeader>
                    <CardTitle className="text-xl font-bold">Need Help Deciding?</CardTitle>
                    <CardDescription className="text-foreground/80">
                      Our admissions team can help you choose the best payment option for your situation.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button
                      variant="outline"
                      className="w-full border-[#6B46C1]/30 text-[#6B46C1] hover:bg-[#6B46C1]/10"
                    >
                      Schedule a Consultation
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </TabsContent>
        </Tabs>
      </div>

      {/* Background glow effects */}
      <div className="absolute top-1/3 left-1/4 size-96 bg-[#0BC5EA]/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/3 right-1/4 size-96 bg-[#6B46C1]/5 rounded-full blur-3xl"></div>
    </section>
  )
}
