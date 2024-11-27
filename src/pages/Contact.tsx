import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Instagram, Smartphone } from 'lucide-react';

export default function Contact() {
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
            Contact Us
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Get in touch with us for appointments, inquiries, or consultations
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="card"
          >
            <h2 className="text-2xl font-semibold mb-6">Contact Information</h2>
            <div className="space-y-4">
              <div className="flex items-center">
                <Phone className="w-5 h-5 text-gold-500 mr-3" />
                <a
                  href="tel:+442086375336"
                  className="relative text-black after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-gold-500 after:transition-all after:duration-300 hover:after:w-full"
                >
                  020 8637 5336
                </a>
              </div>
              <div className="flex items-center">
                <Smartphone className="w-5 h-5 text-gold-500 mr-3" />
                <a
                  href="tel:+447804975806"
                  className="relative text-black after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-gold-500 after:transition-all after:duration-300 hover:after:w-full"
                >
                  07804 975806
                </a>
              </div>
              <div className="flex items-center">
                <Mail className="w-5 h-5 text-gold-500 mr-3" />
                <a
                  href="mailto:hiwin.vblush@hotmail.com"
                  className="relative text-black after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-gold-500 after:transition-all after:duration-300 hover:after:w-full"
                >
                  hiwin.vblush@hotmail.com
                </a>
              </div>
              <div className="flex items-center">
                <Instagram className="w-5 h-5 text-gold-500 mr-3" />
                <span>@vblush.beauty</span>
              </div>
              <div className="flex items-center">
                <MapPin className="w-5 h-5 text-gold-500 mr-3" />
                <span>54 Sewardstone Rd, London E4 7PR</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="card"
          >
            <form action="https://formspree.io/f/mjkvogop" method="POST" className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-gold-400 focus:border-transparent"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-gold-400 focus:border-transparent"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-gold-400 focus:border-transparent"
                ></textarea>
              </div>
              <button type="submit" className="button w-full">
                Send Message
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
