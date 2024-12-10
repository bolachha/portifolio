let index = 0;

function moveSlide(direction) {
    const slides = document.querySelector('.carousel-slide');
    const totalSlides = document.querySelectorAll('.carousel-slide img').length;
    index = (index + direction + totalSlides) % totalSlides;
    slides.style.transform = `translateX(-${index * 100}%)`;
}

// Inicializa o carrossel (opcional, pode adicionar um intervalo)
setInterval(() => {
    moveSlide(1);
}, 5000);
