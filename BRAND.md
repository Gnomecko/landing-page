# Guía de marca — GNOMECKO

Este documento explica la identidad visual del sitio en términos simples.
El archivo que realmente controla los colores y fuentes es
[src/styles/brand.css](src/styles/brand.css) — edítalo ahí y los cambios
se aplican en toda la web automáticamente. Este documento es la
referencia de *por qué* se eligió cada cosa, para que sepas qué tocar y
qué no.

## Tipografía

| Uso | Fuente | Por qué |
|---|---|---|
| Títulos, nombre de marca, frases destacadas | **Fraunces** (serif) | Es una fuente serif elegante y editorial — el mismo estilo "cálido y sofisticado" que usan marcas como Claude/Anthropic en sus titulares. Gratuita, vía Google Fonts. |
| Texto de párrafos, menú, botones | **Inter** (sans-serif) | Muy legible en pantalla a cualquier tamaño, look limpio y moderno. Es el estándar de facto para interfaces web hoy en día. |

Ambas se cargan desde Google Fonts en [src/layouts/Layout.astro](src/layouts/Layout.astro).
Si más adelante quieres cambiarlas:

1. Elige tus fuentes nuevas en [fonts.google.com](https://fonts.google.com).
2. Actualiza el `<link href="https://fonts.googleapis.com/...">` en `Layout.astro`.
3. Actualiza `--font-display` y `--font-body` en `src/styles/brand.css`.

**Alternativas elegantes** si Fraunces no te convence: `Source Serif 4`,
`Newsreader`, `Lora`. Todas son serif gratuitas con un aire similar.

## Paleta de colores

El sitio tiene 2 temas: **claro** (`:root`, el que se ve por defecto)
y **oscuro** (`:root[data-theme="dark"]`, activado por el visitante
desde el círculo del header — ver la sección de abajo). `--color-primary`
y `--color-accent` son iguales en ambos; lo que cambia es el fondo y el
texto.

| Variable | Claro | Oscuro | Uso |
|---|---|---|---|
| `--color-bg` | ⬜ Casi blanco (`#f8fafc`) | 🔵 Azul noche (`#0f172a`) | Fondo general del sitio |
| `--color-text` | ⬛ Azul muy oscuro (`#0f172a`) | ⬜ Blanco humo (`#f8fafc`) | Texto principal |
| `--color-primary` | 🟩 Verde Gnomecko (`#099268`) | igual | Detalles de marca, íconos, tarjeta de contacto |
| `--color-accent` | 🔴 Rojo del gorro (`#e03131`) | igual | Botones principales (CTA) — úsalo con moderación |

La lógica: un color de marca (verde, identidad) + un color de acento
(rojo, para las llamadas a la acción, usado con moderación) sobre un
fondo neutro que se invierte según el tema. Evita añadir un cuarto
color grande — con estos dos hay margen de sobra para toda la web.

> **Nota sobre contraste:** `-light` y `-dark` (ej. `--color-primary-light`
> / `--color-primary-dark`) están pensados como *variantes* del color
> base, no como pares fijos de "fondo claro + texto oscuro". Si ajustas
> alguno de los dos temas, revisa que el texto siga siendo legible sobre
> esos fondos — usa una herramienta como
> [WebAIM Contrast Checker](https://webaim.org/resources/contrastchecker/)
> si tienes dudas. El código ya usa `var(--color-text)` en los lugares
> donde el contraste es crítico, justamente para evitar este problema.

**Si quieres probar otra paleta:** cambia `--color-primary`,
`--color-accent` y `--color-bg`/`--color-text` en `src/styles/brand.css`
y mira cómo se ve (con `npm run dev` corriendo, el navegador se
refresca solo) — recuerda editar **ambos** bloques (`:root` y
`:root[data-theme="dark"]`) si el cambio debe aplicar a los dos temas.
El resto de variables (`-light`, `-dark`, etc.) son variaciones
automáticas, tenlas en cuenta para mantener todo consistente.

## Modo oscuro e idioma

Dos botones en el header, independientes: uno ☀️/🌙 para tema
claro/oscuro y uno ES/EN para idioma — cada uno se recuerda por
visitante. Detalles técnicos de cómo editar los textos en los dos
idiomas o los colores del modo oscuro están en el
[README](README.md#modo-oscuro-e-idioma-esen).

## Logo

`logo.svg` (logotipo, el texto "Gnomecko") va en el header. `logo2.svg`
(isotipo, la mascota) va en el favicon y en el hero. Más detalles en
[public/assets/logo/README.md](public/assets/logo/README.md).

## Tono de marca (sugerido)

Gnomecko construye software para terceros (webs, apps a medida) y
contenido educativo (apps y videojuegos). Un tono que suele funcionar
bien para este perfil: cercano pero profesional, directo, sin jerga
técnica innecesaria — que un cliente sin conocimientos técnicos
entienda exactamente qué le estás ofreciendo.
