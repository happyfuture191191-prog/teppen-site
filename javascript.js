document.addEventListener("DOMContentLoaded", function() {
  // ===== ハンバーガーメニュー =====
  const hamburger = document.getElementById("hamburger");
  const nav = document.getElementById("nav");
  const overlay = document.getElementById("overlay");

  function openMenu() {
    hamburger.classList.add("active");
    nav.classList.add("show");
    overlay.classList.add("show");
    document.body.style.overflow = "hidden";   // ← スクロール禁止
  }

  function closeMenu() {
    hamburger.classList.remove("active");
    nav.classList.remove("show");
    overlay.classList.remove("show");
    document.body.style.overflow = "";         // ← 元に戻す
  }

  if (hamburger && nav && overlay) {
    hamburger.addEventListener("click", () => {
      if (nav.classList.contains("show")) {
        closeMenu();
      } else {
        openMenu();
      }
    });

    overlay.addEventListener("click", closeMenu);
  }
});

// ===== スクロールでヘッダー隠す =====
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

const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");
const closeBtn = document.querySelector(".lightbox .close");

if (lightbox && lightboxImg && closeBtn) {
  document.querySelectorAll(".lightbox-target").forEach(img => {
    img.addEventListener("click", () => {
      lightbox.style.display = "flex";
      lightboxImg.src = img.src;
    });
  });

  closeBtn.addEventListener("click", () => {
    lightbox.style.display = "none";
  });
}

// ===== 食べログリンク クリック計測 =====
document.addEventListener("DOMContentLoaded", function() {
  const tabelogLinks = document.querySelectorAll('a[href*="tabelog.com"]');

  tabelogLinks.forEach(function(link) {
    link.addEventListener("click", function() {
      if (typeof gtag === "function") {
        gtag("event", "tabelog_click", {
          link_url: this.href,
          link_text: this.textContent.trim(),
          page_location: window.location.href
        });
      }
    });
  });
});