# Fresh Ads Studio website

A fast, mobile-first, one-page website in English and Afrikaans. It's plain HTML, CSS and JavaScript, so there's no build step. Upload the folder to any static host (Netlify, Vercel, GitHub Pages, cPanel, etc.) and it works.

```
index.html     page content (the English text lives here)
styles.css     design (brand colour is --primary at the top)
script.js      CONFIG (contact details), Afrikaans text, form, language toggle, calendar
assets/        favicon, portfolio thumbnails, client logos (placeholders)
```

To preview it, open `index.html` in a browser, or run `python3 -m http.server` and go to http://localhost:8000.

## Before going live: replace the placeholders

| What | Where |
|---|---|
| `[Town]` | Find and replace in `index.html` and `script.js` (title, description, hero, footer, schema) |
| `[Client Name]` | `index.html` (featured client card and logo strip) |
| WhatsApp number, phone, email | `CONFIG` at the top of `script.js` (the fallbacks in `index.html` use `27000000000`, so update those too) |
| Booking calendar | `CONFIG.bookingUrl` (a Calendly or Cal.com link). Until it's set, visitors see a "WhatsApp to book" card |
| Contact form | Set `CONFIG.formEndpoint` to a Formspree (or similar) URL to receive emails. When it's empty, the form opens WhatsApp with the message filled in |
| Prices & package contents | `index.html` (Packages section) and the matching `pkg.*` keys in `script.js` |
| Testimonials | **These are samples.** Replace them with real client quotes in `index.html` and `script.js` (`testi.*`) |
| Portfolio & logos | **These are samples.** Replace the files in `assets/portfolio` and `assets/logos`, and update the alt text |
| Featured client stats (2×, 18k, 12) | `index.html`. Use real numbers |
| Domain | `canonical` link and schema `url` in `index.html` |
| Brand colour | `--primary` / `--primary-dark` / `--primary-soft` in `styles.css` |

## Editing text

- **English:** edit it directly in `index.html`.
- **Afrikaans:** edit the `AF` object in `script.js`. Each `data-i18n="key"` in the HTML has a matching key there.
- The language choice is remembered, and `?lang=af` in the URL opens the Afrikaans version directly.
