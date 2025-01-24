import { Link, useLocation } from 'react-router-dom';
import { Sparkles, Menu, X, User } from 'lucide-react';
import { useState } from 'react';
import { useAuth } from '../contexts/AuthContext';
import logo from '../images/logo.jpg';  // Import your logo image

export default function Navbar() {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { user } = useAuth();
  
  return (
    <header className="bg-black/95 backdrop-blur-sm sticky top-0 z-50 border-b border-gold-400/20">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo Image instead of text */}
          <Link to="/" className="flex items-center space-x-2">
            <img src={logo} alt="Vblush Logo" className="w-12 h-12" /> {/* Set the size of your logo */}
          </Link>
          
          {/* Mobile menu button */}
          <button 
            className="md:hidden text-gold-400"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          {/* Desktop navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <ul className="flex space-x-6">
              {[ 
                ['Home', '/'],
                ['Services', '/services'],
                ['Book Us', '/book-us'],  // Move "Book Us" after "Services"
                ['Products', '/products'],
                ['About', '/about'],
                ['Contact', '/contact'],
              ].map(([name, path]) => (
                <li key={path}>
                  <Link
                    to={path}
                    className={`nav-link ${
                      location.pathname === path ? 'text-gold-400' : ''
                    }`}
                  >
                    {name}
                  </Link>
                </li>
              ))}
            </ul>
            <Link
              to={user ? '/profile' : '/auth'}
              className="flex items-center space-x-2 text-gold-400 hover:text-gold-300 transition-colors"
            >
              <User size={20} />
              <span>{user ? 'Profile' : 'Sign In'}</span>
            </Link>
          </nav>
        </div>

        {/* Mobile navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4">
            <ul className="flex flex-col space-y-2">
              {[ 
                ['Home', '/'],
                ['Services', '/services'],
                ['Book Us', '/book-us'],  // Move "Book Us" after "Services" for mobile
                ['Products', '/products'],
                ['About', '/about'],
                ['Contact', '/contact'],
                [user ? 'Profile' : 'Sign In', user ? '/profile' : '/auth'],
              ].map(([name, path]) => (
                <li key={path}>
                  <Link
                    to={path}
                    className={`nav-link block ${
                      location.pathname === path ? 'text-gold-400' : ''
                    }`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        )}
      </div>
    </header>
  );
}
