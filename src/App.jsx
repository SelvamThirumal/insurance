import React from 'react';

// Import newly updated components
import Navbar from './components/Navbar';
import Hero from './scene/HeroScene'; 
import TrustBar from './components/TrustBar'; 
import Services from './components/Services'; 
import WhyUs from './components/WhyUs';
import SingleEmployee from './components/SingleEmployee'; // Newly added
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-white font-sans selection:bg-blue-100 selection:text-blue-900">
      
      {/* 1. Navigation - High-end sticky nav */}
      <Navbar />

      <main>
        {/* 2. Hero Section - Image Slider with impactful text */}
        <Hero />

        {/* 3. Trust Bar - Institutional reliability & audit metrics */}
        <TrustBar />

        {/* 4. Insurance Plans - Shield-shaped cards with descriptive content */}
        <Services />

        {/* 5. Why Us - AI-powered claims & tech-focused benefits */}
        <WhyUs />

        {/* 6. Employee Spotlight - The Innomatrics Professional ID Card */}
        <section className="bg-slate-50 py-10">
           <div className="text-center mb-10">
              <h2 className="text-3xl font-black text-slate-900 tracking-tighter uppercase italic">
                Our Tech <span className="text-blue-600">Visionary</span>
              </h2>
           </div>
           <SingleEmployee />
        </section>
      </main>

      {/* 7. Professional Footer - Money-themed background with legal disclaimers */}
      <Footer />
      
    </div>
  );
}