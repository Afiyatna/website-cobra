import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Users } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigation = [
    { name: 'Beranda', path: '/' },
    { name: 'Tentang Kami', path: '/about' },
    { name: 'Program', path: '/programs' },
    { name: 'Galeri', path: '/gallery' },
    { name: 'Berita', path: '/news' },
    // { name: 'Testimoni', path: '/testimonials' },
    // { name: 'Kemitraan', path: '/partnerships' },
    // { name: 'Kontak', path: '/contact' },
  ];

  return (
    <nav className={` backdrop-blur-sm shadow-lg fixed w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/95 backdrop-blur-sm shadow-lg' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <img src="Home/logo-cobra.jpg" alt="Logo Mudamudi" className="h-12 w-12 rounded-full" />
              <span className={`text-black font-bold text-lg transition-colors ${
                isScrolled ? 'text-primary-900' : 'text-white'
              }`}>
                Muda Mudi Brangsong
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`text-black px-3 py-2 text-sm font-medium transition-colors ${
                  location.pathname === item.path
                    ? isScrolled 
                      ? 'text-primary-600 border-b-2 border-primary-600' 
                      : 'text-secondary-400 border-b-2 border-secondary-400'
                    : isScrolled
                      ? 'text-gray-700 hover:text-primary-600'
                      : 'text-white/90 hover:text-primary-600'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`p-2 rounded-md transition-colors ${
                isScrolled ? 'text-black hover:text-primary-600' : 'text-black hover:text-secondary-400'
              }`}
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-white border-t shadow-lg">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                onClick={() => setIsOpen(false)}
                className={`block px-3 py-2 text-base font-medium transition-colors ${
                  location.pathname === item.path
                    ? 'text-primary-600 bg-primary-50'
                    : 'text-gray-700 hover:text-primary-600 hover:bg-gray-50'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;