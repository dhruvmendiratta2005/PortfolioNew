import { motion } from "framer-motion";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

import L from "leaflet";
import "leaflet/dist/leaflet.css";

// Fix for missing marker icons in React
delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
  iconUrl:
    "https://unpkg.com/leaflet@1.9.3/dist/images/marker-icon.png",
  iconRetinaUrl:
    "https://unpkg.com/leaflet@1.9.3/dist/images/marker-icon-2x.png",
  shadowUrl:
    "https://unpkg.com/leaflet@1.9.3/dist/images/marker-shadow.png",
});

const About = () => {
  const timeline = [
    { 
      year: "2026", 
      title: "Wells Fargo ILP offer", 
      desc: "Upcoming Intern at Wells Fargo",
      images: [
        "/images/wells_fargo_sign.jpg",
        "/images/wells_fargo_group.jpg"
      ]
    },
    { year: "2026", title: "Best Project Award", desc: "Adaptive Traffic Management DevOps Project" },
    { year: "2026", title: "MongoDB Associate Developer", desc: "Successfully completed a global certification with MongoDB" },
    { year: "2026", title: "SAP Certified Data Analyst", desc: "Successfully completed a global certification with SAP" },
    { year: "2025", title: "Internship with Maa Foundation", desc: "Tech Intern at Maa Foundation" }
  ];

  return (
    <section id="about" className="py-20 bg-primary text-accent">

      {/* Recent Highlights Section */}
      <div className="text-center mb-12">
        <motion.h3
          className="text-4xl font-extrabold text-white gradient-text"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Recent Highlights
        </motion.h3>
      </div>

      {/* Timeline */}
      <div className="max-w-4xl mx-auto px-4">
        {timeline.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: i % 2 === 0 ? -100 : 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="mb-8 p-6 rounded-xl bg-gradient-to-r from-primary to-gray-900 border border-secondary/20 hover:border-secondary/50 transition-all"
          >
            <div className="flex items-start gap-4">
              <div className="bg-secondary w-4 h-4 rounded-full mt-2 glow flex-shrink-0"></div>
              <div className="flex-grow">
                <h3 className="text-2xl font-bold text-white">{item.title}</h3>
                <p className="text-accent mb-1">{item.year} · {item.desc}</p>
                {item.images && (
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
                    {item.images.map((img, idx) => (
                      <motion.div
                        key={idx}
                        whileHover={{ scale: 1.03 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden rounded-xl border border-secondary/10 shadow-lg aspect-[4/3] bg-gray-950 relative group cursor-pointer"
                      >
                        <img 
                          src={img} 
                          alt={`${item.title} highlight ${idx + 1}`} 
                          className="w-full h-full object-cover object-center group-hover:scale-105 group-hover:brightness-110 transition-all duration-500"
                        />
                      </motion.div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Leaflet Map with Multiple Locations */}
      <div className="max-w-4xl mx-auto mt-16">
        <h3 className="text-2xl font-semibold mb-4 text-center">📍 My Journey Across India</h3>
        <div className="rounded-2xl overflow-hidden shadow-lg border border-secondary/30">
          <MapContainer
            center={[22.5937, 78.9629]} // Center of India
            zoom={4.4}
            scrollWheelZoom={false}
            style={{ height: "400px", width: "100%" }}
          >
            <TileLayer
              attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a>'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />

            {/* Mumbai */}
            <Marker position={[19.0760, 72.8777]}>
              <Popup>🏙️ Mumbai — Where I grew up</Popup>
            </Marker>

            {/* Gurgaon */}
            <Marker position={[28.4595, 77.0266]}>
              <Popup>🌇 Gurgaon — Lived here for a while</Popup>
            </Marker>

            {/* Vapi */}
            <Marker position={[20.3893, 72.9106]}>
              <Popup>🏡 Vapi — My current home</Popup>
            </Marker>

            {/* SRM University */}
            <Marker position={[12.8232, 80.0442]}>
              <Popup>🎓 SRM IST — Pursuing B.Tech CSE</Popup>
            </Marker>

            {/* Wells Fargo Internship - Hyderabad */}
            <Marker position={[17.4435, 78.3772]}>
              <Popup>💼 Wells Fargo — Software Engineering Intern (Summer 2026)</Popup>
            </Marker>
          </MapContainer>
        </div>
      </div>
    </section>
  );
};

export default About;
