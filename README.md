# VigilPro - Landing Page Template

Template profesional para una empresa de **seguridad privada**, desarrollado con HTML, Tailwind CSS (vía CDN) y JavaScript nativo. Sin build step: solo abre `index.html` en tu navegador.

> Identidad: **VigilPro · Seguridad Privada**. Paleta: slate-900 (azul oscuro) + amber (dorado).

## Características

- **9 páginas** completas con navegación consistente
- **Tailwind CSS** via CDN (configuración inline con colores de marca amber)
- **JavaScript nativo** sin dependencias externas
- **Datos mockeados centralizados** en `js/data.js` para fácil personalización
- **Animaciones** con CSS + IntersectionObserver (fade, slide, scale, counters, float, scan)
- **Galería con lightbox** + navegación con teclado (← / → / Esc) y filtros por categoría
- **Formulario de contacto** con validación en vivo, simulación de envío y pre-fill desde query params
- **Línea de Urgencias 24/7** destacada
- **100% responsive** (mobile-first, sm/md/lg breakpoints)
- **SEO básico** con meta tags
- **Accesibilidad**: alt en imágenes, aria-labels, focus visible

## Estructura de archivos

```
empresa-seguridad-01/
├── index.html              # Inicio
├── nosotros.html           # Sobre nosotros
├── servicios.html           # Nuestros servicios
├── precios.html            # Planes y precios
├── horarios.html           # Turnos de servicio + urgencias
├── galeria.html            # Galería con filtros + lightbox
├── contacto.html           # Formulario + ubicación + horarios
├── politicas.html          # Política de privacidad
├── terminos.html           # Términos y condiciones
│
├── css/
│   └── styles.css          # Animaciones personalizadas + utilidades (paleta amber/slate)
│
└── js/
    ├── data.js             # Datos mockeados (namespace VIGILPRO)
    ├── main.js             # Navbar, scroll reveal, contadores, menú móvil
    ├── home.js             # Render dinámico home (servicios, beneficios, testimonios)
    ├── nosotros.js         # Render de valores, equipo y certificaciones
    ├── servicios.js        # Render del grid de servicios
    ├── precios.js          # Render de planes, extras, FAQ acordeón
    ├── horarios.js         # Render de tabla de turnos
    ├── galeria.js          # Render + lightbox con teclado
    └── contacto.js         # Validación y envío del formulario
```

## Cómo usar

### 1. Abrir el template

Simplemente abre `index.html` en tu navegador. No requiere servidor, build ni instalación.

> **Tip**: Si quieres usar rutas absolutas para los assets, ejecuta un servidor local con `python -m http.server 8080` o `npx serve`.

### 2. Personalizar datos

Toda la información del template está en [`js/data.js`](js/data.js). Modifica estos objetos según tu negocio:

- `empresa` — nombre, contacto, dirección, redes sociales, línea de urgencias
- `stats` — contadores animados del home (años, clientes, 24/7, guardias)
- `servicios` — catálogo completo (8 servicios: CCTV, alarmas, control de acceso, rondas, escolta, monitoreo 24/7, consultoría, respuesta intrusión)
- `beneficios` — "por qué elegirnos"
- `certificaciones` — ISO 28000, OS-10, ACHS, AES
- `valores` — compromiso, profesionalismo, innovación, transparencia
- `equipo` — personas del equipo (fotos vía `pravatar.cc`)
- `galeria` + `categoriasGaleria` — imágenes (vía `picsum.photos`)
- `planes` — Residencial / Empresarial / Premium VIP
- `serviciosExtras` — adicionales con precio
- `turnos` — horarios semanales (mañana/tarde/noche)
- `testimonios` — reseñas de clientes
- `faqs` — preguntas frecuentes

### 3. Personalizar branding

Los colores de marca están definidos en cada archivo HTML dentro del bloque:

```html
<script>
  tailwind.config = {
    theme: { extend: {
      colors: { brand: { 50:'#fffbeb', 500:'#f59e0b', 600:'#d97706', ... } }
    }
  }}
</script>
```

Para cambiar la paleta, ajusta los valores `brand` y las clases `from-slate-900`, `text-amber-500` en todos los archivos.

### 4. Reemplazar imágenes

- **Hero / Trabajos**: `https://picsum.photos/seed/vig...`
- **Avatares equipo**: `https://i.pravatar.cc/...`
- **Mapa**: OpenStreetMap embebido (cambia los parámetros `bbox` y `marker` con tu ubicación)

### 5. Configurar el formulario

El formulario de [`contacto.html`](contacto.html) es **demo**: simula un envío. Para integrarlo:

- Reemplaza el bloque `setTimeout(...)` en `js/contacto.js` por una llamada `fetch()` a tu backend o servicio (Formspree, Netlify Forms, tu API, etc.).
- Agrega los campos `name` requeridos por tu backend al `<form>`.

### 6. Pre-fill del formulario

Los enlaces a `contacto.html` aceptan query params:

- `?servicio=cctv` (también `alarmas`, `control-acceso`, `rondas`, etc.)
- `?plan=residencial` (también `empresarial`, `vip`)

## Animaciones implementadas

- **Fade-in al scroll**: `.reveal`, `.reveal-right`, `.reveal-left`, `.reveal-scale`
- **Contadores**: `data-counter="20" data-suffix="+"`
- **Hover lift**: `.card-lift`
- **Botones con micro-animación**: `.btn-primary`
- **Shine effect**: `.shine-on-hover`
- **Float**: `.anim-float` (badges flotantes)
- **Scan line**: `.anim-scan` (efecto de vigilancia en el hero)
- **Pulse alert**: `.anim-pulse-alert` (línea de urgencias)
- **Form shake** en error: `.anim-shake`
- **Lightbox** con fade y zoom: ver `.lightbox` en `styles.css`

## Navegación

Todas las páginas comparten la misma estructura de navbar y footer. Para modificar la navegación:

1. Edita el bloque `<header data-navbar>` y `<footer>` en cada archivo HTML, **o**
2. Convierte estos bloques en componentes JS reutilizables.

## Compatibilidad

- Chrome / Edge / Firefox / Safari (últimas 2 versiones)
- iOS Safari 14+
- IE11 no soportado (uso de IntersectionObserver y `backdrop-filter`)

## Licencia

Template de demostración. Personalizable libremente para proyectos comerciales y personales.

---

**Versión**: 1.0
**Última actualización**: Octubre 2026
**Marca**: VigilPro (ejemplo)