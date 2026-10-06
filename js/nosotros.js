/* ============================================================
   VigilPro - JS específico de Nosotros
   Renderiza valores, equipo y certificaciones.
   ============================================================ */

(function () {
  "use strict";

  const ICONS = {
    heart: '<svg xmlns="http://www.w3.org/2000/svg" class="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>',
    star: '<svg xmlns="http://www.w3.org/2000/svg" class="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" /></svg>',
    lightbulb: '<svg xmlns="http://www.w3.org/2000/svg" class="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" /></svg>',
    eye: '<svg xmlns="http://www.w3.org/2000/svg" class="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /><path stroke-linecap="round" stroke-linejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" /></svg>',
    cert: '<svg xmlns="http://www.w3.org/2000/svg" class="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" /></svg>',
    badge: '<svg xmlns="http://www.w3.org/2000/svg" class="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M9 12l2 2 4-4m-6 8l-2 2v-6l2 2 6-6-2-2 2-2 4 4-2 2 2 2-6 6z" /></svg>',
    shield: '<svg xmlns="http://www.w3.org/2000/svg" class="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>',
    check: '<svg xmlns="http://www.w3.org/2000/svg" class="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>'
  };

  function renderValores() {
    const container = document.getElementById("valoresList");
    if (!container || !window.VIGILPRO) return;
    container.innerHTML = window.VIGILPRO.valores.map((v, i) => `
      <div class="reveal delay-${(i + 1) * 100} card-lift p-6 rounded-2xl bg-white border border-slate-100 shadow-sm">
        <div class="w-12 h-12 rounded-xl bg-gradient-to-br from-amber-500 to-amber-700 text-white flex items-center justify-center mb-4 shadow-sm">
          ${ICONS[v.icono] || ICONS.check}
        </div>
        <h3 class="font-bold text-slate-900 text-lg">${v.titulo}</h3>
        <p class="mt-2 text-sm text-slate-600 leading-relaxed">${v.descripcion}</p>
      </div>
    `).join("");
  }

  function renderEquipo() {
    const container = document.getElementById("equipoList");
    if (!container || !window.VIGILPRO) return;
    container.innerHTML = window.VIGILPRO.equipo.map((p, i) => `
      <div class="reveal delay-${(i + 1) * 100} card-lift bg-white rounded-2xl overflow-hidden shadow-md border border-slate-100 group">
        <div class="relative h-64 overflow-hidden bg-slate-200">
          <img src="${p.foto}" alt="${p.nombre}" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
          <div class="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent"></div>
          <div class="absolute bottom-3 left-3 right-3 flex justify-end">
            <span class="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-amber-500 text-slate-900 text-[10px] font-bold uppercase tracking-wider">
              <span class="status-dot online bg-slate-900"></span>
              OS-10
            </span>
          </div>
        </div>
        <div class="p-6">
          <h3 class="font-bold text-slate-900 text-lg">${p.nombre}</h3>
          <p class="text-xs uppercase tracking-wider text-amber-600 font-semibold mt-1">${p.cargo}</p>
          <p class="mt-3 text-sm text-slate-600 leading-relaxed">${p.bio}</p>
        </div>
      </div>
    `).join("");
  }

  function renderCertificaciones() {
    const container = document.getElementById("certList");
    if (!container || !window.VIGILPRO) return;
    container.innerHTML = window.VIGILPRO.certificaciones.map((c, i) => `
      <div class="reveal delay-${(i + 1) * 100} card-lift p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm text-center group hover:bg-amber-500/10 hover:border-amber-500/30 transition-all">
        <div class="w-16 h-16 mx-auto rounded-2xl bg-amber-500/20 text-amber-400 flex items-center justify-center mb-4 group-hover:bg-amber-500 group-hover:text-slate-900 transition-all">
          ${ICONS[c.icono] || ICONS.cert}
        </div>
        <h3 class="font-extrabold text-white text-xl">${c.titulo}</h3>
        <p class="mt-2 text-sm text-slate-300">${c.descripcion}</p>
      </div>
    `).join("");
  }

  document.addEventListener("DOMContentLoaded", () => {
    renderValores();
    renderEquipo();
    renderCertificaciones();

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