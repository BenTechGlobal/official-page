/**
 * CodingHamme – Main application logic
 * Contact form handling, dynamic content rendering, link helpers
 */

(function () {
  "use strict";

  // Populate contact details from config
  function applyConfig() {
    if (!window.CONFIG) return;
    const c = CONFIG.brand;

    document.querySelectorAll("[data-email]").forEach((el) => {
      el.href = `mailto:${c.email}`;
      if (el.dataset.email === "text") el.textContent = c.email;
    });

    document.querySelectorAll("[data-phone]").forEach((el) => {
      el.href = `tel:${c.phoneTel}`;
      if (el.dataset.phone === "text") el.textContent = c.phone;
    });

    document.querySelectorAll("[data-whatsapp]").forEach((el) => {
      el.href = c.whatsapp;
    });

    document.querySelectorAll("[data-engineer-whatsapp]").forEach((el) => {
      el.href = c.engineerWhatsapp;
    });

    // Social links
    Object.keys(CONFIG.social || {}).forEach((key) => {
      document.querySelectorAll(`[data-social="${key}"]`).forEach((el) => {
        el.href = CONFIG.social[key] || "#";
        if (CONFIG.social[key] === "#") {
          el.setAttribute("aria-disabled", "true");
          el.title = "Coming soon";
        } else {
          el.target = "_blank";
          el.rel = "noopener noreferrer";
        }
      });
    });

    // Community links
    document.querySelectorAll("[data-community]").forEach((el) => {
      const key = el.dataset.community;
      if (CONFIG.community && CONFIG.community[key]) {
        el.href = CONFIG.community[key];
        if (CONFIG.community[key] !== "#") {
          el.target = "_blank";
          el.rel = "noopener noreferrer";
        }
      }
    });

    // Practice exam platform
    document.querySelectorAll("[data-practice-exams]").forEach((el) => {
      el.href = CONFIG.practiceExamPlatform || "#";
    });
  }

  // Render course tags
  function renderCourses() {
    if (!window.CONFIG || !CONFIG.courses) return;

    const map = {
      "course-cyber": CONFIG.courses.cybersecurity,
      "course-prog": CONFIG.courses.programming,
      "course-emerging": CONFIG.courses.emerging,
    };

    Object.keys(map).forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;
      el.innerHTML = map[id]
        .map((name) => `<span class="tag">${escapeHtml(name)}</span>`)
        .join("");
    });
  }

  // Render blog cards
  function renderBlog() {
    const grid = document.getElementById("blog-grid");
    if (!grid || !window.CONFIG || !CONFIG.blogPosts) return;

    const icons = {
      cybersecurity: "🛡️",
      programming: "💻",
      certification: "📜",
      career: "🚀",
    };

    grid.innerHTML = CONFIG.blogPosts
      .map(
        (post) => `
      <article class="blog-card reveal">
        <div class="blog-thumb">${icons[post.image] || "📘"}</div>
        <div class="blog-body">
          <div class="blog-meta">
            <span class="blog-category">${escapeHtml(post.category)}</span>
            <span>${escapeHtml(post.date)}</span>
          </div>
          <h3>${escapeHtml(post.title)}</h3>
          <p>${escapeHtml(post.excerpt)}</p>
          <a href="#" class="card-link" onclick="return false;">Read More →</a>
        </div>
      </article>
    `
      )
      .join("");
  }

  // Contact form – client-side validation only
  function initContactForm() {
    const form = document.getElementById("contact-form");
    if (!form) return;

    form.addEventListener("submit", (e) => {
      e.preventDefault();

      const name = form.querySelector("#cf-name");
      const email = form.querySelector("#cf-email");
      const subject = form.querySelector("#cf-subject");
      const message = form.querySelector("#cf-message");
      const feedback = document.getElementById("form-feedback");

      // Basic validation
      let valid = true;
      [name, email, subject, message].forEach((field) => {
        if (!field.value.trim()) {
          field.style.borderColor = "var(--danger)";
          valid = false;
        } else {
          field.style.borderColor = "";
        }
      });

      if (email.value && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value)) {
        email.style.borderColor = "var(--danger)";
        valid = false;
      }

      if (!valid) {
        if (feedback) {
          feedback.textContent = "Please fill in all required fields correctly.";
          feedback.style.color = "var(--danger)";
        }
        return;
      }

      // Frontend-only: show success and reset.
      // For production, connect to a backend or Google Form.
      if (feedback) {
        feedback.textContent =
          "Thank you! Your message has been prepared. In production this would be sent to our team. For now, please email us directly at CodingHamme@gmail.com.";
        feedback.style.color = "var(--success)";
      }

      // Optionally open mailto as fallback
      const body = encodeURIComponent(
        `Name: ${name.value}\nEmail: ${email.value}\nSubject: ${subject.value}\n\n${message.value}`
      );
      // Uncomment the next line if you want mailto fallback:
      // window.location.href = `mailto:CodingHamme@gmail.com?subject=${encodeURIComponent(subject.value)}&body=${body}`;

      form.reset();
    });
  }

  function escapeHtml(str) {
    const div = document.createElement("div");
    div.textContent = str;
    return div.innerHTML;
  }

  // Smooth anchor scroll for internal links
  function initSmoothAnchors() {
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
      anchor.addEventListener("click", function (e) {
        const id = this.getAttribute("href");
        if (id === "#") return;
        const target = document.querySelector(id);
        if (target) {
          e.preventDefault();
          const offset = 80;
          const top = target.getBoundingClientRect().top + window.scrollY - offset;
          window.scrollTo({
            top,
            behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches
              ? "auto"
              : "smooth",
          });
        }
      });
    });
  }

  document.addEventListener("DOMContentLoaded", () => {
    applyConfig();
    renderCourses();
    renderBlog();
    initContactForm();
    initSmoothAnchors();
  });
})();
