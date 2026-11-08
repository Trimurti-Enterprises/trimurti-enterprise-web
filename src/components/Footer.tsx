import React from 'react';
import { Mail, Phone, MapPin, MessageSquare, ShieldCheck } from 'lucide-react';

const Footer = () => {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-gray-900 text-white py-14 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Brief */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <img
                src="/lovable-uploads/128b9340-0c29-4df1-80d0-dadb4dc2b0b9.png"
                alt="Trimurti Enterprises"
                className="h-10 w-auto bg-white p-1 rounded"
              />
            </div>
            <p className="text-gray-400 text-xs sm:text-sm leading-relaxed mb-4">
              M/s. Trimurti Enterprises provides heavy crane and construction machinery rental across Maharashtra. Fully certified fleet with experienced operators.
            </p>
            <div className="flex items-center gap-2 text-xs text-green-400 font-semibold">
              <ShieldCheck className="w-4 h-4" /> Form 11 / TPI Certified Equipment
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-orange mb-4">Quick Navigation</h4>
            <div className="space-y-2 text-xs sm:text-sm text-gray-400">
              <button onClick={() => scrollTo('home')} className="block hover:text-white transition">
                Home
              </button>
              <button onClick={() => scrollTo('fleet')} className="block hover:text-white transition">
                Machinery Fleet
              </button>
              <button onClick={() => scrollTo('about')} className="block hover:text-white transition">
                About Company
              </button>
              <button onClick={() => scrollTo('projects')} className="block hover:text-white transition">
                Projects & Track Record
              </button>
              <button onClick={() => scrollTo('contact')} className="block hover:text-white transition">
                Request Quote
              </button>
            </div>
          </div>

          {/* Fleet Categories */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-orange mb-4">Equipment Categories</h4>
            <div className="space-y-2 text-xs sm:text-sm text-gray-400">
              <span className="block">Pick & Carry Cranes (15T – 23T)</span>
              <span className="block">Telescopic Cranes (50T – 100T)</span>
              <span className="block">Crawler Cranes (50T – 250T)</span>
              <span className="block">Excavators & Earthmovers</span>
              <span className="block">Aerial Boom & Man Lifts</span>
            </div>
          </div>

          {/* Contact Details */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-orange mb-4">Dispatch Contact</h4>
            <div className="space-y-3 text-xs sm:text-sm text-gray-400">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-orange flex-shrink-0 mt-0.5" />
                <span>Turbhe MIDC, Navi Mumbai, Maharashtra 400705</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-orange flex-shrink-0" />
                <a href="tel:+919876543210" className="hover:text-white">+91 98765 43210</a>
              </div>
              <div className="flex items-center gap-2">
                <MessageSquare className="w-4 h-4 text-green-500 flex-shrink-0" />
                <a href="https://wa.me/919876543210" target="_blank" rel="noopener" className="hover:text-green-400">
                  WhatsApp: +91 98765 43210
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-blue flex-shrink-0" />
                <a href="mailto:info@trimurtienterprises.com" className="hover:text-white">
                  info@trimurtienterprises.com
                </a>
              </div>
              <div className="text-[11px] text-gray-500 pt-1">
                GSTIN: 27AABCT1234F1Z8
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-400">
          <p>© {new Date().getFullYear()} Trimurti Enterprises. All rights reserved.</p>
          <p>Heavy Equipment Rental & Crane Services · Maharashtra, India</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
