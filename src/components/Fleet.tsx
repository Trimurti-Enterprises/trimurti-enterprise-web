
import React, { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';

const Fleet = () => {
  const [selectedEquipment, setSelectedEquipment] = useState<any>(null);

  const equipment = [
    {
      name: "Pick and Carry Crane",
      capacity: "15T, 17T, 23T",
      description: "Perfect for material handling and positioning in confined spaces with excellent mobility and precision",
      image: "/lovable-uploads/582481b6-7488-47d8-ba5c-0d01d2bd2eaf.png"
    },
    {
      name: "Tyre Mounted Telescopic Crane",
      capacity: "50T, 70T, 80T, 100T",
      description: "Ideal for high-reach construction and installation work with superior lifting capabilities",
      image: "/lovable-uploads/7c9a592a-27ec-4f4d-8eea-3c09e8c4c7bb.png"
    },
    {
      name: "Hydraulic Crawler Crane",
      capacity: "50T, 70T, 100T, 150T, 250T",
      description: "Heavy-duty lifting for large-scale construction projects with exceptional stability",
      image: "/lovable-uploads/f2480aab-4988-4b4e-bd2f-91ae71f151dd.png"
    },
    {
      name: "Excavator",
      capacity: "20T (Tata 200) & 30T (L&T Komatsu PC300)",
      description: "Efficient earth moving and excavation equipment for diverse construction needs",
      image: "/lovable-uploads/36d1f002-692c-4286-80eb-add1f0b3b1bc.png"
    },
    {
      name: "Back Hoe Loader",
      capacity: "JCB 3DX, 4DX",
      description: "Versatile equipment for digging and loading operations with reliable performance",
      image: "/lovable-uploads/59f35e5b-3680-4091-a3f3-0f088e85526a.png"
    },
    {
      name: "Man Lift / Boom Lift",
      capacity: "80Ft, 120Ft, 135Ft, 150Ft (JLG)",
      description: "Safe aerial access for maintenance and installation work at various heights",
      image: "/lovable-uploads/f2480aab-4988-4b4e-bd2f-91ae71f151dd.png"
    }
  ];

  return (
    <section id="fleet" className="py-20 bg-primary">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Our <span className="text-orange">Fleet</span>
          </h2>
          <div className="w-24 h-1 bg-orange mx-auto mb-8" />
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Comprehensive range of construction equipment to meet all your project requirements
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {equipment.map((item, index) => (
            <div
              key={index}
              onClick={() => setSelectedEquipment(item)}
              className="bg-white rounded-lg shadow-lg overflow-hidden cursor-pointer transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
            >
              <div className="relative overflow-hidden h-48">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-white font-bold text-lg">{item.name}</h3>
                </div>
              </div>
              <div className="p-4">
                <p className="text-orange font-semibold text-sm mb-2">{item.capacity}</p>
                <p className="text-gray-600 text-sm">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Equipment Detail Modal */}
      <Dialog open={!!selectedEquipment} onOpenChange={() => setSelectedEquipment(null)}>
        <DialogContent className="max-w-2xl">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold text-gray-800">
              {selectedEquipment?.name}
            </DialogTitle>
          </DialogHeader>
          {selectedEquipment && (
            <div className="space-y-4">
              <img
                src={selectedEquipment.image}
                alt={selectedEquipment.name}
                className="w-full h-64 object-cover rounded-lg"
              />
              <div className="space-y-2">
                <p className="text-orange font-semibold text-lg">
                  Capacity: {selectedEquipment.capacity}
                </p>
                <p className="text-gray-700 leading-relaxed">
                  {selectedEquipment.description}
                </p>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default Fleet;
