# Fresh Ads Studio website

A fast, mobile-first, one-page website. It's plain HTML, CSS and JavaScript, so there's no build step. Upload the folder to any static host (Netlify, Vercel, GitHub Pages, cPanel, etc.) and it works.

```
index.html     home page: info, packages, FAQ, contact
work.html      work & reviews page: videos, ads, recommendations
styles.css     design (brand colour is --primary at the top)
script.js      CONFIG (contact details), contact form
assets/        favicon, videos (assets/videos), ad thumbnails and logos (samples)
```

To preview it, open `index.html` in a browser.

## Still to do before going live

| What | Where |
|---|---|
| Contact form by email (optional) | Set `CONFIG.formEndpoint` to a Formspree URL. When it's empty, the form opens WhatsApp with the message filled in |
| Recommendations | **These are samples.** Replace them with real client quotes in `work.html` |
| Example work | It's All Accounting is real client work. Glow, Bean There, Karoo, Granny's, Van Wyk and FlowFix are **examples**. Replace them as you get real clients (`work.html`, `assets/`) |
| Prices (R500 / R750 / R1 000) | Packages section in `index.html` |
| Domain | Once you have one, add `<link rel="canonical" href="https://yourdomain/">` in `index.html` |

Contact details (WhatsApp 071 330 7822 and your email) are set in `CONFIG` in `script.js` and in the links in `index.html`.

## Adding a video

Export it as MP4. For the web, shrink it first, for example: `ffmpeg -i in.mp4 -vf scale=540:-2 -crf 26 -an -movflags +faststart out.mp4`. Then copy one of the `<figure class="vid">` blocks in `work.html`.
