
import { motion } from "framer-motion";
import { Briefcase, Award, GraduationCap, Calendar, MapPin, Diamond } from "lucide-react";

const experiences = [
  {
    title: "Computer science club secretary",
    company: "DAV Group of Schools (TNAES), Chennai",
    type: "Full-time",
    icon: Briefcase,
    dateRange: "Mar 2022 - Present",
    duration: "3 yrs 2 mos",
    location: "Chennai, Tamil Nadu, India",
    skills: ["Computer Science", "Team Leadership"],
  },
  {
    title: "Chief Cultural Coordinator - jarvis'24",
    company: "DAV Group of Schools (TNAES), Chennai",
    type: "Full-time",
    icon: Award,
    dateRange: "Aug 2024 - Dec 2024",
    duration: "5 mos",
    location: "Chennai, Tamil Nadu, India • On-site",
    skills: ["Team Leadership", "Video Editing"],
  },
  {
    title: "Student Council 2023-24 (Bharathi House Vice Captain)",
    company: "DAV Group of Schools (TNAES), Chennai",
    type: "Full-time",
    icon: GraduationCap,
    dateRange: "Mar 2023 - Mar 2024",
    duration: "1 yr 1 mo",
    location: "Chennai, Tamil Nadu, India",
    skills: ["Team Leadership", "Team Management"],
  },
  {
    title: "Co-Founder",
    company: "Trizz Global",
    type: "Full-time",
    icon: Briefcase,
    dateRange: "Apr 2024 - Present",
    duration: "1 yr 1 mo",
    location: "Chennai, Tamil Nadu, India",
    skills: ["Leadership", "Environmental Awareness"],
    isLastItem: true,
  },
];

const ExperienceTimeline = () => {
  return (
    <div className="relative ml-2">
      {/* Timeline line */}
      <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-border/50" />
      
      <div className="space-y-8">
        {experiences.map((experience, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            viewport={{ once: true, margin: "-100px" }}
            className="relative pl-14"
          >
            {/* Timeline dot */}
            <div className="absolute left-0 top-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center z-10">
              <experience.icon className="w-5 h-5 text-primary" />
            </div>
            
            <div className="glass p-5 rounded-lg">
              <h3 className="text-lg font-bold">{experience.title}</h3>
              <p className="text-foreground/70 mb-2">{experience.company}</p>
              <p className="text-sm text-foreground/60 mb-1">{experience.type}</p>
              
              <div className="flex items-center gap-1 text-sm text-foreground/60 mb-2">
                <Calendar className="w-4 h-4" />
                <span>{experience.dateRange} • {experience.duration}</span>
              </div>
              
              <div className="flex items-center gap-1 text-sm text-foreground/60 mb-4">
                <MapPin className="w-4 h-4" />
                <span>{experience.location}</span>
              </div>
              
              <div className="flex flex-wrap gap-2 mt-2">
                <Diamond className="w-4 h-4 text-primary mr-1" />
                {experience.skills.map((skill, skillIndex) => (
                  <span key={skillIndex} className="text-sm text-foreground/80">
                    {skill}{skillIndex < experience.skills.length - 1 ? ", " : ""}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default ExperienceTimeline;
