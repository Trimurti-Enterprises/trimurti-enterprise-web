
import React from 'react';

const Clients = () => {
  const clients = [
    { name: 'JSW', logo: 'JSW' },
    { name: 'JSSL', logo: 'JSSL' },
    { name: 'Bauer Engineering', logo: 'BAUER' },
    { name: 'L&T', logo: 'L&T' }
  ];

  return (
    <section className="py-16 bg-white overflow-hidden">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Trusted by <span className="text-orange">Industry Leaders</span>
          </h2>
          <p className="text-lg text-gray-600">We're proud to work with these prestigious clients</p>
        </div>

        <div className="relative">
          <div className="flex animate-scroll">
            {[...clients, ...clients, ...clients].map((client, index) => (
              <div
                key={`${client.name}-${index}`}
                className="flex-shrink-0 mx-8 flex items-center justify-center bg-gray-50 rounded-lg p-8 min-w-[200px] h-24 shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                <span className="text-2xl font-bold text-gray-700">{client.logo}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Clients;
