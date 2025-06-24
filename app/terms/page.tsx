import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function TermsPage() {
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
        <div className="mb-12">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-[#0BC5EA] to-[#6B46C1] bg-clip-text text-transparent mb-4">
            Terms and Conditions
          </h1>
          <p className="text-foreground/60 text-lg">
            Last updated: {new Date().toLocaleDateString()}
          </p>
        </div>

        {/* Content */}
        <div className="prose prose-invert max-w-none">
          <div className="space-y-8 text-foreground/80">
            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">1. Definitions</h2>
              <p className="mb-4">
                For the purpose of these Terms and Conditions, The term "we", "us", "our" used anywhere on this page shall mean Leapify Technologies Private Limited, whose registered/operational office is Flat No 102, Raghu Ram Enclave Silpa Park, Kondapur, Hyderabad, Rangareddy, Telangana, 500084 Hyderabad TELANGANA 500084 . "you", "your", "user", "visitor" shall mean any natural or legal person who is visiting our website and/or agreed to purchase from us.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">2. Acceptance of Terms</h2>
              <p className="mb-4">
                Your use of the website and/or purchase from us are governed by following Terms and Conditions:
              </p>
              <p className="mb-4">
                By accessing and using the AI LINC program and website, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">3. Program Description</h2>
              <p className="mb-4">
                AI LINC is a 111-day program designed to enhance your skills and value in the AI economy. The program includes educational content, workshops, assignments, and access to instructors and community.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">4. Website Content and Liability</h2>
              <p className="mb-4">
                The content of the pages of this website is subject to change without notice.
              </p>
              <p className="mb-4">
                Neither we nor any third parties provide any warranty or guarantee as to the accuracy, timeliness, performance, completeness or suitability of the information and materials found or offered on this website for any particular purpose. You acknowledge that such information and materials may contain inaccuracies or errors and we expressly exclude liability for any such inaccuracies or errors to the fullest extent permitted by law.
              </p>
              <p className="mb-4">
                Your use of any information or materials on our website and/or product pages is entirely at your own risk, for which we shall not be liable. It shall be your own responsibility to ensure that any products, services or information available through our website and/or product pages meet your specific requirements.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">5. Registration and Payment</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>Registration requires payment of the full program fee</li>
                <li>All payments are processed securely through Razorpay</li>
                <li>Program access begins upon successful payment confirmation</li>
                <li>No partial payments or installments are accepted unless explicitly stated</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">6. Program Access and Duration</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>The program duration is 111 days from the start date</li>
                <li>Access to program materials is provided for the duration of the program</li>
                <li>Extended access may be provided at the discretion of AI LINC</li>
                <li>Technical requirements must be met for optimal program experience</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">7. Intellectual Property</h2>
              <p className="mb-4">
                All content, materials, and resources provided in the AI LINC program are the intellectual property of AI LINC and are protected by copyright and other intellectual property laws. Participants may not reproduce, distribute, or share program content without explicit permission.
              </p>
              <p className="mb-4">
                Our website contains material which is owned by or licensed to us. This material includes, but are not limited to, the design, layout, look, appearance and graphics. Reproduction is prohibited other than in accordance with the copyright notice, which forms part of these terms and conditions.
              </p>
              <p className="mb-4">
                All trademarks reproduced in our website which are not the property of, or licensed to, the operator are acknowledged on the website.
              </p>
              <p className="mb-4">
                Unauthorized use of information provided by us shall give rise to a claim for damages and/or be a criminal offense.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">8. Code of Conduct</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>Maintain respectful communication with instructors and fellow participants</li>
                <li>No harassment, discrimination, or inappropriate behavior</li>
                <li>Participate actively and constructively in program activities</li>
                <li>Respect the learning environment and community guidelines</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">9. External Links</h2>
              <p className="mb-4">
                From time to time our website may also include links to other websites. These links are provided for your convenience to provide further information.
              </p>
              <p className="mb-4">
                You may not create a link to our website from another website or document without Leapify Technologies Private Limited's prior written consent.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">10. Limitation of Liability</h2>
              <p className="mb-4">
                AI LINC shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses resulting from your participation in the program.
              </p>
              <p className="mb-4">
                We, shall be under no liability whatsoever in respect of any loss or damage arising directly or indirectly out of the decline of authorization for any Transaction, on Account of the Cardholder having exceeded the preset limit mutually agreed by us with our acquiring bank from time to time
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">11. Governing Law</h2>
              <p className="mb-4">
                Any dispute arising out of use of our website and/or purchase with us and/or any engagement with us is subject to the laws of India.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">12. Modifications</h2>
              <p className="mb-4">
                AI LINC reserves the right to modify these terms and conditions at any time. Participants will be notified of significant changes via email or through the program platform.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">13. Contact Information</h2>
              <p className="mb-4">
                For questions about these Terms and Conditions, please contact us through our official channels or visit our contact page.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">14. Disclaimer</h2>
              <p className="mb-4">
                Disclaimer: The above content is created at Leapify Technologies Private Limited's sole discretion. Razorpay shall not be liable for any content provided here and shall not be responsible for any claims and liability that may arise due to merchant's non-adherence to it.
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  )
} 