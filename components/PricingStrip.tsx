import React from 'react';

const PricingStrip: React.FC = () => {
  return (
    <div id="pricing" className="w-full my-12 scroll-mt-20">
      <div className="relative overflow-hidden rounded-2xl bg-[#131625] border border-white/10 p-0 shadow-2xl group hover:border-white/20 transition-colors duration-500">
        {/* Background Gradients */}
        <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-primary/20 blur-[100px] rounded-full -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-purple-600/20 blur-[100px] rounded-full translate-y-1/2 -translate-x-1/2 pointer-events-none"></div>
        
        <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8 p-8 md:px-12 md:py-10">
            {/* Price Section */}
            <div className="flex flex-col items-center md:items-start text-center md:text-left gap-1 shrink-0">
                 <p className="text-purple-400 font-bold text-xs tracking-widest uppercase">Suscripción Mensual</p>
                 <div className="flex items-end gap-2 leading-none">
                    <span className="text-5xl font-black text-white tracking-tight">$22</span>
                    <div className="flex flex-col items-start pb-1">
                        <span className="text-lg font-bold text-white/90">USD</span>
                        <span className="text-xs text-white/50 font-medium">/ mes</span>
                    </div>
                 </div>
            </div>

            {/* Divider (Hidden on mobile) */}
            <div className="hidden md:block w-px h-16 bg-gradient-to-b from-transparent via-white/10 to-transparent"></div>

            {/* Guarantee Section */}
            <div className="flex flex-col items-center md:items-start text-center md:text-left gap-3 max-w-md">
                <div className="flex items-center gap-2 text-green-400 bg-green-400/10 px-3 py-1 rounded-full border border-green-400/20">
                    <span className="material-symbols-outlined text-lg">verified_user</span>
                    <span className="text-xs font-bold uppercase tracking-wide">7 Días de Garantía</span>
                </div>
                <p className="text-white/70 text-sm leading-relaxed">
                    Prueba CeliA sin riesgos. Si no transforma tu gestión de RRHH en la primera semana, te devolvemos el 100% de tu dinero.
                </p>
            </div>

            {/* CTA Button */}
            <button className="shrink-0 group relative flex items-center gap-3 bg-white text-background-dark px-8 py-4 rounded-xl font-bold text-base hover:scale-[1.02] active:scale-[0.98] transition-all shadow-[0_0_20px_rgba(255,255,255,0.1)] hover:shadow-[0_0_30px_rgba(255,255,255,0.2)] hover:bg-gray-50 cursor-pointer">
                <span>Pagar Ahora</span>
                <span className="material-symbols-outlined transition-transform group-hover:translate-x-1">arrow_forward</span>
            </button>
        </div>
      </div>
    </div>
  );
};

export default PricingStrip;