import { motion } from "framer-motion";

const About = () => {
  const timeline = [
    { year: "2023", title: "SRM University", desc: "B.Tech CSE (GPA: 9.94)" },
    { year: "2024", title: "GoKiwi Internship", desc: "Product Research & UX" },
    { year: "2025", title: "AIthon Hackathon", desc: "Helix Oracle AI Project" },
  ];

  return (
    <section className="py-20 bg-primary text-accent">
      <h2 className="text-4xl font-bold text-center mb-12 gradient-text">About Me</h2>
      <div className="max-w-4xl mx-auto px-4">
        {timeline.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: i % 2 === 0 ? -100 : 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="mb-8 p-6 rounded-xl bg-gradient-to-r from-primary to-gray-900 border border-secondary/20 hover:border-secondary/50 transition-all"
          >
            <div className="flex items-start">
              <div className="bg-secondary w-4 h-4 rounded-full mt-1 mr-4 glow"></div>
              <div>
                <h3 className="text-2xl font-bold text-white">{item.title}</h3>
                <p className="text-accent">{item.year} · {item.desc}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default About;