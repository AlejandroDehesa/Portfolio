export const profile = {
  name: "Alejandro Dehesa Delgado",
  initials: "ADD",
  location: "Palma de Mallorca, España",
  email: "alejandrodehesadelgado@gmail.com",
  role: "Desarrollador Software Junior",
  headline:
    "Desarrollador junior con foco en backend, Java, datos, AWS S3 e inteligencia artificial aplicada.",
  summary:
    "Entiendo el desarrollo como algo más que escribir código: analizar bien el problema, diseñar una estructura clara y construir soluciones que puedan mantenerse y evolucionar.\n\nActualmente estoy centrado en mejorar mi criterio técnico, mi base backend con Java y FastAPI, y la calidad de los proyectos que presento.",
  links: {
    github: "https://github.com/AlejandroDehesa",
    linkedin: "https://www.linkedin.com/in/alejandro-dehesa-delgado-48152538a/",
    cv: "/cv-alejandro-dehesa-delgado.pdf",
  },
};

export const proofPoints = [
  "Java",
  "FastAPI",
  "React",
  "SQL",
  "Docker",
  "Android",
  "AWS S3",
  "IA aplicada",
];

export const projects = [
  {
    slug: "aegis",
    name: "Aegis",
    type: "Proyecto principal · Backend + IA aplicada",
    status: "Proyecto principal",
    accent: "01",
    cardType: "Proyecto principal · Backend + IA aplicada",
    cardStatus: "Proyecto principal",
    short:
      "Plataforma backend-first para crear, clasificar y ejecutar tareas mediante agentes especializados, con trazabilidad, gestión documental y recuperación de contexto mediante RAG.",
    problem:
      "Muchos asistentes de IA funcionan como chats genéricos. Aegis plantea una capa más estructurada: el usuario crea tareas, el sistema selecciona el agente adecuado, ejecuta el flujo y mantiene historial de resultados.",
    stack: ["Python", "FastAPI", "PostgreSQL", "SQLAlchemy", "Docker", "React", "IA / RAG"],
    highlights: [
      "API modular con FastAPI",
      "Clasificación y ejecución de tareas",
      "Agentes especializados",
      "RAG sobre documentos",
      "Persistencia y trazabilidad",
      "Docker y arquitectura preparada para evolución",
    ],
    features: [
      "Autenticación básica con JWT",
      "Catálogo fijo de agentes",
      "Creación y seguimiento de tareas",
      "Clasificación, selección y ejecución de agente",
      "Estados, resultados e historial",
      "Frontend funcional para operar el sistema",
    ],
    architecture: ["React + Vite", "API FastAPI", "Agent Engine", "PostgreSQL", "Docker"],
    decisions: [
      "Arquitectura modular para separar autenticación, tareas, agentes y ejecución.",
      "Stack simple y defendible para un MVP profesional sin sobreingeniería.",
      "Evolución preparada hacia LangGraph cuando el dominio lo justifique.",
    ],
    visuals: ["Dashboard de tareas", "Detalle de ejecución", "Diagrama de arquitectura", "Historial de resultados"],
    learned:
      "Diseño de APIs, modelado de entidades, autenticación, estados de ejecución y explicación técnica de decisiones backend.",
    next:
      "Hardening de seguridad, tests más amplios, observabilidad básica, CI/CD y despliegue documentado.",
    interview:
      "Aegis demuestra que puedo construir un sistema backend con dominio propio, no solo un CRUD. La parte importante es cómo separo tareas, agentes, ejecución y resultados para que el sistema pueda evolucionar.",
    demo: "https://meticulous-grace-production-c68f.up.railway.app/login",
    github: "https://github.com/AlejandroDehesa/Aegis",
  },
  {
    slug: "budgetwise",
    name: "BudgetWise",
    type: "Producto digital · App de finanzas",
    status: "Producto app",
    accent: "03",
    cardType: "Producto digital · App de finanzas",
    cardStatus: "Producto app",
    cardShort:
      "Aplicación de gestión financiera personal enfocada en registrar movimientos, visualizar hábitos de gasto y construir una base sólida para futuras funcionalidades inteligentes.",
    short:
      "Aplicación Android para controlar gastos y presupuestos con una experiencia moderna y una arquitectura clara.",
    problem:
      "Muchos usuarios necesitan entender su dinero sin herramientas complejas. BudgetWise convierte ingresos, gastos y presupuestos en una experiencia móvil simple y visual.",
    stack: ["Android", "Java/Kotlin", "UI", "Arquitectura mobile", "Producto"],
    highlights: [
      "Arquitectura de app",
      "Gestión de estado y datos",
      "Interfaz orientada a producto",
      "Base preparada para IA financiera",
      "Evolución futura hacia Open Banking",
    ],
    features: [
      "Registro de ingresos y gastos",
      "Categorías y presupuestos",
      "Resumen visual del estado financiero",
      "Pantallas Compose reutilizables",
      "Persistencia local",
      "Base preparada para reglas de IA mínima",
    ],
    architecture: ["Compose UI", "ViewModel", "Repository", "Local DB", "Rules Engine"],
    decisions: [
      "Separar UI, estado y datos para poder evolucionar sin romper la app.",
      "Priorizar una v1 estable antes de añadir IA u Open Banking.",
      "Mantener una arquitectura educativa y entendible, no artificialmente compleja.",
    ],
    visuals: ["Home financiera", "Formulario de gasto", "Resumen mensual", "Vista de presupuesto"],
    learned:
      "Arquitectura Android, pensamiento de producto, persistencia local y diseño incremental de funcionalidades.",
    next:
      "Finalizar la versión estable, añadir IA basada en reglas y estudiar integración Open Banking con datos reales.",
    interview:
      "BudgetWise refuerza mi perfil porque enseña que también puedo trabajar producto móvil, organizar pantallas, estado y persistencia, y pensar en una evolución técnica realista.",
    demo: "https://drive.google.com/file/d/1BDERLykgtElZlBjVytXc0LqW8HXufDy0/view?usp=sharing",
    github: "https://github.com/AlejandroDehesa/BudgetWise-Backend",
    appGithub: "https://github.com/AlejandroDehesa/Budget-Wise-App",
  },
  {
    slug: "sharedvault",
    name: "SharedVault",
    type: "Cloud · AWS S3 · Proyecto en desarrollo",
    status: "En desarrollo",
    accent: "04",
    cardType: "Cloud · AWS S3 · Proyecto en desarrollo",
    cardStatus: "En desarrollo",
    short:
      "Plataforma de álbumes privados compartidos para subir fotos y vídeos, gestionar permisos y compartir acceso mediante enlaces seguros, usando almacenamiento privado en AWS S3.",
    problem:
      "Compartir archivos privados exige controlar permisos, caducidad de acceso y almacenamiento seguro. SharedVault plantea una base cloud para practicar storage privado, enlaces firmados y validación de archivos sin venderlo como producto terminado.",
    stack: ["Backend", "AWS S3", "Storage privado", "URLs firmadas", "Permisos", "Producto cloud"],
    highlights: [
      "Álbumes privados",
      "Subida de fotos y vídeos",
      "Permisos por enlace",
      "AWS S3 con buckets privados",
      "URLs firmadas",
      "Validación de archivos",
    ],
    features: [
      "Álbumes privados en desarrollo",
      "Subida de fotos y vídeos en roadmap",
      "Permisos por enlace",
      "Storage privado con AWS S3",
      "URLs firmadas",
      "Validación de archivos",
    ],
    architecture: ["Backend", "API de archivos", "AWS S3 privado", "URLs firmadas", "Permisos"],
    decisions: [
      "Trabajar almacenamiento privado en AWS S3 como señal cloud realista.",
      "Separar subida, permisos y entrega segura de archivos desde el diseño inicial.",
      "Presentarlo como proyecto en desarrollo para no sobredimensionar su estado actual.",
    ],
    visuals: ["Flujo de subida", "Álbum privado", "Permisos por enlace", "Entrega con URL firmada"],
    learned:
      "Diseño inicial de producto cloud, permisos, almacenamiento privado y criterios de seguridad para archivos.",
    next:
      "Construir la primera versión funcional con backend, bucket privado, validaciones y generación de URLs firmadas.",
    interview:
      "SharedVault muestra hacia dónde estoy ampliando mi perfil: backend aplicado a cloud, almacenamiento privado y decisiones de seguridad sobre archivos. Está en desarrollo y lo presento como evolución profesional, no como producto terminado.",
    demo: "#",
    github: "#",
  },
];

