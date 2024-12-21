// Initialize EmailJS with your User ID (replace with your actual User ID from EmailJS dashboard)
emailjs.init("bOVpgHgObeW3RlVTs");

// Function to send email
function sendEmail() {
  // Prepare data for email template
  const templateParams = {
    from_name: document.getElementById("from_name").value, // Example: Get value from input field
    to_name: document.getElementById("to_name").value, // Example: Get value from input field
    message: document.getElementById("message").value, // Example: Get value from textarea
    reply_to: document.getElementById("reply_to").value, // Example: Get email from input
  };

  // Send the email using EmailJS
  emailjs.send("service_new4e2f", "template_d7q2hyl", templateParams)
    .then(function(response) {
      // On success
      console.log('Success:', response);
      alert("Email sent successfully!");
    }, function(error) {
      // On failure
      console.log('Failed:', error);
      alert("Failed to send email. Please try again later.");
    });
}

// Event listener to trigger send email function (e.g., on form submission)
document.getElementById("emailForm").addEventListener("submit", function(event) {
  event.preventDefault(); // Prevent the default form submission
  sendEmail(); // Call the function to send the email
});
