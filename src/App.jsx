import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Calculator from './components/Calculator';
import HowItWorks from './components/HowItWorks';
import Fleet from './components/Fleet';
import CoverageStats from './components/CoverageStats';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import ContactCTA from './components/ContactCTA';
import Footer from './components/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp';

export default function App() {
  const [selectedVehicle, setSelectedVehicle] = useState('camioneta');

  const handleSelectService = (serviceId) => {
    if (serviceId === 'moto') setSelectedVehicle('moto');
    else if (serviceId === 'camioneta') setSelectedVehicle('camioneta');
    else setSelectedVehicle('corporativo');

    // Smooth scroll to calculator
    const el = document.getElementById('cotizador');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#070D1B] text-slate-100 relative overflow-x-hidden selection:bg-emerald-400 selection:text-slate-950">
      {/* Dynamic Background Effects */}
      <div className="fixed inset-0 bg-radial-glow pointer-events-none -z-10" />
      <div className="fixed inset-0 bg-radial-blue pointer-events-none -z-10" />

      {/* Navigation */}
      <Navbar />

      {/* Main Content */}
      <main>
        <Hero />
        <Services onSelectService={handleSelectService} />
        <Calculator selectedVehicle={selectedVehicle} setSelectedVehicle={setSelectedVehicle} />
        <HowItWorks />
        <Fleet onSelectVehicle={handleSelectService} />
        <CoverageStats />
        <Testimonials />
        <FAQ />
        <ContactCTA />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating Interactive Widget */}
      <FloatingWhatsApp />
    </div>
  );
}
