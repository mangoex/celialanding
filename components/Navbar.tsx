import React, { useState } from 'react';
import LightRays from './LightRays';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    setIsMenuOpen(false);
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="relative flex items-center justify-between whitespace-nowrap border-b border-solid border-white/10 px-4 md:px-10 py-3 mb-5 overflow-hidden">
      {/* Light Rays Effect Background */}
      <div className="absolute inset-0 -z-10">
        <LightRays
          raysColor="rgba(19, 55, 236, 0.4)"
          raysSpeed={0.5}
          lightSpread={0.6}
          rayLength={0.8}
          raysOrigin="top-center"
        />
      </div>

      <div className="flex items-center gap-3 text-white relative z-10">
        {/* New CeliA Logo */}
        <div className="size-10 shrink-0">
          <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full drop-shadow-lg">
             {/* Background shape - Purple Rounded Square/Circle */}
            <rect x="4" y="4" width="40" height="40" rx="12" fill="#7C3AED" />
             {/* Stylized 'C' / Logo mark */}
            <path d="M24 13C17.9249 13 13 17.9249 13 24C13 30.0751 17.9249 35 24 35C28.9249 35 33.085 31.7601 34.5 27.3" stroke="white" strokeWidth="4" strokeLinecap="round"/>
             {/* Accent dot */}
            <circle cx="34" cy="16" r="3" fill="#ffffff"/>
          </svg>
        </div>
        <h2 className="text-white text-lg font-bold leading-tight tracking-[-0.015em]">
          CeliA Asistente Inteligente RRHH
        </h2>
      </div>

      {/* Mobile Menu Button */}
      <button 
        className="md:hidden text-white relative z-10"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        <span className="material-symbols-outlined">menu</span>
      </button>

      {/* Desktop Navigation */}
      <div className="hidden md:flex flex-1 justify-end gap-8 items-center relative z-10">
        <div className="flex items-center gap-9">
          <a 
            className="text-white text-sm font-medium leading-normal hover:text-primary transition-colors" 
            href="#features"
            onClick={(e) => handleNavClick(e, 'features')}
          >
            Características
          </a>
          <a 
            className="text-white text-sm font-medium leading-normal hover:text-primary transition-colors" 
            href="#pricing"
            onClick={(e) => handleNavClick(e, 'pricing')}
          >
            Suscribirme
          </a>
          <a 
            className="text-white text-sm font-medium leading-normal hover:text-primary transition-colors" 
            href="#testimonials"
            onClick={(e) => handleNavClick(e, 'testimonials')}
          >
            Testimonios
          </a>
        </div>
        <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-primary text-white text-sm font-bold leading-normal tracking-[0.015em] hover:bg-primary-hover transition-colors">
          <span className="truncate">Solicitar Demo</span>
        </button>
      </div>

      {/* Mobile Navigation Dropdown */}
      {isMenuOpen && (
        <div className="absolute top-full left-0 right-0 z-50 bg-background-dark border-b border-white/10 p-4 flex flex-col gap-4 md:hidden shadow-xl">
          <a 
            className="text-white text-sm font-medium hover:text-primary" 
            href="#features"
            onClick={(e) => handleNavClick(e, 'features')}
          >
            Características
          </a>
          <a 
            className="text-white text-sm font-medium hover:text-primary" 
            href="#pricing"
            onClick={(e) => handleNavClick(e, 'pricing')}
          >
            Suscribirme
          </a>
          <a 
            className="text-white text-sm font-medium hover:text-primary" 
            href="#testimonials"
            onClick={(e) => handleNavClick(e, 'testimonials')}
          >
            Testimonios
          </a>
          <button className="w-full h-10 bg-primary text-white rounded-lg font-bold text-sm">
            Solicitar Demo
          </button>
        </div>
      )}
    </header>
  );
};

export default Navbar;