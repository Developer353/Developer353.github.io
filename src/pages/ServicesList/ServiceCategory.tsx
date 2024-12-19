import { motion } from 'framer-motion';

export function ServiceCategory({ title, services, id }) {
  return (
    <motion.div
      id={id} // Add ID for navigation
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="card mb-8"
    >
      <h2 className="text-2xl font-semibold text-gold-600 mb-4">{title}</h2>
      <div className="space-y-2">
        {services.map((service, index) => (
          <div
            key={index}
            className="flex justify-between items-center py-2 border-b border-gray-100 last:border-0"
          >
            <span className="text-gray-800">{service.name}</span>
            <span className="text-gold-600 font-medium">{service.price}</span>
          </div>
        ))}
      </div>
    </motion.div>
  );
}
