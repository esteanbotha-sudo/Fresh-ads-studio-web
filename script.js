/* ==========================================================
   Fresh Ads Studio: site script
   1. Edit CONFIG with your real details.
   2. English text lives in index.html; Afrikaans is in AF below.
   ========================================================== */
const CONFIG = {
  // WhatsApp number in international format, digits only (27 = South Africa, drop the leading 0)
  whatsapp: "27000000000",
  phoneDisplay: "+27 00 000 0000",
  email: "hello@freshadsstudio.co.za",
  // Your Calendly (or Cal.com / Google booking page) link. Leave as-is to show a WhatsApp fallback.
  bookingUrl: "https://calendly.com/your-link/free-call",
  // Optional: a form backend such as Formspree ("https://formspree.io/f/xxxxxx").
  // If empty, the form opens WhatsApp with the message filled in.
  formEndpoint: ""
};

/* ---------- Afrikaans translations ---------- */
const AF = {
  "skip": "Slaan oor na inhoud",
  "nav.services": "Wat ek doen",
  "nav.how": "Hoe dit werk",
  "nav.packages": "Pakkette",
  "nav.work": "Werk",
  "nav.faq": "Vrae",
  "nav.cta": "Bespreek ’n oproep",

  "hero.eyebrow": "Vryskut-advertensiebestuurder · [Town], Suid-Afrika",
  "hero.title": "Vars advertensies en video’s vir jou besigheid, <span class=\"hl\">elke maand.</span>",
  "hero.sub": "Ek ontwerp jou sosiale media-advertensies, maak kort video’s en bestuur jou Facebook- en Instagram-veldtogte. Jy kry professionele inhoud sonder om ’n agentskap aan te stel.",
  "hero.cta": "Bespreek ’n gratis oproep",
  "hero.wa": "WhatsApp my",
  "hero.p1": "Engels &amp; Afrikaans",
  "hero.p2": "Maand-tot-maand",
  "hero.p3": "Plaaslik &amp; persoonlik",

  "problem.title": "Sosiale media is belangrik, maar wie het die tyd?",
  "problem.1.t": "Geen tyd nie",
  "problem.1.d": "Jy is besig om jou besigheid te bestuur. Om 10nm plasings te maak, is nie ’n plan nie.",
  "problem.2.t": "Onreëlmatige plasings",
  "problem.2.d": "’n Klomp plasings, dan weke lank stilte. Kliënte vergeet van jou.",
  "problem.3.t": "Advertensies wat amateuragtig lyk",
  "problem.3.d": "Vae foto’s en besige ontwerpe laat ’n uitstekende besigheid gewoon lyk.",

  "services.eyebrow": "Wat ek doen",
  "services.title": "Alles wat jy nodig het om aanlyn goed te lyk",
  "services.1.t": "Maandelikse advertensie-ontwerpe",
  "services.1.d": "Vars advertensies in jou eie styl vir Facebook en Instagram, elke maand, gemaak sodat mense stop en kyk.",
  "services.2.t": "Kort promosievideo’s",
  "services.2.d": "Reels en stories met duidelike onderskrifte in Engels of Afrikaans, sodat hulle selfs sonder klank werk.",
  "services.3.t": "Bestuur van advertensieveldtogte",
  "services.3.d": "Ek stel jou betaalde advertensies op Facebook en Instagram op en bestuur dit, gerig op die regte mense in jou omgewing.",
  "services.4.t": "’n Eenvoudige maandverslag",
  "services.4.d": "Wat ons geplaas het, wie dit gesien het en wat dit opgelewer het, in gewone taal.",

  "how.eyebrow": "Hoe dit werk",
  "how.title": "Vier eenvoudige stappe",
  "how.1.t": "Gratis oproep",
  "how.1.d": "Ons gesels 20 minute oor jou besigheid, jou kliënte en jou doelwitte.",
  "how.2.t": "Maandplan",
  "how.2.d": "Ek stuur vir jou ’n duidelike inhoudsplan vir die maand. Jy keur dit goed of vra vir veranderinge.",
  "how.3.t": "Ek skep en plaas",
  "how.3.d": "Ek ontwerp die advertensies, redigeer die video’s, en plaas en bestuur jou veldtogte.",
  "how.4.t": "Jy kry resultate en ’n verslag",
  "how.4.d": "Meer mense sien en kontak jou besigheid, en jy kry elke maand ’n verslag.",

  "packages.eyebrow": "Pakkette",
  "packages.title": "Eenvoudige maandelikse pryse",
  "packages.sub": "Geen opstelfooie nie. Geen lang kontrakte nie. Advertensiebesteding word direk aan Meta betaal en is nie ingesluit nie.",
  "pkg.per": "/maand",
  "pkg.report": "Maandverslag",
  "pkg.popular": "Gewildste",
  "pkg.starter": "Begin",
  "pkg.starter.d": "Vir besighede wat ’n bestendige, professionele teenwoordigheid wil hê.",
  "pkg.starter.1": "4 advertensie-ontwerpe",
  "pkg.starter.2": "1 kort promosievideo",
  "pkg.starter.3": "Onderskrifte in Engels of Afrikaans",
  "pkg.choose": "Kies Begin",
  "pkg.growth": "Groei",
  "pkg.growth.d": "Vir besighede wat gereed is om meer kliënte deur betaalde advertensies te kry.",
  "pkg.growth.1": "8 advertensie-ontwerpe",
  "pkg.growth.2": "2 kort promosievideo’s",
  "pkg.growth.3": "Bestuur van Facebook- &amp; Instagram-advertensies",
  "pkg.choose2": "Kies Groei",
  "pkg.premium": "Premium",
  "pkg.premium.d": "Vir besige besighede wat die hele maand oral wil wees.",
  "pkg.premium.1": "Alles in Groei",
  "pkg.premium.2": "12 advertensie-ontwerpe",
  "pkg.premium.3": "4 kort promosievideo’s",
  "pkg.premium.4": "Voorkeurondersteuning &amp; vinniger omkeertyd",
  "pkg.choose3": "Kies Premium",

  "work.eyebrow": "Onlangse werk",
  "work.title": "Advertensies en video’s wat raakgesien word",
  "work.video": "Video",
  "work.ad": "Advertensie",
  "work.featured": "Uitgeligte kliënt",
  "work.featured.d": "Ons het oorgeskakel van af en toe plaas na ’n bestendige stroom advertensies en reels elke week. Binne drie maande het hul navrae op WhatsApp meer as verdubbel.",
  "work.stat1": "meer navrae",
  "work.stat2": "mense bereik per maand",
  "work.stat3": "plasings per maand",
  "work.logos": "Vertrou deur plaaslike besighede",

  "testi.title": "Wat kliënte sê",
  "testi.1": "“Ek het altyd gestres oor wat om te plaas. Nou lyk my salon se Instagram fantasties en ek hoef nie eers daaroor te dink nie.”",
  "testi.2": "“Professioneel, vinnig en maklik om mee te werk. Die Afrikaanse video’s het baie goed by ons kliënte aangeslaan.”",
  "testi.3": "“Ons wintersuitverkoping-advertensie het mense in die winkel gebring wat nog nooit tevore daar was nie. Elke rand werd.”",

  "faq.title": "Vrae? Beantwoord.",
  "faq.1.q": "Hoe lank is die kontrak?",
  "faq.1.a": "Daar is geen lang kontrak nie. Alle pakkette is maand-tot-maand. Ek vra net 30 dae kennisgewing as jy wil stop.",
  "faq.2.q": "Wat het jy van my nodig?",
  "faq.2.a": "Jou logo, ’n paar foto’s of kort snitte van jou besigheid (selfoonvideo’s is reg) en 20 minute per maand om die plan goed te keur. Ek help jou met die res.",
  "faq.3.q": "Hoe gou kry ek my inhoud?",
  "faq.3.a": "Jou eerste inhoud is binne 7 werksdae na ons oproep gereed. Daarna lewer ek elke maand se inhoud voordat die maand begin. Premium-kliënte kry veranderinge binne 24 uur terug.",
  "faq.4.q": "Besit ek die inhoud?",
  "faq.4.a": "Ja. Sodra jy vir die maand betaal het, is al die advertensies en video’s joune om te hou en te gebruik waar jy wil, selfs as jy ophou om met my te werk.",
  "faq.5.q": "Is die advertensiebesteding by die prys ingesluit?",
  "faq.5.a": "Nee. Advertensiebesteding word direk uit jou eie rekening aan Facebook/Instagram betaal, sodat jy in beheer bly. Die meeste klein besighede begin met R1 000 tot R3 000 per maand, en ek help jou kies.",

  "contact.eyebrow": "Kom ons gesels",
  "contact.title": "Bespreek jou gratis oproep",
  "contact.sub": "Kies ’n tyd in die kalender, stuur ’n boodskap of WhatsApp my. Ek antwoord gewoonlik binne ’n paar uur.",
  "contact.email": "E-pos",
  "contact.book": "Kies ’n tyd vir jou gratis oproep",
  "contact.loading": "Laai kalender…",
  "form.name": "Jou naam",
  "form.business": "Besigheid se naam",
  "form.phone": "Telefoonnommer",
  "form.message": "Boodskap",
  "form.message.ph": "Vertel my ’n bietjie van jou besigheid en wat jy nodig het.",
  "form.send": "Stuur boodskap",

  "footer.tag": "Maandelikse advertensies &amp; video’s vir klein besighede in [Town] en verder.",
  "wa.float": "Gesels op WhatsApp"
};

