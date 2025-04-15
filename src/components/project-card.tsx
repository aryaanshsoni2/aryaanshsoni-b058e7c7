
import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import { lazy, Suspense } from "react";

export interface ProjectProps {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  githubUrl?: string;
  liveUrl?: string;
}

interface ProjectCardProps {
  project: ProjectProps;
  index: number;
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
  const isAward = project.tags.includes("Awards");

  return (
    <motion.div
      className="group relative flex flex-col overflow-hidden rounded-xl neon-border"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={!isAward ? { y: -5, transition: { duration: 0.2 } } : {}}
    >
      <div className="relative h-56 overflow-hidden">
        <div className={`absolute inset-0 ${isAward ? 'bg-black/10' : 'bg-black/30 group-hover:bg-black/10'} transition-all duration-300 z-10`} />
        <img 
          src={project.image} 
          alt={project.title} 
          className={`w-full h-full object-cover ${!isAward ? 'transition-transform duration-500 group-hover:scale-110' : ''}`}
          loading="lazy"
        />
      </div>

      <div className="flex-1 flex flex-col p-6 bg-card glass">
        <h3 className="text-xl font-bold mb-2 font-cyber">{project.title}</h3>
        <p className="text-sm text-foreground/80 mb-4">{project.description}</p>
        
        <div className="flex flex-wrap gap-2 mb-4 mt-auto">
          {project.tags.map(tag => (
            <span key={tag} className="text-xs px-3 py-1 rounded-full bg-primary/10 text-primary">
              {tag}
            </span>
          ))}
        </div>
        
        {!isAward && (
          <div className="flex gap-2">
            {project.githubUrl && (
              <Button variant="outline" size="sm" className="gap-1" asChild>
                <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                  <Github className="w-4 h-4 mr-1" />
                  GitHub
                </a>
              </Button>
            )}
            {project.liveUrl && (
              <Button size="sm" className="gap-1" asChild>
                <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="w-4 h-4 mr-1" />
                  Live Demo
                </a>
              </Button>
            )}
          </div>
        )}
      </div>
    </motion.div>
  );
}
