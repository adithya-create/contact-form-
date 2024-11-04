// Handle form submission
document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent page reload
  
    const statusMessage = document.getElementById("status-message");
    statusMessage.textContent = "Sending...";
  
    const formData = {
      user_name: document.getElementById("name").value,
      user_email: document.getElementById("email").value,
      message: document.getElementById("message").value,
    };
  
    emailjs.send("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", formData)
      .then(() => {
        statusMessage.textContent = "Message sent successfully!";
        statusMessage.style.color = "green";
        document.getElementById("contact-form").reset();
      })
      .catch(() => {
        statusMessage.textContent = "Failed to send message. Please try again.";
        statusMessage.style.color = "red";
      });
  });
  