// "use client"

// import { useState } from "react"
// import { motion } from "framer-motion"
// import { ChevronDown, ChevronUp, PlayCircle } from "lucide-react"
// import { CourseWeek, CourseSection } from "../data/course-content"
// import { CourseSection as CourseSectionComponent } from "./course-section"

// type CourseWeekProps = {
//     week: CourseWeek
//     isExpanded: boolean
//     onToggle: () => void
// }

// export function CourseWeekItem({ week, isExpanded, onToggle }: CourseWeekProps) {
//     return (
//         <motion.div
//             initial={{ opacity: 0, x: 50 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.6 }}
//             className="bg-card/50 rounded-xl border border-border/20 hover:border-primary/30 transition-all"
//         >
//             <div
//                 onClick={onToggle}
//                 className="flex justify-between items-center p-6 cursor-pointer hover:bg-accent/10 rounded-xl"
//             >
//                 <div className="flex items-center gap-4">
//                     <PlayCircle className="w-6 h-6 text-cyan-400 flex-shrink-0" />
//                     <div>
//                         <h3 className="text-lg font-semibold">{week.title}</h3>
//                         <p className="text-sm text-foreground/70">
//                             {week.sections.length} sections • {week.sections.reduce((total, section) => total + section.lectures, 0)} lectures
//                         </p>
//                     </div>
//                 </div>
//                 {isExpanded ? (
//                     <ChevronUp className="w-6 h-6 text-foreground/70" />
//                 ) : (
//                     <ChevronDown className="w-6 h-6 text-foreground/70" />
//                 )}
//             </div>
//             {isExpanded && (
//                 <div className="p-6 pt-0">
//                     {week.sections.map((section, sectionIndex) => (
//                         <CourseSectionComponent 
//                             key={section.title} 
//                             section={section} 
//                         />
//                     ))}
//                 </div>
//             )}
//         </motion.div>
//     )
// } 