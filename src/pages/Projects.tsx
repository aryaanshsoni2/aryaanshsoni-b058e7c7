import { useState } from "react";
import PageContainer from "@/components/page-container";
import ProjectCard, { ProjectProps } from "@/components/project-card";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

// Sample project data
const projectsData: ProjectProps[] = [
  {
    id: 0,
    title: "WHIZ KID 2024-25",
    description: "Proud recipient of the Tech Whiz Award for outstanding innovation and excellence in technology.",
    image: "/lovable-uploads/324ec7b6-cd9d-4470-b75c-8eefde3eb66b.png",
    tags: ["Awards"],
  },
  {
    id: 1,
    title: "Heritage of Chennai Contest 2023",
    description: "Secured 1st Prize in the Heritage of Chennai Contest 2023 for our presentation on \"Two Old Houses of Chennai,\" held at the historic Ranade Library. Grateful to Mylapore Times for this enriching experience that deepened our connection with Chennai's rich heritage.",
    image: "/lovable-uploads/a04de478-02e1-4e89-bf9e-a6f99a0c1ca2.png",
    tags: ["Awards", "Graphic Design"],
    liveUrl: "https://www.mylaporetimes.com/2023/08/madras-day-2023-12-schools-present-their-study-of-old-houses-of-the-city-at-event-held-at-ranade-library/"
  },
  {
    id: 2,
    title: "Career Essentials in Generative AI",
    description: "Learning Path completed by Aryaansh Soni in Generative AI, covering Computer Ethics, Artificial Intelligence (AI), and Generative AI fundamentals.",
    image: "/lovable-uploads/394f3202-3c49-4bcf-bf28-715c635a1ae7.png",
    tags: ["Certificates"],
    liveUrl: "https://lnkd.in/eP5v4cQ7"
  },
  {
    id: 3,
    title: "DEEPIKA 2022",
    description: "Core editing team of annual school magazine 2022",
    image: "/lovable-uploads/1661c575-06fb-438a-aaf8-1623c008d036.png",
    tags: ["Graphic Design"],
    liveUrl: "https://bgpm.davchennai.org/static/pdf/Deepika2022.pdf"
  },
  {
    id: 4,
    title: "DEEPIKA 2023",
    description: "Core editing team of annual school magazine 2023",
    image: "/lovable-uploads/58ee6266-ad22-426f-bc93-0704f60815ef.png",
    tags: ["Graphic Design"],
    liveUrl: "https://bgpm.davchennai.org/static/pdf/Deepika2023.pdf"
  },
  {
    id: 5,
    title: "DEEPIKA 2024",
    description: "Led technical team of annual school magazine 2024-25",
    image: "/lovable-uploads/965626c9-034f-4ef1-a2f1-8fde6d916ec1.png",
    tags: ["Graphic Design"]
  }
];

// Updated categories array
const categories = ["All", "Graphic Design", "Awards", "Video Editing", "Certificates"];

const Projects = () => {
  const [filter, setFilter] = useState("All");
  
  const filteredProjects = projectsData.filter((project) => {
    if (filter === "All") return true;
    return project.tags.includes(filter);
  });

  return (
    <PageContainer>
      <motion.div
        className="text-center mb-12"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-4xl font-bold font-cyber mb-4">Awards and Projects</h1>
        <p className="text-foreground/80 max-w-2xl mx-auto">
          Here are some of my awards and projects. Each represents a milestone in my journey.
        </p>
      </motion.div>
      
      <motion.div 
        className="flex flex-wrap justify-center gap-2 mb-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        {categories.map((category) => (
          <Button
            key={category}
            variant={filter === category ? "default" : "outline"}
            size="sm"
            onClick={() => setFilter(category)}
            className="rounded-full px-4"
          >
            {category}
          </Button>
        ))}
      </motion.div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProjects.map((project, index) => (
          <ProjectCard key={project.id} project={project} index={index} />
        ))}
      </div>
      
      {filteredProjects.length === 0 && (
        <motion.div 
          className="text-center py-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-foreground/60">No projects found with the selected filter.</p>
        </motion.div>
      )}
    </PageContainer>
  );
};

export default Projects;
