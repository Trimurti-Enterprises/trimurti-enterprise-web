
import React, { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { X } from 'lucide-react';

const Fleet = () => {
  const [selectedEquipment, setSelectedEquipment] = useState<any>(null);

  const equipment = [
    {
      name: "Pick and Carry Crane",
      capacity: "15T, 17T, 23T",
      description: "Perfect for material handling and positioning in confined spaces",
      image: "https://images.unsplash.com/photo-1487887235947-a955ef187fcc?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
    },
    {
      name: "Tyre Mounted Telescopic Crane",
      capacity: "50T, 70T, 80T, 100T",
      description: "Ideal for high-reach construction and installation work",
      image: "https://images.unsplash.com/photo-1469041797191-50ace28483c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
    },
    {
      name: "Hydraulic Crawler Crane",
      capacity: "50T, 70T, 100T, 150T, 250T",
      description: "Heavy-duty lifting for large-scale construction projects",
      image: "https://images.unsplash.com/photo-1487252665478-49b61b47f302?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
    },
    {
      name: "Excavator",
      capacity: "20T (Tata 200) & 30T (L&T Komatsu PC300)",
      description: "Efficient earth moving and excavation equipment",
      image: "https://images.unsplash.com/photo-1487887235947-a955ef187fcc?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
    },
    {
      name: "Back Hoe Loader",
      capacity: "JCB 3DX, 4DX",
      description: "Versatile equipment for digging and loading operations",
      image: "https://images.unsplash.com/photo-1469041797191-50ace28483c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
    },
    {
      name: "Man Lift / Boom Lift",
      capacity: "80Ft, 120Ft, 135Ft, 150Ft (JLG)",
      description: "Safe aerial access for maintenance and installation work",
      image: "https://images.unsplash.com/photo-1487252665478-49b61b47f302?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
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
