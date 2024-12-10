let menu = document.querySelector('.header .menu');

document.querySelector('#menu-btn').onclick = () =>{
    menu.classList.toggle('active');
}

window.onscroll = () => {
    menu.classList.remove('active');
}

// Select the form and error message container
const loginForm = document.getElementById('loginForm');
const errorMessage = document.getElementById('errorMessage');

// Add event listener for form submission
loginForm.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting by default

    // Get the username and password values
    const username = document.getElementById('username').value.trim();
    const password = document.getElementById('password').value.trim();

    // Clear any previous error messages
    errorMessage.textContent = '';

    // Validate form fields
    if (username === '' || password === '') {
        errorMessage.textContent = 'Please enter both username and password.';
        return;
    }

    // If validation passes, perform login logic (this is just a simulation)
    if (username === 'admin' && password === 'password') {
        alert('Login successful!');
        // You can redirect or process further here
    } else {
        errorMessage.textContent = 'Invalid username or password.';
    }
});

// Select the form and error message container
const registerForm = document.getElementById('registerForm');
const registerErrorMessage = document.getElementById('registerErrorMessage');

// Add event listener for form submission
registerForm.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting by default

    // Get values from the form fields
    const fullname = document.getElementById('fullname').value.trim();
    const email = document.getElementById('email').value.trim();
    const username = document.getElementById('username').value.trim();
    const password = document.getElementById('password').value.trim();
    const confirmPassword = document.getElementById('confirmPassword').value.trim();

    // Clear any previous error messages
    registerErrorMessage.textContent = '';

    // Validate form fields
    if (fullname === '' || email === '' || username === '' || password === '' || confirmPassword === '') {
        registerErrorMessage.textContent = 'Please fill out all fields.';
        return;
    }

    // Check if passwords match
    if (password !== confirmPassword) {
        registerErrorMessage.textContent = 'Passwords do not match. Please try again.';
        return;
    }
    // Simulate a successful registration process
    alert('Registration successful!');
    // You can add logic here to send the form data to a server or redirect the user
});

// Simulated blog posts data
const blogPosts = [
    {
        title: 'How to Invest in Multifamily Properties',
        excerpt: 'Learn key strategies and best practices for investing in multifamily real estate to grow your portfolio.',
        link: '#'
    },
    {
        title: 'Top Land Investment Strategies',
        excerpt: 'Discover the most effective strategies for investing in land and maximizing your return on investment.',
        link: '#'
    },
    {
        title: 'Property Management Tips for Success',
        excerpt: 'Effective property management strategies that every investor should know to maximize returns.',
        link: '#'
    }
];
// Function to display blog posts dynamically
function displayBlogPosts() {
    const blogSection = document.getElementById('blogSection');
    
    blogPosts.forEach(post => {
        // Create a new div for each blog post
        const postDiv = document.createElement('div');
        postDiv.classList.add('blog-post');

        // Create the post title
        const postTitle = document.createElement('h4');
        postTitle.textContent = post.title;
        
        // Create the post excerpt
        const postExcerpt = document.createElement('p');
        postExcerpt.textContent = post.excerpt;

        // Create the 'Read More' link
        const postLink = document.createElement('a');
        postLink.href = post.link;
        postLink.textContent = 'Read More';

        // Append the elements to the blog post div
        postDiv.appendChild(postTitle);
        postDiv.appendChild(postExcerpt);
        postDiv.appendChild(postLink);

        // Append the blog post to the blog section
        blogSection.appendChild(postDiv);
    });
}
// Call the function to load the blog posts
displayBlogPosts();



//contact page
// Select form and form-status elements
const form = document.getElementById('contactForm');
const formStatus = document.getElementById('form-status');

// Add event listener to handle form submission
form.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission

    // Validate form inputs
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();
    
    if (!validateForm(name, email, message)) {
        formStatus.style.color = 'red';
        formStatus.textContent = 'Please fill in all fields correctly.';
        return;
    }

    // If valid, show success message
    formStatus.style.color = 'green';
    formStatus.textContent = 'Thank you for your message! We will get back to you shortly.';
    
    // Reset form fields
    form.reset();
});

// Function to validate form fields
function validateForm(name, email, message) {
    // Check if all fields are filled
    if (name === '' || email === '' || message === '') {
        return false;
    }

    // Validate email format using a regular expression
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        return false;
    }

    return true;
}
//contact page ends
