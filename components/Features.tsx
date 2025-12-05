import React from 'react';

const Features: React.FC = () => {
  const features = [
    {
      icon: "description",
      title: "Documentación Automatizada",
      description: "Genera contratos, políticas y reportes al instante con una precisión inigualable.",
    },
    {
      icon: "verified_user",
      title: "Cumplimiento Legal",
      description: "Mantente a la vanguardia de las regulaciones con alertas y verificaciones de cumplimiento impulsadas por IA.",
    },
    {
      icon: "person_search",
      title: "Reclutamiento Inteligente",
      description: "Busca, filtra y selecciona a los mejores candidatos más rápido con algoritmos inteligentes.",
    },
    {
      icon: "business_center",
      title: "Onboarding de Empleados",
      description: "Agiliza el proceso de incorporación con flujos de trabajo automatizados y listas de verificación personalizadas.",
    },
  ];

  return (
    <div id="features" className="flex flex-col gap-10 px-4 py-10 @container scroll-mt-20">
      <div className="flex flex-col gap-4">
        <h2 className="text-white text-[22px] font-bold leading-tight tracking-[-0.015em] pb-2">
          Características Principales
        </h2>
        <h1 className="text-white tracking-light text-[32px] font-bold leading-tight @[480px]:text-4xl @[480px]:font-black @[480px]:leading-tight @[480px]:tracking-[-0.033em] max-w-[720px]">
          Automatización de RRHH Todo en Uno
        </h1>
        <p className="text-white/80 text-base font-normal leading-normal max-w-[720px]">
          Nuestro asistente de IA está diseñado para manejar las complejidades de la gestión de RRHH, para que puedas concentrarte en lo que más importa: tu gente.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 p-0">
        {features.map((feature, index) => (
          <div
            key={index}
            className="flex flex-1 gap-4 rounded-xl border border-border-dark bg-surface-dark p-6 flex-col hover:border-primary/50 transition-colors duration-300 group"
          >
            <div className="text-primary group-hover:scale-110 transition-transform duration-300 origin-left">
              <span className="material-symbols-outlined text-4xl">{feature.icon}</span>
            </div>
            <div className="flex flex-col gap-2">
              <h3 className="text-white text-lg font-bold leading-tight">
                {feature.title}
              </h3>
              <p className="text-white/60 text-sm font-normal leading-normal">
                {feature.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Features;