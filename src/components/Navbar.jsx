import React, { useState, useEffect } from 'react';
import { Truck, Menu, X, MessageCircle, Phone, Sparkles } from 'lucide-react';
import { SITE_INFO } from '../data/content';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Servicios', href: '#servicios' },
    { name: 'Cotizador', href: '#cotizador' },
    { name: 'Flota', href: '#flota' },
    { name: 'Cómo Trabajamos', href: '#proceso' },
    { name: 'Opiniones', href: '#opiniones' },
    { name: 'Preguntas', href: '#faq' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'glass-nav py-3 shadow-lg shadow-black/40'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-sky-500 via-teal-400 to-emerald-400 p-[2px] shadow-lg shadow-teal-500/20 group-hover:scale-105 transition-transform duration-300">
              <div className="w-full h-full bg-[#080E1E] rounded-[10px] flex items-center justify-center">
                <Truck className="w-5 h-5 text-emerald-400 group-hover:text-teal-300 transition-colors" />
              </div>
            </div>
            <div className="flex flex-col">
              <span className="font-extrabold text-lg sm:text-xl tracking-tight text-white flex items-center gap-1.5">
                FLETES <span className="text-gradient">FACU</span>
              </span>
              <span className="text-[10px] text-teal-400 font-medium tracking-wider uppercase -mt-1 flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                Motos • Fletes • Mensajería
              </span>
            </div>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1 bg-[#0F172A]/80 backdrop-blur-md px-5 py-1.5 rounded-full border border-sky-500/15 shadow-inner shadow-black/30">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="px-3.5 py-1.5 text-sm font-medium text-slate-300 hover:text-emerald-400 transition-colors rounded-full hover:bg-slate-800/60"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Desktop WhatsApp CTA */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href={`https://wa.me/${SITE_INFO.whatsappNumber}?text=${encodeURIComponent(SITE_INFO.whatsappWelcome)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="relative inline-flex items-center gap-2 px-5 py-2.5 rounded-full font-semibold text-sm text-[#070D1B] bg-gradient-to-r from-teal-400 via-emerald-400 to-emerald-300 hover:from-teal-300 hover:to-emerald-200 transition-all duration-300 shadow-md shadow-emerald-500/25 hover:shadow-emerald-500/40 hover:scale-[1.02] active:scale-[0.98]"
            >
              <MessageCircle className="w-4 h-4 fill-[#070D1B]" />
              <span>Cotizar al WhatsApp</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 rounded-xl bg-slate-800/80 border border-slate-700/60 text-slate-200 hover:text-emerald-400 transition-colors"
            aria-label="Abrir menú"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <div className="lg:hidden glass-panel border-b border-sky-500/20 px-6 py-5 mt-3 animate-fadeIn">
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-2 pb-2 mb-1 border-b border-slate-800 text-xs text-emerald-400">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
              <span>Disponibilidad inmediata para retiros hoy</span>
            </div>
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="py-2 text-base font-medium text-slate-200 hover:text-teal-400 transition-colors"
              >
                {link.name}
              </a>
            ))}
            <a
              href={`https://wa.me/${SITE_INFO.whatsappNumber}?text=${encodeURIComponent(SITE_INFO.whatsappWelcome)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 flex items-center justify-center gap-2 w-full py-3 rounded-xl font-bold text-sm text-[#070D1B] bg-gradient-to-r from-teal-400 to-emerald-400 shadow-lg shadow-emerald-500/30"
            >
              <MessageCircle className="w-5 h-5 fill-[#070D1B]" />
              <span>Pedir Flete / Moto por WhatsApp</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
