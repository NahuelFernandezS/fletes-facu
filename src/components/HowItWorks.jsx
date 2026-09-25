import React from 'react';
import { Calculator, CalendarCheck, ShieldCheck, CheckCircle2, ArrowRight } from 'lucide-react';
import { STEPS } from '../data/content';

const iconMap = {
  Calculator,
  CalendarCheck,
  ShieldCheck,
  CheckCircle2,
};

export default function HowItWorks() {
  return (
    <section id="proceso" className="py-20 lg:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-800/80 border border-slate-700 text-sky-400 text-xs font-semibold uppercase tracking-wider mb-4">
            Paso a Paso
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            ¿Cómo trabajamos? <br />
            <span className="text-gradient">Fácil, rápido y sin complicaciones</span>
          </h2>
          <p className="mt-4 text-base text-slate-300">
            Desde que nos contactás hasta que tu paquete o mudanza llega a destino, todo el proceso es transparente y coordinado.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {STEPS.map((item, index) => {
            const Icon = iconMap[item.icon] || CheckCircle2;
            return (
              <div
                key={item.step}
                className="glass-panel rounded-2xl p-6 relative flex flex-col justify-between card-hover-border border-slate-800/90 group"
              >
                {/* Step Number with Gradient */}
                <div className="flex items-center justify-between mb-5">
                  <span className="text-3xl font-extrabold text-slate-700 group-hover:text-emerald-400/80 transition-colors font-mono">
                    {item.step}
                  </span>
                  <div className="p-3 rounded-xl bg-slate-800/80 group-hover:bg-emerald-500/20 text-emerald-400 border border-slate-700/60 group-hover:border-emerald-500/30 transition-all duration-300">
                    <Icon className="w-5 h-5" />
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-white mb-2 group-hover:text-teal-300 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                {/* Progress bar accent */}
                <div className="mt-6 pt-4 border-t border-slate-800/80 flex items-center justify-between text-[11px] text-slate-400 font-medium">
                  <span>Paso {index + 1} de 4</span>
                  {index < 3 ? (
                    <ArrowRight className="w-4 h-4 text-slate-600 group-hover:text-emerald-400 group-hover:translate-x-1 transition-all" />
                  ) : (
                    <span className="text-emerald-400 font-bold">¡Listo! 🎉</span>
                  )}
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
