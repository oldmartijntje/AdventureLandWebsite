const galleryImage = document.getElementById('galleryImage');
const prevImageButton = document.getElementById('prevButton');
const nextImageButton = document.getElementById('nextButton');
const prevReviewButton = document.getElementById('prevReviewButton');
const nextReviewButton = document.getElementById('nextReviewButton');
const jsVersionElement = document.getElementById('jsVersion');
jsVersionElement.innerHTML = "v1.0.0";
const dataVersionElement = document.getElementById('dataVersion');
dataVersionElement.innerHTML = dataVersion;

// Import the variables from data.js
// import { reviews, imageUrls } from "./data.js";

let currentIndex = 0;
let imageIntervalId;
let reviewIntervalId;
let currentReviewIndex = 0;
var language = localStorage.getItem("language");
if (language == null) {
    language = "NL";
    localStorage.setItem("language", language);
}

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

function startImageCycle() {
    imageIntervalId = setInterval(nextImage, 3000);
}

function stopImageCycle() {
    clearInterval(imageIntervalId);
    gtag('event', 'button_click', {
        'event_category': 'Button Clicks',
        'event_label': 'navigated images',
    });
}

function setLanguage(language) {
    localStorage.setItem("language", language);
    setTranslationsOnElements(language);
}

function displayReviews() {
    const reviewsContainer = document.getElementById("reviews-container");
    const review = reviews[currentReviewIndex];

    const reviewElement = document.createElement("div");
    reviewElement.classList.add("review");

    if (review.image) {
        const imageElement = document.createElement("img");
        imageElement.classList.add("review-image");
        imageElement.src = review.image;
        reviewElement.appendChild(imageElement);
    } else {
        const imageElement = document.createElement("img");
        imageElement.classList.add("review-image");
        imageElement.src = "assets/default.jpg";
        reviewElement.appendChild(imageElement);
    }

    const reviewInfo = document.createElement("div");
    reviewInfo.classList.add("review-info");
    reviewInfo.innerHTML = `
    <div class="review-name">${review.name}</div>
    `;

    if (review.rating) {
        reviewInfo.innerHTML += `<div class="review-rating"><span id="T.reviewRating">${getCorrectTranslation("T.reviewRating")}</span>: ${review.rating}</div>
        `;
    }

    if (review.comment) {
        reviewInfo.innerHTML += `<div class="review-comment">${review.comment}</div>`;
    }

    if (review.link) {
        reviewInfo.innerHTML += `
        <a class="review-link" href="${review.link}" target="_blank" id="T.reviewLink">${getCorrectTranslation("T.reviewLink")}</a>
        `;
    }

    reviewElement.appendChild(reviewInfo);
    reviewsContainer.innerHTML = '';
    reviewsContainer.appendChild(reviewElement);
}

function showNextReview() {
    currentReviewIndex = (currentReviewIndex + 1) % reviews.length;
    displayReviews();
}

function showPrevReview() {
    currentReviewIndex = (currentReviewIndex - 1 + reviews.length) % reviews.length;
    displayReviews();
}

function startReviewCycle() {
    reviewIntervalId = setInterval(showNextReview, 6000);
}

function stopReviewCycle() {
    gtag('event', 'button_click', {
        'event_category': 'Button Clicks',
        'event_label': 'navigated reviews',
    });
    clearInterval(reviewIntervalId);
}

function setTranslationsOnElements(language) {
    for (let key in translations[language]) {
        element = document.getElementById(key);
        if (element != null) {
            element.innerHTML = translations[language][key];
        }
    }
}

function getCorrectTranslation(key) {
    var language = localStorage.getItem("language");
    return translations[language][key];
}

nextImageButton.addEventListener('click', nextImage);
prevImageButton.addEventListener('click', prevImage);
prevImageButton.addEventListener('click', stopImageCycle);
nextImageButton.addEventListener('click', stopImageCycle);

nextReviewButton.addEventListener('click', showNextReview);
prevReviewButton.addEventListener('click', showPrevReview);
nextReviewButton.addEventListener('click', stopReviewCycle);
prevReviewButton.addEventListener('click', stopReviewCycle);

displayReviews();
startReviewCycle();
startImageCycle();
setTranslationsOnElements(language)