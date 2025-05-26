
import React, { useEffect, useRef, useState } from 'react';

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
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" ref={sectionRef} className="py-20 bg-primary">
      <div className="max-w-6xl mx-auto px-4">
        <div className={`text-center mb-16 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            About <span className="text-orange">Trimurti Enterprises</span>
          </h2>
          <div className="w-24 h-1 bg-orange mx-auto mb-8" />
        </div>

        <div className={`grid lg:grid-cols-2 gap-12 items-center transition-all duration-1000 delay-200 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <div>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              At M/s. Trimurti Enterprises, we specialize in supplying a comprehensive range of construction-related equipment, including cranes of various capacities, main lifts, and other essential machinery. Our diverse catalogue boasts a wide array of products such as Pick and Carry, Crawler cranes, Tyre mounted telescopic cranes, JLG main lifts, excavators, and backhoe loaders.
            </p>
            
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              All our equipment is meticulously selected to meet industry standards and cater to diverse project requirements. We have garnered a reputation for our reliable services and competitive pricing, making us a preferred choice for clients nationwide.
            </p>
            
            <p className="text-lg text-gray-700 leading-relaxed">
              Whether it is industrial fabrication, civil work, structural erection, or earthmoving, we have successfully executed projects on a sub-contract basis, demonstrating our proficiency and commitment to excellence.
            </p>
          </div>
          
          <div className="relative">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Why Choose Us?</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-orange rounded-full flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-800">Comprehensive Fleet</h4>
                    <p className="text-gray-600">Wide range of equipment for all construction needs</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-orange rounded-full flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-800">Industry Standards</h4>
                    <p className="text-gray-600">All equipment meets stringent quality requirements</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-orange rounded-full flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-800">Competitive Pricing</h4>
                    <p className="text-gray-600">Best rates without compromising on quality</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
