/**
 * CodingHamme – Scroll reveals, header effects, reduced-motion support
 */

(function () {
  "use strict";

  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  // Sticky header scroll effect
  function initHeader() {
    const header = document.querySelector(".header");
    if (!header) return;

    const onScroll = () => {
      if (window.scrollY > 40) {
        header.classList.add("scrolled");
      } else {
        header.classList.remove("scrolled");
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
  }

  // Reveal elements on scroll
  function initReveal() {
    const elements = document.querySelectorAll(".reveal");
    if (!elements.length) return;

    if (prefersReducedMotion) {
      elements.forEach((el) => el.classList.add("visible"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );

    elements.forEach((el) => observer.observe(el));
  }

  // Back to top button
  function initBackToTop() {
    const btn = document.querySelector(".back-to-top");
    if (!btn) return;

    window.addEventListener(
      "scroll",
      () => {
        if (window.scrollY > 500) {
          btn.classList.add("visible");
        } else {
          btn.classList.remove("visible");
        }
      },
      { passive: true }
    );

    btn.addEventListener("click", (e) => {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: prefersReducedMotion ? "auto" : "smooth" });
    });
  }

  // Active nav link based on scroll position
  function initActiveNav() {
    const sections = document.querySelectorAll("section[id]");
    const navLinks = document.querySelectorAll(".nav-links a[href^='#']");

    if (!sections.length || !navLinks.length) return;

    const onScroll = () => {
      let current = "";
      sections.forEach((section) => {
        const top = section.offsetTop - 100;
        if (window.scrollY >= top) {
          current = section.getAttribute("id");
        }
      });

      navLinks.forEach((link) => {
        link.classList.remove("active");
        if (link.getAttribute("href") === `#${current}`) {
          link.classList.add("active");
        }
      });
    };

    window.addEventListener("scroll", onScroll, { passive: true });
  }

  // Mobile menu
  function initMobileMenu() {
    const toggle = document.querySelector(".menu-toggle");
    const mobileNav = document.querySelector(".mobile-nav");
    if (!toggle || !mobileNav) return;

    toggle.addEventListener("click", () => {
      toggle.classList.toggle("active");
      mobileNav.classList.toggle("open");
      document.body.style.overflow = mobileNav.classList.contains("open") ? "hidden" : "";
    });

    mobileNav.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        toggle.classList.remove("active");
        mobileNav.classList.remove("open");
        document.body.style.overflow = "";
      });
    });
  }

  // Counter animation for stats
  function initCounters() {
    const counters = document.querySelectorAll("[data-count]");
    if (!counters.length || prefersReducedMotion) {
      counters.forEach((el) => {
        el.textContent = el.dataset.count;
      });
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            animateCounter(entry.target);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.5 }
    );

    counters.forEach((el) => observer.observe(el));
  }

  function animateCounter(el) {
    const target = parseInt(el.dataset.count, 10);
    const duration = 1800;
    const start = performance.now();

    function update(now) {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      el.textContent = Math.floor(eased * target).toLocaleString();
      if (progress < 1) requestAnimationFrame(update);
      else el.textContent = target.toLocaleString();
    }

    requestAnimationFrame(update);
  }

  // Init all
  document.addEventListener("DOMContentLoaded", () => {
    initHeader();
    initReveal();
    initBackToTop();
    initActiveNav();
    initMobileMenu();
    initCounters();
  });
})();
