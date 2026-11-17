# Fresh Ads Studio website

A fast, mobile-first, one-page website. It's plain HTML, CSS and JavaScript, so there's no build step. Upload the folder to any static host (Netlify, Vercel, GitHub Pages, cPanel, etc.) and it works.

```
index.html     page content and text
styles.css     design (brand colour is --primary at the top)
script.js      CONFIG (contact details), contact form
assets/        favicon, portfolio thumbnails, client logos (samples)
```

To preview it, open `index.html` in a browser.

## Still to do before going live

| What | Where |
|---|---|
| Contact form by email (optional) | Set `CONFIG.formEndpoint` to a Formspree URL. When it's empty, the form opens WhatsApp with the message filled in |
| Testimonials | **These are samples.** Replace them with real client quotes in `index.html` |
| Portfolio, logos, featured client & stats | **These are samples** (Glow Hair Studio, etc.). Replace them with your real work in `assets/` and `index.html` |
| Prices (R500 / R750 / R1 000) | Packages section in `index.html` |
| Domain | Once you have one, add `<link rel="canonical" href="https://yourdomain/">` in `index.html` |

Contact details (WhatsApp 071 330 7822 and your email) are set in `CONFIG` in `script.js` and in the links in `index.html`.
