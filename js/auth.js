// Select elements
const loginForm = document.getElementById("loginForm");
const registerForm = document.getElementById("registerForm");
const errorMessage = document.getElementById("errorMessage");
const registerErrorMessage = document.getElementById("registerErrorMessage");

// Mock functions to simulate backend interaction
function mockLogin(username, password) {
    // Replace this with real authentication API call
    return username === "testUser" && password === "password123";
}

function mockRegister(fullname, email, username, password, confirmPassword) {
    // Replace this with a real registration API call
    return password === confirmPassword;
}

// Login form submission event listener
if (loginForm) {
    loginForm.addEventListener("submit", function(event) {
        event.preventDefault();
        const username = document.getElementById("username").value;
        const password = document.getElementById("password").value;

        // Simulate login process
        if (mockLogin(username, password)) {
            window.location.href = "home.html"; // Redirect to home/dashboard
        } else {
            errorMessage.textContent = "Invalid username or password. Please try again.";
        }
    });
}

// Register form submission event listener
if (registerForm) {
    registerForm.addEventListener("submit", function(event) {
        event.preventDefault();
        const fullname = document.getElementById("fullname").value;
        const email = document.getElementById("email").value;
        const username = document.getElementById("username").value;
        const password = document.getElementById("password").value;
        const confirmPassword = document.getElementById("confirmPassword").value;

        // Simulate registration process
        if (mockRegister(fullname, email, username, password, confirmPassword)) {
            window.location.href = "login.html"; // Redirect to login page
        } else {
            registerErrorMessage.textContent = "Passwords do not match. Please try again.";
        }
    });
}