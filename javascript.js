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