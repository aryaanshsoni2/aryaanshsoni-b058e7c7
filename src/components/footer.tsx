
import { motion } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="py-8 border-t border-border mt-auto">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-center md:text-left">
            <a href="#home" className="text-xl font-bold font-cyber text-gradient">
              Aryaansh<span className="text-foreground font-normal">.</span>
            </a>
            <p className="text-sm text-foreground/60 mt-1">
              © {new Date().getFullYear()} Aryaansh Soni. All rights reserved.
            </p>
          </div>
          
          <div className="flex items-center gap-4">
            <motion.a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-background flex items-center justify-center text-foreground/80 hover:text-primary transition-colors"
              whileHover={{ y: -3 }}
            >
              <Github className="w-5 h-5" />
            </motion.a>
            <motion.a
              href="https://www.linkedin.com/in/aryaansh-soni-864794217/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-background flex items-center justify-center text-foreground/80 hover:text-primary transition-colors"
              whileHover={{ y: -3 }}
            >
              <Linkedin className="w-5 h-5" />
            </motion.a>
            <motion.a
              href="mailto:saryaansh@gmail.com"
              className="w-10 h-10 rounded-full bg-background flex items-center justify-center text-foreground/80 hover:text-primary transition-colors"
              whileHover={{ y: -3 }}
            >
              <Mail className="w-5 h-5" />
            </motion.a>
          </div>
        </div>
      </div>
    </footer>
  );
}
