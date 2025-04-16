import "leaflet/dist/leaflet.css";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import Certificates from "./components/Certificates";
import SocialFeed from "./components/SocialFeed";
import TravelSection from "./components/TravelSection";

function App() {
  return (
    <div className="text-white">
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Certificates />
      <SocialFeed />
      <TravelSection />
      <Contact />
    </div>
  );
}

export default App;