export const secondaryProjects = [
  "Aurora / Nexus · Asistente RAG con memoria, documentos y voz",
  "PulseGym · Plataforma de gestión para gimnasios locales",
  "Sistema de gestión documental inteligente · Clasificación, logs, backups y búsqueda",
];

export const techGroups = [
  {
    title: "Backend",
    items: ["Java", "Python", "FastAPI", "Node.js", "Express", "REST APIs", "Pydantic", "SQLAlchemy"],
  },
  {
    title: "Bases de datos",
    items: ["PostgreSQL", "SQLite", "MongoDB", "ChromaDB", "Modelado de datos"],
  },
  {
    title: "Frontend",
    items: ["React", "Vite", "HTML", "CSS", "Responsive UI", "Accesibilidad básica"],
  },
  {
    title: "Mobile",
    items: ["Android", "Kotlin", "Java", "Jetpack Compose", "MVVM"],
  },
  {
    title: "IA aplicada",
    items: ["RAG", "Agentes", "Embeddings", "Prompts", "Evaluación de respuestas"],
  },
  {
    title: "Cloud y calidad",
    items: ["Docker", "AWS S3", "Git", "GitHub", "Testing", "CI/CD en roadmap"],
  },
];

export const stackAreas = [
  {
    title: "Backend",
    tone: "backend",
    icon: "code",
    level: "Principal",
    items: ["Java", "Python", "FastAPI", "REST APIs", "Pydantic", "SQLAlchemy 2.0", "JWT / Auth"],
  },
  {
    title: "Datos",
    tone: "data",
    icon: "database",
    level: "Aplicado",
    items: ["PostgreSQL", "SQLite", "Room", "SQLAlchemy", "MongoDB", "Modelado de datos"],
  },
  {
    title: "Mobile",
    tone: "mobile",
    icon: "phone",
    level: "Aplicado",
    items: ["Android", "Java", "Kotlin", "Jetpack Compose", "MVVM", "Room"],
  },
  {
    title: "Frontend",
    tone: "frontend",
    icon: "screen",
    level: "Funcional",
    items: ["React", "Vite", "CSS", "React Router", "Responsive UI"],
  },
  {
    title: "IA aplicada",
    tone: "ai",
    icon: "spark",
    level: "MVP propio",
    items: ["RAG básico", "Agentes", "Embeddings", "Clasificación", "Evaluación de respuestas"],
  },
  {
    title: "DevOps & Cloud",
    tone: "devops",
    icon: "cloud",
    level: "En aprendizaje",
    items: ["Docker", "Git & GitHub", "Railway", "AWS S3", "Testing básico", "CI/CD en roadmap"],
  },
];

