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
