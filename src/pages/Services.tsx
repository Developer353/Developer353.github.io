import { motion } from 'framer-motion';
import { Scissors, Sparkles, Heart } from 'lucide-react'; // Added 'Heart' icon for aesthetics

const services = [
  {
    icon: Sparkles,
    title: 'Luxurious Facials',
    description: 'Indulge in our signature facial treatments, customized for your unique skin needs. Experience deep cleansing, exfoliation, and rejuvenation.'
  },
  {
    icon: Heart, // Changed icon for Aesthetics
    title: 'Aesthetics',
    description: 'Explore a range of aesthetic treatments designed to rejuvenate and enhance your natural beauty. From dermal fillers to skin revitalizing treatments.'
  },
  {
    icon: Scissors,
    title: 'Hair Styling & Treatments',
    description: 'Complete hair care services including cutting, styling, coloring, and specialized treatments for damaged hair.'
  }
];

export default function Services() {
  return (
    <div className="bg-white min-h-screen py-16 md:py-24">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-16"
        >
          <h1 className="text-3xl md:text-4xl font-bold text-gold-gradient mb-4">
            Our Premium Services
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Experience luxury beauty treatments tailored to your unique needs
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="card group"
            >
              <service.icon className="w-12 h-12 text-gold-500 mb-4 group-hover:scale-110 transition-transform duration-300" />
              <h2 className="text-xl font-semibold mb-3">{service.title}</h2>
              <p className="text-gray-600 mb-4">{service.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Fresha Booking Link */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mt-16"
        >
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">
            Book Your Appointment
          </h2>

          {/* Link to Fresha booking page */}
          <a
            href="https://www.fresha.com/book-now/v-blush-ec0j4r5b/all-offer?share&pId=1359753"
            target="_blank" // Opens in a new tab
            rel="noopener noreferrer"
            className="button w-full inline-block bg-gold-600 text-white py-3 px-6 rounded-lg shadow-md hover:bg-gold-700 transition-all"
          >
            Book Now on Fresha
          </a>
        </motion.div>
      </div>
    </div>
  );
}
