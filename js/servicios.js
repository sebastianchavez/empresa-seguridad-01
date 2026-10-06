/* ============================================================
   VigilPro - JS específico de Servicios
   Renderiza el grid completo de servicios.
   ============================================================ */

(function () {
  "use strict";

  const ICONS = {
    camera: '<svg xmlns="http://www.w3.org/2000/svg" class="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" /></svg>',
    siren: '<svg xmlns="http://www.w3.org/2000/svg" class="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" /></svg>',
    lock: '<svg xmlns="http://www.w3.org/2000/svg" class="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" /></svg>',
    walk: '<svg xmlns="http://www.w3.org/2000/svg" class="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M13 7a2 2 0 11-4 0 2 2 0 014 0zM9 22l3-7-2-3 4-4 3 4 3 1M9 22l3-7m0 0l-3-3 3-3" /></svg>',
    'user-shield': '<svg xmlns="http://www.w3.org/2000/svg" class="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>',
    monitor: '<svg xmlns="http://www.w3.org/2000/svg" class="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>',
    clipboard: '<svg xmlns="http://www.w3.org/2000/svg" class="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" /></svg>',
    'shield-bolt': '<svg xmlns="http://www.w3.org/2000/svg" class="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016zM13 10V3l-4 7h3v7l4-7h-3z" /></svg>'
  };

  function renderServicios() {
    const container = document.getElementById("serviciosGrid");
    if (!container || !window.VIGILPRO) return;

    container.innerHTML = window.VIGILPRO.servicios.map((s, i) => `
      <div class="reveal delay-${((i % 6) + 1) * 100} card-lift bg-white p-7 rounded-2xl shadow-md border border-slate-100 group">
        <div class="flex items-start justify-between gap-3">
          <div class="w-14 h-14 rounded-xl bg-gradient-to-br from-slate-900 to-slate-700 text-amber-500 flex items-center justify-center shadow-md group-hover:scale-110 group-hover:from-amber-500 group-hover:to-amber-700 group-hover:text-white transition-all">
            ${ICONS[s.icono] || ICONS['user-shield']}
          </div>
          ${s.destacado ? '<span class="px-2 py-1 rounded-full bg-amber-100 text-amber-700 text-[10px] font-bold uppercase tracking-wider">Destacado</span>' : ''}
        </div>
        <h3 class="mt-5 text-xl font-bold text-slate-900">${s.titulo}</h3>
        <p class="mt-3 text-sm text-slate-600 leading-relaxed">${s.descripcion}</p>
        <div class="mt-6 pt-5 border-t border-slate-100 flex items-center justify-between">
          <a href="contacto.html?servicio=${s.slug}" class="inline-flex items-center gap-1 text-sm font-semibold text-amber-600 hover:text-amber-700">
            Cotizar este servicio
            <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5"><path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" /></svg>
          </a>
          <span class="text-xs text-slate-400 font-mono">#${String(s.id).padStart(2, '0')}</span>
        </div>
      </div>
    `).join("");
  }

  document.addEventListener("DOMContentLoaded", () => {
    renderServicios();

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