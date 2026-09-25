import React from 'react';
import { MessageCircle, Phone, Clock, MapPin, Sparkles, ArrowRight } from 'lucide-react';
import { SITE_INFO } from '../data/content';

export default function ContactCTA() {
  return (
    <section className="py-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="glass-panel rounded-3xl p-8 sm:p-12 lg:p-16 border-emerald-500/30 relative overflow-hidden bg-gradient-to-r from-[#0B1528] via-[#0F1E38] to-[#0A1A2E] shadow-2xl">
          
          {/* Background Glows */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500/15 rounded-full blur-[100px] pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-sky-500/15 rounded-full blur-[100px] pointer-events-none" />

          <div className="relative z-10 max-w-3xl mx-auto text-center">
            
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-xs font-semibold mb-6">
              <Sparkles className="w-3.5 h-3.5" />
              Atención Personalizada por su Dueño
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
              ¿Listo para trasladar tu carga <br className="hidden sm:inline" />
              <span className="text-gradient">sin estrés ni demoras?</span>
            </h2>

            <p className="mt-5 text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
              Escribinos ahora mismo y coordinamos el horario que más te convenga. Respondemos al instante con la mejor tarifa garantizada.
            </p>

            {/* CTAs */}
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href={`https://wa.me/${SITE_INFO.whatsappNumber}?text=${encodeURIComponent(SITE_INFO.whatsappWelcome)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl font-bold text-base text-slate-950 bg-gradient-to-r from-teal-400 via-emerald-400 to-emerald-300 hover:from-teal-300 hover:to-emerald-200 transition-all duration-300 shadow-xl shadow-emerald-500/30 hover:scale-105"
              >
                <MessageCircle className="w-5 h-5 fill-slate-950" />
                <span>Escribir por WhatsApp</span>
              </a>

              <a
                href={`tel:${SITE_INFO.phone.replace(/[^0-9+]/g, '')}`}
                className="w-full sm:w-auto flex items-center justify-center gap-2.5 px-7 py-4 rounded-xl font-semibold text-slate-200 bg-slate-800/80 hover:bg-slate-700/80 border border-slate-700 hover:border-teal-500/40 transition-colors"
              >
                <Phone className="w-5 h-5 text-teal-400" />
                <span>Llamar al {SITE_INFO.phone}</span>
              </a>
            </div>

            {/* Details Footer */}
            <div className="mt-10 pt-8 border-t border-slate-800/80 grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs text-slate-400">
              <div className="flex items-center justify-center gap-2">
                <Clock className="w-4 h-4 text-emerald-400" />
                <span>{SITE_INFO.hours}</span>
              </div>
              <div className="flex items-center justify-center gap-2">
                <MapPin className="w-4 h-4 text-sky-400" />
                <span>{SITE_INFO.location}</span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
