import { contact } from '@/data/companyConstants';
import React, { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { CheckCircle2, FileText, Phone, Wrench, ShieldCheck, ChevronRight } from 'lucide-react';

export type EquipmentCategory =
  | 'All'
  | 'Pick & Carry Cranes'
  | 'Telescopic Cranes'
  | 'Crawler Cranes'
  | 'Excavators & Earthmoving'
  | 'Man Lifts & Booms';

export interface EquipmentModel {
  id: string;
  name: string;
  category: EquipmentCategory;
  capacity: string;
  capacityNum: number; // for quick filtering in tonnes
  description: string;
  image: string;
  brand: string;
  boomLength?: string;
  workingRadius?: string;
  engine?: string;
  operatorIncluded: boolean;
  tpiCertified: boolean;
  applications: string[];
}

const equipmentCatalog: EquipmentModel[] = [
  {
    id: 'pnc-1',
    name: 'Pick and Carry Crane (Hydra / ACE)',
    category: 'Pick & Carry Cranes',
    capacity: '15T, 17T, 23T',
    capacityNum: 23,
    description:
      'Articulated heavy mobile crane with tight turning radius. Ideal for material handling and structural positioning in compact site conditions.',
    image: '/lovable-uploads/582481b6-7488-47d8-ba5c-0d01d2bd2eaf.png',
    brand: 'Escorts / ACE',
    boomLength: '18.5m (4-Section Slotted Boom)',
    workingRadius: 'Up to 15m',
    engine: 'Escorts 497 SP Turbo / 101 HP',
    operatorIncluded: true,
    tpiCertified: true,
    applications: [
      'Yard material offloading & loading',
      'Structural steel positioning',
      'Precast concrete yard shifting',
      'Factory machinery installation',
    ],
  },
  {
    id: 'telescopic-1',
    name: 'Tyre Mounted Telescopic Crane',
    category: 'Telescopic Cranes',
    capacity: '50T, 70T, 80T, 100T',
    capacityNum: 100,
    description:
      'High-reach hydraulic telescopic crane with multi-axle carrier. Delivers swift highway travel, rapid outrigger setup, and heavy lift capacity.',
    image: '/lovable-uploads/7c9a592a-27ec-4f4d-8eea-3c09e8c4c7bb.png',
    brand: 'Liebherr / Grove / Sany',
    boomLength: '40m – 52m Telescopic + 16m Lattice Jib',
    workingRadius: 'Up to 48m',
    engine: 'Heavy-duty Turbo Diesel (Tier 3 / BS-IV)',
    operatorIncluded: true,
    tpiCertified: true,
    applications: [
      'High-rise building structural erection',
      'Highway flyover and metro girder placement',
      'Tower crane erection & dismantling',
      'Heavy transformer and boiler positioning',
    ],
  },
  {
    id: 'crawler-1',
    name: 'Hydraulic Heavy Crawler Crane',
    category: 'Crawler Cranes',
    capacity: '50T, 70T, 100T, 150T, 250T',
    capacityNum: 250,
    description:
      'Ultra-stable heavy lifting crawler crane with lattice boom. Capable of 100% rated pick-and-carry travel across unpaved and soft construction soils.',
    image: '/lovable-uploads/f2480aab-4988-4b4e-bd2f-91ae71f151dd.png',
    brand: 'Kobelco / Manitowoc / Sany',
    boomLength: 'Lattice Boom up to 82m + Fixed Jib',
    workingRadius: 'Up to 60m',
    engine: 'Mitsubishi / Cummins Heavy Industrial',
    operatorIncluded: true,
    tpiCertified: true,
    applications: [
      'Metro viaduct and station superstructure erection',
      'Refinery shutdown and vessel heavy lifts',
      'Bridge pier & riverbed pile cage erection',
      'Port container crane fabrication and assembly',
    ],
  },
  {
    id: 'excavator-1',
    name: 'Heavy Hydraulic Excavator (Tata / Komatsu)',
    category: 'Excavators & Earthmoving',
    capacity: '20T (Tata 200) & 30T (Komatsu PC300)',
    capacityNum: 30,
    description:
      'High-production track excavators equipped with heavy-duty rock buckets. Engineered for deep excavation, rock breaking, and site mass leveling.',
    image: '/lovable-uploads/36d1f002-692c-4286-80eb-add1f0b3b1bc.png',
    brand: 'Tata Hitachi / L&T Komatsu',
    boomLength: '6.6m – 7.3m Digging Depth',
    workingRadius: '9.9m Max Reach at Ground Level',
    engine: 'Cummins 6BT 5.9 / Komatsu SAA6D107E',
    operatorIncluded: true,
    tpiCertified: true,
    applications: [
      'Basement and foundation deep excavation',
      'Highway embankment cut & fill',
      'Quarry and hard-strata rock breaking',
      'River training and storm pipeline trenching',
    ],
  },
  {
    id: 'backhoe-1',
    name: 'Backhoe Loader (JCB 3DX & 4DX Extra)',
    category: 'Excavators & Earthmoving',
    capacity: 'JCB 3DX / 4DX Super',
    capacityNum: 10,
    description:
      'Multi-purpose earthmoving workhorse combining front loader bucket with a heavy hydraulic rear digging arm for high agility on construction sites.',
    image: '/lovable-uploads/59f35e5b-3680-4091-a3f3-0f088e85526a.png',
    brand: 'JCB India',
    boomLength: '4.77m Max Digging Depth',
    workingRadius: '5.4m Reach from Slew Centre',
    engine: 'JCB ecoMAX 76 HP Turbocharged',
    operatorIncluded: true,
    tpiCertified: true,
    applications: [
      'Site clearing and ground levelling',
      'Utility ditching and drainage canal digging',
      'Aggregate and sand loading onto tippers',
      'Footing excavation and backfilling',
    ],
  },
  {
    id: 'manlift-1',
    name: 'Articulated & Telescopic Boom Man Lift',
    category: 'Man Lifts & Booms',
    capacity: '80Ft, 120Ft, 135Ft, 150Ft (JLG)',
    capacityNum: 15,
    description:
      'Self-propelled aerial work platforms with safe 4WD rough-terrain capability. Designed for elevated structural inspection, welding, and painting.',
    image: '/lovable-uploads/f2480aab-4988-4b4e-bd2f-91ae71f151dd.png',
    brand: 'JLG Industries',
    boomLength: 'Platform Height 24.4m to 45.7m (80–150 Ft)',
    workingRadius: 'Horizontal Outreach up to 23m',
    engine: 'Deutz 4-Cylinder Diesel (4WD / 4WS)',
    operatorIncluded: true,
    tpiCertified: true,
    applications: [
      'Industrial shed roof & structural beam welding',
      'High-rise building exterior facade glazing',
      'Electrical overhead gantry line maintenance',
      'Airport hangar and refinery vessel pipe painting',
    ],
  },
];

interface FleetProps {
  onSelectMachineForQuote?: (machineName: string) => void;
}

const Fleet: React.FC<FleetProps> = ({ onSelectMachineForQuote }) => {
  const [selectedEquipment, setSelectedEquipment] = useState<EquipmentModel | null>(null);
  const [activeCategory, setActiveCategory] = useState<EquipmentCategory>('All');
  const [capacityFilter, setCapacityFilter] = useState<'all' | 'under30' | '30to100' | 'above100'>('all');

  const categories: EquipmentCategory[] = [
    'All',
    'Pick & Carry Cranes',
    'Telescopic Cranes',
    'Crawler Cranes',
    'Excavators & Earthmoving',
    'Man Lifts & Booms',
  ];

  const filteredEquipment = equipmentCatalog.filter((item) => {
    const matchesCategory = activeCategory === 'All' || item.category === activeCategory;
    let matchesCapacity = true;
    if (capacityFilter === 'under30') matchesCapacity = item.capacityNum <= 30;
    else if (capacityFilter === '30to100') matchesCapacity = item.capacityNum > 30 && item.capacityNum <= 100;
    else if (capacityFilter === 'above100') matchesCapacity = item.capacityNum > 100;
    return matchesCategory && matchesCapacity;
  });

  const handleInquireFromModal = (machineName: string) => {
    setSelectedEquipment(null);
    if (onSelectMachineForQuote) {
      onSelectMachineForQuote(machineName);
    }
    const contactElem = document.getElementById('contact');
    if (contactElem) {
      contactElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="fleet" className="py-20 bg-gray-50 border-t border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center mb-12">
          <Badge className="bg-orange/10 text-orange hover:bg-orange/20 border-orange/20 px-3 py-1 mb-3 text-xs tracking-wider uppercase font-bold">
            Heavy Machinery Fleet
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our Certified <span className="text-orange">Equipment Fleet</span>
          </h2>
          <div className="w-24 h-1.5 bg-orange mx-auto mb-6 rounded-full" />
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Comprehensive range of heavy cranes, earthmoving machines, and aerial lifts available for rental across Maharashtra and India. Fully tested with third-party load charts.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-6">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 rounded-full text-xs md:text-sm font-semibold transition-all duration-200 ${
                activeCategory === category
                  ? 'bg-orange text-white shadow-md shadow-orange/30'
                  : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Capacity Tonnage Quick Filter */}
        <div className="text-base text-gray-700 mb-2">Filter Tonnage:</div>
        <div className="flex items-center justify-start gap-2 text-xs text-gray-500 mb-10">
          <button
            onClick={() => setCapacityFilter('all')}
            className={`p-2 rounded self-stretch flex items-center ${capacityFilter === 'all' ? 'bg-gray-900 text-white font-bold' : 'bg-gray-200 text-gray-700'}`}
          >
            All
          </button>
          <button
            onClick={() => setCapacityFilter('under30')}
            className={`p-2 rounded self-stretch flex items-center ${capacityFilter === 'under30' ? 'bg-gray-900 text-white font-bold' : 'bg-gray-200 text-gray-700'}`}
          >
            upto 30T
          </button>
          <button
            onClick={() => setCapacityFilter('30to100')}
            className={`p-2 rounded self-stretch flex items-center ${capacityFilter === '30to100' ? 'bg-gray-900 text-white font-bold' : 'bg-gray-200 text-gray-700'}`}
          >
            30T to 100T
          </button>
          <button
            onClick={() => setCapacityFilter('above100')}
            className={`p-2 rounded self-stretch flex items-center ${capacityFilter === 'above100' ? 'bg-gray-900 text-white font-bold' : 'bg-gray-200 text-gray-700'}`}
          >
            above 100T
          </button>
        </div>

        {/* Machinery Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredEquipment.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-xl shadow-md border border-gray-200/80 overflow-hidden flex flex-col hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="relative overflow-hidden h-52 bg-gray-100 group">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                <div className="absolute top-3 left-3 flex gap-2">
                  <span className="bg-orange text-white text-[10px] font-bold px-2 py-0.5 rounded shadow">
                    {item.brand}
                  </span>
                  {item.tpiCertified && (
                    <span className="bg-green-600 text-white text-[10px] font-bold px-2 py-0.5 rounded shadow flex items-center gap-1">
                      <ShieldCheck className="w-3 h-3" /> TPI Certified
                    </span>
                  )}
                </div>
                <div className="absolute bottom-3 left-3 right-3 text-white">
                  <h3 className="font-bold text-lg leading-tight drop-shadow-sm">{item.name}</h3>
                  <p className="text-orange font-bold text-sm drop-shadow-sm">{item.capacity}</p>
                </div>
              </div>

              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <p className="text-gray-600 text-xs leading-relaxed mb-4 line-clamp-3">
                    {item.description}
                  </p>
                  
                  {item.boomLength && (
                    <div className="text-[11px] text-gray-500 mb-3 bg-gray-50 p-2 rounded border border-gray-100 flex items-center justify-between">
                      <span className="font-medium text-gray-700">Boom / Reach:</span>
                      <span className="font-bold text-gray-900">{item.boomLength}</span>
                    </div>
                  )}
                </div>

                <div className="pt-3 border-t border-gray-100 flex items-center gap-2">
                  <Button
                    variant="outline"
                    size="sm"
                    className="flex-1 text-xs border-gray-300 hover:border-orange hover:text-orange"
                    onClick={() => setSelectedEquipment(item)}
                  >
                    View Specs
                  </Button>
                  <Button
                    size="sm"
                    className="flex-1 text-xs bg-orange hover:bg-orange-hover text-white font-semibold"
                    onClick={() => handleInquireFromModal(item.name)}
                  >
                    Get Quote
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Equipment Detail Modal with Technical Specs */}
      <Dialog open={!!selectedEquipment} onOpenChange={() => setSelectedEquipment(null)}>
        <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">
          {selectedEquipment && (
            <div>
              <DialogHeader className="mb-4">
                <div className="flex items-center gap-2 mb-1">
                  <Badge className="bg-orange text-white text-xs">{selectedEquipment.category}</Badge>
                  <Badge variant="outline" className="text-xs">{selectedEquipment.brand}</Badge>
                </div>
                <DialogTitle className="text-2xl font-bold text-gray-900">
                  {selectedEquipment.name}
                </DialogTitle>
                <p className="text-orange font-bold text-base">
                  Rated Capacity: {selectedEquipment.capacity}
                </p>
              </DialogHeader>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <img
                    src={selectedEquipment.image}
                    alt={selectedEquipment.name}
                    className="w-full h-56 object-cover rounded-lg shadow-sm border mb-4"
                  />
                  <div className="p-3 bg-gray-50 rounded-lg border border-gray-200 text-xs space-y-2">
                    <div className="flex items-center gap-2 text-green-700 font-semibold">
                      <CheckCircle2 className="w-4 h-4" /> Third-Party Inspection (TPI) Passed
                    </div>
                    <div className="flex items-center gap-2 text-green-700 font-semibold">
                      <CheckCircle2 className="w-4 h-4" /> Certified & Licensed Crane Operator Included
                    </div>
                    <div className="flex items-center gap-2 text-blue-700 font-semibold">
                      <Wrench className="w-4 h-4" /> 24/7 Mobile Service Support in Maharashtra
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <div>
                    <h4 className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">
                      Technical Specifications
                    </h4>
                    <table className="w-full text-xs border border-gray-200 divide-y divide-gray-200 rounded">
                      <tbody className="divide-y divide-gray-100">
                        <tr className="bg-gray-50">
                          <td className="px-3 py-2 font-medium text-gray-600">Rated Capacity</td>
                          <td className="px-3 py-2 font-bold text-gray-900">{selectedEquipment.capacity}</td>
                        </tr>
                        {selectedEquipment.boomLength && (
                          <tr>
                            <td className="px-3 py-2 font-medium text-gray-600">Max Boom / Reach</td>
                            <td className="px-3 py-2 font-bold text-gray-900">{selectedEquipment.boomLength}</td>
                          </tr>
                        )}
                        {selectedEquipment.workingRadius && (
                          <tr className="bg-gray-50">
                            <td className="px-3 py-2 font-medium text-gray-600">Working Radius</td>
                            <td className="px-3 py-2 font-bold text-gray-900">{selectedEquipment.workingRadius}</td>
                          </tr>
                        )}
                        {selectedEquipment.engine && (
                          <tr>
                            <td className="px-3 py-2 font-medium text-gray-600">Engine / Power</td>
                            <td className="px-3 py-2 text-gray-900">{selectedEquipment.engine}</td>
                          </tr>
                        )}
                        <tr className="bg-gray-50">
                          <td className="px-3 py-2 font-medium text-gray-600">Compliance</td>
                          <td className="px-3 py-2 text-gray-900">Safety Load Chart, Form 11 / TPI</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  <div>
                    <h4 className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">
                      Common Project Applications
                    </h4>
                    <ul className="text-xs space-y-1 text-gray-700">
                      {selectedEquipment.applications.map((app, idx) => (
                        <li key={idx} className="flex items-start gap-1.5">
                          <ChevronRight className="w-3.5 h-3.5 text-orange flex-shrink-0 mt-0.5" />
                          <span>{app}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-2 flex gap-3">
                    <Button
                      className="flex-1 bg-orange hover:bg-orange-hover text-white font-bold"
                      onClick={() => handleInquireFromModal(selectedEquipment.name)}
                    >
                      Request Rental Quote
                    </Button>
                    <a
                      href={`tel:${contact.primaryPhoneRaw}`}
                      className="inline-flex items-center gap-1.5 px-4 py-2 rounded-md bg-gray-900 text-white text-xs font-semibold hover:bg-gray-800"
                    >
                      <Phone className="w-3.5 h-3.5" /> Call Dispatch
                    </a>
                  </div>
                </div>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default Fleet;
