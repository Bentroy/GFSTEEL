# G.F Steel Technology — React/Vite/Tailwind rebuild

Recreation of the Lovable demo (https://gfsteel.lovable.app/) as a
standalone Vite + React + Tailwind project, ready to open in VS Code.

## Setup

```bash
npm install
npm run dev
```

Open http://localhost:5173

## Build for production

```bash
npm run build
npm run preview
```

Output goes to `dist/`.

## Structure

```
src/
  App.jsx              — assembles all sections
  data.js              — all copy, image URLs, contact details in one place
  index.css            — Tailwind directives + base styles
  components/
    Navbar.jsx
    Hero.jsx
    Highlights.jsx     — the 4-up strip under the hero
    Products.jsx
    About.jsx
    WhyUs.jsx
    WhoWeServe.jsx
    HowToOrder.jsx
    CtaBanner.jsx       — orange "Let's talk materials" band
    QuoteForm.jsx
    Contact.jsx         — address + embedded map
    Footer.jsx
```

## Notes / next steps

- **Images**: currently pointing at the original Lovable-hosted asset URLs
  in `src/data.js` (`images` object) so the site renders immediately. Drop
  your own photos into `src/assets/` and swap the `import`/paths in
  `data.js` when you have final images.
- **Quote form**: `QuoteForm.jsx` currently just confirms locally on submit.
  Wire the `handleSubmit` function up to your backend, an email API, or a
  form service like Formspree/Getform to actually receive submissions.
- **Fonts**: Barlow Condensed (display) + Inter (body), loaded from Google
  Fonts in `index.html`. Update there if you change typefaces.
- **Colors**: the `steel` (dark neutrals) and `ember` (orange accent)
  palettes are defined in `tailwind.config.js` — adjust hex values there to
  match final brand colors.
