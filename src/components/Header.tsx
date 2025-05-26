
import React, { useState, useEffect } from 'react';
import { Menu, X, Mail, Phone } from 'lucide-react';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
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
      setIsMobileMenuOpen(false);
    }
  };

  const menuItems = [
    { label: 'Home', id: 'home' },
    { label: 'About', id: 'about' },
    { label: 'Projects', id: 'projects' },
    { label: 'Fleet', id: 'fleet' },
    { label: 'Contact', id: 'contact' }
  ];

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-lg' : 'bg-white/95 backdrop-blur-sm'
      }`}>
        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center justify-between px-8 py-4">
          <div className="flex items-center">
            <img 
              src="/lovable-uploads/128b9340-0c29-4df1-80d0-dadb4dc2b0b9.png" 
              alt="Trimurti Enterprises Logo" 
              className="h-12 w-auto"
            />
          </div>
          
          <div className="flex space-x-8">
            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-gray-700 hover:text-orange transition-colors duration-200 font-medium"
              >
                {item.label}
              </button>
            ))}
          </div>
          
          <div className="flex flex-col items-end text-sm text-gray-600">
            <div className="flex items-center gap-1 mb-1">
              <Mail className="w-4 h-4" />
              <span>info@trimurtienterprises.com</span>
            </div>
            <div className="flex items-center gap-1">
              <Phone className="w-4 h-4" />
              <span>+91 98765 43210</span>
            </div>
          </div>
        </nav>

        {/* Mobile Navigation */}
        <nav className="lg:hidden flex items-center justify-between px-4 py-4">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-2"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6 text-gray-700" />
            ) : (
              <Menu className="w-6 h-6 text-gray-700" />
            )}
          </button>
          
          <div className="flex items-center">
            <img 
              src="/lovable-uploads/14ad1b30-be2a-46cf-a903-83d66077d996.png" 
              alt="Trimurti Enterprises" 
              className="h-8 w-auto"
            />
          </div>
          
          <div className="w-10" />
        </nav>
      </header>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 lg:hidden">
          <div className="fixed inset-0 bg-black/50" onClick={() => setIsMobileMenuOpen(false)} />
          <div className="fixed left-0 top-0 h-full w-80 bg-white shadow-xl transform animate-slide-in-left">
            <div className="p-6 border-b">
              <img 
                src="/lovable-uploads/128b9340-0c29-4df1-80d0-dadb4dc2b0b9.png" 
                alt="Trimurti Enterprises Logo" 
                className="h-10 w-auto"
              />
            </div>
            <div className="p-6">
              <div className="space-y-4 mb-8">
                {menuItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className="block w-full text-left text-gray-700 hover:text-orange transition-colors duration-200 font-medium py-2"
                  >
                    {item.label}
                  </button>
                ))}
              </div>
              
              <div className="space-y-3 text-sm text-gray-600 border-t pt-6">
                <div className="flex items-center gap-2">
                  <Mail className="w-4 h-4" />
                  <span>info@trimurtienterprises.com</span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4" />
                  <span>+91 98765 43210</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
