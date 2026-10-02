/*
 * Spanish (Spain). Formal register ("usted"). Have a native speaker review
 * before launch; keys must match en.js exactly.
 */
const es = {
  meta: {
    title: 'CS Development Technologies | Investigación e ingeniería en IA aplicada',
    description:
      'Investigación e ingeniería en IA aplicada para salud, agricultura, sistemas industriales, seguridad y tecnologías del lenguaje, desde el primer experimento hasta el sistema en producción.',
    ogDescription: 'Investigación e ingeniería en IA aplicada, desde el primer experimento hasta el sistema en producción.',
  },

  common: {
    skip: 'Ir al contenido',
    bookConsultation: 'Solicitar una consulta',
    home: 'CS Development Technologies, inicio',
    openMenu: 'Abrir menú',
    closeMenu: 'Cerrar menú',
    language: 'Idioma',
    themeToLight: 'Cambiar a tema claro',
    themeToDark: 'Cambiar a tema oscuro',
    themeSwitch: 'Cambiar tema',
    opensNewTab: 'se abre en una pestaña nueva',
  },

  nav: {
    about: 'Nosotros',
    research: 'Investigación',
    services: 'Servicios',
    products: 'Productos',
    events: 'Eventos',
    contact: 'Contacto',
    allResearch: 'Ver todas las áreas de investigación',
    allServices: 'Ver todos los servicios',
    allProducts: 'Ver todos los productos',
  },

  hero: {
    badge: 'Ingeniería guiada por la investigación',
    titleStart: 'Investigación e ingeniería en IA aplicada,',
    titleEnd: 'desde el primer experimento hasta el',
    titleEmphasis: 'sistema en producción.',
    lede:
      'CS Development Technologies trabaja en salud, agricultura, sistemas industriales, seguridad y tecnologías del lenguaje, desarrollando modelos, flujos de datos y software capaces de superar un examen riguroso.',
    primary: 'Solicitar una consulta',
    secondary: 'Ver nuestras áreas de investigación',
    marqueeLabel: 'Dónde trabajamos',
  },

  about: {
    badge: 'Nosotros',
    title: 'Un socio de investigación e ingeniería.',
    paragraphs: [
      'CS Development Technologies es una empresa de investigación e ingeniería aplicada con sede en Pune, India. Nuestro equipo ha contribuido a trabajos en imagen médica, detección de enfermedades en cultivos, diagnóstico de fallos industriales, seguridad de redes, aprendizaje federado e IA para lenguas regionales.',
      'Trabajamos donde la investigación se encuentra con la ingeniería: diseñamos el experimento, preparamos los datos, construimos y validamos el modelo, y lo convertimos en software que la gente puede usar. Un solo equipo lleva el proyecto desde la primera conversación hasta una entrega documentada.',
      'Somos claros sobre lo que hacemos y lo que no. Nuestro apoyo a la investigación es de asesoramiento: orientamos, revisamos, desarrollamos y enseñamos. Las ideas, las decisiones y la autoría siempre pertenecen a nuestros clientes.',
    ],
    processTitle: 'Cómo se desarrolla un proyecto',
    process: [
      { title: 'Consulta', text: 'Hablamos de sus objetivos, limitaciones y plazos.' },
      { title: 'Propuesta por escrito', text: 'Recibe un alcance con entregables, hitos y un presupuesto.' },
      { title: 'Entrega por hitos', text: 'El trabajo se revisa con usted en cada punto de control.' },
      { title: 'Entrega y soporte', text: 'Entregamos el trabajo con su documentación y seguimos disponibles para sus preguntas.' },
    ],
    principles: [
      { title: 'Alcance por escrito', text: 'Los entregables, plazos y costes se acuerdan antes de empezar.' },
      { title: 'Confidencialidad', text: 'El material del cliente se trata de forma confidencial. Firmamos acuerdos de confidencialidad si se solicitan.' },
      { title: 'Integridad académica', text: 'El apoyo a la investigación es de asesoramiento. Nunca presentamos trabajos en nombre de nadie.' },
      { title: 'Entrega documentada', text: 'Recibe el trabajo, su documentación y lo necesario para mantenerlo.' },
    ],
  },

  research: {
    badge: 'Áreas de investigación',
    title: 'Siete áreas, un mismo nivel de rigor.',
    description:
      'Nuestro equipo ha contribuido a proyectos de investigación y desarrollo aplicados en estos campos. Los trabajos para clientes se describen solo por temática; los resultados pertenecen a nuestros clientes.',
    areas: {
      health: {
        title: 'IA médica y sanitaria',
        description: 'Modelos de diagnóstico basados en imágenes clínicas, señales y datos de pacientes.',
        topics: [
          'Diagnóstico con radiografías dentales',
          'Detección de cáncer de pulmón',
          'Cribado del autismo',
          'Riesgo de diabetes gestacional',
          'Riesgo cardíaco a partir de wearables y ECG',
        ],
      },
      agriculture: {
        title: 'Agricultura e inteligencia de cultivos',
        description: 'Desde la fotografía de una sola hoja hasta los cultivos de toda una región.',
        topics: [
          'Detección temprana de enfermedades en el granado',
          'Detección de plagas en la vid',
          'Reconstrucción 3D de hojas a partir de imágenes 2D',
          'Predicción de enfermedades a partir de nutrientes del suelo',
          'Previsión de humedad del suelo e idoneidad de cultivos',
        ],
      },
      industrial: {
        title: 'IA industrial y en el borde',
        description: 'Inteligencia que funciona donde están las máquinas y las redes.',
        topics: [
          'Detección de fallos en maquinaria industrial',
          'Aprendizaje en enjambre que comparte el conocimiento de fallos entre máquinas',
          'Modelos inspirados en el sistema inmunitario',
          'Descarga de tareas entre dispositivo, borde y nube en 5G',
        ],
      },
      privacy: {
        title: 'Aprendizaje federado y preservación de la privacidad',
        description: 'Entrenar modelos entre instituciones sin mover datos sensibles.',
        topics: ['Aprendizaje federado en salud', 'Privacidad basada en criptografía', 'Agregación segura de modelos'],
      },
      security: {
        title: 'Analítica de ciberseguridad',
        description: 'Aprendizaje automático que detecta amenazas en el momento en que ocurren.',
        topics: ['Detección de botnets en tiempo real', 'Análisis del comportamiento de usuarios y entidades', 'Seguridad en transacciones de criptomonedas'],
      },
      earth: {
        title: 'Observación de la Tierra y riesgo climático',
        description: 'Datos de satélite y ambientales convertidos en decisiones.',
        topics: ['Predicción de inundaciones en regiones de la India', 'Cartografía de cultivos con imágenes de satélite', 'Reanálisis climático para modelos de suelo'],
      },
      language: {
        title: 'IA del lenguaje, el habla y multimodal',
        description: 'IA que funciona en los idiomas que la gente realmente habla.',
        topics: [
          'Modelos de traducción para hindi y maratí',
          'Búsqueda multimodal en lenguas de la India',
          'Reconocimiento de emociones en el habla',
          'Resumen automático de vídeo',
        ],
      },
    },
    methods: {
      title: 'Métodos que aplicamos en todas las áreas',
      description: 'La misma disciplina de validación, sea cual sea el campo.',
      items: [
        'Visión por computador',
        'Previsión de series temporales',
        'Procesamiento del lenguaje natural',
        'IA explicable',
        'Auditorías de fuga de datos',
        'Pruebas de significación estadística',
        'Intervalos de incertidumbre',
        'Despliegue en el borde',
      ],
    },
    discuss: 'Proponer una colaboración de investigación',
  },

  features: {
    models: {
      badge: 'Modelos de aprendizaje automático',
      title: 'Modelos a medida según sus requisitos.',
      text: 'Modelos a medida según sus requisitos, evaluados con métricas claras y desplegados donde se necesitan, con documentación sobre cómo se entrenaron.',
      cta: 'Solicitar una consulta',
      aria: 'Diagrama de una red neuronal que se construye capa a capa, desde los datos y las características hasta las capas ocultas y la salida.',
      diagram: ['datos', 'rasgos', 'capas', 'salida'],
    },
    data: {
      badge: 'Ingeniería de datos',
      title: 'Recopilar, limpiar y estructurar datos.',
      text: 'Recopilamos, limpiamos y estructuramos datos, los analizamos con métodos adecuados a la pregunta y presentamos los resultados con claridad.',
      cta: 'Ver nuestros servicios',
      aria: 'Diagrama de un flujo de datos que se construye solo: entran filas sin procesar, pasan por las etapas de recogida, limpieza, validación y análisis, y salen ordenadas.',
      stages: [
        { label: 'recoger', sub: 'fuentes' },
        { label: 'limpiar', sub: 'nulos, tipos' },
        { label: 'validar', sub: 'esquema' },
        { label: 'analizar', sub: 'resultados' },
      ],
    },
    prototypes: {
      badge: 'Desarrollo de modelos físicos',
      title: 'Modelos tangibles para el aprendizaje real.',
      text: 'Modelos físicos funcionales, desde mecanismos robóticos hasta kits educativos de ciencias sobre la gravedad, las matemáticas, los circuitos y más, construidos a medida para aulas, laboratorios, exposiciones y demostraciones.',
      cta: 'Solicitar una consulta',
      aria: 'Diagrama de un brazo robótico con engranajes, articulaciones y cotas que se ensambla solo, en representación del desarrollo de modelos físicos.',
      labels: ['motor', 'junta A', 'efector'],
    },
  },

  services: {
    badge: 'Servicios',
    title: 'Cómo trabajamos con usted.',
    description:
      'Un proyecto puede combinar varios servicios, por ejemplo la preparación de datos seguida de un análisis y un informe técnico.',
    items: {
      'svc-research': {
        title: 'Asesoramiento en investigación y metodología',
        short: 'Diseño del estudio, métodos y tutorización',
        description:
          'Orientación para investigadores y equipos sobre cómo plantear preguntas, elegir métodos y planificar estudios que resistan un examen riguroso. Asesoramos y acompañamos; la investigación y sus conclusiones son suyas.',
        points: [
          'Revisión del estado del arte e identificación de lagunas',
          'Diseño de la investigación y elección de la metodología',
          'Planificación experimental y estadística',
          'Sesiones de tutorización y revisiones de avance',
        ],
      },
      'svc-writing': {
        title: 'Apoyo en redacción académica y técnica',
        short: 'Edición, estructura y formato',
        description:
          'Apoyo editorial que mejora la claridad, la estructura y la presentación de manuscritos, propuestas e informes, mientras el contenido y la autoría siguen siendo suyos.',
        points: [
          'Edición estructural y lingüística',
          'Referencias y formato según estilos como APA e IEEE',
          'Adaptación a las normas de revistas y congresos',
          'Corrección de pruebas y revisión de coherencia',
        ],
      },
      'svc-implementation': {
        title: 'Ingeniería de sistemas e implementación',
        short: 'Prototipos, integración y despliegue',
        description:
          'Diseño, integración y despliegue de sistemas de software y hardware, desde prototipos y simulaciones hasta entornos de producción.',
        points: [
          'Arquitectura y diseño técnico',
          'Prototipos, simulaciones y montajes experimentales',
          'Integración de hardware, software y servicios de terceros',
          'Despliegue, pruebas y entrega',
        ],
      },
      'svc-data': {
        title: 'Ingeniería y análisis de datos',
        short: 'Preparación, análisis e informes',
        description:
          'Recopilamos, limpiamos y estructuramos datos, los analizamos con métodos adecuados a la pregunta y presentamos los resultados con claridad.',
        points: [
          'Planes de recogida de datos y flujos de datos',
          'Limpieza, transformación y validación',
          'Análisis y modelización estadística',
          'Visualización e interpretación de resultados',
        ],
      },
      'svc-docs': {
        title: 'Documentación técnica',
        short: 'Especificaciones, manuales y guías',
        description:
          'Documentación precisa de sistemas, software y procesos, escrita para quienes los van a usar y mantener.',
        points: [
          'Documentación de sistemas y arquitectura',
          'Referencias de API y guías para desarrolladores',
          'Manuales de usuario y procedimientos normalizados de trabajo',
          'Informes de proyecto y especificaciones técnicas',
        ],
      },
      'svc-review': {
        title: 'Revisión y validación técnica',
        short: 'Comprobación independiente de código y resultados',
        description:
          'Una revisión independiente de código, modelos, experimentos y resultados, entregada como informe escrito con los hallazgos y las correcciones recomendadas.',
        points: [
          'Revisión de código y arquitectura',
          'Comprobación de la reproducibilidad de experimentos y análisis',
          'Evaluación de modelos y pruebas de rendimiento',
          'Informe escrito con recomendaciones priorizadas',
        ],
      },
    },
    notListedBefore: '¿Necesita algo que no aparece en la lista?',
    notListedLink: 'Descríbalo en una consulta',
    notListedAfter: 'y le diremos con franqueza si podemos ayudarle.',
  },

  products: {
    badge: 'Productos',
    title: 'Software a la medida de sus especificaciones.',
    description:
      'Desarrollamos en cuatro ámbitos. Cuéntenos qué necesita y definiremos el alcance con usted, tanto si es una primera versión como si se trata de ampliar un sistema que ya utiliza.',
    typicalWork: 'Trabajos habituales',
    items: {
      'prod-mobile': {
        title: 'Aplicaciones móviles',
        short: 'Aplicaciones nativas y multiplataforma',
        description:
          'Aplicaciones nativas para Android e iOS, y aplicaciones multiplataforma con un único código para ambas, pensadas para funcionar de forma fiable en dispositivos y redes reales.',
        points: ['Aplicaciones para clientes y socios', 'Recogida de datos de campo sin conexión', 'Aplicaciones complementarias para hardware y dispositivos IoT'],
        cta: 'Hablar de una aplicación móvil',
      },
      'prod-web': {
        title: 'Plataformas web',
        short: 'Portales, paneles y aplicaciones web',
        description:
          'Aplicaciones web, portales y paneles diseñados para crecer en usuarios y datos, con acceso seguro y un código fácil de mantener.',
        points: ['Portales para clientes y socios', 'Paneles de administración y herramientas internas', 'Sitios corporativos con gestor de contenidos'],
        cta: 'Hablar de una plataforma web',
      },
      'prod-software': {
        title: 'Software empresarial',
        short: 'Sistemas de escritorio y en la nube',
        description:
          'Sistemas de escritorio y en la nube hechos a medida, que se adaptan a la forma de trabajar de cada organización y se conectan con las herramientas que ya utiliza.',
        points: ['Automatización de flujos de trabajo y procesos', 'Sistemas de inventario, facturación e informes', 'Integración entre sistemas existentes'],
        cta: 'Hablar de software empresarial',
      },
      'prod-ml': {
        title: 'Modelos de aprendizaje automático',
        short: 'Modelos a medida, de los datos al despliegue',
        description:
          'Modelos a medida construidos con sus datos, evaluados con métricas claras y desplegados donde se necesitan, con documentación sobre cómo se entrenaron.',
        points: ['Clasificación y predicción', 'Visión por computador y procesamiento del lenguaje natural', 'Despliegue y monitorización de modelos'],
        cta: 'Hablar de un modelo de aprendizaje automático',
      },
    },
  },

  events: {
    badge: 'Eventos',
    title: 'Reunir a las personas más allá del trabajo.',
    description:
      'Además de nuestro trabajo técnico, estamos preparando un programa de eventos para estudiantes, profesionales y comunidades.',
    note: 'Este programa aún no ha comenzado y no hay fechas anunciadas. Registre su interés y le avisaremos cuando se confirme el primer evento.',
    cta: 'Registrar mi interés',
    planned: 'Previsto',
    items: [
      { title: 'Torneos deportivos', description: 'Torneos universitarios y de empresa en deportes de equipo e individuales.' },
      { title: 'Teatro y artes escénicas', description: 'Montajes teatrales y certámenes que dan un escenario a intérpretes y autores.' },
      { title: 'Talleres y seminarios técnicos', description: 'Sesiones prácticas sobre software, datos e investigación, impartidas por profesionales.' },
      { title: 'Veladas culturales', description: 'Música, danza y muestras culturales para comunidades y organizaciones colaboradoras.' },
    ],
  },

  faq: {
    title: 'Respuestas a sus preguntas',
    items: [
      {
        q: '¿Cómo se desarrolla un proyecto?',
        a: 'Empieza con una consulta sobre sus objetivos, limitaciones y plazos. Después le enviamos una propuesta por escrito con entregables, hitos y presupuesto. El trabajo comienza solo cuando usted la acepta, avanza por hitos con una revisión en cada punto de control y termina con una entrega documentada.',
      },
      {
        q: '¿Trabajan con clientes fuera de la India?',
        a: 'Sí. Trabajamos en remoto con organizaciones de otros países, nos comunicamos en inglés y programamos las reuniones para que coincidan con el horario laboral de Europa y Sudamérica.',
      },
      {
        q: '¿Redactan trabajos académicos o tesis en mi nombre?',
        a: 'No. Nuestros servicios de investigación y redacción son de asesoramiento, edición y formación. Orientamos la metodología, revisamos borradores, mejoramos la claridad y enseñamos técnicas, pero no elaboramos trabajos evaluables, exámenes, tesis ni trabajos de fin de grado o máster para que otra persona los presente como propios. Rechazamos o damos por terminado cualquier encargo cuando creemos que se usaría así.',
      },
      {
        q: '¿Mis datos son confidenciales?',
        a: 'Sí. El material que comparte se utiliza solo para su proyecto y se trata de forma confidencial. Si lo solicita, firmamos un acuerdo de confidencialidad antes de que comparta información sensible, y trabajamos con datos anonimizados siempre que el proyecto lo permite.',
      },
      {
        q: '¿Cómo obtengo un presupuesto?',
        a: 'Envíenos un pedido o una consulta mediante el formulario de contacto con una breve descripción de lo que necesita y cualquier plazo. Le responderemos para definir el alcance y después le enviaremos un presupuesto por escrito. No se factura nada hasta que acepte una propuesta.',
      },
      {
        q: '¿De quién es el trabajo al terminar el proyecto?',
        a: 'Salvo que el acuerdo diga otra cosa, la propiedad de los entregables creados específicamente para usted pasa a ser suya una vez recibido el pago completo. También recibe la documentación necesaria para mantenerlos.',
      },
    ],
  },

  contact: {
    badge: 'Contacto',
    title: 'Cuéntenos qué necesita.',
    description:
      'Haga un pedido, envíenos una pregunta o díganos qué le ha parecido nuestro trabajo. Para pedidos y consultas, le responderemos para hablar del alcance, los plazos y el precio.',
    email: 'Correo electrónico',
    phone: 'Teléfono',
    hoursLabel: 'Horario',
    hours: 'De lunes a sábado, de 10:00 a 18:00 (hora de la India)',
    office: 'Oficina',
    follow: 'Síganos',
  },

  form: {
    title: 'Envíenos un mensaje',
    requiredBefore: 'Los campos marcados con',
    requiredAfter: 'son obligatorios.',
    requiredSr: 'un asterisco',
    subject: 'Asunto',
    subjectPlaceholder: 'Seleccione un asunto',
    subjects: { order: 'Nuevo pedido', enquiry: 'Consulta general', feedback: 'Opinión' },
    chooseHint: 'Elija un asunto para ver los campos que debe completar.',
    name: 'Nombre completo',
    email: 'Correo electrónico',
    phone: 'Teléfono',
    phoneHint: 'Incluya el prefijo del país, por ejemplo +34 o +55.',
    organisation: 'Organización',
    optional: '(opcional)',
    orderInterest: 'Qué desea encargar',
    areaInterest: 'Área de interés',
    selectOption: 'Seleccione una opción',
    groups: { services: 'Servicios', products: 'Productos', research: 'Áreas de investigación', other: 'Otros' },
    otherOptions: {
      'Physical Model Development': 'Desarrollo de modelos físicos',
      'Events and programmes': 'Eventos y programas',
      'Something else': 'Otra cosa',
    },
    projectDetails: 'Detalles del proyecto',
    question: 'Su pregunta',
    messageHint: 'Los plazos, un rango de presupuesto o enlaces a trabajos existentes nos ayudan a responderle con precisión.',
    feedback: 'Su opinión',
    counter: '{count} de {max} caracteres',
    consentBefore: 'Acepto que CS Development Technologies utilice estos datos para responder a mi mensaje, tal como se describe en la',
    consentLink: 'Política de privacidad',
    honeypot: 'Deje este campo vacío',
    submit: { order: 'Enviar pedido', enquiry: 'Enviar consulta', feedback: 'Enviar opinión' },
    sending: 'Enviando',
    sentNoun: { order: 'pedido', enquiry: 'consulta', feedback: 'opinión' },
    success:
      'Gracias, {name}. Hemos recibido su mensaje ({kind}). Le estamos enviando una confirmación a {email} y le responderemos desde allí.',
    error: 'No se ha podido enviar su mensaje. Compruebe su conexión e inténtelo de nuevo, o escríbanos a {email}.',
    mailto:
      'Su aplicación de correo debería abrirse con su mensaje ({kind}) ya redactado. Pulse enviar allí para completarlo. Si no se ha abierto, escríbanos directamente a {email}.',
    errors: {
      subject: 'Seleccione un asunto.',
      nameRequired: 'Introduzca su nombre completo.',
      nameShort: 'El nombre debe tener al menos 2 caracteres.',
      nameLong: 'El nombre no puede superar los 100 caracteres.',
      emailRequired: 'Introduzca su correo electrónico.',
      emailInvalid: 'Introduzca un correo electrónico válido, por ejemplo nombre@empresa.com.',
      feedbackRequired: 'Escriba su opinión.',
      feedbackShort: 'La opinión debe tener al menos 10 caracteres.',
      feedbackLong: 'La opinión no puede superar los {max} caracteres.',
      phoneRequired: 'Introduzca su número de teléfono.',
      phoneInvalid: 'Introduzca un teléfono válido, con el prefijo del país.',
      interestOrder: 'Seleccione qué desea encargar.',
      interestEnquiry: 'Seleccione un área de interés.',
      messageLong: 'El mensaje no puede superar los {max} caracteres.',
      consent: 'Marque la casilla para aceptar antes de enviar.',
    },
  },

  footer: {
    ctaTitle: '¿Definimos el alcance de su',
    ctaEmphasis: 'proyecto?',
    ctaText: 'Antes de empezar recibirá por escrito el alcance, los entregables, los hitos y un presupuesto.',
    primary: 'Solicitar una consulta',
    secondary: 'Ver nuestras áreas de investigación',
    tagline: 'Investigación e ingeniería en IA aplicada, con un alcance por escrito y una entrega documentada.',
    company: 'Empresa',
    work: 'Trabajo',
    legal: 'Legal',
    about: 'Nosotros',
    research: 'Áreas de investigación',
    events: 'Eventos',
    contact: 'Contacto',
    services: 'Servicios',
    products: 'Productos',
    order: 'Hacer un pedido',
    privacy: 'Política de privacidad',
    terms: 'Términos y condiciones',
    rights: 'Todos los derechos reservados.',
  },

  legal: {
    back: 'Volver al inicio',
    lastUpdated: 'Última actualización:',
    privacyTitle: 'Política de privacidad',
    termsTitle: 'Términos y condiciones',
    englishOnly:
      'Este documento solo está disponible en inglés. La versión en inglés es la única que tiene validez.',
  },

  notFound: {
    title: 'Esta página no existe.',
    text: 'Es posible que el enlace esté desactualizado. Vuelva a la página de inicio para encontrar lo que busca.',
    cta: 'Ir a la página de inicio',
  },
};

export default es;
