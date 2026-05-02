import { motion } from "framer-motion";
import { FaLinkedin, FaExternalLinkAlt } from "react-icons/fa";

const Posts = () => {
  const posts = [
    {
      title: "Excited to join Wells Fargo as an Intern!",
      snippet: "Thrilled to announce that I'll be joining Wells Fargo this summer as a Software Engineering Intern. Looking forward to working on enterprise-level financial systems and learning from the best in the industry.",
      date: "May 2026",
      url: "https://www.linkedin.com/in/dhruv-mendiratta-b2251a2a7",
    },
    {
      title: "The Future of AI in Medical Imaging",
      snippet: "My recent work on CNN-KAN models for chest X-ray classification has opened my eyes to the incredible potential of explainable AI in healthcare. It's not just about accuracy, but about trust and interpretability.",
      date: "Apr 2026",
      url: "https://www.linkedin.com/in/dhruv-mendiratta-b2251a2a7",
    },
    {
      title: "Building Scalable Portfolios with React & Tailwind",
      snippet: "Just finished major updates to my personal portfolio. Focusing on clean code, professional aesthetics, and smooth user experience. Modern web development is truly an art form.",
      date: "May 2026",
      url: "https://www.linkedin.com/in/dhruv-mendiratta-b2251a2a7",
    }
  ];

  return (
    <section id="posts" className="py-20 bg-primary">
      <div className="container mx-auto px-4">
        <motion.h2 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold text-center mb-12 gradient-text"
        >
          Professional Posts
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {posts.map((post, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -5 }}
              className="bg-gray-800 rounded-2xl overflow-hidden border border-secondary/20 hover:border-secondary/50 transition-all flex flex-col shadow-xl shadow-black/20"
            >
              <div className="p-6 flex-grow">
                <div className="flex justify-between items-start mb-4">
                  <FaLinkedin className="text-2xl text-[#0077b5]" />
                  <span className="text-sm text-secondary font-medium">{post.date}</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-3 leading-tight">
                  {post.title}
                </h3>
                <p className="text-accent text-sm leading-relaxed">
                  {post.snippet}
                </p>
              </div>
              
              <div className="p-6 pt-0 mt-auto border-t border-white/5">
                <a 
                  href={post.url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-sm font-bold text-secondary hover:text-white transition-colors"
                >
                  Read on LinkedIn <FaExternalLinkAlt className="ml-2 text-xs" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Posts;
