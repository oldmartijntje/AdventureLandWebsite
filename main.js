const galleryImage = document.getElementById('galleryImage');
const prevImageButton = document.getElementById('prevButton'); // Add this button to your HTML
const nextImageButton = document.getElementById('nextButton'); // Add this button to your HTML
const prevReviewButton = document.getElementById('prevReviewButton'); // Add this button to your HTML
const nextReviewButton = document.getElementById('nextReviewButton'); // Add this button to your HTML

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
let imageIntervalId;
let reviewIntervalId;

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

nextImageButton.addEventListener('click', nextImage);
prevImageButton.addEventListener('click', prevImage);

// Add automatic image cycling with a timer
function startImageCycle() {
    imageIntervalId = setInterval(nextImage, 3000); // Change image every 3 seconds (adjust as needed)
}

function stopImageCycle() {
    clearInterval(imageIntervalId);
}

// Start automatic image cycling when the page loads
startImageCycle();

// Pause automatic image cycling when the user interacts with the previous or next button
prevImageButton.addEventListener('click', stopImageCycle);
nextImageButton.addEventListener('click', stopImageCycle);

// Define a JavaScript dictionary with reviews
const reviews = [
    // {
    //     name: "John Doe",
    //     rating: 5,
    //     comment: "Adventure Land is an amazing board game! I love it!",
    // },
    // {
    //     name: "Jane Smith",
    //     rating: 4,
    //     comment: "Great fun for the whole family. We play it every weekend!",
    // },
    // {
    //     name: "Mike Johnson",
    //     rating: 5,
    //     comment: "The game mechanics are brilliant. Highly recommended!",
    // },
];

let currentReviewIndex = 0;

// Function to display reviews
function displayReviews() {
    const reviewsList = document.getElementById("reviews-list");

    // Clear any existing reviews
    reviewsList.innerHTML = '';

    // Display the current review
    const review = reviews[currentReviewIndex];
    const listItem = document.createElement("li");
    listItem.innerHTML = `
        <strong>${review.name}</strong> (Rating: ${review.rating}):
        <p>${review.comment}</p>
    `;
    reviewsList.appendChild(listItem);
}

// Function to show the next review
function showNextReview() {
    currentReviewIndex = (currentReviewIndex + 1) % reviews.length;
    displayReviews();
}

// Function to show the previous review
function showPrevReview() {
    currentReviewIndex = (currentReviewIndex - 1 + reviews.length) % reviews.length;
    displayReviews();
}

// Add event listeners to "Previous Review" and "Next Review" buttons
nextReviewButton.addEventListener('click', showNextReview);
prevReviewButton.addEventListener('click', showPrevReview);
nextReviewButton.addEventListener('click', stopReviewCycle);
prevReviewButton.addEventListener('click', stopReviewCycle);

// Display the initial review
displayReviews();

// Add automatic image cycling with a timer
function startReviewCycle() {
    reviewIntervalId = setInterval(showNextReview, 9000); // Change image every 9 seconds (adjust as needed)
}

function stopReviewCycle() {
    clearInterval(reviewIntervalId);
}

startReviewCycle()
