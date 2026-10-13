# Amulya Pratap Singh — Portfolio

A static portfolio (HTML, CSS, JavaScript). No build step and no dependencies.

One page that covers all three sides of the work:

- **GenAI**: LLM APIs, prompt engineering, agentic workflows, AI coding tools
- **Full-stack web**: React.js, Node.js, Express.js, MySQL, REST APIs
- **Data analysis & QA**: one year of data validation at Iron Mountain (NAPS)

## Structure

```
index.html            page markup
css/style.css         design tokens, layout, responsive rules
js/main.js            skills list, navigation, count-up numbers, contact form
assets/               profile photo and resume PDFs
```

## Editing content

- Skills: the `SKILL_GROUPS` array at the top of `js/main.js`.
- Everything else (intro, experience, projects, education, certifications) is plain HTML in `index.html`.
- Resume button: `assets/Amulya-Pratap-Singh-Resume-GenAI.pdf`. Replace the file, or change the `href` in the hero.
- Contact form: sends through Formspree. The endpoint is `CONTACT_FORM_ENDPOINT` in `js/main.js`.

## Design

A one-colour print proof: paper, one dark ink and one cyan spot colour. The photo sits on a cyan plate printed slightly out of register, and the project plates use halftone dots.

## Run locally

```bash
python3 -m http.server 8080
# open http://localhost:8080
```

## Fonts

Bricolage Grotesque and Source Serif 4, loaded from Google Fonts. Without a connection the page falls back to Helvetica/Arial and Charter/Georgia.
