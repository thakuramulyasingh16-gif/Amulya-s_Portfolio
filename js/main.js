/* =========================================================
   CONFIG
   To connect the contact form to a real email service (e.g.
   Formspree, EmailJS, or your own backend), set the endpoint
   below and update handleSubmit() to POST to it.
========================================================= */
const CONTACT_FORM_ENDPOINT = ""; // e.g. "https://formspree.io/f/xxxxxx"

/* =========================================================
   YEAR
========================================================= */
document.getElementById("year").textContent = new Date().getFullYear();

/* =========================================================
   NAVBAR: scroll state + mobile menu
========================================================= */
const navbar = document.getElementById("navbar");
const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("navLinks");
const navCta = document.querySelector(".nav-cta");
const scrollProgressBar = document.getElementById("scrollProgressBar");
const backToTop = document.getElementById("backToTop");

function onScroll(){
  navbar.classList.toggle("scrolled", window.scrollY > 12);

  // Scroll progress
  const docHeight = document.documentElement.scrollHeight - window.innerHeight;
  const progress = docHeight > 0 ? (window.scrollY / docHeight) * 100 : 0;
  scrollProgressBar.style.width = progress + "%";

  // Back-to-top visibility
  backToTop.classList.toggle("visible", window.scrollY > 600);
}
window.addEventListener("scroll", onScroll, { passive: true });
onScroll();

backToTop.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

function closeMenu(){
  navLinks.classList.remove("open");
  navCta.classList.remove("open");
  hamburger.classList.remove("open");
  hamburger.setAttribute("aria-expanded", "false");
}

hamburger.addEventListener("click", () => {
  const isOpen = navLinks.classList.toggle("open");
  navCta.classList.toggle("open", isOpen);
  hamburger.classList.toggle("open", isOpen);
  hamburger.setAttribute("aria-expanded", String(isOpen));
});

navLinks.querySelectorAll(".nav-link").forEach(link => {
  link.addEventListener("click", closeMenu);
});

/* =========================================================
   ACTIVE SECTION INDICATOR
========================================================= */
const sections = document.querySelectorAll("main .section, .hero");
const navLinkEls = document.querySelectorAll(".nav-link");

const sectionObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting){
      const id = entry.target.id;
      navLinkEls.forEach(link => {
        const isActive = link.dataset.section === id;
        link.classList.toggle("active", isActive);
        if (isActive) link.setAttribute("aria-current", "true");
        else link.removeAttribute("aria-current");
      });
    }
  });
}, { rootMargin: "-45% 0px -50% 0px", threshold: 0 });

sections.forEach(sec => sectionObserver.observe(sec));

/* =========================================================
   SCROLL REVEAL
========================================================= */
const revealEls = document.querySelectorAll(".reveal");
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting){
      entry.target.classList.add("in-view");
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.15 });
revealEls.forEach(el => revealObserver.observe(el));

/* =========================================================
   COUNT-UP METRICS
========================================================= */
function animateCount(el){
  const target = parseInt(el.dataset.count, 10);
  const suffix = el.dataset.suffix || "";
  const duration = 1400;
  const start = performance.now();

  function tick(now){
    const progress = Math.min((now - start) / duration, 1);
    const eased = 1 - Math.pow(1 - progress, 3);
    const value = Math.round(target * eased);
    el.textContent = value + suffix;
    if (progress < 1) requestAnimationFrame(tick);
  }
  requestAnimationFrame(tick);
}

const countEls = document.querySelectorAll("[data-count]");
const countObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting){
      animateCount(entry.target);
      countObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.6 });
countEls.forEach(el => countObserver.observe(el));

/* =========================================================
   SKILLS DATA (sourced strictly from resume)
========================================================= */
const SKILLS = [
  {
    category: "Programming Languages",
    icon: "</>",
    items: ["JavaScript", "SQL", "Java (Basic)"]
  },
  {
    category: "Frontend",
    icon: "◧",
    items: ["React.js", "HTML5", "CSS3", "Web Content Creation"]
  },
  {
    category: "Backend",
    icon: "⚙",
    items: ["Node.js", "Express.js", "REST APIs"]
  },
  {
    category: "Database",
    icon: "▤",
    items: ["MySQL"]
  },
  {
    category: "Development Tools",
    icon: "✎",
    items: ["VS Code", "Postman", "Excel", "Company ERP"]
  },
  {
    category: "AI Tools",
    icon: "✦",
    items: ["Gemini CLI", "Claude Code", "OpenCode", "Generative AI Tools", "AI Image Generators", "Gemini Enterprise", "ChatGPT", "Adobe Firefly"]
  },
  {
    category: "Core Concepts",
    icon: "◇",
    items: ["OOP", "DBMS", "CRUD", "API Integration", "Prompt Engineering"]
  },
  {
    category: "Creative Skills",
    icon: "✒",
    items: ["Content Creation", "Copywriting"]
  }
];

const skillsGrid = document.getElementById("skillsGrid");
skillsGrid.innerHTML = SKILLS.map(group => `
  <div class="skill-card reveal">
    <h3><span class="cat-icon">${group.icon}</span> ${group.category}</h3>
    <div class="skill-badges">
      ${group.items.map(item => `<span class="skill-badge">${item}</span>`).join("")}
    </div>
  </div>
`).join("");

// Re-observe newly injected reveal elements
skillsGrid.querySelectorAll(".reveal").forEach(el => revealObserver.observe(el));

/* =========================================================
   CONTACT FORM VALIDATION
========================================================= */
const form = document.getElementById("contactForm");
const statusEl = document.getElementById("formStatus");

const validators = {
  name: (v) => v.trim().length >= 2 ? "" : "Please enter your name.",
  email: (v) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.trim()) ? "" : "Please enter a valid email address.",
  subject: (v) => v.trim().length >= 3 ? "" : "Please enter a subject.",
  message: (v) => v.trim().length >= 10 ? "" : "Message should be at least 10 characters."
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

form.addEventListener("submit", async (e) => {
  e.preventDefault();
  const fields = ["name", "email", "subject", "message"];
  const results = fields.map(validateField);
  if (!results.every(Boolean)){
    statusEl.style.color = "#FF6B6B";
    statusEl.textContent = "Please fix the highlighted fields.";
    return;
  }

  const data = Object.fromEntries(fields.map(f => [f, document.getElementById(f).value.trim()]));

  if (!CONTACT_FORM_ENDPOINT){
    // No backend/email service configured yet.
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
      statusEl.style.color = "var(--success)";
      statusEl.textContent = "Message sent — thanks for reaching out!";
      form.reset();
    } else {
      throw new Error("Request failed");
    }
  } catch (err) {
    statusEl.style.color = "#FF6B6B";
    statusEl.textContent = "Something went wrong. Please email directly instead.";
  }
});
