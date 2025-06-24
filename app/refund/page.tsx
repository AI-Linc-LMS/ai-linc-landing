import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function RefundPage() {
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
            Cancellations and Refunds
          </h1>
          <p className="text-foreground/60 text-lg">
            Last updated: {new Date().toLocaleDateString()}
          </p>
        </div>

        {/* Content */}
        <div className="prose prose-invert max-w-none">
          <div className="space-y-8 text-foreground/80">
            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">Cancellation & Refund Policy</h2>
              <p className="mb-4">
                Leapify Technologies Private Limited believes in helping its customers as far as possible, and has therefore a liberal cancellation policy. Under this policy:
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">Cancellation Requests</h2>
              <p className="mb-4">
                Cancellations will be considered only if the request is made within 6-8 days of placing the order. However, the cancellation request may not be entertained if the orders have been communicated to the vendors/merchants and they have initiated the process of shipping them.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">Non-Cancellable Items</h2>
              <p className="mb-4">
                Leapify Technologies Private Limited does not accept cancellation requests for perishable items like flowers, eatables etc. However, refund/replacement can be made if the customer establishes that the quality of product delivered is not good.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">Damaged or Defective Items</h2>
              <p className="mb-4">
                In case of receipt of damaged or defective items please report the same to our Customer Service team. The request will, however, be entertained once the merchant has checked and determined the same at his own end. This should be reported within 6-8 days of receipt of the products.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">Product Quality Concerns</h2>
              <p className="mb-4">
                In case you feel that the product received is not as shown on the site or as per your expectations, you must bring it to the notice of our customer service within 6-8 days of receiving the product. The Customer Service Team after looking into your complaint will take an appropriate decision.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">Warranty Items</h2>
              <p className="mb-4">
                In case of complaints regarding products that come with a warranty from manufacturers, please refer the issue to them.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">Refund Processing</h2>
              <p className="mb-4">
                In case of any Refunds approved by the Leapify Technologies Private Limited, it'll take 6-8 days for the refund to be processed to the end customer.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">Disclaimer</h2>
              <p className="mb-4">
                The above content is created at Leapify Technologies Private Limited's sole discretion. Razorpay shall not be liable for any content provided here and shall not be responsible for any claims and liability that may arise due to merchant's non-adherence to it.
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  )
} 