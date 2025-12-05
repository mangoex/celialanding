import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import CustomizableAssistant from './components/CustomizableAssistant';
import HowItWorks from './components/HowItWorks';
import Testimonials from './components/Testimonials';
import PricingStrip from './components/PricingStrip';
import CTA from './components/CTA';
import Footer from './components/Footer';
import CrosshairCursor from './components/CrosshairCursor';

const App: React.FC = () => {
  return (
    <div className="relative flex h-auto min-h-screen w-full flex-col overflow-x-hidden font-display bg-background-dark text-white">
      <CrosshairCursor color="rgba(255, 255, 255, 0.25)" />
      <div className="layout-container flex h-full grow flex-col">
        <div className="flex flex-1 justify-center py-5">
          <div className="layout-content-container flex w-full max-w-[960px] flex-col px-4 md:px-0">
            <Navbar />
            <main className="w-full">
              <Hero />
              <Features />
              <CustomizableAssistant />
              <HowItWorks />
              <Testimonials />
              <PricingStrip />
              <CTA />
            </main>
            <Footer />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;