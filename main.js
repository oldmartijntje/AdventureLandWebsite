const galleryImage = document.getElementById('galleryImage');
const prevButton = document.getElementById('prevButton'); // Add this button to your HTML
const nextButton = document.getElementById('nextButton'); // Add this button to your HTML

const imageUrls = [
    'assets/Adventureland_3D.jpg',
    'assets/Cover 2D.jpg',
    'assets/The Gorilla Shake.jpg',
    'assets/Snack Sparrow.jpg',
    'assets/Trucks Playing Tricks.jpg',
    'assets/Toilet Ladies.jpg',
    'assets/Tronville.jpg',
    'assets/Rock & Roll Ride.jpg',
    'assets/Perfect waves.jpg',
    'assets/Miami Vibes.jpg',
    'assets/Daddy Love.jpg',
    'assets/Award card.jpg',
    // Add more image URLs as needed
];

let currentIndex = 0;
let intervalId;

function showImage(index) {
    galleryImage.src = imageUrls[index];
}

function nextImage() {
    currentIndex = (currentIndex + 1) % imageUrls.length;
    showImage(currentIndex);
}

function prevImage() {
    currentIndex = (currentIndex - 1 + imageUrls.length) % imageUrls.length;
    showImage(currentIndex);
}

nextButton.addEventListener('click', nextImage);
prevButton.addEventListener('click', prevImage);

// Add automatic image cycling with a timer
function startImageCycle() {
    intervalId = setInterval(nextImage, 3000); // Change image every 3 seconds (adjust as needed)
}

function stopImageCycle() {
    clearInterval(intervalId);
}

// Start automatic image cycling when the page loads
startImageCycle();

// Pause automatic image cycling when the user interacts with the previous or next button
prevButton.addEventListener('click', stopImageCycle);
nextButton.addEventListener('click', stopImageCycle);