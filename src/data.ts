import { Service, Plan, Project, Testimonial, BlogPost, ProcessStep, FAQItem } from './types';

export const SERVICES: Service[] = [
  {
    id: 'desarrollo-web',
    title: 'Desarrollo Web',
    description: 'Creamos sitios web a medida con las tecnologías más rápidas y seguras del mercado, enfocados en el rendimiento y la conversión de visitantes.',
    iconName: 'Globe',
    items: [
      'Landing Pages de alta conversión',
      'Sitios Corporativos elegantes',
      'Blogs optimizados para contenido',
      'Portales Empresariales y Web Apps'
    ],
    gradient: 'from-blue-500 to-cyan-500',
    badge: 'Más popular'
  },
  {
    id: 'ecommerce',
    title: 'Ecommerce',
    description: 'Transformamos tu negocio en una máquina de ventas online. Pasarelas seguras, catálogos fluidos y una experiencia de compra impecable.',
    iconName: 'ShoppingBag',
    items: [
      'Tiendas Online personalizadas',
      'Integración con WooCommerce',
      'Pasarelas de pago locales e internacionales',
      'Gestión automática de stock y catálogos'
    ],
    gradient: 'from-purple-500 to-pink-500',
    badge: 'Negocio'
  },
  {
    id: 'sistemas-web',
    title: 'Sistemas Web',
    description: 'Desarrollamos soluciones de software a medida para automatizar procesos internos, gestionar información y conectar tus equipos de trabajo.',
    iconName: 'Cpu',
    items: [
      'CRM y ERP personalizados',
      'Paneles Administrativos avanzados',
      'Sistemas de gestión e inventarios',
      'Automatización de flujos de trabajo'
    ],
    gradient: 'from-indigo-500 to-purple-600',
    badge: 'Empresarial'
  },
  {
    id: 'wordpress',
    title: 'Especialistas WordPress',
    description: 'Soluciones integrales de diseño, optimización y blindaje de seguridad para que tu sitio WordPress rinda al máximo nivel.',
    iconName: 'Layers',
    items: [
      'Diseño y Rediseño a medida',
      'Optimización de velocidad extrema',
      'Migraciones seguras sin pérdida de datos',
      'Actualizaciones y parches de seguridad'
    ],
    gradient: 'from-emerald-500 to-teal-500',
    badge: 'WordPress'
  },
  {
    id: 'seo',
    title: 'SEO y Analítica',
    description: 'Posicionamos tu sitio web en los primeros lugares de Google utilizando estrategias de optimización técnica y medición continua.',
    iconName: 'TrendingUp',
    items: [
      'Optimización de contenidos y estructura',
      'Configuración de Google Search Console',
      'Métricas en tiempo real con Google Analytics',
      'Optimización estricta de Core Web Vitals'
    ],
    gradient: 'from-amber-500 to-orange-500',
    badge: 'Crecimiento'
  },
  {
    id: 'hosting',
    title: 'Hosting Premium',
    description: 'Infraestructura en la nube de alta velocidad con soporte 24/7, garantizando que tu sitio web esté siempre en línea y seguro.',
    iconName: 'Server',
    items: [
      'Administración y monitoreo activo',
      'Copias de seguridad diarias automatizadas',
      'Correos corporativos profesionales',
      'Certificados de seguridad SSL incluidos'
    ],
    gradient: 'from-cyan-500 to-blue-600',
    badge: 'Soporte'
  }
];

