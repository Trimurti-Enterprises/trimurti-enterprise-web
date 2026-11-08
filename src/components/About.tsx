import React, { useEffect, useRef, useState } from 'react';
import { ShieldCheck, Award, Wrench, Clock, Users, HardHat, CheckCircle2 } from 'lucide-react';

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const stats = [
    { value: '15+', label: 'Years Serving Maharashtra Industry', icon: Clock },
    { value: '500+', label: 'Major Infrastructure Projects Completed', icon: Award },
    { value: '50+', label: 'Heavy Machinery & Cranes in Fleet', icon: HardHat },
    { value: '99.8%', label: 'Incident-Free Safety Record', icon: ShieldCheck },
  ];

  const highlights = [
    {
      title: 'Third-Party Inspected (TPI) Fleet',
      desc: 'All cranes, boists, and earthmoving machines undergo regular third-party safety testing with Form 11 certifications.',
    },
    {
      title: 'Certified Riggers & Licensed Operators',
      desc: 'Every operator holds heavy motor vehicle licenses, safety induction passes, and rigorous training in high-risk lifting.',
    },
    {
      title: '24/7 Mobile Breakdown Service Van',
      desc: 'Dedicated rapid response mechanics and on-site hydraulic maintenance ensure zero project downtime.',
    },
    {
      title: 'Flexible Commercial Terms',
      desc: 'Daily, monthly, and multi-year lease structures with transparent invoicing and comprehensive transit insurance.',
    },
  ];

  return (
    <section id="about" ref={sectionRef} className="py-20 bg-gray-50 border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <span className="text-orange font-bold text-xs uppercase tracking-wider bg-orange/10 px-3 py-1 rounded-full">
            Company Profile & Values
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-2 mb-4">
            About <span className="text-orange">Trimurti Enterprises</span>
          </h2>
          <div className="w-24 h-1.5 bg-orange mx-auto mb-6 rounded-full" />
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            A trusted heavy machinery and crane rental partner for industrial plants, highway bridges, metro rail projects, and structural erection across western India.
          </p>
        </div>

        {/* Narrative & Highlights Grid */}
        <div
          className={`grid lg:grid-cols-2 gap-12 items-center mb-16 transition-all duration-1000 delay-200 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div>
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 leading-snug">
              Delivering lifting excellence and heavy earthmoving power since 2009.
            </h3>
            <p className="text-gray-700 leading-relaxed mb-4 text-base">
              At <strong>M/s. Trimurti Enterprises</strong>, we specialize in supplying a comprehensive range of construction-related equipment, including Pick and Carry Cranes, Hydraulic Crawler Cranes, Tyre-Mounted Telescopic Cranes, JLG Boom Lifts, Excavators, and Backhoe Loaders.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4 text-base">
              All our equipment is meticulously maintained to meet rigorous tier-1 contractor standards. Whether executing high-tonnage girder placement on metro corridors, heavy industrial steel erection for manufacturing plants, or mass site excavation, we deliver reliability, safety, and competitive pricing.
            </p>
            <p className="text-gray-700 leading-relaxed text-base">
              Headquartered with equipment yards strategically situated in Navi Mumbai, we rapidly mobilize machinery throughout Mumbai, Thane, Pune, Raigad, and wider Maharashtra.
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-md border border-gray-200 p-8">
            <h4 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
              <ShieldCheck className="w-6 h-6 text-orange" />
              Why Contractors Trust Trimurti
            </h4>

            <div className="space-y-5">
              {highlights.map((item, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <div className="mt-1 p-1 bg-green-100 text-green-700 rounded-full flex-shrink-0">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                  <div>
                    <h5 className="font-bold text-gray-900 text-sm">{item.title}</h5>
                    <p className="text-gray-600 text-xs mt-0.5 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Key Statistics Counters */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div
                key={index}
                className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm text-center hover:shadow-md transition-shadow"
              >
                <div className="w-12 h-12 bg-orange/10 text-orange rounded-xl flex items-center justify-center mx-auto mb-3">
                  <Icon className="w-6 h-6" />
                </div>
                <div className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-1">
                  {stat.value}
                </div>
                <p className="text-xs text-gray-600 font-medium leading-snug">
                  {stat.label}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default About;
