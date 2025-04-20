
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Hero() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-[90vh] flex flex-col items-center justify-center relative overflow-hidden">
      <motion.div
        className="absolute inset-0 -z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <img 
          src="/lovable-uploads/2c1ae677-ddc1-4a42-b9e7-5d197c7ceb59.png"
          alt="Scenic sunset landscape"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40" /> {/* Darkened overlay for better text readability */}
      </motion.div>

      <div className="text-center max-w-4xl px-4 space-y-8 relative z-10">
        <motion.div
          className="w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-4 border-white/10 mx-auto relative"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          <div className="absolute inset-0 animate-glow rounded-full" />
          <img 
            src="/lovable-uploads/3b60924f-dd5c-45a4-9060-68caa7700a9d.png" 
            alt="Aryaansh Soni" 
            className="w-full h-full object-cover rounded-full"
          />
        </motion.div>

        <motion.h1
          className="text-4xl md:text-6xl font-bold font-cyber bg-gradient-to-r from-primary via-purple-500 to-pink-500 text-transparent bg-clip-text animated-text"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          Aryaansh Soni
        </motion.h1>

        <motion.div
          className="space-y-4"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.5 }}
        >
          <p className="text-xl md:text-2xl text-foreground/80 text-white font-semibold">
            Creative Developer & AI Enthusiast
          </p>
          <p className="text-md md:text-lg text-white max-w-2xl mx-auto bg-black/20 p-4 rounded-lg backdrop-blur-sm">
            I am a dedicated and collaborative individual with a strong interest in 
            technology, artificial intelligence, and creative design.
          </p>
        </motion.div>

        <motion.div
          className="flex flex-wrap justify-center gap-4 pt-6"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.5 }}
        >
          <Button
            className="rounded-full px-6 bg-primary hover:bg-primary/90 text-white"
            onClick={() => scrollToSection('projects')}
          >
            View My Projects
          </Button>
          <Button
            variant="outline"
            className="rounded-full px-6 border-primary/20 hover:bg-primary/5 bg-white/10 backdrop-blur-sm text-white"
            onClick={() => scrollToSection('contact')}
          >
            Contact Me
          </Button>
        </motion.div>

        <motion.div
          className="absolute bottom-10"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.5, repeat: Infinity, repeatType: "reverse" }}
        >
          <ChevronDown className="w-8 h-8 text-white" />
        </motion.div>
      </div>
    </div>
  );
}
