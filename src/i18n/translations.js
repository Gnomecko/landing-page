// Diccionario de textos ES/EN. Cada clave corresponde a un atributo
// data-i18n="clave" en algún componente .astro. Editar aquí actualiza
// el texto en ambos idiomas sin tocar el HTML.
export const translations = {
  es: {
    "meta.title": "GNOMECKO — Software con propósito",
    "meta.description":
      "GNOMECKO crea landing pages, apps a medida, apps educativas y videojuegos educativos.",

    "nav.services": "Servicios",
    "nav.projects": "Proyectos",
    "nav.about": "Nosotros",
    "nav.contact": "Contacto",

    "hero.eyebrow": "Estudio pequeño, entrega directa · Lima, Perú",
    "hero.title":
      "Software para tu negocio, construido por quien realmente lo <em>programa</em>",
    "hero.subtitle":
      "Landing pages, catálogos y apps a medida — sin intermediarios, sin subcontratar. Hablas directo con el equipo que escribe el código, del primer boceto a la entrega.",
    "hero.cta.services": "Ver servicios",
    "hero.cta.contact": "Escríbenos",
    "hero.mascot.alt": "Mascota de Gnomecko",

    "services.label": "Qué hacemos",
    "services.heading": "Servicios",
    "services.intro":
      "Trabajamos con empresas, emprendedores e instituciones educativas que necesitan un producto digital bien hecho, de principio a fin.",
    "services.1.title": "Landing pages y sitios web",
    "services.1.desc":
      "Páginas rápidas, responsivas y pensadas para convertir visitas en clientes, con una identidad visual propia.",
    "services.2.title": "Apps personalizadas",
    "services.2.desc":
      "Aplicaciones web y móviles a medida, adaptadas a los procesos reales de tu negocio, no al revés.",
    "services.3.title": "Apps educativas",
    "services.3.desc":
      "Herramientas digitales para enseñar mejor: seguimiento de progreso, contenidos interactivos y accesibles.",
    "services.4.title": "Videojuegos educativos",
    "services.4.desc":
      "Aprendizaje a través del juego: mecánicas simples, objetivos claros y contenido pedagógico real.",

    "projects.label": "Lo que hemos construido",
    "projects.heading": "Proyectos",
    "projects.intro":
      "Recién estamos empezando como empresa, pero no desde cero. Así programamos cuando el proyecto ya está en producción real.",
    "projects.coderbloom.tag": "Antes de fundar Gnomecko",
    "projects.coderbloom.desc":
      "Sitio web y backend para <strong>CoderBloom</strong>, una comunidad que impulsa a mujeres en programación competitiva: ranking mensual actualizado automáticamente según los resultados de sus concursos, y un sistema de badges personalizadas para reconocer a las participantes.",
    "projects.coderbloom.link": "Ver el ranking en vivo →",

    "about.label": "Quiénes somos",
    "about.heading": "Nosotros",
    "about.p1":
      "Gnomecko empezó como la obsesión de un programador por construir aplicaciones y videojuegos educativos — el tipo de proyectos que uno hace de madrugada porque le gustan, no porque se lo pidan. Mi cuñado, contador de profesión, me convenció de algo simple: si además ofrecíamos desarrollo para otros negocios, el dinero llegaría más rápido y podíamos financiar esas ideas propias mientras las construíamos con calma.",
    "about.p2":
      "Hoy somos dos: un desarrollador y un contador. Sin equipo grande ni capas de gerencia en el medio — la misma persona que diseña tu proyecto es la que lo programa y la que te responde. Recién estamos empezando, así que cada cliente recibe la misma atención que le pondríamos a nuestros propios proyectos.",
    "about.stat1": "Trato directo, sin intermediarios",
    "about.stat2": "Cada proyecto, hecho a tu medida",
    "about.stat3": "Recién empezando: más atención, no menos",
    "about.stat4": "Construimos nuestras propias apps y juegos",

    "contact.heading": "¿Tienes un proyecto en mente?",
    "contact.text":
      "Cuéntanos qué necesitas y te respondemos con una propuesta clara, sin vueltas.",

    "footer.rights": "Todos los derechos reservados.",
  },

  en: {
    "meta.title": "GNOMECKO — Software with purpose",
    "meta.description":
      "GNOMECKO builds landing pages, custom apps, educational apps and educational video games.",

    "nav.services": "Services",
    "nav.projects": "Projects",
    "nav.about": "About",
    "nav.contact": "Contact",

    "hero.eyebrow": "Small studio, direct delivery · Lima, Peru",
    "hero.title":
      "Software for your business, built by the people who actually <em>write the code</em>",
    "hero.subtitle":
      "Landing pages, catalogs and custom apps — no middlemen, no outsourcing. You talk directly to the team writing the code, from the first sketch to delivery.",
    "hero.cta.services": "See services",
    "hero.cta.contact": "Get in touch",
    "hero.mascot.alt": "Gnomecko mascot",

    "services.label": "What we do",
    "services.heading": "Services",
    "services.intro":
      "We work with businesses, entrepreneurs and educational institutions that need a digital product done right, start to finish.",
    "services.1.title": "Landing pages & websites",
    "services.1.desc":
      "Fast, responsive pages designed to turn visitors into customers, with a visual identity of their own.",
    "services.2.title": "Custom apps",
    "services.2.desc":
      "Web and mobile apps built around how your business actually works, not the other way around.",
    "services.3.title": "Educational apps",
    "services.3.desc":
      "Digital tools for better teaching: progress tracking, interactive and accessible content.",
    "services.4.title": "Educational video games",
    "services.4.desc":
      "Learning through play: simple mechanics, clear goals and real educational content.",

    "projects.label": "What we've built",
    "projects.heading": "Projects",
    "projects.intro":
      "We're just starting out as a company, but not from zero. This is how we build when a project is already live in production.",
    "projects.coderbloom.tag": "Before founding Gnomecko",
    "projects.coderbloom.desc":
      "Website and backend for <strong>CoderBloom</strong>, a community that supports women in competitive programming: a monthly ranking auto-updated from their contest results, plus a custom badge system to recognize participants.",
    "projects.coderbloom.link": "See the live ranking →",

    "about.label": "Who we are",
    "about.heading": "About us",
    "about.p1":
      "Gnomecko started as one programmer's obsession with building educational apps and video games — the kind of project you work on at 2 a.m. because you want to, not because someone asked. My brother-in-law, an accountant, talked me into something simple: if we also offered development for other businesses, money would come in faster, and we could fund those personal ideas while building them at our own pace.",
    "about.p2":
      "Today we're two people: a developer and an accountant. No big team, no layers of management in between — the same person who designs your project is the one who builds it and the one who answers you. We're just getting started, so every client gets the same care we'd put into our own projects.",
    "about.stat1": "Direct contact, no middlemen",
    "about.stat2": "Every project, built around you",
    "about.stat3": "Just starting out: more attention, not less",
    "about.stat4": "We build our own apps and games too",

    "contact.heading": "Got a project in mind?",
    "contact.text":
      "Tell us what you need and we'll get back to you with a clear proposal, no runaround.",

    "footer.rights": "All rights reserved.",
  },
};

export const STORAGE_LANG = "gnomecko-lang";
export const STORAGE_THEME = "gnomecko-theme";
