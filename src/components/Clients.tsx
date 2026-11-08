import React from 'react';
import { clients } from '@/data/companyConstants';
import { ExternalLink, ShieldCheck } from 'lucide-react';

const Clients = () => {
  return (
    <section id="clients" className="py-20 bg-gray-50/70 overflow-hidden border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="text-orange font-bold text-xs uppercase tracking-wider bg-orange/10 px-3.5 py-1.5 rounded-full inline-flex items-center gap-1.5">
            <ShieldCheck className="w-3.5 h-3.5" /> Tier-1 Infrastructure Clientele
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mt-3 mb-3">
            Trusted by <span className="text-orange">India's Engineering Titans</span>
          </h2>
          <p className="text-sm md:text-base text-gray-600 max-w-2xl mx-auto">
            From metro elevated corridors to refinery turnarounds and heavy steel plants, leading EPC contractors rely on Trimurti Enterprises for precision heavy lifting.
          </p>
        </div>

        {/* Client Logos Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {clients.map((client) => (
            <div
              key={client.id}
              className="group bg-white rounded-xl p-5 border border-gray-200/80 hover:border-orange/60 hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
            >
              <div className="h-20 flex items-center justify-center mb-4 p-3 bg-white rounded-lg border border-gray-100 group-hover:border-orange/30 group-hover:shadow-sm transition">
                <img
                  src={client.logo}
                  alt={client.alt}
                  className="max-h-14 w-auto max-w-full object-contain transition duration-300 transform group-hover:scale-105"
                  loading="lazy"
                />
              </div>

              <div className="border-t border-gray-100 pt-3">
                <div className="flex items-start justify-between gap-1">
                  <h4 className="text-xs font-bold text-gray-900 group-hover:text-orange transition line-clamp-1">
                    {client.name}
                  </h4>
                </div>
                <span className="inline-block text-[10px] font-semibold text-gray-600 uppercase tracking-wider mt-0.5">
                  {client.category}
                </span>
                <p className="text-[11px] text-gray-500 mt-1 line-clamp-2 leading-relaxed">
                  {client.scope}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Clients;
