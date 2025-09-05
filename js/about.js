// Feedback Form Interactive Submission
document.addEventListener('DOMContentLoaded', function() {
  const form = document.querySelector('main');
  const submitBtn = document.querySelector('button[type="submit"]');

  if(submitBtn){
    submitBtn.addEventListener('click', function(e) {
      e.preventDefault();
      // Collect form fields
      const help = document.getElementById('Help');
      const name = document.getElementById('name');
      const email = document.getElementById('email');
      const comments = document.getElementById('comments');
      // Simple validation
      if(!help.value || !name.value.trim() || !email.value.trim()) {
        alert("Please fill in all required fields.");
        return;
      }
      if(!/^[^@]+@[^@]+\.[^@]+$/.test(email.value.trim())) {
        alert("Please enter a valid email address.");
        return;
      }
      // Show a styled popup (imitating Zomato’s feedback)
      const popup = document.createElement('div');
      popup.textContent = "Thank you for your feedback!";
      popup.style.position = 'fixed';
      popup.style.top = '20%';
      popup.style.left = '50%';
      popup.style.transform = 'translate(-50%, -50%)';
      popup.style.background = '#cb202d';
      popup.style.color = '#fff';
      popup.style.padding = '36px 56px';
      popup.style.borderRadius = '18px';
      popup.style.boxShadow = '0 4px 40px rgba(203,32,45,0.18)';
      popup.style.fontWeight = 'bold';
      popup.style.fontSize = '22px';
      popup.style.zIndex = '99999';
      document.body.appendChild(popup);
      setTimeout(() => popup.remove(), 1900);
      // Optionally, reset fields
      help.value = '';
      name.value = '';
      email.value = '';
      comments.value = '';
    });
  }
});
