export const SITE_INFO = {
  name: "Fletes Facu",
  slogan: "Logística ágil, segura y al mejor precio",
  phone: "+54 9 11 3845-9201",
  whatsappNumber: "5491138459201",
  email: "contacto@fletesfacu.com.ar",
  location: "CABA, Gran Buenos Aires e Interior",
  hours: "Lunes a Sábado de 07:00 a 21:00 hs (Urgencias 24/7)",
  whatsappWelcome: "Hola Facu! Vengo desde la web y quisiera consultar una cotización para un flete/envío."
};

export const SERVICES = [
  {
    id: "moto",
    title: "Mensajería & Moto Express",
    badge: "Más Rápido (En el día)",
    tagline: "Ideal para paquetes chicos, sobres, trámites y entregas e-commerce urgentes.",
    icon: "Bike",
    vehicle: "Moto con Baúl / Mochila Térmica",
    capacity: "Hasta 20 kg | 40 x 40 x 40 cm",
    deliveryTime: "30 a 90 minutos",
    features: [
      "Entrega inmediata puerta a puerta",
      "Trámites bancarios, legales y firmas",
      "Cobranzas y envíos Flex e-commerce",
      "Seguimiento de entrega por WhatsApp",
      "Opción de ida y vuelta en el momento"
    ],
    priceNote: "Tarifas fijas por zona / km",
    color: "from-sky-500 to-teal-400",
    borderGlow: "group-hover:border-sky-400/50"
  },
  {
    id: "camioneta",
    title: "Fletes en Camioneta",
    badge: "Más Solicitado",
    tagline: "Mudanzas medianas, muebles, electrodomésticos y traslados comerciales.",
    icon: "Truck",
    vehicle: "Utilitario / Camioneta Furgón Cerrado",
    capacity: "Hasta 1.000 kg | Capacidad 4 a 8 m³",
    deliveryTime: "Programado o Express",
    features: [
      "Caja cerrada y protegida de la lluvia",
      "Traslado de heladeras, sillones, mesas y cajas",
      "Opción de peón / ayudante de carga y descarga",
      "Mantas y correas de sujeción profesional",
      "Viajes a CABA, GBA y Costa/Interior"
    ],
    priceNote: "Por hora o valor cerrado por viaje",
    color: "from-teal-400 to-emerald-400",
    borderGlow: "group-hover:border-emerald-400/50",
    popular: true
  },
  {
    id: "corporativo",
    title: "Logística y Envíos para Empresas",
    badge: "Servicio Programado",
    tagline: "Rutas fijas, distribución de mercadería y reparto continuo para comercios.",
    icon: "Boxes",
    vehicle: "Flota Mixta (Motos y Camionetas)",
    capacity: "A demanda según contrato",
    deliveryTime: "Horarios coordinados",
    features: [
      "Facturación A y B para empresas",
      "Cuentas corrientes para clientes frecuentes",
      "Retiros programados diarios o semanales",
      "Reparto multilínea optimizado",
      "Atención y soporte prioritario"
    ],
    priceNote: "Abonos mensuales o tarifas preferenciales",
    color: "from-emerald-400 to-cyan-400",
    borderGlow: "group-hover:border-teal-400/50"
  }
];

export const FLEET = [
  {
    name: "Motos 150cc Urbanas",
    category: "Mensajería & Cadetería",
    idealFor: "Documentos, comida, paquetería e-commerce, repuestos pequeños.",
    maxWeight: "25 kg",
    dimensions: "Caja de 45L / Mochila técnica impermeable",
    speed: "Rápido tránsito urbano",
    image: "moto"
  },
  {
    name: "Utilitarios Chicos (Kangoo / Partner)",
    category: "Fletes Urbanos Ágiles",
    idealFor: "Cajas múltiples, electrodomésticos chicos (microondas, TV, lavarropas), bultos medianos.",
    maxWeight: "650 kg",
    dimensions: "1.7m largo x 1.2m ancho x 1.1m alto",
    speed: "Carga cerrada y protegida",
    image: "utilitario"
  },
  {
    name: "Camionetas Grandes (Master / Sprinter / Ranger)",
    category: "Mudanzas y Cargas Pesadas",
    idealFor: "Sillones, camas de 2 plazas, mesas, heladeras de pie, mudanzas de departamentos.",
    maxWeight: "1.200 kg",
    dimensions: "2.8m largo x 1.6m ancho x 1.7m alto",
    speed: "Gran volumen con amarres de seguridad",
    image: "furgon"
  }
];

