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

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="card"
        >
          <h2 className="text-2xl font-semibold mb-4">Visit Our Location</h2>
          <div className="h-[400px] rounded-lg overflow-hidden">
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
          <div className="mt-4 text-center">
            <a
              href="https://www.google.com/maps/place/54+Sewardstone+Rd,+London+E4+7PR"
              target="_blank"
              rel="noopener noreferrer"
              className="button inline-block"
            >
              Get Directions
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
}