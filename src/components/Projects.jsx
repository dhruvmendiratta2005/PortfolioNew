import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const Projects = () => {
  const projects = [
    {
      title: "Helix Oracle AI",
      desc: "AI-powered chatbot with CRM integration and multilingual support",
      tech: "React, Node.js, Python, Dialogflow",
      link: "#",
      github: "#",
      color: "#00ffcc"
    },
    {
      title: "Bank Management System",
      desc: "Full banking system with admin panel, transactions, and MySQL database",
      tech: "Python, Tkinter, MySQL",
      link: "#",
      github: "#",
      color: "#ff2ced"
    },
    {
      title: "InspireUI Clone",
      desc: "Pinterest-like app for UI/UX design templates",
      tech: "Flutter, Firebase",
      link: "#",
      github: "#",
      color: "#ffcc00"
    }
  ];

  return (
    <section className="py-20 bg-primary" id="projects">
      <h2 className="text-4xl font-bold text-center mb-12 gradient-text">Projects</h2>
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
        {projects.map((project, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            whileHover={{ y: -10 }}
            className="bg-gradient-to-br from-primary to-gray-900 rounded-xl overflow-hidden border border-secondary/20 hover:border-secondary/50 transition-all"
          >
            <div 
              className="h-3 w-full"
              style={{ backgroundColor: project.color }}
            ></div>
            <div className="p-6">
              <h3 className="text-2xl font-bold text-white mb-2">{project.title}</h3>
              <p className="text-accent mb-4">{project.desc}</p>
              <p className="text-secondary mb-4">{project.tech}</p>
              <div className="flex gap-4">
                <a 
                  href={project.github} 
                  className="flex items-center gap-2 text-white hover:text-secondary"
                >
                  <FaGithub /> Code
                </a>
                <a 
                  href={project.link} 
                  className="flex items-center gap-2 text-white hover:text-secondary"
                >
                  <FaExternalLinkAlt /> Live Demo
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;