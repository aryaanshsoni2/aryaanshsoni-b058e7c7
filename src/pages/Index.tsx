
import { motion } from "framer-motion";
import PageContainer from "@/components/page-container";
import Hero from "@/components/hero";
import { Button } from "@/components/ui/button";
import { BrainCircuit, Code, User, Mail } from "lucide-react";
import { Link } from "react-router-dom";

const features = [
  {
    icon: <Code className="w-6 h-6" />,
    title: "Projects",
    description: "Check out my latest work and coding projects.",
    link: "/projects",
    color: "bg-neon-pink/10",
  },
  {
    icon: <BrainCircuit className="w-6 h-6" />,
    title: "Skills",
    description: "Learn about my technical and professional skills.",
    link: "/skills",
    color: "bg-neon-blue/10",
  },
  {
    icon: <User className="w-6 h-6" />,
    title: "About Me",
    description: "Get to know me better and my professional journey.",
    link: "/about",
    color: "bg-neon-green/10",
  },
  {
    icon: <Mail className="w-6 h-6" />,
    title: "Contact",
    description: "Reach out to me for collaboration or inquiries.",
    link: "/contact",
    color: "bg-neon-purple/10",
  },
];

const Index = () => {
  return (
    <>
      <Hero />
      
      <PageContainer className="py-16">
        <motion.h2 
          className="text-3xl font-bold font-cyber text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Explore My <span className="text-gradient">Portfolio</span>
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              className="glass p-6 rounded-xl transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
            >
              <div className={`w-12 h-12 rounded-xl ${feature.color} flex items-center justify-center mb-4`}>
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold mb-2 font-cyber">{feature.title}</h3>
              <p className="text-foreground/80 mb-4">{feature.description}</p>
              <Button asChild variant="outline" className="rounded-md">
                <Link to={feature.link}>Explore {feature.title}</Link>
              </Button>
            </motion.div>
          ))}
        </div>
      </PageContainer>
    </>
  );
};

export default Index;
