// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Form validation for the contact form
document.querySelector('form').addEventListener('submit', function (e) {
    e.preventDefault(); // Prevent form submission to see the validation in action

    const name = document.querySelector('input[name="name"]').value.trim();
    const email = document.querySelector('input[name="email"]').value.trim();
    const message = document.querySelector('textarea[name="message"]').value.trim();

    let errorMessages = [];

    // Basic name validation
    if (name === '') {
        errorMessages.push('Name is required.');
    }

    // Basic email validation
    if (email === '') {
        errorMessages.push('Email is required.');
    } else if (!validateEmail(email)) {
        errorMessages.push('Please enter a valid email address.');
    }

    // Basic message validation
    if (message === '') {
        errorMessages.push('Message is required.');
    }

    // Display errors or submit the form
    if (errorMessages.length > 0) {
        alert(errorMessages.join('\n'));
    } else {
        alert('Form submitted successfully!');
        // Here you can actually submit the form, e.g., using AJAX or simply uncomment the next line:
        // this.submit();
    }
});

// Email validation function using a regular expression
function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}
