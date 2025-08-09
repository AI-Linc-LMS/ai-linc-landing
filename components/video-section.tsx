import { Button } from "@/components/ui/button";

export const VideoSection = () => {
  return (
    <section className="relative py-16 sm:py-20 lg:py-24 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 sm:w-96 sm:h-96 bg-[#0BC5EA]/10 rounded-full blur-3xl opacity-30"></div>
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 sm:w-96 sm:h-96 bg-[#6B46C1]/10 rounded-full blur-3xl opacity-20"></div>
        <div className="absolute inset-0 overflow-hidden"></div>
      </div>
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-20">
          {/* Text on the left */}
          <div className="w-full lg:w-1/2">
            <p className="text-[#0BC5EA] text-sm sm:text-base font-medium uppercase mb-6">
              TRANSFORMING CAREERS WITH AGENTIC AI
            </p>
            <div className="flex items-start mb-8">
              <div
                className="w-1 bg-[#0BC5EA] mr-6 flex-shrink-0"
                style={{ height: "200px" }}
              ></div>
              <div>
                <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-light bg-gradient-to-r from-white via-[#0BC5EA] to-[#6B46C1] bg-clip-text text-transparent">
                  Build powerful software and websites without coding.
                </h1>
                <h2 className="mt-4 text-lg sm:text-xl lg:text-2xl font-light bg-gradient-to-r from-white via-[#0BC5EA] to-[#6B46C1] bg-clip-text text-transparent">
                  AI LINC teaches you to harness AI tools for no-code
                  development, transforming ideas into reality.
                </h2>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 sm:gap-8">
              <Button
                className="bg-[#0BC5EA] text-black hover:bg-[#0BC5EA]/90 transition-all duration-300 px-4 py-2 sm:px-6 sm:py-3 text-sm sm:text-base font-semibold rounded-lg hover:shadow-[0_0_20px_rgba(11,197,234,0.4)] sm:hover:shadow-[0_0_30px_rgba(11,197,234,0.6)] transform hover:scale-105 shadow-lg backdrop-blur-sm"
                onClick={() => (window.location.href = "/courses")}
              >
                Explore Courses
              </Button>
            </div>
          </div>
          {/* Video on the right */}
          <div className="w-full lg:w-1/2 flex justify-center">
            <video
              className="rounded-2xl shadow-2xl w-full max-w-lg aspect-video bg-black"
              src="/videos/ailinc10_2.mp4"
              autoPlay
              loop
              muted
              playsInline
              controls
              poster="/videos/ailinc10_2-thumb.jpg"
            >
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </div>
    </section>
  );
};
