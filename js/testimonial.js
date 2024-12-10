let menu = document.querySelector('.header .menu');

document.querySelector('#menu-btn').onclick = () =>{
    menu.classList.toggle('active');
}

window.onscroll = () => {
    menu.classList.remove('active');
}

// Select form, feedback status, and testimonials container elements
const feedbackForm = document.getElementById('feedbackForm');
const feedbackStatus = document.getElementById('feedback-status');
const starRating = document.querySelectorAll('.star-rating span');
const starValueInput = document.getElementById('starValue');
const testimonialsContainer = document.querySelector('.testimonials');

// Add event listener for form submission
feedbackForm.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission

    // Get form inputs
    const clientName = document.getElementById('clientName').value.trim();
    const clientFeedback = document.getElementById('clientFeedback').value.trim();
    const starRatingValue = starValueInput.value;

    // Validate form fields
    if (!validateForm(clientName, clientFeedback, starRatingValue)) {
        feedbackStatus.style.color = 'red';
        feedbackStatus.textContent = 'Please fill in all fields and select a rating.';
        return;
    }

    // Add new testimonial to the list
    addTestimonial(clientName, clientFeedback, starRatingValue);

    // Show success message
    feedbackStatus.style.color = 'green';
    feedbackStatus.textContent = 'Thank you for your feedback! Your testimonial has been added.';

    // Reset form fields
    feedbackForm.reset();
    resetStars(); // Reset star selection
});

// Function to validate form fields
function validateForm(clientName, clientFeedback, starRatingValue) {
    if (clientName === '' || clientFeedback === '' || starRatingValue === '0') {
        return false;
    }
    return true;
}

// Function to add a new testimonial to the testimonials section
function addTestimonial(name, feedback, rating) {
    // Create a new testimonial div
    const newTestimonial = document.createElement('div');
    newTestimonial.classList.add('testimonial');

    // Create feedback paragraph
    const feedbackPara = document.createElement('p');
    feedbackPara.classList.add('feedback');
    feedbackPara.textContent = `"${feedback}"`;

    // Create client name paragraph
    const clientNamePara = document.createElement('p');
    clientNamePara.classList.add('client-name');
    clientNamePara.textContent = `- ${name}`;

    // Create stars div for rating
    const starsDiv = document.createElement('div');
    starsDiv.classList.add('stars');
    starsDiv.innerHTML = getStarRatingHTML(rating); // Generate stars based on rating

    // Append feedback, client name, and stars to the new testimonial div
    newTestimonial.appendChild(feedbackPara);
    newTestimonial.appendChild(clientNamePara);
    newTestimonial.appendChild(starsDiv);

    // Append the new testimonial to the testimonials container
    testimonialsContainer.appendChild(newTestimonial);
}

// Function to generate star rating HTML based on the rating value
function getStarRatingHTML(rating) {
    let starsHTML = '';
    for (let i = 0; i < 5; i++) {
        starsHTML += i < rating ? '★' : '☆'; // Add filled stars for the rating, empty stars for the rest
    }
    return `<span>${starsHTML}</span>`;
}

// Star rating functionality
starRating.forEach((star, index) => {
    star.addEventListener('click', function() {
        resetStars(); // Reset stars before selecting new ones
        selectStars(index + 1); // Select stars up to the clicked one
        starValueInput.value = index + 1; // Set hidden input value for form
    });
});

// Reset star colors
function resetStars() {
    starRating.forEach(star => star.classList.remove('selected'));
}

// Select stars up to the clicked one
function selectStars(rating) {
    starRating.forEach((star, index) => {
        if (index < rating) {
            star.classList.add('selected');
        }
    });
}
