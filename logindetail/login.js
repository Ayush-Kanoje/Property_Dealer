document.addEventListener('DOMContentLoaded', function() {
    // Form validation logic
    const loginForm = document.querySelector('.credentials-form');
    const emailField = document.getElementById('email-field');
    const passwordField = document.getElementById('password-field');
    const loginButton = document.querySelector('.primary-login-button');
    
    loginButton.addEventListener('click', function(event) {
        event.preventDefault(); // Prevent actual form submission
        
        let isFormValid = true;
        
        // Validate email
        if (!emailField.value || !emailField.value.includes('@')) {
            emailField.style.borderColor = '#ff5a5f'; // Highlight invalid field
            isFormValid = false;
        } else {
            emailField.style.borderColor = '#ddd'; // Reset border color
        }
        
        // Validate password
        if (!passwordField.value || passwordField.value.length < 6) {
            passwordField.style.borderColor = '#ff5a5f'; // Highlight invalid field
            isFormValid = false;
        } else {
            passwordField.style.borderColor = '#ddd'; // Reset border color
        }
        
        if (isFormValid) {
            // Placeholder for form submission
            console.log('Form is valid and ready to be submitted.');
            alert('Login successful!');
        }
    });
    
    // Slider navigation controls
    const prevArrow = document.querySelector('.slider-arrow.prev');
    const nextArrow = document.querySelector('.slider-arrow.next');
    
    prevArrow.addEventListener('click', function() {
        console.log('Navigate to previous item.');
        // Add functionality to navigate slider
    });
    
    nextArrow.addEventListener('click', function() {
        console.log('Navigate to next item.');
        // Add functionality to navigate slider
    });
    
    // Google Sign-In button interaction
    const googleButton = document.querySelector('.google-signin-button');
    
    googleButton.addEventListener('click', function() {
        console.log('Google Sign-In initiated.');
        // Add Google OAuth logic here
        alert('Redirecting to Google Sign-In...');
    });
});