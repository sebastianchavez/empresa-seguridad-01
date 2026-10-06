/* ============================================================
   VigilPro - Datos Mockeados
   Toda la información del template se centraliza aquí.
   ============================================================ */

const VIGILPRO = {
  empresa: {
    nombre: "VigilPro",
    tagline: "Protección 24/7 que tu familia y negocio merecen",
    eslogan: "Vigilancia profesional, respuesta inmediata",
    telefono: "+56 9 6234 5810",
    telefonoSecundario: "+56 2 2634 5810",
    telefonoEmergencias: "+56 9 6234 5811",
    email: "contacto@vigilpro.cl",
    emailVentas: "ventas@vigilpro.cl",
    direccion: "Av. Apoquindo 4501, Piso 12, Las Condes, Santiago, Chile",
    horarioAtencion: "Lun a Vie 08:00 - 19:00 | Sáb 09:00 - 14:00",
    horarioMonitoreo: "Central de monitoreo 24/7, los 365 días del año",
    redes: {
      facebook: "https://facebook.com/vigilpro",
      instagram: "https://instagram.com/vigilpro",
      linkedin: "https://linkedin.com/company/vigilpro",
      whatsapp: "https://wa.me/56962345810"
    },
    ultimaActualizacion: "01 de octubre de 2026"
  },

  stats: [
    { valor: 20, sufijo: "+", label: "Años de experiencia", icono: "calendar" },
    { valor: 1200, sufijo: "+", label: "Clientes protegidos", icono: "users" },
    { valor: 24, sufijo: "/7", label: "Monitoreo continuo", icono: "monitor" },
    { valor: 80, sufijo: "+", label: "Guardias certificados", icono: "badge" }
  ],

  servicios: [
    {
      id: 1,
      slug: "cctv",
      icono: "camera",
      titulo: "Circuito Cerrado de TV",
      descripcion: "Cámaras de alta definición con grabación en la nube, visión nocturna y acceso remoto desde tu smartphone.",
      destacado: true
    },
    {
      id: 2,
      slug: "alarmas",
      icono: "siren",
      titulo: "Alarmas Monitoreadas",
      descripcion: "Sistemas de intrusión conectados a nuestra central. Respuesta en menos de 5 minutos ante cualquier evento.",
      destacado: true
    },
    {
      id: 3,
      slug: "control-acceso",
      icono: "lock",
      titulo: "Control de Acceso",
      descripcion: "Tarjetas, biometría y lectores para gestionar quién entra y sale de tus instalaciones de forma segura.",
      destacado: true
    },
    {
      id: 4,
      slug: "rondas",
      icono: "walk",
      titulo: "Rondas de Vigilancia",
      descripcion: "Guardias uniformados realizan rondas programadas con registro digital y reportes automáticos.",
      destacado: true
    },
    {
      id: 5,
      slug: "escolta",
      icono: "user-shield",
      titulo: "Escolta Privada",
      descripcion: "Protección personal para ejecutivos, familias y eventos. Personal capacitado y discreto.",
      destacado: false
    },
    {
      id: 6,
      slug: "monitoreo-24-7",
      icono: "monitor",
      titulo: "Monitoreo 24/7",
      descripcion: "Central operativa atendiendo los 365 días del año. Reportes diarios y respuesta inmediata.",
      destacado: true
    },
    {
      id: 7,
      slug: "consultoria",
      icono: "clipboard",
      titulo: "Consultoría de Seguridad",
      descripcion: "Auditoría integral de riesgos. Diseñamos un plan a medida para tu hogar o empresa.",
      destacado: false
    },
    {
      id: 8,
      slug: "respuesta-intrusion",
      icono: "shield-bolt",
      titulo: "Respuesta ante Intrusión",
      descripcion: "Equipos móviles que se desplazan al lugar ante cualquier alerta. Coordinación con Carabineros.",
      destacado: false
    }
  ],

  beneficios: [
    { icono: "badge",        titulo: "Personal OS-10", descripcion: "Todo nuestro personal cuenta con certificación OS-10 vigente y cursos de capacitación continua." },
    { icono: "monitor",      titulo: "Central 24/7", descripcion: "Atendemos los 365 días del año sin pausa. Tu propiedad siempre está siendo vigilada." },
    { icono: "lightning",    titulo: "Respuesta < 5 min", descripcion: "Tiempo promedio de respuesta ante alarmas. Equipos móviles listos para actuar." },
    { icono: "shield-check", titulo: "Tecnología de punta", descripcion: "Equipos de última generación, grabación en la nube y cámaras 4K con inteligencia artificial." },
    { icono: "document",     titulo: "Garantía escrita", descripcion: "Contratos claros con cobertura específica. Sin letra chica, total transparencia." },
    { icono: "eye",          titulo: "Discreción total", descripcion: "Servicio profesional y discreto. Confidencialidad absoluta en cada operación." }
  ],

  certificaciones: [
    { titulo: "ISO 28000", descripcion: "Gestión de la seguridad de la cadena de suministro", icono: "cert" },
    { titulo: "OS-10", descripcion: "Personal autorizado por Carabineros de Chile", icono: "badge" },
    { titulo: "ACHS", descripcion: "Asociación Chilena de Seguridad", icono: "shield" },
    { titulo: "AES", descripcion: "Asociación de Empresas de Seguridad", icono: "check" }
  ],

  valores: [
    { titulo: "Compromiso", descripcion: "Protegemos lo que más valoras con dedicación absoluta, como si fuera nuestro.", icono: "heart" },
    { titulo: "Profesionalismo", descripcion: "Equipo altamente capacitado, procedimientos claros y ejecución impecable.", icono: "star" },
    { titulo: "Innovación", descripcion: "Adoptamos las últimas tecnologías para entregar una vigilancia moderna y efectiva.", icono: "lightbulb" },
    { titulo: "Transparencia", descripcion: "Reportes claros, contratos honestos y comunicación abierta con cada cliente.", icono: "eye" }
  ],

  equipo: [
    { nombre: "Andrés Figueroa", cargo: "Director General", bio: "20 años liderando operaciones de seguridad. Ex oficial de Carabineros, especialista en gestión estratégica.", foto: "https://i.pravatar.cc/400?img=51" },
    { nombre: "Carolina Vargas", cargo: "Jefa de Operaciones", bio: "Ingeniera con magister en seguridad. Coordina más de 1.500 servicios mensuales en la región metropolitana.", foto: "https://i.pravatar.cc/400?img=47" },
    { nombre: "Felipe Morales", cargo: "Jefe de Monitoreo", bio: "Supervisa la central operativa 24/7. Especialista en análisis de video y respuesta ante incidentes.", foto: "https://i.pravatar.cc/400?img=12" },
    { nombre: "Daniela Soto", cargo: "Coordinadora de Clientes", bio: "Atención personalizada y seguimiento permanente. Tu enlace directo con el equipo VigilPro.", foto: "https://i.pravatar.cc/400?img=45" }
  ],

  galeria: [
    { id: 1,  src: "https://picsum.photos/seed/vig1/800/600",   categoria: "comercial",    alt: "Cámaras CCTV en lobby corporativo" },
    { id: 2,  src: "https://picsum.photos/seed/vig2/800/600",   categoria: "residencial",  alt: "Sistema de alarmas en hogar" },
    { id: 3,  src: "https://picsum.photos/seed/vig3/800/600",   categoria: "comercial",    alt: "Control de acceso en edificio" },
    { id: 4,  src: "https://picsum.photos/seed/vig4/800/600",   categoria: "eventos",      alt: "Escolta en evento corporativo" },
    { id: 5,  src: "https://picsum.photos/seed/vig5/800/600",   categoria: "tecnologia",   alt: "Central de monitoreo 24/7" },
    { id: 6,  src: "https://picsum.photos/seed/vig6/800/600",   categoria: "residencial",  alt: "Rondas de vigilancia en condominio" },
    { id: 7,  src: "https://picsum.photos/seed/vig7/800/600",   categoria: "comercial",    alt: "Guardia uniformado en retail" },
    { id: 8,  src: "https://picsum.photos/seed/vig8/800/600",   categoria: "tecnologia",   alt: "Cámaras con inteligencia artificial" },
    { id: 9,  src: "https://picsum.photos/seed/vig9/800/600",   categoria: "eventos",      alt: "Servicio de escolta privada" },
    { id: 10, src: "https://picsum.photos/seed/vig10/800/600",  categoria: "residencial",  alt: "Sistema perimetral en condominio" },
    { id: 11, src: "https://picsum.photos/seed/vig11/800/600",  categoria: "comercial",    alt: "Patrulla vehicular nocturna" },
    { id: 12, src: "https://picsum.photos/seed/vig12/800/600",  categoria: "tecnologia",   alt: "Equipo de guardia con tablet" }
  ],

  categoriasGaleria: [
    { id: "todos",       label: "Todos" },
    { id: "residencial", label: "Residencial" },
    { id: "comercial",   label: "Comercial" },
    { id: "eventos",     label: "Eventos" },
    { id: "tecnologia",  label: "Tecnología" }
  ],

  planes: [
    {
      id: "residencial",
      nombre: "Plan Residencial",
      precio: 39990,
      periodicidad: "mes",
      descripcion: "Protección integral para tu hogar y familia, sin contratos largos.",
      destacado: false,
      features: [
        { texto: "2 cámaras CCTV HD interior", incluido: true },
        { texto: "Panel de alarma con sirena", incluido: true },
        { texto: "Monitoreo 24/7", incluido: true },
        { texto: "App móvil con notificaciones", incluido: true },
        { texto: "Rondas de vigilancia", incluido: false },
        { texto: "Escolta privada", incluido: false },
        { texto: "Cámaras con reconocimiento facial", incluido: false },
        { texto: "Coordinador dedicado", incluido: false }
      ]
    },
    {
      id: "empresarial",
      nombre: "Plan Empresarial",
      precio: 89990,
      periodicidad: "mes",
      descripcion: "El más elegido. Solución completa para oficinas, locales y PyMEs.",
      destacado: true,
      features: [
        { texto: "Todo del Plan Residencial", incluido: true },
        { texto: "6 cámaras CCTV 4K exterior", incluido: true },
        { texto: "Control de acceso biométrico", incluido: true },
        { texto: "Rondas de vigilancia 2x día", incluido: true },
        { texto: "Respuesta móvil < 5 min", incluido: true },
        { texto: "Reportes ejecutivos mensuales", incluido: true },
        { texto: "Cámaras con IA", incluido: false },
        { texto: "Coordinador dedicado", incluido: false }
      ]
    },
    {
      id: "vip",
      nombre: "Plan Premium VIP",
      precio: 199990,
      periodicidad: "mes",
      descripcion: "Servicio premium para ejecutivos, embajadas y grandes empresas.",
      destacado: false,
      features: [
        { texto: "Todo del Plan Empresarial", incluido: true },
        { texto: "Cámaras con IA y reconocimiento facial", incluido: true },
        { texto: "Escolta privada 24/8", incluido: true },
        { texto: "Coordinador dedicado", incluido: true },
        { texto: "Auditoría trimestral", incluido: true },
        { texto: "Guardia uniformado in situ", incluido: true },
        { texto: "Vehículo blindado disponible", incluido: true },
        { texto: "Atención prioritaria inmediata", incluido: true }
      ]
    }
  ],

  serviciosExtras: [
    { nombre: "Cámara CCTV adicional (instalación)", precio: 89000 },
    { nombre: "Sensor de movimiento extra", precio: 35000 },
    { nombre: "Control remoto adicional (App)", precio: 12000 },
    { nombre: "Ronda adicional (1 visita)", precio: 18000 },
    { nombre: "Hora extra de escolta", precio: 25000 },
    { nombre: "Auditoría de seguridad presencial", precio: 150000 }
  ],

  testimonios: [
    {
      nombre: "María José Larraín",
      cargo: "Gerente General, Inmobiliaria Andes",
      foto: "https://i.pravatar.cc/100?img=49",
      rating: 5,
      texto: "Llevamos 4 años trabajando con VigilPro en nuestras propiedades. Su equipo es profesional, las cámaras son excelentes y el soporte es inmediato. Total confianza."
    },
    {
      nombre: "Roberto Salazar",
      cargo: "Administrador, Edificio Plaza Norte",
      foto: "https://i.pravatar.cc/100?img=8",
      rating: 5,
      texto: "Después de un intento de robo, contratamos a VigilPro. La respuesta fue inmediata y desde entonces no hemos tenido un solo incidente. Recomendados al 100%."
    },
    {
      nombre: "Carolina Muñoz",
      cargo: "Clienta residencial, Las Condes",
      foto: "https://i.pravatar.cc/100?img=44",
      rating: 5,
      texto: "La tranquilidad que entrega VigilPro no tiene precio. Puedo ver mi casa desde el celular cuando viajo y sé que cualquier movimiento será atendido de inmediato."
    }
  ],

  turnos: [
    { dia: "Lunes",       manana: "08:00 - 13:00", tarde: "14:00 - 19:00", noche: "Central 24/7" },
    { dia: "Martes",      manana: "08:00 - 13:00", tarde: "14:00 - 19:00", noche: "Central 24/7" },
    { dia: "Miércoles",   manana: "08:00 - 13:00", tarde: "14:00 - 19:00", noche: "Central 24/7" },
    { dia: "Jueves",      manana: "08:00 - 13:00", tarde: "14:00 - 19:00", noche: "Central 24/7" },
    { dia: "Viernes",     manana: "08:00 - 13:00", tarde: "14:00 - 19:00", noche: "Central 24/7" },
    { dia: "Sábado",      manana: "09:00 - 14:00", tarde: "Cerrado",       noche: "Central 24/7" },
    { dia: "Domingo",     manana: "Solo urgencias", tarde: "Cerrado",      noche: "Central 24/7" }
  ],

  faqs: [
    { pregunta: "¿Cuánto demora la instalación de un sistema de cámaras?", respuesta: "Para un sistema residencial estándar (4 cámaras) la instalación toma entre 4 a 6 horas. Para sistemas empresariales coordinamos una visita técnica previa y planificamos la instalación en horarios que no afecten tu operación, generalmente entre 24 a 72 horas." },
    { pregunta: "¿Qué pasa si se activa una alarma en mi propiedad?", respuesta: "Nuestra central recibe la alerta en segundos, verifica visualmente con las cámaras y despacha un equipo móvil al lugar. El tiempo promedio de respuesta es inferior a 5 minutos en la región metropolitana. Simultáneamente, te contactamos a ti y, si es necesario, a Carabineros." },
    { pregunta: "¿Necesito firmar un contrato de permanencia?", respuesta: "En el Plan Residencial trabajamos mes a mes sin permanencia. En los planes Empresarial y Premium VIP recomendamos permanencia de 12 meses para acceder a las tarifas preferenciales, pero puedes cancelar con aviso previo de 30 días." },
    { pregunta: "¿Puedo ver mis cámaras desde el celular?", respuesta: "Sí. Todas nuestras instalaciones incluyen acceso a nuestra app móvil VigilPro, disponible para iOS y Android. Puedes ver las cámaras en vivo, recibir notificaciones, revisar grabaciones y armar/desarmar el sistema desde cualquier parte del mundo." },
    { pregunta: "¿Qué certificaciones tiene su personal?", respuesta: "Todo nuestro personal cuenta con la certificación OS-10 vigente (autorización de Carabineros para desempeño en seguridad privada), además de cursos continuos de actualización, primeros auxilios y manejo de conflictos. Los supervisores cuentan además con certificación ISO 28000." }
  ]
};

if (typeof window !== "undefined") {
  window.VIGILPRO = VIGILPRO;
}