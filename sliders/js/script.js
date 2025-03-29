const slider = document.querySelector('.slider');
const cards = document.querySelectorAll('.card');
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');
const selectedValue = document.getElementById('selected-value');

let currentIndex = 0;
const cardWidth = cards[0].offsetWidth + 20; // عرض کارت + حاشیه

function updateSlider() {
    slider.style.transform = `translateX(-${currentIndex * cardWidth}px)`;
}

function selectCard(card) {
    cards.forEach(c => c.classList.remove('selected'));
    card.classList.add('selected');
    selectedValue.textContent = card.dataset.value;
}

nextButton.addEventListener('click', () => {
    if (currentIndex < cards.length - 1) {
        currentIndex++;
        updateSlider();
    }
});

prevButton.addEventListener('click', () => {
    if (currentIndex > 0) {
        currentIndex--;
        updateSlider();
    }
});

cards.forEach(card => {
    card.addEventListener('click', () => {
        selectCard(card);
    });
});