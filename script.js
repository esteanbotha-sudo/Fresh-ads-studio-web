/* ==========================================================
   Fresh Ads Studio: site script
   Edit CONFIG with your contact details.
   ========================================================== */
const CONFIG = {
  // WhatsApp number in international format, digits only (27 = South Africa, drop the leading 0)
  whatsapp: "27713307822",
  phoneDisplay: "071 330 7822",
  email: "esteanbotha@gmail.com",
  // Your Calendly (or Cal.com / Google booking page) link. Leave as-is to show a WhatsApp fallback.
  bookingUrl: "https://calendly.com/your-link/free-call",
  // Optional: a form backend such as Formspree ("https://formspree.io/f/xxxxxx").
  // If empty, the form opens WhatsApp with the message filled in.
  formEndpoint: ""
};

const MSG = {
  waHello: "Hi Fresh Ads Studio, I'd like to chat about ads for my business.",
  waPkg: (p) => `Hi Fresh Ads Studio, I'm interested in the ${p} package.`,
  required: "Please fill in your name, business and phone number.",
  phone: "Please enter a valid phone number.",
  sending: "Sending…",
  sent: "Thanks! Your message is on its way. I'll get back to you soon.",
  opened: "WhatsApp has opened with your message. Just tap send!",
  failed: "Something went wrong. Please WhatsApp or email me instead.",
  formIntro: "New enquiry from the website",
  bookTitle: "Booking calendar coming soon",
  bookText: "In the meantime, send me a WhatsApp and we'll find a time that suits you.",
  bookBtn: "WhatsApp to book",
  calTitle: "Booking calendar"
};

(function () {
  "use strict";
  const $ = (s, c = document) => c.querySelector(s);
  const $$ = (s, c = document) => Array.from(c.querySelectorAll(s));

  const waLink = (text) =>
    `https://wa.me/${CONFIG.whatsapp}${text ? "?text=" + encodeURIComponent(text) : ""}`;

  /* ---------- Apply contact config ---------- */
  $$(".js-wa").forEach((a) => (a.href = waLink(MSG.waHello)));
  $$(".js-phone").forEach((el) => (el.textContent = CONFIG.phoneDisplay));
  $$(".js-email").forEach((a) => (a.href = "mailto:" + CONFIG.email));
  $$(".js-email-text").forEach((el) => (el.textContent = CONFIG.email));

  /* ---------- Header border on scroll ---------- */
  const header = $(".site-header");
  const onScroll = () => header.classList.toggle("scrolled", window.scrollY > 8);
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  /* ---------- Package buttons prefill the form ---------- */
  $$("[data-pkg]").forEach((btn) =>
    btn.addEventListener("click", () => {
      const msg = $("#f-message");
      if (msg && !msg.value.trim()) msg.value = MSG.waPkg(btn.dataset.pkg);
    })
  );

  /* ---------- Contact form ---------- */
  const form = $("#contact-form");
  const status = $("#form-status");
  const fail = (text, input) => {
    status.textContent = text;
    status.classList.add("err");
    input.focus();
  };

  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(form).entries());
    status.className = "form-status";

    let firstBad = null;
    ["name", "business", "phone"].forEach((f) => {
      const input = form.elements[f];
      const bad = !String(data[f] || "").trim();
      input.setAttribute("aria-invalid", String(bad));
      if (bad && !firstBad) firstBad = input;
    });
    if (firstBad) return fail(MSG.required, firstBad);
    if (String(data.phone).replace(/\D/g, "").length < 9) {
      form.elements.phone.setAttribute("aria-invalid", "true");
      return fail(MSG.phone, form.elements.phone);
    }

    if (CONFIG.formEndpoint) {
      status.textContent = MSG.sending;
      try {
        const res = await fetch(CONFIG.formEndpoint, {
          method: "POST",
          headers: { "Content-Type": "application/json", Accept: "application/json" },
          body: JSON.stringify(data)
        });
        if (!res.ok) throw new Error(res.status);
        form.reset();
        status.textContent = MSG.sent;
        status.classList.add("ok");
      } catch (err) {
        status.textContent = MSG.failed;
        status.classList.add("err");
      }
      return;
    }

    // No backend configured: hand the enquiry over to WhatsApp
    const text =
      `${MSG.formIntro}\n\nName: ${data.name}\nBusiness: ${data.business}\nPhone: ${data.phone}` +
      (data.message ? `\nMessage: ${data.message}` : "");
    window.open(waLink(text), "_blank", "noopener");
    status.textContent = MSG.opened;
    status.classList.add("ok");
  });

  /* ---------- Booking calendar (lazy-loaded) ---------- */
  const frame = $("#booking-frame");
  const bookingConfigured = CONFIG.bookingUrl && !/your-link/.test(CONFIG.bookingUrl);

  function loadBooking() {
    if (frame.dataset.loaded) return;
    frame.dataset.loaded = "1";
    if (!bookingConfigured) {
      frame.innerHTML =
        `<div class="booking-fallback"><h4>${MSG.bookTitle}</h4><p>${MSG.bookText}</p>` +
        `<a class="btn btn-primary" target="_blank" rel="noopener" href="${waLink(MSG.waHello)}">${MSG.bookBtn}</a></div>`;
      return;
    }
    const iframe = document.createElement("iframe");
    const sep = CONFIG.bookingUrl.includes("?") ? "&" : "?";
    iframe.src = `${CONFIG.bookingUrl}${sep}hide_gdpr_banner=1&primary_color=0e9f6e`;
    iframe.title = MSG.calTitle;
    iframe.loading = "lazy";
    frame.innerHTML = "";
    frame.appendChild(iframe);
  }

  if ("IntersectionObserver" in window) {
    const io = new IntersectionObserver((entries) => {
      if (entries.some((en) => en.isIntersecting)) { loadBooking(); io.disconnect(); }
    }, { rootMargin: "400px" });
    io.observe(frame);
  } else {
    loadBooking();
  }

  /* ---------- Reveal on scroll ---------- */
  if ("IntersectionObserver" in window && !matchMedia("(prefers-reduced-motion: reduce)").matches) {
    const items = $$(".card, .step, .price-card, .pf-item, .featured-client, .faq details");
    items.forEach((el) => el.classList.add("reveal"));
    const ro = new IntersectionObserver((entries) => {
      entries.forEach((en) => {
        if (en.isIntersecting) { en.target.classList.add("in"); ro.unobserve(en.target); }
      });
    }, { threshold: 0.12 });
    items.forEach((el) => ro.observe(el));
  }

  const y = $("#year");
  if (y) y.textContent = new Date().getFullYear();
})();
