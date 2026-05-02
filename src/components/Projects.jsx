import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const Projects = () => {
  const projects = [
    {
      title: "Dual Interpretable Multi-Label Chest X-Ray Classification",
      desc: "Developed a CNN-KAN based deep learning model for multi-label disease detection from chest X-rays with enhanced interpretability for medical diagnostics.",
      tech: "Python, TensorFlow/Keras, CNN, KAN, Medical Imaging",
      link: "#",
      github: "https://github.com/dhruvmendiratta2005/explainable-medical-ai",
      color: "#00ffcc"
    },
    {
      title: "LocaHelp",
      desc: "Built a location-based assistance platform connecting users with nearby help services in real-time with a clean and responsive UI.",
      tech: "React, Node.js, Firebase",
      link: "https://locahelp-final.vercel.app/",
      github: "https://github.com/dhruvmendiratta2005/Locahelp_final",
      color: "#ffcc00"
    },
    {
      title: "ML powered - Emotion based Music Player System",
      desc: "Designed an interactive music player system focusing mood based music playback system for improved usability and user experience.",
      tech: "React, Vite, JavaScript, UI/UX, ML",
      contributor: "https://github.com/ayushdhandhan",
      link: "https://ml-powered-playback.vercel.app/",
      github: "https://github.com/ayushdhandhan/ML-powered-playback",
      color: "#ff2ced"
    },
    {
      title: "Helix Oracle AI",
      desc: "AI-powered chatbot with CRM integration and multilingual support for intelligent customer interaction.",
      tech: "React, Node.js, Python, Dialogflow",
      link: "#",
      github: "#",
      color: "#ff2ced"
    },
    {
      title: "Bank Management System",
      desc: "Full-fledged banking system with authentication, transactions, and MySQL integration using a scalable backend design.",
      tech: "Python, Tkinter, MySQL",
      link: "#",
      github: "https://github.com/dhruvmendiratta2005/bank_management_using_tkinter",
      color: "#00ffcc"
    },
    {
      title: "InspireUI",
      desc: "Pinterest-like platform for discovering and sharing UI/UX design templates with a strong focus on design inspiration.",
      tech: "Flutter, Firebase",
      link: "#",
      github: "#",
      color: "#ffcc00"
    },
    {
      title: "RFID Smart Attendance System",
      desc: "Arduino-based RFID attendance system with automated logging and real-time tracking integration.",
      tech: "Arduino, RFID, Embedded Systems",
      link: "#",
      github: "#",
      color: "#00ffcc"
    }
  ];

  return (
    <section className="py-20 bg-primary" id="projects">
      <h2 className="text-4xl font-bold text-center mb-12 gradient-text">
        Projects
      </h2>

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
              <h3 className="text-2xl font-bold text-white mb-2">
                {project.title}
              </h3>

              <p className="text-accent mb-4">{project.desc}</p>

              <p className="text-secondary mb-2">{project.tech}</p>

              {project.contributor && (
                <p className="text-sm text-gray-400 mb-3">
                  Contributor:{" "}
                  <a
                    href={project.contributor}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:underline"
                  >
                    View Profile
                  </a>
                </p>
              )}

              <div className="flex gap-4">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-white hover:text-secondary"
                >
                  <FaGithub /> Code
                </a>

                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
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