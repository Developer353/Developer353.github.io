import { motion } from 'framer-motion';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { Icon } from 'leaflet';

// Fix for default marker icon
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';

const defaultIcon = new Icon({
  iconUrl: icon,
  shadowUrl: iconShadow,
  iconSize: [25, 41],
  iconAnchor: [12, 41]
});

export default function About() {
  const position: [number, number] = [51.635168416456814, -0.012722487161603733];

  return (
    <div className="bg-white min-h-screen py-16 md:py-24">
      <div className="container mx-auto px-4">
        {/* Header Section with Animation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center mb-12 md:mb-16"
        >
          <h1 className="text-3xl md:text-4xl font-bold text-gold-gradient mb-6">
            About Vblush
          </h1>
          <p className="text-gray-600 mb-8">
            Welcome to Vblush! We are a luxury brand focused on delivering top-quality beauty products 
            and services. Our mission is to bring elegance and beauty to every client, providing 
            exceptional experiences that enhance natural beauty and boost confidence.
          </p>
        </motion.div>

        {/* Map Section with Animation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="card shadow-lg p-6 rounded-lg bg-white"
        >
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">Visit Our Location</h2>
          <div className="h-[400px] rounded-lg overflow-hidden mb-6">
            <MapContainer 
              center={position} 
              zoom={15} 
              style={{ height: '100%', width: '100%' }}
            >
              <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              />
              <Marker position={position} icon={defaultIcon}>
                <Popup>
                  Vblush Beauty Salon<br />
                  54 Sewardstone Rd, London E4 7PR
                </Popup>
              </Marker>
            </MapContainer>
          </div>
          <div className="text-center">
            <a
              href="https://www.google.com/maps/place/54+Sewardstone+Rd,+London+E4+7PR"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gold-gradient text-white px-6 py-3 rounded-md text-lg font-semibold transition duration-300 hover:bg-gold-500"
            >
              Get Directions
            </a>
          </div>
        </motion.div>

        {/* Partnered Brands Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 text-center"
        >
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">Our Partners</h2>
          <div className="flex justify-center gap-8">
            <div className="flex items-center justify-center w-24">
              <img
                src="/src/images/Shop 1.jpeg" 
                alt="Shop 1"
                className="w-full h-auto object-contain"
              />
            </div>
            <div className="flex items-center justify-center w-24">
              <img
                src="/src/images/Shop 2.jpeg" 
                alt="Shop 2"
                className="w-full h-auto object-contain"
              />
            </div>
            <div className="flex items-center justify-center w-24">
              <img
                src="/src/images/Shop 3.jpeg" 
                alt="Shop 3"
                className="w-full h-auto object-contain"
              />
            </div>
            <div className="flex items-center justify-center w-24">
              <img
                src="/src/images/Shop 4.jpeg" 
                alt="Shop 4"
                className="w-full h-auto object-contain"
              />
            </div>
            <div className="flex items-center justify-center w-24">
              <img
                src="/src/images/Shop 5.jpeg" 
                alt="Shop 5"
                className="w-full h-auto object-contain"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
