# Water Damage Restoration

Static landing site for WealthLink Media. Homeowners in a flood search Google or ChatGPT. This page is for the restoration owner who wants that call.

GitHub Pages serves it from `main` at the site root:

https://wealthlinkmedia1997.github.io/Water-Damage-Restoration/

## Pages

- `index.html` — VSL, application form, results, video rail
- `thank-you.html` — after the form. Contact: Angie, WealthLink Media
- `book-tracked.html` — good leads, Schedule Your Strategy Call
- `book-untracked.html` — not the primary fit, can still book
- `sorry.html` — under the revenue range
- `no-google-business.html` — no Google Business Profile
- `privacy.html`

Links are relative so they work under `/Water-Damage-Restoration/`.

## Config

`js/config.js` leaves the pixel and the lead webhook blank. Empty webhook: the form does not POST, and still redirects to the thank-you page. Empty pixel id: the pixel script is not loaded. The Places key and both GHL calendar URLs are set. Blank calendar URLs would show “Calendar not configured yet”.

The video is `assets/video/vsl.mp4` with poster `assets/video/vsl-poster.jpg`.
