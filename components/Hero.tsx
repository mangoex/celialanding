import React from 'react';
import RotatingText from './RotatingText';

const Hero: React.FC = () => {
  return (
    <div className="@container mb-12">
      <div className="@[480px]:p-4">
        <div
          className="relative flex min-h-[480px] flex-col gap-6 overflow-hidden bg-cover bg-center bg-no-repeat @[480px]:gap-8 @[480px]:rounded-xl items-start justify-end px-4 pb-10 @[480px]:px-10"
          style={{
            backgroundImage: `linear-gradient(rgba(16, 19, 34, 0.4) 0%, rgba(16, 19, 34, 0.9) 100%), url("https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=2070&auto=format&fit=crop")`,
          }}
        >
          <div className="relative z-10 flex flex-col gap-4 text-left max-w-4xl">
            <h1 className="text-white text-4xl font-black leading-tight tracking-[-0.033em] @[480px]:text-5xl @[480px]:font-black @[480px]:leading-tight @[480px]:tracking-[-0.033em]">
              El Futuro de los RRHH está Aquí. <br className="hidden md:block" />
              Potencia tu Equipo con un asistente para{' '}
              <span className="inline-flex align-top h-[1.2em] @[480px]:h-[1.1em]">
                <RotatingText
                  texts={['Selección', 'Análisis', 'Descripciones', 'Políticas', 'Normatividad', 'Indicadores']}
                  mainClassName="px-2 bg-primary text-white overflow-hidden py-0.5 sm:py-1 md:py-1 justify-center rounded-lg shadow-lg shadow-primary/40"
                  staggerFrom="last"
                  initial={{ y: "100%" }}
                  animate={{ y: 0 }}
                  exit={{ y: "-120%" }}
                  staggerDuration={0.025}
                  splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
                  transition={{ type: "spring", damping: 30, stiffness: 400 }}
                  rotationInterval={3000}
                />
              </span>
            </h1>
            <h2 className="text-white/90 text-sm font-normal leading-normal @[480px]:text-base @[480px]:font-normal @[480px]:leading-normal max-w-2xl mt-2">
              Automatiza tareas rutinarias, reduce riesgos legales y libera a tu equipo para trabajo estratégico con nuestro asistente virtual inteligente.
            </h2>
          </div>
          <div className="relative z-10 flex flex-wrap gap-3 pt-2">
            <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 @[480px]:h-12 @[480px]:px-6 bg-primary text-white text-sm font-bold leading-normal tracking-[0.015em] @[480px]:text-base hover:bg-primary-hover transition-colors shadow-lg shadow-primary/30">
              <span className="truncate">Solicitar Demo</span>
            </button>
            <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 @[480px]:h-12 @[480px]:px-6 bg-white/10 backdrop-blur-sm text-white text-sm font-bold leading-normal tracking-[0.015em] @[480px]:text-base border border-white/20 hover:bg-white/20 transition-colors">
              <span className="truncate">Registrarse</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;