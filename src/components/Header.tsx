import React, { useState, useEffect } from 'react';
import { Menu, X, Mail, Phone, FileText } from 'lucide-react';
import { company, contact, branding, navigation } from '@/data/companyConstants';

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

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-lg' : 'bg-white/95 backdrop-blur-sm'
      }`}>
        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center justify-between px-8 py-4">
          <div className="flex items-center cursor-pointer" onClick={() => scrollToSection('home')}>
            <img 
              src={branding.logo} 
              alt={`${company.name} Logo`} 
              className="h-12 w-auto"
            />
          </div>
          
          <div className="flex space-x-8">
            {navigation.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-gray-700 hover:text-orange transition-colors duration-200 font-medium"
              >
                {item.label}
              </button>
            ))}
          </div>
          
          <div className="flex flex-col items-end text-sm text-gray-600 gap-1">
            <a 
              href={`mailto:${contact.email}`} 
              className="flex items-center gap-1.5 mb-1 hover:text-orange transition"
            >
              <Mail className="w-4 h-4 text-orange" />
              <span>{contact.email}</span>
            </a>
            {contact.showPhone ? (
              <a 
                href={`tel:${contact.primaryPhoneRaw}`} 
                className="flex items-center gap-1.5 font-bold text-gray-900 hover:text-orange transition"
              >
                <Phone className="w-4 h-4 text-orange" />
                <span>{contact.primaryPhone}</span>
              </a>
            ) : (
              <button
                onClick={() => scrollToSection('contact')}
                className="text-xs bg-orange hover:bg-orange-hover text-white font-bold px-3 py-1 rounded-md transition shadow-sm inline-flex items-center gap-1"
              >
                <FileText className="w-3.5 h-3.5" /> Request Quote
              </button>
            )}
          </div>
        </nav>

        {/* Mobile Navigation */}
        <nav className="lg:hidden flex items-center justify-between px-4 py-4">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-2"
            aria-label="Toggle navigation menu"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6 text-gray-700" />
            ) : (
              <Menu className="w-6 h-6 text-gray-700" />
            )}
          </button>
          
          <div className="flex items-center" onClick={() => scrollToSection('home')}>
            <img 
              src={branding.logo} 
              alt={company.name} 
              className="h-8 w-auto"
            />
          </div>
          
          {contact.showPhone ? (
            <a
              href={`tel:${contact.primaryPhoneRaw}`}
              className="p-2 text-orange"
              aria-label="Call dispatcher"
            >
              <Phone className="w-5 h-5" />
            </a>
          ) : (
            <a
              href={`mailto:${contact.email}`}
              className="p-2 text-orange"
              aria-label="Email dispatcher"
            >
              <Mail className="w-5 h-5" />
            </a>
          )}
        </nav>
      </header>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 lg:hidden">
          <div className="fixed inset-0 bg-black/50" onClick={() => setIsMobileMenuOpen(false)} />
          <div className="fixed left-0 top-0 h-full w-80 bg-white shadow-xl transform animate-slide-in-left">
            <div className="p-6 border-b flex items-center justify-between">
              <img 
                src={branding.logo} 
                alt={`${company.name} Logo`} 
                className="h-10 w-auto"
              />
              <button 
                onClick={() => setIsMobileMenuOpen(false)}
                className="p-2 text-gray-500 hover:text-gray-700"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="p-6">
              <div className="space-y-4 mb-8">
                {navigation.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className="block w-full text-left text-gray-700 hover:text-orange transition-colors duration-200 font-semibold py-2"
                  >
                    {item.label}
                  </button>
                ))}
              </div>
              
              <div className="space-y-3 text-sm text-gray-600 border-t pt-6">
                <a href={`mailto:${contact.email}`} className="flex items-center gap-2 hover:text-orange transition">
                  <Mail className="w-4 h-4 text-orange" />
                  <span className="text-xs">{contact.email}</span>
                </a>
                {contact.showPhone && (
                  <a href={`tel:${contact.primaryPhoneRaw}`} className="flex items-center gap-2 font-bold text-gray-900 hover:text-orange transition">
                    <Phone className="w-4 h-4 text-orange" />
                    <span>{contact.primaryPhone}</span>
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
