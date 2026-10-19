/* ============================================================
   VigilPro - JS principal
   Navbar, scroll reveal, contadores, menú móvil, smooth scroll
   ============================================================ */

(function () {
  "use strict";

  /* ---------- 1. Navbar: transparente -> sólido al hacer scroll ---------- */
  function initNavbar() {
    const navbar = document.querySelector("[data-navbar]");
    if (!navbar) return;

    const handleScroll = () => {
      if (window.scrollY > 30) {
        navbar.classList.add("nav-solid");
      } else {
        navbar.classList.remove("nav-solid");
      }
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
  }

  /* ---------- 2. Menú móvil (hamburguesa) ---------- */
  function initMobileMenu() {
    const toggle = document.querySelector("[data-menu-toggle]");
    const panel = document.querySelector("[data-menu-panel]");
    if (!toggle || !panel) return;

    const closeMenu = () => {
      panel.classList.add("hidden");
      toggle.setAttribute("aria-expanded", "false");
      toggle.setAttribute("aria-label", "Abrir menú");
      document.body.classList.remove("no-scroll");
    };

    const openMenu = () => {
      panel.classList.remove("hidden");
      toggle.setAttribute("aria-expanded", "true");
      toggle.setAttribute("aria-label", "Cerrar menú");
      document.body.classList.add("no-scroll");
    };

    toggle.addEventListener("click", () => {
      const isOpen = toggle.getAttribute("aria-expanded") === "true";
      isOpen ? closeMenu() : openMenu();
    });

    panel.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", closeMenu);
    });

    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") closeMenu();
    });

    window.matchMedia("(min-width: 1024px)").addEventListener("change", (e) => {
      if (e.matches) closeMenu();
    });
  }

  /* ---------- 3. Scroll reveal (IntersectionObserver) ---------- */
  function initScrollReveal() {
    const targets = document.querySelectorAll(".reveal, .reveal-left, .reveal-right, .reveal-scale");
    if (!targets.length || !("IntersectionObserver" in window)) {
      targets.forEach((t) => t.classList.add("is-visible"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -60px 0px" }
    );

    targets.forEach((t) => observer.observe(t));
  }

  /* ---------- 4. Contadores animados (stats) ---------- */
  function initCounters() {
    const counters = document.querySelectorAll("[data-counter]");
    if (!counters.length || !("IntersectionObserver" in window)) return;

    const animate = (el) => {
      const target = parseInt(el.getAttribute("data-counter"), 10);
      const suffix = el.getAttribute("data-suffix") || "";
      const duration = 1800;
      const start = performance.now();

      const step = (now) => {
        const progress = Math.min((now - start) / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        const value = Math.floor(target * eased);
        el.textContent = value.toLocaleString("es-CL") + suffix;
        if (progress < 1) requestAnimationFrame(step);
        else el.textContent = target.toLocaleString("es-CL") + suffix;
      };
      requestAnimationFrame(step);
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            animate(entry.target);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.4 }
    );

    counters.forEach((c) => observer.observe(c));
  }

  /* ---------- 5. Smooth scroll para anchors internos ---------- */
  function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach((link) => {
      link.addEventListener("click", (e) => {
        const href = link.getAttribute("href");
        if (!href || href === "#") return;
        const target = document.querySelector(href);
        if (!target) return;
        e.preventDefault();
        const offset = 80;
        const y = target.getBoundingClientRect().top + window.scrollY - offset;
        window.scrollTo({ top: y, behavior: "smooth" });
      });
    });
  }

  /* ---------- 6. Año dinámico en footer ---------- */
  function setYear() {
    const el = document.querySelector("[data-year]");
    if (el) el.textContent = new Date().getFullYear();
  }

  /* ---------- 7. Marcar link activo en navbar según página ---------- */
  function highlightActiveLink() {
    const path = window.location.pathname.split("/").pop() || "index.html";
    document.querySelectorAll("[data-navbar] a[href]").forEach((a) => {
      const href = a.getAttribute("href");
      if (href === path || (path === "" && href === "index.html") || (path === "index.html" && href === "index.html")) {
        a.classList.add("text-amber-600", "font-semibold");
        a.classList.remove("text-slate-700");
      }
    });
  }

  /* ---------- 8. Inicialización global ---------- */
  document.addEventListener("DOMContentLoaded", () => {
    initNavbar();
    initMobileMenu();
    initScrollReveal();
    initCounters();
    initSmoothScroll();
    setYear();
    highlightActiveLink();
  });
})();
