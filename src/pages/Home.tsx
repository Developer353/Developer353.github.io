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
        <p className="text-lg md:text-xl text-white/90 mb-8 md:mb-12 max-w-2xl mx-auto px-4">
          Experience luxury beauty services and premium products crafted for those who appreciate excellence.
        </p>
        <Link 
          to="/services" 
          className="button inline-block text-base md:text-lg"
        >
          Discover Our World
        </Link>
      </motion.div>
    </div>
  );
}