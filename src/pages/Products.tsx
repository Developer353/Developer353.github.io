import { motion } from 'framer-motion';

// Import images from the 'src/images' folder
import hydrationImage from '../images/hydration.jpg';
import agingImage from '../images/aging.jpg';
import sensitiveImage from '../images/sensitive.jpg';
import brighteningImage from '../images/brightening.jpg';
import acneImage from '../images/acne.jpg';

const products = [
  {
    image: hydrationImage, // Imported image
    title: 'Hydrating Serums', // Updated to plural
  },
  {
    image: agingImage, // Imported image
    title: 'Anti-Aging Creams', // Updated to plural
  },
  {
    image: sensitiveImage, // Imported image
    title: 'Sensitive Skin Lotions', // Updated to plural
  },
  {
    image: brighteningImage, // Imported image
    title: 'Brightening Serums', // Updated to plural
  },
  {
    image: acneImage, // Imported image
    title: 'Acne Treatment Gels', // Updated to plural
  }
];

export default function Products() {
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
            Featured Products
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover our collection of premium beauty products
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {products.map((product, index) => (
            <motion.div
              key={product.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="card group"
            >
              <div className="aspect-square mb-4 overflow-hidden rounded-lg">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <h2 className="text-xl font-semibold mb-2">{product.title}</h2>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
