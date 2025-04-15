
import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";

interface SkillCardProps {
  title: string;
  icon: LucideIcon;
  description: string;
  index: number;
}

export default function SkillCard({ title, icon: Icon, description, index }: SkillCardProps) {
  return (
    <motion.div
      className="glass p-6 rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-primary/5 flex flex-col items-center text-center neon-border"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: index * 0.1 }}
      whileHover={{ y: -5, transition: { duration: 0.2 } }}
    >
      <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-4">
        <Icon className="w-7 h-7 text-primary" />
      </div>
      <h3 className="text-lg font-bold mb-2 font-cyber">{title}</h3>
      <p className="text-sm text-foreground/80">{description}</p>
    </motion.div>
  );
}
