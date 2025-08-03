"use client";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

interface WhoIsThisWorkshopForSectionProps {
  onRegistrationClick?: () => void;
}

export function WhoIsThisWorkshopForSection({ onRegistrationClick }: WhoIsThisWorkshopForSectionProps) {
  const targetAudience = [
    {
      icon: "👔",
      title: "HR Professionals & Product Managers",
      description: "Want to shift their career into a AI & Machine Learning professional."
    },
    {
      icon: "🎓",
      title: "College Students & Job Seekers",
      description: "Looking to build a foundation in AI & Machine Learning early on."
    },
    {
      icon: "💼",
      title: "Entrepreneurs & Freelancers", 
      description: "Want to stand out in the job market with AI & Machine Learning expertise."
    },
    {
      icon: "🎨",
      title: "Content Creators & Trainers",
      description: "Looking to leverage AI tools for content creation and training programs."
    }
  ];

  return (
    <div className="mb-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-center"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-12">
          Who is This Webinar For?
        </h2>

        {/* Grid for target audience */}
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          {targetAudience.map((audience, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-gray-800/30 backdrop-blur-sm border border-gray-700/50 rounded-lg p-6 hover:border-[#0BC5EA]/50 transition-all duration-300"
            >
              <div className="flex items-start gap-4">
                <div className="text-3xl flex-shrink-0">
                  {audience.icon}
                </div>
                <div className="text-left">
                  <h3 className="text-lg font-semibold text-white mb-2">
                    {audience.title}
                  </h3>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    {audience.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom section - Anyone Curious */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-[#0BC5EA]/10 to-[#6B46C1]/10 border border-[#0BC5EA]/30 rounded-lg p-8 mb-8"
        >
          <div className="flex flex-col items-center gap-4">
            <div className="text-4xl">👥</div>
            <h3 className="text-xl font-semibold text-white">
              Anyone Curious :
            </h3>
            <p className="text-gray-300 text-center max-w-2xl">
              Explore the exciting world of AI & Machine Learning and its future
            </p>
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
          className="space-y-4"
        >
          <Button
            onClick={onRegistrationClick}
            className="bg-gradient-to-r from-[#22c55e] to-[#16a34a] hover:from-[#22c55e]/90 hover:to-[#16a34a]/90 text-white font-semibold py-4 px-8 rounded-lg text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl w-full md:w-auto min-w-[300px]"
            size="lg"
          >
            I Am Interested, Register Now
          </Button>
          
          <div className="text-center">
            <p className="text-xl font-bold text-white">
              Join for Rs <span className="line-through text-gray-400">999</span> FREE
            </p>
            <p className="text-sm text-gray-400">
              For the first 1000 registrations only
            </p>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}
