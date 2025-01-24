import { Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';

// Importing images
import circadiaLogo from '../images/circadia_logo.jpg';
import dermalogicaLogo from '../images/dermalogica_logo.jpg';
import nealwolfLogo from '../images/nealwolf_logo.jpg';
import olaplexLogo from '../images/olaplex_logo.jpg';
import wellaLogo from '../images/wella_logo.jpg';

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
              src={olaplexLogo} 
              alt="Olaplex" 
              className="w-32 h-32 object-contain hover:scale-105 transition-transform"
            />
          </a>

          {/* Wella Logo */}
          <a href="https://www.wella.com/" target="_blank" rel="noopener noreferrer">
            <img 
              src={wellaLogo} 
              alt="Wella" 
              className="w-32 h-32 object-contain hover:scale-105 transition-transform"
            />
          </a>

          {/* Neal & Wolf Logo */}
          <a href="https://www.nealwolf.com/" target="_blank" rel="noopener noreferrer">
            <img 
              src={nealwolfLogo} 
              alt="Neal & Wolf" 
              className="w-32 h-32 object-contain hover:scale-105 transition-transform"
            />
          </a>

          {/* Circadia Logo */}
          <a href="https://www.circadia.com/" target="_blank" rel="noopener noreferrer">
            <img 
              src={circadiaLogo} 
              alt="Circadia" 
              className="w-32 h-32 object-contain hover:scale-105 transition-transform"
            />
          </a>

          {/* Dermalogica Logo */}
          <a href="https://www.dermalogica.com/" target="_blank" rel="noopener noreferrer">
            <img 
              src={dermalogicaLogo} 
              alt="Dermalogica" 
              className="w-32 h-32 object-contain hover:scale-105 transition-transform"
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
