const images = ['1.png', '2.png', '3.png'];
let currentIndex = 0;

const carouselImg = document.getElementById('carousel-img');
const prevButton = document.getElementById('prev');
const nextButton = document.getElementById('next');

// Function to update the carousel image
function updateImage(index) {
  carouselImg.src = images[index];
}

// Event listeners for manual controls
prevButton.addEventListener('click', () => {
  currentIndex = (currentIndex === 0) ? images.length - 1 : currentIndex - 1;
  updateImage(currentIndex);
});

nextButton.addEventListener('click', () => {
  currentIndex = (currentIndex === images.length - 1) ? 0 : currentIndex + 1;
  updateImage(currentIndex);
});

// Automatically change images every 3 seconds
setInterval(() => {
  currentIndex = (currentIndex === images.length - 1) ? 0 : currentIndex + 1;
  updateImage(currentIndex);
}, 1000); // Change image every 3 seconds
