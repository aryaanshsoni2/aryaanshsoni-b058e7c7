
import { motion } from "framer-motion";
import PageContainer from "@/components/page-container";
import ContactForm from "@/components/contact-form";
import { MapPin, Mail, Github, Linkedin } from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: <MapPin className="w-5 h-5 text-primary" />,
      title: "Location",
      content: "Chennai, Tamil Nadu, India",
    },
    {
      icon: <Mail className="w-5 h-5 text-primary" />,
      title: "Email",
      content: "saryaansh@gmail.com",
      link: "mailto:saryaansh@gmail.com",
    },
    {
      icon: <Linkedin className="w-5 h-5 text-primary" />,
      title: "LinkedIn",
      content: "aryaansh-soni",
      link: "https://www.linkedin.com/in/aryaansh-soni-864794217/",
    },
    {
      icon: <Github className="w-5 h-5 text-primary" />,
      title: "GitHub",
      content: "AryaanshSoni",
      link: "https://github.com/AryaanshSoni",
    },
  ];

  return (
    <PageContainer>
      <motion.div
        className="text-center mb-12"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-4xl font-bold font-cyber mb-4">Contact Me</h1>
        <p className="text-foreground/80 max-w-2xl mx-auto">
          Feel free to reach out for collaborations, opportunities, or just to say hello!
        </p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="glass p-8 rounded-xl h-full">
            <h2 className="text-2xl font-bold font-cyber mb-6">Get In Touch</h2>
            <p className="text-foreground/80 mb-8">
              I'm currently available for freelance work, collaboration, or internship 
              opportunities. Feel free to reach out if you have a project you'd like to 
              discuss or just want to connect!
            </p>
            
            <div className="space-y-6">
              {contactInfo.map((item, index) => (
                <motion.div 
                  key={item.title}
                  className="flex items-start gap-4"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.3 + (index * 0.1) }}
                >
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="font-medium">{item.title}</h3>
                    {item.link ? (
                      <a 
                        href={item.link} 
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-foreground/80 hover:text-primary transition-colors"
                      >
                        {item.content}
                      </a>
                    ) : (
                      <p className="text-foreground/80">{item.content}</p>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <ContactForm />
        </motion.div>
      </div>
    </PageContainer>
  );
};

export default Contact;
