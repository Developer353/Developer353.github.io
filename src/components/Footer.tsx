import { Sparkles } from 'lucide-react';
import { FaOlaplex, FaWella, FaNealAndWolf, FaCircadia, FaDermalogica } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-black/95 text-white py-6 md:py-8 border-t border-gold-400/20">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-center mb-3 md:mb-4">
          <Sparkles className="w-5 h-5 md:w-6 md:h-6 text-gold-400 mr-2" />
          <span className="text-lg md:text-xl font-bold text-gold-gradient">Vblush</span>
        </div>

        {/* Partner Logos */}
        <div className="flex justify-center gap-8 mb-4">
          {/* Olaplex Icon */}
          <a href="https://www.olaplex.com/" target="_blank" rel="noopener noreferrer">
            <FaOlaplex size={40} className="text-white hover:text-gold-400" />
          </a>
          {/* Wella Icon */}
          <a href="https://www.wella.com/" target="_blank" rel="noopener noreferrer">
            <FaWella size={40} className="text-white hover:text-gold-400" />
          </a>
          {/* Neal & Wolf Icon */}
          <a href="https://www.nealwolf.com/" target="_blank" rel="noopener noreferrer">
            <FaNealAndWolf size={40} className="text-white hover:text-gold-400" />
          </a>
          {/* Circadia Icon */}
          <a href="https://www.circadia.com/" target="_blank" rel="noopener noreferrer">
            <FaCircadia size={40} className="text-white hover:text-gold-400" />
          </a>
          {/* Dermalogica Icon */}
          <a href="https://www.dermalogica.com/" target="_blank" rel="noopener noreferrer">
            <FaDermalogica size={40} className="text-white hover:text-gold-400" />
          </a>
        </div>

        <p className="text-center text-sm md:text-base text-gray-400">
          &copy; {new Date().getFullYear()} Vblush. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
