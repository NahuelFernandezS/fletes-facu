import React from 'react';
import { Bike, Truck, Boxes, CheckCircle2, ArrowUpRight, Zap, Shield, Sparkles } from 'lucide-react';
import { SERVICES, SITE_INFO } from '../data/content';

const iconMap = {
  Bike: Bike,
  Truck: Truck,
  Boxes: Boxes,
};

export default function Services({ onSelectService }) {
  return (
    <section id="servicios" className="py-20 lg:py-28 relative">
      {/* Subtle Glows */}
      <div className="absolute top-1/2 left-0 w-72 h-72 bg-sky-600/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-72 h-72 bg-emerald-500/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-800/80 border border-slate-700 text-teal-400 text-xs font-semibold uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            Nuestros Servicios
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Soluciones a tu medida: <br />
            <span className="text-gradient">de un sobre a una mudanza</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300">
            Contamos con vehículos adaptados a cada necesidad para que nunca pagues de más por espacio que no utilizás.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {SERVICES.map((service) => {
            const Icon = iconMap[service.icon] || Truck;
            return (
              <div
                key={service.id}
                className={`relative group rounded-2xl glass-panel p-6 sm:p-8 flex flex-col justify-between transition-all duration-300 card-hover-border ${
                  service.popular
                    ? 'border-emerald-500/40 shadow-xl shadow-emerald-500/10'
                    : 'border-slate-800 hover:border-slate-700'
                }`}
              >
                {/* Popular Badge */}
                {service.popular && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-gradient-to-r from-teal-400 to-emerald-400 text-slate-950 text-xs font-extrabold shadow-md tracking-wider uppercase">
                    ⭐ Servicio Más Pedido
                  </div>
                )}

                <div>
                  {/* Icon & Badge Header */}
                  <div className="flex items-start justify-between gap-4 mb-5">
                    <div className={`p-3.5 rounded-xl bg-gradient-to-br ${service.color} text-slate-950 shadow-md group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className="w-7 h-7" />
                    </div>
                    <span className="text-xs font-semibold px-3 py-1 rounded-full bg-slate-800 text-teal-300 border border-slate-700">
                      {service.badge}
                    </span>
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-xl font-bold text-white group-hover:text-emerald-300 transition-colors">
                    {service.title}
                  </h3>
                  <p className="mt-2 text-sm text-slate-300 leading-relaxed">
                    {service.tagline}
                  </p>

                  {/* Specifications Pill */}
                  <div className="mt-5 p-3 rounded-xl bg-slate-900/90 border border-slate-800/80 space-y-1.5 text-xs">
                    <div className="flex items-center justify-between text-slate-400">
                      <span>Vehículo:</span>
                      <strong className="text-slate-200">{service.vehicle}</strong>
                    </div>
                    <div className="flex items-center justify-between text-slate-400">
                      <span>Capacidad:</span>
                      <strong className="text-emerald-400 font-medium">{service.capacity}</strong>
                    </div>
                    <div className="flex items-center justify-between text-slate-400">
                      <span>Tiempo estimado:</span>
                      <strong className="text-teal-300 font-medium">{service.deliveryTime}</strong>
                    </div>
                  </div>

                  {/* Feature Checklist */}
                  <div className="mt-6 space-y-2.5">
                    <p className="text-xs font-bold uppercase tracking-wider text-slate-400">
                      ¿Qué incluye?
                    </p>
                    {service.features.map((feat, idx) => (
                      <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-300">
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Footer Action */}
                <div className="mt-8 pt-5 border-t border-slate-800">
                  <div className="flex items-center justify-between gap-3">
                    <div className="text-[11px] text-slate-400">
                      <span className="block text-slate-500">Modalidad</span>
                      <span className="font-semibold text-slate-300">{service.priceNote}</span>
                    </div>

                    <a
                      href="#cotizador"
                      onClick={() => onSelectService && onSelectService(service.id)}
                      className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-teal-500/15 hover:bg-emerald-400 hover:text-slate-950 text-emerald-300 text-xs font-bold border border-emerald-500/30 hover:border-emerald-400 transition-all duration-200"
                    >
                      <span>Cotizar este</span>
                      <ArrowUpRight className="w-4 h-4" />
                    </a>
                  </div>
                </div>

              </div>
            );
          })}
        </div>

        {/* Bottom Banner */}
        <div className="mt-12 glass-panel rounded-2xl p-6 sm:p-8 border-sky-500/20 bg-gradient-to-r from-slate-900/90 via-slate-900/60 to-slate-900/90 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4 text-center sm:text-left">
            <div className="p-3 rounded-xl bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 shrink-0 hidden sm:block">
              <Shield className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-base sm:text-lg font-bold text-white">
                ¿Tenés una necesidad especial o reparto recurrente?
              </h4>
              <p className="text-xs sm:text-sm text-slate-400 mt-0.5">
                Armamos presupuestos a medida para locales, fábricas, oficinas y eventos.
              </p>
            </div>
          </div>
          <a
            href={`https://wa.me/${SITE_INFO.whatsappNumber}?text=${encodeURIComponent("Hola Facu! Necesito consultar por un servicio corporativo o reparto especial recurrente.")}`}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-emerald-300 border border-emerald-500/40 text-xs sm:text-sm font-bold whitespace-nowrap transition-colors"
          >
            Consultar por WhatsApp
          </a>
        </div>

      </div>
    </section>
  );
}
