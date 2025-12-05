import React from 'react';
import CardSwap, { Card } from './CardSwap';

const CustomizableAssistant: React.FC = () => {
  return (
    <div className="py-24 px-4 flex flex-col lg:flex-row items-center justify-between gap-16 max-w-[960px] mx-auto overflow-visible mb-20">
      <div className="flex-1 flex flex-col gap-6 text-left relative z-20">
        <h2 className="text-white text-4xl md:text-5xl font-black leading-tight tracking-[-0.033em]">
          <span className="text-primary block mb-2">ASISTENTE</span>
          personalizable,<br />
          profesional y<br />
          actualizado.
        </h2>
        <p className="text-white/60 text-lg max-w-md leading-relaxed">
          Configura tu asistente para que se adapte perfectamente a la cultura y necesidades de tu empresa. Desde el tono de voz hasta los protocolos específicos, CeLIA aprende y evoluciona contigo.
        </p>
        <div className="flex gap-3 mt-4">
          <button className="flex min-w-[140px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-6 bg-white/10 backdrop-blur-sm text-white text-sm font-bold leading-normal tracking-[0.015em] border border-white/20 hover:bg-white/20 transition-colors">
            <span className="truncate">Ver todas las funciones</span>
          </button>
        </div>
      </div>
      
      <div className="flex-1 flex justify-center items-center w-full min-h-[500px] relative z-10">
        <CardSwap width={320} height={450} cardDistance={40} verticalDistance={50} skewAmount={4}>
          <Card>
            <img src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1740&auto=format&fit=crop" alt="Mobile Chat Interface" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-6">
                <p className="text-white font-bold">Interfaz de Chat Móvil</p>
            </div>
          </Card>
          <Card>
             <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1740&auto=format&fit=crop" alt="Profile Configuration" className="w-full h-full object-cover" />
             <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-6">
                <p className="text-white font-bold">Configuración de Perfil</p>
            </div>
          </Card>
          <Card>
             <img src="https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=1740&auto=format&fit=crop" alt="Indicators and Metrics" className="w-full h-full object-cover" />
             <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-6">
                <p className="text-white font-bold">Indicadores y Métricas</p>
            </div>
          </Card>
          <Card>
             <img src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=1740&auto=format&fit=crop" alt="Sensitive Cases" className="w-full h-full object-cover" />
             <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-6">
                <p className="text-white font-bold">Gestión de Casos</p>
            </div>
          </Card>
        </CardSwap>
      </div>
    </div>
  );
};

export default CustomizableAssistant;