import React, { useState } from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Clients from '@/components/Clients';
import Fleet from '@/components/Fleet';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import MobileBar from '@/components/MobileBar';

const Index = () => {
  const [selectedMachineForQuote, setSelectedMachineForQuote] = useState<string>('');

  const handleSelectMachine = (machineName: string) => {
    setSelectedMachineForQuote(machineName);
  };

  return (
    <div className="min-h-screen bg-white text-gray-900 pb-12 lg:pb-0 font-sans antialiased">
      <Header />
      <main>
        <Hero />
        <Clients />
        <Fleet onSelectMachineForQuote={handleSelectMachine} />
        <About />
        <Projects />
        <Contact initialSelectedMachine={selectedMachineForQuote} />
      </main>
      <Footer />
      <MobileBar />
    </div>
  );
};

export default Index;
