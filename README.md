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

## Modo oscuro e idioma (ES/EN)

En el header hay 2 botones circulares, independientes entre sí:

- **☀️/🌙** (`src/components/ThemeToggle.astro`) — alterna entre modo
  claro y oscuro con un clic, con una animación de rotación + fundido
  entre los dos íconos.
- **ES/EN** (`src/components/LangToggle.astro`) — alterna el idioma
  de todo el sitio con un clic, con una pequeña animación de "flip"
  en la etiqueta.

Ambas animaciones son CSS + un poco de JS propio, sin dependencias.
Existe un paquete de npm hecho justo para esto
([`theme-toggles`](https://www.npmjs.com/package/theme-toggles), la
misma técnica que documenta
[web.dev](https://web.dev/articles/building/a-theme-switch-component)),
pero está **deprecado/sin mantenimiento** desde hace más de un año —
por eso se prefirió repetir la técnica a mano en vez de instalar una
dependencia abandonada, coherente con que este proyecto ya es
"sin frameworks" a propósito.

Cada elección se guarda en el navegador del visitante (`localStorage`)
y se recuerda en su próxima visita. Si no elige nada, el tema sigue el
del sistema operativo del visitante y el idioma se adivina por el
idioma del navegador (con español como respaldo).

Cómo funciona, por si necesitas tocarlo:

- **Colores del modo oscuro** → en `src/styles/brand.css`, bloque
  `:root[data-theme="dark"]`. Edítalo igual que la paleta clara.
- **Textos en los dos idiomas** → en `src/i18n/translations.js`, un
  objeto plano `{ clave: texto }` para `es` y para `en`. Cada texto
  del sitio tiene un atributo `data-i18n="esa-clave"` en su componente
  `.astro` — el script de `LangToggle.astro` reemplaza el contenido
  según el idioma elegido.
- **Agregar un tercer idioma** (ej. portugués): agrega un bloque `pt`
  en `translations.js` con las mismas claves, y ajusta
  `LangToggle.astro` para ciclar entre los 3 en vez de alternar entre 2.

Nota de SEO: el cambio de idioma es 100% en el navegador (no hay URLs
separadas tipo `/en/`), así que buscadores como Google seguirán
indexando el sitio en español. Si más adelante el tráfico en inglés
importa para posicionamiento, lo correcto es migrar a
[i18n routing nativo de Astro](https://docs.astro.build/en/guides/internationalization/)
con URLs separadas — es más trabajo, pero es lo que ayuda a SEO
multi-idioma de verdad.

## Datos legales usados en el footer

Se incluyó solo lo relevante para una landing pública:

- Razón social: **GNOMECKO SAS**
- Nombre comercial: **GNOMECKO**
- RUC: **20615923304**
- Correo: **developer@gnomecko.com**

Se dejó fuera intencionalmente información sensible de la ficha RUC
(domicilio exacto, DNI y datos de los representantes/socios, teléfono
personal) porque no aporta valor a un visitante y no conviene
publicarla. Si más adelante quieres una página de "Aviso legal" o
"Términos", esos datos sí tendrían sentido ahí.

## Recomendaciones (no implementadas, para cuando quieras avanzar)

- **Formulario de contacto real**: ahora mismo el botón de contacto es
  un `mailto:`. Si quieres un formulario con campos, la opción más
  simple sin backend propio es [Formspree](https://formspree.io) o
  similar.
- **Analítica**: añadir Plausible o Google Analytics para saber
  cuántas visitas llegan y desde dónde.
- **SEO**: añadir Open Graph tags (`og:title`, `og:image`, etc.) en
  `Layout.astro` para que se vea bien al compartir el link en
  redes/WhatsApp.
- **Hosting**: Astro se despliega gratis en
  [Vercel](https://vercel.com), [Netlify](https://netlify.com) o
  GitHub Pages conectando el repo — detectan Astro automáticamente.
- **Fuentes autoalojadas**: ahora se cargan desde Google Fonts (más
  simple). Si te importa la privacidad/rendimiento al máximo, existe
  el paquete `@fontsource/fraunces` y `@fontsource/inter` para
  servirlas desde el propio sitio.
