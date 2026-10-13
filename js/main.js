/* =========================================================
   CONFIG
   Contact form endpoint (Formspree). Unchanged from before.
========================================================= */
const CONTACT_FORM_ENDPOINT = "https://formspree.io/f/xoevlyoj";

/* =========================================================
   PROFILES ("lenses")
   One person, three ways to read the same work. Copy comes
   from the matching resume (A = GenAI, B = Full-Stack,
   C = Data & QA). Full-stack keeps the original portfolio text.
========================================================= */
const LENSES = {
  fullstack: {
    short: "Full-stack",
    role: "Full-Stack Developer",
    docTitle: "Amulya Pratap Singh | Full Stack Developer",
    sub: "Building practical web applications with modern technologies, APIs, databases, and AI-assisted development tools.",
    about: 'Aspiring <strong>Full Stack Developer</strong> with a BCA degree, currently pursuing an <strong>MCA in Cyber Security</strong>, plus a year of hands-on experience in data analysis, validation, and business data management. I build with <strong>React.js, Node.js, Express.js, MySQL</strong>, and lean on AI-assisted tools and prompt engineering to move faster.',
    focus: "Full-Stack Web Development",
    resume: { href: "assets/Amulya-Pratap-Singh-Resume-FullStack.pdf", label: "Download Full-Stack Resume" },
    expNote: "Used validation scripts to detect anomalies and prevent data corruption, building a habit of testing edge cases and debugging.",
    notes: {
      erp: "Architected an end-to-end institutional ERP with multi-role portals (Admin, Teacher, Student), secure authentication and granular RBAC, with modular REST endpoints and structured schema models for real-time grades, attendance logs and academic records.",
      exam: "Implemented multi-layered proctoring controls, including tab/browser inspection and media state monitoring, plus a real-time admin monitor that audits live candidate sessions.",
      print: "Three apps in one system: a customer portal, an admin dashboard and a Windows print agent, all connected to a single Express and Socket.IO backend."
    },
    order: ["Frontend", "Backend", "Database", "Programming Languages", "Development Tools", "Core Concepts", "AI Tools", "GenAI & Agents", "Data & Quality", "Creative Skills"],
    lead: ["React.js", "JavaScript", "HTML5", "CSS3", "State Management", "Node.js", "Express.js", "REST APIs", "RBAC",
           "MySQL", "TiDB Cloud", "DBMS", "SQL", "Python", "Java (Basic)", "Git", "GitHub", "Postman", "VS Code", "Claude Code", "Gemini CLI"]
  },

  genai: {
    short: "GenAI",
    role: "GenAI & AI-Native Full-Stack Developer",
    docTitle: "Amulya Pratap Singh | GenAI & AI-Native Full-Stack Developer",
    sub: "Building AI-powered web platforms by combining LLM APIs, prompt engineering and agentic workflows with React.js, Node.js, Express.js and MySQL.",
    about: 'GenAI &amp; Full-Stack Developer (MCA Cyber Security, pursuing) who builds <strong>AI-powered web platforms</strong> by combining <strong>LLM APIs, prompt engineering and agentic workflows</strong> with React.js, Node.js, Express.js and MySQL. Daily user of AI coding tools (<strong>Claude Code, Gemini CLI</strong>) for faster, more reliable delivery. 1 year of data validation and QA experience under the NAPS program.',
    focus: "GenAI & AI-Native Full-Stack Development",
    resume: { href: "assets/Amulya-Pratap-Singh-Resume-GenAI.pdf", label: "Download GenAI Resume" },
    expNote: "Applied automated validation scripts to detect anomalies and edge-case discrepancies, an approach that carries over to evaluating LLM output quality.",
    notes: {
      erp: "Engineered an automated objective assessment pipeline that processes submissions, verifies results and streams batch-wise performance metrics to instructor dashboards.",
      exam: "Implemented multi-layered proctoring controls, including tab/browser inspection and media state monitoring to maintain test integrity.",
      print: ""
    },
    order: ["GenAI & Agents", "AI Tools", "Core Concepts", "Programming Languages", "Frontend", "Backend", "Database", "Development Tools", "Data & Quality", "Creative Skills"],
    lead: ["Generative AI", "Agentic AI Workflows", "Prompt Engineering", "LLM API Integration", "AI-Assisted Architecture",
           "Claude Code", "Gemini CLI", "Git", "GitHub", "Postman", "VS Code", "Python", "JavaScript", "SQL", "Java (Basic)", "HTML5", "CSS3",
           "React.js", "Node.js", "Express.js", "REST APIs", "State Management", "MySQL", "TiDB Cloud", "RBAC", "System Architecture"]
  },

  dataqa: {
    short: "Data & QA",
    role: "Data Analyst & Quality Assurance",
    docTitle: "Amulya Pratap Singh | Data Analyst & Quality Assurance",
    sub: "Validating 200+ enterprise records daily at 100% data integrity, with SQL, Python and automated validation scripts.",
    about: 'Detail-oriented <strong>Data Analyst / QA professional</strong> with 1 year of experience (NAPS, Iron Mountain) validating <strong>200+ enterprise records daily at 100% data integrity</strong>. Skilled in SQL, Python, advanced spreadsheet analysis and automated validation, with full-stack project experience (React.js, Node.js, MySQL) and a cyber security background (MCA in progress).',
    focus: "Data Analysis & Quality Assurance",
    resume: { href: "assets/Amulya-Pratap-Singh-Resume-Data-QA.pdf", label: "Download Data & QA Resume" },
    expNote: "Applied automated validation scripts and advanced data techniques to detect anomalies, edge-case discrepancies and data corruption.",
    notes: {
      erp: "Engineered an automated objective assessment pipeline that processes submissions, verifies results and streams batch-wise performance metrics, backed by structured schema models for real-time grades, attendance logs and academic records.",
      exam: "Built a real-time admin monitor that audits live candidate sessions, catches anomalies and flags irregular submission patterns.",
      print: "Every upload is checked before it is queued: file type (PDF, JPG, PNG only), a 50MB size limit and an automatic page count."
    },
    order: ["Data & Quality", "Programming Languages", "Database", "Development Tools", "Core Concepts", "Backend", "Frontend", "AI Tools", "GenAI & Agents", "Creative Skills"],
    lead: ["Data Validation", "Data Quality Assurance", "Advanced Spreadsheet Analysis", "Anomaly Detection",
           "SQL", "Python", "JavaScript", "Java (Basic)", "MySQL", "TiDB Cloud", "DBMS", "Postman", "Git", "GitHub", "VS Code"]
  }
};
const DEFAULT_LENS = "fullstack";

