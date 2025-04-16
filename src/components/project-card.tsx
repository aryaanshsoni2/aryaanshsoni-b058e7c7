
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";

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

const ProjectCard = ({ project, index }: ProjectCardProps) => {
  const isAward = project.tags.includes("Awards");
  const isCertificate = project.tags.includes("Certificates");
  
  return (
    <motion.div
      className="rounded-xl overflow-hidden h-full glass will-change-transform"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      viewport={{ once: true, margin: "-100px" }}
    >
      <div className="relative overflow-hidden h-48">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transform-gpu hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />
      </div>
      
      <div className="p-5">
        <div className="flex flex-wrap gap-2 mb-3">
          {project.tags.map((tag) => (
            <Badge key={tag} variant="outline" className="bg-primary/10 text-xs">
              {tag}
            </Badge>
          ))}
        </div>
        
        <h3 className="text-xl font-bold mb-2">{project.title}</h3>
        
        <p className="text-foreground/80 text-sm mb-4 line-clamp-3">
          {project.description}
        </p>
        
        {(project.githubUrl || project.liveUrl) && !isAward && (
          <div className="flex flex-wrap gap-2 mt-auto">
            {project.githubUrl && (
              <Button size="sm" variant="outline" asChild>
                <a 
                  href={project.githubUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-1"
                >
                  <Github className="w-4 h-4" />
                  <span>Code</span>
                </a>
              </Button>
            )}
            
            {project.liveUrl && (
              <Button size="sm" variant={isCertificate ? "default" : "outline"} asChild>
                <a 
                  href={project.liveUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-1"
                >
                  <ExternalLink className="w-4 h-4" />
                  <span>{isCertificate ? "View Certificate" : "Read Me"}</span>
                </a>
              </Button>
            )}
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default ProjectCard;
