import { Sparkles } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-black/95 text-white py-6 md:py-8 border-t border-gold-400/20">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-center mb-3 md:mb-4">
          <Sparkles className="w-5 h-5 md:w-6 md:h-6 text-gold-400 mr-2" />
          <span className="text-lg md:text-xl font-bold text-gold-gradient">Vblush</span>
        </div>
        <p className="text-center text-sm md:text-base text-gray-400">
          &copy; {new Date().getFullYear()} Vblush. All rights reserved.
        </p>
      </div>
    </footer>
  );
}