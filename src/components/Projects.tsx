import React, { useState } from 'react';
import { Badge } from '@/components/ui/badge';
import { Building2, MapPin, Wrench, Shield, CheckCircle } from 'lucide-react';

export type ProjectSector =
  | 'All'
  | 'Metro & Infrastructure'
  | 'Refinery & Petrochemicals'
  | 'Industrial Fabrication'
  | 'Highways & Earthmoving';

interface ProjectItem {
  id: string;
  title: string;
  sector: ProjectSector;
  client: string;
  location: string;
  equipmentUsed: string;
  description: string;
  image: string;
  highlight: string;
}

const projectsData: ProjectItem[] = [
  {
    id: 'proj-1',
    title: 'Metro Viaduct Girder Placement',
    sector: 'Metro & Infrastructure',
    client: 'L&T Construction / MMRDA',
    location: 'Mumbai Metro Line Corridor',
    equipmentUsed: '250T Hydraulic Crawler & 100T Telescopic Cranes',
    description:
      'Tandem lifting and precision placement of precast U-girders and pier caps in active urban traffic corridors with night shift execution.',
    image: '/lovable-uploads/7c9a592a-27ec-4f4d-8eea-3c09e8c4c7bb.png',
    highlight: 'Zero downtime across 45 night lifting shifts',
  },
  {
    id: 'proj-2',
    title: 'Refinery Heavy Column Erection',
    sector: 'Refinery & Petrochemicals',
    client: 'BPCL / Petrochemical EPC',
    location: 'Mahul Refinery, Mumbai',
    equipmentUsed: '150T Crawler Crane + 50T Telescopic Tail Crane',
    description:
      'Turnaround maintenance lift of high-pressure distillation column under strict hazardous area safety protocols and non-sparking rigging.',
    image: '/lovable-uploads/f2480aab-4988-4b4e-bd2f-91ae71f151dd.png',
    highlight: 'Executed within tight 72-hour turnaround window',
  },
  {
    id: 'proj-3',
    title: 'Steel Mill Structural Framework Assembly',
    sector: 'Industrial Fabrication',
    client: 'JSW Steel Limited',
    location: 'Dolvi Industrial Plant, Raigad',
    equipmentUsed: '23T Pick & Carry Cranes & 80T Telescopic Cranes',
    description:
      'Rapid material sorting, heavy truss offloading, and structural steel erection for 12,000 sq. meter heavy manufacturing bay.',
    image: '/lovable-uploads/582481b6-7488-47d8-ba5c-0d01d2bd2eaf.png',
    highlight: 'Over 1,800 MT of structural steel erected safely',
  },
  {
    id: 'proj-4',
    title: 'Expressway Interchange Mass Earthmoving',
    sector: 'Highways & Earthmoving',
    client: 'MSRDC Infrastructure Project',
    location: 'Pune – Mumbai Expressway Spur',
    equipmentUsed: 'Tata 200 & Komatsu PC300 Excavators, JCB 3DX Loaders',
    description:
      'Mass rock cutting, embankment hill slope cutting, and culvert excavation with continuous fleet deployment over 8 months.',
    image: '/lovable-uploads/36d1f002-692c-4286-80eb-add1f0b3b1bc.png',
    highlight: 'Over 350,000 cu. meters of earth & hard strata cleared',
  },
];

const Projects = () => {
  const [activeSector, setActiveSector] = useState<ProjectSector>('All');

  const sectors: ProjectSector[] = [
    'All',
    'Metro & Infrastructure',
    'Refinery & Petrochemicals',
    'Industrial Fabrication',
    'Highways & Earthmoving',
  ];

  const filteredProjects = projectsData.filter(
    (p) => activeSector === 'All' || p.sector === activeSector
  );

  return (
    <section id="projects" className="py-20 bg-gray-50 border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center mb-12">
          <span className="text-orange font-bold text-xs uppercase tracking-wider bg-orange/10 px-3 py-1 rounded-full">
            Field Operations
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-2 mb-4">
            Proven <span className="text-orange">Project Track Record</span>
          </h2>
          <div className="w-24 h-1.5 bg-orange mx-auto mb-6 rounded-full" />
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            From critical metro railway lifts to industrial plant shutdowns, explore our successful deployments across India.
          </p>
        </div>

        {/* Sector Filter Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {sectors.map((sector) => (
            <button
              key={sector}
              onClick={() => setActiveSector(sector)}
              className={`px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 ${
                activeSector === sector
                  ? 'bg-orange text-white shadow-md shadow-orange/30'
                  : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
              }`}
            >
              {sector}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="bg-white rounded-2xl shadow-md border border-gray-200 overflow-hidden hover:shadow-xl transition-all duration-300 flex flex-col"
            >
              <div className="relative h-64 overflow-hidden group">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/25 to-transparent" />
                <div className="absolute top-4 left-4">
                  <Badge className="bg-orange text-white text-xs">{project.sector}</Badge>
                </div>
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <h3 className="text-xl font-bold mb-1 leading-snug">{project.title}</h3>
                  <div className="flex items-center gap-4 text-xs text-gray-200">
                    <span className="flex items-center gap-1">
                      <Building2 className="w-3.5 h-3.5 text-orange" /> {project.client}
                    </span>
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5 text-blue" /> {project.location}
                    </span>
                  </div>
                </div>
              </div>

              <div className="p-6 flex-1 flex flex-col justify-between">
                <div className="space-y-4">
                  <div className="p-3 bg-gray-50 rounded-lg border border-gray-100 flex items-start gap-2 text-xs">
                    <Wrench className="w-4 h-4 text-orange flex-shrink-0 mt-0.5" />
                    <div>
                      <span className="font-bold text-gray-800">Equipment Deployed: </span>
                      <span className="text-gray-600">{project.equipmentUsed}</span>
                    </div>
                  </div>

                  <p className="text-gray-600 text-sm leading-relaxed">
                    {project.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-gray-100 flex items-center gap-2 text-xs font-semibold text-green-700">
                  <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0" />
                  <span>{project.highlight}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
