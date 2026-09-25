import React from 'react';
import { MapPin, CheckCircle, Navigation, ShieldCheck } from 'lucide-react';
import { STATS } from '../data/content';

export default function CoverageStats() {
  const zones = [
    { title: 'CABA Completa', desc: 'Palermo, Belgrano, Caballito, Recoleta, Centro, Villa Urquiza, etc.' },
    { title: 'Zona Norte GBA', desc: 'Vicente López, San Isidro, San Fernando, Tigre, Pilar, Escobar.' },
    { title: 'Zona Oeste GBA', desc: 'Morón, Ramos Mejía, Castelar, Ituzaingó, San Justo, Moreno.' },
    { title: 'Zona Sur GBA', desc: 'Avellaneda, Lanús, Lomas de Zamora, Quilmes, Bernal, Banfield.' },
    { title: 'La Plata y Alrededores', desc: 'Ensenada, Berisso, City Bell y casco urbano.' },
    { title: 'Viajes al Interior', desc: 'Costa Atlántica (Mar del Plata, Pinamar), Rosario, Córdoba y más.' },
  ];

  return (
    <section className="py-16 lg:py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-16">
          {STATS.map((stat, i) => (
            <div
              key={i}
              className="glass-panel rounded-2xl p-5 sm:p-6 text-center border-slate-800/90 relative overflow-hidden"
            >
              <div className="text-3xl sm:text-4xl font-extrabold text-gradient-teal font-mono tracking-tight">
                {stat.value}
              </div>
              <div className="mt-2 text-sm font-bold text-white">
                {stat.label}
              </div>
              <div className="text-xs text-slate-400 mt-0.5">
                {stat.sublabel}
              </div>
            </div>
          ))}
        </div>

        {/* Coverage Box */}
        <div className="glass-panel rounded-3xl p-6 sm:p-10 border-teal-500/20 bg-gradient-to-b from-slate-900/90 via-slate-900/60 to-slate-900/90">
          <div className="max-w-3xl mb-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-500/10 border border-teal-500/20 text-teal-300 text-xs font-semibold uppercase tracking-wider mb-3">
              <Navigation className="w-3.5 h-3.5" />
              Zonas de Cobertura
            </div>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
              Llegamos a donde necesites, <span className="text-gradient">cuando lo necesites</span>
            </h3>
            <p className="mt-2 text-sm text-slate-300">
              Operamos con cobertura directa en toda la Capital Federal y el Gran Buenos Aires, con salidas especiales programadas hacia todo el país.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {zones.map((zone, idx) => (
              <div
                key={idx}
                className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 flex items-start gap-3 hover:border-slate-700 transition-colors"
              >
                <MapPin className="w-4 h-4 text-emerald-400 shrink-0 mt-1" />
                <div>
                  <h4 className="text-sm font-bold text-white">{zone.title}</h4>
                  <p className="text-xs text-slate-400 mt-0.5">{zone.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
