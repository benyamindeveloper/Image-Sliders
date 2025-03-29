let index = 0;
const slides = document.querySelectorAll(".slide");
const indicatorsContainer = document.querySelector(".indicators");
let startX = 0, endX = 0;

// Create indicators
slides.forEach((_, i) => {
    const dot = document.createElement("div");
    dot.classList.add("indicator");
    dot.addEventListener("click", () => changeSlide(i - index));
    indicatorsContainer.appendChild(dot);
});

function updateSlider() {
    slides.forEach((slide, i) => {
        const offset = ((i - index + slides.length) % slides.length) - 1;
        slide.style.transform = `translateX(${offset * 120}%) scale(${offset === 0 ? 1 : 0.8})`;
        slide.style.opacity = offset === 0 ? 1 : 0.5;
    });

    document.querySelectorAll(".indicator").forEach((dot, i) => {
        dot.classList.toggle("active", i === index);
    });
}

function changeSlide(step) {
    index = (index + step + slides.length) % slides.length;
    updateSlider();
}

document.querySelector(".slider-container").addEventListener("touchstart", (e) => startX = e.touches[0].clientX);
document.querySelector(".slider-container").addEventListener("touchend", (e) => {
    endX = e.changedTouches[0].clientX;
    if (startX - endX > 50) changeSlide(1);
    else if (endX - startX > 50) changeSlide(-1);
});

setInterval(() => changeSlide(1), 3000);
updateSlider();

function toggleMode() {
    document.body.classList.toggle("dark-mode");
    document.body.classList.toggle("light-mode");
    document.querySelector(".mode-toggle").innerText = document.body.classList.contains("dark-mode") ? "🌙" : "☀️";
}