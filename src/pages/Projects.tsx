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
    liveUrl: "https://lnkd.in/exZ7naYC"
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
    title: "AI Image Generator",
    description: "A web application that uses AI to generate images from text descriptions.",
    image: "/lovable-uploads/664c70b6-cba6-4420-bf44-0b60241910a2.png",
    tags: ["Graphic Design"],
    githubUrl: "https://github.com",
    liveUrl: "https://example.com",
  },
  {
    id: 4,
    title: "Personal Finance Tracker",
    description: "A finance application to track expenses, income, and savings with visualizations.",
    image: "/lovable-uploads/38b79f5b-bbd7-498b-badc-18b084f86d4a.png",
    tags: ["Vue.js", "Firebase", "Chart.js"],
    githubUrl: "https://github.com",
    liveUrl: "https://example.com",
  },
  {
    id: 5,
    title: "Smart Learning Platform",
    description: "An education platform with personalized learning paths and progress tracking.",
    image: "/lovable-uploads/5d86cabe-e89f-4027-b39d-24df11b83fd2.png",
    tags: ["React", "MongoDB", "Express"],
    githubUrl: "https://github.com",
    liveUrl: "https://example.com",
  },
  {
    id: 6,
    title: "E-commerce Website",
    description: "A full-featured online store with product listings, cart, and checkout functionality.",
    image: "/lovable-uploads/01ee266b-657d-4c1e-bc7b-6400ddd3ebd1.png",
    tags: ["Next.js", "Stripe", "Postgres"],
    githubUrl: "https://github.com",
    liveUrl: "https://example.com",
  },
  {
    id: 7,
    title: "Community Forum",
    description: "A discussion platform for connecting users and sharing knowledge.",
    image: "/lovable-uploads/54aa53cf-15e2-4bdd-9bf0-a96329de67b6.png",
    tags: ["React", "GraphQL", "Apollo"],
    githubUrl: "https://github.com",
  },
  {
    id: 8,
    title: "Task Management App",
    description: "A productivity tool for managing tasks, projects, and deadlines.",
    image: "/lovable-uploads/6ae1f132-8ad2-4360-9621-d5fcac08ffc7.png",
    tags: ["Vue.js", "Vuex", "Firebase"],
    githubUrl: "https://github.com",
    liveUrl: "https://example.com",
  },
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
