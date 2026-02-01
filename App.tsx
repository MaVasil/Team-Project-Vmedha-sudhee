
import React, { useState, useEffect } from 'react';
import { Background } from './components/Background';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Countdown } from './components/Countdown';
import { Events } from './components/Events';
import { About } from './components/About';
import { FAQ } from './components/FAQ';
import { RegistrationForm } from './components/RegistrationForm';
import { SuccessOverlay } from './components/SuccessOverlay';
import { Footer } from './components/Footer';

const App: React.FC = () => {
  const [isSuccess, setIsSuccess] = useState(false);
  const [regDetails, setRegDetails] = useState<{ event: string; timestamp: string } | null>(null);

  const handleRegistrationSuccess = (details: { event: string; timestamp: string }) => {
    setRegDetails(details);
    setIsSuccess(true);
  };

  return (
    <div className="relative min-h-screen">
      {/* Persistant Global Elements */}
      <div className="scanline" />
      <Background />
      
      {/* Fixed Layout */}
      <Header />

      {/* Main Content Sections */}
      <main className="relative z-10 w-full overflow-x-hidden">
        <section id="home">
          <Hero />
          <Countdown />
        </section>

        <section id="events" className="py-24">
          <Events />
        </section>

        <section id="about" className="py-24">
          <About />
        </section>

        <section id="faq" className="py-24">
          <FAQ />
        </section>

        <section id="register" className="py-24">
          <RegistrationForm onSuccess={handleRegistrationSuccess} />
        </section>
      </main>

      <Footer />

      {/* Overlays */}
      {isSuccess && regDetails && (
        <SuccessOverlay 
          details={regDetails} 
          onClose={() => setIsSuccess(false)} 
        />
      )}
    </div>
  );
};

export default App;
