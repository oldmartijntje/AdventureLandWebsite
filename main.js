const galleryImage = document.getElementById('galleryImage');
const prevImageButton = document.getElementById('prevButton'); // Add this button to your HTML
const nextImageButton = document.getElementById('nextButton'); // Add this button to your HTML
const prevReviewButton = document.getElementById('prevReviewButton'); // Add this button to your HTML
const nextReviewButton = document.getElementById('nextReviewButton'); // Add this button to your HTML

// Import the variables from data.js
// import { reviews, imageUrls } from "./data.js";

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



let currentReviewIndex = 0;

// Function to display reviews
function displayReviews() {
    const reviewsContainer = document.getElementById("reviews-container");
    const review = reviews[currentReviewIndex];

    // Create a review element
    const reviewElement = document.createElement("div");
    reviewElement.classList.add("review");

    // Add image if available
    if (review.image) {
        const imageElement = document.createElement("img");
        imageElement.classList.add("review-image");
        imageElement.src = review.image;
        reviewElement.appendChild(imageElement);
    } else {
        // Add placeholder image
        const imageElement = document.createElement("img");
        imageElement.classList.add("review-image");
        imageElement.src = "assets/default.jpg";
        reviewElement.appendChild(imageElement);
    }

    // Add name, rating, and other information
    const reviewInfo = document.createElement("div");
    reviewInfo.classList.add("review-info");
    reviewInfo.innerHTML = `
        <div class="review-name">${review.name}</div>
        `;

    if (review.rating) {
        reviewInfo.innerHTML += `<div class="review-rating">Rating: ${review.rating}</div>
    `;
    }

    // Add comment if available
    if (review.comment) {
        reviewInfo.innerHTML += `<div class="review-comment">${review.comment}</div>`;
    }

    // Add link to the original post
    if (review.link) {
        reviewInfo.innerHTML += `
            <a class="review-link" href="${review.link}" target="_blank">Original Post</a>
        `;
    }

    // Append reviewInfo to reviewElement
    reviewElement.appendChild(reviewInfo);

    // Clear existing reviews and append the new review
    reviewsContainer.innerHTML = '';
    reviewsContainer.appendChild(reviewElement);
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
    reviewIntervalId = setInterval(showNextReview, 6000); // Change image every 6 seconds (adjust as needed)
}

function stopReviewCycle() {
    clearInterval(reviewIntervalId);
}

startReviewCycle()