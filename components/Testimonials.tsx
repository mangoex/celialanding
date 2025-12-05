import React from 'react';
import ScrambledText from './ScrambledText';

const Testimonials: React.FC = () => {
  return (
    <div id="testimonials" className="px-4 py-12 md:py-20 scroll-mt-20">
      <h2 className="text-white text-center text-[28px] font-bold leading-tight tracking-[-0.015em] pb-10">
        Amado por Líderes de RRHH
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="flex flex-col gap-6 rounded-xl border border-border-dark bg-surface-dark p-8 hover:bg-white/10 transition-colors group">
          <div className="text-primary text-4xl">"</div>
          {/* We remove the p tag and use ScrambledText directly, keeping the classes */}
          <ScrambledText className="text-white/80 text-lg italic -mt-4 cursor-default">
            Este asistente de IA ha cambiado las reglas del juego para nuestro equipo. Hemos reducido el trabajo administrativo en un 40% y podemos centrarnos más en el compromiso y desarrollo de los empleados.
          </ScrambledText>
          <div className="flex items-center gap-4 mt-auto">
            <img
              className="size-12 rounded-full object-cover border-2 border-primary/50"
              alt="Foto de Jane Doe"
              src="https://picsum.photos/100/100?random=1"
            />
            <div>
              <p className="font-bold text-white">María González</p>
              <p className="text-sm text-white/60">Directora de RRHH, Innovate Corp</p>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-6 rounded-xl border border-border-dark bg-surface-dark p-8 hover:bg-white/10 transition-colors group">
          <div className="text-primary text-4xl">"</div>
          <ScrambledText className="text-white/80 text-lg italic -mt-4 cursor-default">
            La función de cumplimiento vale su peso en oro. Estamos más seguros que nunca de nuestra situación legal, gracias a las alertas proactivas y los informes automatizados.
          </ScrambledText>
          <div className="flex items-center gap-4 mt-auto">
            <img
              className="size-12 rounded-full object-cover border-2 border-primary/50"
              alt="Foto de John Smith"
              src="https://picsum.photos/100/100?random=2"
            />
            <div>
              <p className="font-bold text-white">Carlos Ruiz</p>
              <p className="text-sm text-white/60">Jefe de Personas, Tech Solutions</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;