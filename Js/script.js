const carouselImages = document.querySelectorAll('.carousel-images .img');
const carouselArrows = document.querySelectorAll('.carousel-arrow');

let currentImageIndex = 0;

function showImage(index) {
    carouselImages.forEach((img, i) => {
        img.style.display = i === index ? 'block' : 'none';
    });
}

function nextImage() {
    currentImageIndex = (currentImageIndex + 1) % carouselImages.length;
    showImage(currentImageIndex);
}

function prevImage() {
    currentImageIndex = (currentImageIndex - 1 + carouselImages.length) % carouselImages.length;
    showImage(currentImageIndex);
}

showImage(currentImageIndex);

carouselArrows.forEach(arrow => {
    arrow.addEventListener('click', e => {
        if (e.target.classList.contains('carousel-arrow-prev')) {
            prevImage();
        } else if (e.target.classList.contains('carousel-arrow-next')) {
            nextImage();
        }
    });
});

setInterval(() => {
    nextImage();
}, 15000);