import React from 'react';
import { Mail, Phone, MapPin, MessageSquare, ShieldCheck, Clock } from 'lucide-react';
import { company, contact, address, branding, navigation } from '@/data/companyConstants';

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
                src={branding.logo}
                alt={company.name}
                className="h-10 w-auto bg-white p-1 rounded"
              />
            </div>
            <p className="text-gray-400 text-xs sm:text-sm leading-relaxed mb-4">
              {company.legalName} provides heavy crane and construction machinery rental across Maharashtra. Fully certified fleet with experienced operators.
            </p>
            <div className="flex items-center gap-2 text-xs text-green-400 font-semibold">
              <ShieldCheck className="w-4 h-4" /> Form 11 / TPI Certified Equipment
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-orange mb-4">Quick Navigation</h4>
            <div className="space-y-2 text-xs sm:text-sm text-gray-400">
              {navigation.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollTo(item.id)}
                  className="block hover:text-white transition"
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>

          {/* Equipment Categories */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-orange mb-4">Equipment Fleet</h4>
            <div className="space-y-2 text-xs sm:text-sm text-gray-400">
              <span className="block">Pick &amp; Carry Cranes (15T – 23T)</span>
              <span className="block">Hydraulic Telescopic Cranes (50T – 100T)</span>
              <span className="block">Crawler Lattice Cranes (50T – 250T)</span>
              <span className="block">Excavators &amp; Heavy Earthmovers</span>
              <span className="block">Aerial Boom &amp; Scissor Lifts</span>
            </div>
          </div>

          {/* Contact Details */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-orange mb-4">Dispatch &amp; Yard</h4>
            <div className="space-y-3 text-xs sm:text-sm text-gray-400">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-orange flex-shrink-0 mt-0.5" />
                <span>{address.office}</span>
              </div>
              {contact.showPhone && (
                <>
                  <div className="flex items-center gap-2">
                    <Phone className="w-4 h-4 text-orange flex-shrink-0" />
                    <a href={`tel:${contact.primaryPhoneRaw}`} className="hover:text-white font-medium">
                      {contact.primaryPhone}
                    </a>
                  </div>
                  <div className="flex items-center gap-2">
                    <MessageSquare className="w-4 h-4 text-green-500 flex-shrink-0" />
                    <a href={contact.whatsappUrl} target="_blank" rel="noopener noreferrer" className="hover:text-green-400">
                      WhatsApp: {contact.whatsapp}
                    </a>
                  </div>
                </>
              )}
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-blue flex-shrink-0" />
                <a href={`mailto:${contact.email}`} className="hover:text-white">
                  {contact.email}
                </a>
              </div>
              <div className="flex items-center gap-2 text-xs text-gray-400">
                <Clock className="w-3.5 h-3.5 text-orange flex-shrink-0" />
                <span>{contact.hours}</span>
              </div>
              <div className="text-[11px] text-gray-500 pt-1 border-t border-gray-800">
                GSTIN: <span className="font-mono text-gray-400">{address.gstin}</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-400">
          <p>© {new Date().getFullYear()} {company.name}. All rights reserved.</p>
          <p>{company.tagline} · {address.state}, {address.country}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;