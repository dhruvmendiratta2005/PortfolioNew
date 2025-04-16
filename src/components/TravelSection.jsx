import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import { motion } from 'framer-motion';
import 'leaflet/dist/leaflet.css';

// Fix for default marker icons
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png',
  iconUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png',
});

const TravelSection = () => {
  const visitedPlaces = [
    { id: 1, name: "Goa, India", position: [15.2993, 74.1240], date: "Jan 2023", description: "Beach vacation with friends", image: "/travel/goa.jpg" },
    { id: 2, name: "Himalayas, India", position: [31.1048, 77.1734], date: "Jun 2022", description: "Trekking expedition", image: "/travel/himalayas.jpg" },
    { id: 3, name: "Jaipur, India", position: [26.9124, 75.7873], date: "Dec 2021", description: "Cultural heritage tour", image: "/travel/jaipur.jpg" },
    { id: 4, name: "Dubai, UAE", position: [25.276987, 55.296249], date: "2025", description: "Skyline views and desert safari", image: "/images/dubai.jpg" },
    { id: 5, name: "Phuket, Thailand", position: [7.8804, 98.3923], date: "2024", description: "Island hopping and beaches", image: "/images/phuket.jpg" },
    { id: 6, name: "Krabi, Thailand", position: [8.0863, 98.9063], date: "2023", description: "Caves and boat rides" },
    { id: 7, name: "Kuala Lumpur, Malaysia", position: [3.139, 101.6869], date: "2023", description: "Petronas Towers and city life" },
    { id: 8, name: "Bangkok, Thailand", position: [13.7563, 100.5018], date: "2023", description: "Temples and shopping" },
    { id: 9, name: "Pattaya, Thailand", position: [12.9236, 100.8825], date: "2023", description: "Beach vibes" },
    { id: 10, name: "Singapore", position: [1.3521, 103.8198], date: "2023", description: "Urban nature and Marina Bay" },
    { id: 11, name: "Delhi, India", position: [28.6139, 77.2090], date: "2021", description: "Capital visit" },
    { id: 12, name: "Mumbai, India", position: [19.0760, 72.8777], date: "Multiple", description: "Hometown" },
    { id: 13, name: "Chennai, India", position: [13.0827, 80.2707], date: "2024", description: "College city" },
    { id: 14, name: "Pondicherry, India", position: [11.9416, 79.8083], date: "2024", description: "French vibes and beaches", image: "/images/pondicherry.jpg"  },
    { id: 15, name: "Manali, India", position: [32.2396, 77.1887], date: "2022", description: "Snow and adventure" },
    { id: 16, name: "Rohtang Pass, India", position: [32.3643, 77.6068], date: "2022", description: "Snowy mountain pass" },
    { id: 17, name: "Nainital, India", position: [29.3919, 79.4542], date: "2021", description: "Lake town getaway" },
    { id: 18, name: "Jim Corbett, India", position: [29.5300, 78.7747], date: "2021", description: "Wildlife safari" },
    { id: 19, name: "Dehradun, India", position: [30.3165, 78.0322], date: "2021", description: "Hill station peace" },
    { id: 20, name: "Shimla, India", position: [31.1048, 77.1734], date: "2021", description: "British colonial town" },
    { id: 21, name: "Ludhiana, India", position: [30.9010, 75.8573], date: "2020", description: "Punjab heartland" },
    { id: 22, name: "Ahmedabad, India", position: [23.0225, 72.5714], date: "2021", description: "Cultural capital of Gujarat" },
    { id: 23, name: "Indore, India", position: [22.7196, 75.8577], date: "2021", description: "Food capital of MP" },
    { id: 24, name: "Hyderabad, India", position: [17.3840, 78.4563], date: "2017", description: "Upcoming Tech Hub" },
    { id: 25, name: "Bengaluru, India", position: [12.9724, 77.5806], date: "2021", description: "Silicon Valley Of India" },
    { id: 26, name: "Jabalpur, India", position: [23.1600, 79.9500], date: "2021", description: "Great City" },
    { id: 27, name: "Jaisalmer, India", position: [26.9116, 70.9229], date: "2021", description: "Deserts and camels" },
    { id: 28, name: "Udaipur, India", position: [24.5854, 73.7125], date: "2021", description: "Food capital of MP" },
    { id: 29, name: "Auranagabad, India", position: [19.8846, 75.3398], date: "2021", description: "Lived here for 1 year" },
    { id: 30, name: "Agra, India", position: [27.1833, 78.0167], date: "2021", description: "Taj Mahal" },
    { id: 31, name: "Amritsar, India", position: [31.6339, 74.8722], date: "2021", description: "Wagha Border" },
    { id: 32, name: "Kohlapur, India", position: [16.6913, 74.2448], date: "2021", description: "Mom Dad College" },
    { id: 33, name: "Pune, India", position: [18.5204, 73.8567], date: "2021", description: "Tech city visit" },
    { id: 34, name: "Nashik, India", position: [19.9975, 73.7898], date: "2021", description: "Religious and vineyard town" },
    { id: 35, name: "Daman, India", position: [20.3974, 72.8328], date: "2021", description: "Beach escape on the west coast" },
    { id: 36, name: "Vapi, India", position: [20.3719, 72.9043], date: "2021", description: "Industrial stopover" },
    { id: 37, name: "Sriharikota, India", position: [13.7192, 80.2304], date: "2024", description: "ISRO spaceport exploration" },
    { id: 38, name: "Surat, India", position: [21.1702, 72.8311], date: "2021", description: "Diamond city and food hub" },
    { id: 39, name: "Ganpatipule, India", position: [17.1426, 73.2829], date: "2020", description: "Serene beach and Ganpati temple" },
    { id: 41, name: "Mahabaleshwar, India", position: [17.9307, 73.6475], date: "2021", description: "Strawberries, hills, and scenic views" }
  ];

  const featuredPlaces = visitedPlaces.filter(place =>
    ["Pondicherry, India", "Dubai, UAE", "Phuket, Thailand"].includes(place.name)
  );

  return (
    <section id="travel" className="py-20 bg-gradient-to-br from-primary to-gray-900">
      <div className="container mx-auto px-4">
        <motion.h2 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold text-center mb-12 text-white"
        >
          My Travel Adventures
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-center text-gray-300 max-w-2xl mx-auto mb-12"
        >
          Exploring new places and cultures is my passion. Here are some of my favorite destinations.
        </motion.p>

        {/* Map Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="relative h-[500px] rounded-xl overflow-hidden border border-secondary/20 shadow-lg"
        >
          <MapContainer
            center={[20.5937, 78.9629]}
            zoom={4}
            style={{ height: '100%', width: '100%' }}
          >
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            />
            {visitedPlaces.map(place => (
              <Marker key={place.id} position={place.position}>
                <Popup>
                  <div className="max-w-xs">
                    <h3 className="font-bold text-gray-800">{place.name}</h3>
                    <p className="text-sm text-gray-600">{place.date}</p>
                    {place.image && (
                      <img 
                        src={place.image} 
                        alt={place.name}
                        className="w-full h-24 object-cover rounded mt-2"
                      />
                    )}
                    <p className="text-sm mt-2 text-gray-700">{place.description}</p>
                  </div>
                </Popup>
              </Marker>
            ))}
          </MapContainer>
        </motion.div>

        {/* Featured Travel Gallery */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12"
        >
          {featuredPlaces.map(place => (
            <motion.div
              key={place.id}
              whileHover={{ y: -5 }}
              className="bg-gray-800 rounded-lg overflow-hidden border border-secondary/20 hover:border-secondary/50 transition-all"
            >
              {place.image && (
                <img 
                  src={place.image} 
                  alt={place.name}
                  className="w-full h-48 md:h-64 lg:h-80 object-cover"

                />
              )}
              <div className="p-4">
                <h3 className="text-xl font-bold text-white">{place.name}</h3>
                <p className="text-secondary text-sm mb-2">{place.date}</p>
                <p className="text-gray-300 text-sm">{place.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default TravelSection;
