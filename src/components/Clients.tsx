import React from 'react';

const Clients = () => {
  const clients = [
    { name: 'Larsen & Toubro', logo: 'L&T Construction' },
    { name: 'JSW Steel Limited', logo: 'JSW Steel' },
    { name: 'Tata Projects', logo: 'TATA Projects' },
    { name: 'Bauer Engineering', logo: 'BAUER Group' },
    { name: 'Shapoorji Pallonji', logo: 'Shapoorji Pallonji' },
    { name: 'Afcons Infrastructure', logo: 'AFCONS Infra' },
    { name: 'JSSL Steel Structures', logo: 'JSSL Structures' },
    { name: 'Reliance Industries', logo: 'Reliance Infra' },
  ];

  return (
    <section className="py-16 bg-white overflow-hidden border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <span className="text-orange font-bold text-xs uppercase tracking-wider bg-orange/10 px-3 py-1 rounded-full">
            Contractor Credentials
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2 mb-3">
            Trusted by <span className="text-orange">India's Infrastructure Leaders</span>
          </h2>
          <p className="text-sm md:text-base text-gray-600 max-w-2xl mx-auto">
            Contractors, EPC leaders, and industrial manufacturing plants depend on Trimurti Enterprises for zero-delay equipment mobilization.
          </p>
        </div>

        {/* Marquee / Client Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {clients.map((client, index) => (
            <div
              key={`${client.name}-${index}`}
              className="flex flex-col items-center justify-center bg-gray-50 hover:bg-white rounded-xl p-6 border border-gray-200/80 hover:border-orange/40 hover:shadow-md transition-all duration-300 text-center"
            >
              <span className="text-base sm:text-lg font-black text-gray-800 tracking-tight">
                {client.logo}
              </span>
              <span className="text-[11px] text-gray-500 mt-1 font-medium">{client.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Clients;
