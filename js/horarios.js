/* ============================================================
   VigilPro - JS específico de Horarios
   Renderiza la tabla de turnos semanales.
   ============================================================ */

(function () {
  "use strict";

  function renderTurnos() {
    const container = document.getElementById("turnosBody");
    if (!container || !window.VIGILPRO) return;

    const isClosed = (text) => text.toLowerCase().includes("cerrado");

    container.innerHTML = window.VIGILPRO.turnos.map((t, i) => `
      <tr class="${i % 2 === 0 ? 'bg-white' : 'bg-slate-50/50'} hover:bg-amber-50/30 transition-colors">
        <td class="px-6 py-4 font-bold text-slate-900">
          <div class="flex items-center gap-3">
            <span class="w-2 h-2 rounded-full ${isClosed(t.manana) && isClosed(t.tarde) ? 'bg-red-400' : 'bg-emerald-400'}"></span>
            ${t.dia}
          </div>
        </td>
        <td class="px-6 py-4">
          ${isClosed(t.manana)
            ? '<span class="text-slate-400 text-sm">—</span>'
            : `<span class="inline-flex items-center px-3 py-1 rounded-full bg-amber-100 text-amber-700 text-xs font-bold">${t.manana}</span>`}
        </td>
        <td class="px-6 py-4">
          ${isClosed(t.tarde)
            ? '<span class="text-slate-400 text-sm">—</span>'
            : `<span class="inline-flex items-center px-3 py-1 rounded-full bg-amber-100 text-amber-700 text-xs font-bold">${t.tarde}</span>`}
        </td>
        <td class="px-6 py-4">
          ${isClosed(t.noche)
            ? '<span class="text-slate-400 text-sm">—</span>'
            : `<span class="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-emerald-100 text-emerald-700 text-xs font-bold"><span class="w-1.5 h-1.5 rounded-full bg-emerald-500 anim-pulse-soft"></span>${t.noche}</span>`}
        </td>
      </tr>
    `).join("");
  }

  document.addEventListener("DOMContentLoaded", renderTurnos);
})();