
import { motion } from "framer-motion";
import PageContainer from "@/components/page-container";
import SkillCard from "@/components/skill-card";
import { 
  Code, 
  BrainCircuit, 
  Laptop, 
  Users, 
  PenTool, 
  Rocket,
  BarChart,
  Leaf,
  Film,
  Terminal,
  Database,
  Cloud 
} from "lucide-react";

const Skills = () => {
  const technicalSkills = [
    {
      title: "Programming",
      icon: Code,
      description: "Proficient in Python and experienced in web development technologies.",
    },
    {
      title: "Artificial Intelligence",
      icon: BrainCircuit,
      description: "Knowledge of AI concepts, tools and practical applications including generative AI.",
    },
    {
      title: "Video Editing",
      icon: Film,
      description: "Experienced in creating and editing video content for various purposes.",
    },
    {
      title: "Graphic Design",
      icon: PenTool,
      description: "Skills in creating visual content and design assets.",
    },
    {
      title: "Web Development",
      icon: Terminal,
      description: "Experience with web technologies and frameworks.",
    },
    {
      title: "Data Management",
      icon: Database,
      description: "Knowledge of data storage, retrieval and management systems.",
    },
  ];

  const softSkills = [
    {
      title: "Team Leadership",
      icon: Users,
      description: "Experience leading and coordinating teams to achieve collective goals.",
    },
    {
      title: "Team Management",
      icon: Laptop,
      description: "Skills in organizing and managing team resources and projects.",
    },
    {
      title: "Environmental Awareness",
      icon: Leaf,
      description: "Knowledge and commitment to sustainability and environmental issues.",
    },
    {
      title: "Entrepreneurship",
      icon: Rocket,
      description: "Initiative and ability to develop and implement business ideas.",
    },
    {
      title: "Analytics",
      icon: BarChart,
      description: "Ability to analyze data and extract meaningful insights.",
    },
    {
      title: "Adaptability",
      icon: Cloud,
      description: "Quickly adapt to new technologies and changing environments.",
    },
  ];

  return (
    <PageContainer>
      <motion.div
        className="text-center mb-12"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-4xl font-bold font-cyber mb-4">My Skills</h1>
        <p className="text-foreground/80 max-w-2xl mx-auto">
          Here are the skills I've developed throughout my academic and professional journey.
        </p>
      </motion.div>

      <motion.div
        className="mb-16"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <h2 className="text-2xl font-bold font-cyber mb-6 text-gradient">Technical Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {technicalSkills.map((skill, index) => (
            <SkillCard
              key={skill.title}
              title={skill.title}
              icon={skill.icon}
              description={skill.description}
              index={index}
            />
          ))}
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <h2 className="text-2xl font-bold font-cyber mb-6 text-gradient">Professional Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {softSkills.map((skill, index) => (
            <SkillCard
              key={skill.title}
              title={skill.title}
              icon={skill.icon}
              description={skill.description}
              index={index}
            />
          ))}
        </div>
      </motion.div>
    </PageContainer>
  );
};

export default Skills;
