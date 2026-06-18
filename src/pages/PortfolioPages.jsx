import React from "react";
import { Link, Navigate, useParams } from "react-router-dom";
import Arrow from "../components/ui/Arrow";
import ExternalLink from "../components/ui/ExternalLink";
import SectionHeader from "../components/ui/SectionHeader";
import aegisShowcase from "../assets/aegis-showcase.png";
import aegisLogin from "../assets/aegis/aeegis1.png";
import aegisPanel from "../assets/aegis/aeegis2.png";
import aegisCreateTask from "../assets/aegis/aeegis3.png";
import aegisTaskList from "../assets/aegis/aeegis4.png";
import aegisTaskDetail from "../assets/aegis/aeegis6.png";
import aegisDocuments from "../assets/aegis/aeegis7.png";
import aegisInsights from "../assets/aegis/aeegis8.png";
import budgetWiseShowcase from "../assets/budgetwise-showcase.png";
import budgetWiseAddExpense from "../assets/budgetwise/budgetwise-add-expense.png";
import budgetWiseAddIncome from "../assets/budgetwise/budgetwise-add-income.png";
import budgetWiseCreateAccount from "../assets/budgetwise/budgetwise-create-account.png";
import budgetWiseDashboard from "../assets/budgetwise/budgetwise-dashboard.png";
import budgetWiseLogin from "../assets/budgetwise/budgetwise-login.png";
import budgetWiseMenu from "../assets/budgetwise/budgetwise-menu.png";
import budgetWiseReports from "../assets/budgetwise/budgetwise-reports.png";
import profilePhoto from "../assets/alejandro-portfolio.webp";
import aiLogo from "../assets/stack/ai-rag.png";
import androidLogo from "../assets/stack/android.png";
import dockerLogo from "../assets/stack/docker.png";
import fastApiLogo from "../assets/stack/fastapi.png";
import gitLogo from "../assets/stack/git.png";
import kotlinLogo from "../assets/stack/kotlin.png";
import postgresLogo from "../assets/stack/postgresql.png";
import pythonLogo from "../assets/stack/python.png";
import {
  appliedTechProjects,
  profile,
  projects,
  stackAreas,
} from "../data/portfolio";

const javaLogo = "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg";

const techHighlights = [
  { name: "Java", detail: "", icon: javaLogo },
  { name: "Python", detail: "", icon: pythonLogo },
  { name: "FastAPI", detail: "", icon: fastApiLogo },
  { name: "PostgreSQL", detail: "", icon: postgresLogo },
  { name: "Docker", detail: "", icon: dockerLogo },
  { name: "Git", detail: "", icon: gitLogo },
  { name: "Kotlin", detail: "", icon: kotlinLogo },
  { name: "Android", detail: "", icon: androidLogo },
  { name: "IA / RAG", detail: "", icon: aiLogo },
];

