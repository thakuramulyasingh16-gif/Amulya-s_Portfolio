/* =========================================================
   CONFIG
   Contact form endpoint (Formspree). Unchanged.
========================================================= */
const CONTACT_FORM_ENDPOINT = "https://formspree.io/f/xoevlyoj";

/* =========================================================
   SKILLS
   One list, grouped into the three areas the work covers:
   GenAI, full-stack web, and data analysis & QA.
   (Original portfolio skills + the skills named in the resumes.)
========================================================= */
const SKILL_GROUPS = [
  {
    title: "GenAI & AI-assisted development",
    rows: [
      { category: "GenAI & Agents", items: ["Generative AI", "Agentic AI Workflows", "Prompt Engineering", "LLM API Integration", "AI-Assisted Architecture"] },
      { category: "AI Tools", items: ["Claude Code", "Gemini CLI", "OpenCode", "Generative AI Tools", "AI Image Generators", "Gemini Enterprise", "ChatGPT", "Adobe Firefly"] }
    ]
  },
  {
    title: "Full-stack web development",
    rows: [
      { category: "Frontend", items: ["React.js", "HTML5", "CSS3", "State Management", "Web Content Creation"] },
      { category: "Backend", items: ["Node.js", "Express.js", "REST APIs", "RBAC"] },
      { category: "Database", items: ["MySQL", "TiDB Cloud"] },
      { category: "Programming Languages", items: ["JavaScript", "SQL", "Java (Basic)", "Python"] },
      { category: "Core Concepts", items: ["OOP", "DBMS", "CRUD", "API Integration", "System Architecture"] }
    ]
  },
  {
    title: "Data analysis & quality assurance",
    rows: [
      { category: "Data & Quality", items: ["Data Validation", "Data Quality Assurance", "Advanced Spreadsheet Analysis", "Anomaly Detection"] }
    ]
  },
  {
    title: "Tools & creative",
    rows: [
      { category: "Development Tools", items: ["VS Code", "Postman", "Git", "GitHub", "Excel", "Company ERP"] },
      { category: "Creative Skills", items: ["Content Creation", "Copywriting"] }
    ]
  }
];

/* =========================================================
   HELPERS
========================================================= */
const $ = (sel, root = document) => root.querySelector(sel);
const $$ = (sel, root = document) => Array.from(root.querySelectorAll(sel));
const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

function esc(s){
  return String(s).replace(/[&<>"]/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
}

$("#year").textContent = new Date().getFullYear();

/* =========================================================
   SKILLS RENDER
========================================================= */
$("#skillsGrid").innerHTML = SKILL_GROUPS.map(group => `
  <div class="cluster">
    <h3 class="cluster-title">${esc(group.title)}</h3>
    <div class="skill-rows">
      ${group.rows.map(row => `
        <div class="skill-row">
          <h4>${esc(row.category)}</h4>
          <ul class="chips">
            ${row.items.map(item => `<li class="chip">${esc(item)}</li>`).join("")}
          </ul>
        </div>`).join("")}
    </div>
  </div>
`).join("");

/* =========================================================
   NAVIGATION: mobile menu + current section
========================================================= */
const hamburger = $("#hamburger");
const nav = $("#nav");

function closeMenu(){
  nav.classList.remove("open");
  hamburger.classList.remove("open");
  hamburger.setAttribute("aria-expanded", "false");
  hamburger.setAttribute("aria-label", "Open menu");
}
hamburger.addEventListener("click", () => {
  const open = nav.classList.toggle("open");
  hamburger.classList.toggle("open", open);
  hamburger.setAttribute("aria-expanded", String(open));
  hamburger.setAttribute("aria-label", open ? "Close menu" : "Open menu");
});
$$(".nav-link").forEach(link => link.addEventListener("click", closeMenu));
document.addEventListener("keydown", e => { if (e.key === "Escape") closeMenu(); });

const spyIds = $$(".nav-link").map(l => l.dataset.section);
const spyEls = spyIds.map(id => document.getElementById(id));
let spyTicking = false;

function spy(){
  spyTicking = false;
  const line = window.innerHeight * 0.35;
  let active = null;
  spyEls.forEach((el, i) => {
    if (el && el.getBoundingClientRect().top <= line) active = spyIds[i];
  });
  $$(".nav-link").forEach(link => {
    const on = link.dataset.section === active;
    if (on) link.setAttribute("aria-current", "true");
    else link.removeAttribute("aria-current");
  });
}
window.addEventListener("scroll", () => {
  if (!spyTicking){ spyTicking = true; requestAnimationFrame(spy); }
}, { passive: true });
spy();

/* =========================================================
   COUNT-UP NUMBERS (experience metrics, subscribers)
========================================================= */
function animateCount(el){
  const target = parseInt(el.dataset.count, 10);
  const suffix = el.dataset.suffix || "";
  if (reduceMotion){ el.textContent = target + suffix; return; }
  const duration = 1200;
  const start = performance.now();
  function tick(now){
    const p = Math.min((now - start) / duration, 1);
    const eased = 1 - Math.pow(1 - p, 3);
    el.textContent = Math.round(target * eased) + suffix;
    if (p < 1) requestAnimationFrame(tick);
  }
  requestAnimationFrame(tick);
}
if ("IntersectionObserver" in window){
  const countObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting){
        animateCount(entry.target);
        countObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.6 });
  $$("[data-count]").forEach(el => countObserver.observe(el));
}