export const STEPS = [
  {
    step: "01",
    title: "Pedí tu cotización",
    description: "Completá el cotizador rápido o escribinos por WhatsApp con el origen, destino y qué necesitás trasladar.",
    icon: "Calculator"
  },
  {
    step: "02",
    title: "Coordinamos vehículo y horario",
    description: "Te pasamos el precio exacto y confirmamos el chofer y la franja horaria más conveniente.",
    icon: "CalendarCheck"
  },
  {
    step: "03",
    title: "Retiro puntual y cuidado",
    description: "Llegamos a horario con las herramientas necesarias para asegurar que todo viaje protegido.",
    icon: "ShieldCheck"
  },
  {
    step: "04",
    title: "Entrega y aviso al instante",
    description: "Entregamos en destino y te enviamos la confirmación con foto y firma de recepción.",
    icon: "CheckCircle2"
  }
];

export const STATS = [
  { value: "+4.500", label: "Viajes Completados", sublabel: "En CABA y Gran Buenos Aires" },
  { value: "4.9 / 5", label: "Calificación Promedio", sublabel: "Más de 350 reseñas positivas" },
  { value: "100%", label: "Cargas Protegidas", sublabel: "Seguridad y responsabilidad total" },
  { value: "< 25 min", label: "Tiempo de Respuesta", sublabel: "Atención rápida vía WhatsApp" }
];

export const TESTIMONIALS = [
  {
    name: "Martín Benítez",
    role: "Mudanza en Palermo",
    comment: "Excelente servicio. Facu y su equipo llegaron 10 minutos antes, cuidaron todos los muebles con mantas y subieron todo por escalera sin un solo rayón. Súper recomendables!",
    rating: 5,
    date: "Hace 2 semanas",
    service: "Flete en Camioneta"
  },
  {
    name: "Luciana Gómez",
    role: "Emprendimiento de Indumentaria",
    comment: "Hago envíos con la moto todas las semanas para entregar pedidos a mis clientes. Son súper puntuales y nunca tuve un problema con un paquete.",
    rating: 5,
    date: "Hace 1 mes",
    service: "Mensajería en Moto"
  },
  {
    name: "Diego Rossi",
    role: "Estudio de Arquitectura",
    comment: "Teníamos que trasladar maquetas delicadas y planos de urgencia a una licitación. El chofer fue muy cuidadoso y todo llegó impecable a tiempo.",
    rating: 5,
    date: "Hace 3 semanas",
    service: "Flete Express"
  }
];

export const FAQS = [
  {
    q: "¿Con cuánta anticipación debo reservar un flete?",
    a: "Podés pedirlo en el momento (sujeto a disponibilidad inmediata) o reservarlo con días de anticipación para garantizarte el horario exacto que prefieras."
  },
  {
    q: "¿El servicio incluye peones para carga y descarga?",
    a: "Sí, disponemos del servicio de peón o ayudante para subir/bajar muebles por escalera o ascensor. Solo tenés que indicarlo al momento de cotizar para incluirlo."
  },
  {
    q: "¿Qué medios de pago aceptan?",
    a: "Aceptamos Transferencia bancaria, Mercado Pago (dinero en cuenta y tarjetas) y Efectivo al momento de la entrega o retiro."
  },
  {
    q: "¿Trabajan días de lluvia?",
    a: "Sí. Para camionetas contamos con furgones completamente cerrados que protegen la mercadería al 100%. Para motos, contamos con cajas estancas y mochilas impermeables."
  },
  {
    q: "¿Realizan viajes al interior o a la Costa?",
    a: "Sí, hacemos traslados de media y larga distancia hacia la Costa Atlántica, provincia de Buenos Aires y principales ciudades del interior del país previa coordinación."
  }
];