export const WHY_US = [
  {
    title: 'Diseño personalizado',
    description: 'No usamos plantillas aburridas. Cada píxel está diseñado para reflejar el alma de tu marca y conectar con tu público.',
    iconName: 'Palette'
  },
  {
    title: 'Desarrollo rápido',
    description: 'Código optimizado y metodologías ágiles para entregar tu proyecto a tiempo y sin sorpresas.',
    iconName: 'Zap'
  },
  {
    title: 'Optimización SEO',
    description: 'Estructuramos tu sitio desde la primera línea de código para que Google lo indexe de forma impecable.',
    iconName: 'Search'
  },
  {
    title: 'Seguridad robusta',
    description: 'Protección activa contra vulnerabilidades, certificados SSL y copias de respaldo recurrentes.',
    iconName: 'ShieldCheck'
  },
  {
    title: 'Totalmente responsive',
    description: 'Tu web se verá espectacular en un celular, una tablet, una laptop o una pantalla 4K.',
    iconName: 'Smartphone'
  },
  {
    title: 'Alto rendimiento',
    description: 'Carga ultrarrápida para mejorar la retención del usuario y cumplir los requisitos de Lighthouse.',
    iconName: 'Gauge'
  },
  {
    title: 'Hosting de alta gama',
    description: 'Servidores cloud configurados para soportar altos volúmenes de tráfico con estabilidad absoluta.',
    iconName: 'Database'
  },
  {
    title: 'Dominio incluido',
    description: 'Te asesoramos en la elección y registro de tu dominio oficial para consolidar tu marca.',
    iconName: 'Globe2'
  },
  {
    title: 'Capacitación completa',
    description: 'Te enseñamos a administrar tu contenido de forma autónoma con manuales y videotutoriales.',
    iconName: 'BookOpen'
  },
  {
    title: 'Soporte permanente',
    description: 'Resolvemos dudas y corregimos cualquier inconveniente técnico de forma ágil y prioritaria.',
    iconName: 'Headphones'
  }
];

export const PLANS: Plan[] = [
  {
    id: 'basico',
    name: 'Básico',
    price: '$49',
    billing: 'al mes',
    description: 'Ideal para blogs y páginas web corporativas informativas que requieren estabilidad y mantenimiento preventivo.',
    features: [
      'Actualizaciones mensuales de plugins y temas',
      'Copias de seguridad semanales en la nube',
      'Monitoreo de estado 24/7 (Uptime)',
      'Seguridad básica y firewall activo',
      'Soporte técnico vía correo electrónico',
      'Tiempo de respuesta en soporte: 48 hrs'
    ],
    notIncluded: [
      'Optimización periódica de velocidad',
      'Cambios de contenido incluidos',
      'SEO avanzado y auditorías',
      'Reporte de métricas mensual'
    ],
    popular: false,
    color: 'blue'
  },
  {
    id: 'profesional',
    name: 'Profesional',
    price: '$99',
    billing: 'al mes',
    description: 'Perfecto para negocios en crecimiento y sitios corporativos activos que demandan mejoras continuas.',
    features: [
      'Actualizaciones semanales de plugins y temas',
      'Copias de seguridad diarias en la nube',
      'Monitoreo activo de Uptime 24/7',
      'Seguridad avanzada y escaneo de malware',
      'Optimización periódica de velocidad (WPO)',
      'Hasta 3 horas de cambios menores mensuales',
      'SEO básico y auditoría técnica inicial',
      'Reporte de métricas y rendimiento mensual',
      'Soporte prioritario por correo y WhatsApp',
      'Tiempo de respuesta en soporte: 24 hrs'
    ],
    popular: true,
    color: 'purple'
  },
  {
    id: 'premium',
    name: 'Premium',
    price: '$199',
    billing: 'al mes',
    description: 'La solución definitiva para tiendas virtuales o aplicaciones web que requieren soporte inmediato y cambios frecuentes.',
    features: [
      'Todo lo incluido en el plan Profesional',
      'Copias de seguridad en tiempo real',
      'Seguridad máxima con remediación gratuita',
      'Optimización avanzada continua de Core Web Vitals',
      'Cambios de contenido ilimitados (hasta 15 horas)',
      'Soporte exclusivo prioritario 24/7',
      'Consultoría estratégica de crecimiento (2 hrs/mes)',
      'Auditorías detalladas de seguridad y SEO',
      'Soporte multi-canal prioritario (Llamada, WhatsApp, Chat)',
      'Tiempo de respuesta garantizado: < 4 hrs'
    ],
    popular: false,
    color: 'cyan'
  }
];

