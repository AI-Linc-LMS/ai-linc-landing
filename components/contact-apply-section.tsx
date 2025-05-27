"use client"

import { useState, useEffect } from "react"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"
import { toast } from "sonner"
import emailjs from '@emailjs/browser'

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Textarea } from "@/components/ui/textarea"

// EmailJS credentials from environment variables
const EMAILJS_SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || "";
const EMAILJS_APPLY_TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_APPLY_TEMPLATE_ID || "";
const EMAILJS_CONTACT_TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_CONTACT_TEMPLATE_ID || "";
const EMAILJS_PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || "";

// Recipient email addresses from environment variables
const RECIPIENT_EMAILS = [
  process.env.NEXT_PUBLIC_RECIPIENT_EMAIL_1 || "",
  process.env.NEXT_PUBLIC_RECIPIENT_EMAIL_2 || ""
].filter(Boolean); // Filter out empty strings

const applyFormSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email." }),
  contactNumber: z.string().min(10, { message: "Please enter a valid contact number." }),
  graduationYear: z.string().min(4, { message: "Please enter a valid year." }),
  isWorking: z.enum(["yes", "no"], {
    required_error: "Please select whether you are currently working.",
  }),
  workDomain: z.string().optional(),
})

const contactFormSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email." }),
  contactNumber: z.string().min(10, { message: "Please enter a valid contact number." }),
  message: z.string().min(10, { message: "Message must be at least 10 characters." }),
})

