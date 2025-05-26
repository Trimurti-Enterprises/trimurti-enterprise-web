
import React, { useEffect, useRef, useState } from 'react';

const Projects = () => {
  const [visibleCards, setVisibleCards] = useState<number[]>([]);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  const projects = [
    {
      title: "Industrial Steel Structure Erection",
      description: "Complete structural erection for manufacturing facility using 100T crawler cranes",
      image: "/lovable-uploads/7c9a592a-27ec-4f4d-8eea-3c09e8c4c7bb.png"
    },
    {
      title: "Heavy Equipment Operations",
      description: "Material handling and positioning using advanced pick and carry cranes",
      image: "/lovable-uploads/582481b6-7488-47d8-ba5c-0d01d2bd2eaf.png"
    },
    {
      title: "Infrastructure Development",
      description: "Earth moving and excavation work for highway construction project",
      image: "/lovable-uploads/36d1f002-692c-4286-80eb-add1f0b3b1bc.png"
    },
    {
      title: "Construction Site Operations",
      description: "Multi-equipment coordination for large-scale construction projects",
      image: "/lovable-uploads/59f35e5b-3680-4091-a3f3-0f088e85526a.png"
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