/* =========================================================
   SKILLS
   Original portfolio skills plus the skills named in the three
   resumes. Nothing was removed.
========================================================= */
const SKILLS = [
  { category: "Programming Languages", items: ["JavaScript", "SQL", "Java (Basic)", "Python"] },
  { category: "Frontend", items: ["React.js", "HTML5", "CSS3", "State Management", "Web Content Creation"] },
  { category: "Backend", items: ["Node.js", "Express.js", "REST APIs", "RBAC"] },
  { category: "Database", items: ["MySQL", "TiDB Cloud"] },
  { category: "Development Tools", items: ["VS Code", "Postman", "Git", "GitHub", "Excel", "Company ERP"] },
  { category: "AI Tools", items: ["Gemini CLI", "Claude Code", "OpenCode", "Generative AI Tools", "AI Image Generators", "Gemini Enterprise", "ChatGPT", "Adobe Firefly"] },
  { category: "GenAI & Agents", items: ["Generative AI", "Agentic AI Workflows", "LLM API Integration", "AI-Assisted Architecture"] },
  { category: "Data & Quality", items: ["Data Validation", "Data Quality Assurance", "Advanced Spreadsheet Analysis", "Anomaly Detection"] },
  { category: "Core Concepts", items: ["OOP", "DBMS", "CRUD", "API Integration", "Prompt Engineering", "System Architecture"] },
  { category: "Creative Skills", items: ["Content Creation", "Copywriting"] }
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
function flash(el){
  if (!el || reduceMotion) return;
  el.classList.remove("swap");
  void el.offsetWidth;
  el.classList.add("swap");
}

$("#year").textContent = new Date().getFullYear();

/* =========================================================
   LENS ENGINE
========================================================= */
let currentLens = null;

function renderSkills(lens){
  const data = LENSES[lens];
  const lead = new Set(data.lead);
  const rank = new Map(data.order.map((name, i) => [name, i]));
  const groups = SKILLS.slice().sort((a, b) => (rank.get(a.category) ?? 99) - (rank.get(b.category) ?? 99));

  $("#skillsGrid").innerHTML = groups.map(group => {
    const items = group.items.slice().sort((a, b) => Number(lead.has(b)) - Number(lead.has(a)));
    return `
      <div class="skill-row">
        <h3>${esc(group.category)}</h3>
        <ul class="chips">
          ${items.map(item => `<li class="chip${lead.has(item) ? " is-lead" : ""}">${esc(item)}</li>`).join("")}
        </ul>
      </div>`;
  }).join("");
}

function setLens(key, { animate = true, updateUrl = true } = {}){
  if (!LENSES[key]) key = DEFAULT_LENS;
  const data = LENSES[key];
  const changed = key !== currentLens;
  currentLens = key;

  document.documentElement.dataset.lens = key;
  document.title = data.docTitle;

  $$("[data-lens].lens-btn, [data-lens].disc").forEach(btn => {
    btn.setAttribute("aria-pressed", String(btn.dataset.lens === key));
  });

  $("#heroRole").textContent = data.role;
  $("#heroSub").textContent = data.sub;
  $("#aboutLead").innerHTML = data.about;
  $("#factFocus").textContent = data.focus;
  $("#expNote").innerHTML = `<b>${esc(data.short)} view</b> ${esc(data.expNote)}`;

  $$("[data-note]").forEach(el => {
    const text = data.notes[el.dataset.note];
    el.hidden = !text;
    el.innerHTML = text ? `<b>${esc(data.short)} view</b> ${esc(text)}` : "";
  });

  $$("[data-resume]").forEach(a => {
    a.setAttribute("href", data.resume.href);
    a.textContent = data.resume.label;
  });

  renderSkills(key);

  if (animate && changed){
    ["#heroRole", "#heroSub", "#aboutLead", "#skillsGrid", "#expNote"].forEach(sel => flash($(sel)));
    $$("[data-note]").forEach(el => { if (!el.hidden) flash(el); });
  }

  if (updateUrl){
    const url = new URL(window.location.href);
    if (key === DEFAULT_LENS) url.searchParams.delete("lens");
    else url.searchParams.set("lens", key);
    try { history.replaceState(null, "", url); } catch (e) { /* file:// or sandboxed frame */ }
  }
}

$$("[data-lens].lens-btn, [data-lens].disc").forEach(btn => {
  btn.addEventListener("click", () => setLens(btn.dataset.lens));
});

const startLens = new URLSearchParams(window.location.search).get("lens");
setLens(LENSES[startLens] ? startLens : DEFAULT_LENS, { animate: false, updateUrl: false });

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
