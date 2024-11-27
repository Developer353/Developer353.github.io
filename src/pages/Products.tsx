import { motion } from 'framer-motion';

const products = [
  {
    image: 'https://images.unsplash.com/photo-1571781926291-c477ebfd024b?auto=format&fit=crop&w=800&q=80',
    title: 'Luxury Serum',
    description: 'Advanced anti-aging formula with hyaluronic acid and peptides.'
  },
  {
    image: 'https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?auto=format&fit=crop&w=800&q=80',
    title: 'Anti-Aging Cream',
    description: 'Rich moisturizing cream with retinol and vitamin C.'
  },
  {
    image: 'https://images.unsplash.com/photo-1617897903246-719242758050?auto=format&fit=crop&w=800&q=80',
    title: 'Hydrating Lotion',
    description: 'Lightweight, non-greasy formula for all-day hydration.'
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
              <p className="text-gray-600 mb-3">{product.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
