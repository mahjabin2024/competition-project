// script.js

// Interactive Map
document.querySelectorAll('.map-hotspot').forEach((hotspot) => {
    hotspot.addEventListener('click', () => {
        alert(`You selected: ${hotspot.dataset.info}`);
    });
});

// Quiz Functionality
document.querySelectorAll('.quiz-option').forEach((button) => {
    button.addEventListener('click', () => {
        const correct = button.dataset.correct === "true";
        alert(correct ? "Correct!" : "Try Again!");
    });
});

// Volcano Animation
const canvas = document.getElementById('volcano-canvas');
const ctx = canvas.getContext('2d');
canvas.width = 400;
canvas.height = 300;

function drawVolcano() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = "brown";
    ctx.beginPath();
    ctx.moveTo(150, 300);
    ctx.lineTo(250, 300);
    ctx.lineTo(200, 200);
    ctx.closePath();
    ctx.fill();

    ctx.fillStyle = "orange";
    ctx.beginPath();
    ctx.arc(200, 190, 10, 0, Math.PI * 2);
    ctx.fill();
}

setInterval(drawVolcano, 1000);
document.getElementById('explore-btn').addEventListener('click', () => {
    const content = document.getElementById('explore-content');
    if (content.style.display === 'none') {
        content.style.display = 'block';
    } else {
        content.style.display = 'none';
    }
});
const images = document.querySelector('.carousel-images');
const prevButton = document.getElementById('prev-btn');
const nextButton = document.getElementById('next-btn');

let currentIndex = 0;

function updateCarousel() {
    const imageWidth = images.querySelector('img').clientWidth;
    images.style.transform = `translateX(-${currentIndex * imageWidth}px)`;
}

prevButton.addEventListener('click', () => {
    currentIndex = (currentIndex === 0) ? images.children.length - 1 : currentIndex - 1;
    updateCarousel();
});

nextButton.addEventListener('click', () => {
    currentIndex = (currentIndex === images.children.length - 1) ? 0 : currentIndex + 1;
    updateCarousel();
});

// Automatically adjust carousel on window resize
window.addEventListener('resize', updateCarousel);