export const PROCESS_STEPS: ProcessStep[] = [
  {
    number: 1,
    title: 'Brief',
    subtitle: 'Formulario de diagnóstico',
    description: 'Nos sentamos a conversar (o nos completas un formulario interactivo) para entender a fondo la visión, el público objetivo y las metas comerciales de tu proyecto.'
  },
  {
    number: 2,
    title: 'Auditoría',
    subtitle: 'Análisis del negocio',
    description: 'Estudiamos tu mercado, analizamos detalladamente a tus competidores directos e identificamos oportunidades clave de conversión y optimización.'
  },
  {
    number: 3,
    title: 'Propuesta',
    subtitle: 'Cronograma y cotización',
    description: 'Te presentamos una propuesta transparente con la arquitectura del sitio, el presupuesto detallado sin costos ocultos y el cronograma de entregas paso a paso.'
  },
  {
    number: 4,
    title: 'Diseño',
    subtitle: 'UI personalizada',
    description: 'Creamos prototipos visuales interactivos a medida que reflejan el look & feel premium de tu marca. Iteramos contigo hasta lograr la aprobación del concepto visual.'
  },
  {
    number: 5,
    title: 'Desarrollo',
    subtitle: 'Construcción del sitio',
    description: 'Escribimos código limpio, optimizado y escalable sobre tecnologías modernas, cuidando cada microinteracción y asegurando la máxima velocidad de carga.'
  },
  {
    number: 6,
    title: 'Revisión',
    subtitle: 'Hasta tres rondas',
    description: 'Subimos tu sitio a un entorno de pruebas privado. Realizamos exhaustivas pruebas de funcionamiento y refinamos detalles visuales en hasta tres rondas de feedback.'
  },
  {
    number: 7,
    title: 'Publicación',
    subtitle: 'Lanzamiento profesional',
    description: '¡Llegó el día! Configuramos el servidor, instalamos el certificado SSL de seguridad, optimizamos la base de datos y conectamos tu dominio al mundo.'
  },
  {
    number: 8,
    title: 'Mantenimiento',
    subtitle: 'Soporte continuo',
    description: 'Monitorizamos activamente el rendimiento de tu web para asegurarnos de que siga cargando rápido, permanezca inmune a hackeos y continúe atrayendo leads.'
  }
];