/* Strings used only by the script */
const MSG = {
  en: {
    title: "Fresh Ads Studio | Monthly Ads & Video Content for Small Businesses in [Town]",
    desc: "Fresh Ads Studio creates professional social media ads and short promo videos for small businesses in [Town], South Africa, every month. English and Afrikaans. No agency, no contracts. Book a free call.",
    waHello: "Hi Fresh Ads Studio, I'd like to chat about ads for my business.",
    waPkg: (p) => `Hi Fresh Ads Studio, I'm interested in the ${p} package.`,
    required: "Please fill in your name, business and phone number.",
    phone: "Please enter a valid phone number.",
    sending: "Sending…",
    sent: "Thanks! Your message is on its way. I'll get back to you soon.",
    opened: "WhatsApp has opened with your message. Just tap send!",
    failed: "Something went wrong. Please WhatsApp or email me instead.",
    formIntro: "New enquiry from the website",
    fName: "Name", fBiz: "Business", fPhone: "Phone", fMsg: "Message",
    bookTitle: "Booking calendar coming soon",
    bookText: "In the meantime, send me a WhatsApp and we'll find a time that suits you.",
    bookBtn: "WhatsApp to book",
    calTitle: "Booking calendar"
  },
  af: {
    title: "Fresh Ads Studio | Maandelikse advertensies en video-inhoud vir klein besighede in [Town]",
    desc: "Fresh Ads Studio skep elke maand professionele sosiale media-advertensies en kort promosievideo’s vir klein besighede in [Town], Suid-Afrika. Engels en Afrikaans. Bespreek ’n gratis oproep.",
    waHello: "Hallo Fresh Ads Studio, ek wil graag gesels oor advertensies vir my besigheid.",
    waPkg: (p) => `Hallo Fresh Ads Studio, ek stel belang in die ${p}-pakket.`,
    required: "Vul asseblief jou naam, besigheid en telefoonnommer in.",
    phone: "Voer asseblief ’n geldige telefoonnommer in.",
    sending: "Stuur tans…",
    sent: "Dankie! Jou boodskap is op pad. Ek kom gou na jou terug.",
    opened: "WhatsApp het oopgemaak met jou boodskap. Tik net op stuur!",
    failed: "Iets het verkeerd geloop. WhatsApp of e-pos my asseblief eerder.",
    formIntro: "Nuwe navraag van die webwerf",
    fName: "Naam", fBiz: "Besigheid", fPhone: "Telefoon", fMsg: "Boodskap",
    bookTitle: "Besprekingskalender kom binnekort",
    bookText: "Stuur intussen vir my ’n WhatsApp, dan vind ons ’n tyd wat jou pas.",
    bookBtn: "WhatsApp om te bespreek",
    calTitle: "Besprekingskalender"
  }
};

