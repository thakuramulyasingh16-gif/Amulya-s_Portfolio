# Amulya Pratap Singh — Portfolio

A static portfolio (HTML, CSS, JavaScript). No build step and no dependencies.

## One person, three profiles

The page can be read as three profiles. Pick one with the circles in the hero or the switch in the header.

| Profile | Link | Resume |
| --- | --- | --- |
| Full-Stack Developer (default) | `/` | `assets/Amulya-Pratap-Singh-Resume-FullStack.pdf` |
| GenAI & AI-Native Full-Stack Developer | `/?lens=genai` | `assets/Amulya-Pratap-Singh-Resume-GenAI.pdf` |
| Data Analyst & Quality Assurance | `/?lens=dataqa` | `assets/Amulya-Pratap-Singh-Resume-Data-QA.pdf` |

Share the matching link with each application so the page opens in the right profile.

Switching a profile changes: the headline and summary, the About text, the order of the skills and which ones are highlighted, a short note on each project, the experience highlight, and the resume that the download buttons point to. Everything else (projects, experience, education, certifications, links) stays the same.

## Structure

```
index.html            page markup (default profile is written in the HTML)
css/style.css         design tokens, layout, responsive rules
js/main.js            profile data and switching, skills, count-up, form
assets/               profile photo and resume PDFs
```

## Editing content

- Profile copy, skill highlights and project notes: the `LENSES` object at the top of `js/main.js`.
- Skill list: the `SKILLS` array in `js/main.js`.
- Everything else is plain HTML in `index.html`.
- Contact form: sends through Formspree. The endpoint is `CONTACT_FORM_ENDPOINT` in `js/main.js`.

## Run locally

```bash
python3 -m http.server 8080
# open http://localhost:8080
```

## Fonts

Bricolage Grotesque and Source Serif 4, loaded from Google Fonts. Without a connection the page falls back to Helvetica/Arial and Charter/Georgia.
