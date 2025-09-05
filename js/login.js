document.addEventListener("DOMContentLoaded", function () {
    const loginForm = document.getElementById("login-form");
    const closeBtn = document.getElementById("close-btn");

    // Add Send OTP Button and message div dynamically
    const sendOtpDiv = document.createElement('div');
    sendOtpDiv.classList.add('send-otp-section');

    const sendOtpBtn = document.createElement('button');
    sendOtpBtn.type = 'button';
    sendOtpBtn.id = 'send-otp-btn';
    sendOtpBtn.textContent = 'Send OTP';

    sendOtpDiv.appendChild(sendOtpBtn);
    loginForm.appendChild(sendOtpDiv);

    const messageDiv = document.createElement('div');
    messageDiv.id = 'message';
    loginForm.appendChild(messageDiv);

    // Handle close button
    closeBtn.addEventListener('click', function () {
        loginForm.style.display = 'none';
    });

    // Validate mobile number (simple example: 10 digits)
    function isValidMobile(mobile) {
        return /^[6-9]\d{9}$/.test(mobile);
    }

    // Handle Send OTP click
    sendOtpBtn.addEventListener('click', function () {
        const mobileInput = document.getElementById('mobile');
        const mobileValue = mobileInput.value.trim();

        if (!isValidMobile(mobileValue)) {
            messageDiv.textContent = "Please enter a valid 10-digit mobile number starting with 6-9.";
            messageDiv.style.color = "#e74c3c";
            return;
        }

        messageDiv.textContent = "OTP has been sent to " + mobileValue + ". (Simulated)";
        messageDiv.style.color = "#27ae60";
        sendOtpBtn.disabled = true;

        // Simulate OTP resend after 15 seconds
        setTimeout(() => {
            sendOtpBtn.disabled = false;
            messageDiv.textContent = "";
        }, 15000);
    });
});
document.addEventListener("DOMContentLoaded", function () {
    const loginForm = document.getElementById("login-form");
    const closeBtn = document.getElementById("close-btn");

    // Close button: Redirect to homepage
    closeBtn.addEventListener('click', function () {
        window.location.href = 'index.html'; // Change '/' to your actual home page path if needed
    });

    // ... rest of your existing code for OTP and validation
});
