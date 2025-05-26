
import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <div className="text-2xl font-bold mb-4">
              Trimurti <span className="text-orange">Enterprises</span>
            </div>
            <p className="text-gray-300 leading-relaxed">
              Your trusted partner for construction equipment rental and project support. 
              Building excellence with premium equipment and reliable service.
            </p>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <div className="space-y-2">
              <button
                onClick={() => document.getElementById('home')?.scrollIntoView({ behavior: 'smooth' })}
                className="block text-gray-300 hover:text-orange transition-colors"
              >
                Home
              </button>
              <button
                onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
                className="block text-gray-300 hover:text-orange transition-colors"
              >
                About
              </button>
              <button
                onClick={() => document.getElementById('fleet')?.scrollIntoView({ behavior: 'smooth' })}
                className="block text-gray-300 hover:text-orange transition-colors"
              >
                Fleet
              </button>
              <button
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="block text-gray-300 hover:text-orange transition-colors"
              >
                Contact
              </button>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-4">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-orange" />
                <span className="text-gray-300">info@trimurtienterprises.com</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-orange" />
                <span className="text-gray-300">+91 98765 43210</span>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-orange mt-1" />
                <span className="text-gray-300">
                  123 Industrial Area, Sector 5<br />
                  Mumbai, Maharashtra 400001
                </span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-300">
            &copy; 2024 Trimurti Enterprises. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
