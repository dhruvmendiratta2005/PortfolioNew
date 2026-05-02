import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Certificates', href: '#certificates' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'py-4' : 'py-6'}`}
    >
      <div className="max-w-5xl mx-auto px-4">
        <div className={`flex items-center justify-center rounded-full transition-all duration-300 overflow-x-auto no-scrollbar ${
          scrolled 
            ? 'bg-[#0f172a]/80 backdrop-blur-md shadow-lg shadow-black/20 border border-white/10 py-3 px-6' 
            : 'bg-[#0f172a]/50 backdrop-blur-sm border border-white/5 py-3 px-6'
        }`}>
          <div className="flex space-x-1 md:space-x-2">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href}
                className="text-gray-300 hover:text-[#38bdf8] whitespace-nowrap px-3 py-2 rounded-full hover:bg-white/5 transition-all text-sm font-medium"
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
