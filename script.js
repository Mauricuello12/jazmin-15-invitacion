document.addEventListener('DOMContentLoaded', () => {
    const carouselTrack = document.querySelector('.carousel-track');
    const images = Array.from(carouselTrack.children);
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');

    const imageWidth = images[0].getBoundingClientRect().width;
    let currentImageIndex = 0;

    // Arrange images side by side
    const setImagePosition = (image, index) => {
        image.style.left = imageWidth * index + 'px';
    };
    images.forEach(setImagePosition);

    const moveToSlide = (track, currentImage, targetImage) => {
        track.style.transform = 'translateX(-' + targetImage.style.left + ')';
        currentImageIndex = images.indexOf(targetImage);
    };

    prevBtn.addEventListener('click', () => {
        if (currentImageIndex > 0) {
            const prevImage = images[currentImageIndex - 1];
            moveToSlide(carouselTrack, images[currentImageIndex], prevImage);
        } else {
            // Loop to the last image
            const lastImage = images[images.length - 1];
            moveToSlide(carouselTrack, images[currentImageIndex], lastImage);
        }
    });

    nextBtn.addEventListener('click', () => {
        if (currentImageIndex < images.length - 1) {
            const nextImage = images[currentImageIndex + 1];
            moveToSlide(carouselTrack, images[currentImageIndex], nextImage);
        } else {
            // Loop to the first image
            const firstImage = images[0];
            moveToSlide(carouselTrack, images[currentImageIndex], firstImage);
        }
    });
});document.addEventListener('DOMContentLoaded', () => {
    // Carousel functionality
    const carouselTrack = document.querySelector('.carousel-track');
    const images = Array.from(carouselTrack.children);
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');

    const imageWidth = images[0].getBoundingClientRect().width;
    let currentImageIndex = 0;

    // Arrange images side by side
    const setImagePosition = (image, index) => {
        image.style.left = imageWidth * index + 'px';
    };
    images.forEach(setImagePosition);

    const moveToSlide = (track, currentImage, targetImage) => {
        track.style.transform = 'translateX(-' + targetImage.style.left + ')';
        currentImageIndex = images.indexOf(targetImage);
    };

    prevBtn.addEventListener('click', () => {
        if (currentImageIndex > 0) {
            const prevImage = images[currentImageIndex - 1];
            moveToSlide(carouselTrack, images[currentImageIndex], prevImage);
        } else {
            // Loop to the last image
            const lastImage = images[images.length - 1];
            moveToSlide(carouselTrack, images[currentImageIndex], lastImage);
        }
    });

    nextBtn.addEventListener('click', () => {
        if (currentImageIndex < images.length - 1) {
            const nextImage = images[currentImageIndex + 1];
            moveToSlide(carouselTrack, images[currentImageIndex], nextImage);
        } else {
            // Loop to the first image
            const firstImage = images[0];
            moveToSlide(carouselTrack, images[currentImageIndex], firstImage);
        }
    });

    // Countdown functionality
    const countdownElement = document.getElementById('countdown');
    const partyDate = new Date('2025-11-08T20:00:00').getTime(); // November 8, 2025, 8:00 PM

    function updateCountdown() {
        const now = new Date().getTime();
        const distance = partyDate - now;

        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        if (distance < 0) {
            clearInterval(countdownInterval);
            countdownElement.innerHTML = "¡La fiesta ha comenzado!";
        } else {
            countdownElement.innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;
        }
    }

    // Update the countdown every 1 second
    const countdownInterval = setInterval(updateCountdown, 1000);

    // Initial call to display the countdown immediately
    updateCountdown();
});