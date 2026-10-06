/* ============================================================
   VigilPro - JS específico de la página de inicio
   Renderiza servicios destacados, beneficios y testimonios.
   ============================================================ */

(function () {
  "use strict";

  /* ---------- Iconos SVG inline ---------- */
  const ICONS = {
    camera: '<svg xmlns="http://www.w3.org/2000/svg" class="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" /></svg>',
    siren: '<svg xmlns="http://www.w3.org/2000/svg" class="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" /></svg>',
    lock: '<svg xmlns="http://www.w3.org/2000/svg" class="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" /></svg>',
    walk: '<svg xmlns="http://www.w3.org/2000/svg" class="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M13 7a2 2 0 11-4 0 2 2 0 014 0zM9 22l3-7-2-3 4-4 3 4 3 1M9 22l3-7m0 0l-3-3 3-3" /></svg>',
    'user-shield': '<svg xmlns="http://www.w3.org/2000/svg" class="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>',
    monitor: '<svg xmlns="http://www.w3.org/2000/svg" class="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>',
    clipboard: '<svg xmlns="http://www.w3.org/2000/svg" class="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" /></svg>',
    'shield-bolt': '<svg xmlns="http://www.w3.org/2000/svg" class="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016zM13 10V3l-4 7h3v7l4-7h-3z" /></svg>',
    badge: '<svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" /></svg>',
    lightning: '<svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>',
    'shield-check': '<svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>',
    document: '<svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>',
    eye: '<svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /><path stroke-linecap="round" stroke-linejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" /></svg>'
  };

  /* ---------- 1. Servicios destacados ---------- */
  function renderServiciosDestacados() {
    const container = document.getElementById("serviciosDestacados");
    if (!container || !window.VIGILPRO) return;

    const items = window.VIGILPRO.servicios.filter((s) => s.destacado).slice(0, 4);
    container.innerHTML = items.map((s, i) => `
      <div class="reveal delay-${(i + 1) * 100} card-lift bg-white p-7 rounded-2xl shadow-md border border-slate-100 group">
        <div class="w-14 h-14 rounded-xl bg-gradient-to-br from-slate-900 to-slate-700 text-amber-500 flex items-center justify-center shadow-md group-hover:scale-110 group-hover:from-amber-500 group-hover:to-amber-700 group-hover:text-white transition-all">
          ${ICONS[s.icono] || ICONS['shield-check']}
        </div>
        <h3 class="mt-5 text-lg font-bold text-slate-900">${s.titulo}</h3>
        <p class="mt-3 text-sm text-slate-600 leading-relaxed">${s.descripcion}</p>
        <a href="contacto.html?servicio=${s.slug}" class="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-amber-600 hover:text-amber-700">
          Cotizar
          <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5"><path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" /></svg>
        </a>
      </div>
    `).join("");
  }

  /* ---------- 2. Beneficios ---------- */
  function renderBeneficios() {
    const container = document.getElementById("beneficiosList");
    if (!container || !window.VIGILPRO) return;

    container.innerHTML = window.VIGILPRO.beneficios.map((b, i) => `
      <div class="reveal delay-${(i % 4 + 1) * 100} card-lift p-6 rounded-2xl bg-slate-50 border border-slate-100 group">
        <div class="w-12 h-12 rounded-xl bg-white text-amber-600 flex items-center justify-center shadow-sm group-hover:bg-gradient-to-br group-hover:from-slate-900 group-hover:to-slate-700 group-hover:text-amber-500 transition-all">
          ${ICONS[b.icono] || ICONS['shield-check']}
        </div>
        <h3 class="mt-4 font-bold text-slate-900">${b.titulo}</h3>
        <p class="mt-2 text-sm text-slate-600 leading-relaxed">${b.descripcion}</p>
      </div>
    `).join("");
  }

  /* ---------- 3. Testimonios ---------- */
  function renderTestimonios() {
    const container = document.getElementById("testimoniosList");
    if (!container || !window.VIGILPRO) return;

    container.innerHTML = window.VIGILPRO.testimonios.map((t, i) => `
      <div class="reveal delay-${(i + 1) * 100} card-lift bg-white/5 backdrop-blur-sm border border-white/10 p-7 rounded-2xl">
        <div class="flex items-center gap-1 text-amber-400">
          ${Array.from({ length: t.rating }, () => '<svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" /></svg>').join("")}
        </div>
        <p class="mt-4 text-slate-200 leading-relaxed">"${t.texto}"</p>
        <div class="mt-5 flex items-center gap-3 pt-5 border-t border-white/10">
          <img src="${t.foto}" alt="${t.nombre}" class="w-12 h-12 rounded-full border-2 border-amber-500" />
          <div>
            <div class="font-bold text-white">${t.nombre}</div>
            <div class="text-xs text-amber-300">${t.cargo}</div>
          </div>
        </div>
      </div>
    `).join("");
  }

  /* ---------- Init ---------- */
  document.addEventListener("DOMContentLoaded", () => {
    renderServiciosDestacados();
    renderBeneficios();
    renderTestimonios();

    if ("IntersectionObserver" in window) {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("is-visible");
            observer.unobserve(e.target);
          }
        });
      }, { threshold: 0.12 });
      document.querySelectorAll(".reveal:not(.is-visible)").forEach((el) => observer.observe(el));
    }
  });
})();