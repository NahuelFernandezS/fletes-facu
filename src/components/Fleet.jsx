import React from 'react';
import { Bike, Truck, ShieldCheck, Box, Weight, Gauge, ArrowRight } from 'lucide-react';
import { FLEET } from '../data/content';

export default function Fleet({ onSelectVehicle }) {
  return (
    <section id="flota" className="py-20 lg:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-800/80 border border-slate-700 text-emerald-400 text-xs font-semibold uppercase tracking-wider mb-4">
            Nuestra Flota
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Vehículos equipados <br />
            <span className="text-gradient">para cuidar tu mercadería</span>
          </h2>
          <p className="mt-4 text-base text-slate-300">
            Unidades en óptimo estado mecánico, con verificación técnica al día, mantas protectoras, sogas de amarre y furgones estancos.
          </p>
        </div>

        {/* Fleet Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {FLEET.map((item, idx) => (
            <div
              key={idx}
              className="glass-panel rounded-2xl p-6 sm:p-7 flex flex-col justify-between card-hover-border border-slate-800 group"
            >
              <div>
                {/* Vehicle Header Badge */}
                <div className="flex items-center justify-between gap-3 mb-4">
                  <span className="text-[11px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-md bg-sky-500/10 text-sky-300 border border-sky-500/20">
                    {item.category}
                  </span>
                  <div className="p-2 rounded-lg bg-slate-800 text-slate-300 group-hover:text-emerald-400 transition-colors">
                    {idx === 0 ? <Bike className="w-5 h-5" /> : <Truck className="w-5 h-5" />}
                  </div>
                </div>

                <h3 className="text-xl font-bold text-white group-hover:text-emerald-300 transition-colors">
                  {item.name}
                </h3>

                <p className="mt-2 text-xs sm:text-sm text-slate-300">
                  <strong className="text-slate-200">Recomendado para:</strong> {item.idealFor}
                </p>

                {/* Specs */}
                <div className="mt-6 space-y-3 p-4 rounded-xl bg-slate-900/90 border border-slate-800/80 text-xs">
                  <div className="flex items-center gap-2.5 text-slate-300">
                    <Weight className="w-4 h-4 text-teal-400 shrink-0" />
                    <span>Carga máx: <strong className="text-white">{item.maxWeight}</strong></span>
                  </div>
                  <div className="flex items-center gap-2.5 text-slate-300">
                    <Box className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>Dimensiones: <strong className="text-white">{item.dimensions}</strong></span>
                  </div>
                  <div className="flex items-center gap-2.5 text-slate-300">
                    <Gauge className="w-4 h-4 text-sky-400 shrink-0" />
                    <span>Prestación: <strong className="text-white">{item.speed}</strong></span>
                  </div>
                </div>
              </div>

              {/* Bottom CTA */}
              <div className="mt-6 pt-4 border-t border-slate-800">
                <a
                  href="#cotizador"
                  onClick={() => onSelectVehicle && onSelectVehicle(idx === 0 ? 'moto' : 'camioneta')}
                  className="w-full py-2.5 rounded-xl bg-slate-800/90 hover:bg-emerald-500/20 hover:text-emerald-300 text-slate-200 text-xs font-bold border border-slate-700/80 hover:border-emerald-500/30 transition-all flex items-center justify-center gap-2"
                >
                  <span>Elegir este vehículo</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
