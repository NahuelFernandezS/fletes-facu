import React from 'react';
import { Truck, Bike, PackageCheck, ShieldCheck, ArrowRight, MessageCircle, Clock, MapPin, Sparkles } from 'lucide-react';
import { SITE_INFO } from '../data/content';

export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden">
      {/* Background Lights and Blobs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-teal-500/10 rounded-full blur-[140px] pointer-events-none -z-10" />
      <div className="absolute top-10 right-10 w-96 h-96 bg-sky-600/15 rounded-full blur-[120px] pointer-events-none -z-10" />
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-emerald-500/10 rounded-full blur-[100px] pointer-events-none -z-10" />

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Headline & CTAs */}
          <div className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left">
            
            {/* Pill Status */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-panel border-emerald-500/30 text-emerald-400 text-xs sm:text-sm font-semibold mb-6 shadow-sm shadow-emerald-500/10 hover:border-emerald-400/50 transition-colors">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
              </span>
              <span>Servicio Activo en CABA, GBA e Interior</span>
              <Sparkles className="w-3.5 h-3.5 text-teal-300" />
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.12]">
              Fletes en <span className="text-gradient">Camioneta</span>, <br className="hidden sm:inline" />
              Motos y <span className="text-gradient-teal">Mensajería Express</span>
            </h1>

            {/* Paragraph */}
            <p className="mt-6 text-base sm:text-lg text-slate-300 max-w-2xl font-normal leading-relaxed">
              Traslados rápidos, seguros y puntuales. Desde un paquete urgente en moto hasta mudanzas completas en furgón cerrado. Cuidamos tu carga como si fuera nuestra.
            </p>

            {/* Quick Action Badges */}
            <div className="mt-6 grid grid-cols-3 gap-3 w-full max-w-lg">
              <div className="p-3 rounded-xl bg-slate-900/60 border border-slate-800 text-center">
                <Bike className="w-5 h-5 mx-auto text-sky-400 mb-1" />
                <span className="text-xs font-semibold text-slate-200 block">Motos</span>
                <span className="text-[10px] text-slate-400 block">Envíos en el acto</span>
              </div>
              <div className="p-3 rounded-xl bg-slate-900/60 border border-slate-800 text-center">
                <Truck className="w-5 h-5 mx-auto text-emerald-400 mb-1" />
                <span className="text-xs font-semibold text-slate-200 block">Camionetas</span>
                <span className="text-[10px] text-slate-400 block">Con o sin peones</span>
              </div>
              <div className="p-3 rounded-xl bg-slate-900/60 border border-slate-800 text-center">
                <PackageCheck className="w-5 h-5 mx-auto text-teal-400 mb-1" />
                <span className="text-xs font-semibold text-slate-200 block">Cadetería</span>
                <span className="text-[10px] text-slate-400 block">Trámites y firmas</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="mt-8 flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
              <a
                href="#cotizador"
                className="w-full sm:w-auto flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl font-bold text-slate-950 bg-gradient-to-r from-teal-400 via-emerald-400 to-emerald-300 hover:from-teal-300 hover:to-emerald-200 transition-all duration-300 shadow-lg shadow-emerald-500/25 hover:shadow-emerald-500/40 hover:-translate-y-0.5 active:translate-y-0"
              >
                <span>Calcular Cotización Online</span>
                <ArrowRight className="w-5 h-5" />
              </a>

              <a
                href={`https://wa.me/${SITE_INFO.whatsappNumber}?text=${encodeURIComponent(SITE_INFO.whatsappWelcome)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto flex items-center justify-center gap-2.5 px-6 py-4 rounded-xl font-semibold text-slate-200 bg-slate-800/80 hover:bg-slate-700/80 border border-slate-700/80 hover:border-teal-500/40 transition-all duration-300 hover:-translate-y-0.5"
              >
                <MessageCircle className="w-5 h-5 text-emerald-400 fill-emerald-400/20" />
                <span>Hablar por WhatsApp</span>
              </a>
            </div>

            {/* Trust Points */}
            <div className="mt-8 flex flex-wrap items-center justify-center lg:justify-start gap-5 text-xs text-slate-400">
              <div className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>Choferes de confianza</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Clock className="w-4 h-4 text-teal-400" />
                <span>Puntualidad garantizada</span>
              </div>
              <div className="flex items-center gap-1.5">
                <MapPin className="w-4 h-4 text-sky-400" />
                <span>Seguimiento en directo</span>
              </div>
            </div>

          </div>

          {/* Right Column: Visual Card Showcase */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Card Container */}
              <div className="glass-panel rounded-2xl p-6 sm:p-7 relative overflow-hidden border-sky-500/20 shadow-2xl shadow-black/60">
                
                {/* Glow accent */}
                <div className="absolute -top-24 -right-24 w-48 h-48 bg-emerald-500/20 rounded-full blur-3xl" />
                <div className="absolute -bottom-24 -left-24 w-48 h-48 bg-sky-500/20 rounded-full blur-3xl" />

                {/* Header of Card */}
                <div className="flex items-center justify-between pb-4 border-b border-slate-800/80">
                  <div className="flex items-center gap-2.5">
                    <div className="w-3 h-3 rounded-full bg-emerald-400 animate-pulse" />
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-300">
                      Disponibilidad en tiempo real
                    </span>
                  </div>
                  <span className="text-xs px-2.5 py-1 rounded-md bg-emerald-500/10 text-emerald-300 font-medium border border-emerald-500/20">
                    24/7 Urgencias
                  </span>
                </div>

                {/* Live simulation card details */}
                <div className="mt-5 space-y-3.5">
                  {/* Item 1 */}
                  <div className="p-3.5 rounded-xl bg-slate-900/80 border border-slate-800/90 flex items-center justify-between hover:border-slate-700 transition-colors">
                    <div className="flex items-center gap-3">
                      <div className="p-2.5 rounded-lg bg-sky-500/15 text-sky-400 border border-sky-500/20">
                        <Bike className="w-5 h-5" />
                      </div>
                      <div>
                        <h4 className="text-sm font-semibold text-white">Moto Express</h4>
                        <p className="text-xs text-slate-400">Cadetería & Envíos rápidos</p>
                      </div>
                    </div>
                    <span className="text-xs font-bold text-teal-300 bg-teal-950/60 px-2.5 py-1 rounded-md border border-teal-800/40">
                      Salida Inmediata
                    </span>
                  </div>

                  {/* Item 2 */}
                  <div className="p-3.5 rounded-xl bg-slate-900/80 border border-emerald-500/30 flex items-center justify-between shadow-sm shadow-emerald-500/10">
                    <div className="flex items-center gap-3">
                      <div className="p-2.5 rounded-lg bg-emerald-500/15 text-emerald-400 border border-emerald-500/20">
                        <Truck className="w-5 h-5" />
                      </div>
                      <div>
                        <h4 className="text-sm font-semibold text-white">Camioneta Cerrada</h4>
                        <p className="text-xs text-slate-400">Fletes y Mudanzas cuidadas</p>
                      </div>
                    </div>
                    <span className="text-xs font-bold text-emerald-300 bg-emerald-950/60 px-2.5 py-1 rounded-md border border-emerald-800/40">
                      Con Peón Opcional
                    </span>
                  </div>

                  {/* Item 3 */}
                  <div className="p-3.5 rounded-xl bg-slate-900/80 border border-slate-800/90 flex items-center justify-between hover:border-slate-700 transition-colors">
                    <div className="flex items-center gap-3">
                      <div className="p-2.5 rounded-lg bg-teal-500/15 text-teal-400 border border-teal-500/20">
                        <PackageCheck className="w-5 h-5" />
                      </div>
                      <div>
                        <h4 className="text-sm font-semibold text-white">Mensajería Corporativa</h4>
                        <p className="text-xs text-slate-400">Rutas fijas & E-commerce</p>
                      </div>
                    </div>
                    <span className="text-xs font-bold text-sky-300 bg-sky-950/60 px-2.5 py-1 rounded-md border border-sky-800/40">
                      Facturación A/B
                    </span>
                  </div>
                </div>

                {/* Direct quick action inside card */}
                <div className="mt-5 pt-4 border-t border-slate-800/80">
                  <div className="bg-gradient-to-r from-slate-900 via-[#0B1528] to-slate-900 p-3.5 rounded-xl border border-sky-500/20 flex items-center justify-between">
                    <div>
                      <p className="text-[11px] text-slate-400 uppercase tracking-wider font-semibold">
                        ¿Necesitás precio ya?
                      </p>
                      <p className="text-xs text-slate-200 font-medium mt-0.5">
                        Te presupuestamos en menos de 5 min
                      </p>
                    </div>
                    <a
                      href="#cotizador"
                      className="px-3.5 py-2 rounded-lg bg-emerald-500/20 hover:bg-emerald-500/30 text-emerald-300 text-xs font-bold border border-emerald-500/30 transition-colors flex items-center gap-1.5"
                    >
                      <span>Cotizar</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>

              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
