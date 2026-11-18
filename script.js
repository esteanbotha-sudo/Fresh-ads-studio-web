/* ==========================================================
   Fresh Ads Studio: site script
   Edit CONFIG with your contact details.
   ========================================================== */
const CONFIG = {
  // WhatsApp number in international format, digits only (27 = South Africa, drop the leading 0)
  whatsapp: "27713307822",
  phoneDisplay: "071 330 7822",
  email: "esteanbotha@gmail.com",
  // Optional: a form backend such as Formspree ("https://formspree.io/f/xxxxxx").
  // If empty, the form opens WhatsApp with the message filled in.
  formEndpoint: ""
};

const MSG = {
  waHello: "Hi Fresh Ads Studio, I'd like to chat about ads for my business.",
  waPkg: (p) => `Hi Fresh Ads Studio, I'm interested in the ${p} package.`,
  required: "Please fill in your name, business and WhatsApp number.",
  phone: "Please enter a valid WhatsApp number.",
  sending: "Sending…",
  sent: "Thanks! Your message is on its way. I'll get back to you soon.",
  opened: "WhatsApp has opened with your message. Just tap send!",
  failed: "Something went wrong. Please WhatsApp or email me instead.",
  formIntro: "New enquiry from the website"
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

  /* ---------- Time-limited offers: hide anything past its data-until date ---------- */
  const now = new Date();
  $$("[data-until]").forEach((el) => {
    if (now >= new Date(el.dataset.until + "T00:00:00+02:00")) el.remove();
  });
  const yearlyOffer = !!$(".billing-toggle");

  /* ---------- Header border on scroll ---------- */
  const header = $(".site-header");
  const onScroll = () => header.classList.toggle("scrolled", window.scrollY > 8);
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  /* ---------- Monthly / yearly switch on the prices page ---------- */
  function setBilling(mode) {
    const yearly = mode === "yearly";
    $$(".billing-toggle button").forEach((b) => b.setAttribute("aria-pressed", String(b.dataset.billing === mode)));
    $$(".price[data-monthly]").forEach((p) => {
      p.querySelector(".amount").textContent = yearly ? p.dataset.yearly : p.dataset.monthly;
      p.querySelector(".per").textContent = yearly ? "/year" : "/month";
      let was = p.querySelector(".was");
      if (!was) { was = document.createElement("s"); was.className = "was"; p.prepend(was); }
      was.textContent = p.dataset.full || "";
      was.hidden = !yearly;
    });
    $$(".yearly-note").forEach((n) => (n.hidden = !yearly));
    $$("a[data-pkg]").forEach((a) => {
      a.href = `contact.html?pkg=${a.dataset.pkg}${yearly ? "&plan=yearly" : ""}#contact`;
    });
  }
  $$(".billing-toggle button").forEach((b) => b.addEventListener("click", () => setBilling(b.dataset.billing)));
  $$("[data-billing-jump]").forEach((b) => b.addEventListener("click", () => {
    setBilling("yearly");
    const grid = $(".pricing");
    if (grid) grid.scrollIntoView({ behavior: reduceMotionPref() ? "auto" : "smooth", block: "start" });
  }));
  function reduceMotionPref() { return matchMedia("(prefers-reduced-motion: reduce)").matches; }

  /* ---------- Package chosen on the prices page prefills the form ---------- */
  const params = new URLSearchParams(location.search);
  if (yearlyOffer && params.get("billing") === "yearly") setBilling("yearly");
  const pkgParam = params.get("pkg");
  const msgBox = $("#f-message");
  if (pkgParam && msgBox && /^(Starter|Growth|Premium)$/.test(pkgParam)) {
    msgBox.value = params.get("plan") === "yearly"
      ? `Hi Fresh Ads Studio, I'd like to book the ${pkgParam} package for a full year with the Christmas special (2 months free).`
      : MSG.waPkg(pkgParam);
  }

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

  if (form) form.addEventListener("submit", async (e) => {
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

  /* ---------- Videos: play while on screen, tap to pause ---------- */
  const vids = $$("video[data-autoplay]");
  const reduceMotion = matchMedia("(prefers-reduced-motion: reduce)").matches;
  vids.forEach((v) => {
    v.addEventListener("click", () => {
      if (v.paused) { v.dataset.paused = ""; v.play().catch(() => {}); }
      else { v.dataset.paused = "1"; v.pause(); }
    });
  });
  if ("IntersectionObserver" in window && !reduceMotion) {
    const vo = new IntersectionObserver((entries) => {
      entries.forEach((en) => {
        const v = en.target;
        if (en.isIntersecting && !v.dataset.paused) {
          v.preload = "auto";
          v.play().catch(() => {});
        } else if (!en.isIntersecting) {
          v.pause();
        }
      });
    }, { threshold: 0.35 });
    vids.forEach((v) => vo.observe(v));
  }

  /* ---------- Reveal on scroll ---------- */
  if ("IntersectionObserver" in window && !reduceMotion) {
    const items = $$(".card, .step, .price-card, .pf-item, .vid, .showcase, .faq details");
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
