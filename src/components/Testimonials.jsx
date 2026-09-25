import React from 'react';
import { Star, Quote, CheckCircle2, MessageSquare } from 'lucide-react';
import { TESTIMONIALS } from '../data/content';

export default function Testimonials() {
  return (
    <section id="opiniones" className="py-20 lg:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-800/80 border border-slate-700 text-teal-400 text-xs font-semibold uppercase tracking-wider mb-4">
            <Star className="w-3.5 h-3.5 fill-teal-400" />
            Experiencias Reales
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Lo que dicen <span className="text-gradient">quienes nos eligen</span>
          </h2>
          <p className="mt-4 text-base text-slate-300">
            La confianza y tranquilidad de nuestros clientes es nuestra mejor carta de presentación en cada viaje.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {TESTIMONIALS.map((t, idx) => (
            <div
              key={idx}
              className="glass-panel rounded-2xl p-6 sm:p-7 flex flex-col justify-between border-slate-800 card-hover-border relative"
            >
              <Quote className="w-8 h-8 text-teal-500/20 absolute top-5 right-5" />

              <div>
                {/* Stars */}
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-amber-400 fill-amber-400" />
                  ))}
                </div>

                {/* Comment */}
                <p className="text-sm text-slate-300 italic leading-relaxed">
                  "{t.comment}"
                </p>
              </div>

              {/* Author Info */}
              <div className="mt-6 pt-4 border-t border-slate-800/80 flex items-center justify-between">
                <div>
                  <h4 className="text-sm font-bold text-white flex items-center gap-1.5">
                    {t.name}
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                  </h4>
                  <span className="text-xs text-slate-400">{t.role}</span>
                </div>
                <span className="text-[11px] px-2 py-0.5 rounded bg-slate-800 text-teal-300 font-medium">
                  {t.service}
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
