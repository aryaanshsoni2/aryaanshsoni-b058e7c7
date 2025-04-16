
import { useRef } from "react";
import Index from "@/pages/Index";
import About from "@/pages/About";
import Projects from "@/pages/Projects";
import Skills from "@/pages/Skills";
import Contact from "@/pages/Contact";

const SinglePageLayout = () => {
  const homeRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);
  const skillsRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);

  return (
    <div className="scroll-smooth">
      <section id="home" ref={homeRef} className="min-h-screen">
        <Index />
      </section>
      
      <section id="about" ref={aboutRef} className="min-h-screen">
        <About />
      </section>
      
      <section id="projects" ref={projectsRef} className="min-h-screen">
        <Projects />
      </section>
      
      <section id="skills" ref={skillsRef} className="min-h-screen">
        <Skills />
      </section>
      
      <section id="contact" ref={contactRef} className="min-h-screen">
        <Contact />
      </section>
    </div>
  );
};

export default SinglePageLayout;
