import React from 'react';
import { Phone, MessageSquare, FileText, Truck, Mail } from 'lucide-react';
import { contact } from '@/data/companyConstants';

const MobileBar = () => {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <aside aria-label="Quick contact" className="lg:hidden fixed bottom-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-t border-gray-200 px-3 py-2 shadow-2xl flex items-center justify-around">
      {contact.showPhone ? (
        <>
          <a
            href={`tel:${contact.primaryPhoneRaw}`}
            className="flex-1 flex flex-col items-center justify-center py-1.5 text-gray-800 hover:text-orange text-[11px] font-bold transition"
          >
            <Phone className="w-4 h-4 text-orange mb-0.5" />
            <span>Call Now</span>
          </a>

          <div className="w-[1px] h-6 bg-gray-200" />

          <a
            href={contact.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 flex flex-col items-center justify-center py-1.5 text-gray-800 hover:text-green-600 text-[11px] font-bold transition"
          >
            <MessageSquare className="w-4 h-4 text-green-600 mb-0.5" />
            <span>WhatsApp</span>
          </a>

          <div className="w-[1px] h-6 bg-gray-200" />
        </>
      ) : (
        <>
          <button
            onClick={() => scrollTo('fleet')}
            className="flex-1 flex flex-col items-center justify-center py-1.5 text-gray-800 hover:text-orange text-[11px] font-bold transition"
          >
            <Truck className="w-4 h-4 text-orange mb-0.5" />
            <span>Fleet</span>
          </button>

          <div className="w-[1px] h-6 bg-gray-200" />

          <a
            href={`mailto:${contact.email}`}
            className="flex-1 flex flex-col items-center justify-center py-1.5 text-gray-800 hover:text-orange text-[11px] font-bold transition"
          >
            <Mail className="w-4 h-4 text-orange mb-0.5" />
            <span>Email</span>
          </a>

          <div className="w-[1px] h-6 bg-gray-200" />
        </>
      )}

      <button
        onClick={() => scrollTo('contact')}
        className="flex-1 flex flex-col items-center justify-center py-1.5 text-gray-800 hover:text-orange text-[11px] font-bold transition"
      >
        <FileText className="w-4 h-4 text-blue mb-0.5" />
        <span>Get Quote</span>
      </button>
    </aside>
  );
};

export default MobileBar;
