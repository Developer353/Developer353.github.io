import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="relative min-h-[calc(100vh-4rem)]">
      <div 
        className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1607461510433-7d7f5e25e58c')] bg-cover bg-center bg-no-repeat"
        style={{ filter: 'brightness(0.3)' }}
      />
      
      <motion.div 
        className="relative container mx-auto px-4 pt-20 md:pt-32 pb-16 text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <Sparkles className="w-12 h-12 md:w-16 md:h-16 text-gold-400 mx-auto mb-6 md:mb-8" />
        <h1 className="text-4xl md:text-6xl font-bold text-gold-gradient mb-4 md:mb-6 leading-tight">
          Where Beauty Meets Elegance
        </h1>
        <p className="text-lg md:text-xl text-black mb-8 md:mb-12 max-w-2xl mx-auto px-4">
          Experience luxury beauty services and premium products crafted for those who appreciate excellence.
        </p>
        <Link 
          to="/services" 
          className="button inline-block text-base md:text-lg"
        >
          Discover Our World
        </Link>
      </motion.div>

      {/* Gallery Section */}
      <section className="mt-16">
        <div className="container mx-auto px-4 text-center">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold text-gold-gradient mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            Discover Our Beauty Space
          </motion.h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            <motion.div 
              className="overflow-hidden rounded-lg shadow-lg"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <img 
                src="src/images/Shop 1.jpeg" 
                alt="Beauty Shop Interior 1" 
                className="w-full h-auto object-cover rounded-lg"
              />
            </motion.div>
            <motion.div 
              className="overflow-hidden rounded-lg shadow-lg"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <img 
                src="src/images/Shop 2.jpeg" 
                alt="Beauty Shop Interior 2" 
                className="w-full h-auto object-cover rounded-lg"
              />
            </motion.div>
            <motion.div 
              className="overflow-hidden rounded-lg shadow-lg"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <img 
                src="src/images/Shop 3.jpeg" 
                alt="Beauty Shop Interior 3" 
                className="w-full h-auto object-cover rounded-lg"
              />
            </motion.div>
            <motion.div 
              className="overflow-hidden rounded-lg shadow-lg"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <img 
                src="src/images/Shop 4.jpeg" 
                alt="Beauty Shop Interior 4" 
                className="w-full h-auto object-cover rounded-lg"
              />
            </motion.div>
            <motion.div 
              className="overflow-hidden rounded-lg shadow-lg"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <img 
                src="src/images/Shop 5.jpeg" 
                alt="Beauty Shop Interior 5" 
                className="w-full h-auto object-cover rounded-lg"
              />
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