export const PROJECTS: Project[] = [
  {
    id: 'proj-1',
    title: 'Plataforma FinTech Elevate',
    category: 'tecnologia',
    description: 'Desarrollo completo de una aplicación web financiera con dashboard interactivo en tiempo real y gráficos dinámicos de rendimiento.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80',
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Recharts', 'Vite'],
    results: '+185% de retención de usuarios y un tiempo de carga inferior a 0.8s.',
    link: '#portafolio'
  },
  {
    id: 'proj-2',
    title: 'E-commerce Velvet Co.',
    category: 'ecommerce',
    description: 'Tienda virtual de alta costura con carrito dinámico, pagos fluidos de un solo clic y gestión de catálogo avanzada.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80',
    technologies: ['React', 'WooCommerce', 'Tailwind CSS', 'Stripe', 'Framer Motion'],
    results: '+320% en ventas en los primeros tres meses de lanzamiento.',
    link: '#portafolio'
  },
  {
    id: 'proj-3',
    title: 'Portal de Telemedicina "Vitalis"',
    category: 'salud',
    description: 'Sistema web para reserva de citas médicas, videollamadas integradas y expediente clínico digital totalmente seguro y encriptado.',
    image: 'https://images.unsplash.com/photo-1504868584819-f8e8b446d2e6?auto=format&fit=crop&w=800&q=80',
    technologies: ['React', 'TypeScript', 'WebRTC', 'Tailwind', 'Express'],
    results: 'Reducción del 45% en ausencias de pacientes gracias a recordatorios automáticos.',
    link: '#portafolio'
  },
  {
    id: 'proj-4',
    title: 'Plataforma Académica "Aprende"',
    category: 'educacion',
    description: 'Aula virtual interactiva con reproducción de video en streaming, foros de discusión y sistema automatizado de entrega de certificados.',
    image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=800&q=80',
    technologies: ['React', 'Vimeo API', 'Tailwind CSS', 'PostgreSQL', 'Framer Motion'],
    results: 'Soporte simultáneo de más de 12,000 alumnos activos con cero caídas.',
    link: '#portafolio'
  },
  {
    id: 'proj-5',
    title: 'Corporativo Industrial "ProSteel"',
    category: 'industria',
    description: 'Sitio corporativo de alta gama para una multinacional siderúrgica, que incluye visualizador interactivo de productos 3D y cotizador en línea.',
    image: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=800&q=80',
    technologies: ['React', 'Three.js', 'Tailwind CSS', 'NodeJS'],
    results: 'Aumento del 60% en solicitudes de presupuestos industriales en línea.',
    link: '#portafolio'
  },
  {
    id: 'proj-6',
    title: 'SaaS de Recursos Humanos "Nexus"',
    category: 'tecnologia',
    description: 'Aplicación web interna para el control de asistencia, nómina automatizada y evaluaciones de desempeño organizacional.',
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=800&q=80',
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Node', 'Express'],
    results: 'Ahorro de 15 horas semanales en el departamento de contabilidad de la empresa cliente.',
    link: '#portafolio'
  },
  {
    id: 'proj-7',
    title: 'E-commerce Saludable "BioMarket"',
    category: 'ecommerce',
    description: 'Tienda de suplementos orgánicos con suscripciones mensuales automatizadas y blog informativo integrado para SEO.',
    image: 'https://images.unsplash.com/photo-1472851294608-062f824d29cc?auto=format&fit=crop&w=800&q=80',
    technologies: ['React', 'WordPress Headless', 'Tailwind', 'Stripe Subscriptions'],
    results: 'Ingresos recurrentes mensuales duplicados en el primer trimestre.',
    link: '#portafolio'
  },
  {
    id: 'proj-8',
    title: 'Sitio de Admisiones "St. Joseph School"',
    category: 'educacion',
    description: 'Página de atracción y captación de alumnos con visitas virtuales de 360 grados y agendamiento interactivo.',
    image: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=800&q=80',
    technologies: ['React', 'Tailwind CSS', 'Google Calendar API', 'Framer Motion'],
    results: 'Cupos llenos un mes antes de la fecha límite histórica.',
    link: '#portafolio'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 'test-1',
    name: 'Alejandro Mendoza',
    role: 'Socio Fundador',
    company: 'Elevate FinTech',
    comment: 'Trabajar con el equipo fue la mejor decisión comercial que tomamos. Lograron plasmar una arquitectura sumamente compleja en un portal intuitivo, ultrarrápido y sumamente estético. Nuestros clientes están fascinados con el dashboard interactivo.',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=150&h=150&q=80'
  },
  {
    id: 'test-2',
    name: 'Camila Rossi',
    role: 'Directora de Marketing',
    company: 'Velvet Co.',
    comment: 'Nuestra antigua tienda virtual era lenta y perdía muchas conversiones. Con el nuevo diseño, la experiencia móvil es espectacular y las ventas se han triplicado. Su soporte técnico responde casi al instante ante cualquier requerimiento.',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&h=150&q=80'
  },
  {
    id: 'test-3',
    name: 'Dr. Roberto Salas',
    role: 'Director Médico',
    company: 'Vitalis',
    comment: 'Desarrollaron nuestra plataforma de telemedicina cumpliendo rigurosamente los estándares de privacidad y seguridad de datos. La interfaz es tan amigable que incluso nuestros pacientes de la tercera edad la usan sin dificultades.',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=150&h=150&q=80'
  },
  {
    id: 'test-4',
    name: 'Sofia Valenzuela',
    role: 'Coordinadora de TI',
    company: 'Aprende LMS',
    comment: 'Hemos corrido pruebas con miles de usuarios en simultáneo y el sistema responde impecablemente. La optimización SEO que implementaron nos ha permitido posicionar cursos enteros de forma orgánica sin invertir en publicidad.',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=150&h=150&q=80'
  }
];

