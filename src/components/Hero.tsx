
import React from 'react';
import { Button } from '@/components/ui/button';
import {
  ShieldCheck,
  ArrowRight,
  ChevronDown
} from 'lucide-react';

const Hero = () => {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({
      behavior: 'smooth'
    });
  };

  const scrollToFleet = () => {
    document.getElementById('fleet')?.scrollIntoView({
      behavior: 'smooth'
    });
  };

  const categories = [
    'Pick & Carry Cranes',
    'Telescopic Cranes',
    'Crawler Cranes',
    'Excavators',
    'Boom Lifts'
  ];

  return (
    <section
      id="home"
      className="relative flex items-center justify-center
        min-h-[100svh] lg:min-h-[90svh]
        overflow-hidden pt-24 pb-12"
    >
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url('/lovable-uploads/f2480aab-4988-4b4e-bd2f-91ae71f151dd.png')`
        }}
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-[#0c1612]/60
        lg:bg-[#0c1612]/55"
      />

      {/* Content */}
      <div className="relative z-10 w-full max-w-6xl
        mx-auto px-4 sm:px-6 lg:px-10 py-8">

        <div className="max-w-4xl mx-auto
          text-center text-white">

          {/* Badge */}
          <div className="inline-flex flex-wrap
            items-center justify-center gap-2
            bg-orange/20 border border-orange/40
            rounded-full px-3 sm:px-4 py-2 mb-7">

            <ShieldCheck className="w-5 h-5 text-orange shrink-0" />

            <span className="text-xs sm:text-sm font-semibold">
              Heavy Equipment Rental Specialists
            </span>

            <span className="bg-orange text-white
              text-[10px] sm:text-xs font-bold
              px-2.5 py-1 rounded-full">
              PAN INDIA
            </span>
          </div>

          {/* Heading */}
          <h1 className="text-[2.15rem] sm:text-5xl
            lg:text-[3.25rem] xl:text-6xl
            font-extrabold tracking-tight
            leading-[1.12] mb-5">

            The Right Equipment.
            <span className="block text-orange mt-1">
              For Every Scale of Work.
            </span>
          </h1>

          {/* Description */}
          <p className="text-sm sm:text-base lg:text-lg
            text-gray-200 leading-relaxed
            max-w-2xl mx-auto mb-8">

            Heavy construction equipment owners and suppliers,
            offering <b>cranes, excavators and boom lifts</b>
            {' '}with <b>certified operators and 24/7 on-site support.</b>
          </p>

          {/* CTA */}
          <div className="flex flex-col sm:flex-row
            items-center justify-center gap-3
            max-w-sm sm:max-w-none mx-auto mb-10">

            <Button
              onClick={scrollToContact}
              className="w-full sm:w-auto
                bg-orange hover:bg-orange-hover
                text-white px-7 py-6 rounded-xl
                font-bold text-base shadow-lg
                shadow-orange/20"
            >
              Request a Rental Quote
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>

            <Button
              onClick={scrollToFleet}
              variant="outline"
              className="w-full sm:w-auto
                border-2 border-white/70
                bg-white/10 backdrop-blur-sm
                text-white hover:bg-white hover:text-gray-900
                px-7 py-6 rounded-xl font-bold text-base"
            >
              Explore Our Fleet
            </Button>
          </div>

          {/* Metrics */}
          <div className="grid grid-cols-3
            max-w-lg mx-auto mb-9">

            <div className="text-center">
              <div className="text-2xl sm:text-3xl font-bold">
                50+
              </div>
              <div className="text-xs sm:text-sm text-gray-300 mt-1">
                Machines
              </div>
            </div>

            <div className="text-center border-x border-white/30">
              <div className="text-2xl sm:text-3xl font-bold">
                250T
              </div>
              <div className="text-xs sm:text-sm text-gray-300 mt-1">
                Crane Capacity
              </div>
            </div>

            <div className="text-center">
              <div className="text-2xl sm:text-3xl font-bold">
                24/7
              </div>
              <div className="text-xs sm:text-sm text-gray-300 mt-1">
                Support
              </div>
            </div>
          </div>

          {/* Equipment categories */}
          <div className="border-t border-white/20 pt-5">

            <p className="text-xs uppercase tracking-widest
              text-gray-300 font-semibold mb-3">
              Explore Equipment
            </p>

            <div className="flex gap-2 overflow-x-auto
              pb-2 justify-start
              sm:justify-center sm:flex-wrap
              sm:overflow-visible scrollbar-hide">

              {categories.map((category) => (
                <button
                  key={category}
                  onClick={scrollToFleet}
                  className="shrink-0 px-3 py-2
                    rounded-full border border-white/30
                    bg-white/10 hover:bg-orange
                    hover:border-orange text-white
                    text-xs sm:text-sm transition-colors"
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

        </div>
      </div>

      {/* Scroll indicator */}
      <button
        onClick={scrollToFleet}
        className="hidden sm:block absolute bottom-2
          left-0 right-0 mx-auto w-fit
          text-white/70 hover:text-white
          transition animate-bounce p-2"
        aria-label="Explore equipment"
      >
        <ChevronDown className="w-6 h-6" />
      </button>

    </section>
  );
};

export default Hero;
