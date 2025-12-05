import React from 'react';
import { GlassIcon, GlassIconColor } from './GlassIcons';

const HowItWorks: React.FC = () => {
  const steps: {
    icon: string;
    title: string;
    description: string;
    color: GlassIconColor;
  }[] = [
    {
      icon: "integration_instructions",
      title: "1. Integra",
      description: "Conecta nuestro asistente de IA con tus sistemas de RRHH existentes en solo unos clics.",
      color: "blue"
    },
    {
      icon: "settings",
      title: "2. Automatiza",
      description: "Deja que la IA maneje las tareas repetitivas, desde la documentación hasta las verificaciones de cumplimiento.",
      color: "indigo" // Using indigo for variety
    },
    {
      icon: "trending_up",
      title: "3. Optimiza",
      description: "Obtén información valiosa y libera a tu equipo para centrarse en iniciativas estratégicas de alto impacto.",
      color: "purple"
    },
  ];

  return (
    <div className="px-4 py-16 bg-gradient-to-b from-transparent to-surface-dark/30 rounded-3xl my-10">
      <h2 className="text-white text-[28px] font-bold leading-tight tracking-[-0.015em] pb-12 text-center">
        Cómo Funciona
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center max-w-6xl mx-auto">
        {steps.map((step, index) => (
          <div key={index} className="flex flex-col items-center gap-6 group">
            <div className="p-2">
              <GlassIcon 
                icon={step.icon} 
                color={step.color} 
              />
            </div>
            <div className="flex flex-col gap-2">
              <h3 className="text-xl font-bold text-white">{step.title}</h3>
              <p className="text-base text-white/60 px-4">{step.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HowItWorks;