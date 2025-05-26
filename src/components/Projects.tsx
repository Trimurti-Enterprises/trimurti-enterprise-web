
import React, { useEffect, useRef, useState } from 'react';

const Projects = () => {
  const [visibleCards, setVisibleCards] = useState<number[]>([]);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  const projects = [
    {
      title: "Industrial Steel Structure Erection",
      description: "Complete structural erection for manufacturing facility using 100T crawler cranes",
      image: "https://images.unsplash.com/photo-1487887235947-a955ef187fcc?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "High-Rise Construction Support",
      description: "Material handling and positioning for 30-story commercial complex",
      image: "https://images.unsplash.com/photo-1469041797191-50ace28483c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Infrastructure Development",
      description: "Earth moving and excavation work for highway construction project",
      image: "https://images.unsplash.com/photo-1487252665478-49b61b47f302?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Power Plant Installation",
      description: "Heavy machinery positioning for thermal power plant equipment",
      image: "https://images.unsplash.com/photo-1487887235947-a955ef187fcc?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    }
  ];

  useEffect(() => {
    const observers = cardRefs.current.map((cardRef, index) => {
      if (!cardRef) return null;
      
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setVisibleCards(prev => [...prev, index]);
          }
        },
        { threshold: 0.3 }
      );
      
      observer.observe(cardRef);
      return observer;
    });

    return () => {
      observers.forEach(observer => observer?.disconnect());
    };
  }, []);

  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Our <span className="text-orange">Projects</span>
          </h2>
          <div className="w-24 h-1 bg-orange mx-auto mb-8" />
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Showcasing our expertise in delivering complex construction projects with precision and reliability
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              ref={el => cardRefs.current[index] = el}
              className={`bg-white rounded-lg shadow-lg overflow-hidden transition-all duration-700 ${
                visibleCards.includes(index) 
                  ? 'opacity-100 translate-x-0' 
                  : `opacity-0 ${index % 2 === 0 ? '-translate-x-10' : 'translate-x-10'}`
              }`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              <div className="relative overflow-hidden h-64">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-3">{project.title}</h3>
                <p className="text-gray-600 leading-relaxed">{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