(function () {
  "use strict";
  const $ = (s, c = document) => c.querySelector(s);
  const $$ = (s, c = document) => Array.from(c.querySelectorAll(s));
  let lang = "en";
  const frame = $("#booking-frame");
  const bookingConfigured = CONFIG.bookingUrl && !/your-link/.test(CONFIG.bookingUrl);

  const waLink = (text) =>
    `https://wa.me/${CONFIG.whatsapp}${text ? "?text=" + encodeURIComponent(text) : ""}`;

  /* ---------- Apply contact config ---------- */
  function applyConfig() {
    $$(".js-wa").forEach((a) => (a.href = waLink(MSG[lang].waHello)));
    $$(".js-phone").forEach((el) => (el.textContent = CONFIG.phoneDisplay));
    $$(".js-email").forEach((a) => (a.href = "mailto:" + CONFIG.email));
    $$(".js-email-text").forEach((el) => (el.textContent = CONFIG.email));
  }

  /* ---------- i18n ---------- */
  const EN = {};
  $$("[data-i18n]").forEach((el) => {
    const k = el.dataset.i18n;
    if (!(k in EN)) EN[k] = el.innerHTML.trim();
  });
  $$("[data-i18n-attr]").forEach((el) => {
    el.dataset.i18nAttr.split(";").forEach((pair) => {
      const [attr, k] = pair.split(":");
      if (!(k in EN)) EN[k] = el.getAttribute(attr) || "";
    });
  });

  function setLang(next) {
    lang = next === "af" ? "af" : "en";
    const dict = lang === "af" ? AF : EN;
    $$("[data-i18n]").forEach((el) => {
      const v = dict[el.dataset.i18n] ?? EN[el.dataset.i18n];
      if (v != null) el.innerHTML = v;
    });
    $$("[data-i18n-attr]").forEach((el) => {
      el.dataset.i18nAttr.split(";").forEach((pair) => {
        const [attr, k] = pair.split(":");
        const v = dict[k] ?? EN[k];
        if (v != null) el.setAttribute(attr, v);
      });
    });
    document.documentElement.lang = lang;
    document.title = MSG[lang].title;
    const md = $('meta[name="description"]');
    if (md) md.setAttribute("content", MSG[lang].desc);
    $$(".lang-toggle button").forEach((b) =>
      b.setAttribute("aria-pressed", String(b.dataset.lang === lang))
    );
    applyConfig();
    renderBookingFallbackText();
    try { localStorage.setItem("fas-lang", lang); } catch (e) {}
  }

  $$(".lang-toggle button").forEach((b) =>
    b.addEventListener("click", () => setLang(b.dataset.lang))
  );

  let saved = null;
  try { saved = localStorage.getItem("fas-lang"); } catch (e) {}
  const urlLang = new URLSearchParams(location.search).get("lang");
  const initial = urlLang || saved || ((navigator.language || "").toLowerCase().startsWith("af") ? "af" : "en");
  setLang(initial);

  /* ---------- Header shadow on scroll ---------- */
  const header = $(".site-header");
  const onScroll = () => header.classList.toggle("scrolled", window.scrollY > 8);
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  /* ---------- Package buttons prefill the form ---------- */
  $$("[data-pkg]").forEach((btn) =>
    btn.addEventListener("click", () => {
      const msg = $("#f-message");
      if (msg && !msg.value.trim()) msg.value = MSG[lang].waPkg(btn.dataset.pkg);
    })
  );

  /* ---------- Contact form ---------- */
  const form = $("#contact-form");
  const status = $("#form-status");
  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(form).entries());
    const t = MSG[lang];
    status.className = "form-status";

    let firstBad = null;
    ["name", "business", "phone"].forEach((f) => {
      const input = form.elements[f];
      const bad = !String(data[f] || "").trim();
      input.setAttribute("aria-invalid", String(bad));
      if (bad && !firstBad) firstBad = input;
    });
    if (firstBad) {
      status.textContent = t.required;
      status.classList.add("err");
      firstBad.focus();
      return;
    }
    if (String(data.phone).replace(/\D/g, "").length < 9) {
      form.elements.phone.setAttribute("aria-invalid", "true");
      status.textContent = t.phone;
      status.classList.add("err");
      form.elements.phone.focus();
      return;
    }

    if (CONFIG.formEndpoint) {
      status.textContent = t.sending;
      try {
        const res = await fetch(CONFIG.formEndpoint, {
          method: "POST",
          headers: { "Content-Type": "application/json", Accept: "application/json" },
          body: JSON.stringify({ ...data, language: lang })
        });
        if (!res.ok) throw new Error(res.status);
        form.reset();
        status.textContent = t.sent;
        status.classList.add("ok");
      } catch (err) {
        status.textContent = t.failed;
        status.classList.add("err");
      }
      return;
    }

    // No backend configured: hand the enquiry over to WhatsApp
    const text =
      `${t.formIntro}\n\n${t.fName}: ${data.name}\n${t.fBiz}: ${data.business}\n` +
      `${t.fPhone}: ${data.phone}` + (data.message ? `\n${t.fMsg}: ${data.message}` : "");
    window.open(waLink(text), "_blank", "noopener");
    status.textContent = t.opened;
    status.classList.add("ok");
  });

  /* ---------- Booking calendar (lazy-loaded) ---------- */

  function renderBookingFallbackText() {
    if (bookingConfigured || !frame.dataset.fallback) return;
    const t = MSG[lang];
    frame.innerHTML =
      `<div class="booking-fallback"><h4>${t.bookTitle}</h4><p>${t.bookText}</p>` +
      `<a class="btn btn-primary" target="_blank" rel="noopener" href="${waLink(t.waHello)}">${t.bookBtn}</a></div>`;
  }

  function loadBooking() {
    if (frame.dataset.loaded) return;
    frame.dataset.loaded = "1";
    if (!bookingConfigured) {
      frame.dataset.fallback = "1";
      renderBookingFallbackText();
      return;
    }
    const iframe = document.createElement("iframe");
    const sep = CONFIG.bookingUrl.includes("?") ? "&" : "?";
    iframe.src = `${CONFIG.bookingUrl}${sep}hide_gdpr_banner=1&primary_color=0e9f6e`;
    iframe.title = MSG[lang].calTitle;
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
