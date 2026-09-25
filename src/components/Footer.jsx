import React from 'react';
import { Truck, MessageCircle, Phone, Mail, MapPin, Heart, ShieldCheck, CreditCard } from 'lucide-react';
import { SITE_INFO } from '../data/content';

export default function Footer() {
  return (
    <footer className="bg-[#050913] border-t border-slate-800/80 pt-16 pb-12 text-slate-400 text-xs sm:text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-slate-800/80">
          
          {/* Brand Col */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-sky-500 to-emerald-400 p-[2px]">
                <div className="w-full h-full bg-[#080E1E] rounded-[10px] flex items-center justify-center">
                  <Truck className="w-4 h-4 text-emerald-400" />
                </div>
              </div>
              <span className="font-extrabold text-lg tracking-tight text-white">
                FLETES <span className="text-gradient">FACU</span>
              </span>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed">
              Servicio líder en fletes particulares y comerciales, motos express y cadetería ágil en Buenos Aires e Interior.
            </p>
            <div className="flex items-center gap-2 text-xs text-emerald-400 font-medium">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>Cargas y traslados asegurados</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-white uppercase text-xs tracking-wider mb-4">
              Navegación
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li>
                <a href="#servicios" className="hover:text-emerald-400 transition-colors">Servicios Disponibles</a>
              </li>
              <li>
                <a href="#cotizador" className="hover:text-emerald-400 transition-colors">Calculadora de Presupuesto</a>
              </li>
              <li>
                <a href="#flota" className="hover:text-emerald-400 transition-colors">Nuestra Flota</a>
              </li>
              <li>
                <a href="#proceso" className="hover:text-emerald-400 transition-colors">Cómo Trabajamos</a>
              </li>
              <li>
                <a href="#opiniones" className="hover:text-emerald-400 transition-colors">Testimonios de Clientes</a>
              </li>
              <li>
                <a href="#faq" className="hover:text-emerald-400 transition-colors">Preguntas Frecuentes</a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-bold text-white uppercase text-xs tracking-wider mb-4">
              Contacto Directo
            </h4>
            <ul className="space-y-3 text-xs">
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-emerald-400 shrink-0" />
                <span className="text-slate-300">{SITE_INFO.phone}</span>
              </li>
              <li className="flex items-center gap-2.5">
                <MessageCircle className="w-4 h-4 text-teal-400 shrink-0" />
                <a
                  href={`https://wa.me/${SITE_INFO.whatsappNumber}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-emerald-400 text-slate-300 transition-colors"
                >
                  WhatsApp: +54 9 11 3845-9201
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-sky-400 shrink-0" />
                <span className="text-slate-300">{SITE_INFO.email}</span>
              </li>
              <li className="flex items-center gap-2.5">
                <MapPin className="w-4 h-4 text-teal-400 shrink-0" />
                <span className="text-slate-300">{SITE_INFO.location}</span>
              </li>
            </ul>
          </div>

          {/* Payment Methods */}
          <div>
            <h4 className="font-bold text-white uppercase text-xs tracking-wider mb-4">
              Medios de Pago
            </h4>
            <div className="space-y-2 text-xs text-slate-300">
              <div className="p-2.5 rounded-lg bg-slate-900 border border-slate-800 flex items-center gap-2">
                <CreditCard className="w-4 h-4 text-emerald-400" />
                <span>Mercado Pago (Transferencia / QR)</span>
              </div>
              <div className="p-2.5 rounded-lg bg-slate-900 border border-slate-800 flex items-center gap-2">
                <span className="text-teal-400 font-bold">🏦</span>
                <span>Transferencias Bancarias</span>
              </div>
              <div className="p-2.5 rounded-lg bg-slate-900 border border-slate-800 flex items-center gap-2">
                <span className="text-sky-400 font-bold">💵</span>
                <span>Efectivo en mano</span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} Fletes Facu. Todos los derechos reservados.</p>
          <p className="flex items-center gap-1">
            Diseñado para brindar la mejor experiencia de logística y transporte.
          </p>
        </div>

      </div>
    </footer>
  );
}
