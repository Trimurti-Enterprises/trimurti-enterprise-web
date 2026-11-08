import React from 'react';
import { Button } from '@/components/ui/button';
import { ShieldCheck, Award, PhoneCall, ChevronDown } from 'lucide-react';

const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToFleet = () => {
    const element = document.getElementById('fleet');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-[92vh] flex items-center justify-center overflow-hidden pt-20">
      {/* Background with Dark Industrial Gradient */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(rgba(14,24,20,0.85), rgba(14,24,20,0.72)), url('/lovable-uploads/f2480aab-4988-4b4e-bd2f-91ae71f151dd.png')`,
        }}
      />

      {/* Hero Content */}
      <div className="relative z-10 text-center text-white px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto py-16">
        <div className="inline-flex items-center gap-2 bg-orange/20 border border-orange/40 text-orange-200 px-4 py-1.5 rounded-full text-xs sm:text-sm font-semibold mb-6 animate-fade-in">
          <ShieldCheck className="w-4 h-4 text-orange" />
          <span>Heavy Crane & Equipment Rental Specialists · Mumbai & Maharashtra</span>
        </div>

        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-6 tracking-tight leading-tight animate-fade-in-up">
          Building Infrastructure with{' '}
          <span className="block text-orange mt-2 drop-shadow-md">
            Heavy Cranes & Certified Fleet
          </span>
        </h1>

        <p
          className="text-lg sm:text-xl md:text-2xl mb-10 text-gray-200 max-w-3xl mx-auto leading-relaxed animate-fade-in-up"
          style={{ animationDelay: '0.2s' }}
        >
          Supplying Pick & Carry cranes, Hydraulic Telescopic & Crawler cranes (up to 250T), Excavators, and Boom Lifts with certified operators and 24/7 on-site service.
        </p>

        {/* CTA Actions */}
        <div
          className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-up mb-12"
          style={{ animationDelay: '0.4s' }}
        >
          <Button
            onClick={scrollToContact}
            className="w-full sm:w-auto bg-orange hover:bg-orange-hover text-white px-8 py-6 text-base font-bold rounded-xl shadow-lg shadow-orange/30 transition-all duration-300 transform hover:scale-105"
          >
            Get Instant Equipment Quote ↗
          </Button>

          <Button
            onClick={scrollToFleet}
            variant="outline"
            className="w-full sm:w-auto border-2 border-white/80 bg-white/10 backdrop-blur-sm text-white hover:bg-white hover:text-gray-900 px-8 py-6 text-base font-bold rounded-xl transition-all duration-300"
          >
            Explore 50+ Fleet Machines
          </Button>

          <a
            href="tel:+919876543210"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-gray-900/80 hover:bg-gray-900 text-white text-sm font-semibold border border-white/20 transition"
          >
            <PhoneCall className="w-4 h-4 text-orange" />
            <span>Call +91 98765 43210</span>
          </a>
        </div>

        {/* Trust Points Under CTAs */}
        <div className="flex flex-wrap justify-center items-center gap-6 sm:gap-10 text-xs sm:text-sm text-gray-300 border-t border-white/15 pt-6">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-orange" />
            <span>TPI Certified Load Charts</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-green-500" />
            <span>Licensed Riggers & Operators</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-blue" />
            <span>24/7 Mobile Service Support</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-yellow-400" />
            <span>15+ Years Track Record</span>
          </div>
        </div>
      </div>

      {/* Down Arrow Indicator */}
      <button
        onClick={scrollToFleet}
        className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white/70 hover:text-white transition animate-bounce p-2"
        aria-label="Scroll to fleet"
      >
        <ChevronDown className="w-6 h-6" />
      </button>
    </section>
  );
};

export default Hero;
