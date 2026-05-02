import { motion } from "framer-motion";

const Skills = () => {
  const skills = [
    // Core Programming
    { name: "Python", level: 90, color: "#38bdf8" },
    { name: "Java", level: 75, color: "#818cf8" },
    { name: "C++", level: 70, color: "#fcd34d" },

    // Web Development
    { name: "JavaScript", level: 85, color: "#818cf8" },
    { name: "React", level: 80, color: "#38bdf8" },
    { name: "HTML/CSS", level: 90, color: "#fcd34d" },

    // Backend & Databases
    { name: "Flask", level: 80, color: "#38bdf8" },
    { name: "MySQL", level: 85, color: "#818cf8" },
    { name: "REST APIs", level: 80, color: "#fcd34d" },

    // AI / ML / Computer Vision
    { name: "Machine Learning", level: 80, color: "#38bdf8" },
    { name: "Deep Learning", level: 75, color: "#818cf8" },
    { name: "OpenCV", level: 80, color: "#fcd34d" },
    { name: "CNN Models", level: 75, color: "#38bdf8" },

    // Tools & Tech
    { name: "Git/GitHub", level: 85, color: "#818cf8" },
    { name: "VS Code", level: 90, color: "#fcd34d" },
    { name: "Arduino/RFID", level: 70, color: "#38bdf8" },

    // Design & UI
    { name: "UI/UX Design", level: 75, color: "#818cf8" },
    { name: "Figma", level: 70, color: "#fcd34d" },
  ];

  return (
    <section id="skills" className="py-20 bg-primary text-accent">
      <h2 className="text-4xl font-bold text-center mb-12 gradient-text">
        Skills
      </h2>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4">
        {skills.map((skill, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="bg-gradient-to-br from-primary to-gray-900 p-6 rounded-xl border border-secondary/20 hover:border-secondary/50 transition-all"
          >
            <h3 className="text-xl font-bold mb-2 text-white">
              {skill.name}
            </h3>

            <div className="w-full bg-gray-800 rounded-full h-3 overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: `${skill.level}%` }}
                transition={{ duration: 1, delay: i * 0.2 }}
                className="h-3 rounded-full glow"
                style={{ backgroundColor: skill.color }}
              ></motion.div>
            </div>

            <p className="mt-2 text-sm" style={{ color: skill.color }}>
              {skill.level}%
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Skills;