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
    {
        name: "markmasters",
        rating: 9,
        comment: "Played at Spiel. Fun game with a nice mechanic that allows either to pick first or grants money.",
        link: "https://boardgamegeek.com/user/markmasters",
    },
    {
        name: "oldmartijntje",
        rating: 10,
        comment: "Awesome game, fun for all ages.",
        link: "https://boardgamegeek.com/boardgame/356630/adventure-land/ratings#:~:text=10-,oldmartijntje,-Oct%202023",
    },
    {
        name: "hollandiase",
        comment: "Wat een leuk spel is dit! Bieden, bluffen, betalen,sparen,setcollection.. er zit van alles in. En daarnaast ook nog eens spannend!",
        link: "https://www.instagram.com/p/CyBzqv1Lm8m/?igshid=MzRlODBiNWFlZA==",
    },
    {
        name: "Brainmaster",
        rating: 9,
        comment: "",
        link: "https://boardgamegeek.com/boardgame/356630/adventure-land/ratings#:~:text=9-,Brainmaster,-Sep%202023",
    },
    {
        name: "de Beek",
        rating: 8,
        comment: "",
        link: "https://boardgamegeek.com/boardgame/356630/adventure-land/ratings#:~:text=8-,de%20Beek,-Oct%202023",
    },
    {
        name: "bridgetvh",
        rating: 8,
        comment: "",
        link: "https://boardgamegeek.com/thread/3159354/review-bordspelwereldnl-dutch",
    },
];

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