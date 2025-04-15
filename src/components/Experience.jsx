import { motion } from "framer-motion";
import { FaBriefcase, FaUserTie } from "react-icons/fa";

const Experience = () => {
  const experiences = [
    {
      role: "Product Intern",
      company: "GoKiwi",
      period: "2024",
      desc: "Improved user journeys & dashboard features for travel tech platform",
      icon: <FaBriefcase className="text-secondary" size={24} />
    },
    {
      role: "Team Member",
      company: "AIESEC",
      period: "2023",
      desc: "Organized cross-cultural exchange programs and leadership events",
      icon: <FaUserTie className="text-accent" size={24} />
    }
  ];

  return (
    <section className="py-20 bg-primary">
      <h2 className="text-4xl font-bold text-center mb-12 gradient-text">Experience</h2>
      <div className="max-w-4xl mx-auto px-4">
        {experiences.map((exp, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: i * 0.2 }}
            className="mb-8 p-6 rounded-xl bg-gradient-to-r from-primary to-gray-900 border border-secondary/20 hover:border-secondary/50 transition-all"
          >
            <div className="flex items-start gap-4">
              <div className="p-2 rounded-full bg-gray-800">
                {exp.icon}
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white">{exp.role} @ {exp.company}</h3>
                <p className="text-secondary mb-2">{exp.period}</p>
                <p className="text-accent">{exp.desc}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Experience;