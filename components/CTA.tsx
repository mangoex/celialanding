import React from 'react';

const CTA: React.FC = () => {
  return (
    <div className="relative overflow-hidden rounded-2xl mx-4 my-12 md:my-16">
      <div className="absolute inset-0 bg-primary/20 backdrop-blur-3xl z-0"></div>
      <div className="relative z-10 bg-gradient-to-br from-primary/20 to-transparent border border-primary/20 rounded-2xl px-6 py-16 flex flex-col items-center text-center">
        <h2 className="text-3xl md:text-5xl font-bold text-white max-w-3xl leading-tight">
          ¿Listo para Revolucionar tu Departamento de RRHH?
        </h2>
        <p className="text-white/80 mt-6 mb-10 max-w-2xl text-lg">
          Ve nuestro Asistente de RRHH con IA en acción. Solicita una demostración personalizada hoy y descubre cómo puedes ahorrar tiempo, reducir costos y empoderar a tu equipo.
        </p>
        <button className="flex min-w-[200px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-14 px-8 bg-primary text-white text-lg font-bold leading-normal tracking-[0.015em] hover:bg-primary-hover hover:scale-105 transition-all shadow-xl shadow-primary/20">
          <span className="truncate">Solicitar Demo Gratuita</span>
        </button>
      </div>
    </div>
  );
};

export default CTA;