# Fresh Ads Studio website

A fast, mobile-first, one-page website. It's plain HTML, CSS and JavaScript, so there's no build step. Upload the folder to any static host (Netlify, Vercel, GitHub Pages, cPanel, etc.) and it works.

```
index.html     Home: what I do, how it works, recent videos, prices preview
why.html       Why us: reasons to choose you, comparison, what you get
prices.html    Prices: the 3 packages and FAQ
work.html      My work: It's All Accounting showreel and monthly videos
contact.html   About & contact: about the studio, WhatsApp, email, form
styles.css     design (brand colour is --primary at the top)
script.js      CONFIG (contact details), contact form
assets/        favicon and videos (assets/videos)
```

To preview it, open `index.html` in a browser.

The header, menu and footer are repeated on each page, so change them in all five files.

## Still to do before going live

| What | Where |
|---|---|
| Contact form by email (optional) | Set `CONFIG.formEndpoint` to a Formspree URL. When it's empty, the form opens WhatsApp with the message filled in |
| Client reviews | None yet. Ask It's All Accounting for a quote and add a reviews section to `work.html` |
| Christmas special | Banner and deal box hide automatically after 24 December (`data-until="2026-12-25"` in the HTML). Change that date to extend it |
| Prices (R500 / R750 / R1 000) | `prices.html`, plus the preview cards on `index.html` |
| Domain | Once you have one, add `<link rel="canonical" href="https://yourdomain/">` in `index.html` |

Contact details (WhatsApp 071 330 7822 and your email) are set in `CONFIG` in `script.js` and in the links in `index.html`.

## Adding a video

Export it as MP4. For the web, shrink it first, for example: `ffmpeg -i in.mp4 -vf scale=540:-2 -crf 26 -an -movflags +faststart out.mp4`. Then copy one of the `<figure class="vid">` blocks in `work.html`.
