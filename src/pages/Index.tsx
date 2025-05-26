
import React from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Clients from '@/components/Clients';
import Projects from '@/components/Projects';
import Fleet from '@/components/Fleet';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <About />
      <Clients />
      <Projects />
      <Fleet />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
