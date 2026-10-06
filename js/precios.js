/* ============================================================
   VigilPro - JS específico de Precios
   Renderiza planes, servicios extras y FAQ acordeón.
   ============================================================ */

(function () {
  "use strict";

  const fmt = (n) => n.toLocaleString("es-CL");

  function renderPlanes() {
    const container = document.getElementById("planesList");
    if (!container || !window.VIGILPRO) return;

    container.innerHTML = window.VIGILPRO.planes.map((p, i) => `
      <div class="reveal delay-${(i + 1) * 100} card-lift relative flex flex-col rounded-3xl ${p.destacado ? 'bg-gradient-to-br from-slate-900 to-slate-800 text-white ring-2 ring-amber-500' : 'bg-white text-slate-800 border border-slate-100'} shadow-xl overflow-hidden">
        ${p.destacado ? '<div class="absolute top-0 right-0"><div class="bg-amber-500 text-slate-900 text-xs font-extrabold uppercase tracking-wider px-4 py-1.5 rounded-bl-2xl">Más elegido</div></div>' : ''}
        <div class="p-7 md:p-8">
          <h3 class="text-xl font-bold ${p.destacado ? 'text-white' : 'text-slate-900'}">${p.nombre}</h3>
          <p class="mt-2 text-sm ${p.destacado ? 'text-slate-300' : 'text-slate-500'}">${p.descripcion}</p>
          <div class="mt-6 flex items-baseline gap-1">
            <span class="text-sm ${p.destacado ? 'text-slate-300' : 'text-slate-500'}">$</span>
            <span class="text-5xl font-extrabold ${p.destacado ? 'text-amber-400' : 'gradient-text'}">${fmt(p.precio)}</span>
            <span class="text-sm ${p.destacado ? 'text-slate-300' : 'text-slate-500'}">/ ${p.periodicidad}</span>
          </div>
          <a href="contacto.html?plan=${p.id}" class="mt-6 inline-flex w-full justify-center items-center gap-2 px-5 py-3 rounded-full ${p.destacado ? 'bg-gradient-to-r from-amber-500 to-amber-700 text-white' : 'bg-slate-900 text-white'} font-semibold hover:opacity-90 transition-opacity btn-primary">
            Contratar este plan
            <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5"><path stroke-linecap="round" stroke-linejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" /></svg>
          </a>
        </div>
        <div class="px-7 md:px-8 pb-8 flex-1">
          <div class="border-t ${p.destacado ? 'border-white/10' : 'border-slate-100'} pt-6">
            <ul class="space-y-3 text-sm">
              ${p.features.map((f) => `
                <li class="flex items-start gap-3">
                  <div class="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 ${f.incluido ? (p.destacado ? 'bg-amber-500 text-slate-900' : 'bg-amber-100 text-amber-600') : (p.destacado ? 'bg-white/10 text-white/40' : 'bg-slate-100 text-slate-400')}">
                    ${f.incluido
                      ? '<svg xmlns="http://www.w3.org/2000/svg" class="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="3"><path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7"/></svg>'
                      : '<svg xmlns="http://www.w3.org/2000/svg" class="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="3"><path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"/></svg>'}
                  </div>
                  <span class="${!f.incluido ? (p.destacado ? 'text-white/40 line-through' : 'text-slate-400 line-through') : ''}">${f.texto}</span>
                </li>
              `).join("")}
            </ul>
          </div>
        </div>
      </div>
    `).join("");
  }

  function renderExtras() {
    const container = document.getElementById("extrasList");
    if (!container || !window.VIGILPRO) return;

    container.innerHTML = window.VIGILPRO.serviciosExtras.map((e, i) => `
      <div class="reveal delay-${((i % 6) + 1) * 100} card-lift p-6 rounded-2xl bg-white border border-slate-100 shadow-sm flex items-center justify-between gap-4 group">
        <div class="flex-1">
          <h3 class="font-semibold text-slate-900">${e.nombre}</h3>
        </div>
        <div class="text-right">
          <div class="text-2xl font-extrabold gradient-text">$${fmt(e.precio)}</div>
          <a href="contacto.html" class="mt-1 inline-flex items-center gap-1 text-xs font-semibold text-amber-600 hover:text-amber-700">
            Agregar
            <svg xmlns="http://www.w3.org/2000/svg" class="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="3"><path stroke-linecap="round" stroke-linejoin="round" d="M12 4v16m8-8H4"/></svg>
          </a>
        </div>
      </div>
    `).join("");
  }

  function renderFaqs() {
    const container = document.getElementById("faqList");
    if (!container || !window.VIGILPRO) return;

    container.innerHTML = window.VIGILPRO.faqs.map((f, i) => `
      <div class="reveal delay-${((i % 5) + 1) * 100} rounded-2xl bg-white border border-slate-100 shadow-sm overflow-hidden">
        <details class="group">
          <summary class="flex items-center justify-between gap-4 p-6 cursor-pointer list-none">
            <h3 class="font-bold text-slate-900">${f.pregunta}</h3>
            <div class="faq-icon w-9 h-9 rounded-full bg-amber-100 text-amber-700 flex items-center justify-center flex-shrink-0">
              <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5"><path stroke-linecap="round" stroke-linejoin="round" d="M12 4v16m8-8H4"/></svg>
            </div>
          </summary>
          <div class="faq-content px-6 pb-2">
            <p class="text-slate-600 leading-relaxed pb-4">${f.respuesta}</p>
          </div>
        </details>
      </div>
    `).join("");
  }

  document.addEventListener("DOMContentLoaded", () => {
    renderPlanes();
    renderExtras();
    renderFaqs();

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