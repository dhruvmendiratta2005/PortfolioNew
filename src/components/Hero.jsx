import { Canvas } from "@react-three/fiber";
import { OrbitControls, Stars } from "@react-three/drei";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="h-screen bg-primary flex items-center justify-center overflow-hidden relative">
      {/* Text Content (Centered) */}
      <div className="absolute z-10 text-center px-4">
        <motion.h1 
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-6xl md:text-8xl font-bold gradient-text glow"
        >
          Dhruv Mendiratta
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-secondary text-xl md:text-2xl mt-4 glow"
        >
          AI & Full-Stack Developer
        </motion.p>
      </div>

      {/* Profile Photo (Bottom Center on Mobile, Top Right on Desktop) */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8 }}
        className="absolute bottom-10 md:bottom-auto md:top-10 md:right-10 z-10"
      >
        <div className="relative w-32 h-32 md:w-48 md:h-48">
          {/* Glow Effect */}
          <div className="absolute inset-0 bg-secondary rounded-full blur-md opacity-30"></div>
          {/* Profile Image */}
          <img
            src="/images/profile.png" // Make sure to add your image to public/images/
            alt="Dhruv Mendiratta"
            className="relative z-10 w-full h-full rounded-full object-cover border-4 border-secondary/50 hover:border-secondary transition-all"
          />
        </div>
      </motion.div>

      {/* 3D Background (Original) */}
      <Canvas className="absolute w-full h-full">
        <Stars radius={100} depth={50} count={5000} factor={4} saturation={100} fade speed={2} />
        <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.5} />
      </Canvas>
    </section>
  );
};

export default Hero;