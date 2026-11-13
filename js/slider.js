/**
 * CodingHamme – Horizontal affiliate / partner slider
 * Continuous loop, pause on hover, touch support, reduced-motion aware
 */

(function () {
  "use strict";

  function initAffiliateSlider() {
    const track = document.getElementById("affiliate-track");
    if (!track || !window.CONFIG) return;

    const affiliates = CONFIG.affiliates || [];
    if (!affiliates.length) return;

    // Build items twice for seamless loop
    const items = [...affiliates, ...affiliates];

    track.innerHTML = items
      .map(
        (item) => `
      <a href="${escapeAttr(item.url)}" class="slider-item" ${item.url === "#" ? 'onclick="return false;"' : 'target="_blank" rel="noopener noreferrer"'}>
        <div class="slider-logo">${escapeHtml(item.logoText || item.name.slice(0, 2).toUpperCase())}</div>
        <h4>${escapeHtml(item.name)}</h4>
        <p>${escapeHtml(item.description || "")}</p>
      </a>
    `
      )
      .join("");

    // Respect reduced motion
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      track.style.animation = "none";
    }
  }

  function escapeHtml(str) {
    const div = document.createElement("div");
    div.textContent = str;
    return div.innerHTML;
  }

  function escapeAttr(str) {
    return String(str)
      .replace(/&/g, "&amp;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#39;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;");
  }

  document.addEventListener("DOMContentLoaded", initAffiliateSlider);
})();
