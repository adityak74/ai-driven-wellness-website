import React, { useState, useEffect } from 'react';
import { Menu, X, ShoppingCart } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white shadow-lg' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-red-600 rounded-full flex items-center justify-center">
              <div className="w-4 h-4 bg-white rounded-full opacity-80"></div>
            </div>
            <span className={`font-bold text-xl transition-colors ${
              isScrolled ? 'text-gray-900' : 'text-white'
            }`}>
              AI-Driven Wellness
            </span>
          </div>

          <nav className="hidden md:flex items-center space-x-8">
            {['about', 'authors', 'contents', 'purchase', 'contact'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className={`font-medium capitalize transition-colors hover:text-red-600 ${
                  isScrolled ? 'text-gray-700' : 'text-white'
                }`}
              >
                {item === 'contents' ? 'Table of Contents' : item}
              </button>
            ))}
            <a
              href="https://www.amazon.com/AI-DRIVEN-WELLNESS-Convergence-Traditional-Healthcare/dp/1966212674"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-red-600 text-white px-6 py-2 rounded-full font-semibold hover:bg-red-700 transition-colors flex items-center space-x-2"
            >
              <ShoppingCart size={18} />
              <span>Buy Now</span>
            </a>
          </nav>

          <button
            className={`md:hidden transition-colors ${
              isScrolled ? 'text-gray-900' : 'text-white'
            }`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-200">
            <div className="py-4 space-y-4">
              {['about', 'authors', 'contents', 'purchase', 'contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className="block w-full text-left px-4 py-2 text-gray-700 hover:text-red-600 capitalize font-medium"
                >
                  {item === 'contents' ? 'Table of Contents' : item}
                </button>
              ))}
              <a
                href="https://www.amazon.com/AI-DRIVEN-WELLNESS-Convergence-Traditional-Healthcare/dp/1966212674"
                target="_blank"
                rel="noopener noreferrer"
                className="block mx-4 bg-red-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-red-700 transition-colors text-center"
              >
                Buy on Amazon
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;