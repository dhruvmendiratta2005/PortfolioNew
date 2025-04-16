import { motion } from "framer-motion";
import { FaCertificate, FaExternalLinkAlt, FaGraduationCap, FaCode, FaTrophy } from "react-icons/fa";
import { useState } from "react";

const Certificates = () => {
  // Certificate data organized by type
  const certificateData = {
    courses: [
      {
        title: "100 Days of Code - Python Bootcamp",
        issuer: "Udemy",
        date: "Oct 2023",
        image: "/certificates/udemypy.jpg",
        url: "#ude.my/UC-f9eb9d8e-edce-4035-84fc-324a211d60e6"
      },
      {
        title: "Programming in JAVA",
        issuer: "NPTEL",
        date: "Oct 2024",
        image: "/certificates/npteljava.jpg",
        url: "#"
      },
      {
        title: "Mastering DSA in C and CPP",
        issuer: "Udemy",
        date: "Nov 2024",
        image: "/certificates/dsaudemy.jpg",
        url: "#"
      },
      {
        title: "Complete Web Development",
        issuer: "Udemy",
        date: "Jan 2024",
        image: "/certificates/webudemy.jpg",
        url: "#"
      }
    ],
    workshops: [
      {
        title: "Mastering ML Fundamentals",
        issuer: "YouTube",
        date: "Sept 2023",
        image: "/certificates/youtube.jpg",
        url: "#"
      }
    ],
    hackathons: [
      {
        title: "Bugbusters Finalist",
        issuer: "CINTEL Student Association",
        date: "Sept 2024",
        image: "/certificates/bugbusters.png",
        url: "#"
      },
      {
        title: "Smart India Hackathon",
        issuer: "SIH Ministry of Education",
        date: "Sept 2024",
        image: "/certificates/sih.jpg",
        url: "#"
      },
      {
        title: "Pair Programing",
        issuer: "Computing Technologies SRM ACM",
        date: "Aug 2024",
        image: "/certificates/pp.jpg",
        url: "#"
      }
    ]
  };

  const [activeTab, setActiveTab] = useState("courses");

  return (
    <section id="certificates" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.h2 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold text-center mb-6 gradient-text"
        >
          <FaCertificate className="inline mr-3" />
          Achievements
        </motion.h2>

        {/* Category Tabs */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex bg-gray-800 rounded-lg p-1">
            {[
              { id: "courses", icon: <FaGraduationCap />, label: "Courses" },
              { id: "workshops", icon: <FaCode />, label: "Workshops" },
              { id: "hackathons", icon: <FaTrophy />, label: "Hackathons" }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-4 py-2 rounded-md flex items-center transition-all ${
                  activeTab === tab.id 
                    ? "bg-secondary text-primary" 
                    : "text-gray-300 hover:text-white"
                }`}
              >
                <span className="mr-2">{tab.icon}</span>
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Certificates Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certificateData[activeTab].map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="bg-gray-800 rounded-xl overflow-hidden border border-secondary/20 hover:border-secondary/50 transition-all"
            >
              <div className="relative group h-48 overflow-hidden">
                <img 
                  src={cert.image} 
                  alt={cert.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <a 
                  href={cert.url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="absolute inset-0 bg-black/60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
                >
                  <FaExternalLinkAlt className="text-3xl text-white" />
                </a>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2">{cert.title}</h3>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-300">{cert.issuer}</span>
                  <span className="text-secondary">{cert.date}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certificates;