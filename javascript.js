document.addEventListener("DOMContentLoaded", function() {
  // ===== ハンバーガーメニュー =====
  const hamburger = document.getElementById("hamburger");
  const nav = document.getElementById("nav");
  const overlay = document.getElementById("overlay");

  if (hamburger && nav && overlay) {
    hamburger.addEventListener("click", () => {
      hamburger.classList.toggle("active");
      nav.classList.toggle("show");
      overlay.classList.toggle("show");
    });

    overlay.addEventListener("click", () => {
      hamburger.classList.remove("active");
      nav.classList.remove("show");
      overlay.classList.remove("show");
    });
  }
});

let lastScrollY = window.scrollY;
const header = document.querySelector('.site-header');

if (header) {
  window.addEventListener('scroll', () => {
    const currentY = window.scrollY;

    if (currentY > lastScrollY && currentY > 50) {
      header.classList.add('header-hidden');
    } else {
      header.classList.remove('header-hidden');
    }

    lastScrollY = currentY;
  });
}