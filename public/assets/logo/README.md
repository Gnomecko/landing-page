# Logos de Gnomecko

Ya están integrados en el sitio. Esta carpeta contiene dos archivos
con roles distintos:

| Archivo | Qué es | Dónde se usa |
|---|---|---|
| `logo.svg` | **Logotipo** — el texto "Gnomecko" | Header |
| `logo2.svg` | **Isotipo** — la mascota | Favicon (pestaña del navegador) y hero |

En Astro, todo lo que está en `public/` se sirve tal cual desde la
raíz del sitio, por eso en el código se referencian como
`/assets/logo/logo.svg` y `/assets/logo/logo2.svg` (sin el prefijo
`public/`).

## Favicon: copia propia, no una referencia a logo2.svg

[favicon.svg](../favicon/favicon.svg) **no** apunta a `logo2.svg` con
un `<image href="...">` — se probó así al inicio y varios navegadores
no cargan una referencia a otro SVG externo dentro de un ícono de
pestaña, así que el favicon se veía en blanco. En su lugar,
`favicon.svg` tiene el dibujo de la mascota **copiado directamente
adentro** (optimizado con [SVGO](https://svgo.dev) para pesar ~100 KB
en vez de ~280 KB — a ese tamaño de ícono no se nota la diferencia de
detalle), con fondo transparente.

Nota: sin un fondo fijo detrás, el contorno negro de la mascota podría
verse poco si el navegador del visitante tiene la barra de pestañas en
modo oscuro (independiente del tema del sitio). Se quitó el fondo
blanco a pedido explícito — si en algún momento se ve mal en pestañas
oscuras, la opción es volver a agregar un `<rect>` claro detrás, como
estaba antes.

**Si reemplazas la mascota más adelante**, tienes que repetir ese
proceso a mano (no es automático):
1. Optimiza el nuevo SVG: `npx svgo tu-mascota.svg -o optimizado.svg`.
2. Copia su contenido interno (todo lo que está entre `<svg ...>` y
   `</svg>`) dentro del `<svg>` anidado de `favicon.svg`, ajustando el
   `viewBox` de ese `<svg>` interno al de tu archivo optimizado.

## Mascota en el hero: contorno en modo oscuro, sin caja

`logo2.svg` tiene trazos en negro casi puro (`#1d1d1d`) que se pierden
sobre un fondo oscuro. La solución **no** es una caja/fondo blanco
detrás de la imagen — eso se probó y el `padding` necesario para que
se viera bien achicaba la imagen (cambiaba de tamaño entre modo claro
y oscuro). En vez de eso, `.hero-mascot` en `src/styles/global.css`
usa un filtro `drop-shadow` apilado en las 4 direcciones para dibujar
un contorno blanco fino alrededor de la silueta — no ocupa espacio en
el layout, así que el tamaño no cambia entre temas.

## Si necesitas reemplazar algún archivo

- **Formato preferido:** SVG (nítido en cualquier tamaño, pesa poco).
- Mantén los mismos nombres (`logo.svg`, `logo2.svg`) y no hace falta
  tocar ningún componente — el sitio los recoge automáticamente
  (excepto el favicon, ver arriba).
- Si cambias de nombre o agregas una tercera variante, actualiza las
  referencias en `Header.astro`, `Hero.astro` y `Layout.astro`.
