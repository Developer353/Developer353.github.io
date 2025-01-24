import { Sparkles } from 'lucide-react';

// Importing logo images
import CircadiaLogo from '../images/circadia-logo.webp';
import DermalogicaLogo from '../images/dermalogica-logo.webp';
import NealWolfLogo from '../images/neal-wolf-logo.webp';
import NWLogo from '../images/NW_logo.avif';
import OlaplexLogo from '../images/olaplex-logo.webp';

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
          {/* Olaplex Logo */}
          <a href="https://www.olaplex.com/" target="_blank" rel="noopener noreferrer">
            <img
              src={OlaplexLogo}
              alt="Olaplex Logo"
              className="w-16 h-16 object-contain hover:scale-110 transition-transform"
            />
          </a>
          {/* NW Logo */}
          <a href="https://www.wella.com/" target="_blank" rel="noopener noreferrer">
            <img
              src={NWLogo}
              alt="NW Logo"
              className="w-16 h-16 object-contain hover:scale-110 transition-transform"
            />
          </a>
          {/* Neal & Wolf Logo */}
          <a href="https://www.nealwolf.com/" target="_blank" rel="noopener noreferrer">
            <img
              src={NealWolfLogo}
              alt="Neal & Wolf Logo"
              className="w-16 h-16 object-contain hover:scale-110 transition-transform"
            />
          </a>
          {/* Circadia Logo */}
          <a href="https://www.circadia.com/" target="_blank" rel="noopener noreferrer">
            <img
              src={CircadiaLogo}
              alt="Circadia Logo"
              className="w-16 h-16 object-contain hover:scale-110 transition-transform"
            />
          </a>
          {/* Dermalogica Logo */}
          <a href="https://www.dermalogica.com/" target="_blank" rel="noopener noreferrer">
            <img
              src={DermalogicaLogo}
              alt="Dermalogica Logo"
              className="w-16 h-16 object-contain hover:scale-110 transition-transform"
            />
          </a>
        </div>

        <p className="text-center text-sm md:text-base text-gray-400">
          &copy; {new Date().getFullYear()} Vblush. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
