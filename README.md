# Landing page — Gnomecko

Sitio construido con [Astro](https://astro.build). Sin frameworks de UI
(React/Vue/etc.), solo componentes `.astro` + CSS — rápido y simple de
editar.

## Cómo correrlo

```bash
npm install     # solo la primera vez
npm run dev     # http://localhost:4321, con recarga automática
```

```bash
npm run build   # genera el sitio estático en ./dist
npm run preview # sirve ese build de producción localmente, para comprobarlo
```

## Estructura del proyecto

```
src/
  layouts/Layout.astro     <head>, fuentes, metadatos
  components/
    Header.astro            Barra de navegación + logo
    Hero.astro               Sección principal ("hero")
    Services.astro           Tarjetas de servicios
    Projects.astro            Proyecto(s) real(es) — hoy: CoderBloom
    About.astro               Sección "Nosotros"
    Contact.astro             Tarjeta de contacto
    Footer.astro               Pie de página + datos legales
    ThemeToggle.astro          Botón ☀️/🌙 (modo claro/oscuro)
    LangToggle.astro            Botón ES/EN (idioma)
  styles/
    brand.css                ← EDITA AQUÍ colores y fuentes (claro Y oscuro)
    global.css                Layout y componentes (no hace falta tocarlo)
  i18n/translations.js        ← EDITA AQUÍ los textos en español e inglés
  pages/index.astro           Ensambla todos los componentes de arriba

public/
  assets/logo/               logo.svg (logotipo) + logo2.svg (mascota) — ya integrados
  assets/favicon/            Ícono de la pestaña del navegador (usa la mascota)
  assets/projects/           Logos de proyectos mostrados en la sección "Proyectos"

BRAND.md                      Guía de marca (explica el porqué de cada color/fuente)
```

## Estado del contenido

Todo el texto es real, no hay relleno pendiente:

- **"Nosotros"** cuenta la historia real (dos fundadores: desarrollador + contador).
- En vez de cifras infladas ("00 proyectos"), se muestran diferenciadores reales de un equipo recién empezando.
- **"Proyectos"** muestra CoderBloom (sitio + backend + badges), con link al ranking en vivo. Cuando cierres tu primer cliente formal, añade su proyecto ahí siguiendo el mismo patrón de tarjeta en `src/components/Projects.astro`.
- Logo, RUC, razón social y correo ya tienen datos reales tomados de tu ficha RUC.

Nota de SEO: el cambio de idioma es 100% en el navegador (no hay URLs
separadas tipo `/en/`), así que buscadores como Google seguirán
indexando el sitio en español. Si más adelante el tráfico en inglés
importa para posicionamiento, lo correcto es migrar a
[i18n routing nativo de Astro](https://docs.astro.build/en/guides/internationalization/)
con URLs separadas — es más trabajo, pero es lo que ayuda a SEO
multi-idioma de verdad.

## Datos legales usados en el footer

Se incluyó solo lo relevante para una landing pública:

- Razón social: **GNOMECKO S.A.C.S.**
- Nombre comercial: **GNOMECKO**
- RUC: **20615923304**
- Correo: **developer@gnomecko.com**

Se dejó fuera intencionalmente información sensible de la ficha RUC
(domicilio exacto, DNI y datos de los representantes/socios, teléfono
personal) porque no aporta valor a un visitante y no conviene
publicarla. Si más adelante quieres una página de "Aviso legal" o
"Términos", esos datos sí tendrían sentido ahí.