/* =========================================================
   CONTACT FORM (validation + Formspree)
========================================================= */
const form = $("#contactForm");
const statusEl = $("#formStatus");

const validators = {
  name: v => v.trim().length >= 2 ? "" : "Please enter your name.",
  email: v => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.trim()) ? "" : "Please enter a valid email address.",
  subject: v => v.trim().length >= 3 ? "" : "Please enter a subject.",
  message: v => v.trim().length >= 10 ? "" : "Message should be at least 10 characters."
};

function validateField(field){
  const input = document.getElementById(field);
  const errorEl = document.getElementById(field + "Error");
  const message = validators[field](input.value);
  const row = input.closest(".form-row");
  row.classList.toggle("invalid", Boolean(message));
  row.classList.toggle("valid", !message && input.value.trim().length > 0);
  errorEl.textContent = message;
  return !message;
}

["name", "email", "subject", "message"].forEach(field => {
  const input = document.getElementById(field);
  input.addEventListener("blur", () => validateField(field));
  input.addEventListener("input", () => {
    if (input.closest(".form-row").classList.contains("invalid")) validateField(field);
  });
});

form.addEventListener("submit", async e => {
  e.preventDefault();
  const fields = ["name", "email", "subject", "message"];
  const results = fields.map(validateField);
  if (!results.every(Boolean)){
    statusEl.style.color = "#B3173F";
    statusEl.textContent = "Please fix the highlighted fields.";
    return;
  }

  const data = Object.fromEntries(fields.map(f => [f, document.getElementById(f).value.trim()]));

  if (!CONTACT_FORM_ENDPOINT){
    statusEl.style.color = "";
    statusEl.textContent = "Message validated. Email sending isn't configured yet — reach out directly via the email or phone above in the meantime.";
    return;
  }

  try {
    statusEl.style.color = "";
    statusEl.textContent = "Sending...";
    const res = await fetch(CONTACT_FORM_ENDPOINT, {
      method: "POST",
      headers: { "Content-Type": "application/json", "Accept": "application/json" },
      body: JSON.stringify(data)
    });
    if (res.ok){
      statusEl.style.color = "#12683F";
      statusEl.textContent = "Message sent — thanks for reaching out!";
      form.reset();
      $$(".form-row", form).forEach(r => r.classList.remove("valid", "invalid"));
    } else {
      throw new Error("Request failed");
    }
  } catch (err) {
    statusEl.style.color = "#B3173F";
    statusEl.textContent = "Something went wrong. Please email directly instead.";
  }
});
