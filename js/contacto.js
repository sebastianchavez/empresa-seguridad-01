/* ============================================================
   VigilPro - JS específico de Contacto
   Validación y simulación de envío del formulario.
   ============================================================ */
(function () {
  "use strict";

  const validators = {
    nombre: (v) => v.trim().length >= 3,
    telefono: (v) => /^[+\d\s()-]{8,}$/.test(v.trim()),
    email: (v) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.trim()),
    servicio: (v) => v.length > 0,
    mensaje: (v) => v.trim().length >= 10
  };

  function setFieldState(input, isValid) {
    input.classList.remove("is-error", "is-success");
    if (input.value.trim() === "") return;
    input.classList.add(isValid ? "is-success" : "is-error");
  }

  function validateField(input) {
    const validator = validators[input.name];
    if (!validator) return true;
    const ok = validator(input.value);
    setFieldState(input, ok);
    return ok;
  }

  function initForm() {
    const form = document.getElementById("contactoForm");
    if (!form) return;

    const inputs = form.querySelectorAll("input, select, textarea");

    inputs.forEach((input) => {
      input.addEventListener("blur", () => validateField(input));
      input.addEventListener("input", () => {
        if (input.classList.contains("is-error")) validateField(input);
      });
    });

    form.addEventListener("submit", (e) => {
      e.preventDefault();

      let allValid = true;
      inputs.forEach((input) => {
        if (input.name && !validateField(input)) {
          allValid = false;
        }
      });

      if (!form.querySelector("[name=acepta]").checked) {
        allValid = false;
      }

      if (!allValid) {
        form.classList.add("anim-shake");
        setTimeout(() => form.classList.remove("anim-shake"), 500);
        const firstError = form.querySelector(".is-error");
        if (firstError) firstError.focus();
        return;
      }

      const submitBtn = form.querySelector("button[type=submit]");
      const btnText = submitBtn.querySelector(".btn-text");
      const btnIcon = submitBtn.querySelector(".btn-icon");
      const btnSpinner = submitBtn.querySelector(".btn-spinner");

      btnText.textContent = "Enviando...";
      btnIcon.classList.add("hidden");
      btnSpinner.classList.remove("hidden");
      submitBtn.disabled = true;

      setTimeout(() => {
        form.reset();
        inputs.forEach((i) => i.classList.remove("is-success", "is-error"));
        document.getElementById("formSuccess").classList.remove("hidden");
        btnText.textContent = "Enviar mensaje";
        btnIcon.classList.remove("hidden");
        btnSpinner.classList.add("hidden");
        submitBtn.disabled = false;

        setTimeout(() => {
          document.getElementById("formSuccess").classList.add("hidden");
        }, 6000);

        document.getElementById("formSuccess").scrollIntoView({ behavior: "smooth", block: "center" });
      }, 1400);
    });

    // Pre-fill desde query params
    const params = new URLSearchParams(window.location.search);
    const servicio = params.get("servicio");
    const plan = params.get("plan");
    if (servicio) {
      const map = {
        "cctv": "Circuito Cerrado de TV",
        "alarmas": "Alarmas Monitoreadas",
        "control-acceso": "Control de Acceso",
        "rondas": "Rondas de Vigilancia",
        "escolta": "Escolta Privada",
        "monitoreo-24-7": "Monitoreo 24/7",
        "consultoria": "Consultoría de Seguridad",
        "respuesta-intrusion": "Respuesta ante Intrusión"
      };
      const select = form.querySelector("[name=servicio]");
      if (select && map[servicio]) select.value = map[servicio];
    }
    if (plan) {
      const labels = {
        "residencial": "RESIDENCIAL",
        "empresarial": "EMPRESARIAL",
        "vip": "PREMIUM VIP"
      };
      const msg = form.querySelector("[name=mensaje]");
      if (msg && !msg.value && labels[plan]) {
        msg.value = `Hola, estoy interesado en el Plan ${labels[plan]}. Me gustaría recibir más información y una cotización.`;
      }
    }
  }

  document.addEventListener("DOMContentLoaded", initForm);
})();