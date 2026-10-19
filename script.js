// 首頁 hero 輪播圖片
const slides = document.querySelectorAll(".hero-slide");
const dots = document.querySelectorAll(".hero-dot");
let current = 0;
let timer = null;

function showSlide(index) {
  slides.forEach((slide, i) => slide.classList.toggle("active", i === index));
  dots.forEach((dot, i) => dot.classList.toggle("active", i === index));
  current = index;
}

function nextSlide() {
  showSlide((current + 1) % slides.length);
}

function startAutoPlay() {
  timer = setInterval(nextSlide, 4000);
}

if (slides.length > 0) {
  dots.forEach((dot) => {
    dot.addEventListener("click", () => {
      clearInterval(timer);
      showSlide(Number(dot.dataset.index));
      startAutoPlay();
    });
  });

  startAutoPlay();
}

// 手機版選單切換（頁首的 MENU 按鈕）
const menuToggle = document.querySelector(".menu-toggle");
const siteHeader = document.querySelector(".site-header");
if (menuToggle && siteHeader) {
  menuToggle.addEventListener("click", () => {
    const open = siteHeader.classList.toggle("is-open");
    menuToggle.setAttribute("aria-expanded", String(open));
    menuToggle.setAttribute("aria-label", open ? "收合選單" : "展開選單");
  });
}

// 作品分享頁：依分類篩選作品（沒有 JS 時會顯示全部作品）
const chips = document.querySelectorAll(".category-strip .chip");
const workItems = document.querySelectorAll(".work-grid > li[data-category]");
if (chips.length && workItems.length) {
  chips.forEach((chip) => {
    chip.addEventListener("click", () => {
      const key = chip.dataset.filter;
      chips.forEach((c) => {
        const on = c === chip;
        c.classList.toggle("is-active", on);
        c.setAttribute("aria-pressed", String(on));
      });
      workItems.forEach((li) => {
        li.hidden = key !== "all" && li.dataset.category !== key;
      });
    });
  });
}
