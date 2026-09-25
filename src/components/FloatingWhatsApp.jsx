import React, { useState } from 'react';
import { MessageCircle, X, Send, Sparkles } from 'lucide-react';
import { SITE_INFO } from '../data/content';

export default function FloatingWhatsApp() {
  const [showPopup, setShowPopup] = useState(false);
  const [quickMessage, setQuickMessage] = useState('');

  const handleSendQuick = (e) => {
    e.preventDefault();
    const finalMsg = quickMessage.trim()
      ? `Hola Facu! ${quickMessage.trim()}`
      : SITE_INFO.whatsappWelcome;

    const url = `https://wa.me/${SITE_INFO.whatsappNumber}?text=${encodeURIComponent(finalMsg)}`;
    window.open(url, '_blank');
    setShowPopup(false);
    setQuickMessage('');
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      
      {/* Quick Chat Popup */}
      {showPopup && (
        <div className="mb-4 w-80 sm:w-88 rounded-2xl glass-panel border-emerald-500/30 p-4 shadow-2xl shadow-black/80 animate-fadeIn relative">
          {/* Header */}
          <div className="flex items-center justify-between pb-3 border-b border-slate-800">
            <div className="flex items-center gap-2.5">
              <div className="relative">
                <div className="w-9 h-9 rounded-full bg-emerald-500/20 flex items-center justify-center text-emerald-400 border border-emerald-500/30">
                  <MessageCircle className="w-5 h-5 fill-emerald-400/20" />
                </div>
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 absolute bottom-0 right-0 border-2 border-slate-900" />
              </div>
              <div>
                <h4 className="text-xs font-bold text-white">Fletes Facu</h4>
                <p className="text-[10px] text-emerald-400 font-medium">En línea para cotizar</p>
              </div>
            </div>
            <button
              onClick={() => setShowPopup(false)}
              className="p-1 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Body message preview */}
          <div className="my-3 p-3 rounded-xl bg-slate-900/90 text-xs text-slate-300 leading-relaxed border border-slate-800">
            👋 ¡Hola! ¿Necesitás un flete en moto o camioneta? Dejanos tu mensaje y te pasamos el presupuesto ahora mismo.
          </div>

          {/* Form */}
          <form onSubmit={handleSendQuick} className="flex gap-2">
            <input
              type="text"
              placeholder="Escribí tu consulta..."
              value={quickMessage}
              onChange={(e) => setQuickMessage(e.target.value)}
              className="flex-1 px-3 py-2 rounded-xl bg-slate-950 border border-slate-700 text-xs text-slate-100 placeholder-slate-500 focus:outline-none focus:border-emerald-400"
              autoFocus
            />
            <button
              type="submit"
              className="p-2 rounded-xl bg-emerald-400 hover:bg-emerald-300 text-slate-950 transition-colors font-bold flex items-center justify-center shrink-0 shadow-md shadow-emerald-500/20"
            >
              <Send className="w-4 h-4" />
            </button>
          </form>
        </div>
      )}

      {/* Floating Button */}
      <button
        onClick={() => setShowPopup(!showPopup)}
        className="relative group p-4 rounded-full bg-gradient-to-tr from-emerald-500 via-emerald-400 to-teal-300 text-slate-950 shadow-xl shadow-emerald-500/40 hover:shadow-emerald-500/60 transition-all duration-300 hover:scale-110 active:scale-95"
        aria-label="Abrir chat de WhatsApp"
      >
        <span className="animate-ping absolute -top-1 -right-1 flex h-4 w-4 rounded-full bg-emerald-400 opacity-75" />
        <span className="absolute -top-1 -right-1 flex h-4 w-4 rounded-full bg-emerald-300 text-[9px] font-black text-slate-950 items-center justify-center border-2 border-[#070D1B]">
          1
        </span>
        <MessageCircle className="w-7 h-7 fill-slate-950" />
      </button>

    </div>
  );
}
