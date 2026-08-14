# Amulya Pratap Singh — Portfolio Website

A static, dependency-free portfolio site (HTML/CSS/JS) built strictly from the
provided resume content and profile photo. No build step is required.

## Folder structure

```
portfolio/
├── index.html                          # All page markup + SEO/OG meta tags
├── css/
│   └── style.css                       # Design tokens, layout, responsive rules, animations
├── js/
│   └── main.js                         # Nav, scroll-reveal, count-up metrics, skills data, form validation
├── assets/
│   ├── profile-photo.jpg               # Your uploaded photo (used as-is, unedited)
│   └── Amulya-Pratap-Singh-Resume.pdf  # Your uploaded resume (used for the Download Resume button)
└── README.md
```

## How to run it

No installation needed — it's plain HTML/CSS/JS.

- **Quickest:** double-click `index.html` to open it in a browser.
- **Local server (recommended, avoids any browser file:// restrictions):**
  ```bash
  cd portfolio
  python3 -m http.server 8080
  # then open http://localhost:8080
  ```
- **Deploy anywhere static:** Netlify, Vercel, GitHub Pages, or any static host — just upload the `portfolio` folder contents.

## Technologies used

Vanilla HTML5, CSS3 (custom properties, grid/flexbox, no framework), and
vanilla JavaScript (IntersectionObserver for scroll reveal / active nav /
count-up stats, plus form validation). Fonts loaded from Google Fonts (Sora,
Inter, JetBrains Mono). Technology badge icons in the hero load from the
`devicon` CDN (jsdelivr) — swap for local SVGs if you need a fully offline build.

> Note: the original brief requested a React + Vite + Tailwind stack. This
> build environment had no network access to install npm packages, so the
> site was implemented in plain HTML/CSS/JS instead — it delivers the same
> design, sections, animations, and responsiveness with zero dependencies to
> install. If you'd like, this can be re-implemented as a React/Vite project
> on a machine with npm access using the same design tokens and content.

## Content accuracy

All copy, metrics, project details, education, certifications, and the
YouTube achievement are taken directly from your resume text — nothing was
invented. Project links show "Coming Soon" since no live/source URLs were
provided.

## Manual configuration still needed

1. **Contact form email delivery** — the form currently validates in the
   browser only; it does not send emails. Open `js/main.js` and set
   `CONTACT_FORM_ENDPOINT` to a service like Formspree or EmailJS (or your
   own backend) to make it actually deliver messages. Until then, the email
   and phone links in the Contact section are fully functional (`mailto:` /
   `tel:`).
2. **Offline icons (optional)** — the small React/Node/MySQL badge icons next
   to the hero photo are pulled from a public CDN. If you need the site to
   work with zero external requests, download those three SVGs and reference
   them from a local `assets/icons/` folder instead.

## Quality checklist

- [x] Name, contact info, and photo match what you provided
- [x] No fabricated experience, skills, projects, links, or stats
- [x] All resume sections included (Summary, Education, Skills, Experience,
      Projects, Certifications, Achievement, Contact)
- [x] 200+ records / 100% accuracy / 20-member team metrics shown as animated counters
- [x] "Myth Unveiled" 114K+ subscribers shown under a dedicated "Beyond Code" section
- [x] No fake GitHub/LinkedIn/project URLs — "Coming Soon" used instead
- [x] Responsive from 360px up to 1920px, including working mobile menu
- [x] Semantic HTML, alt text, visible focus states, `prefers-reduced-motion` respected
- [x] Verified in a headless browser: no console errors from the site's own code