export const appliedTechProjects = [
  {
    title: "Aegis",
    technologies: ["Python", "FastAPI", "PostgreSQL", "Docker", "React", "IA / RAG"],
    text: "Plataforma backend-first para orquestar agentes de IA, gestionar tareas, ejecuciones e historial.",
  },
  {
    title: "BudgetWise",
    technologies: ["Android", "Java/Kotlin", "Jetpack Compose", "Room", "API"],
    text: "App Android de finanzas personales con persistencia local, reportes y backend propio.",
  },
  {
    title: "Portfolio",
    technologies: ["React", "Vite", "CSS", "React Router"],
    text: "Sitio web personal con casos de estudio, rutas, componentes reutilizables y diseño responsive.",
  },
  {
    title: "Herramientas",
    technologies: ["GitHub", "Docker", "Railway", "Testing"],
    text: "Herramientas de desarrollo, versionado, despliegue inicial y validación básica.",
  },
];

export const hiringSignals = [
  {
    title: "Claridad técnica",
    text: "Cada proyecto explica problema, arquitectura, decisiones, stack y siguiente versión.",
  },
  {
    title: "Ejecución completa",
    text: "La web prioriza proyectos con producto, backend, datos, interfaz, documentación y evolución.",
  },
  {
    title: "Ambición creíble",
    text: "El mensaje evita claims inflados y se centra en crecimiento, criterio y trabajo serio de junior.",
  },
];