export function ContactApplySection() {
  const [activeTab, setActiveTab] = useState("apply")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [emailConfigured, setEmailConfigured] = useState(false)

  // Initialize EmailJS and check if everything is properly configured
  useEffect(() => {
    if (EMAILJS_PUBLIC_KEY) {
      // Initialize EmailJS with public key
      emailjs.init(EMAILJS_PUBLIC_KEY);
      
      // Check if all required email configuration is available
      const isConfigured = 
        !!EMAILJS_SERVICE_ID && 
        !!EMAILJS_APPLY_TEMPLATE_ID && 
        !!EMAILJS_CONTACT_TEMPLATE_ID && 
        RECIPIENT_EMAILS.length > 0;
      
      setEmailConfigured(isConfigured);
      
      if (!isConfigured) {
        console.warn("EmailJS configuration is incomplete. Email notifications will not work properly.");
      }
    }
  }, []);

  const applyForm = useForm<z.infer<typeof applyFormSchema>>({
    resolver: zodResolver(applyFormSchema),
    defaultValues: {
      name: "",
      email: "",
      contactNumber: "",
      graduationYear: "",
      isWorking: undefined,
      workDomain: "",
    },
  })

  const contactForm = useForm<z.infer<typeof contactFormSchema>>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      contactNumber: "",
      message: "",
    },
  })

  async function onApplySubmit(values: z.infer<typeof applyFormSchema>) {
    setIsSubmitting(true)
    try {
      if (!emailConfigured) {
        throw new Error("Email service is not properly configured. Please contact the administrator.");
      }
      
      // Prepare the template parameters
      const templateParams = {
        name: values.name,
        email: values.email,
        contactNumber: values.contactNumber,
        graduationYear: values.graduationYear,
        isWorking: values.isWorking === 'yes' ? 'Yes' : 'No',
        workDomain: values.workDomain || 'Not specified',
        to_emails: RECIPIENT_EMAILS.join(','), // Join emails with commas for the template
        subject: `New Program Application from ${values.name}`,
        submission_date: new Date().toLocaleString(),
      }

      // Send the email using EmailJS
      const response = await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_APPLY_TEMPLATE_ID,
        templateParams,
        EMAILJS_PUBLIC_KEY
      )

      if (response.status === 200) {
        toast.success("Application submitted successfully! We'll be in touch soon.")
        applyForm.reset()
      } else {
        throw new Error('Failed to send application. Please try again.')
      }
    } catch (error) {
      toast.error(error instanceof Error ? error.message : "Something went wrong. Please try again.")
      console.error(error)
    } finally {
      setIsSubmitting(false)
    }
  }

  async function onContactSubmit(values: z.infer<typeof contactFormSchema>) {
    setIsSubmitting(true)
    try {
      if (!emailConfigured) {
        throw new Error("Email service is not properly configured. Please contact the administrator.");
      }
      
      // Prepare the template parameters
      const templateParams = {
        name: values.name,
        email: values.email,
        contactNumber: values.contactNumber,
        message: values.message,
        to_emails: RECIPIENT_EMAILS.join(','), // Join emails with commas for the template
        subject: `New Contact Query from ${values.name}`,
        submission_date: new Date().toLocaleString(),
      }

      // Send the email using EmailJS
      const response = await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_CONTACT_TEMPLATE_ID,
        templateParams,
        EMAILJS_PUBLIC_KEY
      )

      if (response.status === 200) {
        toast.success("Message sent successfully! Our mentor will contact you soon.")
        contactForm.reset()
      } else {
        throw new Error('Failed to send message. Please try again.')
      }
    } catch (error) {
      toast.error(error instanceof Error ? error.message : "Something went wrong. Please try again.")
      console.error(error)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact-apply" className="py-20 px-4 relative z-10">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
            Join Our Community
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Apply to join our program or connect with our mentors for any queries you might have.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid w-full grid-cols-2 mb-8">
              <TabsTrigger value="apply">Apply Now</TabsTrigger>
              <TabsTrigger value="contact">Contact Us</TabsTrigger>
            </TabsList>

            <TabsContent value="apply">
              <Card className="bg-gray-900/50 border-gray-800">
                <CardHeader>
                  <CardTitle>Apply for the Program</CardTitle>
                  <CardDescription>
                    Fill out the form below to apply for our AI learning program.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Form {...applyForm}>
                    <form onSubmit={applyForm.handleSubmit(onApplySubmit)} className="space-y-4">
                      <FormField
                        control={applyForm.control}
                        name="name"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Name</FormLabel>
                            <FormControl>
                              <Input placeholder="Your full name" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={applyForm.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Email</FormLabel>
                            <FormControl>
                              <Input placeholder="Your email address" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={applyForm.control}
                        name="contactNumber"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Contact Number</FormLabel>
                            <FormControl>
                              <Input placeholder="Your phone number" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={applyForm.control}
                        name="graduationYear"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Year of Graduation</FormLabel>
                            <FormControl>
                              <Input placeholder="YYYY" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={applyForm.control}
                        name="isWorking"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Are you currently working?</FormLabel>
                            <FormControl>
                              <RadioGroup
                                onValueChange={field.onChange}
                                value={field.value}
                                className="flex space-x-4"
                              >
                                <FormItem className="flex items-center space-x-2">
                                  <FormControl>
                                    <RadioGroupItem value="yes" />
                                  </FormControl>
                                  <FormLabel className="font-normal">Yes</FormLabel>
                                </FormItem>
                                <FormItem className="flex items-center space-x-2">
                                  <FormControl>
                                    <RadioGroupItem value="no" />
                                  </FormControl>
                                  <FormLabel className="font-normal">No</FormLabel>
                                </FormItem>
                              </RadioGroup>
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={applyForm.control}
                        name="workDomain"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Work Domain (Optional)</FormLabel>
                            <FormControl>
                              <Input placeholder="Your current work domain" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <Button type="submit" className="w-full" disabled={isSubmitting}>
                        {isSubmitting ? "Submitting..." : "Submit Application"}
                      </Button>
                    </form>
                  </Form>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="contact">
              <Card className="bg-gray-900/50 border-gray-800">
                <CardHeader>
                  <CardTitle>Connect with Our Mentor</CardTitle>
                  <CardDescription>
                    Have a query? Send us a message and our mentors will get back to you.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Form {...contactForm}>
                    <form onSubmit={contactForm.handleSubmit(onContactSubmit)} className="space-y-4">
                      <FormField
                        control={contactForm.control}
                        name="name"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Name</FormLabel>
                            <FormControl>
                              <Input placeholder="Your full name" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={contactForm.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Email</FormLabel>
                            <FormControl>
                              <Input placeholder="Your email address" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={contactForm.control}
                        name="contactNumber"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Contact Number</FormLabel>
                            <FormControl>
                              <Input placeholder="Your phone number" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={contactForm.control}
                        name="message"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Query / Message</FormLabel>
                            <FormControl>
                              <Textarea
                                placeholder="Type your message here..."
                                className="min-h-32"
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <Button type="submit" className="w-full" disabled={isSubmitting}>
                        {isSubmitting ? "Sending..." : "Send Message"}
                      </Button>
                    </form>
                  </Form>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </section>
  )
} 