import { motion } from "framer-motion";
import { FaLinkedin, FaGithub, FaEnvelope, FaPhone } from "react-icons/fa";
import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch(`${process.env.REACT_APP_FORMSPREE_URL}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
          _replyto: formData.email
        }),
      });

      if (response.ok) {
        toast.success("Message sent successfully!");
        setFormData({ name: "", email: "", message: "" });
      } else {
        throw new Error("Failed to send message");
      }
    } catch (error) {
      toast.error("Failed to send message. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="py-20 bg-primary" id="contact">
      <Toaster position="top-center" />
      
      <h2 className="text-4xl font-bold text-center mb-12 gradient-text">Get In Touch</h2>
      
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 px-4">
        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-gradient-to-br from-primary to-gray-900 p-8 rounded-xl border border-secondary/20"
        >
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-accent mb-2">Name</label>
              <input 
                type="text" 
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full bg-gray-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-secondary"
                placeholder="Your name"
                required
              />
            </div>
            <div>
              <label className="block text-accent mb-2">Email</label>
              <input 
                type="email" 
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full bg-gray-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-secondary"
                placeholder="your.email@example.com"
                required
              />
            </div>
            <div>
              <label className="block text-accent mb-2">Message</label>
              <textarea 
                rows="5"
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="w-full bg-gray-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-secondary"
                placeholder="Your message..."
                required
              ></textarea>
            </div>
            <motion.button
              type="submit"
              disabled={isSubmitting}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`bg-secondary text-primary font-bold px-6 py-3 rounded-lg hover:bg-opacity-90 transition-all ${
                isSubmitting ? "opacity-50 cursor-not-allowed" : ""
              }`}
            >
              {isSubmitting ? "Sending..." : "Send Message"}
            </motion.button>
          </form>
        </motion.div>

        {/* Contact Info */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="space-y-6"
        >
          <div className="bg-gradient-to-br from-primary to-gray-900 p-8 rounded-xl border border-secondary/20">
            <h3 className="text-2xl font-bold text-white mb-4">Contact Info</h3>
            
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <FaEnvelope className="text-secondary" size={20} />
                <a href="mailto:dd0913@srmist.edu.in" className="text-accent hover:text-secondary">
                  dd0913@srmist.edu.in
                </a>
              </div>
              <div className="flex items-center gap-4">
                <FaPhone className="text-secondary" size={20} />
                <span className="text-accent">+91 9821402031</span>
              </div>
              <div className="flex items-center gap-4">
                <FaLinkedin className="text-secondary" size={20} />
                <a 
                  href="https://linkedin.com/in/dhruv-mendiratta-b2251a2a7" 
                  target="_blank" 
                  rel="noreferrer"
                  className="text-accent hover:text-secondary"
                >
                  linkedin.com/in/dhruv-mendiratta
                </a>
              </div>
              <div className="flex items-center gap-4">
                <FaGithub className="text-secondary" size={20} />
                <a 
                  href="https://github.com/dhruvmendiratta2005" 
                  target="_blank" 
                  rel="noreferrer"
                  className="text-accent hover:text-secondary"
                >
                  github.com/dhruvmendiratta2005
                </a>
              </div>
            </div>

          </div>

          {/* Social Links */}
          <div className="flex gap-4 justify-center">
            {[
              { icon: <FaLinkedin size={24} />, url: "https://linkedin.com/in/dhruv-mendiratta-b2251a2a7" },
              { icon: <FaGithub size={24} />, url: "https://github.com/dhruvmendiratta2005" },
            ].map((social, i) => (
              <motion.a
                key={i}
                href={social.url}
                target="_blank"
                rel="noreferrer"
                whileHover={{ y: -5, scale: 1.1 }}
                className="bg-gray-800 p-3 rounded-full text-white hover:text-secondary transition-all"
              >
                {social.icon}
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;