/* ============================================================
   VigilPro - JS específico de Galería
   Renderiza filtros, grid y lightbox con teclado.
   ============================================================ */

(function () {
  "use strict";

  let activeFilter = "todos";
  let visibleItems = [];
  let currentIndex = 0;

  function renderFiltros() {
    const container = document.getElementById("filtrosGaleria");
    if (!container || !window.VIGILPRO) return;

    container.innerHTML = window.VIGILPRO.categoriasGaleria.map((c) => `
      <button class="gallery-filter px-5 py-2.5 rounded-full text-sm font-semibold bg-slate-100 text-slate-700 hover:bg-slate-200 ${c.id === 'todos' ? 'is-active' : ''}" data-filter="${c.id}">
        ${c.label}
      </button>
    `).join("");

    container.querySelectorAll("[data-filter]").forEach((btn) => {
      btn.addEventListener("click", () => {
        activeFilter = btn.getAttribute("data-filter");
        container.querySelectorAll("[data-filter]").forEach((b) => b.classList.remove("is-active"));
        btn.classList.add("is-active");
        applyFilter();
      });
    });
  }

  function renderGaleria() {
    const container = document.getElementById("galeriaGrid");
    if (!container || !window.VIGILPRO) return;

    container.innerHTML = window.VIGILPRO.galeria.map((g, i) => `
      <button class="gallery-item group relative overflow-hidden rounded-2xl shadow-md bg-slate-200 text-left" data-category="${g.categoria}" data-index="${i}" aria-label="Ver imagen: ${g.alt}">
        <img src="${g.src}" alt="${g.alt}" loading="lazy" class="w-full h-72 object-cover group-hover:scale-110 transition-transform duration-500" />
        <div class="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent opacity-60 group-hover:opacity-90 transition-opacity"></div>
        <div class="absolute top-4 right-4 px-3 py-1 rounded-full bg-amber-500 text-slate-900 text-xs font-bold uppercase tracking-wider shadow-md">
          ${g.categoria}
        </div>
        <div class="absolute bottom-0 left-0 right-0 p-5 text-white">
          <div class="flex items-center justify-between">
            <span class="text-sm font-medium">${g.alt}</span>
            <div class="w-10 h-10 rounded-full bg-white/15 backdrop-blur flex items-center justify-center group-hover:bg-amber-500 transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5"><path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" /></svg>
            </div>
          </div>
        </div>
      </button>
    `).join("");

    container.querySelectorAll(".gallery-item").forEach((btn) => {
      btn.addEventListener("click", () => {
        const idx = parseInt(btn.getAttribute("data-index"), 10);
        openLightbox(idx);
      });
    });

    applyFilter();
  }

  function applyFilter() {
    const items = document.querySelectorAll(".gallery-item");
    visibleItems = [];
    items.forEach((item) => {
      const cat = item.getAttribute("data-category");
      const matches = activeFilter === "todos" || cat === activeFilter;
      item.classList.toggle("is-hidden", !matches);
      if (matches) visibleItems.push(item);
    });
    document.getElementById("emptyState").classList.toggle("hidden", visibleItems.length > 0);
  }

  /* ---------- Lightbox ---------- */
  function openLightbox(idx) {
    const lightbox = document.querySelector("[data-lightbox]");
    if (!lightbox || !window.VIGILPRO) return;

    const allGaleria = window.VIGILPRO.galeria;
    const filtered = allGaleria.filter((g) => activeFilter === "todos" || g.categoria === activeFilter);
    currentIndex = filtered.findIndex((g) => g.id === allGaleria[idx].id);
    if (currentIndex < 0) currentIndex = 0;
    updateLightbox(filtered);
    lightbox.classList.add("is-active");
    document.body.classList.add("no-scroll");
  }

  function closeLightbox() {
    const lightbox = document.querySelector("[data-lightbox]");
    if (!lightbox) return;
    lightbox.classList.remove("is-active");
    document.body.classList.remove("no-scroll");
  }

  function updateLightbox(filtered) {
    const lightbox = document.querySelector("[data-lightbox]");
    if (!lightbox || !filtered.length) return;
    const img = lightbox.querySelector("[data-lightbox-img]");
    const counter = lightbox.querySelector("[data-lightbox-counter]");
    const item = filtered[currentIndex];

    lightbox.classList.add("is-changing");
    setTimeout(() => {
      img.src = item.src;
      img.alt = item.alt;
      counter.textContent = `${currentIndex + 1} / ${filtered.length} · ${item.categoria}`;
      lightbox.classList.remove("is-changing");
    }, 150);
  }

  function nextImage() {
    if (!window.VIGILPRO) return;
    const filtered = window.VIGILPRO.galeria.filter((g) => activeFilter === "todos" || g.categoria === activeFilter);
    currentIndex = (currentIndex + 1) % filtered.length;
    updateLightbox(filtered);
  }

  function prevImage() {
    if (!window.VIGILPRO) return;
    const filtered = window.VIGILPRO.galeria.filter((g) => activeFilter === "todos" || g.categoria === activeFilter);
    currentIndex = (currentIndex - 1 + filtered.length) % filtered.length;
    updateLightbox(filtered);
  }

  function initLightbox() {
    const lightbox = document.querySelector("[data-lightbox]");
    if (!lightbox) return;

    lightbox.querySelector("[data-lightbox-close]").addEventListener("click", closeLightbox);
    lightbox.querySelector("[data-lightbox-prev]").addEventListener("click", prevImage);
    lightbox.querySelector("[data-lightbox-next]").addEventListener("click", nextImage);

    lightbox.addEventListener("click", (e) => {
      if (e.target === lightbox) closeLightbox();
    });

    document.addEventListener("keydown", (e) => {
      if (!lightbox.classList.contains("is-active")) return;
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowRight") nextImage();
      if (e.key === "ArrowLeft") prevImage();
    });
  }

  document.addEventListener("DOMContentLoaded", () => {
    renderFiltros();
    renderGaleria();
    initLightbox();
  });
})();