function ProjectCard({ project }) {
  const showcaseBySlug = {
    aegis: aegisShowcase,
    budgetwise: budgetWiseShowcase,
  };
  const showcase = showcaseBySlug[project.slug];

  return (
    <Link
      className={`project-card ${project.slug === "aegis" ? "project-card-featured" : ""}`}
      to={`/proyectos/${project.slug}`}
      aria-label={`Ver caso técnico de ${project.name}`}
    >
      {showcase && (
        <img className="project-showcase" src={showcase} alt={`Vista de ${project.name}`} />
      )}
      <div className="project-card-header">
        <span className="project-badge">{project.cardStatus || project.status}</span>
        <span className="project-type">{project.cardType || project.type}</span>
      </div>
      <h3>{project.name}</h3>
      <p>{project.cardShort || project.short}</p>
      {project.highlights && (
        <ul className="project-highlights" aria-label={`Puntos técnicos de ${project.name}`}>
          {project.highlights.slice(0, project.slug === "aegis" ? 6 : 5).map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      )}
      <div className="mini-stack" aria-label={`Stack de ${project.name}`}>
        {project.stack.slice(0, project.slug === "aegis" ? 7 : 5).map((item) => (
          <span key={item}>{item}</span>
        ))}
      </div>
      <span className="project-cta">Ver caso técnico <Arrow /></span>
    </Link>
  );
}

function ArchitectureFlow({ items }) {
  return (
    <div className="architecture-flow" aria-label="Flujo de arquitectura">
      {items.map((item, index) => (
        <React.Fragment key={item}>
          <span>{item}</span>
          {index < items.length - 1 && <strong aria-hidden="true">→</strong>}
        </React.Fragment>
      ))}
    </div>
  );
}

function CaseStudy({ project }) {
  return (
    <article className="case-study">
      <div className="case-title">
        <span>{project.accent}</span>
        <div>
          <p className="eyebrow">Caso de estudio</p>
          <h1 className="case-heading">{project.name}</h1>
          <p>{project.short}</p>
        </div>
      </div>

      <div className="case-grid">
        <div className="case-block case-block-wide">
          <h4>Problema que resuelve</h4>
          <p>{project.problem}</p>
        </div>

        <div className="case-block">
          <h4>Funcionalidades principales</h4>
          <ul>
            {project.features.map((feature) => (
              <li key={feature}>{feature}</li>
            ))}
          </ul>
        </div>

        <div className="case-block">
          <h4>Decisiones técnicas</h4>
          <ul>
            {project.decisions.map((decision) => (
              <li key={decision}>{decision}</li>
            ))}
          </ul>
        </div>

        <div className="case-block case-block-wide">
          <h4>Arquitectura resumida</h4>
          <ArchitectureFlow items={project.architecture} />
        </div>

        <div className="case-block">
          <h4>Visuales recomendados</h4>
          <div className="visual-list">
            {project.visuals.map((visual) => (
              <span key={visual}>{visual}</span>
            ))}
          </div>
        </div>

        <div className="case-block">
          <h4>Stack tecnológico</h4>
          <div className="mini-stack mini-stack-compact">
            {project.stack.map((item) => (
              <span key={item}>{item}</span>
            ))}
          </div>
        </div>

        <div className="case-block">
          <h4>Qué aprendí</h4>
          <p>{project.learned}</p>
        </div>

        <div className="case-block">
          <h4>Siguiente versión</h4>
          <p>{project.next}</p>
        </div>

        <div className="case-block case-block-wide interview-block">
          <h4>Cómo lo explicaría en una entrevista</h4>
          <p>{project.interview}</p>
          <div className="case-actions">
            <ExternalLink href={project.demo} variant="primary">
              {project.demo === "#" ? "Demo próximamente" : "Ver demo"}
            </ExternalLink>
            <ExternalLink href={project.github}>
              {project.github === "#" ? "Repositorio próximamente" : "Repositorio"}
            </ExternalLink>
          </div>
        </div>
      </div>
    </article>
  );
}

function AegisMockup({ project }) {
  const slides = [
    {
      src: aegisLogin,
      alt: "Pantalla de acceso de Aegis",
      label: "Acceso",
      description: "Entrada al sistema con autenticación y cuenta demo preparada para revisar el flujo.",
    },
    {
      src: aegisPanel,
      alt: "Panel principal de Aegis",
      label: "Panel",
      description: "Centro de control con métricas, ruta demo recomendada y accesos a las vistas clave.",
    },
    {
      src: aegisCreateTask,
      alt: "Formulario para crear tareas en Aegis",
      label: "Crear tarea",
      description: "Formulario para enviar solicitudes estructuradas al backend y activar la orquestación.",
    },
    {
      src: aegisTaskList,
      alt: "Listado de tareas de Aegis",
      label: "Tareas",
      description: "Listado operativo para filtrar ejecuciones, revisar estados y abrir resultados.",
    },
    {
      src: aegisTaskDetail,
      alt: "Detalle de tarea ejecutada en Aegis",
      label: "Detalle",
      description: "Vista de metadatos, entrada original y estado de una ejecución concreta.",
    },
    {
      src: aegisDocuments,
      alt: "Biblioteca de documentos de Aegis",
      label: "Documentos",
      description: "Gestión de contexto documental para enriquecer futuras ejecuciones.",
    },
    {
      src: aegisInsights,
      alt: "Panel de insights de calidad de Aegis",
      label: "Insights",
      description: "Vista de calidad para detectar ejecuciones fuertes, fallos y resultados pendientes de valoración.",
    },
  ];
  const [activeSlide, setActiveSlide] = React.useState(0);
  const currentSlide = slides[activeSlide];

  const goToPrevious = () => {
    setActiveSlide((index) => (index === 0 ? slides.length - 1 : index - 1));
  };

  const goToNext = () => {
    setActiveSlide((index) => (index === slides.length - 1 ? 0 : index + 1));
  };
  const demoIsExternal = project.demo.startsWith("http");
  const repoIsExternal = project.github.startsWith("http");
  const hasDemo = project.demo !== "#";
  const hasRepo = project.github !== "#";

  return (
    <div className="aegis-visual-panel">
      <div className="aegis-carousel" aria-label="Carrusel de capturas de Aegis">
        <div className="aegis-carousel-frame">
          <img src={currentSlide.src} alt={currentSlide.alt} />
          {slides.length > 1 && (
            <>
              <button className="aegis-carousel-control prev" type="button" onClick={goToPrevious} aria-label="Imagen anterior de Aegis">
                ←
              </button>
              <button className="aegis-carousel-control next" type="button" onClick={goToNext} aria-label="Imagen siguiente de Aegis">
                →
              </button>
            </>
          )}
        </div>
        <div className="aegis-carousel-footer">
        <div>
          <span>{currentSlide.label}</span>
          <p>{currentSlide.description}</p>
        </div>
          <div className="aegis-carousel-dots" aria-label="Imágenes disponibles">
            {slides.map((slide, index) => (
              <button
                className={index === activeSlide ? "active" : undefined}
                type="button"
                key={slide.label}
                onClick={() => setActiveSlide(index)}
                aria-label={`Ver captura ${index + 1}: ${slide.label}`}
                aria-current={index === activeSlide ? "true" : undefined}
              />
            ))}
          </div>
        </div>
      </div>
      <div className="aegis-carousel-actions">
        <a
          className={`button aegis-gradient-button ${!hasDemo ? "is-disabled" : ""}`}
          href={project.demo}
          target={demoIsExternal ? "_blank" : undefined}
          rel={demoIsExternal ? "noreferrer" : undefined}
          aria-disabled={!hasDemo ? "true" : undefined}
          onClick={(event) => {
            if (!hasDemo) event.preventDefault();
          }}
        >
          {hasDemo ? "Ver demo" : "Demo próximamente"} <Arrow />
        </a>
        <a
          className={`button aegis-gradient-button ${!hasRepo ? "is-disabled" : ""}`}
          href={project.github}
          target={repoIsExternal ? "_blank" : undefined}
          rel={repoIsExternal ? "noreferrer" : undefined}
          aria-disabled={!hasRepo ? "true" : undefined}
          onClick={(event) => {
            if (!hasRepo) event.preventDefault();
          }}
        >
          Repositorio <Arrow />
        </a>
      </div>
    </div>
  );
}

function AegisCaseStudy({ project }) {
  const executionFlow = [
    ["Crear tarea", "El usuario define una solicitud desde el dashboard."],
    ["Validar datos", "FastAPI y Pydantic validan la entrada antes de procesarla."],
    ["Clasificar intención", "El sistema analiza el tipo de tarea y determina qué necesita."],
    ["Ejecutar agente", "Aegis selecciona el agente más adecuado y ejecuta el flujo."],
    ["Guardar resultado", "El resultado queda almacenado con estado, historial y trazabilidad."],
  ];
  const techStack = [
    ["Backend", "Python, FastAPI, routers separados, servicios de dominio, Pydantic para validación y respuestas tipadas."],
    ["Persistencia", "PostgreSQL, SQLAlchemy 2.0, modelos relacionales, sesiones de base de datos y almacenamiento de tareas/resultados."],
    ["Autenticación", "JWT, rutas privadas, control de sesión, hashing de credenciales y separación entre usuario y ejecución."],
    ["Frontend", "React, Vite, vistas funcionales, formularios controlados, estados de carga y navegación entre paneles."],
    ["Orquestación IA", "Clasificación de intención, selección de agente, ejecución controlada, estados e historial trazable."],
    ["Infraestructura", "Docker, variables de entorno, configuración reproducible y despliegue preparado en Railway."],
  ];
  const technicalProof = [
    ["Backend real", "API organizada con rutas, servicios, esquemas y persistencia."],
    ["Dominio propio", "Tareas, agentes, ejecuciones, estados e historial explican un sistema con reglas propias."],
    ["IA aplicada con control", "No es solo un chat: hay clasificación, selección y ejecución trazable."],
    ["Producto operable", "Frontend funcional para crear tareas, consultar estados y revisar resultados."],
    ["Evolución profesional", "Base preparada para mejorar seguridad, tests, observabilidad y despliegue."],
  ];
  const ragPoints = [
    "Gestión de documentos desde el panel.",
    "Contexto preparado para enriquecer ejecuciones.",
    "Separación entre tarea, documento y resultado.",
    "Base preparada para mejorar embeddings, chunking y evaluación.",
    "Roadmap hacia recuperación más precisa y trazabilidad del contexto usado.",
  ];
  const decisions = [
    "Arquitectura modular y backend-first para que el backend sea el núcleo del sistema.",
    "Separación clara entre rutas, esquemas, servicios y modelos para mantener responsabilidades claras.",
    "FastAPI para una API rápida, tipada y mantenible.",
    "SQLAlchemy 2.0 y PostgreSQL para modelar usuarios, tareas y resultados de forma relacional.",
    "Docker para facilitar un entorno reproducible.",
    "JWT para proteger rutas privadas.",
    "Mantener lógica propia de agentes antes de añadir frameworks más complejos.",
    "Evitar sobreingeniería en la primera versión para mantener el proyecto defendible.",
  ];

  return (
    <article className="aegis-case">
      <section className="aegis-hero">
        <div className="aegis-hero-copy">
          <p className="eyebrow aegis-badge">Proyecto principal · Backend · IA aplicada</p>
          <h1>Aegis</h1>
          <p className="aegis-lead">
            Plataforma backend-first para gestionar, clasificar y ejecutar tareas mediante agentes de IA especializados.
          </p>
          <p className="aegis-support">
            Aegis no es un chatbot. Es un sistema de orquestación donde el usuario crea una tarea, el backend analiza la petición, selecciona el agente adecuado, ejecuta el flujo y guarda el resultado con historial y trazabilidad.
          </p>
        </div>
        <AegisMockup project={project} />
      </section>

      <section className="aegis-overview-grid" aria-label="Resumen del caso de estudio">
        <article className="aegis-info-card">
          <span className="aegis-card-icon">01</span>
          <h2>Problema</h2>
          <p>
            Muchos sistemas de IA funcionan como respuestas aisladas, sin control de estado, trazabilidad ni separación clara entre lógica, datos y ejecución.
          </p>
        </article>
        <article className="aegis-info-card">
          <span className="aegis-card-icon">02</span>
          <h2>Solución</h2>
          <p>
            Aegis organiza las tareas en un flujo controlado: creación, clasificación, selección de agente, ejecución, almacenamiento del resultado e historial.
          </p>
        </article>
        <article className="aegis-info-card aegis-architecture-card">
          <span className="aegis-card-icon">03</span>
          <h2>Arquitectura</h2>
          <div className="aegis-architecture-flow">
            {["React", "FastAPI", "Agent Engine", "PostgreSQL"].map((item, index, items) => (
              <React.Fragment key={item}>
                <span>{item}</span>
                {index < items.length - 1 && <strong aria-hidden="true">→</strong>}
              </React.Fragment>
            ))}
          </div>
          <p className="aegis-architecture-note">
            Frontend ligero, backend como núcleo del sistema y persistencia relacional para usuarios, tareas y resultados.
          </p>
        </article>
      </section>

      <section className="aegis-section-card">
        <div className="aegis-section-header">
          <span className="aegis-card-icon">FL</span>
          <div>
            <h2>Flujo de ejecución</h2>
            <p>Cada tarea dentro de Aegis sigue un ciclo controlado desde que el usuario la crea hasta que el sistema almacena el resultado final.</p>
          </div>
        </div>
        <div className="aegis-flow-grid">
          {executionFlow.map(([title, text], index) => (
            <article key={title}>
              <span>{index + 1}</span>
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="aegis-section-card aegis-proof-section">
        <div className="aegis-section-header">
          <span className="aegis-card-icon">QA</span>
          <div>
            <h2>Qué demuestra técnicamente</h2>
            <p>Señales concretas que hacen que Aegis funcione como caso técnico, no solo como demo visual.</p>
          </div>
        </div>
        <div className="aegis-proof-grid">
          {technicalProof.map(([title, text]) => (
            <article className="aegis-proof-card" key={title}>
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="aegis-section-card aegis-rag-section">
        <div className="aegis-section-header">
          <span className="aegis-card-icon">RAG</span>
          <div>
            <h2>RAG y contexto documental</h2>
            <p>
              La parte documental de Aegis está planteada para que las tareas puedan apoyarse en contexto recuperado desde documentos.
              El objetivo no es vender un sistema RAG perfecto, sino demostrar una base funcional para ingesta, organización de contexto y recuperación de información dentro de un flujo de ejecución controlado.
            </p>
          </div>
        </div>
        <ul className="aegis-rag-list">
          {ragPoints.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>

      <section className="aegis-section-card">
        <div className="aegis-section-header">
          <span className="aegis-card-icon">ST</span>
          <div>
            <h2>Stack técnico</h2>
          </div>
        </div>
        <div className="aegis-tech-grid">
          {techStack.map(([title, text]) => (
            <article key={title}>
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="aegis-section-card">
        <div className="aegis-section-header">
          <span className="aegis-card-icon">DT</span>
          <div>
            <h2>Decisiones técnicas</h2>
            <p>Decisiones pensadas para mantener el proyecto claro, explicable y preparado para evolucionar.</p>
          </div>
        </div>
        <ul className="aegis-decisions-list">
          {decisions.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>

      <div className="aegis-bottom-actions">
        <Link className="button aegis-gradient-button" to="/proyectos">
          ← Volver a proyectos
        </Link>
      </div>

    </article>
  );
}

function BudgetWiseMockup({ project }) {
  const slides = [
    {
      src: budgetWiseLogin,
      alt: "Pantalla de login de BudgetWise",
      label: "Login",
      description: "Acceso con email y contraseña para separar la cuenta local del usuario y preparar la sincronización.",
    },
    {
      src: budgetWiseCreateAccount,
      alt: "Pantalla de creación de cuenta de BudgetWise",
      label: "Crear cuenta",
      description: "Registro sencillo para guardar movimientos y empezar a construir el historial financiero.",
    },
    {
      src: budgetWiseDashboard,
      alt: "Dashboard financiero de BudgetWise",
      label: "Dashboard",
      description: "Resumen principal con saldo total, ingresos, gastos, accesos rápidos y categorías destacadas.",
    },
    {
      src: budgetWiseMenu,
      alt: "Menú de acciones de BudgetWise",
      label: "Menú",
      description: "Acciones rápidas para recargar datos, añadir movimientos, navegar a reportes y ajustar la cuenta.",
    },
    {
      src: budgetWiseAddExpense,
      alt: "Formulario para añadir gasto en BudgetWise",
      label: "Añadir gasto",
      description: "Formulario guiado para registrar importe, categoría, fecha y notas de un gasto.",
    },
    {
      src: budgetWiseAddIncome,
      alt: "Formulario para añadir ingreso en BudgetWise",
      label: "Añadir ingreso",
      description: "Registro de ingresos con la misma estructura que los gastos para mantener consistencia.",
    },
    {
      src: budgetWiseReports,
      alt: "Pantalla de reportes de BudgetWise",
      label: "Reportes",
      description: "Vista analítica por periodo con balance, ingresos, gastos y ranking de categorías.",
    },
  ];
  const [activeSlide, setActiveSlide] = React.useState(0);
  const currentSlide = slides[activeSlide];

  const goToPrevious = () => {
    setActiveSlide((index) => (index === 0 ? slides.length - 1 : index - 1));
  };

  const goToNext = () => {
    setActiveSlide((index) => (index === slides.length - 1 ? 0 : index + 1));
  };

  const demoIsExternal = project.demo.startsWith("http");
  const repoIsExternal = project.github.startsWith("http");
  const appRepoIsExternal = project.appGithub?.startsWith("http");
  const hasDemo = project.demo !== "#";
  const hasRepo = project.github !== "#";
  const hasAppRepo = Boolean(project.appGithub && project.appGithub !== "#");

  return (
    <div className="budgetwise-visual-panel">
      <div className="budgetwise-carousel" aria-label="Carrusel de capturas de BudgetWise">
        <div className="budgetwise-phone-frame">
          <img src={currentSlide.src} alt={currentSlide.alt} />
          {slides.length > 1 && (
            <>
              <button className="budgetwise-carousel-control prev" type="button" onClick={goToPrevious} aria-label="Imagen anterior de BudgetWise">
                ←
              </button>
              <button className="budgetwise-carousel-control next" type="button" onClick={goToNext} aria-label="Imagen siguiente de BudgetWise">
                →
              </button>
            </>
          )}
        </div>
        <div className="budgetwise-carousel-footer">
          <div>
            <span>{currentSlide.label}</span>
            <p>{currentSlide.description}</p>
          </div>
          <div className="budgetwise-carousel-dots" aria-label="Imágenes disponibles">
            {slides.map((slide, index) => (
              <button
                className={index === activeSlide ? "active" : undefined}
                type="button"
                key={slide.label}
                onClick={() => setActiveSlide(index)}
                aria-label={`Ver captura ${index + 1}: ${slide.label}`}
                aria-current={index === activeSlide ? "true" : undefined}
              />
            ))}
          </div>
        </div>
      </div>
      <div className="budgetwise-carousel-actions">
        <a
          className={`button budgetwise-gradient-button ${!hasDemo ? "is-disabled" : ""}`}
          href={project.demo}
          target={demoIsExternal ? "_blank" : undefined}
          rel={demoIsExternal ? "noreferrer" : undefined}
          aria-disabled={!hasDemo ? "true" : undefined}
          onClick={(event) => {
            if (!hasDemo) event.preventDefault();
          }}
        >
          {hasDemo ? "Ver demo" : "Demo próximamente"} <Arrow />
        </a>
        <a
          className={`button budgetwise-gradient-button ${!hasRepo ? "is-disabled" : ""}`}
          href={project.github}
          target={repoIsExternal ? "_blank" : undefined}
          rel={repoIsExternal ? "noreferrer" : undefined}
          aria-disabled={!hasRepo ? "true" : undefined}
          onClick={(event) => {
            if (!hasRepo) event.preventDefault();
          }}
        >
          Repositorio backend <Arrow />
        </a>
        {project.appGithub && (
          <a
            className={`button budgetwise-gradient-button ${!hasAppRepo ? "is-disabled" : ""}`}
            href={project.appGithub}
            target={appRepoIsExternal ? "_blank" : undefined}
            rel={appRepoIsExternal ? "noreferrer" : undefined}
            aria-disabled={!hasAppRepo ? "true" : undefined}
            onClick={(event) => {
              if (!hasAppRepo) event.preventDefault();
            }}
          >
            Repositorio app <Arrow />
          </a>
        )}
      </div>
    </div>
  );
}

function BudgetWiseCaseStudy({ project }) {
  const productFlow = [
    ["Autenticación", "El usuario crea cuenta, inicia sesión o recupera contraseña desde una experiencia simple."],
    ["Registro local", "La app permite añadir ingresos y gastos con importe, categoría, fecha y notas."],
    ["Persistencia", "Room mantiene los movimientos disponibles en local y el backend expone usuarios y transacciones."],
    ["Resumen", "El dashboard calcula saldo, ingresos, gastos y accesos rápidos para las acciones habituales."],
    ["Reportes", "La vista de análisis agrupa por periodo y categoría para entender el comportamiento financiero."],
  ];
  const techStack = [
    ["Mobile", "Android, Java/Kotlin, Jetpack Compose, pantallas declarativas, estados de UI y navegación orientada a flujos."],
    ["Arquitectura app", "MVVM, repositorios, persistencia local con Room/SQLite y enfoque offline-first."],
    ["Backend", "FastAPI con endpoints de auth, reset de contraseña y operaciones CRUD de transacciones."],
    ["Datos", "SQLAlchemy 2.0, Pydantic, SQLite en demo y configuración preparada para PostgreSQL mediante psycopg."],
    ["Producto", "Dashboard financiero, formularios consistentes, reportes por periodo y lectura visual de categorías."],
    ["Evolución", "Base lista para endurecer autenticación, añadir tests, mejorar sincronización y documentar despliegue."],
  ];
  const technicalProof = [
    ["Producto móvil real", "Pantallas conectadas por un flujo de uso claro, no solo vistas sueltas."],
    ["Gestión de datos", "Movimientos, categorías, importes, fechas, estados y reportes."],
    ["Arquitectura app", "Separación entre UI, estado, repositorios, persistencia y backend."],
    ["Backend propio", "API para autenticación, usuarios y operaciones sobre transacciones."],
    ["Evolución razonable", "Base preparada para sincronización, reglas de IA y Open Banking en una iteración posterior."],
  ];
  const mobileArchitecture = [
    "Pantallas organizadas por flujo: acceso, dashboard, formularios y reportes.",
    "Separación entre interfaz, estado y capa de datos.",
    "Persistencia local para movimientos y categorías.",
    "Backend propio para usuarios, autenticación y transacciones.",
    "Base preparada para sincronización y evolución futura.",
  ];
  const decisions = [
    "Separar UI, estado, repositorio y persistencia para mantener una arquitectura entendible.",
    "Mantener una primera versión estable antes de añadir IA o integraciones bancarias.",
    "Usar una API propia para demostrar integración real entre producto móvil y backend.",
    "Modelar transacciones con datos mínimos pero útiles: tipo, importe, categoría, fecha y nota.",
    "Evitar sobreingeniería para que el proyecto sea defendible como junior.",
    "Priorizar una experiencia visual directa: saldo, ingresos, gastos y categorías sin ruido.",
    "Preparar una evolución futura hacia reglas de IA y Open Banking sin venderlo como terminado.",
  ];

  return (
    <article className="budgetwise-case">
      <section className="budgetwise-hero">
        <div className="budgetwise-hero-copy">
          <p className="eyebrow budgetwise-badge">Proyecto móvil · Finanzas personales · Backend propio</p>
          <h1>BudgetWise</h1>
          <p className="budgetwise-lead">
            App Android para registrar ingresos y gastos, consultar reportes y mantener el control financiero desde una interfaz sencilla.
          </p>
          <p className="budgetwise-support">
            El valor del proyecto está en conectar producto móvil, persistencia local y API backend: una experiencia pensada para uso diario, con datos estructurados y evolución realista hacia sincronización y despliegue.
          </p>
        </div>
        <BudgetWiseMockup project={project} />
      </section>

      <section className="budgetwise-overview-grid" aria-label="Resumen del caso de estudio BudgetWise">
        <article className="budgetwise-info-card">
          <span className="budgetwise-card-icon">01</span>
          <h2>Problema</h2>
          <p>
            Registrar movimientos financieros suele volverse pesado cuando la herramienta es demasiado compleja o no deja claro el estado real del dinero.
          </p>
        </article>
        <article className="budgetwise-info-card">
          <span className="budgetwise-card-icon">02</span>
          <h2>Solución</h2>
          <p>
            BudgetWise centraliza saldo, ingresos, gastos, acciones rápidas y reportes en una app móvil directa, con formularios consistentes y categorías visuales.
          </p>
        </article>
        <article className="budgetwise-info-card budgetwise-architecture-card">
          <span className="budgetwise-card-icon">03</span>
          <h2>Arquitectura</h2>
          <div className="budgetwise-architecture-flow">
            {["Android", "Room", "Repository", "FastAPI", "SQLAlchemy"].map((item, index, items) => (
              <React.Fragment key={item}>
                <span>{item}</span>
                {index < items.length - 1 && <strong aria-hidden="true">→</strong>}
              </React.Fragment>
            ))}
          </div>
          <p className="budgetwise-architecture-note">
            Cliente móvil con persistencia local y backend REST para usuarios, login y sincronización de movimientos.
          </p>
        </article>
      </section>

      <section className="budgetwise-section-card">
        <div className="budgetwise-section-header">
          <span className="budgetwise-card-icon">FL</span>
          <div>
            <h2>Flujo de producto</h2>
            <p>El recorrido está ordenado desde el acceso inicial hasta el análisis de movimientos, igual que el carrusel.</p>
          </div>
        </div>
        <div className="budgetwise-flow-grid">
          {productFlow.map(([title, text], index) => (
            <article key={title}>
              <span>{index + 1}</span>
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="budgetwise-section-card budgetwise-proof-section">
        <div className="budgetwise-section-header">
          <span className="budgetwise-card-icon">QA</span>
          <div>
            <h2>Qué demuestra técnicamente</h2>
            <p>Señales concretas que convierten BudgetWise en un caso mobile con producto, datos y backend.</p>
          </div>
        </div>
        <div className="budgetwise-proof-grid">
          {technicalProof.map(([title, text]) => (
            <article className="budgetwise-proof-card" key={title}>
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="budgetwise-section-card budgetwise-architecture-section">
        <div className="budgetwise-section-header">
          <span className="budgetwise-card-icon">AR</span>
          <div>
            <h2>Arquitectura mobile y datos</h2>
            <p>
              BudgetWise está planteado como una app mobile orientada a producto: el usuario registra movimientos, consulta su estado financiero y revisa reportes.
              La parte importante no es solo la interfaz, sino cómo se estructura el flujo entre pantalla, estado, persistencia local y backend.
            </p>
          </div>
        </div>
        <ul className="budgetwise-architecture-list">
          {mobileArchitecture.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>

      <section className="budgetwise-section-card">
        <div className="budgetwise-section-header">
          <span className="budgetwise-card-icon">ST</span>
          <div>
            <h2>Stack técnico</h2>
            <p>Una combinación móvil + backend que muestra producto, datos y API REST en un caso realista.</p>
          </div>
        </div>
        <div className="budgetwise-tech-grid">
          {techStack.map(([title, text]) => (
            <article key={title}>
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="budgetwise-section-card">
        <div className="budgetwise-section-header">
          <span className="budgetwise-card-icon">DT</span>
          <div>
            <h2>Decisiones técnicas</h2>
          </div>
        </div>
        <ul className="budgetwise-decisions-list">
          {decisions.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>

      <div className="budgetwise-bottom-actions">
        <Link className="button budgetwise-gradient-button" to="/proyectos">
          ← Volver a proyectos
        </Link>
      </div>
    </article>
  );
}

function SharedVaultCaseStudy({ project }) {
  const proofPoints = [
    ["Cloud aplicado", "Uso de AWS S3 para almacenamiento privado de archivos."],
    ["Backend con permisos", "Control de acceso desde la API, no desde enlaces públicos permanentes."],
    ["Seguridad básica de archivos", "Validación de tipo, tamaño y acceso antes de permitir operaciones."],
    ["URLs firmadas", "Entrega temporal de archivos sin exponer el bucket privado."],
    ["Producto realista", "Caso cercano a escenarios de empresa: archivos, usuarios, permisos y privacidad."],
  ];
  const architectureFlow = ["Usuario", "Backend", "Validación", "AWS S3 privado", "URL firmada", "Acceso temporal"];
  const architecturePoints = [
    "Backend como punto de control.",
    "Bucket privado en AWS S3.",
    "Validación de archivos antes de subir.",
    "Permisos por álbum y por enlace.",
    "Generación de URLs firmadas desde la API.",
    "Separación entre metadatos en base de datos y archivos en S3.",
  ];
  const currentPlan = [
    "Diseño del flujo principal de álbumes privados.",
    "Modelo de permisos por enlace.",
    "Arquitectura inicial backend + AWS S3.",
    "Stack pensado para storage privado.",
    "Caso de uso claro para portfolio cloud.",
  ];
  const firstVersion = [
    "Autenticación de usuarios.",
    "Crear álbumes privados.",
    "Subir fotos y vídeos.",
    "Validar tipo y tamaño de archivos.",
    "Guardar archivos en bucket privado S3.",
    "Generar URLs firmadas.",
    "Compartir enlace con permisos controlados.",
  ];
  const s3Reasons = [
    "Storage de fotos y vídeos.",
    "Buckets privados.",
    "URLs firmadas.",
    "Separación entre archivos y metadatos.",
    "Aprendizaje cloud aplicado a producto.",
  ];

  return (
    <article className="sharedvault-case">
      <section className="sharedvault-hero">
        <div className="sharedvault-hero-copy">
          <p className="eyebrow sharedvault-badge">Cloud · AWS S3 · Proyecto en desarrollo</p>
          <h1>SharedVault</h1>
          <p className="sharedvault-lead">
            Plataforma de álbumes privados compartidos para subir fotos y vídeos, gestionar permisos y compartir acceso mediante enlaces seguros.
          </p>
          <p className="sharedvault-support">
            SharedVault está planteado como una evolución cloud de mi portfolio: un proyecto para demostrar backend aplicado a almacenamiento privado, control de acceso y entrega segura de archivos mediante AWS S3 y URLs firmadas.
          </p>
        </div>
        <aside className="sharedvault-status-panel" aria-label="Estado de SharedVault">
          <span>{project.status}</span>
          <h2>Cloud aplicado a archivos privados</h2>
          <p>Aún está en construcción, así que la página separa claramente arquitectura propuesta, roadmap y primera versión funcional.</p>
          <div className="mini-stack">
            {project.stack.map((item) => (
              <span key={item}>{item}</span>
            ))}
          </div>
        </aside>
      </section>

      <section className="sharedvault-section-card">
        <div className="sharedvault-section-header">
          <span className="sharedvault-card-icon">PS</span>
          <div>
            <h2>Problema y solución</h2>
            <p>El caso se centra en compartir archivos privados sin perder control sobre acceso, privacidad y caducidad.</p>
          </div>
        </div>
        <div className="sharedvault-split-grid">
          <article>
            <h3>Problema</h3>
            <p>
              Compartir fotos y vídeos privados suele depender de enlaces poco controlados, carpetas abiertas o permisos difíciles de gestionar.
              El reto es permitir compartir contenido sin perder control sobre acceso, privacidad y caducidad.
            </p>
          </article>
          <article>
            <h3>Solución</h3>
            <p>
              SharedVault propone álbumes privados donde un usuario puede subir archivos, invitar a otras personas mediante enlace y controlar permisos de visualización o subida, manteniendo los archivos en almacenamiento privado.
            </p>
          </article>
        </div>
      </section>

      <section className="sharedvault-section-card">
        <div className="sharedvault-section-header">
          <span className="sharedvault-card-icon">QA</span>
          <div>
            <h2>Qué demuestra técnicamente</h2>
            <p>Señales cloud y backend que hacen que SharedVault sea un tercer caso técnico defendible.</p>
          </div>
        </div>
        <div className="sharedvault-proof-grid">
          {proofPoints.map(([title, text]) => (
            <article className="sharedvault-proof-card" key={title}>
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="sharedvault-section-card">
        <div className="sharedvault-section-header">
          <span className="sharedvault-card-icon">AR</span>
          <div>
            <h2>Arquitectura propuesta</h2>
            <p>
              La idea no es meter AWS en toda la arquitectura desde el principio, sino usarlo donde aporta valor real: almacenamiento privado de archivos.
              El backend conserva la lógica de usuarios, álbumes y permisos, mientras S3 se encarga de guardar fotos y vídeos de forma privada.
            </p>
          </div>
        </div>
        <div className="sharedvault-architecture-flow">
          {architectureFlow.map((item, index) => (
            <React.Fragment key={item}>
              <span>{item}</span>
              {index < architectureFlow.length - 1 && <strong aria-hidden="true">→</strong>}
            </React.Fragment>
          ))}
        </div>
        <ul className="sharedvault-architecture-list">
          {architecturePoints.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>

      <section className="sharedvault-section-card">
        <div className="sharedvault-section-header">
          <span className="sharedvault-card-icon">EV</span>
          <div>
            <h2>Estado actual y roadmap</h2>
            <p>SharedVault se presenta como proyecto en desarrollo: lo importante es la dirección cloud y la primera versión funcional prevista.</p>
          </div>
        </div>
        <div className="sharedvault-status-grid">
          <article className="sharedvault-status-card">
            <h3>Actualmente plantea</h3>
            <ul>
              {currentPlan.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
          <article className="sharedvault-status-card">
            <h3>Primera versión funcional</h3>
            <ul>
              {firstVersion.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
        </div>
      </section>

      <section className="sharedvault-section-card sharedvault-s3-section">
        <div className="sharedvault-section-header">
          <span className="sharedvault-card-icon">S3</span>
          <div>
            <h2>Por qué AWS S3 aquí tiene sentido</h2>
            <p>
              S3 encaja en este proyecto porque el problema principal no es solo guardar datos, sino gestionar archivos grandes, privados y compartibles.
              Usarlo en SharedVault me permite demostrar un uso realista de AWS sin sobrecargar el resto de la arquitectura.
            </p>
          </div>
        </div>
        <ul className="sharedvault-s3-list">
          {s3Reasons.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>

      <div className="sharedvault-bottom-actions">
        <Link className="button sharedvault-gradient-button" to="/proyectos">
          ← Volver a proyectos
        </Link>
      </div>
    </article>
  );
}

function HomePage() {
  return (
    <div className="page-stack">
      <section className="hero section-grid">
        <div className="hero-content">
          <p className="eyebrow">Portfolio técnico · Junior Software Developer</p>
          <h1>Desarrollador Software Junior</h1>
          <p className="hero-lead">
            Orientado a Backend, APIs REST, Java, IA aplicada y producto digital.
          </p>
          <p className="hero-summary">
            Construyo aplicaciones completas con backend, bases de datos, frontend funcional y flujos de IA aplicada.
            Este portfolio muestra proyectos reales con arquitectura, código, decisiones técnicas y evolución profesional.
          </p>

          <div className="hero-actions" aria-label="Acciones principales">
            <Link className="button button-primary" to="/proyectos">
              Ver proyectos <Arrow />
            </Link>
            <ExternalLink href={profile.links.github}>Ver GitHub</ExternalLink>
            <Link className="button button-secondary" to="/contacto">
              Contacto <Arrow />
            </Link>
          </div>

        </div>

        <aside className="profile-card" aria-label="Tarjeta profesional">
          <div className="portrait-frame">
            <img src={profilePhoto} alt="Retrato profesional de Alejandro Dehesa Delgado" />
          </div>
          <div className="profile-card-content">
            <p className="eyebrow">Disponible para roles junior</p>
            <h2>{profile.name}</h2>
            <p>{profile.location}</p>
            <div className="profile-links">
              <a href={profile.links.github} target="_blank" rel="noreferrer">
                GitHub
              </a>
              <a href={profile.links.linkedin} target="_blank" rel="noreferrer">
                LinkedIn
              </a>
              <a href={`mailto:${profile.email}`}>Email</a>
            </div>
          </div>
        </aside>
      </section>

      <section className="section home-stack-section">
        <SectionHeader title="Stack" />
        <div className="tech-strip" aria-label="Tecnologías principales">
          {techHighlights.map((tech) => (
            <div className="tech-strip-item" key={tech.name}>
              <span><img src={tech.icon} alt="" /></span>
              <strong>{tech.name}</strong>
            </div>
          ))}
        </div>
      </section>

      <section className="section home-projects-section">
        <SectionHeader
          title="Proyectos destacados."
          text="Proyectos diseñados para demostrar criterio técnico, arquitectura real y capacidad de construir producto más allá de ejercicios aislados."
        />
        <div className="project-grid">
          {projects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </section>

    </div>
  );
}

function ProjectsPage() {
  return (
    <div className="page-stack">
      <section className="section">
        <SectionHeader
          kicker="Proyectos"
          title="Tres proyectos con señales técnicas distintas."
          text="Aegis como proyecto principal de backend e IA, BudgetWise como producto app y SharedVault como evolución cloud con AWS S3."
        />
        <div className="project-grid">
          {projects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </section>
    </div>
  );
}

function ProjectDetailPage() {
  const { slug } = useParams();
  const project = projects.find((item) => item.slug === slug);

  if (!project) {
    return <Navigate to="/proyectos" replace />;
  }

  return (
    <div className="page-stack">
      <section className="section">
        {project.slug === "aegis" ? (
          <AegisCaseStudy project={project} />
        ) : project.slug === "budgetwise" ? (
          <BudgetWiseCaseStudy project={project} />
        ) : project.slug === "sharedvault" ? (
          <SharedVaultCaseStudy project={project} />
        ) : (
          <>
            <div className="breadcrumbs">
              <Link className="text-link" to="/proyectos">
                Volver a proyectos
              </Link>
            </div>
            <CaseStudy project={project} />
          </>
        )}
      </section>
    </div>
  );
}

function StackAreaIcon({ type }) {
  const icons = {
    code: "</>",
    database: "DB",
    phone: "APP",
    screen: "UI",
    spark: "AI",
    cloud: "CLD",
  };

  return <span className="stack-area-icon" aria-hidden="true">{icons[type] || "TS"}</span>;
}

function ProjectTechMark({ name }) {
  const normalizedName = name.toLowerCase();
  const iconByName = {
    android: androidLogo,
    api: "https://cdn.jsdelivr.net/npm/lucide-static@0.468.0/icons/braces.svg",
    css: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg",
    docker: dockerLogo,
    fastapi: fastApiLogo,
    "ia / rag": aiLogo,
    java: javaLogo,
    "java/kotlin": javaLogo,
    "jetpack compose": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jetpackcompose/jetpackcompose-original.svg",
    railway: "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/railway.svg",
    react: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
    "react router": "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/reactrouter.svg",
    room: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/sqlite/sqlite-original.svg",
    testing: "https://cdn.jsdelivr.net/npm/lucide-static@0.468.0/icons/flask-conical.svg",
    vite: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vitejs/vitejs-original.svg",
    github: gitLogo,
    kotlin: kotlinLogo,
    postgresql: postgresLogo,
    python: pythonLogo,
  };
  const labelByName = {
    api: "API",
    css: "CSS",
    "ia / rag": "IA/RAG",
    "java/kotlin": "Java/Kotlin",
    "jetpack compose": "JC",
    railway: "Rail",
    react: "React",
    "react router": "RR",
    room: "Room",
    testing: "Test",
    vite: "Vite",
  };
  const icon = iconByName[normalizedName];
  const label = labelByName[normalizedName] || name;

  return (
    <span className="project-tech-mark" title={name}>
      {icon && <img src={icon} alt="" />}
      <span>{label}</span>
    </span>
  );
}

function StackPage() {
  return (
    <div className="page-stack stack-page">
      <section className="stack-hero">
        <div className="stack-hero-copy">
          <h1>Stack técnico</h1>
          <p>
            No presento tecnologías como una colección de nombres, sino como herramientas aplicadas
            en proyectos reales con arquitectura, producto y evolución técnica.
          </p>
        </div>
      </section>

      <section className="stack-area-grid" aria-label="Áreas técnicas principales">
        {stackAreas.map((area) => (
          <article className={`stack-area-card stack-area-${area.tone}`} key={area.title}>
            <div className="stack-area-card-top">
              <StackAreaIcon type={area.icon} />
              <h2>{area.title}</h2>
            </div>
            <ul>
              {area.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <span className="stack-level">{area.level}</span>
          </article>
        ))}
      </section>

      <section className="stack-projects-section">
        <h2>Tecnologías aplicadas en proyectos</h2>
        <div className="stack-project-grid">
          {appliedTechProjects.map((project) => (
            <article className="stack-project-card" key={project.title}>
              <h3>{project.title}</h3>
              <div className="project-tech-icons" aria-label={`Tecnologías usadas en ${project.title}`}>
                {project.technologies.map((tech) => (
                  <ProjectTechMark name={tech} key={tech} />
                ))}
              </div>
              <p>{project.text}</p>
            </article>
          ))}
        </div>
      </section>

    </div>
  );
}

function AboutIcon({ name }) {
  const commonProps = {
    fill: "none",
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "2",
    viewBox: "0 0 24 24",
    "aria-hidden": "true",
  };
  const paths = {
    location: (
      <>
        <path d="M12 21s7-5.2 7-12a7 7 0 0 0-14 0c0 6.8 7 12 7 12Z" />
        <circle cx="12" cy="9" r="2.4" />
      </>
    ),
    education: (
      <>
        <path d="m3 8.5 9-4.5 9 4.5-9 4.5-9-4.5Z" />
        <path d="M6.5 10.5v4.2c0 1.4 2.5 2.8 5.5 2.8s5.5-1.4 5.5-2.8v-4.2" />
      </>
    ),
    code: (
      <>
        <path d="m8 8-4 4 4 4" />
        <path d="m16 8 4 4-4 4" />
        <path d="m14 5-4 14" />
      </>
    ),
    briefcase: (
      <>
        <rect x="3.5" y="7" width="17" height="12" rx="2" />
        <path d="M8.5 7V5.8A1.8 1.8 0 0 1 10.3 4h3.4a1.8 1.8 0 0 1 1.8 1.8V7" />
        <path d="M3.5 12h17" />
      </>
    ),
    architecture: (
      <>
        <rect x="4" y="4" width="5" height="5" rx="1" />
        <rect x="15" y="4" width="5" height="5" rx="1" />
        <rect x="9.5" y="15" width="5" height="5" rx="1" />
        <path d="M6.5 9v3h11V9" />
        <path d="M12 12v3" />
      </>
    ),
    target: (
      <>
        <circle cx="12" cy="12" r="8" />
        <circle cx="12" cy="12" r="4.5" />
        <circle cx="12" cy="12" r="1.5" />
      </>
    ),
    growth: (
      <>
        <path d="M4 17 10 11l4 4 6-8" />
        <path d="M15 7h5v5" />
      </>
    ),
    shield: (
      <path d="M12 21s7-3.5 7-10V5.5L12 3 5 5.5V11c0 6.5 7 10 7 10Z" />
    ),
    chart: (
      <>
        <path d="M12 3v9h9" />
        <path d="M20.4 16.2A9 9 0 1 1 12 3" />
      </>
    ),
    cloud: (
      <>
        <path d="M17.5 18H8a5 5 0 1 1 1.1-9.88A6.2 6.2 0 0 1 21 10.5 3.75 3.75 0 0 1 17.5 18Z" />
        <path d="M9 14h6" />
        <path d="M12 11v6" />
      </>
    ),
    rocket: (
      <>
        <path d="M5 15c-1 1.6-1.4 3.2-1.2 5 1.8.2 3.4-.2 5-1.2" />
        <path d="M9 15 5.5 11.5c2.4-5.2 6.1-7.7 12.5-7.5.2 6.4-2.3 10.1-7.5 12.5L7 13" />
        <path d="M14 7h.01" />
      </>
    ),
  };

  return <svg {...commonProps}>{paths[name]}</svg>;
}

function ContactButtonIcon({ name }) {
  const commonProps = {
    viewBox: "0 0 24 24",
    "aria-hidden": "true",
  };
  const icons = {
    email: (
      <svg {...commonProps} fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
        <rect x="3.5" y="5.5" width="17" height="13" rx="2" />
        <path d="m5 8 7 5 7-5" />
      </svg>
    ),
    github: (
      <svg {...commonProps} fill="currentColor">
        <path d="M12 2a10 10 0 0 0-3.16 19.49c.5.09.68-.22.68-.48v-1.68c-2.78.6-3.37-1.18-3.37-1.18-.45-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.61.07-.61 1 .07 1.53 1.03 1.53 1.03.9 1.52 2.35 1.08 2.92.83.09-.65.35-1.08.63-1.33-2.22-.25-4.55-1.11-4.55-4.94 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.64 0 0 .84-.27 2.75 1.02A9.5 9.5 0 0 1 12 7.02c.85 0 1.7.11 2.5.34 1.9-1.29 2.74-1.02 2.74-1.02.55 1.37.2 2.39.1 2.64.64.7 1.03 1.59 1.03 2.68 0 3.84-2.34 4.69-4.57 4.94.36.31.68.92.68 1.86v2.55c0 .27.18.58.69.48A10 10 0 0 0 12 2Z" />
      </svg>
    ),
    linkedin: (
      <svg {...commonProps} fill="currentColor">
        <path d="M5.34 8.95H2.62V21h2.72V8.95ZM3.98 3a1.58 1.58 0 1 0 0 3.16A1.58 1.58 0 0 0 3.98 3Zm6.04 5.95H7.41V21h2.72v-6.32c0-1.67.31-3.29 2.39-3.29 2.04 0 2.07 1.91 2.07 3.39V21h2.72v-7.02c0-3.45-.74-6.1-4.78-6.1-1.94 0-3.24 1.06-3.77 2.07h-.04v-1Z" />
      </svg>
    ),
    projects: (
      <svg {...commonProps} fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
        <path d="m8 9-4 3 4 3" />
        <path d="m16 9 4 3-4 3" />
        <path d="m14 5-4 14" />
      </svg>
    ),
  };

  return <span className="button-icon">{icons[name]}</span>;
}

function AboutPage() {
  const profileFacts = [
    ["briefcase", "Perfil", "Software Developer Junior"],
    ["education", "Formación", "FP Superior en Desarrollo de Aplicaciones Multiplataforma"],
    ["location", "Ubicación", "Palma de Mallorca, España"],
    ["code", "Foco", "Backend · Java · Python · AWS · IA aplicada"],
    ["target", "Objetivo", "Primera oportunidad profesional junior"],
  ];
  const principles = [
    [
      "architecture",
      "Criterio técnico",
      "No busco solo escribir código. Me interesa entender el problema, tomar decisiones técnicas con sentido y construir soluciones que pueda explicar, defender y mejorar.",
    ],
    [
      "target",
      "IA con dirección humana",
      "Trabajo con IA como multiplicador profesional, no como sustituto. La uso para acelerar iteraciones, contrastar soluciones y mejorar arquitectura, pero siempre revisando, entendiendo y dirigiendo el resultado.",
    ],
    [
      "growth",
      "Ambición profesional",
      "Quiero crecer dentro de un equipo serio hasta convertirme en una persona realmente valiosa: alguien que responde, se implica, aprende rápido y puede asumir tareas cada vez más importantes.",
    ],
  ];
  const currentProjects = [
    {
      icon: "shield",
      title: "Aegis",
      badge: "Backend + IA aplicada",
      text: "Mi proyecto principal. Demuestra APIs, dominio propio, tareas, agentes, RAG, trazabilidad y arquitectura backend.",
      tone: "aegis",
    },
    {
      icon: "chart",
      title: "BudgetWise",
      badge: "Mobile + datos + producto",
      text: "App de finanzas personales para demostrar producto móvil, Java/Kotlin, persistencia, backend y evolución hacia reglas inteligentes.",
      tone: "budgetwise",
    },
    {
      icon: "cloud",
      title: "SharedVault / AWS",
      badge: "Cloud + AWS",
      text: "Proyecto en desarrollo para aplicar AWS S3, almacenamiento privado, permisos, URLs firmadas y gestión segura de archivos.",
      tone: "aws",
    },
  ];

  return (
    <div className="page-stack about-page">
      <section className="about-hero">
        <div className="about-hero-copy">
          <h1>Sobre mí</h1>
          <p className="about-subtitle">
            Desarrollador Software Junior graduado en DAM, orientado a backend, Python, Java e inteligencia artificial aplicada.
          </p>
          <p>
            Soy Alejandro Dehesa Delgado, desarrollador junior graduado en Desarrollo de Aplicaciones Multiplataforma. Estoy orientando mi perfil hacia backend, aws e inteligencia artificial aplicada porque quiero construir software real: sistemas útiles, bien estructurados y pensados para crecer.
          </p>
          <p>
            No me interesa limitarme a aprender tecnologías de forma superficial. Quiero entender cómo se construye una aplicación desde dentro: cómo se organiza la lógica, cómo se diseñan APIs limpias, cómo se trabajan los datos, cómo se toman decisiones técnicas y cómo todo eso termina afectando al usuario y al negocio.
          </p>
          <p>
            Sé que estoy empezando, pero también sé hacia dónde voy. Quiero convertirme en un backend developer sólido, con criterio técnico, visión de producto y capacidad para participar en sistemas reales que aporten valor. Busco una primera oportunidad profesional donde pueda aprender de gente mejor que yo, asumir responsabilidad progresiva y demostrar que puedo crecer hasta ser una pieza importante dentro del equipo.
          </p>
        </div>

        <aside className="professional-card" aria-label="Ficha profesional">
          <h2>Ficha profesional</h2>
          <div className="professional-fact-list">
            {profileFacts.map(([icon, label, value]) => (
              <div className="professional-fact" key={label}>
                <span className="professional-fact-icon">
                  <AboutIcon name={icon} />
                </span>
                <div>
                  <h3>{label}</h3>
                  <p>{value}</p>
                </div>
              </div>
            ))}
          </div>
        </aside>
      </section>

      <section className="about-principles" aria-label="Enfoque profesional">
        {principles.map(([icon, title, text]) => (
          <article className="about-principle-card" key={title}>
            <span>
              <AboutIcon name={icon} />
            </span>
            <div>
              <h2>{title}</h2>
              <p>{text}</p>
            </div>
          </article>
        ))}
      </section>

      <section className="about-current-section">
        <div className="about-section-title">
          <span className="about-accent" aria-hidden="true" />
          <h2>Qué estoy construyendo ahora</h2>
        </div>
        <div className="about-projects-intro">
          <p>
            Me tomo mi crecimiento profesional en serio. Por eso construyo proyectos propios de forma constante: para consolidar lo que aprendo, convertir conocimiento en producto y demostrar que puedo llevar una idea desde el planteamiento inicial hasta una solución funcional, desplegada y presentable.
          </p>
          <p>
            Aegis y BudgetWise son mis dos proyectos principales hasta ahora, y estoy orgulloso de ellos porque representan mucho más que ejercicios de portfolio: son mi carta de presentación, la prueba de mi constancia y una muestra clara del tipo de desarrollador en el que me estoy convirtiendo. Actualmente también estoy ampliando mi perfil hacia cloud, especialmente con AWS.
          </p>
        </div>
        <div className="about-current-grid">
          {currentProjects.map((project) => (
            <React.Fragment key={project.title}>
              {project.tone === "aws" && (
                <div className="about-sharedvault-note">
                  <div className="about-sharedvault-note-title">
                    <span className="about-accent" aria-hidden="true" />
                    <h3>Proyecto en desarrollo</h3>
                  </div>
                  <p>
                    Proyecto orientado a almacenamiento privado, permisos y gestión segura de archivos con AWS. Quiero plasmar mi aprendizaje cloud en un proyecto real y cercano a escenarios de empresa.
                  </p>
                </div>
              )}
              <article className="about-current-card" key={project.title}>
                <span className={`about-project-icon about-project-${project.tone}`}>
                  <AboutIcon name={project.icon} />
                </span>
                <div>
                  <div className="about-current-card-heading">
                    <h3>{project.title}</h3>
                    <span>{project.badge}</span>
                  </div>
                  <p>{project.text}</p>
                </div>
              </article>
            </React.Fragment>
          ))}
        </div>
      </section>

      <section className="about-cta">
        <span className="about-cta-icon" aria-hidden="true">
          <AboutIcon name="rocket" />
        </span>
        <p>Estoy abierto a oportunidades junior donde pueda aprender de un equipo técnico, aportar en proyectos reales y seguir creciendo como desarrollador software.</p>
        <Link className="about-cta-button" to="/contacto">
          Contacto <Arrow />
        </Link>
      </section>
    </div>
  );
}

function ContactPage() {
  return (
    <div className="page-stack contact-page">
      <section className="contact-panel">
        <div className="section-header">
          <h2>Contacto directo y señales técnicas.</h2>
        </div>
        <div className="contact-action-grid">
          <a
            className="button button-primary"
            href={`https://mail.google.com/mail/?view=cm&fs=1&to=${profile.email}`}
            target="_blank"
            rel="noreferrer"
          >
            <ContactButtonIcon name="email" />
            Email <Arrow />
          </a>
          <ExternalLink href={profile.links.github} variant="primary">
            <ContactButtonIcon name="github" />
            GitHub
          </ExternalLink>
          <ExternalLink href={profile.links.linkedin} variant="primary">
            <ContactButtonIcon name="linkedin" />
            LinkedIn
          </ExternalLink>
          <Link className="button button-primary" to="/proyectos">
            <ContactButtonIcon name="projects" />
            Proyectos <Arrow />
          </Link>
        </div>
      </section>

    </div>
  );
}


export { HomePage, ProjectsPage, ProjectDetailPage, StackPage, AboutPage, ContactPage };



