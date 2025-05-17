// Get the form element
const form = document.getElementById('feedbackForm');

// Listen for form submission
form.addEventListener('submit', function(event) {
  event.preventDefault(); // Stop page reload

  // Get input values
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const comments = document.getElementById('comments').value;

  // Show values in alert
  alert(`Thank you for your message!\n\nName: ${name}\nEmail: ${email}\nMessage: ${comments}`);
});