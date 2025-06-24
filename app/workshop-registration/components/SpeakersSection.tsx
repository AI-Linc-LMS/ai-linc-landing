import Image from "next/image"
import { Linkedin } from "lucide-react"
import MicrosoftLogo from "../../../public/last_microsoft.png"
import AmazonLogo from "../../../public/ama_no _bg.png"
import GoogleLogo from "../../../public/no_bg_google.png"

export function SpeakersSection() {
  return (
    <div className="space-y-8 mb-12">
      {/* Main Speaker */}
      <div className="bg-gradient-to-r from-[#0BC5EA]/10 to-[#6B46C1]/10 rounded-xl p-6 border border-[#0BC5EA]/20">
        <div className="flex flex-col md:flex-row items-center gap-6">
          <div className="flex-shrink-0">
            <div className="size-24 rounded-full overflow-hidden border-4 border-[#0BC5EA] p-1">
              <Image
                src="/shubham_lal.jpg"
                alt="Shubham Lal"
                width={96}
                height={96}
                className="object-cover w-full h-full rounded-full"
              />
            </div>
          </div>
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-bold text-[#0BC5EA] mb-2">Shubham Lal</h3>
            <p className="text-lg text-foreground/80 mb-1 flex items-center gap-2 mx-9 md:mx-0">
              SDE 2 at  <Image src={MicrosoftLogo} alt="Microsoft Logo" width={64} height={64} />
            </p>
            <p className="text-foreground/60 mb-1">Full Stack Data Science | AI</p>
            <a
              href="https://www.linkedin.com/in/shubhamlal/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#0BC5EA]/10 hover:bg-[#0BC5EA]/20 text-[#0BC5EA] px-4 py-2 rounded-lg transition-colors"
            >
              <Linkedin className="size-5" />
              <span>Connect on LinkedIn</span>
            </a>
          </div>
        </div>
      </div>

      {/* Other Speakers */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-background/30 rounded-xl p-6 border border-[#0BC5EA]/20 hover:border-[#0BC5EA]/40 transition-colors">
          <div className="flex flex-col items-center text-center">
            <div className="size-24 rounded-full overflow-hidden border-4 border-[#0BC5EA] p-1">
              <Image
                src="/yamini_bandi.jpg"
                alt="Yamini Bandi"
                width={96}
                height={96}
                className="object-cover w-full h-full rounded-full"
              />
            </div>
            <h3 className="text-xl font-bold text-[#0BC5EA] mb-2">Yamini Bandi</h3>
            <p className="text-foreground/60 mb-4 flex items-center gap-2">
              SDE at  <Image src={AmazonLogo} alt="Amazon Logo" width={42} height={42} className="mt-1" />
            </p>
            <a
              href="https://www.linkedin.com/in/yaminibandi/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-[#0BC5EA] hover:text-[#0BC5EA]/80 transition-colors"
            >
              <Linkedin className="size-5" />
              <span>Connect</span>
            </a>
          </div>
        </div>

        <div className="bg-background/30 rounded-xl p-6 border border-[#0BC5EA]/20 hover:border-[#0BC5EA]/40 transition-colors">
          <div className="flex flex-col items-center text-center">
            <div className="size-24 rounded-full overflow-hidden border-4 border-[#0BC5EA] p-1">
              <Image
                src="/Divyansh_dubey.jpg"
                alt="Divyansh Dubey"
                width={96}
                height={96}
                className="object-cover w-full h-full rounded-full"
              />
            </div>
            <h3 className="text-xl font-bold text-[#0BC5EA] mb-2">Divyansh Dubey</h3>
            <p className="text-foreground/60 mb-4 flex items-center gap-2">
              Gen AI at  <Image src={GoogleLogo} alt="Amazon Logo" width={44} height={44} />
            </p>
            <a
              href="https://www.linkedin.com/in/divyansh-dubey/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-[#0BC5EA] hover:text-[#0BC5EA]/80 transition-colors"
            >
              <Linkedin className="size-5" />
              <span>Connect</span>
            </a>
          </div>
        </div>

        <div className="bg-background/30 rounded-xl p-6 border border-[#0BC5EA]/20 hover:border-[#0BC5EA]/40 transition-colors">
          <div className="flex flex-col items-center text-center">
            <div className="size-24 rounded-full overflow-hidden border-4 border-[#0BC5EA] p-1">
              <Image
                src="/poorva_image.jpg"
                alt="Poorva Shrivastava"
                width={96}
                height={96}
                className="object-cover w-full h-full rounded-full"
              />
            </div>
            <h3 className="text-xl font-bold text-[#0BC5EA] mb-2">Poorva Shrivastava</h3>
            <p className="text-foreground/60 mb-4">CMO at AI Linc </p>
            <a
              href="https://www.linkedin.com/in/poorva-shrivastava-ceo/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-[#0BC5EA] hover:text-[#0BC5EA]/80 transition-colors"
            >
              <Linkedin className="size-5" />
              <span>Connect</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
} 