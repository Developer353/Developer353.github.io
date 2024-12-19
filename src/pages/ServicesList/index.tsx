import { motion } from 'framer-motion';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { serviceCategories } from './serviceData';
import { ServiceCategory } from './ServiceCategory';

export default function ServicesList() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const element = document.querySelector(location.hash);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [location]);

  return (
    <div className="bg-white min-h-screen py-16 md:py-24">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="text-3xl md:text-4xl font-bold text-gold-gradient mb-4">
            Our Services & Pricing
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Explore our comprehensive range of beauty and wellness services
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {serviceCategories.map((category, index) => (
            <ServiceCategory
              key={index}
              title={category.title}
              services={category.services}
              id={category.title.toLowerCase().replace(/\s+/g, '-')} // Add ID for scrolling
            />
          ))}
        </div>
      </div>
    </div>
  );
}
