import React, { useState } from 'react';
import { Calculator as CalcIcon, Truck, Bike, PackageCheck, Send, MapPin, UserCheck, Calendar, Info, Check, Sparkles, MessageCircle } from 'lucide-react';
import confetti from 'canvas-confetti';
import { SITE_INFO } from '../data/content';

export default function Calculator({ selectedVehicle, setSelectedVehicle }) {
  const [vehicle, setVehicle] = useState(selectedVehicle || 'camioneta');
  const [origin, setOrigin] = useState('');
  const [destination, setDestination] = useState('');
  const [cargoDesc, setCargoDesc] = useState('');
  const [helpers, setHelpers] = useState('0'); // '0', '1', '2'
  const [stairs, setStairs] = useState('planta_baja'); // 'planta_baja', 'ascensor', 'escalera'
  const [timing, setTiming] = useState('urgente'); // 'urgente', 'hoy', 'programado'
  const [clientName, setClientName] = useState('');

  // Update internal vehicle if prop changes
  React.useEffect(() => {
    if (selectedVehicle) {
      setVehicle(selectedVehicle);
    }
  }, [selectedVehicle]);

  const handleVehicleChange = (newVeh) => {
    setVehicle(newVeh);
    if (setSelectedVehicle) setSelectedVehicle(newVeh);
  };

  const getVehicleLabel = () => {
    if (vehicle === 'moto') return '🏍️ Moto Express / Mensajería';
    if (vehicle === 'camioneta') return '🚚 Camioneta Utilitaria / Flete';
    return '📦 Servicio Corporativo / Carga Pesada';
  };

  const getStairsLabel = () => {
    if (stairs === 'planta_baja') return 'Planta baja / Fácil acceso';
    if (stairs === 'ascensor') return 'Con ascensor';
    return 'Por escalera';
  };

  const getTimingLabel = () => {
    if (timing === 'urgente') return '⚡ Lo antes posible (Urgente)';
    if (timing === 'hoy') return '📅 Hoy durante el día';
    return '🗓️ Fecha a coordinar';
  };

  const handleSendQuote = (e) => {
    e.preventDefault();

    // Trigger celebratory confetti effect
    try {
      confetti({
        particleCount: 50,
        spread: 60,
        origin: { y: 0.8 },
        colors: ['#10B981', '#38BDF8', '#34D399', '#0284C7']
      });
    } catch (err) {
      // ignore
    }

    const message = `🚚 *SOLICITUD DE COTIZACIÓN - FLETES FACU*
──────────────────────
👤 *Nombre:* ${clientName.trim() || 'Cliente Web'}
🛵 *Tipo de Vehículo:* ${getVehicleLabel()}
📍 *Origen:* ${origin.trim() || 'A definir'}
🏁 *Destino:* ${destination.trim() || 'A definir'}
📦 *Carga a trasladar:* ${cargoDesc.trim() || 'Detallado en el chat'}
${vehicle !== 'moto' ? `👥 *Ayudantes / Peones:* ${helpers === '0' ? 'Solo chofer (Sin peón)' : helpers === '1' ? '1 Peón de carga' : '2 Peones de carga'}\n🏢 *Acceso:* ${getStairsLabel()}` : ''}
⏰ *Horario:* ${getTimingLabel()}
──────────────────────
Quedo a la espera de la cotización y confirmación. ¡Muchas gracias!`;

    const url = `https://wa.me/${SITE_INFO.whatsappNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  return (
    <section id="cotizador" className="py-20 lg:py-28 relative">
      {/* Background accents */}
      <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-emerald-600/10 rounded-full blur-[140px] pointer-events-none -z-10" />
      <div className="absolute bottom-10 left-1/4 w-96 h-96 bg-sky-600/10 rounded-full blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-800/90 border border-emerald-500/30 text-emerald-400 text-xs font-semibold uppercase tracking-wider mb-4">
            <CalcIcon className="w-3.5 h-3.5" />
            Cotizador en Tiempo Real
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Calculá y pedí tu presupuesto <br />
            <span className="text-gradient">directo a WhatsApp en 1 click</span>
          </h2>
          <p className="mt-4 text-base text-slate-300">
            Completá los datos clave de tu traslado para recibir el precio exacto y disponibilidad inmediata sin vueltas.
          </p>
        </div>

        {/* Main Form Container */}
        <div className="glass-panel rounded-3xl p-6 sm:p-10 border-sky-500/20 shadow-2xl relative">
          
          <form onSubmit={handleSendQuote} className="space-y-8">
            
            {/* Step 1: Select Vehicle Type */}
            <div>
              <label className="block text-sm font-bold text-slate-200 uppercase tracking-wider mb-3">
                1. Seleccioná el tipo de vehículo
              </label>
              
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {/* Moto */}
                <button
                  type="button"
                  onClick={() => handleVehicleChange('moto')}
                  className={`p-4 rounded-2xl border text-left transition-all duration-200 flex flex-col justify-between ${
                    vehicle === 'moto'
                      ? 'bg-gradient-to-b from-sky-950/80 to-slate-900 border-sky-400 text-white shadow-lg shadow-sky-500/15'
                      : 'bg-slate-900/60 border-slate-800 text-slate-400 hover:border-slate-700 hover:text-slate-200'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div className={`p-2.5 rounded-xl ${vehicle === 'moto' ? 'bg-sky-500 text-slate-950' : 'bg-slate-800 text-slate-400'}`}>
                      <Bike className="w-5 h-5" />
                    </div>
                    {vehicle === 'moto' && <span className="w-2.5 h-2.5 rounded-full bg-sky-400 animate-pulse" />}
                  </div>
                  <div className="mt-4">
                    <h4 className="font-bold text-sm text-white">Moto Express</h4>
                    <p className="text-xs text-slate-400 mt-0.5">Sobres, paquetes chicos y trámites</p>
                  </div>
                </button>

                {/* Camioneta */}
                <button
                  type="button"
                  onClick={() => handleVehicleChange('camioneta')}
                  className={`p-4 rounded-2xl border text-left transition-all duration-200 flex flex-col justify-between ${
                    vehicle === 'camioneta'
                      ? 'bg-gradient-to-b from-emerald-950/80 to-slate-900 border-emerald-400 text-white shadow-lg shadow-emerald-500/15'
                      : 'bg-slate-900/60 border-slate-800 text-slate-400 hover:border-slate-700 hover:text-slate-200'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div className={`p-2.5 rounded-xl ${vehicle === 'camioneta' ? 'bg-emerald-400 text-slate-950' : 'bg-slate-800 text-slate-400'}`}>
                      <Truck className="w-5 h-5" />
                    </div>
                    <span className="text-[10px] uppercase font-extrabold px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                      Popular
                    </span>
                  </div>
                  <div className="mt-4">
                    <h4 className="font-bold text-sm text-white">Camioneta Utilitaria</h4>
                    <p className="text-xs text-slate-400 mt-0.5">Mudanzas, electrodomésticos y bultos</p>
                  </div>
                </button>

                {/* Corporativo / Grande */}
                <button
                  type="button"
                  onClick={() => handleVehicleChange('corporativo')}
                  className={`p-4 rounded-2xl border text-left transition-all duration-200 flex flex-col justify-between ${
                    vehicle === 'corporativo'
                      ? 'bg-gradient-to-b from-teal-950/80 to-slate-900 border-teal-400 text-white shadow-lg shadow-teal-500/15'
                      : 'bg-slate-900/60 border-slate-800 text-slate-400 hover:border-slate-700 hover:text-slate-200'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div className={`p-2.5 rounded-xl ${vehicle === 'corporativo' ? 'bg-teal-400 text-slate-950' : 'bg-slate-800 text-slate-400'}`}>
                      <PackageCheck className="w-5 h-5" />
                    </div>
                    {vehicle === 'corporativo' && <span className="w-2.5 h-2.5 rounded-full bg-teal-400 animate-pulse" />}
                  </div>
                  <div className="mt-4">
                    <h4 className="font-bold text-sm text-white">Empresas & Carga Grande</h4>
                    <p className="text-xs text-slate-400 mt-0.5">Furgón grande, repartos o mudanza total</p>
                  </div>
                </button>
              </div>
            </div>

            {/* Step 2: Route & Addresses */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-emerald-400" />
                  Dirección o Barrio de Origen
                </label>
                <input
                  type="text"
                  required
                  placeholder="Ej: Av. Santa Fe 3400, Palermo"
                  value={origin}
                  onChange={(e) => setOrigin(e.target.value)}
                  className="w-full px-4 py-3.5 rounded-xl bg-slate-900/80 border border-slate-700 focus:border-emerald-400 focus:ring-1 focus:ring-emerald-400 outline-none text-slate-100 placeholder-slate-500 text-sm transition-all"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-sky-400" />
                  Dirección o Barrio de Destino
                </label>
                <input
                  type="text"
                  required
                  placeholder="Ej: Av. Maipú 1500, Vicente López"
                  value={destination}
                  onChange={(e) => setDestination(e.target.value)}
                  className="w-full px-4 py-3.5 rounded-xl bg-slate-900/80 border border-slate-700 focus:border-sky-400 focus:ring-1 focus:ring-sky-400 outline-none text-slate-100 placeholder-slate-500 text-sm transition-all"
                />
              </div>
            </div>

            {/* Step 3: Cargo Details & Name */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2">
                  ¿Qué vas a trasladar?
                </label>
                <input
                  type="text"
                  required
                  placeholder="Ej: 1 Heladera, 1 sommier y 6 cajas medianas"
                  value={cargoDesc}
                  onChange={(e) => setCargoDesc(e.target.value)}
                  className="w-full px-4 py-3.5 rounded-xl bg-slate-900/80 border border-slate-700 focus:border-emerald-400 focus:ring-1 focus:ring-emerald-400 outline-none text-slate-100 placeholder-slate-500 text-sm transition-all"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2">
                  Tu Nombre o Empresa
                </label>
                <input
                  type="text"
                  placeholder="Ej: Lucas Martínez"
                  value={clientName}
                  onChange={(e) => setClientName(e.target.value)}
                  className="w-full px-4 py-3.5 rounded-xl bg-slate-900/80 border border-slate-700 focus:border-emerald-400 focus:ring-1 focus:ring-emerald-400 outline-none text-slate-100 placeholder-slate-500 text-sm transition-all"
                />
              </div>
            </div>

            {/* Step 4: Helpers & Access (Only for Camioneta & Corporativo) */}
            {vehicle !== 'moto' && (
              <div className="p-5 rounded-2xl bg-slate-900/90 border border-slate-800 space-y-5">
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-teal-300">
                  <UserCheck className="w-4 h-4" />
                  <span>Servicio de Ayudante / Carga</span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Peones selector */}
                  <div>
                    <span className="block text-xs text-slate-400 mb-2">
                      ¿Precisás peones para cargar/descargar?
                    </span>
                    <div className="grid grid-cols-3 gap-2">
                      {[
                        { id: '0', label: 'Solo Chofer' },
                        { id: '1', label: '+1 Peón' },
                        { id: '2', label: '+2 Peones' },
                      ].map((item) => (
                        <button
                          type="button"
                          key={item.id}
                          onClick={() => setHelpers(item.id)}
                          className={`py-2 px-3 text-xs font-semibold rounded-lg border transition-colors ${
                            helpers === item.id
                              ? 'bg-emerald-500/20 border-emerald-400 text-emerald-300 font-bold'
                              : 'bg-slate-800/70 border-slate-700 text-slate-400 hover:text-slate-200'
                          }`}
                        >
                          {item.label}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Stairs selector */}
                  <div>
                    <span className="block text-xs text-slate-400 mb-2">
                      Tipo de acceso en el lugar
                    </span>
                    <div className="grid grid-cols-3 gap-2">
                      {[
                        { id: 'planta_baja', label: 'Planta Baja' },
                        { id: 'ascensor', label: 'Ascensor' },
                        { id: 'escalera', label: 'Por Escalera' },
                      ].map((item) => (
                        <button
                          type="button"
                          key={item.id}
                          onClick={() => setStairs(item.id)}
                          className={`py-2 px-2.5 text-xs font-semibold rounded-lg border transition-colors ${
                            stairs === item.id
                              ? 'bg-sky-500/20 border-sky-400 text-sky-300 font-bold'
                              : 'bg-slate-800/70 border-slate-700 text-slate-400 hover:text-slate-200'
                          }`}
                        >
                          {item.label}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Step 5: Urgency / Timing */}
            <div>
              <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                <Calendar className="w-3.5 h-3.5 text-teal-400" />
                ¿Para cuándo lo necesitás?
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {[
                  { id: 'urgente', label: '⚡ Urgente (Hoy en el acto)', desc: 'Salida express de inmediato' },
                  { id: 'hoy', label: '📅 Durante el día de hoy', desc: 'Franja horaria a coordinar' },
                  { id: 'programado', label: '🗓️ Para los próximos días', desc: 'Reserva anticipada' },
                ].map((item) => (
                  <button
                    type="button"
                    key={item.id}
                    onClick={() => setTiming(item.id)}
                    className={`p-3 rounded-xl border text-left transition-all ${
                      timing === item.id
                        ? 'bg-slate-800 border-teal-400 text-white shadow-sm'
                        : 'bg-slate-900/60 border-slate-800 text-slate-400 hover:border-slate-700'
                    }`}
                  >
                    <span className="block text-xs font-bold text-slate-200">{item.label}</span>
                    <span className="block text-[11px] text-slate-400 mt-0.5">{item.desc}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Submit Button */}
            <div className="pt-4 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-2 text-xs text-slate-400 text-center sm:text-left">
                <Info className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Te responderemos con el precio exacto y el tiempo de llegada en menos de 5 minutos.</span>
              </div>

              <button
                type="submit"
                className="w-full sm:w-auto flex items-center justify-center gap-3 px-8 py-4 rounded-xl font-bold text-base text-slate-950 bg-gradient-to-r from-teal-400 via-emerald-400 to-emerald-300 hover:from-teal-300 hover:to-emerald-200 shadow-xl shadow-emerald-500/30 hover:shadow-emerald-500/50 transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
              >
                <MessageCircle className="w-5 h-5 fill-slate-950" />
                <span>Solicitar Cotización por WhatsApp</span>
                <Sparkles className="w-4 h-4" />
              </button>
            </div>

          </form>

        </div>

      </div>
    </section>
  );
}
