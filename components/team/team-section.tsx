import { TeamMemberCard } from "./team-member-card"

const teamMembers = [
  {
    name: "Shubham",
    role: "Director",
    description: "Driving AI LINC's vision and strategic growth with innovative leadership.",
    imageSrc: "/shubham_lal.jpg",
    borderColor: "[#0BC5EA]",
    hoverColor: "#0BC5EA"
  },
  {
    name: "Poorva",
    role: "Director",
    description: "Pioneering innovative solutions and driving AI LINC's technological advancement.",
    imageSrc: "/poorva_image.jpg",
    borderColor: "[#6B46C1]",
    hoverColor: "#6B46C1"
  },
  {
    name: "Sandeep",
    role: "Director",
    description: "Guiding AI LINC's strategic partnerships and business development.",
    imageSrc: "/sandeep.jpeg",
    borderColor: "[#48BB78]",
    hoverColor: "#48BB78"
  },
  {
    name: "Noorman",
    role: "Chief Marketing Officer",
    description: "Crafting AI LINC's brand narrative and market positioning.",
    imageSrc: "/noorman.jpeg",
    borderColor: "[#ED64A6]",
    hoverColor: "#ED64A6"
  }
]

export function TeamSection() {
  return (
    <div className="mt-16">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-semibold text-white mb-8 text-center">Our Leadership Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {teamMembers.map((member, index) => (
            <TeamMemberCard
              key={index}
              name={member.name}
              role={member.role}
              description={member.description}
              imageSrc={member.imageSrc}
              borderColor={member.borderColor}
              hoverColor={member.hoverColor}
            />
          ))}
        </div>
      </div>
    </div>
  )
} 