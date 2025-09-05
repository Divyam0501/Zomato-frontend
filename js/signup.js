document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('signup-form');
    const closeBtn = document.getElementById('close-btn');
    
    // Close button functionality
    closeBtn.addEventListener('click', () => {
        // Redirect to home page
        window.location.href = 'index.html';
    });

    // Form submission handling
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const name = document.getElementById('Name').value;
        const email = document.getElementById('email').value;
        const terms = document.getElementById('terms').checked;

        // Basic validation
        if (!name || !email || !terms) {
            alert('Please fill in all fields and accept the terms');
            return;
        }

        // Email validation
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(email)) {
            alert('Please enter a valid email address');
            return;
        }

        // If validation passes, you can handle the form submission here
        console.log('Form submitted:', { name, email, terms });
        
        // Clear form
        form.reset();
        
        // Redirect to home page after successful submission
        alert('Account created successfully!');
        window.location.href = 'index.html';
    });
});