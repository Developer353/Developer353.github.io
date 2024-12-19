import { Sparkles } from 'lucide-react';

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
              src="https://seekvectorlogo.com/wp-content/uploads/2019/06/olaplex-vector-logo.png" 
              alt="Olaplex Logo" 
              className="h-12"
            />
          </a>
          {/* Wella Logo */}
          <a href="https://www.wella.com/" target="_blank" rel="noopener noreferrer">
            <img 
              src="https://seekvectorlogo.com/wp-content/uploads/2020/04/wella-vector-logo.png" 
              alt="Wella Logo" 
              className="h-12"
            />
          </a>
          {/* Nealwolf Logo */}
          <a href="https://www.nealwolf.com/" target="_blank" rel="noopener noreferrer">
            <img 
              src="https://seekvectorlogo.com/wp-content/uploads/2019/06/nealwolf-vector-logo.png" 
              alt="Nealwolf Logo" 
              className="h-12"
            />
          </a>
          {/* Circadia Logo */}
          <a href="https://www.circadia.com/" target="_blank" rel="noopener noreferrer">
            <img 
              src="https://seekvectorlogo.com/wp-content/uploads/2019/06/circadia-vector-logo.png" 
              alt="Circadia Logo" 
              className="h-12"
            />
          </a>
          {/* Dermalogica Logo */}
          <a href="https://www.dermalogica.com/" target="_blank" rel="noopener noreferrer">
            <img 
              src="https://seekvectorlogo.com/wp-content/uploads/2019/06/dermalogica-vector-logo.png" 
              alt="Dermalogica Logo" 
              className="h-12"
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
