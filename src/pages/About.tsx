
import { motion } from "framer-motion";
import PageContainer from "@/components/page-container";
import { Badge } from "@/components/ui/badge";
import { Award, Calendar, GraduationCap, Briefcase } from "lucide-react";

const About = () => {
  return (
    <PageContainer>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <motion.div
          className="lg:col-span-1"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="sticky top-24">
            <div className="relative rounded-xl overflow-hidden mb-6 neon-border">
              <img
                src="/lovable-uploads/4448e0e7-e1da-41b3-add9-17dcec9d9015.png"
                alt="Aryaansh Soni"
                className="w-full h-auto"
              />
            </div>
            
            <h2 className="text-2xl font-bold font-cyber mb-2">Aryaansh Soni</h2>
            <p className="text-foreground/80 mb-4">
              Computer Science Student & AI Enthusiast
            </p>
            
            <div className="flex flex-wrap gap-2 mb-6">
              <Badge variant="outline" className="bg-primary/10 hover:bg-primary/20">Student</Badge>
              <Badge variant="outline" className="bg-primary/10 hover:bg-primary/20">Developer</Badge>
              <Badge variant="outline" className="bg-primary/10 hover:bg-primary/20">Leader</Badge>
              <Badge variant="outline" className="bg-primary/10 hover:bg-primary/20">AI Enthusiast</Badge>
            </div>
            
            <div className="glass p-4 rounded-xl">
              <h3 className="text-sm font-semibold mb-3 text-foreground/70">Location</h3>
              <p className="text-foreground mb-4">Chennai, Tamil Nadu, India</p>
              
              <h3 className="text-sm font-semibold mb-3 text-foreground/70">Education</h3>
              <p className="text-foreground">DAV Group of Schools (TNAES), Chennai</p>
              <p className="text-sm text-foreground/70">Computer Science • 2011 - 2025</p>
            </div>
          </div>
        </motion.div>
        
        <motion.div
          className="lg:col-span-2"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h1 className="text-3xl font-bold font-cyber mb-6">About Me</h1>
          
          <div className="space-y-6 text-foreground/80">
            <p>
              I am a dedicated and collaborative individual with a strong interest in technology, 
              artificial intelligence (AI), and creative design. I am passionate about leading 
              initiatives that bring people together to innovate, solve problems, and create 
              meaningful impact.
            </p>
            <p>
              As the secretary of the Computer Science Club, I've had the opportunity to organize 
              workshops, hackathons, and tech talks that have helped students develop their technical 
              skills and explore new technologies.
            </p>
            <p>
              I'm particularly interested in the intersection of technology and creativity, using 
              my skills in programming, design, and leadership to build innovative solutions to 
              real-world problems.
            </p>
          </div>
          
          <h2 className="text-2xl font-bold font-cyber mt-10 mb-6">Experience</h2>
          
          <div className="space-y-8">
            {/* Experience item 1 */}
            <div className="glass p-6 rounded-xl relative">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Briefcase className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-bold">Computer Science Club Secretary</h3>
                  <p className="text-foreground/70 mb-2">DAV Group of Schools (TNAES), Chennai</p>
                  <div className="flex items-center gap-1 text-sm text-foreground/60 mb-4">
                    <Calendar className="w-4 h-4" />
                    <span>Mar 2022 - Present</span>
                  </div>
                  <p className="text-foreground/80">
                    Led the Computer Science Club, organizing workshops and events to promote
                    technical learning and innovation among students.
                  </p>
                </div>
              </div>
            </div>
            
            {/* Experience item 2 */}
            <div className="glass p-6 rounded-xl relative">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Award className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-bold">Chief Cultural Coordinator - jarvis'24</h3>
                  <p className="text-foreground/70 mb-2">DAV Group of Schools (TNAES), Chennai</p>
                  <div className="flex items-center gap-1 text-sm text-foreground/60 mb-4">
                    <Calendar className="w-4 h-4" />
                    <span>Aug 2024 - Dec 2024</span>
                  </div>
                  <p className="text-foreground/80">
                    Coordinated cultural activities and events, managing teams and ensuring
                    successful execution of programs.
                  </p>
                </div>
              </div>
            </div>
            
            {/* Experience item 3 */}
            <div className="glass p-6 rounded-xl relative">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <GraduationCap className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-bold">Co-Founder</h3>
                  <p className="text-foreground/70 mb-2">Trizz Global</p>
                  <div className="flex items-center gap-1 text-sm text-foreground/60 mb-4">
                    <Calendar className="w-4 h-4" />
                    <span>Apr 2024 - Present</span>
                  </div>
                  <p className="text-foreground/80">
                    Co-founded Trizz Global, focusing on innovative solutions and
                    entrepreneurial initiatives.
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <h2 className="text-2xl font-bold font-cyber mt-10 mb-6">Certifications</h2>
          
          <div className="space-y-4">
            <div className="glass p-4 rounded-xl flex items-center gap-4">
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Microsoft_logo.svg/512px-Microsoft_logo.svg.png" alt="Microsoft" className="w-10 h-10 object-contain" />
              <div>
                <h3 className="font-semibold">Career Essentials in Generative AI by Microsoft and LinkedIn</h3>
                <p className="text-sm text-foreground/70">Issued Jan 2025</p>
              </div>
            </div>
            
            <div className="glass p-4 rounded-xl flex items-center gap-4">
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/LinkedIn_logo_initials.png/640px-LinkedIn_logo_initials.png" alt="LinkedIn" className="w-10 h-10 object-contain" />
              <div>
                <h3 className="font-semibold">Ethics in the Age of Generative AI</h3>
                <p className="text-sm text-foreground/70">Issued Jan 2025</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </PageContainer>
  );
};

export default About;
