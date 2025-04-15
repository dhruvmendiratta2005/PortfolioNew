import { motion } from "framer-motion";

const Skills = () => {
  const skills = [
    { name: "Python", level: 90, color: "#00ffcc" },
    { name: "JavaScript", level: 85, color: "#ff2ced" },
    { name: "React", level: 80, color: "#ffcc00" },
    { name: "AI/ML", level: 75, color: "#00ffcc" },
    { name: "UI/UX", level: 70, color: "#ff2ced" },
  ];

  return (
    <section className="py-20 bg-primary text-accent">
      <h2 className="text-4xl font-bold text-center mb-12 gradient-text">Skills</h2>
      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4">
        {skills.map((skill, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="bg-gradient-to-br from-primary to-gray-900 p-6 rounded-xl border border-secondary/20 hover:border-secondary/50 transition-all"
          >
            <h3 className="text-xl font-bold mb-2 text-white">{skill.name}</h3>
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