export const FAQ_ITEMS: FAQItem[] = [
  {
    question: '¿Cuánto tiempo tarda en desarrollarse un sitio web?',
    answer: 'El tiempo varía según la complejidad. Una Landing Page profesional puede estar lista en 7 a 10 días, un sitio corporativo estándar toma de 3 a 4 semanas, y un e-commerce o sistema web a medida suele requerir de 6 a 12 semanas. En la fase de Propuesta te entregamos un cronograma exacto con fechas de entrega garantizadas.'
  },
  {
    question: '¿Qué incluye exactamente el servicio de mantenimiento?',
    answer: 'El mantenimiento incluye actualizaciones de seguridad, copias de respaldo recurrentes guardadas en nubes externas, monitoreo de caída del servidor 24/7, protección activa contra spam y malware, optimización periódica de velocidad, cambios de contenido (textos, imágenes, creación de secciones) y consultoría técnica continua para que tu sitio nunca quede desactualizado.'
  },
  {
    question: '¿Trabajan con WordPress u otras tecnologías personalizadas?',
    answer: '¡Trabajamos con ambos! Desarrollamos soluciones personalizadas utilizando React, TypeScript, Next.js y Tailwind CSS para aplicaciones que demandan el máximo rendimiento y seguridad a medida. Asimismo, somos expertos en WordPress y WooCommerce, creando temas y flujos a medida para negocios que requieren una administración de contenidos extremadamente sencilla.'
  },
  {
    question: '¿El servicio incluye hosting y nombre de dominio?',
    answer: 'Sí, todos nuestros planes de diseño web iniciales incluyen 1 año gratis de Hosting Cloud Premium de alta velocidad, certificado de seguridad SSL y el registro de tu dominio (.com o local). Posteriormente, puedes renovar estos servicios o migrar a tu propia cuenta si así lo prefieres; te brindamos asesoramiento completo en todo momento.'
  },
  {
    question: '¿Cómo es el proceso de pago y facturación?',
    answer: 'Por lo general, dividimos el proyecto en fases: un anticipo del 50% para dar inicio a la etapa de diseño, y el 50% restante al finalizar y antes del lanzamiento público en producción. Para proyectos grandes o sistemas web complejos, podemos estructurar un plan de pagos diferidos en base a hitos de desarrollo entregados.'
  },
  {
    question: '¿Cuántas revisiones o rondas de cambios se incluyen?',
    answer: 'Para garantizar que el resultado final sea exactamente el que imaginas, incluimos hasta 3 rondas completas de revisiones durante la fase de diseño UI y maquetación de prototipos. Esto nos permite ajustar detalles tipográficos, colores, espaciados y diagramas sin retrasar el cronograma técnico principal.'
  }
];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: 'post-1',
    title: 'Cómo mejorar el SEO de tu web en 2026: Guía paso a paso',
    summary: 'Aprende las últimas técnicas recomendadas por Google, desde la optimización estricta de Core Web Vitals hasta la estructuración semántica del contenido.',
    date: 'Julio 12, 2026',
    readTime: '6 min de lectura',
    category: 'SEO',
    image: 'https://images.unsplash.com/photo-1432821596592-e2c18b78144f?auto=format&fit=crop&w=600&q=80',
    author: 'Daniel Castillo'
  },
  {
    id: 'post-2',
    title: 'Por qué WordPress sigue dominando el mercado web y cómo potenciarlo',
    summary: 'Derribamos mitos sobre WordPress. Descubre cómo una arquitectura headless y un hosting optimizado pueden darte un sitio ultraveloz y totalmente seguro.',
    date: 'Junio 28, 2026',
    readTime: '5 min de lectura',
    category: 'WordPress',
    image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=600&q=80',
    author: 'Lorena Ruiz'
  },
  {
    id: 'post-3',
    title: 'Los 5 errores más comunes al crear una página web de negocios',
    summary: 'Muchos sitios fallan en convertir visitas en clientes. Analizamos errores de velocidad, llamadas a la acción confusas y mala experiencia móvil.',
    date: 'Mayo 15, 2026',
    readTime: '8 min de lectura',
    category: 'Diseño Web',
    image: 'https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&w=600&q=80',
    author: 'Alejandro Mendoza'
  },
  {
    id: 'post-4',
    title: 'La importancia crítica del mantenimiento web preventivo',
    summary: 'Dejar una web abandonada es abrirle la puerta a hackeos, bases de datos lentas y enlaces caídos. Conoce cómo proteger tu activo digital principal.',
    date: 'Abril 04, 2026',
    readTime: '4 min de lectura',
    category: 'Mantenimiento',
    image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=600&q=80',
    author: 'Carlos Estrada'
  }
];
